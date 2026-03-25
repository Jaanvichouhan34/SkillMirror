import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate, useParams } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import { submitLevelResult } from '../../utils/progressManager';

import dsaQuestions     from '../../data/questions/dsa';
import mlQuestions      from '../../data/questions/ml';
import webdevQuestions  from '../../data/questions/webdev';
import dbmsQuestions    from '../../data/questions/dbms';
import osQuestions      from '../../data/questions/os';
import networksQuestions from '../../data/questions/networks';

const allQuestions = { dsa: dsaQuestions, ml: mlQuestions, webdev: webdevQuestions, dbms: dbmsQuestions, os: osQuestions, networks: networksQuestions };

const domainColors = { dsa: '#4f9cf9', ml: '#a855f7', webdev: '#22c55e', dbms: '#f97316', os: '#ef4444', networks: '#06b6d4' };
const domainLabels = { dsa: 'DSA', ml: 'Machine Learning', webdev: 'Web Dev', dbms: 'DBMS', os: 'Operating Systems', networks: 'Networks' };

// Fischer-Yates shuffle
const shuffle = (arr) => {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
};

const Quiz = () => {
  const { domain, level } = useParams();
  const navigate = useNavigate();
  const { user } = useAuth();
  const color = domainColors[domain] || '#4f9cf9';

  // Load and shuffle questions
  const [questions] = useState(() => shuffle(allQuestions[domain]?.[Number(level)] || []));
  const [currentIdx, setCurrentIdx] = useState(0);
  const [selected, setSelected] = useState(null);
  const [showFeedback, setShowFeedback] = useState(false);
  const [score, setScore] = useState(0);
  const [timeLeft, setTimeLeft] = useState(30);
  const [timerActive, setTimerActive] = useState(true);
  const [answerKey, setAnswerKey] = useState([]); // track correct/wrong

  const current = questions[currentIdx];
  const total = questions.length;
  const progress = ((currentIdx) / total) * 100;

  const handleTimeout = useCallback(() => {
    if (!showFeedback) {
      setSelected(-1); // treat as wrong (no answer)
      setShowFeedback(true);
      setTimerActive(false);
      setAnswerKey(prev => [...prev, false]);
    }
  }, [showFeedback]);

  // Timer
  useEffect(() => {
    if (!timerActive || showFeedback) return;
    if (timeLeft <= 0) { handleTimeout(); return; }
    const t = setTimeout(() => setTimeLeft(t => t - 1), 1000);
    return () => clearTimeout(t);
  }, [timeLeft, timerActive, showFeedback, handleTimeout]);

  const handleSelect = (optIdx) => {
    if (showFeedback) return;
    setSelected(optIdx);
    setShowFeedback(true);
    setTimerActive(false);
    const correct = optIdx === current.correct;
    if (correct) setScore(s => s + 1);
    setAnswerKey(prev => [...prev, correct]);
  };

  const handleNext = () => {
    if (currentIdx + 1 >= total) {
      // Done — submit result
      const finalScore = answerKey.filter(Boolean).length + (selected === current?.correct && !answerKey.some((_, i) => i === currentIdx) ? 1 : 0);
      const result = submitLevelResult(user?.email || 'guest', domain, Number(level), score + (selected === current?.correct ? 1 : 0), total);
      navigate(`/assessment/result/${domain}/${level}`, {
        state: { score: score + (selected === current?.correct ? 1 : 0), total, passed: result.passed, percent: result.percent }
      });
      return;
    }
    setCurrentIdx(i => i + 1);
    setSelected(null);
    setShowFeedback(false);
    setTimeLeft(30);
    setTimerActive(true);
  };

  if (!current) return <div className="text-center py-40 text-text-secondary">No questions found.</div>;

  const timerPct = (timeLeft / 30) * 100;
  const timerColor = timeLeft > 15 ? color : timeLeft > 8 ? '#fbbf24' : '#ef4444';

  return (
    <div className="container mx-auto px-6 py-20 max-w-3xl">
      {/* Header */}
      <div className="flex items-center justify-between mb-8">
        <div>
          <span className="text-text-secondary text-sm font-bold uppercase tracking-widest">{domainLabels[domain]} · Level {level}</span>
        </div>
        <div className="flex items-center gap-3">
          {/* Score badge */}
          <span className="px-4 py-1.5 rounded-full text-sm font-bold" style={{ background: `${color}22`, color }}>
            {score} / {currentIdx} pts
          </span>
          {/* Timer */}
          <div className="relative w-12 h-12">
            <svg className="w-full h-full -rotate-90" viewBox="0 0 36 36">
              <circle cx="18" cy="18" r="15" fill="none" stroke="rgba(255,255,255,0.1)" strokeWidth="3"/>
              <circle
                cx="18" cy="18" r="15" fill="none"
                stroke={timerColor} strokeWidth="3"
                strokeDasharray={`${timerPct} 100`}
                style={{ transition: 'stroke-dasharray 1s linear, stroke 0.3s' }}
              />
            </svg>
            <span className="absolute inset-0 flex items-center justify-center text-sm font-bold" style={{ color: timerColor }}>
              {timeLeft}
            </span>
          </div>
        </div>
      </div>

      {/* Progress bar */}
      <div className="h-2 rounded-full bg-white/10 overflow-hidden mb-10">
        <div
          className="h-full rounded-full transition-all duration-500"
          style={{ width: `${progress}%`, background: color }}
        />
      </div>

      {/* Question */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentIdx}
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -40 }}
          transition={{ duration: 0.25 }}
        >
          {/* Question text */}
          <div className="glass-card p-8 mb-6">
            <div className="text-xs font-bold text-text-secondary mb-3 uppercase tracking-widest">
              Question {currentIdx + 1} of {total}
            </div>
            <h2 className="text-xl md:text-2xl font-bold leading-relaxed">{current.question}</h2>
          </div>

          {/* Options */}
          <div className="space-y-4">
            {current.options.map((opt, i) => {
              let borderColor = 'border-white/10';
              let bg = 'bg-transparent';
              let textColor = '';

              if (showFeedback) {
                if (i === current.correct) {
                  borderColor = 'border-green-400';
                  bg = 'bg-green-500/10';
                  textColor = 'text-green-400';
                } else if (i === selected && selected !== current.correct) {
                  borderColor = 'border-red-400';
                  bg = 'bg-red-500/10';
                  textColor = 'text-red-400';
                }
              } else if (selected === i) {
                borderColor = 'border-white/40';
                bg = 'bg-white/10';
              }

              return (
                <motion.button
                  key={i}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => handleSelect(i)}
                  className={`w-full text-left px-6 py-4 rounded-2xl border-2 ${borderColor} ${bg} ${textColor} font-medium transition-all duration-200 hover:border-white/30 hover:bg-white/5`}
                >
                  <span className="font-bold mr-3 text-text-secondary">{String.fromCharCode(65 + i)}.</span>
                  {opt}
                </motion.button>
              );
            })}
          </div>

          {/* Explanation & Next */}
          {showFeedback && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="mt-6 p-6 rounded-2xl border border-white/10 bg-white/5"
            >
              <p className="text-sm text-text-secondary leading-relaxed">
                <span className="font-bold text-white">Explanation: </span>
                {current.explanation}
              </p>
              <button
                onClick={handleNext}
                className="mt-4 px-6 py-2.5 rounded-xl font-bold text-sm transition-all hover:opacity-90"
                style={{ background: color, color: '#000' }}
              >
                {currentIdx + 1 >= total ? 'See Results →' : 'Next Question →'}
              </button>
            </motion.div>
          )}
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default Quiz;
