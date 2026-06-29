import React, { useState, useEffect } from 'react';
import { useWhatsApp } from '../../hooks/useWhatsApp';
import { MessageSquare, X } from 'lucide-react';

export default function FloatingWhatsApp() {
  const { getGeneralInquiryLink } = useWhatsApp();
  const [showTooltip, setShowTooltip] = useState(false);

  useEffect(() => {
    // Show tooltip after 4 seconds to prompt interaction
    const timer = setTimeout(() => {
      setShowTooltip(true);
    }, 4000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div 
      style={{
        position: 'fixed',
        bottom: '2rem',
        right: '2rem',
        zIndex: 9999,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-end',
        fontFamily: 'var(--font-sans)'
      }}
    >
      {/* Tooltip Dialog */}
      {showTooltip && (
        <div 
          style={{
            backgroundColor: 'var(--bg-tertiary)',
            color: 'var(--text-primary)',
            border: '1px solid var(--border-gold)',
            borderRadius: '10px',
            padding: '1rem',
            width: '260px',
            marginBottom: '1rem',
            boxShadow: '0 8px 32px rgba(0, 0, 0, 0.4)',
            position: 'relative',
            animation: 'fadeInUp 0.4s cubic-bezier(0.16, 1, 0.3, 1)'
          }}
        >
          {/* Close button */}
          <button 
            onClick={() => setShowTooltip(false)}
            style={{
              position: 'absolute',
              top: '8px',
              right: '8px',
              background: 'none',
              border: 'none',
              color: 'var(--text-muted)',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}
          >
            <X size={14} />
          </button>
          
          <div style={{ fontWeight: '600', fontSize: '0.85rem', color: 'var(--accent-gold)', marginBottom: '0.25rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <span style={{ width: '6px', height: '6px', backgroundColor: '#25D366', borderRadius: '50%', display: 'inline-block' }} />
            Mahesh Masala Support
          </div>
          <p style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', lineHeight: '1.4' }}>
            Namaste! Looking for bulk spices or pricing catalogue? Tap below to chat.
          </p>
        </div>
      )}

      {/* Professional Floating Button */}
      <a 
        href={getGeneralInquiryLink()}
        target="_blank"
        rel="noopener noreferrer"
        style={{
          width: '56px',
          height: '56px',
          backgroundColor: '#25D366',
          borderRadius: '50%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: '#ffffff',
          cursor: 'pointer',
          transition: 'all 0.2s ease',
          boxShadow: '0 4px 14px rgba(0, 0, 0, 0.4)'
        }}
        onMouseEnter={(e) => {
          setShowTooltip(true);
          e.currentTarget.style.transform = 'translateY(-3px)';
          e.currentTarget.style.boxShadow = '0 6px 20px rgba(0, 0, 0, 0.5)';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = 'none';
          e.currentTarget.style.boxShadow = '0 4px 14px rgba(0, 0, 0, 0.4)';
        }}
      >
        {/* Customized WhatsApp styled speech bubble using inline svg or message icon */}
        <svg 
          viewBox="0 0 24 24" 
          width="28" 
          height="28" 
          fill="currentColor"
        >
          <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.513 2.262 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.724-1.457L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.825 1.451 5.436 0 9.86-4.37 9.864-9.799.002-2.63-1.023-5.101-2.885-6.97C16.386 2.007 13.916.98 11.3 1.002c-5.436 0-9.86 4.37-9.864 9.803-.001 1.733.461 3.424 1.341 4.901l-.988 3.606 3.69-.968zm13.111-5.174c-.29-.145-1.716-.848-1.98-.943-.264-.096-.456-.145-.648.145-.191.29-.741.943-.909 1.135-.168.191-.336.216-.627.072-2.316-1.16-3.11-1.662-4.704-4.4-.42-.723.42-.672 1.2-2.226.13-.264.065-.494-.033-.688-.097-.193-.808-1.944-1.107-2.668-.292-.702-.588-.607-.808-.619-.209-.011-.448-.014-.688-.014-.24 0-.632.09-.962.45-.33.36-1.258 1.23-1.258 2.996 0 1.767 1.282 3.476 1.461 3.716.18.24 2.525 3.856 6.115 5.4 2.196.945 3.01.895 4.09.734.697-.104 1.716-.701 1.956-1.378.24-.678.24-1.258.168-1.378-.073-.12-.265-.193-.555-.338z"/>
        </svg>
      </a>
    </div>
  );
}
