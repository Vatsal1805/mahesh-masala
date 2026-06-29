import React from 'react';
import { useWhatsApp } from '../../hooks/useWhatsApp';
import { Search, MessageCircle, FileText, CheckCircle } from 'lucide-react';

export default function HowToOrder({ setActiveTab }) {
  const { getGeneralInquiryLink } = useWhatsApp();

  const steps = [
    {
      icon: <Search size={22} />,
      title: '1. Browse Spices',
      desc: 'Explore our catalog of single-origin powders, whole seeds, and signature blends.'
    },
    {
      icon: <MessageCircle size={22} />,
      title: '2. WhatsApp Inquire',
      desc: 'Tap the WhatsApp button on any spice card to send a pre-filled quote inquiry.'
    },
    {
      icon: <FileText size={22} />,
      title: '3. Receive Quote',
      desc: 'Our team will respond with custom pricing tiers based on your volume requirements.'
    },
    {
      icon: <CheckCircle size={22} />,
      title: '4. Confirmed Delivery',
      desc: 'Confirm your order, make secure payment, and we will dispatch via trusted cargo networks.'
    }
  ];

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
            ORDER PATHWAY
          </span>
          <h2>How To Procure From Us</h2>
          <p style={{ maxWidth: '500px', margin: '0.5rem auto 0 auto', fontSize: '0.95rem' }}>
            We work directly with wholesalers, retailers, and restaurants to deliver raw purity.
          </p>
          <div className="divider"></div>
        </div>

        {/* Process Flow Grid */}
        <div 
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
            gap: '2rem',
            marginTop: '5rem',
            position: 'relative'
          }}
        >
          {steps.map((step, idx) => (
            <div 
              key={idx}
              style={{
                textAlign: 'center',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                position: 'relative'
              }}
            >
              {/* Step Circle */}
              <div 
                style={{
                  width: '64px',
                  height: '64px',
                  borderRadius: '50%',
                  backgroundColor: 'var(--bg-tertiary)',
                  border: '1px solid var(--accent-gold)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'var(--accent-gold)',
                  marginBottom: '1.5rem',
                  boxShadow: '0 4px 20px rgba(0,0,0,0.2)'
                }}
              >
                {step.icon}
              </div>

              {/* Title */}
              <h3 
                style={{
                  fontSize: '1.15rem',
                  color: 'var(--text-primary)',
                  marginBottom: '0.75rem',
                  fontFamily: 'var(--font-sans)',
                  fontWeight: '600'
                }}
              >
                {step.title}
              </h3>

              {/* Description */}
              <p 
                style={{
                  fontSize: '0.85rem',
                  color: 'var(--text-secondary)',
                  lineHeight: '1.6',
                  maxWidth: '240px'
                }}
              >
                {step.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Contact Banner instead of FAQ */}
        <div 
          style={{
            marginTop: '5rem',
            textAlign: 'center',
            backgroundColor: 'var(--bg-secondary)',
            border: '1px solid var(--border-gold)',
            borderRadius: '12px',
            padding: '3.5rem 2.5rem',
            maxWidth: '750px',
            margin: '5rem auto 0 auto',
            boxShadow: '0 8px 32px rgba(0, 0, 0, 0.2)'
          }}
        >
          <span style={{ fontSize: '0.75rem', color: 'var(--accent-gold)', letterSpacing: '0.15em', textTransform: 'uppercase', display: 'block', marginBottom: '0.75rem' }}>
            HAVE QUESTIONS?
          </span>
          <h3 
            style={{
              fontSize: '2rem',
              color: 'var(--text-primary)',
              fontFamily: 'var(--font-serif)',
              marginBottom: '1rem',
              fontWeight: '400'
            }}
          >
            For Any Query Contact Us Directly
          </h3>
          <p style={{ fontSize: '0.95rem', color: 'var(--text-secondary)', marginBottom: '2.5rem', maxWidth: '550px', margin: '0 auto 2.5rem auto', lineHeight: '1.6' }}>
            We value direct communications. For inquiries regarding custom pack sizes, exports, white-labeling, sample kits, or direct orders, get in touch with our team instantly.
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <a 
              href={getGeneralInquiryLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-gold-solid"
              style={{ borderRadius: '4px' }}
            >
              <MessageCircle size={16} />
              <span>Contact Sales Team</span>
            </a>
            <button 
              onClick={() => {
                setActiveTab('products');
                window.scrollTo(0,0);
              }}
              className="btn-gold"
              style={{ borderRadius: '4px' }}
            >
              <span>Explore Products</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
