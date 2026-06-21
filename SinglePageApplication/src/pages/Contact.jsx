import React, { useState } from 'react';
import { Send, MapPin, Mail, Phone, CheckCircle } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.name && formData.email && formData.message) {
      setSubmitted(true);
      setTimeout(() => {
        setSubmitted(false);
        setFormData({ name: '', email: '', message: '' });
      }, 4000);
    }
  };

  return (
    <div className="fade-in-slide">
      <div className="grid-2">
        <div className="spatial-card" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
          <div>
            <span className="vision-badge">Connect</span>
            <h1>Get In Touch</h1>
            <p style={{ marginBottom: '2rem' }}>
              Have questions about integrating Spatial UI paradigms into your project? Send a message, and our team will guide you.
            </p>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
              <div className="action-btn"><Mail size={20} /></div>
              <div>
                <p style={{ margin: 0, fontSize: '0.85rem', color: 'var(--text-muted)' }}>Email us at</p>
                <p style={{ margin: 0, fontWeight: 600 }}>spatial@gmail.com</p>
              </div>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
              <div className="action-btn"><Phone size={20} /></div>
              <div>
                <p style={{ margin: 0, fontSize: '0.85rem', color: 'var(--text-muted)' }}>Call center</p>
                <p style={{ margin: 0, fontWeight: 600 }}>+1 (800) 555-SPATIAL</p>
              </div>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
              <div className="action-btn"><MapPin size={20} /></div>
              <div>
                <p style={{ margin: 0, fontSize: '0.85rem', color: 'var(--text-muted)' }}>Headquarters</p>
                <p style={{ margin: 0, fontWeight: 600 }}>Lucknow,INDIA</p>
              </div>
            </div>
          </div>
        </div>

        <div className="spatial-card">
          {submitted ? (
            <div style={{ textAlign: 'center', padding: '3rem 1rem', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1.5rem' }}>
              <CheckCircle size={64} style={{ color: 'var(--accent-color)', animation: 'scaleUp 0.5s ease-out' }} />
              <div>
                <h2>Message Dispatched!</h2>
                <p style={{ marginTop: '0.5rem' }}>Thank you {formData.name}. We will review your entry and respond shortly.</p>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit}>
              <h2>Send an Inquiry</h2>
              <p style={{ marginBottom: '1.5rem', fontSize: '0.9rem' }}>Fill in the secure contact fields below.</p>

              <div className="glass-input-group">
                <label htmlFor="user-name">Full Name</label>
                <input
                  id="user-name"
                  type="text"
                  required
                  className="glass-input"
                  placeholder="e.g. xyz"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                />
              </div>

              <div className="glass-input-group">
                <label htmlFor="user-email">Email Address</label>
                <input
                  id="user-email"
                  type="email"
                  required
                  className="glass-input"
                  placeholder="e.g. john@example.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                />
              </div>

              <div className="glass-input-group">
                <label htmlFor="user-msg">Your Message</label>
                <textarea
                  id="user-msg"
                  required
                  rows={4}
                  className="glass-input"
                  placeholder="Describe your design vision..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  style={{ resize: 'none' }}
                />
              </div>

              <button type="submit" className="btn-primary" style={{ width: '100%', justifyContent: 'center' }}>
                <Send size={18} /> Send Message
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
