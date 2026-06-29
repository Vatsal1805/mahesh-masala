import React, { useState } from 'react';
import { products } from '../../data/products';
import { useWhatsApp } from '../../hooks/useWhatsApp';
import { Flame, MessageCircle, Sparkles, ChevronDown, ChevronUp } from 'lucide-react';

function CatalogCard({ product, getProductInquiryLink }) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div 
      className="glass-card"
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        transition: 'var(--transition-smooth)'
      }}
    >
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
            fontFamily: 'var(--font-serif)',
            fontSize: '1.8rem',
            color: 'var(--text-primary)',
            marginBottom: '0.75rem'
          }}
        >
          {product.name}
        </h3>

        {/* Badges */}
        <div style={{ display: 'flex', gap: '0.5rem', marginBottom: '1.25rem', flexWrap: 'wrap' }}>
          {product.heatLevel !== 'None' && (
            <span style={{ 
              fontSize: '0.7rem', 
              backgroundColor: 'rgba(158, 42, 43, 0.15)', 
              color: '#d66869',
              border: '1px solid rgba(158, 42, 43, 0.25)',
              padding: '0.15rem 0.5rem',
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
            border: '1px solid rgba(207, 168, 100, 0.2)',
            padding: '0.15rem 0.5rem',
            borderRadius: '10px',
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.25rem'
          }}>
            <Sparkles size={10} />
            Stone-Ground
          </span>
        </div>

        {/* Descriptions */}
        <p style={{ fontSize: '0.9rem', lineHeight: '1.6', marginBottom: '1.5rem', color: 'var(--text-secondary)' }}>
          {product.description}
        </p>

        {/* Collapsible Sensory Notes Toggle Button */}
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

        {/* Collapsible Sensory Section */}
        {isExpanded && (
          <div 
            className="animate-fade-in"
            style={{
              backgroundColor: 'rgba(255,255,255,0.01)',
              border: '1px dashed rgba(207, 168, 100, 0.15)',
              borderRadius: '6px',
              padding: '1rem',
              marginBottom: '2rem'
            }}
          >
            <div style={{ marginBottom: '0.5rem' }}>
              <span style={{ fontSize: '0.65rem', color: 'var(--text-muted)', display: 'block', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                Aroma profile
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

      {/* Order/Inquiry Action button */}
      <a 
        href={getProductInquiryLink(product.name, product.type)}
        target="_blank"
        rel="noopener noreferrer"
        className="btn-gold-solid"
        style={{
          width: '100%',
          justifyContent: 'center',
          borderRadius: '4px',
          padding: '0.8rem',
          fontSize: '0.8rem'
        }}
      >
        <MessageCircle size={14} />
        <span>Inquire Price on WhatsApp</span>
      </a>
    </div>
  );
}

export default function ProductGrid({ activeFilter }) {
  const { getProductInquiryLink } = useWhatsApp();

  const filteredProducts = activeFilter === 'all' 
    ? products 
    : products.filter(p => p.category === activeFilter);

  return (
    <section 
      style={{
        backgroundColor: 'var(--bg-primary)',
        padding: '3rem 0 8rem 0'
      }}
    >
      <div className="container">
        <div 
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 300px), 1fr))',
            gap: '3rem'
          }}
        >
          {filteredProducts.map((product) => (
            <CatalogCard 
              key={product.id} 
              product={product} 
              getProductInquiryLink={getProductInquiryLink} 
            />
          ))}
        </div>
      </div>
    </section>
  );
}
