import React from 'react';
import { Award, ShieldCheck, Heart } from 'lucide-react';

export default function Certifications() {
  const certifications = [
    {
      icon: <ShieldCheck size={28} />,
      title: 'FSSAI Registered',
      license: 'License Status: Active',
      desc: 'Compliant with Indian Food Safety and Standards standards, ensuring hygienic processing and packing.'
    },
    {
      icon: <Award size={28} />,
      title: 'Spices Board standards',
      license: 'Pure Quality Grade',
      desc: 'Formulated in compliance with voluntary parameters of moisture, volatile oil levels, and purity.'
    },
    {
      icon: <Heart size={28} />,
      title: '100% Vegetarian',
      license: 'Certified Cruelty-Free',
      desc: 'Prepared in a strictly vegetarian spice-processing environment. Zero cross-contamination.'
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
            REGULATORY STANDARDS
          </span>
          <h2>Quality Certifications & Trust</h2>
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
          {certifications.map((cert, idx) => (
            <div 
              key={idx}
              style={{
                display: 'flex',
                gap: '1.5rem',
                alignItems: 'flex-start',
                padding: '2rem',
                border: '1px solid var(--border-gold)',
                borderRadius: '8px',
                backgroundColor: 'var(--bg-tertiary)'
              }}
            >
              <div style={{ color: 'var(--accent-gold)', marginTop: '4px' }}>
                {cert.icon}
              </div>
              <div>
                <h3 
                  style={{
                    fontSize: '1.25rem',
                    color: 'var(--text-primary)',
                    fontFamily: 'var(--font-sans)',
                    fontWeight: '600',
                    marginBottom: '0.25rem'
                  }}
                >
                  {cert.title}
                </h3>
                <span 
                  style={{
                    fontSize: '0.7rem',
                    color: 'var(--accent-gold)',
                    fontWeight: '600',
                    letterSpacing: '0.05em',
                    textTransform: 'uppercase',
                    display: 'block',
                    marginBottom: '0.75rem'
                  }}
                >
                  {cert.license}
                </span>
                <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', lineHeight: '1.6' }}>
                  {cert.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
