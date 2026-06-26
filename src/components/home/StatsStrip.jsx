import React from 'react';
import { CONFIG } from '../../config';

export default function StatsStrip({ setActiveTab }) {
  const stats = [
    {
      value: CONFIG.establishedYear,
      label: 'ESTABLISHED YEAR',
      desc: 'Formed as a local home-industry (Gruh Udhyog) in Nadiad.'
    },
    {
      value: '30+',
      label: 'ARTISANAL SPICES',
      desc: 'Single-origin pure powders and secret heritage blends.'
    },
    {
      value: '100%',
      label: 'PURE COMMITTED',
      desc: 'Zero fillers, artificial colors, or chemical additives.'
    }
  ];

  return (
    <section 
      style={{
        backgroundColor: 'var(--bg-secondary)',
        borderBottom: '1px solid var(--border-gold)',
        padding: '5rem 0'
      }}
    >
      <div className="container">
        <div 
          className="stats-grid"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
            gap: '2.5rem',
            alignItems: 'start'
          }}
        >
          {stats.map((stat, i) => (
            <div 
              key={i} 
              style={{
                borderLeft: '1px solid var(--accent-gold)',
                paddingLeft: '2rem',
                display: 'flex',
                flexDirection: 'column',
                gap: '0.5rem'
              }}
            >
              <div 
                style={{
                  fontFamily: 'var(--font-serif)',
                  fontSize: '3.5rem',
                  color: 'var(--accent-gold)',
                  lineHeight: '1',
                  fontWeight: '400'
                }}
              >
                {stat.value}
              </div>
              <div 
                style={{
                  fontFamily: 'var(--font-sans)',
                  fontSize: '0.8rem',
                  fontWeight: '600',
                  letterSpacing: '0.15em',
                  color: 'var(--text-primary)'
                }}
              >
                {stat.label}
              </div>
              <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', lineHeight: '1.5' }}>
                {stat.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
