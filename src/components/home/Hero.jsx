import React from 'react';
import { ArrowRight, Compass } from 'lucide-react';

export default function Hero({ setActiveTab }) {
  return (
    <section 
      className="hero-section"
      style={{
        position: 'relative',
        height: '92vh',
        width: '100%',
        overflow: 'hidden',
        display: 'flex',
        alignItems: 'center',
        backgroundColor: 'var(--bg-primary)'
      }}
    >
      {/* Background with Ken Burns Zoom */}
      <div 
        className="animate-ken-burns"
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          backgroundImage: `linear-gradient(to bottom, rgba(10, 10, 9, 0.4), rgba(10, 10, 9, 0.95)), url('/spices_hero_bg.png')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          zIndex: 1
        }}
      />

      {/* Hero Content */}
      <div 
        className="container animate-fade-in-up" 
        style={{ 
          position: 'relative', 
          zIndex: 2, 
          maxWidth: '800px',
          textAlign: 'left'
        }}
      >
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
            marginBottom: '1.5rem',
            borderBottom: '1px solid var(--border-gold)',
            paddingBottom: '0.5rem'
          }}
        >
          <Compass size={14} />
          <span>ESTABLISHED {new Date().getFullYear() - 27} · Gujarat Origin</span>
        </div>

        <h1 
          style={{
            fontSize: 'clamp(2.5rem, 5vw, 4.5rem)',
            color: 'var(--text-primary)',
            marginBottom: '1.5rem',
            fontFamily: 'var(--font-serif)',
            fontWeight: '400',
            lineHeight: '1.15'
          }}
        >
          The essence of <span style={{ fontStyle: 'italic', color: 'var(--accent-gold)' }}>purity</span> in every kitchen.
        </h1>

        <p 
          style={{
            fontSize: 'clamp(1rem, 2vw, 1.25rem)',
            color: 'var(--text-secondary)',
            marginBottom: '3rem',
            maxWidth: '600px',
            lineHeight: '1.6',
            fontWeight: '300'
          }}
        >
          A legacy of authentic ground spice flavours from Nadiad, Gujarat. Built on decades of customer trust, we deliver pure, aromatic spices sourced directly from India's most fertile fields.
        </p>

        <div style={{ display: 'flex', gap: '1.25rem', flexWrap: 'wrap' }}>
          <button 
            onClick={() => {
              setActiveTab('products');
              window.scrollTo(0,0);
            }}
            className="btn-gold-solid"
            style={{ borderRadius: '4px' }}
          >
            <span>Explore Spices</span>
            <ArrowRight size={16} />
          </button>
          
          <button 
            onClick={() => {
              setActiveTab('about');
              window.scrollTo(0,0);
            }}
            className="btn-gold"
            style={{ borderRadius: '4px' }}
          >
            <span>Our Story</span>
          </button>
        </div>
      </div>
    </section>
  );
}
