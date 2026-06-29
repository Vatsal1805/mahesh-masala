import React, { useState, useEffect } from 'react';
import { useWhatsApp } from '../../hooks/useWhatsApp';
import { Phone, MessageSquare, Menu, X } from 'lucide-react';

import MMG from '../../assets/MMG_logo_bg_removed.png';

export default function Nav({ activeTab, setActiveTab }) {
  const { getGeneralInquiryLink } = useWhatsApp();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [hoveredTab, setHoveredTab] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'Our Story' },
    { id: 'products', label: 'Spices Catalogue' }
  ];

  return (
    <nav 
      style={{
        position: activeTab === 'home' ? 'fixed' : 'sticky',
        top: 0,
        left: 0,
        zIndex: 1000,
        width: '100%',
        backgroundColor: isScrolled ? 'var(--glass-bg)' : (activeTab === 'home' ? 'transparent' : 'var(--bg-primary)'),
        borderBottom: isScrolled ? '1px solid var(--border-gold)' : '1px solid transparent',
        backdropFilter: isScrolled ? 'blur(12px)' : 'none',
        WebkitBackdropFilter: isScrolled ? 'blur(12px)' : 'none',
        transition: 'var(--transition-smooth)',
        padding: isScrolled ? '1rem 0' : '1.5rem 0'
      }}
    >
      <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        {/* Logo */}
        <div 
          onClick={() => setActiveTab('home')}
          style={{ 
            cursor: 'pointer',
            display: 'flex', 
            alignItems: 'center',
            gap: '0.75rem'
          }}
        >
          <img 
            src={MMG} 
            alt="Mahesh Masala Logo" 
            style={{ 
              width: '50px', 
              height: '50px', 
              objectFit: 'contain',
              borderRadius: '4px',
              flexShrink: 0 
            }} 
          />
          
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
              Gruhudhyog · Since 1999
            </span>
          </div>
        </div>

        {/* Desktop Navigation */}
        <div style={{ display: 'none', alignItems: 'center', gap: '2.5rem' }} className="desktop-flex">
          <ul style={{ display: 'flex', gap: '2rem', listStyle: 'none' }}>
            {navItems.map((item) => (
              <li key={item.id}>
                <button
                  onClick={() => {
                    setActiveTab(item.id);
                    window.scrollTo(0, 0);
                  }}
                  onMouseEnter={() => setHoveredTab(item.id)}
                  onMouseLeave={() => setHoveredTab(null)}
                  style={{
                    background: 'none',
                    border: 'none',
                    color: activeTab === item.id || hoveredTab === item.id ? 'var(--accent-gold)' : 'var(--text-secondary)',
                    fontFamily: 'var(--font-sans)',
                    fontSize: '0.9rem',
                    fontWeight: activeTab === item.id ? '600' : '400',
                    cursor: 'pointer',
                    position: 'relative',
                    padding: '0.25rem 0',
                    transition: 'var(--transition-fast)'
                  }}
                >
                  {item.label}
                  {(activeTab === item.id || hoveredTab === item.id) && (
                    <span style={{
                      position: 'absolute',
                      bottom: 0,
                      left: 0,
                      width: '100%',
                      height: '1px',
                      backgroundColor: 'var(--accent-gold)'
                    }} />
                  )}
                </button>
              </li>
            ))}
          </ul>

          <a 
            href={getGeneralInquiryLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-gold"
            style={{ padding: '0.6rem 1.2rem', fontSize: '0.8rem', borderRadius: '4px' }}
          >
            <MessageSquare size={14} />
            Bulk Inquiry
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button 
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="mobile-only"
          style={{
            background: 'none',
            border: 'none',
            color: 'var(--text-primary)',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div 
          style={{
            position: 'absolute',
            top: '100%',
            left: 0,
            width: '100%',
            backgroundColor: 'var(--bg-secondary)',
            borderBottom: '1px solid var(--border-gold)',
            padding: '1.5rem 2rem',
            display: 'flex',
            flexDirection: 'column',
            gap: '1.5rem',
            animation: 'fadeIn 0.3s ease-out'
          }}
        >
          <ul style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem', listStyle: 'none' }}>
            {navItems.map((item) => (
              <li key={item.id}>
                <button
                  onClick={() => {
                    setActiveTab(item.id);
                    setMobileMenuOpen(false);
                    window.scrollTo(0, 0);
                  }}
                  style={{
                    background: 'none',
                    border: 'none',
                    color: activeTab === item.id ? 'var(--accent-gold)' : 'var(--text-primary)',
                    fontFamily: 'var(--font-sans)',
                    fontSize: '1rem',
                    fontWeight: activeTab === item.id ? '600' : '400',
                    cursor: 'pointer',
                    width: '100%',
                    textAlign: 'left'
                  }}
                >
                  {item.label}
                </button>
              </li>
            ))}
          </ul>
          <a 
            href={getGeneralInquiryLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-gold-solid"
            style={{ 
              justifyContent: 'center', 
              width: '100%',
              borderRadius: '4px',
              padding: '0.8rem'
            }}
          >
            <MessageSquare size={16} />
            Bulk Inquiry on WhatsApp
          </a>
        </div>
      )}

      {/* Inline styles for responsive utility layout */}
      <style>{`
        .desktop-flex {
          display: none !important;
        }
        .mobile-only {
          display: block !important;
        }
        @media (min-width: 768px) {
          .desktop-flex {
            display: flex !important;
          }
          .mobile-only {
            display: none !important;
          }
        }
      `}</style>
    </nav>
  );
}
