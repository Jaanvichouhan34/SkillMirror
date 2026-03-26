import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Card from '../components/ui/Card';
import { Target, Award, Shield, Mail } from 'lucide-react';
import jaanviPhoto from '/src/assets/jaanvi.jpg';

const About = () => {
  const principles = [
    {
      icon: <Target className="text-accent-blue" />,
      title: "Precision First",
      desc: "Our AI analyzes the 'how' and 'why' behind every answer, identifying conceptual blind spots."
    },
    {
      icon: <Award className="text-accent-purple" />,
      title: "Student-Centric",
      desc: "Built by a student, for students. We understand the pressure of placement season."
    },
    {
      icon: <Shield className="text-accent-green" />,
      title: "Data Integrity",
      desc: "Your performance data is used solely to help you improve, with enterprise-grade security."
    }
  ];

  const skills = ['React', 'Python', 'Flask', 'ML', 'MERN Stack'];

  return (
    <div className="container mx-auto px-6 py-20 flex flex-col gap-32">

      {/* Story Section */}
      <section className="max-w-4xl mx-auto text-center space-y-8">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-5xl md:text-7xl font-syne font-extrabold"
        >
          The Story of <span className="gradient-text">SkillMirror</span>
        </motion.h1>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-lg text-text-secondary leading-relaxed space-y-6"
        >
          <p>
            SkillMirror was born out of a simple observation: most students believe they are "placement-ready" until they face their first technical interview. This perception-reality gap is the single biggest hurdle to career success.
          </p>
          <p>
            Built between Nov 2025 and Jan 2026, SkillMirror uses advanced machine learning models to provide a mirror to your technical soul. We don't just score you; we diagnose you.
          </p>
        </motion.div>
      </section>

      {/* Principles Section */}
      <section>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {principles.map((p, i) => (
            <Card key={i} delay={i * 0.1} className="text-center flex flex-col items-center gap-6 p-8">
              <div className="w-16 h-16 rounded-2xl bg-surface border border-card-border flex items-center justify-center">
                {React.cloneElement(p.icon, { size: 32 })}
              </div>
              <h3 className="text-2xl font-bold">{p.title}</h3>
              <p className="text-text-secondary leading-relaxed">{p.desc}</p>
            </Card>
          ))}
        </div>
      </section>

      {/* Creator Section */}
      <section className="relative p-1 rounded-[3rem] bg-gradient-to-br from-accent-blue/20 to-accent-purple/20">
        <div className="bg-surface rounded-[2.9rem] p-12 md:p-20 flex flex-col lg:flex-row gap-16 items-center border border-card-border shadow-xl">

          {/* Photo */}
          <div className="flex-shrink-0">
            <img
              src={jaanviPhoto}
              alt="Jaanvi Chouhan"
              style={{
                width: '120px',
                height: '120px',
                borderRadius: '50%',
                objectFit: 'cover',
                border: '3px solid #4f9cf9',
                boxShadow: '0 0 20px rgba(79,156,249,0.4)'
              }}
              onError={(e) => { e.target.src = 'https://ui-avatars.com/api/?name=Jaanvi+Chouhan&background=4f9cf9&color=fff&size=200'; }}
            />
          </div>

          <div className="flex-1 space-y-8 text-center lg:text-left">
            <div>
              <h2 className="text-4xl md:text-5xl font-syne mb-2">Jaanvi <span className="gradient-text">Chouhan</span></h2>
              <p className="text-accent-blue font-bold tracking-widest uppercase text-sm">Full-Stack & AI/ML Developer</p>
            </div>
            <p className="text-text-secondary text-lg leading-relaxed max-w-2xl">
              As a developer passionate about education tech, I built SkillMirror to solve the 'confidence vs. competence' paradox in technical hiring. By combining my background in Computer Science with AI/ML techniques, this platform helps students prepare with precision.
            </p>

            {/* Skill Pills with hover effect */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-4">
              {skills.map(skill => (
                <span
                  key={skill}
                  className="skill-pill"
                >
                  {skill}
                </span>
              ))}
            </div>

            {/* Social Links */}
            <div className="flex justify-center lg:justify-start gap-6 border-t border-card-border pt-8">
              <a href="https://github.com/Jaanvichouhan34" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full border border-card-border flex items-center justify-center text-text-secondary hover:text-accent-blue hover:border-accent-blue transition-all">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" /></svg>
              </a>
              <a href="https://www.linkedin.com/in/jaanvi-chouhan" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full border border-card-border flex items-center justify-center text-text-secondary hover:text-accent-blue hover:border-accent-blue transition-all">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.761 0 5-2.239 5-5v-14c0-2.761-2.239-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" /></svg>
              </a>
              <a href="https://www.instagram.com/jaanvi_chouhan18" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full border border-card-border flex items-center justify-center text-text-secondary hover:text-accent-blue hover:border-accent-blue transition-all">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.17.054 1.805.249 2.227.412.56.216.96.474 1.38.894.42.42.678.82.894 1.38.163.422.358 1.057.412 2.227.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.054 1.17-.249 1.805-.412 2.227-.216.56-.474.96-.894 1.38-.42.42-.82.678-1.38.894-.422.163-1.057.358-2.227.412-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.17-.054-1.805-.249-2.227-.412-.56-.216-.96-.474-1.38-.894-.42-.42-.678-.82-.894-1.38-.163-.422-.358-1.057-.412-2.227-.058-1.266-.07-1.646-.07-4.85s.012-3.584.07-4.85c.054-1.17.249-1.805.412-2.227.216-.56.474-.96.894-1.38.42-.42.82-.678 1.38-.894.422-.163 1.057-.358 2.227-.412 1.266-.058 1.646-.07 4.85-.07m0-2.163c-3.259 0-3.667.014-4.947.072-1.277.057-2.148.258-2.911.555-.788.306-1.457.715-2.123 1.381-.667.666-1.075 1.335-1.381 2.123-.297.763-.498 1.634-.555 2.911-.058 1.28-.072 1.688-.072 4.947s.014 3.667.072 4.947c.057 1.277.258 2.148.555 2.911.306.788.715 1.457 1.381 2.123.666.666 1.335 1.075 2.123 1.381.763.297 1.634.498 2.911.555 1.28.058 1.688.072 4.947.072s3.667-.014 4.947-.072c1.277-.057 2.148-.258 2.911-.555.788-.306 1.457-.715 2.123-1.381.666-.667 1.075-1.335 1.381-2.123.297-.763.498-1.634.555-2.911.058-1.28.072-1.688.072-4.947s-.014-3.667-.072-4.947c-.057-1.277-.258-2.148-.555-2.911-.306-.788-.715-1.457-1.381-2.123-.666-.666-1.335-1.075-2.123-1.381-.763-.297-1.634-.498-2.911-.555-1.28-.058-1.688-.072-4.947-.072z" /><path d="M12 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8z" /><path d="M18.406 3.506a1.44 1.44 0 100 2.88 1.44 1.44 0 000-2.88z" /></svg>
              </a>
              <a href="mailto:jaanvichouhan18805@gmail.com" className="w-10 h-10 rounded-full border border-card-border flex items-center justify-center text-text-secondary hover:text-accent-blue hover:border-accent-blue transition-all">
                <Mail size={20} />
              </a>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default About;
