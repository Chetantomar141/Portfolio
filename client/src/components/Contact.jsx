import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { EnvelopeSimple, Phone, MapPin, PaperPlaneTilt, CheckCircle, WarningCircle, CircleNotch } from '@phosphor-icons/react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [status, setStatus] = useState({
    type: null, // 'success', 'error', or null
    message: '',
  });

  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setStatus({ type: null, message: '' });

    // Build payload to satisfy backend validations (subject is required)
    const payload = {
      name: formData.name,
      email: formData.email,
      message: formData.message,
      subject: `Portfolio message from ${formData.name}`,
      phone: '',
    };

    try {
      const apiUrl = import.meta.env.VITE_API_URL || 'http://localhost:5000';
      const response = await fetch(`${apiUrl}/api/contact`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });

      const data = await response.json();

      if (response.ok) {
        setStatus({
          type: 'success',
          message: data.message || 'Your message has been sent successfully!',
        });
        setFormData({
          name: '',
          email: '',
          message: '',
        });
      } else {
        setStatus({
          type: 'error',
          message: data.error || 'Something went wrong. Please check your fields and try again.',
        });
      }
    } catch (err) {
      console.error('Contact submission error:', err);
      setStatus({
        type: 'error',
        message: 'Could not connect to the backend server. Please make sure the server is running on port 5000!',
      });
    } finally {
      setIsLoading(false);
      // Auto-hide status toast after 5 seconds
      setTimeout(() => {
        setStatus({ type: null, message: '' });
      }, 5000);
    }
  };

  const contactInfos = [
    {
      icon: <Phone size={18} className="text-brand-accent" />,
      label: 'Direct Phone',
      value: '+91 8193079234',
      href: 'tel:+918193079234',
    },
    {
      icon: <EnvelopeSimple size={18} className="text-brand-accent" />,
      label: 'Direct Email',
      value: 'chetann.tomar@gmail.com',
      href: 'mailto:chetann.tomar@gmail.com',
    },
    {
      icon: <MapPin size={18} className="text-brand-accent" />,
      label: 'Location',
      value: 'Meerut, Uttar Pradesh, India',
      href: null,
    },
  ];

  return (
    <section id="contact" className="py-20 bg-brand-bg relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        {/* Title */}
        <div className="mb-12 space-y-2">
          <span className="font-mono text-xs uppercase tracking-wider text-brand-accent font-semibold">
            Inquiries
          </span>
          <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-brand-primary">
            Get In Touch
          </h2>
        </div>

        {/* Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Direct Info */}
          <div className="lg:col-span-5 space-y-6">
            <div className="space-y-3">
              <h3 className="text-lg font-semibold text-brand-primary tracking-tight">
                Let's discuss your next project.
              </h3>
              <p className="text-xs md:text-sm text-brand-secondary leading-relaxed font-sans max-w-sm">
                Have an opening or need assistance launching an enterprise platform? Send an inquiry and let's coordinate.
              </p>
            </div>

            <div className="flex flex-col gap-3">
              {contactInfos.map((info, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-4 p-4 bg-brand-surface border border-brand-border rounded-lg"
                >
                  <div className="p-2 bg-brand-bg border border-brand-border rounded-md shadow-sm">
                    {info.icon}
                  </div>
                  <div>
                    <span className="block text-[10px] font-bold text-brand-secondary uppercase tracking-wider font-mono">
                      {info.label}
                    </span>
                    {info.href ? (
                      <a
                        href={info.href}
                        className="text-xs md:text-sm font-semibold text-brand-primary hover:text-brand-accent transition-colors"
                      >
                        {info.value}
                      </a>
                    ) : (
                      <span className="text-xs md:text-sm font-semibold text-brand-primary">
                        {info.value}
                      </span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Clean Form */}
          <div className="lg:col-span-7">
            <form
              onSubmit={handleSubmit}
              className="bg-brand-surface border border-brand-border p-6 rounded-lg space-y-4"
              data-testid="contact-form"
            >
              {/* Full Name */}
              <div className="space-y-1.5">
                <label className="block text-[10px] font-bold text-brand-primary uppercase tracking-wider font-mono">
                  Full Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Enter your name"
                  required
                  className="w-full bg-brand-bg border border-brand-border hover:border-brand-accent/20 focus:border-brand-accent focus:ring-1 focus:ring-brand-accent px-4 py-2.5 rounded-md text-xs md:text-sm text-brand-primary placeholder:text-brand-secondary/60 outline-none transition-all duration-150"
                  data-testid="contact-name-input"
                />
              </div>

              {/* Email Address */}
              <div className="space-y-1.5">
                <label className="block text-[10px] font-bold text-brand-primary uppercase tracking-wider font-mono">
                  Email Address
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="name@company.com"
                  required
                  className="w-full bg-brand-bg border border-brand-border hover:border-brand-accent/20 focus:border-brand-accent focus:ring-1 focus:ring-brand-accent px-4 py-2.5 rounded-md text-xs md:text-sm text-brand-primary placeholder:text-brand-secondary/60 outline-none transition-all duration-150"
                  data-testid="contact-email-input"
                />
              </div>

              {/* Message */}
              <div className="space-y-1.5">
                <label className="block text-[10px] font-bold text-brand-primary uppercase tracking-wider font-mono">
                  Your Message
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Describe your inquiry..."
                  required
                  rows={4}
                  className="w-full bg-brand-bg border border-brand-border hover:border-brand-accent/20 focus:border-brand-accent focus:ring-1 focus:ring-brand-accent px-4 py-2.5 rounded-md text-xs md:text-sm text-brand-primary placeholder:text-brand-secondary/60 outline-none transition-all duration-150 resize-none"
                  data-testid="contact-message-input"
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isLoading}
                className="w-full inline-flex items-center justify-center gap-2 bg-brand-accent hover:bg-brand-accent/90 text-white font-medium text-xs md:text-sm py-3 px-5 rounded-md transition-all duration-150 disabled:opacity-75 disabled:pointer-events-none hover:shadow-sm"
                data-testid="contact-submit-btn"
              >
                {isLoading ? (
                  <>
                    <CircleNotch size={14} className="animate-spin" /> Sending...
                  </>
                ) : (
                  <>
                    Send Message <PaperPlaneTilt size={14} weight="bold" />
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Floating Success/Error Toast Overlay */}
      <AnimatePresence>
        {status.type && (
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            className="fixed bottom-6 right-6 z-50 flex items-center gap-3.5 px-5 py-4 bg-brand-surface border rounded-lg shadow-lg"
            style={{
              borderColor: status.type === 'success' ? '#22C55E' : '#EF4444',
            }}
          >
            {status.type === 'success' ? (
              <CheckCircle size={20} className="text-green-500" />
            ) : (
              <WarningCircle size={20} className="text-red-500" />
            )}
            <span className="text-xs md:text-sm font-semibold text-brand-primary font-sans max-w-xs">
              {status.message}
            </span>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Contact;
