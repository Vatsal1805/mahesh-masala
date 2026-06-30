import React from 'react';
import { ShieldCheck, Landmark, Leaf, Truck } from 'lucide-react';

export default function WhyUs() {
  const pillars = [
    {
      icon: <Leaf size={28} />,
      title: 'Direct Sourcing',
      desc: 'Sourcing whole seeds directly from farms in Guntur, Sangli, and Rajasthan to ensure zero blending of sub-par crops.'
    },
    {
      icon: <ShieldCheck size={28} />,
      title: 'Hygienic Authentic Grinding',
      desc: 'Traditional authentic grinding preserves natural essential oils and aroma compared to high-heat commercial mills.'
    },
    {
      icon: <Landmark size={28} />,
      title: 'Nadiad Spice Heritage',
      desc: 'Proudly rooted in Nadiad, Gujarat. Handcrafting blends suited to both rich Gujarati palettes and national culinary standards.'
    },
    {
      icon: <Truck size={28} />,
      title: 'Bulk & Wholesale Ready',
      desc: 'Equipped with heavy-capacity packaging lines. Ready for custom sizing, white-label queries, and nationwide logistics.'
    }
  ];

  return (
    <section 
      style={{
        backgroundColor: 'var(--bg-secondary)',
        padding: '8rem 0',
        borderBottom: '1px solid var(--border-gold)'
      }}
    >
      <div className="container">
        <div className="section-header">
          <span style={{ fontSize: '0.8rem', color: 'var(--accent-gold)', letterSpacing: '0.25em', textTransform: 'uppercase', display: 'block', marginBottom: '0.75rem' }}>
            WHY MAHESH MASALA
          </span>
          <h2>A Standard of Uncompromised Taste</h2>
          <div className="divider"></div>
        </div>

        <div 
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
            gap: '2.5rem',
            marginTop: '4.5rem'
          }}
        >
          {pillars.map((p, idx) => (
            <div 
              key={idx}
              style={{
                backgroundColor: 'var(--bg-tertiary)',
                border: '1px solid var(--border-gold)',
                borderRadius: '8px',
                padding: '2.5rem 2rem',
                transition: 'var(--transition-smooth)',
                position: 'relative'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = 'var(--accent-gold)';
                e.currentTarget.style.transform = 'translateY(-5px)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = 'var(--border-gold)';
                e.currentTarget.style.transform = 'none';
              }}
            >
              {/* Icon Container */}
              <div 
                style={{
                  color: 'var(--accent-gold)',
                  marginBottom: '1.5rem',
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  width: '56px',
                  height: '56px',
                  borderRadius: '6px',
                  backgroundColor: 'rgba(207, 168, 100, 0.05)',
                  border: '1px solid rgba(207, 168, 100, 0.1)'
                }}
              >
                {p.icon}
              </div>

              {/* Title */}
              <h3 
                style={{
                  fontSize: '1.25rem',
                  color: 'var(--text-primary)',
                  marginBottom: '1rem',
                  fontFamily: 'var(--font-sans)',
                  fontWeight: '600',
                  letterSpacing: '0.01em'
                }}
              >
                {p.title}
              </h3>

              {/* Desc */}
              <p 
                style={{
                  fontSize: '0.875rem',
                  color: 'var(--text-secondary)',
                  lineHeight: '1.6'
                }}
              >
                {p.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
