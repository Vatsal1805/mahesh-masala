import React from 'react';
import { Sparkles } from 'lucide-react';

export default function ProductsHero() {
  return (
    <section 
      style={{
        position: 'relative',
        padding: 'clamp(5.5rem, 15vh, 8rem) 0 clamp(3rem, 8vh, 4rem) 0',
        backgroundImage: `linear-gradient(to bottom, rgba(19, 18, 16, 0.7), rgba(19, 18, 16, 0.95)), url('/products_hero_bg.png')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        borderBottom: '1px solid var(--border-gold)',
        overflow: 'hidden'
      }}
    >
      {/* Background radial gold glow */}
      <div 
        style={{
          position: 'absolute',
          top: '-150px',
          left: '50%',
          transform: 'translateX(-50%)',
          width: '600px',
          height: '250px',
          backgroundColor: 'rgba(207, 168, 100, 0.04)',
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
          <Sparkles size={14} />
          <span>SPICES CATALOGUE</span>
        </div>

        <h1 
          style={{
            fontFamily: 'var(--font-serif)',
            fontSize: 'clamp(2rem, 8vw, 3.5rem)',
            color: 'var(--text-primary)',
            marginBottom: '1rem',
            fontWeight: '400',
            lineHeight: '1.2'
          }}
        >
          Pure Spice Collection
        </h1>
        
        <p 
          style={{
            fontSize: 'clamp(0.95rem, 3.5vw, 1.1rem)',
            color: 'var(--text-secondary)',
            maxWidth: '600px',
            margin: '0 auto',
            lineHeight: '1.6',
            fontWeight: '300'
          }}
        >
          Sourced from India's finest harvesting regions, ground using authentic grinding to lock in their natural purity, aroma, and rich flavours.
        </p>
      </div>
    </section>
  );
}
