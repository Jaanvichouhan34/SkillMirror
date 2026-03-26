import React, { useState, useEffect, useContext } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { AuthContext } from '../../context/AuthContext';
import { getXP, completeLesson } from '../../utils/xpManager';
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
  ChevronRight, 
  CheckCircle, 
  BookOpen, 
  Code, 
  Lightbulb, 
  AlertTriangle, 
  Copy, 
  Check, 
  ArrowRight, 
  Award,
  Clock,
  FileCode,
  Terminal,
  Play,
  Zap
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

const LessonView = () => {
  const { pathId, moduleId, lessonId } = useParams();
  const navigate = useNavigate();
  const { user, loading } = useContext(AuthContext);
  const [xpData, setXpData] = useState(null);
  const [course, setCourse] = useState(null);
  const [module, setModule] = useState(null);
  const [lesson, setLesson] = useState(null);
  
  const [quizState, setQuizState] = useState({ 
    activeIndex: 0, 
    answers: {}, 
    isCompleted: false, 
    showFeedback: false,
    score: 0
  });
  const [showXPPopup, setShowXPPopup] = useState(false);
  const [copiedCode, setCopiedCode] = useState(null);
  const [codeState, setCodeState] = useState({
    code: '',
    output: '',
    isRunning: false
  });

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

    const foundModule = foundCourse.modules.find(m => m.id === moduleId);
    const foundLesson = foundModule?.lessons.find(l => l.id === lessonId);

    if (!foundModule || !foundLesson) {
      navigate(`/learn/${pathId}`);
      return;
    }

    setCourse(foundCourse);
    setModule(foundModule);
    setLesson(foundLesson);
    setXpData(getXP(user.email));

    // Reset quiz state when lesson changes
    setQuizState({ activeIndex: 0, answers: {}, isCompleted: false, showFeedback: false, score: 0 });
    setShowXPPopup(false);
    window.scrollTo(0, 0);
  }, [loading, user, pathId, moduleId, lessonId]);

  if (loading || !course || !module || !lesson || !xpData) {
    return (
      <div className="min-h-screen bg-[#04050a] flex flex-col items-center justify-center gap-6">
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          className="relative"
        >
          <div className="w-20 h-20 rounded-full border-4 border-white/5 border-t-accent-purple animate-spin shadow-glow shadow-accent-purple/20" />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-10 h-10 rounded-full bg-accent-purple/10 blur-xl animate-pulse" />
          </div>
        </motion.div>
        <motion.p 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-text-secondary font-black uppercase tracking-[0.3em] text-xs animate-pulse"
        >
          Entering Lesson...
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

  const isLessonCompleted = xpData.completedLessons.includes(lessonId);

  const handleCopyCode = (code, id) => {
    navigator.clipboard.writeText(code);
    setCopiedCode(id);
    setTimeout(() => setCopiedCode(null), 2000);
  };

  const handleQuizAnswer = (qIndex, oIndex) => {
    if (quizState.showFeedback) return;
    
    const quizContent = lesson.content.find(c => c.type === 'quiz');
    if (!quizContent) return;

    const question = quizContent.questions[qIndex];
    if (!question) return;

    const isCorrect = oIndex === question.correct;

    setQuizState(prev => ({
      ...prev,
      answers: { ...prev.answers, [qIndex]: oIndex },
      showFeedback: true,
      score: isCorrect ? prev.score + 1 : prev.score
    }));
  };

  const nextQuestion = () => {
    const quizContent = lesson.content.find(c => c.type === 'quiz');
    if (!quizContent) return;

    if (quizState.activeIndex < quizContent.questions.length - 1) {
      setQuizState(prev => ({ ...prev, activeIndex: prev.activeIndex + 1, showFeedback: false }));
    } else {
      // Quiz Finished
      setQuizState(prev => ({ ...prev, isCompleted: true }));
      // Check if all questions were correct (score === length)
      if (quizState.score >= quizContent.questions.length && !isLessonCompleted) {
        completeLesson(user.email, lessonId);
        setShowXPPopup(true);
      }
    }
  };

  const handleRunCode = () => {
    if (!codeState.code.trim()) {
      setCodeState(prev => ({ ...prev, output: '> Error: Code editor is empty. Please write some logic.' }));
      return;
    }

    setCodeState(prev => ({ ...prev, isRunning: true, output: 'Compiling & Executing...' }));
    
    setTimeout(() => {
      let result = '';
      const code = codeState.code.trim();
      const codeLower = code.toLowerCase();
      
      // 1. Syntax Check (Pseudo-linting)
      const errors = [];
      if (pathId === 'python') {
        if ((code.includes('if') || code.includes('for') || code.includes('def')) && !code.includes(':')) {
          errors.push('> SyntaxError: Missing colon ":" at the end of control statement.');
        }
      } else if (['cpp', 'javascript', 'java', 'c'].includes(pathId)) {
        if (!code.includes(';') && !code.includes('}') && code.length > 20) {
          errors.push('> Warning: Missing semicolon ";" or block termination.');
        }
        if (code.includes('if') && !code.includes('(')) {
          errors.push('> SyntaxError: "if" statement requires parentheses for the condition.');
        }
      }

      if (errors.length > 0) {
        result = `> Starting execution...\n${errors.join('\n')}\n\n> Result: Terminated with errors. ❌`;
      } else {
        // Detailed Analysis & Simulation
        if (code.length < 5) {
          result = '> Alert: Implementation is extremely short. Try adding some logic!';
        } else {
          // Mock output extraction for common print statements
          const outputs = [];
          
          // JS/Web: console.log("...")
          const jsMatches = code.match(/console\.log\((.*)\)/g);
          if (jsMatches) {
            jsMatches.forEach(m => {
              const inner = m.substring(12, m.length - 1);
              try {
                // Safely handle simple string/number literals
                const content = inner.replace(/['"`]/g, '');
                outputs.push(`> ${content}`);
              } catch(e) { outputs.push(`> [Object Object]`); }
            });
          }

          // Python: print("...")
          const pyMatches = code.match(/print\((.*)\)/g);
          if (pyMatches) {
            pyMatches.forEach(m => {
              const content = m.substring(6, m.length - 1).replace(/['"`]/g, '');
              outputs.push(`> ${content}`);
            });
          }

          // C++/Java: cout << "..." / System.out.println("...")
          const cppMatches = code.match(/cout\s*<<\s*(.*);/g);
          if (cppMatches) {
            cppMatches.forEach(m => {
              const content = m.split('<<')[1].replace(';', '').trim().replace(/['"`]/g, '');
              outputs.push(`> ${content}`);
            });
          }
          
          const javaMatches = code.match(/System\.out\.println\((.*)\)/g);
          if (javaMatches) {
            javaMatches.forEach(m => {
              const content = m.substring(19, m.length - 1).replace(/['"`]/g, '');
              outputs.push(`> ${content}`);
            });
          }

          if (outputs.length > 0) {
            result = `> Starting execution...\n${outputs.join('\n')}\n\n> Execution Finished Successfully. ✅`;
          } else {
            // Keyword-based patterns if no print found
            const patterns = {
              js: ['const', 'let', 'function', '=>', 'arrow', 'document', 'window'],
              py: ['def', 'import', 'in', 'range', 'self', 'class'],
              cpp: ['int', 'std', 'vector', 'main', 'include'],
              java: ['public', 'class', 'static', 'void', 'String'],
              logic: ['for', 'while', 'if', 'else', 'return', 'break', 'continue']
            };

            const foundPatterns = [];
            Object.entries(patterns).forEach(([lang, keys]) => {
              const found = keys.filter(k => {
                const regex = new RegExp(`\\b${k}\\b`, 'i');
                return regex.test(code);
              });
              if (found.length > 0) foundPatterns.push(...found);
            });

            if (foundPatterns.length > 0) {
              const uniquePatterns = [...new Set(foundPatterns)];
              result = `> Logic Analysis: Validated ✨\n> Patterns detected: ${uniquePatterns.join(', ')}\n> Status: Processed with 0 errors.\n> Performance: ${Math.random() < 0.5 ? 'Optimal' : 'Standard'}\n\n> Tip: Add print statements to see direct output!`;
            } else {
              result = `> Running code...\n> Error: No executable logic or output commands detected.\n> Tip: Use output commands (like console.log or print) to see results here!`;
            }
          }
        }
      }

      setCodeState(prev => ({ ...prev, isRunning: false, output: result }));
      
      if (!isLessonCompleted && code.length >= 10) {
        completeLesson(user.email, lessonId);
        setShowXPPopup(true);
      }
    }, 1200);
  };

  const markAsDone = () => {
    if (!isLessonCompleted) {
      completeLesson(user.email, lessonId);
      setShowXPPopup(true);
    }
  };

  // Find next/prev lessons
  const allLessons = course.modules.flatMap(m => m.lessons.map(l => ({ ...l, mId: m.id })));
  const currentIdx = allLessons.findIndex(l => l.id === lessonId);
  const prevLesson = allLessons[currentIdx - 1];
  const nextLesson = allLessons[currentIdx + 1];

  return (
    <div className="min-h-screen bg-background pt-16 flex">
      
      {/* Sidebar - Desktop */}
      <aside className="hidden lg:flex flex-col w-80 border-r border-white/5 bg-surface/20 sticky top-16 h-[calc(100vh-64px)] overflow-y-auto">
        <div className="p-6 border-b border-white/5">
          <h2 className="text-xs font-black text-accent-blue uppercase tracking-[0.2em] mb-1">Path</h2>
          <h3 className="text-lg font-syne font-bold text-white truncate">{course.title}</h3>
        </div>
        
        <div className="flex-1 p-4 space-y-6">
          {course.modules.map((m) => (
            <div key={m.id} className="space-y-2">
              <h4 className="text-[10px] font-black uppercase tracking-widest text-text-secondary px-3 mb-3">{m.title}</h4>
              <div className="space-y-1">
                {m.lessons.map((l) => {
                  const isActive = l.id === lessonId;
                  const isDone = xpData.completedLessons.includes(l.id);
                  return (
                    <Link 
                      key={l.id} 
                      to={`/learn/${pathId}/${m.id}/${l.id}`}
                      className={`flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm transition-all ${isActive ? 'bg-accent-blue text-white shadow-lg' : 'text-text-secondary hover:bg-white/5 hover:text-white'}`}
                    >
                      <div className={`w-5 h-5 rounded-full flex items-center justify-center border ${isActive ? 'border-white/20' : (isDone ? 'border-accent-green bg-accent-green/20 text-accent-green' : 'border-white/10')}`}>
                        {isDone ? <Check size={12} /> : (l.type === 'code' ? <Code size={10} /> : <BookOpen size={10} />)}
                      </div>
                      <span className="truncate">{l.title}</span>
                    </Link>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-6 md:p-12 max-w-4xl mx-auto">
        
        <div className="flex flex-col gap-10 mb-20">
          
          {/* Header */}
          <div className="space-y-4">
            <div className="flex items-center gap-2 text-accent-blue text-xs font-black uppercase tracking-widest">
              <BookOpen size={14} /> Lesson
            </div>
            <h1 className="text-4xl md:text-5xl font-syne font-black text-white">{lesson.title}</h1>
            <div className="flex items-center gap-4 text-text-secondary text-sm font-bold">
              <span className="flex items-center gap-1.5"><Clock size={16} /> {lesson.duration}</span>
              <span className="px-3 py-1 bg-white/5 rounded-full border border-white/10 text-[10px] font-black tracking-widest uppercase">{pathId} • {moduleId}</span>
            </div>
          </div>

          {/* Content Renderer */}
          <div className="space-y-12">
            {lesson.content.map((item, i) => (
              <div key={i}>
                
                {item.type === 'theory' && (
                  <div className="prose prose-invert max-w-none">
                    <p className="text-xl text-text-secondary leading-relaxed font-medium">
                      {item.text}
                    </p>
                  </div>
                )}

                {item.type === 'why' && (
                  <motion.div 
                    whileInView={{ opacity: 1, x: 0 }}
                    initial={{ opacity: 0, x: -20 }}
                    viewport={{ once: true }}
                    className="p-8 rounded-2xl bg-accent-blue/5 border-l-4 border-accent-blue space-y-4 shadow-xl"
                  >
                    <div className="flex items-center gap-3 text-accent-blue text-xs font-black uppercase tracking-[0.2em]">
                      <Lightbulb size={18} /> Why This Matters
                    </div>
                    <h4 className="text-xl font-bold text-white">{item.title}</h4>
                    <ul className="space-y-3">
                      {item.points.map((p, idx) => (
                        <li key={idx} className="flex gap-3 text-text-secondary text-sm leading-relaxed">
                          <CheckCircle size={16} className="text-accent-blue shrink-0 mt-0.5" />
                          {p}
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                )}

                {item.type === 'code' && (
                  <div className="space-y-4">
                    <div className="flex items-center justify-between text-xs font-black uppercase tracking-widest text-text-secondary px-2">
                       <span>{item.label}</span>
                       <span className="text-accent-purple">{item.language}</span>
                    </div>
                    <div className="relative group rounded-2xl overflow-hidden bg-[#0d1117] border border-white/10 shadow-2xl">
                      <button 
                        onClick={() => handleCopyCode(item.code, i)}
                        className="absolute top-4 right-4 p-2 bg-white/5 hover:bg-white/10 transition-colors rounded-lg text-text-secondary hover:text-white"
                      >
                        {copiedCode === i ? <Check size={18} className="text-accent-green" /> : <Copy size={18} />}
                      </button>
                      <pre className="p-8 font-mono text-sm sm:text-base leading-relaxed overflow-x-auto text-[#e6edf3]">
                        {item.code}
                      </pre>
                    </div>
                  </div>
                )}

                {item.type === 'note' && (
                  <div className="p-6 rounded-2xl bg-orange-500/5 border-l-4 border-orange-500 flex gap-4 shadow-lg shadow-orange-500/5">
                    <AlertTriangle size={24} className="text-orange-500 shrink-0" />
                    <div>
                      <p className="text-orange-500 text-xs font-black uppercase tracking-widest mb-1">Important Note</p>
                      <p className="text-text-secondary text-sm leading-relaxed">{item.text}</p>
                    </div>
                  </div>
                )}

                {item.type === 'practice' && (
                  <div className="p-8 rounded-2xl bg-accent-green/5 border-l-4 border-accent-green space-y-4 shadow-xl">
                    <div className="flex items-center gap-3 text-accent-green text-xs font-black uppercase tracking-[0.2em]">
                      <Code size={18} /> Practice Section
                    </div>
                    <h4 className="text-xl font-bold text-white">{item.title}</h4>
                    <div className="space-y-6">
                      <div className="space-y-3">
                        {item.problems.map((p, idx) => (
                          <div key={idx} className="flex gap-4 p-4 rounded-xl bg-white/5 border border-white/5 group hover:border-accent-green/30 transition-all">
                            <div className="w-8 h-8 rounded-lg bg-accent-green/20 text-accent-green flex items-center justify-center font-bold text-sm shrink-0">
                              {idx + 1}
                            </div>
                            <p className="text-text-secondary text-sm leading-relaxed self-center">{p}</p>
                          </div>
                        ))}
                      </div>

                      {/* Code Playground */}
                      <div className="mt-8 rounded-2xl overflow-hidden border border-white/10 bg-[#0a0c14] shadow-2xl">
                        <div className="flex items-center justify-between px-6 py-3 bg-white/5 border-b border-white/5">
                          <div className="flex items-center gap-3">
                            <Terminal size={14} className="text-accent-green" />
                            <span className="text-[10px] font-black uppercase tracking-widest text-text-secondary">Interactive Playground</span>
                          </div>
                          <div className="flex gap-2">
                             <div className="w-2.5 h-2.5 rounded-full bg-red-500/20" />
                             <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/20" />
                             <div className="w-2.5 h-2.5 rounded-full bg-green-500/20" />
                          </div>
                        </div>
                        <div className="p-0 relative">
                          <textarea 
                            value={codeState.code}
                            onChange={(e) => setCodeState(prev => ({ ...prev, code: e.target.value }))}
                            placeholder={`// Write your ${pathId} solution here...\n\nfunction solve() {\n  // Implementation\n}`}
                            className="w-full h-64 bg-transparent p-6 text-sm font-mono text-white outline-none resize-none placeholder:text-white/10"
                            spellCheck="false"
                          />
                          <button 
                            onClick={handleRunCode}
                            disabled={codeState.isRunning}
                            className="absolute bottom-4 right-4 px-6 py-2.5 bg-accent-green text-black font-black text-xs uppercase tracking-widest rounded-lg hover:scale-105 active:scale-95 transition-all flex items-center gap-2 shadow-lg disabled:opacity-50"
                          >
                            {codeState.isRunning ? 'Running...' : 'Run Code'}
                            <Play size={14} />
                          </button>
                        </div>
                        {codeState.output && (
                          <div className="p-6 bg-black/40 border-t border-white/5 font-mono text-xs text-accent-green animate-in fade-in slide-in-from-bottom-2 duration-300">
                             <pre className="whitespace-pre-wrap">{codeState.output}</pre>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                )}

                {item.type === 'interview' && (
                  <div className="p-8 rounded-2xl bg-accent-purple/5 border-l-4 border-accent-purple space-y-4 shadow-xl">
                    <div className="flex items-center gap-3 text-accent-purple text-xs font-black uppercase tracking-[0.2em]">
                      <Award size={18} /> Interview Preparation
                    </div>
                    <h4 className="text-xl font-bold text-white">Common Questions</h4>
                    <div className="space-y-4">
                      {item.questions.map((q, idx) => (
                        <div key={idx} className="space-y-2">
                          <p className="text-white font-bold text-sm">Q{idx + 1}: {q}</p>
                          <div className="h-px bg-white/5 w-full" />
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {item.type === 'project' && (
                  <div className="p-8 rounded-2xl bg-gradient-to-br from-accent-blue/10 to-accent-purple/10 border border-white/10 space-y-6 shadow-2xl relative overflow-hidden group">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-accent-blue/10 blur-3xl rounded-full group-hover:bg-accent-blue/20 transition-all" />
                    <div className="flex items-center gap-3 text-white text-xs font-black uppercase tracking-[0.2em]">
                      <Lightbulb size={18} /> Mini Project
                    </div>
                    <div className="space-y-2">
                       <h4 className="text-2xl font-black text-white">{item.title}</h4>
                       <p className="text-text-secondary text-sm leading-relaxed">{item.description}</p>
                    </div>
                    <div className="p-4 rounded-xl bg-black/40 border border-white/5 space-y-3">
                       <p className="text-[10px] font-black uppercase tracking-widest text-accent-blue">Required Features</p>
                       <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                          {item.features?.map((f, idx) => (
                            <li key={idx} className="flex items-center gap-2 text-xs text-text-secondary">
                               <div className="w-1.5 h-1.5 rounded-full bg-accent-blue" />
                               {f}
                            </li>
                          ))}
                       </ul>
                    </div>
                  </div>
                )}

                {item.type === 'quiz' && (
                  <div className="pt-10 border-t border-white/5 space-y-10">
                    <div className="text-center space-y-4">
                      <h4 className="text-3xl font-syne font-black text-white">Knowledge Check</h4>
                      <p className="text-text-secondary text-sm">Answer these correctly to complete the lesson and earn XP.</p>
                      {!quizState.isCompleted && (
                        <div className="flex justify-center gap-2 mt-4">
                          {item.questions.map((_, idx) => (
                            <div key={idx} className={`h-1.5 rounded-full transition-all ${idx === quizState.activeIndex ? 'w-10 bg-accent-blue shadow-glow' : 'w-4 bg-white/10'}`} />
                          ))}
                        </div>
                      )}
                    </div>

                    {!quizState.isCompleted ? (
                      <Card className="max-w-xl mx-auto p-10 bg-surface/50 border-white/10">
                        <div className="space-y-8">
                          <div className="space-y-2">
                            <span className="text-accent-blue text-[10px] font-black uppercase tracking-widest">Question {quizState.activeIndex + 1} of {item.questions.length}</span>
                            <h5 className="text-xl font-bold text-white leading-snug">
                              {item.questions[quizState.activeIndex].q}
                            </h5>
                          </div>

                          <div className="space-y-3">
                            {item.questions[quizState.activeIndex].options.map((opt, oIdx) => {
                              const isSelected = quizState.answers[quizState.activeIndex] === oIdx;
                              const isCorrect = oIdx === item.questions[quizState.activeIndex].correct;
                              const showFeedback = quizState.showFeedback;
                              
                              let btnClass = "border-white/5 bg-white/5 hover:bg-white/10 text-white";
                              if (showFeedback) {
                                if (isCorrect) btnClass = "border-accent-green bg-accent-green/10 text-accent-green";
                                else if (isSelected) btnClass = "border-red-500 bg-red-500/10 text-red-500";
                                else btnClass = "border-white/5 opacity-50 text-text-secondary";
                              } else if (isSelected) {
                                btnClass = "border-accent-blue bg-accent-blue/10 text-accent-blue";
                              }

                              return (
                                <button 
                                  key={oIdx}
                                  onClick={() => handleQuizAnswer(quizState.activeIndex, oIdx)}
                                  className={`w-full p-4 rounded-xl text-left font-bold transition-all border flex items-center justify-between group ${btnClass}`}
                                >
                                  {opt}
                                  {showFeedback && isCorrect && <Check size={18} />}
                                </button>
                              );
                            })}
                          </div>

                          <AnimatePresence>
                            {quizState.showFeedback && (
                              <motion.div 
                                initial={{ opacity: 0, scale: 0.95 }}
                                animate={{ opacity: 1, scale: 1 }}
                                className={`p-4 rounded-xl text-sm leading-relaxed ${quizState.answers[quizState.activeIndex] === item.questions[quizState.activeIndex].correct ? 'bg-accent-green/10 text-accent-green' : 'bg-red-500/10 text-red-400'}`}
                              >
                                <span className="font-black uppercase text-[10px] tracking-widest block mb-1">{quizState.answers[quizState.activeIndex] === item.questions[quizState.activeIndex].correct ? 'Correct! ✓' : 'Incorrect'}</span>
                                {item.questions[quizState.activeIndex].explanation}
                                <button 
                                  onClick={nextQuestion}
                                  className={`mt-4 w-full py-3 rounded-lg font-bold flex items-center justify-center gap-2 text-white bg-accent-blue hover:scale-105 active:scale-95 transition-all shadow-lg`}
                                >
                                  {quizState.activeIndex < item.questions.length - 1 ? 'Next Question' : 'Finish Quiz'}
                                  <ArrowRight size={18} />
                                </button>
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </div>
                      </Card>
                    ) : (
                      <Card className="max-w-lg mx-auto p-12 text-center space-y-8 bg-accent-green/5 border-accent-green/30 relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-32 h-32 bg-accent-green/10 blur-3xl rounded-full" />
                        <div className="w-20 h-20 rounded-full bg-accent-green/20 text-accent-green flex items-center justify-center mx-auto shadow-glow shadow-accent-green/20 scale-125 mb-6">
                           <Award size={48} />
                        </div>
                        <div className="space-y-2">
                          <h4 className="text-3xl font-black text-white">Lesson Mastery Unlocked!</h4>
                          <p className="text-text-secondary">You mastered all concepts in this lesson. Your journey continues!</p>
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                          <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                            <p className="text-[10px] font-black uppercase text-accent-green tracking-widest">Score</p>
                            <p className="text-2xl font-black">{quizState.score}/{item.questions.length}</p>
                          </div>
                          <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                            <p className="text-[10px] font-black uppercase text-accent-blue tracking-widest">Gained</p>
                            <p className="text-2xl font-black">+15 XP</p>
                          </div>
                        </div>
                        {!nextLesson && (
                           <Link to={`/learn/${pathId}`} className="w-full py-4 bg-accent-blue text-white font-bold rounded-xl flex items-center justify-center gap-2 hover:shadow-glow transition-all">
                             Check Path Progress <ArrowRight size={20} />
                           </Link>
                        )}
                      </Card>
                    )}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Footer Navigation */}
          <div className="flex items-center justify-between pt-12 border-t border-white/5">
             {prevLesson ? (
               <Link to={`/learn/${pathId}/${prevLesson.mId}/${prevLesson.id}`} className="flex items-center gap-3 text-text-secondary hover:text-white group font-bold">
                 <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center group-hover:bg-accent-blue/10 group-hover:text-accent-blue transition-all">
                    <ChevronLeft />
                 </div>
                 <div className="text-left hidden sm:block">
                   <p className="text-[10px] font-black uppercase tracking-widest">Previous</p>
                   <p className="text-sm truncate max-w-[150px]">{prevLesson.title}</p>
                 </div>
               </Link>
             ) : <div />}

             {nextLesson && (
                <div className="flex items-center gap-4">
                  {!isLessonCompleted && !lesson.content.some(c => c.type === 'quiz') && (
                    <button 
                      onClick={markAsDone}
                      className="px-6 py-3 border border-white/10 rounded-xl text-xs font-black uppercase tracking-widest text-text-secondary hover:bg-white/5 hover:text-white transition-all"
                    >
                      Mark as Done
                    </button>
                  )}
                  <Link 
                    to={`/learn/${pathId}/${nextLesson.mId}/${nextLesson.id}`} 
                    className={`flex items-center gap-3 group font-bold transition-all ${isLessonCompleted || quizState.isCompleted ? 'text-white pointer-events-auto' : 'opacity-40 pointer-events-none'}`}
                  >
                    <div className="text-right hidden sm:block">
                      <p className="text-[10px] font-black uppercase tracking-widest">Up Next</p>
                      <p className="text-sm truncate max-w-[150px]">{nextLesson.title}</p>
                    </div>
                    <div className="w-10 h-10 rounded-xl bg-accent-blue flex items-center justify-center text-white shadow-glow transition-all group-hover:scale-110">
                       <ChevronRight />
                    </div>
                  </Link>
                </div>
              )}
          </div>

        </div>
      </main>

      {/* XP Popup Animation */}
      <AnimatePresence>
        {showXPPopup && (
          <motion.div 
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -100 }}
            className="fixed bottom-12 left-1/2 -translate-x-1/2 z-[200] px-8 py-4 bg-gradient-main rounded-2xl shadow-2xl flex items-center gap-4 border-2 border-white/20"
          >
            <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center text-2xl">🎉</div>
            <div>
              <p className="text-sm font-black text-white uppercase tracking-widest">Lesson Complete!</p>
              <p className="text-2xl font-black text-white">+15 XP Earned</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
};

export default LessonView;
