import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Card from '../components/ui/Card';
import { Brain, BarChart3, Target, Zap, Users, Trophy, ChevronDown } from 'lucide-react';

const Features = () => {
  const detailedFeatures = [
    { icon: <Brain />, badge: "Core", title: "AI Diagnostic Engine", desc: "Our neural networks analyze not just the final answer, but the time taken and patterns of mistakes to identify underlying conceptual weaknesses." },
    { icon: <BarChart3 />, badge: "Unique", title: "Perception Gap Analysis", desc: "We compare your self-rated confidence with your actual performance to find 'Dangerous Overconfidence' and 'Hidden Potential' zones." },
    { icon: <Target />, badge: "Intelligent", title: "Adaptive Assessments", desc: "Powered by Item Response Theory (IRT), our tests dynamically adjust difficulty to find your precise performance ceiling in under 30 minutes." },
    { icon: <Zap />, badge: "Real-time", title: "Instant Feedback", desc: "No more waiting for results. Get detailed conceptual breakdowns for every single question immediately after you finish." },
    { icon: <Users />, badge: "Competitive", title: "Cohort Benchmarking", desc: "See where you stand against thousands of other students targeting the same companies like Google, Amazon, or Microsoft." },
    { icon: <Trophy />, badge: "Metric", title: "Placement Readiness Score", desc: "A singular, scientifically calculated 0-100 score that predicts your probability of clearing technical rounds at top-tier firms." },
  ];

  const faqs = [
    { q: "How accurate is the diagnostic?", a: "Based on our testing with over 500 mock scenarios, the SkillMirror AI Engine has a 92% correlation with actual technical interview outcomes." },
    { q: "How is this different from LeetCode?", a: "LeetCode focuses on practice; SkillMirror focuses on diagnosis. We tell you WHERE you are weak so you can practice more effectively on platforms like LeetCode." },
    { q: "What skill domains are covered?", a: "We currently cover DSA, System Design, OS, DBMS, Computer Networks, and Machine Learning fundamentals." },
    { q: "Can I retake assessments?", a: "Yes, we recommend retaking relevant assessments every 2 weeks to track your improvement via the Progress Dashboard." },
    { q: "Is my data private?", a: "Completely. Your performance data is encrypted and only used to generate your personal roadmap and aggregated (anonymous) benchmarking." },
  ];

  const [openFaq, setOpenFaq] = useState(null);

  return (
    <div className="container mx-auto px-6 py-20 flex flex-col gap-32">
      
      <section className="text-center max-w-3xl mx-auto">
        <h1 className="text-5xl md:text-7xl font-syne mb-6">Deep <span className="gradient-text">Diagnostics</span></h1>
        <p className="text-xl text-text-secondary leading-relaxed">
          SkillMirror goes beyond the surface to give you the most comprehensive skill analysis available.
        </p>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {detailedFeatures.map((f, i) => (
          <Card key={i} delay={i * 0.1} className="flex flex-col gap-6 relative overflow-hidden group">
            <div className="absolute top-4 right-4 px-3 py-1 rounded-full bg-accent-blue/10 border border-accent-blue/20 text-accent-blue text-xs font-bold uppercase tracking-widest">
              {f.badge}
            </div>
            <div className="w-14 h-14 rounded-2xl bg-surface border border-card-border text-accent-blue flex items-center justify-center shadow-lg">
              {React.cloneElement(f.icon, { size: 28 })}
            </div>
            <div className="space-y-4">
              <h3 className="text-2xl font-bold">{f.title}</h3>
              <p className="text-text-secondary leading-relaxed italic">{f.desc}</p>
            </div>
          </Card>
        ))}
      </section>

      <section className="max-w-3xl mx-auto w-full">
        <h2 className="text-4xl font-syne mb-12 text-center">Frequently Asked <span className="gradient-text">Questions</span></h2>
        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <div key={i} className="glass-card overflow-hidden">
              <button 
                onClick={() => setOpenFaq(openFaq === i ? null : i)}
                className="w-full p-6 text-left flex justify-between items-center hover:bg-white/5 transition-colors"
              >
                <span className="font-bold text-lg">{faq.q}</span>
                <ChevronDown className={`transition-transform duration-300 ${openFaq === i ? 'rotate-180' : ''}`} />
              </button>
              <AnimatePresence>
                {openFaq === i && (
                  <motion.div
                    initial={{ height: 0 }}
                    animate={{ height: 'auto' }}
                    exit={{ height: 0 }}
                    className="overflow-hidden"
                  >
                    <div className="p-6 pt-0 text-text-secondary leading-relaxed border-t border-card-border/50">
                      {faq.a}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
};

export default Features;
