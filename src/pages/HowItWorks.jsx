import React, { useContext } from 'react';
import { motion } from 'framer-motion';
import { useNavigate, useOutletContext } from 'react-router-dom';
import Card from '../components/ui/Card';
import { useAuth } from '../context/AuthContext';

const HowItWorks = () => {
  const { user } = useAuth();
  const navigate = useNavigate();
  const { openAuth } = useOutletContext();

  const steps = [
    { num: "01", title: "Onboarding & Goal Setting", desc: "Tell us about your target companies and current academic standing to calibrate the engine." },
    { num: "02", title: "Pre-Assessment Confidence Survey", desc: "Rate yourself on various topics. This helps us measure the 'Perception Gap' later." },
    { num: "03", title: "Adaptive AI Assessment", desc: "Take a 30-60 minute dynamic test where questions evolve based on your accuracy." },
    { num: "04", title: "Diagnostic Report Generation", desc: "Our ML models process your responses to find conceptual blind spots and strengths." },
    { num: "05", title: "Personalized Learning Roadmap", desc: "Get a step-by-step guide on what to study next, prioritized by your specific gaps." },
    { num: "06", title: "Progress Tracking & Re-Assessment", desc: "Monitor your growth and retake assessments to see your readiness score climb." },
  ];

  const handleBeginAssessment = () => {
    if (user) {
      navigate('/profile');
    } else {
      openAuth('signup');
    }
  };

  return (
    <div className="container mx-auto px-6 py-20 flex flex-col gap-32">
      
      <section className="text-center max-w-3xl mx-auto">
        <h1 className="text-5xl md:text-7xl font-syne mb-6">The <span className="gradient-text">Process</span></h1>
        <p className="text-xl text-text-secondary leading-relaxed">
          From initial onboarding to final placement readiness—here's how SkillMirror guides you.
        </p>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {steps.map((step, i) => (
          <Card key={i} delay={i * 0.1} className="relative overflow-hidden flex flex-col gap-6 pt-12">
            <div className="absolute top-6 left-8 text-5xl font-syne font-extrabold text-white/5 select-none">
              {step.num}
            </div>
            
            {/* Accent Orb */}
            <div className={`absolute -bottom-10 -right-10 w-32 h-32 rounded-full blur-3xl opacity-20 ${
              i % 3 === 0 ? 'bg-accent-blue' : i % 3 === 1 ? 'bg-accent-purple' : 'bg-accent-green'
            }`} />

            <h3 className="text-2xl font-bold z-10">{step.title}</h3>
            <p className="text-text-secondary leading-relaxed z-10">{step.desc}</p>
          </Card>
        ))}
      </section>

      <section className="bg-gradient-main rounded-[2.5rem] p-[2px]">
        <div className="bg-surface rounded-[2.4rem] p-12 md:p-20 text-center">
          <h2 className="text-3xl md:text-4xl font-syne mb-8">Ready to Start Your Journey?</h2>
          <button
            onClick={handleBeginAssessment}
            className="px-10 py-5 bg-white text-black font-bold rounded-2xl hover:scale-105 transition-transform active:scale-95"
          >
            Begin First Assessment
          </button>
        </div>
      </section>

    </div>
  );
};

export default HowItWorks;
