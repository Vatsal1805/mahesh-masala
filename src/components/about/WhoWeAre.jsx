import React from 'react';
import { CONFIG } from '../../config';

export default function WhoWeAre() {
  return (
    <section 
      style={{
        backgroundColor: 'var(--bg-primary)',
        padding: '8rem 0',
        borderBottom: '1px solid var(--border-gold)'
      }}
    >
      <div className="container">
        <div 
          className="who-we-are-grid"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '5rem',
            alignItems: 'center'
          }}
        >
          {/* Text narrative */}
          <div>
            <span style={{ fontSize: '0.8rem', color: 'var(--accent-gold)', letterSpacing: '0.25em', textTransform: 'uppercase', display: 'block', marginBottom: '0.75rem' }}>
              OUR ROOTS
            </span>
            <h2 style={{ fontSize: '2.5rem', marginBottom: '1.75rem', fontFamily: 'var(--font-serif)' }}>
              From a Humble Nadiad Home to Kitchens Across India
            </h2>
            <p style={{ fontSize: '0.95rem', lineHeight: '1.8', marginBottom: '1.5rem', fontWeight: '300' }}>
              Mahesh Masala was born in <strong>{CONFIG.establishedYear}</strong> with a singular promise: to bring clean, unadulterated spices into everyday homes. Starting as a small scale, home-grown venture (Gruhudhyog) in Nadiad, Gujarat, we manually sorted and ground spices using authentic traditional methods in small batches to preserve their taste, color, and natural oils.
            </p>
            <p style={{ fontSize: '0.95rem', lineHeight: '1.8', marginBottom: '1.5rem', fontWeight: '300' }}>
              Over the last two decades, our scale has grown, but our values remain anchored in that home kitchen. We work with farmers in the finest growing regions—securing cumin from local Gujarat markets, chilly from Guntur, and turmeric from Sangli—bringing the purest ingredients to our modern processing facility in Nadiad.
            </p>
            <p style={{ fontSize: '0.95rem', lineHeight: '1.8', color: 'var(--accent-gold)', fontWeight: '400', fontFamily: 'var(--font-serif)', fontSize: '1.15rem', fontStyle: 'italic' }}>
              We do not add starch, colorants, or chemical stabilizers. When you smell a Mahesh Masala spice, you are smelling raw, uncompromised nature.
            </p>
          </div>

          {/* Styled visual frame block */}
          <div 
            style={{
              position: 'relative',
              padding: '2rem',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center'
            }}
          >
            {/* Background absolute border decoration */}
            <div 
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '85%',
                height: '85%',
                border: '1px solid var(--border-gold)',
                zIndex: 1
              }}
            />

            {/* Overlapping Card Content */}
            <div 
              style={{
                backgroundColor: 'var(--bg-tertiary)',
                border: '1px solid var(--accent-gold)',
                borderRadius: '8px',
                padding: '3rem 2.5rem',
                zIndex: 2,
                transform: 'translate(15px, 15px)',
                boxShadow: '0 12px 48px rgba(0,0,0,0.5)',
                maxWidth: '420px'
              }}
            >
              <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.75rem', color: 'var(--accent-gold)', marginBottom: '1.25rem' }}>
                Guaranteed Purity
              </h3>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                {[
                  { title: 'Zero Adulteration', text: 'No starch, papaya seed powder, or rice husk fillers. Free from Sudan dye and aflatoxin.' },
                  { title: 'Authentic Grinding', text: 'Authentic grinding preserves the natural oils, richness, and aroma without heating.' },
                  { title: 'Double Polished Seeds', text: 'Only uniform, healthy grains are fed into our pulverizers.' }
                ].map((item, idx) => (
                  <li key={idx} style={{ display: 'flex', flexDirection: 'column', gap: '0.25rem' }}>
                    <span style={{ fontWeight: '600', fontSize: '0.9rem', color: 'var(--text-primary)' }}>
                      ✓ {item.title}
                    </span>
                    <span style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', paddingLeft: '1.25rem' }}>
                      {item.text}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
