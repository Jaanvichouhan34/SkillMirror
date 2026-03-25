import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, Send, CheckCircle2 } from 'lucide-react';
import Card from '../components/ui/Card';
import Button from '../components/ui/Button';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      // Connect to Formspree for actual email delivery
      // Replace 'YOUR_ID_HERE' with your actual Formspree ID (e.g., mnqeobdr)
      const response = await fetch('https://formspree.io/f/xqegkavv', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        setLoading(false);
        setSubmitted(true);
      } else {
        throw new Error('Could not send message. Connection error.');
      }
    } catch (err) {
      setLoading(false);
      setError('Something went wrong. Please check your connection.');
    }
  };

  const resetForm = () => {
    setFormData({ name: '', email: '', subject: '', message: '' });
    setSubmitted(false);
    setError(null);
  };

  const contactInfo = [
    {
      icon: <Mail />,
      title: "Email",
      value: "jaanvichouhan18805@gmail.com",
      link: "mailto:jaanvichouhan18805@gmail.com"
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
        </svg>
      ),
      title: "GitHub",
      value: "Jaanvichouhan34",
      link: "https://github.com/Jaanvichouhan34"
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
        </svg>
      ),
      title: "LinkedIn",
      value: "Jaanvi Chouhan",
      link: "https://www.linkedin.com/in/jaanvi-chouhan"
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.17.054 1.805.249 2.227.412.56.216.96.474 1.38.894.42.42.678.82.894 1.38.163.422.358 1.057.412 2.227.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.054 1.17-.249 1.805-.412 2.227-.216.56-.474.96-.894 1.38-.42.42-.82.678-1.38.894-.422.163-1.057.358-2.227.412-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.17-.054-1.805-.249-2.227-.412-.56-.216-.96-.474-1.38-.894-.42-.42-.678-.82-.894-1.38-.163-.422-.358-1.057-.412-2.227-.058-1.266-.07-1.646-.07-4.85s.012-3.584.07-4.85c.054-1.17.249-1.805.412-2.227.216-.56.474-.96.894-1.38.42-.42.82-.678 1.38-.894.422-.163 1.057-.358 2.227-.412 1.266-.058 1.646-.07 4.85-.07m0-2.163c-3.259 0-3.667.014-4.947.072-1.277.057-2.148.258-2.911.555-.788.306-1.457.715-2.123 1.381-.667.666-1.075 1.335-1.381 2.123-.297.763-.498 1.634-.555 2.911-.058 1.28-.072 1.688-.072 4.947s.014 3.667.072 4.947c.057 1.277.258 2.148.555 2.911.306.788.715 1.457 1.381 2.123.666.666 1.335 1.075 2.123 1.381.763.297 1.634.498 2.911.555 1.28.058 1.688.072 4.947.072s3.667-.014 4.947-.072c1.277-.057 2.148-.258 2.911-.555.788-.306 1.457-.715 2.123-1.381.666-.667 1.075-1.335 1.381-2.123.297-.763.498-1.634.555-2.911.058-1.28.072-1.688.072-4.947s-.014-3.667-.072-4.947c-.057-1.277-.258-2.148-.555-2.911-.306-.788-.715-1.457-1.381-2.123-.666-.666-1.335-1.075-2.123-1.381-.763-.297-1.634-.498-2.911-.555-1.28-.058-1.688-.072-4.947-.072z" /><path d="M12 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8z" /><path d="M18.406 3.506a1.44 1.44 0 100 2.88 1.44 1.44 0 000-2.88z" />
        </svg>
      ),
      title: "Instagram",
      value: "@jaanvi_chouhan18",
      link: "https://www.instagram.com/jaanvi_chouhan18"
    },
  ];

  return (
    <div className="container mx-auto px-6 py-20">
      <div className="text-center max-w-3xl mx-auto mb-20">
        <h1 className="text-5xl md:text-7xl font-syne mb-6">Get in <span className="gradient-text">Touch</span></h1>
        <p className="text-xl text-text-secondary">Have questions or feedback? We'd love to hear from you.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
        {/* LEFT: Contact Info */}
        <div className="flex flex-col gap-6">
          {contactInfo.map((info, i) => (
            <a key={i} href={info.link} target="_blank" rel="noopener noreferrer">
              <Card className="flex items-center gap-6 p-6 hover:-translate-y-1 transition-transform">
                <div className="w-12 h-12 rounded-xl bg-accent-blue/10 text-accent-blue flex items-center justify-center">
                  {info.icon}
                </div>
                <div>
                  <h4 className="text-sm font-bold text-text-secondary uppercase tracking-widest">{info.title}</h4>
                  <p className="text-lg font-medium">{info.value}</p>
                </div>
              </Card>
            </a>
          ))}
        </div>

        {/* RIGHT: Form or Success */}
        <Card className="p-8 md:p-12 relative overflow-hidden">
          <AnimatePresence mode="wait">
            {submitted ? (
              <motion.div
                key="success"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                className="flex flex-col items-center justify-center py-16 text-center gap-6"
              >
                <div className="w-24 h-24 rounded-full bg-accent-green/20 text-accent-green flex items-center justify-center">
                  <CheckCircle2 size={56} />
                </div>
                <div>
                  <h3 className="text-3xl font-bold mb-3">Message Sent! ✅</h3>
                  <p className="text-text-secondary text-lg">Jaanvi will reply within 24 hours.</p>
                </div>
                <Button variant="outline" onClick={resetForm} className="mt-4">
                  Send Another Message
                </Button>
              </motion.div>
            ) : (
              <motion.form
                key="form"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onSubmit={handleSubmit}
                className="space-y-6"
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-text-secondary ml-1">Name</label>
                    <input
                      required
                      type="text"
                      placeholder="Your Name"
                      className="w-full bg-surface/40 border border-card-border rounded-xl py-3 px-4 focus:outline-none focus:border-accent-blue transition-colors"
                      value={formData.name}
                      onChange={e => setFormData({ ...formData, name: e.target.value })}
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-text-secondary ml-1">Email</label>
                    <input
                      required
                      type="email"
                      placeholder="Your Email"
                      className="w-full bg-surface/40 border border-card-border rounded-xl py-3 px-4 focus:outline-none focus:border-accent-blue transition-colors"
                      value={formData.email}
                      onChange={e => setFormData({ ...formData, email: e.target.value })}
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-text-secondary ml-1">Subject</label>
                  <input
                    required
                    type="text"
                    placeholder="What is this about?"
                    className="w-full bg-surface/40 border border-card-border rounded-xl py-3 px-4 focus:outline-none focus:border-accent-blue transition-colors"
                    value={formData.subject}
                    onChange={e => setFormData({ ...formData, subject: e.target.value })}
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-text-secondary ml-1">Message</label>
                  <textarea
                    required
                    rows="5"
                    placeholder="Your message..."
                    className="w-full bg-surface/40 border border-card-border rounded-xl py-3 px-4 focus:outline-none focus:border-accent-blue transition-colors resize-none"
                    value={formData.message}
                    onChange={e => setFormData({ ...formData, message: e.target.value })}
                  />
                </div>

                {error && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="p-4 bg-red-500/10 border border-red-500/20 rounded-xl text-red-500 text-sm font-bold"
                  >
                    {error}
                  </motion.div>
                )}

                <Button
                  type="submit"
                  disabled={loading}
                  className="w-full py-4 text-lg"
                >
                  {loading ? 'Sending…' : <>Send Message <Send size={20} className="ml-2" /></>}
                </Button>
              </motion.form>
            )}
          </AnimatePresence>
        </Card>
      </div>
    </div>
  );
};

export default Contact;
