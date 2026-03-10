'use client';

import { useState } from 'react';
import { FiUser, FiMail, FiMessageSquare, FiMapPin, FiPhone, FiSend } from 'react-icons/fi';

export default function ContactPage() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSent, setIsSent] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send the form data to a server
    console.log('Form submitted:', formData);
    setIsSent(true);
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <div className="bg-background text-text-primary">
      {/* Hero Section */}
      <section className="bg-card shadow-soft">
        <div className="container mx-auto px-6 py-24 text-center">
          <h1 className="text-h1 text-transparent bg-clip-text bg-primary-gradient">
            Get in Touch
          </h1>
          <p className="text-body text-text-secondary mt-4 max-w-2xl mx-auto">
            We'd love to hear from you! Whether you have a question about our features, pricing, or anything else, our team is ready to answer all your questions.
          </p>
        </div>
      </section>

      {/* Contact Form and Info Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-card p-8 rounded-xl shadow-soft">
              <h2 className="text-h2 mb-6">Send us a Message</h2>
              {isSent ? (
                <div className="text-center p-8 bg-background rounded-lg">
                  <FiSend className="text-5xl text-primary mx-auto mb-4" />
                  <h3 className="text-h3 mb-2">Message Sent!</h3>
                  <p className="text-text-secondary">Thank you for reaching out. We'll get back to you as soon as possible.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="relative">
                    <FiUser className="absolute top-1/2 -translate-y-1/2 left-4 text-text-muted" />
                    <input type="text" name="name" placeholder="Your Name" required onChange={handleChange} value={formData.name} className="w-full pl-12 pr-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-from" />
                  </div>
                  <div className="relative">
                    <FiMail className="absolute top-1/2 -translate-y-1/2 left-4 text-text-muted" />
                    <input type="email" name="email" placeholder="Your Email" required onChange={handleChange} value={formData.email} className="w-full pl-12 pr-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-from" />
                  </div>
                  <div className="relative">
                    <FiMessageSquare className="absolute top-6 -translate-y-1/2 left-4 text-text-muted" />
                    <textarea name="message" placeholder="Your Message" required rows={5} onChange={handleChange} value={formData.message} className="w-full pl-12 pr-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-from"></textarea>
                  </div>
                  <button type="submit" className="w-full bg-primary-gradient text-white font-bold py-3 px-6 rounded-lg shadow-glow hover:scale-105 transition-transform duration-300 flex items-center justify-center">
                    <FiSend className="mr-2" /> Send Message
                  </button>
                </form>
              )}
            </div>

            {/* Contact Info */}
            <div className="space-y-8">
              <div>
                <h3 className="text-h3 mb-4">Contact Information</h3>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <FiMail className="text-primary mr-4 text-2xl" />
                    <span className="text-text-secondary">hello@creativesparx.io</span>
                  </div>
                  <div className="flex items-center">
                    <FiPhone className="text-primary mr-4 text-2xl" />
                    <span className="text-text-secondary">+1 (555) 123-4567</span>
                  </div>
                  <div className="flex items-start">
                    <FiMapPin className="text-primary mr-4 text-2xl mt-1" />
                    <span className="text-text-secondary">123 Creative Way<br />San Francisco, CA 94107</span>
                  </div>
                </div>
              </div>
              <div className="h-96 w-full rounded-xl overflow-hidden shadow-soft">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.284387236194!2d-122.4014136846815!3d37.78369697975815!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085808c4c154f73%3A0x1c4852c0b7f8f9e6!2sSan%20Francisco%20Museum%20of%20Modern%20Art!5e0!3m2!1sen!2sus!4v1678886364585!5m2!1sen!2sus"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen={true}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
