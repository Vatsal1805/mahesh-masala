import React from 'react';
import { Compass, Hammer, Sparkles, Package } from 'lucide-react';

export default function ProcessFlow() {
  const steps = [
    {
      icon: <Compass size={20} />,
      title: 'Farm Sourcing',
      desc: 'Selected directly from verified farmers in Gujarat, Maharashtra, and Karnataka.'
    },
    {
      icon: <Hammer size={20} />,
      title: 'Sorting & De-stemming',
      desc: 'Hand-sorted and vacuum-cleaned to remove dirt, pebbles, and stems.'
    },
    {
      icon: <Sparkles size={20} />,
      title: 'Cold Stone-Milling',
      desc: 'Ground using slow-speed mills that keep grinding temperatures below 38°C.'
    },
    {
      icon: <Package size={20} />,
      title: 'Nitrogen Sealing',
      desc: 'Packed in airtight, moisture-proof packets to lock in raw flavor and color.'
    }
  ];

  return (
    <section 
      style={{
        backgroundColor: 'var(--bg-primary)',
        padding: '8rem 0',
        borderBottom: '1px solid var(--border-gold)'
      }}
    >
      <div className="container">
        <div className="section-header">
          <span style={{ fontSize: '0.8rem', color: 'var(--accent-gold)', letterSpacing: '0.25em', textTransform: 'uppercase', display: 'block', marginBottom: '0.75rem' }}>
            MANUFACTURING
          </span>
          <h2>The Journey of Purity</h2>
          <p style={{ maxWidth: '500px', margin: '0.5rem auto 0 auto', fontSize: '0.95rem' }}>
            We follow a strictly monitored cold-milling process that preserves spice integrity.
          </p>
          <div className="divider"></div>
        </div>

        {/* Timeline Process */}
        <div 
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
            gap: '2.5rem',
            marginTop: '5rem',
            position: 'relative'
          }}
        >
          {steps.map((step, idx) => (
            <div 
              key={idx}
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'flex-start',
                padding: '2rem',
                backgroundColor: 'var(--bg-tertiary)',
                border: '1px solid var(--border-gold)',
                borderRadius: '8px',
                position: 'relative'
              }}
            >
              {/* Step number badge */}
              <div 
                style={{
                  position: 'absolute',
                  top: '1rem',
                  right: '1rem',
                  fontFamily: 'var(--font-serif)',
                  fontSize: '1.25rem',
                  color: 'rgba(207, 168, 100, 0.25)',
                  fontWeight: '600'
                }}
              >
                0{idx + 1}
              </div>

              {/* Icon */}
              <div 
                style={{
                  color: 'var(--accent-gold)',
                  marginBottom: '1.5rem',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}
              >
                {step.icon}
              </div>

              {/* Title */}
              <h3 
                style={{
                  fontSize: '1.2rem',
                  color: 'var(--text-primary)',
                  fontFamily: 'var(--font-sans)',
                  fontWeight: '600',
                  marginBottom: '0.75rem'
                }}
              >
                {step.title}
              </h3>

              {/* Desc */}
              <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', lineHeight: '1.6' }}>
                {step.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
