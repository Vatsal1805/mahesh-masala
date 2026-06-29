import React, { useState } from 'react';
import { products } from '../../data/products';
import { Sparkles, Flame, Eye, ChevronDown, ChevronUp } from 'lucide-react';

function HighlightCard({ product, setActiveTab }) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div 
      className="glass-card"
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        position: 'relative',
        overflow: 'hidden'
      }}
    >
      {/* Gold Decorative Corner Flourish */}
      <div 
        style={{
          position: 'absolute',
          top: 0,
          right: 0,
          width: '30px',
          height: '30px',
          borderTop: '1px solid var(--accent-gold)',
          borderRight: '1px solid var(--accent-gold)'
        }}
      />

      <div>
        {/* Product Image */}
        <div 
          style={{ 
            width: '100%', 
            height: '240px', 
            borderRadius: '8px', 
            overflow: 'hidden', 
            marginBottom: '1.5rem',
            backgroundColor: '#ffffff',
            border: '1px solid rgba(207, 168, 100, 0.15)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}
        >
          <img 
            src={product.image} 
            alt={product.name} 
            style={{ 
              maxWidth: '100%', 
              maxHeight: '100%', 
              objectFit: 'contain',
              transition: 'var(--transition-smooth)',
              padding: '0.5rem'
            }}
            onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
            onMouseLeave={(e) => e.currentTarget.style.transform = 'none'}
          />
        </div>



        {/* Name */}
        <h3 
          style={{ 
            fontSize: '1.75rem', 
            color: 'var(--text-primary)', 
            marginBottom: '0.75rem',
            fontFamily: 'var(--font-serif)'
          }}
        >
          {product.name}
        </h3>

        {/* Heat & Curcumin Level Badges */}
        <div style={{ display: 'flex', gap: '0.5rem', marginBottom: '1.25rem', flexWrap: 'wrap' }}>
          {product.heatLevel !== 'None' && (
            <span style={{ 
              fontSize: '0.7rem', 
              backgroundColor: 'rgba(158, 42, 43, 0.15)', 
              color: '#d66869',
              border: '1px solid rgba(158, 42, 43, 0.25)',
              padding: '0.2rem 0.6rem',
              borderRadius: '10px',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.25rem'
            }}>
              <Flame size={10} />
              {product.heatLevel}
            </span>
          )}
          <span style={{ 
            fontSize: '0.7rem', 
            backgroundColor: 'rgba(207, 168, 100, 0.08)', 
            color: 'var(--accent-gold)',
            border: '1px solid rgba(207, 168, 100, 0.15)',
            padding: '0.2rem 0.6rem',
            borderRadius: '10px',
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.25rem'
          }}>
            <Sparkles size={10} />
            Pure Grade A
          </span>
        </div>

        {/* Description */}
        <p style={{ fontSize: '0.9rem', lineHeight: '1.6', marginBottom: '1.5rem', color: 'var(--text-secondary)' }}>
          {product.tagline}
        </p>

        {/* Collapsible Tasting Notes Toggle Button */}
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          style={{
            background: 'none',
            border: 'none',
            color: 'var(--accent-gold)',
            fontFamily: 'var(--font-sans)',
            fontSize: '0.75rem',
            fontWeight: '600',
            letterSpacing: '0.08em',
            textTransform: 'uppercase',
            cursor: 'pointer',
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.3rem',
            marginBottom: '1.5rem',
            padding: 0
          }}
          onMouseEnter={(e) => e.target.style.color = 'var(--text-primary)'}
          onMouseLeave={(e) => e.target.style.color = 'var(--accent-gold)'}
        >
          {isExpanded ? <ChevronUp size={14} /> : <ChevronDown size={14} />}
          <span>{isExpanded ? 'Hide Tasting Notes' : 'View Tasting Notes'}</span>
        </button>

        {/* Collapsible Sensory Notes Body */}
        {isExpanded && (
          <div 
            className="animate-fade-in"
            style={{ 
              backgroundColor: 'rgba(255,255,255,0.01)', 
              border: '1px dashed rgba(207, 168, 100, 0.15)', 
              borderRadius: '6px',
              padding: '1rem', 
              marginBottom: '1.5rem' 
            }}
          >
            <div style={{ marginBottom: '0.5rem' }}>
              <span style={{ fontSize: '0.65rem', color: 'var(--text-muted)', display: 'block', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                Sensory Aroma
              </span>
              <span style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', fontStyle: 'italic' }}>
                "{product.aroma}"
              </span>
            </div>
            <div>
              <span style={{ fontSize: '0.65rem', color: 'var(--text-muted)', display: 'block', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                Culinary Pairings
              </span>
              <span style={{ fontSize: '0.8rem', color: 'var(--text-secondary)' }}>
                {product.bestFor}
              </span>
            </div>
          </div>
        )}
      </div>

      {/* Action Button */}
      <button 
        onClick={() => {
          setActiveTab('products');
          window.scrollTo(0,0);
        }}
        style={{
          background: 'none',
          border: 'none',
          borderTop: '1px solid var(--border-gold)',
          color: 'var(--accent-gold)',
          fontFamily: 'var(--font-sans)',
          fontSize: '0.85rem',
          fontWeight: '600',
          letterSpacing: '0.05em',
          textTransform: 'uppercase',
          padding: '1rem 0 0 0',
          display: 'flex',
          alignItems: 'center',
          gap: '0.5rem',
          cursor: 'pointer',
          width: '100%',
          transition: 'var(--transition-fast)'
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.color = 'var(--text-primary)';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.color = 'var(--accent-gold)';
        }}
      >
        <Eye size={14} />
        <span>View Full Catalogue</span>
      </button>
    </div>
  );
}

export default function ProductHighlights({ setActiveTab }) {
  // Grab a few key products to highlight
  const highlights = products.filter(p => 
    p.id === 'kashmiri-kumthi-powder' || p.id === 'selam-sangli-turmeric' || p.id === 'coriander-powder'
  );

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
            ARTISANAL COLLECTION
          </span>
          <h2>The Signature Spices</h2>
          <div className="divider"></div>
        </div>

        {/* Carousel / Swipe Grid Container */}
        <div className="highlights-grid">
          {highlights.map((product) => (
            <HighlightCard 
              key={product.id} 
              product={product} 
              setActiveTab={setActiveTab} 
            />
          ))}
        </div>

        {/* Explore All Link */}
        <div style={{ textAlign: 'center', marginTop: '4.5rem' }}>
          <button 
            onClick={() => {
              setActiveTab('products');
              window.scrollTo(0,0);
            }}
            className="btn-gold"
            style={{ borderRadius: '4px' }}
          >
            Explore Complete Range
          </button>
        </div>
      </div>
    </section>
  );
}
