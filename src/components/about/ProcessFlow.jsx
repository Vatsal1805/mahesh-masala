import React, { useState, useEffect, useRef } from 'react';
import { Compass, Filter, Sparkles, Package } from 'lucide-react';

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

export default function ProcessFlow() {
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
      icon: <Compass size={20} />,
      title: 'Farm Sourcing',
      desc: 'Selected directly from verified farmers in Gujarat, Maharashtra, and Karnataka.'
    },
    {
      icon: <Filter size={20} />,
      title: 'Sorting & De-stemming',
      desc: 'Hand-sorted and vacuum-cleaned to remove dirt, pebbles, and stems.'
    },
    {
      icon: <Sparkles size={20} />,
      title: 'Authentic Grinding',
      desc: 'Authentically ground using traditional methods to preserve natural essential oils and rich flavours.'
    },
    {
      icon: <Package size={20} />,
      title: 'Airtight Moisture-Proof Sealing',
      desc: 'Packed in airtight, moisture-proof packets to lock in raw flavor and color.'
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
            MANUFACTURING
          </span>
          <h2>The Journey of Purity</h2>
          <p style={{ maxWidth: '500px', margin: '0.5rem auto 0 auto', fontSize: '0.95rem', color: 'var(--text-secondary)' }}>
            We follow a strictly monitored authentic grinding process that preserves natural spice purity, aroma, and integrity.
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
      </div>
    </section>
  );
}
