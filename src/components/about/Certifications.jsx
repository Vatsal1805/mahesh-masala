import React from 'react';
import { Award, ShieldCheck, Heart, FileText, Globe } from 'lucide-react';

export default function Certifications() {
  const certifications = [
    {
      icon: <ShieldCheck size={28} />,
      title: 'FSSAI License',
      license: 'Active Food Safety compliance',
      desc: 'Fully compliant with Indian Food Safety and Standards Authority regulations, ensuring hygienic processing, testing, and packaging.'
    },
    {
      icon: <Award size={28} />,
      title: 'Spices Board Registration',
      license: 'Registered exporter & merchant',
      desc: 'Certified by the Spices Board of India, adhering strictly to voluntary quality benchmarks, moisture controls, and volatile oil standards.'
    },
    {
      icon: <FileText size={28} />,
      title: 'GST & IEC Code',
      license: 'Import-export clear certification',
      desc: 'Officially registered with Indian Goods and Services Tax and issued an Import Export Code (IEC) by the DGFT for global operations.'
    },
    {
      icon: <Globe size={28} />,
      title: 'ADC & Customs Clearance',
      license: 'International phytosanitary ready',
      desc: 'Equipped with Assistant Drug Controller (ADC) clearance protocols and export documentation to shipping channels worldwide.'
    },
    {
      icon: <Heart size={28} />,
      title: '100% Vegetarian (MMG)',
      license: 'Strictly plant-based processing',
      desc: 'Processed in a 100% vegetarian-only environment. Guaranteed zero cross-contamination with non-veg products.'
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
            REGULATORY STANDARDS
          </span>
          <h2>Quality Certifications & Trust</h2>
          <p style={{ maxWidth: '600px', margin: '0.5rem auto 0 auto', fontSize: '0.95rem', color: 'var(--text-secondary)' }}>
            Mahesh Masala Gruhudhyog possesses all required national and international licenses to process, distribute, and trade premium spices globally.
          </p>
          <div className="divider"></div>
        </div>

        <div 
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '3rem',
            marginTop: '4rem'
          }}
        >
          {certifications.map((cert, idx) => (
            <div 
              key={idx}
              style={{
                display: 'flex',
                gap: '1.5rem',
                alignItems: 'flex-start',
                padding: '2rem',
                border: '1px solid var(--border-gold)',
                borderRadius: '8px',
                backgroundColor: 'var(--bg-tertiary)'
              }}
            >
              <div style={{ color: 'var(--accent-gold)', marginTop: '4px' }}>
                {cert.icon}
              </div>
              <div>
                <h3 
                  style={{
                    fontSize: '1.25rem',
                    color: 'var(--text-primary)',
                    fontFamily: 'var(--font-sans)',
                    fontWeight: '600',
                    marginBottom: '0.25rem'
                  }}
                >
                  {cert.title}
                </h3>
                <span 
                  style={{
                    fontSize: '0.7rem',
                    color: 'var(--accent-gold)',
                    fontWeight: '600',
                    letterSpacing: '0.05em',
                    textTransform: 'uppercase',
                    display: 'block',
                    marginBottom: '0.75rem'
                  }}
                >
                  {cert.license}
                </span>
                <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', lineHeight: '1.6' }}>
                  {cert.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Licensing Affirmation Banner */}
        <div 
          style={{
            marginTop: '4rem',
            padding: '2.5rem',
            backgroundColor: 'rgba(207, 168, 100, 0.02)',
            border: '1px solid var(--accent-gold)',
            borderRadius: '8px',
            textAlign: 'center',
            boxShadow: '0 4px 20px rgba(0, 0, 0, 0.2)'
          }}
        >
          <p 
            style={{ 
              fontSize: '1.15rem', 
              color: 'var(--text-primary)', 
              lineHeight: '1.7',
              margin: 0,
              fontFamily: 'var(--font-serif)',
              fontWeight: '500'
            }}
          >
            We confirm that <span style={{ color: 'var(--accent-gold)' }}>Mahesh Masala Gruhudhyog</span> holds all required licenses, clearances, and board certifications to deal in the spices business both nationally and internationally.
          </p>
        </div>
      </div>
    </section>
  );
}
