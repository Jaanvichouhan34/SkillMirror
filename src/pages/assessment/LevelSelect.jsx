import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate, useParams } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import { getProgress } from '../../utils/progressManager';
import { Lock, CheckCircle2, XCircle, ChevronLeft } from 'lucide-react';

const domainMeta = {
  dsa:      { label: 'DSA',              icon: '🧠', color: '#4f9cf9' },
  ml:       { label: 'Machine Learning', icon: '🤖', color: '#a855f7' },
  webdev:   { label: 'Web Development',  icon: '💻', color: '#22c55e' },
  dbms:     { label: 'Database Mgmt',   icon: '🗄️', color: '#f97316' },
  os:       { label: 'Operating Systems',icon: '⚙️', color: '#ef4444' },
  networks: { label: 'Networks',         icon: '🌐', color: '#06b6d4' },
};

const difficultyLabel = (level) => {
  if (level <= 2) return { label: 'Beginner',  color: '#4ade80' };
  if (level <= 4) return { label: 'Easy',      color: '#86efac' };
  if (level <= 6) return { label: 'Medium',    color: '#fbbf24' };
  if (level <= 8) return { label: 'Hard',      color: '#f97316' };
  return              { label: 'Expert',    color: '#ef4444' };
};

const LevelSelect = () => {
  const { domain } = useParams();
  const navigate = useNavigate();
  const { user } = useAuth();
  const meta = domainMeta[domain] || { label: domain, icon: '📚', color: '#4f9cf9' };
  const progress = getProgress(user?.email || 'guest');
  const dp = progress[domain] || { currentLevel: 1, unlockedLevels: [1], scores: {} };

  return (
    <div className="container mx-auto px-6 py-20 max-w-4xl">
      {/* Back */}
      <button
        onClick={() => navigate('/assessment')}
        className="flex items-center gap-2 text-text-secondary hover:text-white mb-10 transition-colors text-sm font-bold"
      >
        <ChevronLeft size={18} /> Back to Domains
      </button>

      <div className="text-center mb-16">
        <div className="text-5xl mb-4">{meta.icon}</div>
        <h1 className="text-4xl md:text-5xl font-syne font-extrabold mb-2">
          <span style={{ color: meta.color }}>{meta.label}</span> Levels
        </h1>
        <p className="text-text-secondary">Pass 8/10 questions to unlock the next level.</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {Array.from({ length: 10 }, (_, i) => i + 1).map((level) => {
          const unlocked = dp.unlockedLevels.includes(level);
          const scoreData = dp.scores[level];
          const isCurrent = dp.currentLevel === level && unlocked;
          const diff = difficultyLabel(level);

          return (
            <motion.div
              key={level}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: (level - 1) * 0.05 }}
              onClick={() => unlocked && navigate(`/assessment/quiz/${domain}/${level}`)}
              className={`
                glass-card p-6 flex items-center gap-6 transition-all duration-300
                ${unlocked ? 'cursor-pointer hover:-translate-y-1 hover:border-white/20' : 'cursor-not-allowed opacity-50'}
                ${isCurrent ? 'ring-2' : ''}
              `}
              style={isCurrent ? { ringColor: meta.color, boxShadow: `0 0 20px ${meta.color}40` } : {}}
            >
              {/* Level number */}
              <div
                className="w-14 h-14 rounded-2xl flex items-center justify-center text-2xl font-syne font-extrabold flex-shrink-0"
                style={{
                  background: unlocked ? `${meta.color}22` : 'rgba(255,255,255,0.05)',
                  color: unlocked ? meta.color : '#666'
                }}
              >
                {unlocked ? level : <Lock size={20} />}
              </div>

              {/* Info */}
              <div className="flex-1 space-y-1">
                <div className="flex items-center gap-3">
                  <h3 className="font-bold text-lg">Level {level}</h3>
                  {isCurrent && (
                    <span className="text-xs font-bold px-2 py-0.5 rounded-full" style={{ background: `${meta.color}33`, color: meta.color }}>
                      ← Current
                    </span>
                  )}
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-xs font-bold" style={{ color: diff.color }}>{diff.label}</span>
                  <span className="text-xs text-text-secondary">10 questions</span>
                </div>
                {scoreData && (
                  <div className="flex items-center gap-2 text-xs font-bold pt-1">
                    {scoreData.passed
                      ? <><CheckCircle2 size={14} className="text-green-400" /><span className="text-green-400">Passed — {scoreData.score}/10</span></>
                      : <><XCircle size={14} className="text-red-400" /><span className="text-red-400">Failed — {scoreData.score}/10 — Retry</span></>
                    }
                  </div>
                )}
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default LevelSelect;
