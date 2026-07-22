import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import FloatingActions from './components/FloatingActions';
import InquiryModal from './components/InquiryModal';

import Home from './components/pages/Home';
import About from './components/pages/About';
import Products from './components/pages/Products';
import Industries from './components/pages/Industries';
import Projects from './components/pages/Projects';
import Blog from './components/pages/Blog';
import Contact from './components/pages/Contact';

export default function App() {
  const [hash, setHash] = useState(window.location.hash || '#/');
  const [inquiryModalOpen, setInquiryModalOpen] = useState(false);
  const [inquirySubject, setInquirySubject] = useState('');

  // Synchronize hash updates
  useEffect(() => {
    const handleHashChange = () => {
      setHash(window.location.hash || '#/');
      window.scrollTo({ top: 0, behavior: 'instant' });
    };

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const handleNavigate = (newHash: string) => {
    window.location.hash = newHash;
  };

  const handleOpenInquiry = (subject: string) => {
    setInquirySubject(subject);
    setInquiryModalOpen(true);
  };

  // Custom Hash Router Selection
  let pageComponent = <Home onNavigate={handleNavigate} onOpenInquiry={handleOpenInquiry} />;

  if (hash.startsWith('#/about')) {
    pageComponent = <About onOpenInquiry={handleOpenInquiry} />;
  } else if (hash.startsWith('#/product')) {
    const parts = hash.split('/');
    const slug = parts[2]; // Can be undefined for main listing
    pageComponent = <Products slug={slug} onNavigate={handleNavigate} onOpenInquiry={handleOpenInquiry} />;
  } else if (hash.startsWith('#/industries')) {
    pageComponent = <Industries onOpenInquiry={handleOpenInquiry} />;
  } else if (hash.startsWith('#/projects')) {
    pageComponent = <Projects onOpenInquiry={handleOpenInquiry} />;
  } else if (hash.startsWith('#/blog')) {
    const parts = hash.split('/');
    const slug = parts[2]; // Can be undefined for list
    pageComponent = <Blog slug={slug} onNavigate={handleNavigate} onOpenInquiry={handleOpenInquiry} />;
  } else if (hash.startsWith('#/contact')) {
    pageComponent = <Contact onOpenInquiry={handleOpenInquiry} />;
  }

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col justify-between" id="nextart-layout-root">
      
      {/* Header element */}
      <Header 
        currentHash={hash} 
        onNavigate={handleNavigate} 
        onOpenInquiry={handleOpenInquiry} 
      />

      {/* Main viewport */}
      <main className="flex-1">
        {pageComponent}
      </main>

      {/* Footer element */}
      <Footer 
        onNavigate={handleNavigate} 
        onOpenInquiry={handleOpenInquiry} 
      />

      {/* Floating CTA Widget overlay */}
      <FloatingActions onOpenInquiry={handleOpenInquiry} />

      {/* Sales Enquiry Modal overlay */}
      <InquiryModal 
        isOpen={inquiryModalOpen} 
        onClose={() => setInquiryModalOpen(false)} 
        preFilledSubject={inquirySubject} 
      />

    </div>
  );
}

