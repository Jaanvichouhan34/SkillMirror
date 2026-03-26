import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useAuth } from '../../context/AuthContext';
import { getXP, getLevelName } from '../../utils/xpManager';
import Card from '../../components/ui/Card';
import { BookOpen, Clock, BarChart, ChevronRight, Trophy, Star, Zap, Plus } from 'lucide-react';
import { ALL_BADGES } from '../../data/badges';

const PATHS = [
  {
    id: 'python',
    icon: '🐍',
    color: '#3b82f6',
    title: 'Python Programming',
    subtitle: 'From print Hello World to Machine Learning',
    modules: 15,
    duration: '25 hours',
    difficulty: 'Beginner Friendly',
    totalLessons: 45
  },
  {
    id: 'javascript',
    icon: '⚡',
    color: '#f59e0b',
    title: 'JavaScript Mastery',
    subtitle: 'From DOM basics to React and APIs',
    modules: 15,
    duration: '30 hours',
    difficulty: 'Beginner Friendly',
    totalLessons: 50
  },
  {
    id: 'cpp',
    icon: '⚙️',
    color: '#6366f1',
    title: 'C++ Programming',
    subtitle: 'From syntax to Data Structures in C++',
    modules: 15,
    duration: '35 hours',
    difficulty: 'Intermediate',
    totalLessons: 60
  },
  {
    id: 'webdev',
    icon: '🌐',
    color: '#10b981',
    title: 'Web Development',
    subtitle: 'HTML to CSS to JavaScript to React',
    modules: 15,
    duration: '40 hours',
    difficulty: 'Beginner to Advanced',
    totalLessons: 75
  },
  {
    id: 'sql',
    icon: '🗄️',
    color: '#00f2ff',
    title: 'SQL & Database Mastery',
    subtitle: 'Master relational data and query optimization',
    modules: 15,
    duration: '20 hours',
    difficulty: 'Beginner to Advanced',
    totalLessons: 40
  },
  {
    id: 'java',
    icon: '☕',
    color: '#ED8B00',
    title: 'Java Masterclass',
    subtitle: 'Enterprise apps with Java and Spring',
    modules: 15,
    duration: '45 hours',
    difficulty: 'Intermediate',
    totalLessons: 70
  },
  {
    id: 'c',
    icon: '🔤',
    color: '#a8b9cc',
    title: 'C Systems Programming',
    subtitle: 'Level up with pointers and memory control',
    modules: 15,
    duration: '30 hours',
    difficulty: 'Intermediate to Advanced',
    totalLessons: 60
  },
  {
    id: 'dsa',
    icon: '🏆',
    color: '#f87171',
    title: 'DSA Masterclass',
    subtitle: 'Competitive programming & FAANG interview prep',
    modules: 30,
    duration: '100 hours',
    difficulty: 'Intermediate to Advanced',
    totalLessons: 150
  }
];


const LearnHome = () => {
  const { user } = useAuth();
  const navigate = useNavigate();

  if (!user) {
    return (
      <div className="container mx-auto px-6 py-32 text-center h-[70vh] flex flex-col items-center justify-center gap-6">
        <div className="w-20 h-20 rounded-full bg-surface border border-card-border flex items-center justify-center text-accent-blue">
          <BookOpen size={40} />
        </div>
        <h2 className="text-4xl font-syne font-bold">Start Your Journey</h2>
        <p className="text-text-secondary max-w-md">Sign in to track your progress, earn XP, and unlock badges as you master new skills.</p>
        <button 
          onClick={() => window.location.href = '/'} // Or trigger auth modal if possible
          className="px-8 py-3 bg-accent-blue text-white font-bold rounded-xl hover:scale-105 transition-transform"
        >
          Get Started
        </button>
      </div>
    );
  }

  const xpData = getXP(user.email);
  const { totalXP, level, earnedBadges, completedLessons } = xpData;
  const levelName = getLevelName(level);
  const nextLevelProgress = ((totalXP % 500) / 500) * 100;

  const getPathProgress = (pathId) => {
    const prefixMap = {
      python: 'py_',
      javascript: 'js_',
      cpp: 'cpp_',
      webdev: 'web_',
      sql: 'sql_',
      java: 'java_',
      c: 'c_',
      dsa: 'dsa_'
    };
    const prefix = prefixMap[pathId] || '';
    const completedForPath = completedLessons.filter(l => l.startsWith(prefix)).length;
    const path = PATHS.find(p => p.id === pathId);
    return Math.min(Math.round((completedForPath / path.totalLessons) * 100), 100);
  };

  return (
    <div className="container mx-auto px-6 py-24 flex flex-col gap-16">
      
      {/* Top Section - User XP Card */}
      <Card className="p-8 relative overflow-hidden bg-gradient-to-br from-surface to-surface/50 border-accent-blue/20">
        <div className="absolute top-0 right-0 w-64 h-64 bg-accent-blue/5 blur-3xl rounded-full -mr-20 -mt-20" />
        
        <div className="flex flex-col md:flex-row gap-10 items-center relative z-10">
          <div className="relative">
            <div className="w-28 h-28 rounded-2xl bg-gradient-main flex items-center justify-center text-4xl font-syne font-black text-white shadow-glow">
              {level}
            </div>
            <div className="absolute -bottom-3 -right-3 px-3 py-1 bg-accent-purple text-white text-[10px] font-black uppercase tracking-tighter rounded-full border-2 border-surface shadow-xl">
              LVL
            </div>
          </div>
          
          <div className="flex-1 w-full space-y-6">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
              <div>
                <h2 className="text-sm font-black text-accent-blue uppercase tracking-[0.3em] mb-1">Current Status</h2>
                <h3 className="text-4xl font-syne font-extrabold">{levelName}</h3>
              </div>
              <div className="text-right">
                <p className="text-xs font-bold text-text-secondary uppercase tracking-widest">Total Energy</p>
                <p className="text-3xl font-black gradient-text">{totalXP} XP</p>
              </div>
            </div>
            
            <div className="space-y-2">
              <div className="flex justify-between text-xs font-bold uppercase tracking-wider text-text-secondary px-1">
                <span>Progress to Level {level + 1}</span>
                <span>{Math.round(nextLevelProgress)}%</span>
              </div>
              <div className="h-3 bg-white/5 rounded-full overflow-hidden border border-white/5">
                <motion.div 
                  initial={{ width: 0 }}
                  animate={{ width: `${nextLevelProgress}%` }}
                  transition={{ duration: 1.5, ease: "easeOut" }}
                  className="h-full bg-gradient-to-r from-accent-blue to-accent-purple"
                />
              </div>
            </div>

            <div className="flex items-center gap-4">
              <p className="text-[10px] font-black text-text-secondary uppercase tracking-[0.2em]">Badges Earned:</p>
              <div className="flex items-center gap-2">
                {earnedBadges.length > 0 ? (
                  <>
                    <div className="flex -space-x-2">
                      {earnedBadges.slice(0, 3).map(badgeId => (
                        <div key={badgeId} className="w-9 h-9 rounded-full bg-surface border-2 border-background flex items-center justify-center text-xl shadow-lg ring-1 ring-white/5" title={badgeId}>
                          {ALL_BADGES.find(b => b.id === badgeId)?.icon || '🏅'}
                        </div>
                      ))}
                    </div>
                    {earnedBadges.length > 3 && (
                      <button 
                        onClick={() => navigate('/profile')}
                        className="flex items-center gap-1.5 px-3 py-1.5 bg-white/5 border border-white/10 rounded-full text-[10px] font-black text-accent-blue uppercase tracking-widest hover:bg-white/10 transition-all ml-1"
                      >
                         <Plus size={10} strokeWidth={4} /> {earnedBadges.length - 3} More
                      </button>
                    )}
                  </>
                ) : (
                  <span className="text-[10px] font-bold text-text-secondary italic">No badges yet. Start learning to unlock!</span>
                )}
              </div>
            </div>
          </div>
        </div>
      </Card>

      {/* Paths Section */}
      <section className="space-y-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <h2 className="text-sm font-black text-accent-blue uppercase tracking-[0.3em] mb-2">Curriculum</h2>
            <h3 className="text-4xl font-syne font-extrabold">Choose Your Learning Path</h3>
          </div>
          <p className="text-text-secondary max-w-sm text-sm">Step-by-step tracks designed to take you from total beginner to industry-ready engineer.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {PATHS.map((path, i) => {
            const progress = getPathProgress(path.id);
            return (
              <Card 
                key={path.id} 
                delay={i * 0.1}
                className="group relative overflow-hidden bg-surface/30 border-white/5 hover:border-transparent transition-all duration-500"
              >
                {/* Background Glow on Hover */}
                <div 
                  className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-500"
                  style={{ background: `radial-gradient(circle at center, ${path.color}, transparent)` }}
                />
                
                <div className="relative z-10 space-y-8">
                  <div className="flex items-start justify-between">
                    <div 
                      className="w-16 h-16 rounded-2xl flex items-center justify-center text-4xl shadow-2xl group-hover:scale-110 transition-transform duration-500"
                      style={{ backgroundColor: `${path.color}20`, border: `1px solid ${path.color}40` }}
                    >
                      {path.icon}
                    </div>
                    <div className="text-right">
                      <span className="text-[10px] font-black uppercase tracking-widest text-text-secondary bg-white/5 px-3 py-1 rounded-full border border-white/10">
                        {path.difficulty}
                      </span>
                    </div>
                  </div>

                  <div>
                    <h4 className="text-2xl font-syne font-bold mb-2 group-hover:text-white transition-colors">
                      {path.title}
                    </h4>
                    <p className="text-text-secondary text-sm leading-relaxed">
                      {path.subtitle}
                    </p>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="flex items-center gap-3 text-xs text-text-secondary font-bold">
                      <BookOpen size={14} className="text-accent-blue" />
                      {path.modules} Modules
                    </div>
                    <div className="flex items-center gap-3 text-xs text-text-secondary font-bold">
                      <Clock size={14} className="text-accent-purple" />
                      {path.duration}
                    </div>
                  </div>

                  <div className="space-y-3">
                    <div className="flex justify-between text-[10px] font-black uppercase tracking-widest text-text-secondary">
                      <span>Path Progress</span>
                      <span style={{ color: path.color }}>{progress}%</span>
                    </div>
                    <div className="h-2 bg-white/5 rounded-full overflow-hidden">
                      <motion.div 
                        initial={{ width: 0 }}
                        animate={{ width: `${progress}%` }}
                        transition={{ duration: 1, delay: 0.5 }}
                        className="h-full rounded-full"
                        style={{ backgroundColor: path.color }}
                      />
                    </div>
                  </div>

                  <button 
                    onClick={() => navigate(`/learn/${path.id}`)}
                    className="w-full py-4 rounded-xl font-bold bg-white/5 border border-white/10 group-hover:bg-white group-hover:text-black transition-all duration-300 flex items-center justify-center gap-2"
                  >
                    {progress > 0 ? 'Continue Journey' : 'Begin Path'}
                    <ChevronRight size={18} />
                  </button>
                </div>
              </Card>
            );
          })}
        </div>
      </section>

      {/* Badges Section */}
      <section className="space-y-10 pt-10 border-t border-white/5">
        <div>
          <h2 className="text-sm font-black text-accent-blue uppercase tracking-[0.3em] mb-2">Achievements</h2>
          <h3 className="text-4xl font-syne font-extrabold">Badge Showcase</h3>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
          {ALL_BADGES.map((badge) => {
            const isEarned = earnedBadges.includes(badge.id);
            return (
              <div 
                key={badge.id}
                className={`flex flex-col items-center text-center p-6 rounded-2xl border transition-all duration-500 ${isEarned ? 'bg-accent-blue/5 border-accent-blue/30 shadow-[0_0_20px_rgba(59,130,246,0.1)]' : 'bg-surface/20 border-white/5 grayscale opacity-50'}`}
              >
                <div className={`w-16 h-16 rounded-full flex items-center justify-center text-3xl mb-4 ${isEarned ? 'bg-accent-blue/20 shadow-glow animate-pulse' : 'bg-white/5'}`}>
                  {badge.icon}
                </div>
                <h5 className="font-bold text-sm mb-1">{badge.name}</h5>
                <p className="text-[10px] text-text-secondary leading-tight uppercase tracking-tighter">
                  {badge.desc}
                </p>
              </div>
            );
          })}
        </div>
      </section>

    </div>
  );
};

export default LearnHome;
