import React from 'react';
import { useWhatsApp } from '../../hooks/useWhatsApp';
import { CONFIG } from '../../config';
import { Truck, MessageSquare, Phone } from 'lucide-react';

export default function BulkBanner() {
  const { getGeneralInquiryLink } = useWhatsApp();

  return (
    <section 
      style={{
        backgroundColor: 'var(--bg-secondary)',
        borderTop: '1px solid var(--border-gold)',
        borderBottom: '1px solid var(--border-gold)',
        padding: '6rem 0',
        position: 'relative',
        overflow: 'hidden'
      }}
    >
      {/* Decorative side accent lines */}
      <div 
        style={{
          position: 'absolute',
          top: 0,
          right: '5%',
          width: '1px',
          height: '100%',
          backgroundColor: 'rgba(207, 168, 100, 0.05)'
        }}
      />

      <div className="container" style={{ position: 'relative', zIndex: 2 }}>
        <div 
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            textAlign: 'center',
            maxWidth: '800px',
            margin: '0 auto'
          }}
        >
          <div 
            style={{
              color: 'var(--accent-gold)',
              marginBottom: '1.5rem',
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: '56px',
              height: '56px',
              borderRadius: '50%',
              backgroundColor: 'rgba(207, 168, 100, 0.03)',
              border: '1px solid rgba(207, 168, 100, 0.15)'
            }}
          >
            <Truck size={24} />
          </div>

          <h2 
            style={{
              fontFamily: 'var(--font-serif)',
              fontSize: '2.5rem',
              color: 'var(--text-primary)',
              marginBottom: '1rem'
            }}
          >
            Wholesale Sourcing & Custom Packaging
          </h2>
          
          <p 
            style={{
              fontSize: '1.05rem',
              color: 'var(--text-secondary)',
              lineHeight: '1.7',
              marginBottom: '3rem',
              maxWidth: '700px'
            }}
          >
            Mahesh Masala Gruhudhyog partners with bulk buyers globally to deliver unadulterated spice quality. We support customized milling, sizing, and packaging tiers out of our Nadiad facility.
          </p>

          {/* Supply & Packaging Details Grid */}
          <div 
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
              gap: '2rem',
              width: '100%',
              marginBottom: '3.5rem',
              textAlign: 'left'
            }}
          >
            {/* Box 1: Supply Sectors */}
            <div 
              style={{
                backgroundColor: 'rgba(255,255,255,0.01)',
                border: '1px solid var(--border-gold)',
                borderRadius: '8px',
                padding: '2rem'
              }}
            >
              <h3 style={{ fontFamily: 'var(--font-serif)', color: 'var(--accent-gold)', marginBottom: '1.25rem', fontSize: '1.3rem' }}>
                Who We Supply
              </h3>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.75rem', padding: 0 }}>
                {[
                  { label: 'Exporters', desc: 'Direct supply for international container shipments.' },
                  { label: 'Wholesalers & Distributors', desc: 'Consistent grade volumes for regional networks.' },
                  { label: 'HoReCa Sector', desc: 'Premium custom packages for Hotels, Restaurants, and Cafés.' },
                  { label: 'Retail & Modern Trade', desc: 'White labeling and consumer packs for grocery chains.' }
                ].map((item, idx) => (
                  <li key={idx} style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
                    <strong style={{ color: 'var(--text-primary)' }}>• {item.label}</strong>: {item.desc}
                  </li>
                ))}
              </ul>
            </div>

            {/* Box 2: Packaging Types */}
            <div 
              style={{
                backgroundColor: 'rgba(255,255,255,0.01)',
                border: '1px solid var(--border-gold)',
                borderRadius: '8px',
                padding: '2rem'
              }}
            >
              <h3 style={{ fontFamily: 'var(--font-serif)', color: 'var(--accent-gold)', marginBottom: '1.25rem', fontSize: '1.3rem' }}>
                Available Packaging
              </h3>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '1rem', padding: 0 }}>
                <li>
                  <div style={{ fontWeight: '600', color: 'var(--text-primary)', fontSize: '0.95rem', marginBottom: '0.25rem' }}>
                    ✔ PPE Bags (Heavy Woven Bags)
                  </div>
                  <div style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', paddingLeft: '1.25rem' }}>
                    Ideal for bulk export shipments and domestic wholesale orders (Available in 10kg to 50kg bulk sizes).
                  </div>
                </li>
                <li>
                  <div style={{ fontWeight: '600', color: 'var(--text-primary)', fontSize: '0.95rem', marginBottom: '0.25rem' }}>
                    ✔ Pouch Packaging (Premium Sealed Pouches)
                  </div>
                  <div style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', paddingLeft: '1.25rem' }}>
                    Perfect for domestic retail markets, private labels, and direct consumer distribution.
                  </div>
                </li>
              </ul>
            </div>
          </div>

          <div style={{ display: 'flex', gap: '1.25rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <a 
              href={getGeneralInquiryLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-gold-solid"
              style={{ borderRadius: '4px' }}
            >
              <MessageSquare size={16} />
              <span>Connect on WhatsApp</span>
            </a>
            
            <a 
              href={`tel:${CONFIG.phonePrimary}`}
              className="btn-gold"
              style={{ borderRadius: '4px' }}
            >
              <Phone size={14} />
              <span>Call Direct: {CONFIG.formattedPhonePrimary}</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
