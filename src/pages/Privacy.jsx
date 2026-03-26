import React from 'react';

const Privacy = () => {
  const sections = [
    { title: "1. Information We Collect", content: "We collect information you provide directly to us when you create an account, such as your name, email, and performance data from assessments." },
    { title: "2. How We Use Your Information", content: "We use the information to generate your diagnostic reports, personalize your learning roadmap, and improve our AI diagnostic engine." },
    { title: "3. Data Sharing", content: "We do not sell your personal data. We may share anonymous, aggregated data for benchmarking purposes." },
    { title: "4. Data Security", content: "We implement industry-standard security measures to protect your personal information from unauthorized access or disclosure." },
    { title: "5. Your Rights", content: "You have the right to access, correct, or delete your personal information at any time through your account settings." },
    { title: "6. Cookies", content: "We use cookies to enhance your experience and remember your preferences like theme mode." },
    { title: "7. Contact", content: "For any privacy-related questions, please reach out to jaanvichouhan18805@gmail.com." },
  ];

  return (
    <div className="container mx-auto px-6 py-20 max-w-4xl">
      <h1 className="text-5xl md:text-6xl font-syne mb-12">Privacy <span className="gradient-text">Policy</span></h1>
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

export default Privacy;
