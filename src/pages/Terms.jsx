import React from 'react';

const Terms = () => {
  const sections = [
    { title: "1. Acceptance of Terms", content: "By accessing or using SkillMirror, you agree to be bound by these Terms of Service. If you do not agree to all of the terms and conditions, you may not access the service." },
    { title: "2. Use of Service", content: "SkillMirror provides diagnostic tools for educational purposes. You agree to use the service only for your personal, non-commercial use." },
    { title: "3. User Accounts", content: "You are responsible for maintaining the confidentiality of your account and password. You agree to notify us immediately of any unauthorized use of your account." },
    { title: "4. Assessment Integrity", content: "Users agree to complete assessments without external help to maintain the accuracy of the diagnostic results. Misuse of the engine may lead to account suspension." },
    { title: "5. Intellectual Property", content: "All content, features, and functionality are owned by SkillMirror and are protected by international copyright, trademark, and other intellectual property laws." },
    { title: "6. Limitation of Liability", content: "SkillMirror shall not be liable for any indirect, incidental, special, or consequential damages resulting from the use or inability to use the service." },
    { title: "7. Privacy", content: "Your use of SkillMirror is also governed by our Privacy Policy. Please review our Privacy Policy to understand our practices." },
    { title: "8. Contact", content: "If you have any questions about these Terms, please contact us at jaanvichouhan18805@gmail.com." },
  ];

  return (
    <div className="container mx-auto px-6 py-20 max-w-4xl">
      <h1 className="text-5xl md:text-6xl font-syne mb-12">Terms of <span className="gradient-text">Service</span></h1>
      <div className="space-y-12">
        {sections.map((sec, i) => (
          <div key={i} className="space-y-4">
            <h2 className="text-2xl font-bold">{sec.title}</h2>
            <p className="text-text-secondary leading-relaxed text-lg">{sec.content}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Terms;
