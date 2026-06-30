import React, { useState, useEffect, useRef } from 'react';
import { useWhatsApp } from '../../hooks/useWhatsApp';
import { CONFIG } from '../../config';
import { Search, MessageCircle, FileText, CheckCircle, Phone, MessageSquare } from 'lucide-react';

function TimelineItem({ step, idx, isLeft }) {
  const [isActive, setIsActive] = useState(false);
  const itemRef = useRef(null);

  useEffect(() => {
    let observer;
    const timer = setTimeout(() => {
      observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setIsActive(true);
          } else {
            // Self-healing: if pushed below viewport by layout shifts, reset to inactive
            if (entry.boundingClientRect.top > window.innerHeight) {
              setIsActive(false);
            }
          }
        },
        {
          threshold: 0.1,
          rootMargin: '0px 0px -50px 0px'
        }
      );

      if (itemRef.current) {
        observer.observe(itemRef.current);
      }
    }, 150);

    return () => {
      clearTimeout(timer);
      if (observer) {
        observer.disconnect();
      }
    };
  }, []);

  return (
    <div 
      ref={itemRef}
      className={`timeline-item ${isLeft ? 'left' : 'right'} ${isActive ? 'active' : ''}`}
    >
      <div className="timeline-node">
        {step.icon}
      </div>
      
      <div className="timeline-card">
        <span className="timeline-step-tag">Step 0{idx + 1}</span>
        <h3 style={{ 
          fontSize: '1.4rem', 
          fontFamily: 'var(--font-serif)', 
          color: 'var(--text-primary)', 
          marginBottom: '0.75rem',
          fontWeight: '500'
        }}>
          {step.title}
        </h3>
        <p style={{ fontSize: '0.9rem', lineHeight: '1.6', color: 'var(--text-secondary)' }}>
          {step.desc}
        </p>
      </div>

      <div className="timeline-spacer" />
    </div>
  );
}

export default function HowToOrder({ setActiveTab }) {
  const { getGeneralInquiryLink } = useWhatsApp();
  const containerRef = useRef(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      
      // Calculate scroll progress within this container
      const start = rect.top + window.scrollY - windowHeight / 1.5;
      const end = rect.bottom + window.scrollY - windowHeight / 1.5;
      const current = window.scrollY;
      
      if (current < start) {
        setProgress(0);
      } else if (current > end) {
        setProgress(1);
      } else {
        const calculatedProgress = (current - start) / (end - start);
        setProgress(Math.min(Math.max(calculatedProgress, 0), 1));
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const steps = [
    {
      icon: <Search size={20} />,
      title: 'Browse Spices',
      desc: 'Explore our catalog of single-origin powders, whole seeds, and signature blends.'
    },
    {
      icon: <MessageCircle size={20} />,
      title: 'WhatsApp Inquire',
      desc: 'Tap the WhatsApp button on any spice card to send a pre-filled quote inquiry.'
    },
    {
      icon: <FileText size={20} />,
      title: 'Receive Quote',
      desc: 'Our team will respond with custom pricing tiers based on your volume requirements.'
    },
    {
      icon: <CheckCircle size={20} />,
      title: 'Confirmed Delivery',
      desc: 'Confirm your order, make secure payment, and we will dispatch via trusted cargo networks.'
    }
  ];

  return (
    <section 
      style={{
        backgroundColor: 'var(--bg-primary)',
        padding: '8rem 0',
        borderBottom: '1px solid var(--border-gold)',
        overflow: 'hidden'
      }}
    >
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <span style={{ fontSize: '0.8rem', color: 'var(--accent-gold)', letterSpacing: '0.25em', textTransform: 'uppercase', display: 'block', marginBottom: '0.75rem' }}>
            ORDER PATHWAY
          </span>
          <h2>How To Procure From Us</h2>
          <p style={{ maxWidth: '500px', margin: '0.5rem auto 0 auto', fontSize: '0.95rem', color: 'var(--text-secondary)' }}>
            We work directly with wholesalers, retailers, and restaurants to deliver raw purity.
          </p>
          <div className="divider"></div>
        </div>

        {/* Scroll-guided Timeline */}
        <div ref={containerRef} className="timeline-container">
          <div className="timeline-line">
            <div 
              className="timeline-line-progress" 
              style={{ height: `${progress * 100}%` }}
            />
          </div>

          {steps.map((step, idx) => (
            <TimelineItem 
              key={idx} 
              step={step} 
              idx={idx} 
              isLeft={idx % 2 === 0} 
            />
          ))}
        </div>

        {/* Contact Banner */}
        <div 
          style={{
            marginTop: '7rem',
            textAlign: 'center',
            backgroundColor: 'var(--bg-secondary)',
            border: '1px solid var(--border-gold)',
            borderRadius: '12px',
            padding: '3.5rem 2.5rem',
            maxWidth: '750px',
            margin: '7rem auto 0 auto',
            boxShadow: '0 8px 32px rgba(0, 0, 0, 0.2)'
          }}
        >
          <span style={{ fontSize: '0.75rem', color: 'var(--accent-gold)', letterSpacing: '0.15em', textTransform: 'uppercase', display: 'block', marginBottom: '0.75rem' }}>
            HAVE QUESTIONS?
          </span>
          <h3 
            style={{
              fontSize: '2rem',
              color: 'var(--text-primary)',
              fontFamily: 'var(--font-serif)',
              marginBottom: '1rem',
              fontWeight: '400'
            }}
          >
            For Any Query Contact Us Directly
          </h3>
          <p style={{ fontSize: '0.95rem', color: 'var(--text-secondary)', marginBottom: '2.5rem', maxWidth: '550px', margin: '0 auto 2.5rem auto', lineHeight: '1.6' }}>
            We value direct communications. For inquiries regarding custom pack sizes, exports, white-labeling, sample kits, or direct orders, get in touch with our team instantly.
          </p>
          
          <div style={{ display: 'flex', gap: '1.25rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <a 
              href={getGeneralInquiryLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-gold-solid"
              style={{ borderRadius: '4px' }}
            >
              <MessageSquare size={16} />
              <span>Message on WhatsApp</span>
            </a>
            <a 
              href={`tel:${CONFIG.phonePrimary}`}
              className="btn-gold"
              style={{ borderRadius: '4px' }}
            >
              <Phone size={14} />
              <span>Call Us</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
