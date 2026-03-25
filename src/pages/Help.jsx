import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, Mail, HelpCircle, BookOpen, BarChart, ShieldCheck } from 'lucide-react';
import Card from '../components/ui/Card';
import Button from '../components/ui/Button';

const Help = () => {
  const [openItem, setOpenItem] = useState(null);

  const sections = [
    {
      id: 'getting-started',
      title: "Getting Started",
      icon: <BookOpen className="text-accent-blue" />,
      faqs: [
        { q: "How do I create an account?", a: "Click the 'Get Started' button in the navbar, enter your email and password, and you're ready to go! No credit card required." },
        { q: "Is SkillMirror free for students?", a: "Yes, the core diagnostic engine and placement readiness reports are free for students during our initial launch phase." },
        { q: "What is the very first step?", a: "We recommend setting your 'Target Companies' in your profile so the AI can tailor questions to their specific hiring patterns." }
      ]
    },
    {
      id: 'assessments',
      title: "Assessments",
      icon: <BarChart className="text-accent-purple" />,
      faqs: [
        { q: "How long does a typical test take?", a: "Our AI-adaptive assessments usually take 30-45 minutes. They adjust difficulty in real-time based on your performance." },
        { q: "Can I retake an assessment?", a: "Yes! We encourage retaking assessments every 2 weeks to track your growth and see your 'Blind Spots' disappear." },
        { q: "What topics are covered?", a: "We cover Data Structures, Algorithms, System Design, and specialized tracks for Frontend, Backend, and AI/ML." }
      ]
    },
    {
      id: 'reports-data',
      title: "Reports & Data",
      icon: <ShieldCheck className="text-accent-green" />,
      faqs: [
        { q: "How is the Readiness Score calculated?", a: "It's a multi-factor score considering accuracy, speed, difficulty level, and your consistency compared to company benchmarks." },
        { q: "Can I share my report with recruiters?", a: "Absolutely. You can download a verified PDF diagnostic report from your profile to attach to your applications." },
        { q: "Who can see my performance data?", a: "Your data is private to you by default. Only you decide if and when to share your diagnostic summaries." }
      ]
    }
  ];

  return (
    <div className="container mx-auto px-6 py-24 flex flex-col gap-24">
      
      {/* Header */}
      <section className="text-center space-y-6 max-w-3xl mx-auto">
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          className="w-20 h-20 rounded-3xl bg-accent-blue/10 text-accent-blue flex items-center justify-center mx-auto mb-8"
        >
          <HelpCircle size={40} />
        </motion.div>
        <h1 className="text-5xl md:text-7xl font-syne font-extrabold">Help <span className="gradient-text">Center</span></h1>
        <p className="text-xl text-text-secondary leading-relaxed">
          Everything you need to know about navigating the SkillMirror platform and accelerating your placement journey.
        </p>
      </section>

      {/* Accordion Sections */}
      <section className="max-w-4xl mx-auto w-full space-y-16">
        {sections.map((section, sIdx) => (
          <div key={section.id} className="space-y-6">
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-lg bg-surface border border-card-border flex items-center justify-center">
                {section.icon}
              </div>
              <h2 className="text-3xl font-syne font-extrabold">{section.title}</h2>
            </div>
            
            <div className="space-y-4">
              {section.faqs.map((faq, fIdx) => {
                const id = `${sIdx}-${fIdx}`;
                const isOpen = openItem === id;
                return (
                  <div key={fIdx} className="glass-card overflow-hidden">
                    <button 
                      onClick={() => setOpenItem(isOpen ? null : id)}
                      className="w-full p-6 text-left flex justify-between items-center hover:bg-white/5 transition-colors"
                    >
                      <span className="font-bold text-lg pr-8">{faq.q}</span>
                      <ChevronDown className={`transition-transform duration-300 flex-shrink-0 ${isOpen ? 'rotate-180' : ''}`} />
                    </button>
                    <AnimatePresence>
                      {isOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          className="overflow-hidden"
                        >
                          <div className="p-6 pt-0 text-text-secondary leading-relaxed border-t border-card-border/50">
                            {faq.a}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
            </div>
          </div>
        ))}
      </section>

      {/* Contact Card */}
      <section className="max-w-4xl mx-auto w-full">
        <Card className="p-12 md:p-16 text-center flex flex-col items-center gap-8 bg-gradient-to-br from-accent-blue/5 to-accent-purple/5 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-accent-blue/10 blur-[100px] -translate-y-1/2 translate-x-1/2" />
          <h3 className="text-3xl font-syne font-extrabold">Still Have Questions?</h3>
          <p className="text-text-secondary text-lg max-w-xl">
            Our support team (led by Jaanvi) is here to help you get the most out of SkillMirror.
          </p>
          <div className="flex flex-col gap-4">
            <a href="mailto:jaanvichouhan18805@gmail.com">
              <Button className="px-10 py-5 text-lg group">
                <Mail className="mr-3 group-hover:rotate-12 transition-transform" /> Contact Support
              </Button>
            </a>
            <p className="text-xs text-text-secondary font-bold tracking-widest uppercase mt-4">Response time: Usually within 24 hours</p>
          </div>
        </Card>
      </section>

    </div>
  );
};

export default Help;
