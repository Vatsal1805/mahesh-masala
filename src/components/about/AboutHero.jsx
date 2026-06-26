import React from 'react';
import { Landmark } from 'lucide-react';

export default function AboutHero() {
  return (
    <section 
      style={{
        position: 'relative',
        padding: '8rem 0 6rem 0',
        backgroundColor: 'var(--bg-secondary)',
        borderBottom: '1px solid var(--border-gold)',
        overflow: 'hidden'
      }}
    >
      {/* Decorative ambient gold glow */}
      <div 
        style={{
          position: 'absolute',
          top: '-150px',
          left: '50%',
          transform: 'translateX(-50%)',
          width: '500px',
          height: '250px',
          backgroundColor: 'rgba(207, 168, 100, 0.05)',
          filter: 'blur(100px)',
          borderRadius: '50%',
          pointerEvents: 'none'
        }}
      />

      <div className="container" style={{ position: 'relative', zIndex: 2, textAlign: 'center' }}>
        <div 
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.5rem',
            color: 'var(--accent-gold)',
            fontSize: '0.8rem',
            fontWeight: '600',
            letterSpacing: '0.2em',
            textTransform: 'uppercase',
            marginBottom: '1rem'
          }}
        >
          <Landmark size={14} />
          <span>OUR STORY</span>
        </div>

        <h1 
          style={{
            fontFamily: 'var(--font-serif)',
            fontSize: '3.5rem',
            color: 'var(--text-primary)',
            marginBottom: '1rem',
            fontWeight: '400'
          }}
        >
          Heritage & Craftsmanship
        </h1>
        
        <p 
          style={{
            fontSize: '1.1rem',
            color: 'var(--text-secondary)',
            maxWidth: '600px',
            margin: '0 auto',
            lineHeight: '1.6',
            fontWeight: '300'
          }}
        >
          Since 1999, Mahesh Masala has been grinding raw spices the traditional way in Nadiad, Gujarat. Here is the path we have travelled to bring pure flavor to your kitchen.
        </p>
      </div>
    </section>
  );
}
