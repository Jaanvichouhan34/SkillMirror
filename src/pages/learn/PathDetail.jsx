import React, { useContext, useEffect, useState } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { AuthContext } from '../../context/AuthContext';
import { getXP } from '../../utils/xpManager';
import { pythonCourse } from '../../data/learn/python';
import { javascriptCourse } from '../../data/learn/javascript';
import { cppCourse } from '../../data/learn/cpp';
import { webdevCourse } from '../../data/learn/webdev';
import { sqlCourse } from '../../data/learn/sql';
import { javaCourse } from '../../data/learn/java';
import { cCourse } from '../../data/learn/c';
import { dsaCourse } from '../../data/learn/dsa';
import Card from '../../components/ui/Card';
import { 
  ChevronLeft, 
  ChevronDown, 
  Lock, 
  CheckCircle, 
  BookOpen, 
  Code, 
  Play, 
  Clock, 
  Trophy 
} from 'lucide-react';

const courses = {
  python: pythonCourse,
  javascript: javascriptCourse,
  cpp: cppCourse,
  webdev: webdevCourse,
  sql: sqlCourse,
  java: javaCourse,
  c: cCourse,
  dsa: dsaCourse
};

const PathDetail = () => {
  const { pathId } = useParams();
  const navigate = useNavigate();
  const { user, loading } = useContext(AuthContext);
  const [xpData, setXpData] = useState(null);
  const [course, setCourse] = useState(null);
  const [expandedModule, setExpandedModule] = useState(null);

  useEffect(() => {
    if (loading) return;
    if (!user) {
      navigate('/login');
      return;
    }
    const foundCourse = courses[pathId];
    if (!foundCourse) {
      navigate('/learn');
      return;
    }
    setCourse(foundCourse);
    const data = getXP(user.email);
    setXpData(data);
    
    // Auto-expand first module if not set
    if (foundCourse.modules.length > 0 && !expandedModule) {
      setExpandedModule(foundCourse.modules[0].id);
    }
  }, [user, loading, pathId]);

  if (loading || !course || !xpData) {
    return (
      <div className="min-h-screen bg-[#04050a] flex flex-col items-center justify-center gap-6">
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          className="relative"
        >
          <div className="w-20 h-20 rounded-full border-4 border-white/5 border-t-accent-blue animate-spin shadow-glow shadow-accent-blue/20" />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-10 h-10 rounded-full bg-accent-blue/10 blur-xl animate-pulse" />
          </div>
        </motion.div>
        <motion.p 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-text-secondary font-black uppercase tracking-[0.3em] text-xs animate-pulse"
        >
          Initializing {pathId || 'Path'}...
        </motion.p>
        <style>{`
          @keyframes spin {
            from { transform: rotate(0deg); }
            to { transform: rotate(360deg); }
          }
          .animate-spin {
            animation: spin 1s linear infinite;
          }
        `}</style>
      </div>
    );
  }

  const completedLessons = xpData.completedLessons || [];

  const getModuleProgress = (module) => {
    const total = module.lessons.length;
    const completed = module.lessons.filter(l => completedLessons.includes(l.id)).length;
    return { completed, total, percent: Math.round((completed / total) * 100) };
  };

  const isModuleLocked = (index) => {
    if (index === 0) return false;
    const prevModule = course.modules[index - 1];
    const { completed } = getModuleProgress(prevModule);
    return completed === 0;
  };

  const totalLessons = course.modules.reduce((acc, m) => acc + m.lessons.length, 0);
  const totalCompleted = course.modules.reduce((acc, m) => acc + getModuleProgress(m).completed, 0);
  const overallPercent = Math.round((totalCompleted / totalLessons) * 100);

  return (
    <div className="container mx-auto px-6 py-24 max-w-4xl">
      
      {/* Header */}
      <Link to="/learn" className="inline-flex items-center gap-2 text-text-secondary hover:text-white transition-colors mb-8 group">
        <ChevronLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
        Back to Paths
      </Link>

      <section className="mb-12">
        <div className="flex items-center gap-6 mb-6">
          <div 
            className="w-20 h-20 rounded-2xl flex items-center justify-center text-4xl shadow-glow"
            style={{ backgroundColor: `${course.color}20`, border: `1px solid ${course.color}40` }}
          >
            {course.icon}
          </div>
          <div>
            <h1 className="text-4xl md:text-5xl font-syne font-black text-white mb-2">{course.title}</h1>
            <div className="flex items-center gap-4 text-text-secondary text-sm font-bold">
              <span className="flex items-center gap-1.5"><BookOpen size={16} /> {course.modules.length} Modules</span>
              <span className="flex items-center gap-1.5"><Trophy size={16} /> {course.modules.length * 100} Potential XP</span>
            </div>
          </div>
        </div>

        <div className="space-y-3">
          <div className="flex justify-between text-xs font-black uppercase tracking-widest text-text-secondary">
            <span>Overall Progress</span>
            <span style={{ color: course.color }}>{overallPercent}% Complete</span>
          </div>
          <div className="h-3 bg-white/5 rounded-full overflow-hidden border border-white/5 p-0.5">
            <motion.div 
              initial={{ width: 0 }}
              animate={{ width: `${overallPercent}%` }}
              transition={{ duration: 1, ease: 'easeOut' }}
              className="h-full rounded-full"
              style={{ backgroundColor: course.color }}
            />
          </div>
        </div>
      </section>

      {/* Modules List */}
      <div className="space-y-6">
        {course.modules.map((module, idx) => {
          const locked = isModuleLocked(idx);
          const { completed, total, percent } = getModuleProgress(module);
          const isExpanded = expandedModule === module.id;

          return (
            <div key={module.id} className={`rounded-2xl border transition-all duration-300 overflow-hidden ${locked ? 'bg-white/2 border-white/5 opacity-60' : 'bg-surface/40 border-white/10 hover:border-white/20'}`}>
              
              {/* Module Accordion Header */}
              <button 
                onClick={() => !locked && setExpandedModule(isExpanded ? null : module.id)}
                disabled={locked}
                className="w-full p-6 flex items-center justify-between text-left group"
              >
                <div className="flex items-center gap-6">
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center font-black ${percent === 100 ? 'bg-accent-green/20 text-accent-green' : (locked ? 'bg-white/5 text-text-secondary' : 'bg-white/10 text-white')}`}>
                    {percent === 100 ? <CheckCircle size={24} /> : (locked ? <Lock size={20} /> : `0${idx + 1}`)}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white group-hover:text-accent-blue transition-colors">{module.title}</h3>
                    <p className="text-xs font-bold text-text-secondary uppercase tracking-widest mt-1">
                      {completed}/{total} Lessons Completed • <span className="text-accent-purple">+{module.xpReward} XP</span>
                    </p>
                  </div>
                </div>
                {!locked && (
                  <ChevronDown 
                    size={24} 
                    className={`text-text-secondary transition-transform duration-300 ${isExpanded ? 'rotate-180' : ''}`} 
                  />
                )}
              </button>

              {/* Lessons List */}
              <AnimatePresence>
                {isExpanded && !locked && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="border-t border-white/5"
                  >
                    <div className="p-4 space-y-2">
                      {module.lessons.map((lesson) => {
                        const isDone = completedLessons.includes(lesson.id);
                        return (
                          <div 
                            key={lesson.id}
                            onClick={() => navigate(`/learn/${pathId}/${module.id}/${lesson.id}`)}
                            className="flex items-center justify-between p-4 rounded-xl hover:bg-white/5 cursor-pointer group/lesson transition-all border border-transparent hover:border-white/5"
                          >
                            <div className="flex items-center gap-4">
                              <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${isDone ? 'bg-accent-green/10 text-accent-green' : 'bg-white/5 text-text-secondary group-hover/lesson:bg-accent-blue/10 group-hover/lesson:text-accent-blue'}`}>
                                {isDone ? <CheckCircle size={20} /> : <Play size={18} />}
                              </div>
                              <div>
                                <h4 className={`text-sm font-bold ${isDone ? 'text-text-secondary' : 'text-white'}`}>{lesson.title}</h4>
                                <p className="text-[10px] font-black uppercase tracking-tighter text-text-secondary flex items-center gap-2">
                                  <Clock size={12} /> {lesson.duration}
                                </p>
                              </div>
                            </div>
                            <div className={`px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest transition-all ${isDone ? 'bg-accent-green/10 text-accent-green' : 'bg-white/5 text-text-secondary group-hover/lesson:bg-accent-blue group-hover/lesson:text-white'}`}>
                              {isDone ? 'Review' : 'Start'}
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

            </div>
          );
        })}
      </div>

    </div>
  );
};

export default PathDetail;
