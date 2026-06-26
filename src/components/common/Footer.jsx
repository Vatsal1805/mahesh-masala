import React from 'react';
import { CONFIG } from '../../config';
import { Phone, Mail, MapPin, Compass } from 'lucide-react';

export default function Footer({ setActiveTab }) {
  return (
    <footer 
      style={{
        backgroundColor: 'var(--bg-secondary)',
        borderTop: '1px solid var(--border-gold)',
        padding: '5rem 0 3rem 0',
        marginTop: 'auto'
      }}
    >
      <div className="container">
        <div 
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '3.5rem',
            marginBottom: '4rem'
          }}
        >
          {/* Brand Info */}
          <div>
            <div 
              style={{ 
                display: 'flex', 
                alignItems: 'center', 
                gap: '0.75rem',
                marginBottom: '1.25rem' 
              }}
            >
              {/* Custom SVG Logo matching client image */}
              <svg viewBox="0 0 100 100" width="40" height="40" style={{ flexShrink: 0 }}>
                {/* Outer Circular Strokes (Brush Style) */}
                <path d="M 50 8 A 42 42 0 1 1 12 68" fill="none" stroke="#18964d" strokeWidth="3" strokeLinecap="round" />
                <path d="M 50 92 A 42 42 0 1 1 88 32" fill="none" stroke="#18964d" strokeWidth="3" strokeLinecap="round" />
                
                <path d="M 85 27 C 72 11 54 8 50 8" fill="none" stroke="#e5242a" strokeWidth="1.5" strokeLinecap="round" />
                <path d="M 15 73 C 28 89 46 92 50 92" fill="none" stroke="#e5242a" strokeWidth="1.5" strokeLinecap="round" />

                {/* MMG Text */}
                <text 
                  x="16" 
                  y="58" 
                  fontFamily="var(--font-sans)" 
                  fontSize="20" 
                  fontWeight="bold" 
                  fill="#18964d" 
                  letterSpacing="-0.5"
                >
                  MMG
                </text>

                {/* Red Chili U component */}
                {/* The Green Stem of Chili */}
                <path d="M 73 34 C 74 31, 76 29, 78 28" fill="none" stroke="#18964d" strokeWidth="2.5" strokeLinecap="round" />
                
                {/* Red Chili Body making a curved shape */}
                <path 
                  d="M 73 34 C 75 36, 80 43, 80 49 C 80 57, 72 58, 70 51 C 69 47, 72 41, 73 34" 
                  fill="#e5242a" 
                  stroke="#e5242a"
                  strokeWidth="0.5"
                />
              </svg>

              <div style={{ display: 'flex', flexDirection: 'column' }}>
                <span style={{ 
                  fontFamily: 'var(--font-serif)', 
                  fontSize: '1.45rem', 
                  fontWeight: '600', 
                  letterSpacing: '0.04em',
                  color: 'var(--text-primary)',
                  textTransform: 'uppercase',
                  lineHeight: '1.2'
                }}>
                  MAHESH MASALA
                </span>
                <span style={{ 
                  fontFamily: 'var(--font-sans)', 
                  fontSize: '0.62rem', 
                  letterSpacing: '0.22em',
                  color: 'var(--accent-gold)',
                  textTransform: 'uppercase',
                  marginTop: '1px'
                }}>
                  Gruhudhyog · Since {CONFIG.establishedYear}
                </span>
              </div>
            </div>
            <p style={{ fontSize: '0.9rem', marginBottom: '1.5rem', lineHeight: '1.7', maxWidth: '320px' }}>
              Handcrafting pure, traditional spices and signature culinary blends in Nadiad, Gujarat. Dedicated to preserving authentic Indian taste and culinary traditions.
            </p>
            <div style={{ 
              fontFamily: 'var(--font-serif)', 
              fontStyle: 'italic', 
              fontSize: '1.05rem', 
              color: 'var(--accent-gold)'
            }}>
              "Purity is not a standard, it is our heritage."
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 style={{ 
              fontSize: '1.1rem', 
              color: 'var(--text-primary)', 
              marginBottom: '1.5rem',
              letterSpacing: '0.05em',
              textTransform: 'uppercase'
            }}>
              Quick Navigation
            </h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
              {[
                { id: 'home', label: 'Home Page' },
                { id: 'about', label: 'Our Story (About)' },
                { id: 'products', label: 'Spices Catalogue' }
              ].map((item) => (
                <li key={item.id}>
                  <button
                    onClick={() => {
                      setActiveTab(item.id);
                      window.scrollTo(0, 0);
                    }}
                    style={{
                      background: 'none',
                      border: 'none',
                      color: 'var(--text-secondary)',
                      fontFamily: 'var(--font-sans)',
                      fontSize: '0.9rem',
                      cursor: 'pointer',
                      transition: 'var(--transition-fast)',
                      padding: 0
                    }}
                    onMouseEnter={(e) => e.target.style.color = 'var(--accent-gold)'}
                    onMouseLeave={(e) => e.target.style.color = 'var(--text-secondary)'}
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Details */}
          <div>
            <h4 style={{ 
              fontSize: '1.1rem', 
              color: 'var(--text-primary)', 
              marginBottom: '1.5rem',
              letterSpacing: '0.05em',
              textTransform: 'uppercase'
            }}>
              The Spice House
            </h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <li style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                <MapPin size={18} style={{ color: 'var(--accent-gold)', flexShrink: 0, marginTop: '3px' }} />
                <span style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', lineHeight: '1.5' }}>
                  {CONFIG.address}
                </span>
              </li>
              <li style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
                <Phone size={16} style={{ color: 'var(--accent-gold)', flexShrink: 0 }} />
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                  <a 
                    href={`tel:${CONFIG.phonePrimary}`} 
                    style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', textDecoration: 'none' }}
                  >
                    {CONFIG.formattedPhonePrimary}
                  </a>
                  <a 
                    href={`tel:${CONFIG.phoneSecondary}`} 
                    style={{ fontSize: '0.9rem', color: 'var(--text-muted)', textDecoration: 'none' }}
                  >
                    {CONFIG.formattedPhoneSecondary}
                  </a>
                </div>
              </li>
              <li style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
                <Mail size={16} style={{ color: 'var(--accent-gold)', flexShrink: 0 }} />
                <a 
                  href={`mailto:${CONFIG.email}`} 
                  style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', textDecoration: 'none' }}
                >
                  {CONFIG.email}
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Footer Bottom */}
        <div 
          className="footer-bottom"
          style={{
            borderTop: '1px solid rgba(255,255,255,0.05)',
            paddingTop: '2rem',
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            gap: '1rem'
          }}
        >
          <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>
            &copy; {new Date().getFullYear()} Mahesh Masala Gruh Udhyog. All rights reserved.
          </p>
          <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)', display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
            <span>Made with precision by</span>
            <a 
              href="https://convergedigitals.com" 
              target="_blank" 
              rel="noopener noreferrer" 
              style={{ color: 'var(--accent-gold)', textDecoration: 'none', fontWeight: '500' }}
              onMouseEnter={(e) => e.target.style.textDecoration = 'underline'}
              onMouseLeave={(e) => e.target.style.textDecoration = 'none'}
            >
              Converge Digitals
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
