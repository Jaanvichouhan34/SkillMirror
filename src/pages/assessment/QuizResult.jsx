import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate, useParams, useLocation } from 'react-router-dom';

const domainColors = { dsa: '#4f9cf9', ml: '#a855f7', webdev: '#22c55e', dbms: '#f97316', os: '#ef4444', networks: '#06b6d4' };
const domainLabels = { dsa: 'DSA', ml: 'Machine Learning', webdev: 'Web Dev', dbms: 'DBMS', os: 'Operating Systems', networks: 'Networks' };

const QuizResult = () => {
  const { domain, level } = useParams();
  const navigate = useNavigate();
  const location = useLocation();
  const { score = 0, total = 10, passed = false, percent = 0 } = location.state || {};
  const color = domainColors[domain] || '#4f9cf9';
  const nextLevel = Number(level) + 1;

  return (
    <div className="container mx-auto px-6 py-20 max-w-2xl text-center">
      <motion.div
        initial={{ opacity: 0, scale: 0.85 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, type: 'spring' }}
        className="glass-card p-12 flex flex-col items-center gap-8"
      >
        {/* Pass/Fail Icon */}
        <div
          className="w-28 h-28 rounded-full flex items-center justify-center text-5xl"
          style={{
            background: passed ? 'rgba(74,222,128,0.15)' : 'rgba(239,68,68,0.15)',
            boxShadow: passed ? '0 0 40px rgba(74,222,128,0.4)' : '0 0 40px rgba(239,68,68,0.4)',
            border: `3px solid ${passed ? '#4ade80' : '#ef4444'}`
          }}
        >
          {passed ? '🎉' : '😤'}
        </div>

        {/* Status */}
        <div>
          <h1 className="text-4xl font-syne font-extrabold mb-2">
            {passed ? 'Level Passed!' : 'Not Quite!'}
          </h1>
          <p className="text-text-secondary text-lg">
            {domainLabels[domain]} · Level {level}
          </p>
        </div>

        {/* Score circle */}
        <div className="relative">
          <svg width="160" height="160" viewBox="0 0 160 160">
            <circle cx="80" cy="80" r="70" fill="none" stroke="rgba(255,255,255,0.08)" strokeWidth="12"/>
            <circle
              cx="80" cy="80" r="70" fill="none"
              stroke={passed ? '#4ade80' : '#ef4444'}
              strokeWidth="12"
              strokeLinecap="round"
              strokeDasharray={`${(percent / 100) * 439.82} 439.82`}
              transform="rotate(-90 80 80)"
              style={{ transition: 'stroke-dasharray 1s ease' }}
            />
          </svg>
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <span className="text-4xl font-syne font-extrabold">{score}/{total}</span>
            <span className="text-sm text-text-secondary">{Math.round(percent)}%</span>
          </div>
        </div>

        {/* Message */}
        <p className="text-text-secondary max-w-sm">
          {passed
            ? nextLevel <= 10
              ? `Excellent! You've unlocked Level ${nextLevel}. Keep pushing!`
              : '🏆 You have completed all 10 levels in this domain!'
            : 'You need 80% (8/10) to pass. Review the concepts and try again!'
          }
        </p>

        {/* Buttons */}
        <div className="flex flex-wrap justify-center gap-4 w-full">
          {passed && nextLevel <= 10 && (
            <button
              onClick={() => navigate(`/assessment/quiz/${domain}/${nextLevel}`)}
              className="px-8 py-3 rounded-2xl font-bold text-sm transition-all hover:opacity-90"
              style={{ background: color, color: '#000' }}
            >
              Next Level →
            </button>
          )}
          <button
            onClick={() => navigate(`/assessment/quiz/${domain}/${level}`)}
            className="px-8 py-3 rounded-2xl font-bold text-sm border-2 border-white/20 hover:border-white/40 transition-all"
          >
            {passed ? 'Retry Level' : 'Try Again'}
          </button>
          <button
            onClick={() => navigate(`/assessment/levels/${domain}`)}
            className="px-8 py-3 rounded-2xl font-bold text-sm border-2 border-white/20 hover:border-white/40 transition-all"
          >
            All Levels
          </button>
          <button
            onClick={() => navigate('/assessment')}
            className="px-8 py-3 rounded-2xl font-bold text-sm border-2 border-white/20 hover:border-white/40 transition-all"
          >
            All Domains
          </button>
        </div>
      </motion.div>
    </div>
  );
};

export default QuizResult;
