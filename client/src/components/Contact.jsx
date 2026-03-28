import React, { useState } from 'react';
import { portfolioData } from '../data/portfolioData';

const Contact = () => {
  const { email, linkedin, github } = portfolioData.personal;

  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [status, setStatus] = useState('idle'); // idle | sending | sent

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Build a mailto link with the form data
    const mailtoLink = `mailto:${email}?subject=${encodeURIComponent(
      form.subject || 'Portfolio Contact'
    )}&body=${encodeURIComponent(
      `Hi Prakul,\n\nName: ${form.name}\nEmail: ${form.email}\n\n${form.message}`
    )}`;

    setStatus('sending');
    window.location.href = mailtoLink;

    // Show success feedback after brief delay
    setTimeout(() => {
      setStatus('sent');
      setForm({ name: '', email: '', subject: '', message: '' });
      setTimeout(() => setStatus('idle'), 4000);
    }, 1000);
  };

  const contactLinks = [
    {
      id: 'contact-email',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      label: 'Email',
      value: email,
      href: `mailto:${email}`,
      color: '#5b99ff',
    },
    {
      id: 'contact-linkedin',
      icon: (
        <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
        </svg>
      ),
      label: 'LinkedIn',
      value: 'linkedin.com/in/prakul58',
      href: linkedin,
      color: '#0a66c2',
    },
    {
      id: 'contact-github',
      icon: (
        <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
          <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
        </svg>
      ),
      label: 'GitHub',
      value: 'github.com/prakul-dhiman',
      href: github,
      color: '#ffffff',
    },
  ];

  return (
    <section id="contact" className="py-20 relative z-10 max-w-5xl mx-auto px-4 sm:px-6">
      <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-white tracking-tight">
        Get In <span className="text-[#5b99ff]">Touch</span>
      </h2>
      <p className="text-center text-gray-400 mb-14 text-base max-w-xl mx-auto">
        I'm open to internship opportunities, collaborations, and interesting projects. Feel free to reach out!
      </p>

      <div className="flex flex-col lg:flex-row gap-8">
        {/* Contact Links */}
        <div className="w-full lg:w-2/5 space-y-4">
          {contactLinks.map((link) => (
            <a
              key={link.id}
              id={link.id}
              href={link.href}
              target={link.href.startsWith('mailto') ? '_self' : '_blank'}
              rel="noreferrer"
              className="glass-card flex items-center gap-5 p-5 rounded-2xl border border-white/5 hover:border-white/15 hover:-translate-y-0.5 transition-all duration-300 group"
            >
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0 transition-colors duration-300"
                style={{ backgroundColor: `${link.color}15`, color: link.color }}
              >
                {link.icon}
              </div>
              <div className="min-w-0">
                <p className="text-xs text-gray-500 font-medium uppercase tracking-wider mb-0.5">{link.label}</p>
                <p className="text-white font-semibold text-sm truncate group-hover:text-[#5b99ff] transition-colors">{link.value}</p>
              </div>
              <svg className="w-5 h-5 text-gray-600 group-hover:text-[#5b99ff] transition-colors ml-auto shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          ))}

          {/* Resume Download card */}
          <div className="glass-card p-5 rounded-2xl border border-[#5b99ff]/20 bg-[#5b99ff]/5 mt-6">
            <p className="text-sm font-semibold text-white mb-3">📄 Resume</p>
            <p className="text-xs text-gray-400 mb-4">Download or view my resume to learn more about my experience.</p>
            <div className="flex gap-3">
              <a
                href="https://drive.google.com/uc?export=download&id=1obBVMzTwSjxnwbOfk5TKtdmSbKHBnB8R"
                download="Prakul_Dhiman_Resume.pdf"
                id="contact-download-resume"
                className="flex-1 text-center px-4 py-2.5 bg-[#5b99ff] text-white text-sm font-bold rounded-xl hover:bg-[#4a88ee] transition-colors"
              >
                Download
              </a>
              <a
                href="https://drive.google.com/file/d/1obBVMzTwSjxnwbOfk5TKtdmSbKHBnB8R/view?usp=sharing"
                target="_blank"
                rel="noreferrer"
                id="contact-view-resume"
                className="flex-1 text-center px-4 py-2.5 bg-white/5 border border-white/10 text-white text-sm font-semibold rounded-xl hover:bg-white/10 transition-colors"
              >
                View
              </a>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="w-full lg:w-3/5 glass-card p-8 rounded-2xl border border-white/5">
          <h3 className="text-xl font-bold text-white mb-6">Send a Message</h3>

          {/* Success Toast */}
          {status === 'sent' && (
            <div className="flex items-center gap-3 p-4 mb-6 bg-green-500/10 border border-green-500/20 rounded-xl text-green-400 text-sm animate-pulse">
              <svg className="w-5 h-5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              Message sent! Your email client should have opened. I'll reply soon 🚀
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div>
                <label className="block text-xs text-gray-400 font-medium mb-2 uppercase tracking-wider">
                  Name <span className="text-red-400">*</span>
                </label>
                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="John Doe"
                  id="form-name"
                  className="w-full bg-[#0d0d14] text-white border border-white/8 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#5b99ff]/50 focus:bg-[#0d0d18] transition-all placeholder:text-gray-600"
                  required
                />
              </div>
              <div>
                <label className="block text-xs text-gray-400 font-medium mb-2 uppercase tracking-wider">
                  Email <span className="text-red-400">*</span>
                </label>
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="john@example.com"
                  id="form-email"
                  className="w-full bg-[#0d0d14] text-white border border-white/8 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#5b99ff]/50 focus:bg-[#0d0d18] transition-all placeholder:text-gray-600"
                  required
                />
              </div>
            </div>
            <div>
              <label className="block text-xs text-gray-400 font-medium mb-2 uppercase tracking-wider">
                Subject <span className="text-red-400">*</span>
              </label>
              <input
                type="text"
                name="subject"
                value={form.subject}
                onChange={handleChange}
                placeholder="Internship Inquiry / Collaboration"
                id="form-subject"
                className="w-full bg-[#0d0d14] text-white border border-white/8 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#5b99ff]/50 focus:bg-[#0d0d18] transition-all placeholder:text-gray-600"
                required
              />
            </div>
            <div>
              <label className="block text-xs text-gray-400 font-medium mb-2 uppercase tracking-wider">
                Message <span className="text-red-400">*</span>
              </label>
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                placeholder="Hi Prakul, I'd like to discuss..."
                rows="5"
                id="form-message"
                className="w-full bg-[#0d0d14] text-white border border-white/8 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#5b99ff]/50 focus:bg-[#0d0d18] transition-all resize-none placeholder:text-gray-600"
                required
              ></textarea>
            </div>

            <button
              type="submit"
              id="form-submit"
              disabled={status === 'sending'}
              className="w-full bg-[#5b99ff] hover:bg-[#4a88ee] disabled:opacity-60 disabled:cursor-not-allowed text-white font-bold py-3.5 rounded-xl transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-[#5b99ff]/20 flex items-center justify-center gap-2"
            >
              {status === 'sending' ? (
                <>
                  <svg className="w-4 h-4 animate-spin" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"></path>
                  </svg>
                  Opening email client...
                </>
              ) : (
                <>
                  Send Message
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                  </svg>
                </>
              )}
            </button>

            <p className="text-center text-xs text-gray-600">
              Clicking "Send Message" will open your email client pre-filled with your details.
            </p>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
