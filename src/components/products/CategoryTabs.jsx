import React from 'react';

export default function CategoryTabs({ activeFilter, setActiveFilter }) {
  const tabs = [
    { id: 'all', label: 'All Spices' },
    { id: 'pure', label: 'Single-Origin Powders' },
    { id: 'blended', label: 'Specialty Blends' }
  ];

  return (
    <div 
      style={{
        display: 'flex',
        justifyContent: 'center',
        gap: '1rem',
        padding: '3rem 0 1rem 0',
        backgroundColor: 'var(--bg-primary)',
        flexWrap: 'wrap'
      }}
    >
      {tabs.map((tab) => {
        const isActive = activeFilter === tab.id;
        return (
          <button
            key={tab.id}
            onClick={() => setActiveFilter(tab.id)}
            style={{
              padding: '0.6rem 1.5rem',
              borderRadius: '25px',
              fontFamily: 'var(--font-sans)',
              fontSize: '0.85rem',
              fontWeight: '500',
              cursor: 'pointer',
              transition: 'var(--transition-fast)',
              border: '1px solid',
              borderColor: isActive ? 'var(--accent-gold)' : 'rgba(207, 168, 100, 0.15)',
              backgroundColor: isActive ? 'var(--accent-gold)' : 'rgba(207, 168, 100, 0.03)',
              color: isActive ? 'var(--bg-primary)' : 'var(--text-secondary)'
            }}
            onMouseEnter={(e) => {
              if (!isActive) {
                e.currentTarget.style.borderColor = 'var(--accent-gold)';
                e.currentTarget.style.color = 'var(--text-primary)';
              }
            }}
            onMouseLeave={(e) => {
              if (!isActive) {
                e.currentTarget.style.borderColor = 'rgba(207, 168, 100, 0.15)';
                e.currentTarget.style.color = 'var(--text-secondary)';
              }
            }}
          >
            {tab.label}
          </button>
        );
      })}
    </div>
  );
}
