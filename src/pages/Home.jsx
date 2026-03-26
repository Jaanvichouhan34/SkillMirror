import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Brain, BarChart3, Target, Zap, Users, Trophy, ChevronRight, Star, ChevronDown } from 'lucide-react';
import Button from '../components/ui/Button';
import Card from '../components/ui/Card';
import { Link, useNavigate, useOutletContext } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const Home = () => {
  const { user } = useAuth();
  const navigate = useNavigate();
  const { openAuth } = useOutletContext();
  const [expandedCard, setExpandedCard] = useState(null);

  const toggleCard = (index) => {
    setExpandedCard(prev => prev === index ? null : index);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } }
  };

  const features = [
    {
      icon: <Brain />,
      title: 'AI Diagnostic Engine',
      desc: 'ML models find your exact skill gaps, not just scores.',
      details: 'Our ML pipeline analyzes response patterns across DSA, ML, Web Dev, DBMS, OS, and Networks. It identifies not just wrong answers but the underlying conceptual gap causing the error, outputting a ranked list of weaknesses with confidence scores.'
    },
    {
      icon: <BarChart3 />,
      title: 'Perception Gap Analysis',
      desc: 'Measures delta between confidence and actual performance.',
      details: 'Before each test you rate your own confidence per topic. After the test we compare. The difference is your Perception Gap Index — students with high perception gaps are statistically least likely to succeed in interviews.'
    },
    {
      icon: <Target />,
      title: 'Adaptive Assessments',
      desc: 'Questions adjust in real-time to your level using IRT.',
      details: 'Using Item Response Theory (IRT), each question is dynamically selected based on your prior answers. This means fewer questions, more accuracy — the engine converges on your true ability level efficiently.'
    },
    {
      icon: <Zap />,
      title: 'Instant Feedback',
      desc: 'Every wrong answer explained with concepts to review.',
      details: 'Every wrong answer comes with a detailed explanation, the exact concept you need to review, and 3 curated practice problems. No more guessing why you failed a topic.'
    },
    {
      icon: <Users />,
      title: 'Cohort Benchmarking',
      desc: 'Compare against students targeting same companies.',
      details: 'Compare your scores against students from your college, your branch, students targeting the same companies, and a national peer group. Know exactly where you stand before walking into an interview.'
    },
    {
      icon: <Trophy />,
      title: 'Placement Readiness Score',
      desc: '0-100 score updated after every assessment.',
      details: 'A composite 0-100 score updated after every assessment. Broken down by role: SDE, Data Scientist, Product Analyst. Share your score directly with recruiters as proof of readiness.'
    },
  ];

  const steps = [
    { title: 'Create profile + set target companies', desc: "Tell us where you want to go, and we'll show you how to get there." },
    { title: 'Rate your own confidence per topic', desc: 'Your self-perception is the baseline for our analysis.' },
    { title: 'Take AI adaptive assessment', desc: 'A dynamic test that truly challenges your boundaries.' },
    { title: 'Get full diagnostic report + roadmap', desc: 'Data-driven insights to guide your next move.' },
  ];

  const testimonials = [
    {
      name: 'Hemant Sharma',
      role: 'B.Tech CSE Student',
      text: 'The structured roadmap helped me understand what to focus on instead of randomly studying topics.',
      stars: 5
    },
    {
      name: 'Ikshit Jain',
      role: 'Engineering Student',
      text: 'I liked how the platform highlights weak areas. It made my preparation more targeted.',
      stars: 4
    },
    {
      name: 'Piyush Kumar Mishra',
      role: 'B.Tech Student',
      text: 'The practice flow and tracking system helped me stay consistent with my DSA preparation.',
      stars: 5
    },
    {
      name: 'Himanshu Kumar Tiwari',
      role: 'CSE Student',
      text: 'Simple UI and useful insights. It feels like a proper skill-building tool.',
      stars: 4
    },
    {
      name: 'Akanksha Mishra',
      role: 'Student',
      text: 'The gap analysis feature is really helpful to identify what I need to improve.',
      stars: 5
    },
    {
      name: 'Deepti Sharma',
      role: 'Engineering Student',
      text: 'It gives a clear direction for preparation, which is very helpful for beginners.',
      stars: 4
    }
  ];

  const handleHeroCTA = () => {
    if (user) {
      navigate('/profile');
    } else {
      openAuth('signup');
    }
  };

  return (
    <div className="flex flex-col gap-32 pb-32">

      {/* HERO SECTION */}
      <section className="relative min-h-[90vh] flex flex-col items-center justify-center pt-20 px-6 text-center">
        <div className="absolute inset-0 z-0 opacity-20" style={{ backgroundImage: 'radial-gradient(circle, #4f9cf9 1px, transparent 1px)', backgroundSize: '32px 32px' }} />
        <motion.div variants={containerVariants} initial="hidden" animate="visible" className="relative z-10 max-w-4xl flex flex-col items-center gap-8">
          <motion.div variants={itemVariants} className="flex items-center gap-3 px-4 py-2 rounded-full border border-accent-green/30 bg-accent-green/5 text-accent-green text-sm font-bold">
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent-green opacity-75" />
              <span className="relative inline-flex rounded-full h-3 w-3 bg-accent-green" />
            </span>
            AI Student Performance Evaluator
          </motion.div>

          <motion.h1 variants={itemVariants} className="text-6xl md:text-8xl font-syne font-extrabold leading-[1.1] tracking-tight">
            Know Exactly Where <br /><span className="gradient-text">Your Skills Stand</span>
          </motion.h1>

          <motion.p variants={itemVariants} className="text-lg md:text-xl text-text-secondary max-w-2xl leading-relaxed">
            SkillMirror uses machine learning to bridge the gap between your perceived competence and actual performance — giving you a precise diagnostic roadmap to placement success.
          </motion.p>

          <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 mt-4">
            <Button onClick={handleHeroCTA} className="px-8 py-4 text-lg">
              Begin First Assessment <ChevronRight size={20} />
            </Button>
            <Link to="/how-it-works">
              <Button variant="outline" className="px-8 py-4 text-lg">See How It Works</Button>
            </Link>
          </motion.div>

          <motion.div variants={itemVariants} className="flex flex-wrap justify-center gap-4 mt-12 opacity-70">
            {['React ⚛', 'Python 🐍', 'Flask ⚗', 'ML ∑', 'Tailwind 💨'].map(tech => (
              <span key={tech} className="px-3 py-1 rounded-lg bg-surface border border-card-border text-xs font-bold text-text-secondary">{tech}</span>
            ))}
          </motion.div>
        </motion.div>
      </section>

      {/* FEATURES SECTION */}
      <section className="container mx-auto px-6 pt-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl mb-4">Powerful Features for <span className="gradient-text">Deep Insights</span></h2>
          <p className="text-text-secondary">Beyond scores. We provide the diagnostic depth you need.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((f, index) => (
            <div
              key={index}
              onClick={() => toggleCard(index)}
              style={{ cursor: 'pointer' }}
              className={`glass-card p-8 flex flex-col gap-4 transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_0_30px_rgba(79,156,249,0.25)] hover:border-accent-blue/50 ${expandedCard === index ? 'ring-2 ring-accent-blue border-accent-blue/50' : ''}`}
            >
              {/* Icon row + chevron */}
              <div className="flex justify-between items-start">
                <div className="w-12 h-12 rounded-xl bg-accent-blue/10 text-accent-blue flex items-center justify-center">
                  {f.icon}
                </div>
                <ChevronDown
                  size={20}
                  className="text-text-secondary mt-1"
                  style={{ transition: 'transform 0.3s', transform: expandedCard === index ? 'rotate(180deg)' : 'rotate(0deg)' }}
                />
              </div>

              {/* Title + desc */}
              <div className="space-y-2">
                <h3 className="text-xl font-bold">{f.title}</h3>
                <p className="text-text-secondary text-sm leading-relaxed">{f.desc}</p>
              </div>

              {/* Expanded detail — simple conditional, no AnimatePresence */}
              {expandedCard === index && (
                <div className="pt-4 border-t border-card-border">
                  <p className="text-sm text-accent-blue leading-relaxed italic">{f.details}</p>
                </div>
              )}

              {/* Learn more hint only when collapsed */}
              {expandedCard !== index && (
                <div className="mt-auto flex items-center gap-1 text-xs font-bold text-accent-blue/60 pt-2">
                  Learn more ↓
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* HOW IT WORKS TEASER */}
      <section className="container mx-auto px-6 overflow-hidden">
        <div className="glass-card p-12 md:p-20 relative overflow-hidden">
          <div className="absolute top-[-20%] right-[-10%] w-[500px] h-[500px] bg-accent-blue/10 blur-[120px] rounded-full" />
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl mb-8 leading-tight">
                Your Journey to <br /><span className="gradient-text">Placement Ready</span>
              </h2>
              <div className="flex flex-col gap-10">
                {steps.map((step, i) => (
                  <motion.div
                    key={i}
                    whileInView={{ opacity: 1, x: 0 }}
                    initial={{ opacity: 0, x: -50 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.2 }}
                    className="flex gap-6 items-start"
                  >
                    <div className="w-10 h-10 rounded-full bg-surface border border-accent-blue/30 text-accent-blue flex flex-shrink-0 items-center justify-center font-bold">
                      {i + 1}
                    </div>
                    <div className="space-y-2">
                      <h4 className="font-bold text-lg">{step.title}</h4>
                      <p className="text-text-secondary text-sm">{step.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
              <div className="mt-12">
                <Link to="/how-it-works">
                  <Button className="group">See Full Process <ChevronRight className="group-hover:translate-x-1 transition-transform" /></Button>
                </Link>
              </div>
            </div>
            <div className="hidden lg:block">
              <div className="relative aspect-square rounded-3xl overflow-hidden border border-card-border bg-gradient-to-br from-accent-blue/20 to-accent-purple/20 flex items-center justify-center">
                <div className="absolute inset-0 backdrop-blur-[2px]" />
                <div className="relative w-4/5 h-4/5 rounded-2xl bg-surface/80 border border-card-border shadow-2xl p-8 flex flex-col gap-6">
                  <div className="h-8 w-1/2 bg-white/10 rounded-lg animate-pulse" />
                  <div className="h-32 w-full bg-white/5 rounded-xl border border-white/10 flex items-center justify-center font-syne font-extrabold text-4xl opacity-30">REPORT</div>
                  <div className="space-y-4">
                    <div className="h-4 w-full bg-white/10 rounded-lg animate-pulse" />
                    <div className="h-4 w-3/4 bg-white/10 rounded-lg animate-pulse" />
                  </div>
                  <div className="mt-auto h-12 w-full bg-gradient-main rounded-xl opacity-50" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS SECTION */}
      <section className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl mb-4">Trusted by <span className="gradient-text">Top Students</span></h2>
          <p className="text-text-secondary">Join the thousands who have bridged their skill gaps.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <Card key={i} delay={i * 0.1} className="flex flex-col gap-6">
              <div className="flex gap-1 text-yellow-500">
                {[...Array(5)].map((_, si) => (
                  <Star key={si} size={16} fill={si < t.stars ? 'currentColor' : 'none'} />
                ))}
              </div>
              <p className="italic text-text-primary leading-relaxed">"{t.text}"</p>
              <div className="mt-auto flex items-center gap-4 border-t border-card-border pt-6">
                <div className="w-12 h-12 rounded-full bg-gradient-main flex items-center justify-center font-bold text-white uppercase">
                  {t.name.split(' ').map(n => n[0]).join('')}
                </div>
                <div>
                  <h4 className="font-bold">{t.name}</h4>
                  <p className="text-xs text-text-secondary uppercase tracking-widest font-bold">{t.role}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </section>

      {/* CTA BANNER */}
      <section className="container mx-auto px-6">
        <div className="relative rounded-[2.5rem] bg-gradient-main p-[2px]">
          <div className="bg-surface rounded-[2.4rem] p-12 md:p-20 text-center flex flex-col items-center gap-8 overflow-hidden relative">
            <div className="absolute inset-0 bg-accent-blue/5 pointer-events-none" />
            <h2 className="text-4xl md:text-6xl max-w-2xl leading-[1.1]">Ready to Find Your <span className="gradient-text">Blind Spots?</span></h2>
            <p className="text-text-secondary text-lg md:text-xl max-w-xl">Start your AI-powered performance evaluation today. Get the roadmap to your dream career.</p>
            <div className="flex flex-col sm:flex-row gap-6 mt-4">
              <Button onClick={handleHeroCTA} className="px-10 py-5 text-xl">Start Free — No Credit Card</Button>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Home;
