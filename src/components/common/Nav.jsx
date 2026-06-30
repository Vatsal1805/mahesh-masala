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
          className="nav-brand"
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
            className="nav-logo"
            style={{ 
              objectFit: 'contain',
              borderRadius: '4px',
              flexShrink: 0 
            }} 
          />
          
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <span 
              className="brand-title"
              style={{ 
                fontFamily: 'var(--font-serif)', 
                fontWeight: '600', 
                color: 'var(--text-primary)',
                textTransform: 'uppercase',
                lineHeight: '1.2'
              }}
            >
              MAHESH MASALA
            </span>
            <span 
              className="brand-subtitle"
              style={{ 
                fontFamily: 'var(--font-sans)', 
                color: 'var(--accent-gold)',
                textTransform: 'uppercase',
                marginTop: '1px'
              }}
            >
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
        
        .nav-logo {
          width: 50px;
          height: 50px;
          transition: all 0.3s ease;
        }
        .brand-title {
          font-size: 1.45rem;
          letter-spacing: 0.04em;
          transition: all 0.3s ease;
        }
        .brand-subtitle {
          font-size: 0.62rem;
          letter-spacing: 0.22em;
          transition: all 0.3s ease;
        }
        
        @media (max-width: 480px) {
          .nav-logo {
            width: 42px;
            height: 42px;
          }
          .brand-title {
            font-size: 1.25rem;
          }
          .brand-subtitle {
            font-size: 0.56rem;
            letter-spacing: 0.16em;
          }
        }
        
        @media (max-width: 360px) {
          .nav-logo {
            width: 36px;
            height: 36px;
          }
          .brand-title {
            font-size: 1.05rem;
          }
          .brand-subtitle {
            font-size: 0.48rem;
            letter-spacing: 0.1em;
          }
          .nav-brand {
            gap: 0.5rem !important;
          }
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
