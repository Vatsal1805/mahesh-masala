import React, { useState } from 'react';

// Common Components
import Nav from './components/common/Nav';
import Footer from './components/common/Footer';
import FloatingWhatsApp from './components/common/FloatingWhatsApp';

// Homepage Components
import Hero from './components/home/Hero';
import StatsStrip from './components/home/StatsStrip';
import ProductHighlights from './components/home/ProductHighlights';
import WhyUs from './components/home/WhyUs';
import HowToOrder from './components/home/HowToOrder';

// About Page Components
import AboutHero from './components/about/AboutHero';
import WhoWeAre from './components/about/WhoWeAre';
import Values from './components/about/Values';
import ProcessFlow from './components/about/ProcessFlow';
import Certifications from './components/about/Certifications';

// Products Page Components
import ProductsHero from './components/products/ProductsHero';
import CategoryTabs from './components/products/CategoryTabs';
import ProductGrid from './components/products/ProductGrid';
import BulkBanner from './components/products/BulkBanner';

function App() {
  const [activeTab, setActiveTab] = useState('home');
  const [activeFilter, setActiveFilter] = useState('all');

  return (
    <div 
      style={{ 
        display: 'flex', 
        flexDirection: 'column', 
        minHeight: '100vh',
        backgroundColor: 'var(--bg-primary)'
      }}
    >
      {/* Persistent Navigation */}
      <Nav activeTab={activeTab} setActiveTab={setActiveTab} />

      {/* Main Content Router */}
      <main style={{ flexGrow: 1 }}>
        {activeTab === 'home' && (
          <div className="page-wrapper">
            <Hero setActiveTab={setActiveTab} />
            <StatsStrip setActiveTab={setActiveTab} />
            <ProductHighlights setActiveTab={setActiveTab} />
            <WhyUs />
            <HowToOrder setActiveTab={setActiveTab} />
          </div>
        )}

        {activeTab === 'about' && (
          <div className="page-wrapper">
            <AboutHero />
            <WhoWeAre />
            <Values />
            <ProcessFlow />
            <Certifications />
          </div>
        )}

        {activeTab === 'products' && (
          <div className="page-wrapper">
            <ProductsHero />
            <CategoryTabs activeFilter={activeFilter} setActiveFilter={setActiveFilter} />
            <ProductGrid activeFilter={activeFilter} />
            <BulkBanner />
          </div>
        )}
      </main>

      {/* Persistent Floating WhatsApp Icon */}
      <FloatingWhatsApp />

      {/* Persistent Footer */}
      <Footer setActiveTab={setActiveTab} />
    </div>
  );
}

export default App;
