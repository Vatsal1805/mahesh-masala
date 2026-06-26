import React from 'react';
import { Leaf, Award, HeartHandshake } from 'lucide-react';

export default function Values() {
  const list = [
    {
      icon: <Leaf size={24} />,
      title: 'Purity First',
      desc: 'We refuse to add artificial dye, salt-boosters, or husk bulkers. Every gram you receive is 100% natural, sorted spice.'
    },
    {
      icon: <Award size={24} />,
      title: 'True Authenticity',
      desc: 'Our spice milling procedures mimic traditional pestle-grinding. This retains the volatile oils that give Indian spices their deep medicinal benefits.'
    },
    {
      icon: <HeartHandshake size={24} />,
      title: 'Absolute Trust',
      desc: 'For wholesale distributors and retail vendors, we maintain strict supply-chain consistency and consistent taste profiles year-round.'
    }
  ];

  return (
    <section 
      style={{
        backgroundColor: 'var(--bg-secondary)',
        padding: '8rem 0',
        borderBottom: '1px solid var(--border-gold)'
      }}
    >
      <div className="container">
        <div className="section-header">
          <span style={{ fontSize: '0.8rem', color: 'var(--accent-gold)', letterSpacing: '0.25em', textTransform: 'uppercase', display: 'block', marginBottom: '0.75rem' }}>
            BRAND BELIEFS
          </span>
          <h2>What We Stand For</h2>
          <div className="divider"></div>
        </div>

        <div 
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '3rem',
            marginTop: '4rem'
          }}
        >
          {list.map((item, idx) => (
            <div 
              key={idx}
              style={{
                textAlign: 'center',
                padding: '3rem 2rem',
                border: '1px solid var(--border-gold)',
                borderRadius: '8px',
                backgroundColor: 'var(--bg-tertiary)',
                transition: 'var(--transition-smooth)'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = 'var(--accent-gold)';
                e.currentTarget.style.boxShadow = '0 8px 30px rgba(207, 168, 100, 0.08)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = 'var(--border-gold)';
                e.currentTarget.style.boxShadow = 'none';
              }}
            >
              <div 
                style={{
                  color: 'var(--accent-gold)',
                  marginBottom: '1.25rem',
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  width: '48px',
                  height: '48px',
                  borderRadius: '50%',
                  backgroundColor: 'rgba(207, 168, 100, 0.05)',
                  border: '1px solid rgba(207, 168, 100, 0.15)'
                }}
              >
                {item.icon}
              </div>
              <h3 
                style={{
                  fontSize: '1.4rem',
                  color: 'var(--text-primary)',
                  fontFamily: 'var(--font-serif)',
                  marginBottom: '1rem'
                }}
              >
                {item.title}
              </h3>
              <p style={{ fontSize: '0.875rem', color: 'var(--text-secondary)', lineHeight: '1.6' }}>
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
