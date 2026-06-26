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
            Wholesale Procurement & Private Labeling
          </h2>
          
          <p 
            style={{
              fontSize: '1rem',
              color: 'var(--text-secondary)',
              lineHeight: '1.7',
              marginBottom: '2.5rem',
              maxWidth: '650px'
            }}
          >
            We regularly partner with spice exporters, grocery chains, corporate gift vendors, and restaurant networks. We offer custom container bagging (10kg to 50kg bulk gunny bags) as well as retail private label packaging processed directly in our Nadiad facility.
          </p>

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
