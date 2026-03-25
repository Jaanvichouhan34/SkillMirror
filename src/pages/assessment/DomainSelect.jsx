import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import { getProgress } from '../../utils/progressManager';

const domains = [
  { key: 'dsa',      label: 'Data Structures & Algorithms', icon: '🧠', color: '#4f9cf9', shadow: 'rgba(79,156,249,0.4)' },
  { key: 'ml',       label: 'Machine Learning',             icon: '🤖', color: '#a855f7', shadow: 'rgba(168,85,247,0.4)' },
  { key: 'webdev',   label: 'Web Development',              icon: '💻', color: '#22c55e', shadow: 'rgba(34,197,94,0.4)'  },
  { key: 'dbms',     label: 'Database Management',          icon: '🗄️', color: '#f97316', shadow: 'rgba(249,115,22,0.4)' },
  { key: 'os',       label: 'Operating Systems',            icon: '⚙️', color: '#ef4444', shadow: 'rgba(239,68,68,0.4)'  },
  { key: 'networks', label: 'Computer Networks',            icon: '🌐', color: '#06b6d4', shadow: 'rgba(6,182,212,0.4)'  },
];

const DomainSelect = () => {
  const navigate = useNavigate();
  const { user } = useAuth();
  const progress = getProgress(user?.email || 'guest');

  return (
    <div className="container mx-auto px-6 py-20 max-w-5xl">
      <div className="text-center mb-16">
        <h1 className="text-5xl md:text-6xl font-syne font-extrabold mb-4">
          Choose a <span className="gradient-text">Domain</span>
        </h1>
        <p className="text-text-secondary text-lg">10 levels per domain. 8/10 correct to advance. No shortcuts.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {domains.map((domain, i) => {
          const dp = progress[domain.key];
          const levelsComplete = Object.values(dp.scores).filter(s => s.passed).length;

          return (
            <motion.div
              key={domain.key}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.08 }}
              onClick={() => navigate(`/assessment/levels/${domain.key}`)}
              className="glass-card p-8 cursor-pointer flex flex-col gap-6 hover:-translate-y-2 transition-all duration-300 group"
              style={{ '--domain-color': domain.color }}
            >
              {/* Icon */}
              <div
                className="w-16 h-16 rounded-2xl flex items-center justify-center text-3xl"
                style={{ background: `${domain.color}22`, boxShadow: `0 0 20px ${domain.shadow}` }}
              >
                {domain.icon}
              </div>

              {/* Label */}
              <div className="space-y-1">
                <h3 className="text-xl font-bold group-hover:text-white transition-colors">{domain.label}</h3>
                <p className="text-text-secondary text-sm">Level {dp.currentLevel} / 10 reached</p>
              </div>

              {/* Progress bar */}
              <div>
                <div className="flex justify-between text-xs font-bold text-text-secondary mb-2">
                  <span>{levelsComplete} levels passed</span>
                  <span>{levelsComplete * 10}%</span>
                </div>
                <div className="h-2 rounded-full bg-white/10 overflow-hidden">
                  <div
                    className="h-full rounded-full transition-all duration-700"
                    style={{ width: `${levelsComplete * 10}%`, background: domain.color }}
                  />
                </div>
              </div>

              {/* CTA */}
              <div
                className="mt-auto text-sm font-bold flex items-center gap-2"
                style={{ color: domain.color }}
              >
                {levelsComplete === 0 ? 'Start Now →' : levelsComplete === 10 ? '✅ Completed' : 'Continue →'}
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default DomainSelect;
