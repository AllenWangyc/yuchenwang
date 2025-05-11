import React from 'react';
import SectionHeader from '../../components/SectionHeader';
import './contact.styl';

export default function Contact() {
  return (
    <div id='contact' className="P-contact">
      <SectionHeader title="Contact" />
      <div className="contact-card">
        <div className="contact-item">
          <span className="contact-label">Email:</span>
          <a href="mailto:your.email@example.com" className="contact-link">
            a.wangyc@gmail.com
          </a>
        </div>
        <div className="contact-item">
          <span className="contact-label">Address:</span>
          <span className="contact-text">
            Auckland, New Zealand
          </span>
        </div>
      </div>
    </div>
  );
}