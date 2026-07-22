import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, Zap, ChevronDown, Mail, ShieldAlert } from 'lucide-react';
import { PRODUCTS } from '../data';

interface HeaderProps {
  currentHash: string;
  onNavigate: (hash: string) => void;
  onOpenInquiry: (subject: string) => void;
}

export default function Header({ currentHash, onNavigate, onOpenInquiry }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isProductsDropdownOpen, setIsProductsDropdownOpen] = useState(false);

  // Close menus on navigation
  useEffect(() => {
    setIsMenuOpen(false);
    setIsProductsDropdownOpen(false);
  }, [currentHash]);

  const activeClass = (hash: string) => {
    const isHomeActive = currentHash === '#/' || currentHash === '';
    if (hash === '#/') {
      return isHomeActive ? 'text-brand-blue border-b-2 border-brand-orange font-bold text-sm' : 'text-slate-600 hover:text-brand-blue font-medium text-sm';
    }
    return currentHash.startsWith(hash) ? 'text-brand-blue border-b-2 border-brand-orange font-bold text-sm' : 'text-slate-600 hover:text-brand-blue font-medium text-sm';
  };

  return (
    <header className="sticky top-0 z-40 bg-white border-b border-slate-100 shadow-sm" id="app-header">
      {/* Upper Micro Header for Local SEO & CTAs */}
      <div className="bg-slate-50 text-[11px] text-slate-600 py-2 px-4 sm:px-6 lg:px-8 border-b border-slate-100 flex flex-wrap justify-between items-center gap-2">
        <div className="flex items-center gap-3">
          <span className="flex items-center gap-1">
            <span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse"></span>
            Manufacturer in Nashik, Maharashtra
          </span>
          <span className="hidden md:inline text-slate-300">|</span>
          <span className="hidden md:inline">ISO 9001:2015 Certified Quality</span>
        </div>
        <div className="flex items-center gap-4">
          <a 
            href="tel:+918421548065" 
            className="group hover:text-brand-orange hover:bg-brand-blue/[0.04] bg-slate-100/80 hover:bg-slate-200/60 border border-slate-200/50 px-2.5 py-1 rounded transition-all flex items-center gap-1.5 font-bold text-brand-blue shadow-sm"
          >
            <Phone className="w-3 h-3 text-brand-orange group-hover:scale-110 transition-transform duration-200" />
            +91 84215 48065
          </a>
          <span className="text-slate-300">|</span>
          <a href="mailto:sales@nextartpower.com" className="hover:text-brand-blue transition-colors flex items-center gap-1">
            <Mail className="w-3 h-3 text-brand-orange" />
            sales@nextartpower.com
          </a>
        </div>
      </div>

      {/* Main Header Row */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 sm:h-20 flex items-center justify-between">
        {/* Brand Logo & Name */}
        <div 
          onClick={() => onNavigate('#/')}
          className="flex items-center gap-2 sm:gap-3 cursor-pointer select-none"
        >
          <div>
            <span className="block font-black text-lg sm:text-2xl text-brand-blue tracking-tight leading-none font-display">
              NEXTART
            </span>
            <span className="block text-[10px] sm:text-xs text-brand-orange font-bold uppercase tracking-widest mt-1 leading-none">
              Power Controller
            </span>
          </div>
        </div>

        {/* Desktop Nav Bar */}
        <nav className="hidden lg:flex items-center gap-6 text-sm">
          <button onClick={() => onNavigate('#/')} className={`${activeClass('#/')} py-2 transition-colors`}>
            Home
          </button>
          <button onClick={() => onNavigate('#/about')} className={`${activeClass('#/about')} py-2 transition-colors`}>
            About Us
          </button>

          {/* Products Dropdown */}
          <div className="relative">
            <button
              onClick={() => setIsProductsDropdownOpen(!isProductsDropdownOpen)}
              onMouseEnter={() => setIsProductsDropdownOpen(true)}
              className={`flex items-center gap-1 py-2 transition-colors ${
                currentHash.startsWith('#/product') ? 'text-brand-blue border-b-2 border-brand-orange font-bold text-sm' : 'text-slate-600 hover:text-brand-blue font-medium text-sm'
              }`}
            >
              Our Products
              <ChevronDown className="w-4 h-4" />
            </button>
            
            {/* Products Dropdown List */}
            {isProductsDropdownOpen && (
              <div 
                className="absolute top-full left-0 mt-1 w-64 bg-white border border-slate-100 rounded-xl shadow-2xl p-2 py-3 z-50 animate-in fade-in slide-in-from-top-2 duration-150"
                onMouseLeave={() => setIsProductsDropdownOpen(false)}
              >
                <div className="text-[10px] uppercase font-bold text-slate-400 tracking-wider px-3 mb-2">Power Stabilizers</div>
                {PRODUCTS.filter(p => p.category === 'servo').map(p => (
                  <button
                    key={p.id}
                    onClick={() => {
                      onNavigate(`#/product/${p.slug}`);
                      setIsProductsDropdownOpen(false);
                    }}
                    className="w-full text-left px-3 py-1.5 rounded-lg text-xs text-slate-600 hover:bg-slate-50 hover:text-brand-blue transition-colors block font-semibold"
                  >
                    {p.name}
                  </button>
                ))}

                <div className="text-[10px] uppercase font-bold text-slate-400 tracking-wider px-3 mt-3 mb-2">Power Correction</div>
                {PRODUCTS.filter(p => p.category === 'apfc').map(p => (
                  <button
                    key={p.id}
                    onClick={() => {
                      onNavigate(`#/product/${p.slug}`);
                      setIsProductsDropdownOpen(false);
                    }}
                    className="w-full text-left px-3 py-1.5 rounded-lg text-xs text-slate-600 hover:bg-slate-50 hover:text-brand-blue transition-colors block font-semibold"
                  >
                    {p.name}
                  </button>
                ))}

                <div className="text-[10px] uppercase font-bold text-slate-400 tracking-wider px-3 mt-3 mb-2">Panels &amp; Automation</div>
                {PRODUCTS.filter(p => ['panel', 'automation'].includes(p.category)).map(p => (
                  <button
                    key={p.id}
                    onClick={() => {
                      onNavigate(`#/product/${p.slug}`);
                      setIsProductsDropdownOpen(false);
                    }}
                    className="w-full text-left px-3 py-1.5 rounded-lg text-xs text-slate-600 hover:bg-slate-50 hover:text-brand-blue transition-colors block font-semibold"
                  >
                    {p.name}
                  </button>
                ))}
              </div>
            )}
          </div>

          <button onClick={() => onNavigate('#/industries')} className={`${activeClass('#/industries')} py-2 transition-colors`}>
            Industries Served
          </button>
          <button onClick={() => onNavigate('#/projects')} className={`${activeClass('#/projects')} py-2 transition-colors`}>
            Projects
          </button>
          <button onClick={() => onNavigate('#/blog')} className={`${activeClass('#/blog')} py-2 transition-colors`}>
            Blog / Tech Hub
          </button>
          <button onClick={() => onNavigate('#/contact')} className={`${activeClass('#/contact')} py-2 transition-colors`}>
            Contact
          </button>
        </nav>

        {/* Action Button */}
        <div className="hidden lg:flex items-center gap-3">
          <button
            onClick={() => onOpenInquiry('Request Free On-Site Consultation')}
            className="bg-brand-orange hover:bg-brand-orange-hover text-white font-bold py-2.5 px-6 rounded text-sm shadow-lg shadow-orange-100 transition-all cursor-pointer"
          >
            Get Free Quote
          </button>
        </div>

        {/* Mobile Toggle Button */}
        <button 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="lg:hidden p-2 text-slate-600 hover:text-brand-blue focus:outline-none"
        >
          {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu Panel */}
      {isMenuOpen && (
        <div className="lg:hidden bg-white border-t border-slate-100 p-4 space-y-3 shadow-md">
          <button
            onClick={() => onNavigate('#/')}
            className="w-full text-left py-2 px-3 font-semibold text-slate-700 rounded hover:bg-slate-50 hover:text-brand-blue block"
          >
            Home
          </button>
          <button
            onClick={() => onNavigate('#/about')}
            className="w-full text-left py-2 px-3 font-semibold text-slate-700 rounded hover:bg-slate-50 hover:text-brand-blue block"
          >
            About Us
          </button>

          {/* Collapsible Products for Mobile */}
          <div className="py-2 px-3 space-y-1 bg-slate-50 rounded border border-slate-100">
            <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest block mb-2 px-1">Products</span>
            {PRODUCTS.map(p => (
              <button
                key={p.id}
                onClick={() => onNavigate(`#/product/${p.slug}`)}
                className="w-full text-left py-1 px-2 text-xs text-slate-600 hover:text-brand-blue block font-semibold"
              >
                {p.name}
              </button>
            ))}
          </div>

          <button
            onClick={() => onNavigate('#/industries')}
            className="w-full text-left py-2 px-3 font-semibold text-slate-700 rounded hover:bg-slate-50 hover:text-brand-blue block"
          >
            Industries Served
          </button>
          <button
            onClick={() => onNavigate('#/projects')}
            className="w-full text-left py-2 px-3 font-semibold text-slate-700 rounded hover:bg-slate-50 hover:text-brand-blue block"
          >
            Projects &amp; Gallery
          </button>
          <button
            onClick={() => onNavigate('#/blog')}
            className="w-full text-left py-2 px-3 font-semibold text-slate-700 rounded hover:bg-slate-50 hover:text-brand-blue block"
          >
            Blog / Knowledge Hub
          </button>
          <button
            onClick={() => onNavigate('#/contact')}
            className="w-full text-left py-2 px-3 font-semibold text-slate-700 rounded hover:bg-slate-50 hover:text-brand-blue block"
          >
            Contact Details
          </button>

          {/* Quick Mobile Hot Buttons */}
          <div className="grid grid-cols-2 gap-2 pt-3">
            <a 
              href="tel:+918421548065"
              className="w-full py-2.5 bg-slate-50 hover:bg-slate-100 text-slate-800 text-xs font-bold rounded border border-slate-200 flex items-center justify-center gap-1.5 text-center"
            >
              <Phone className="w-4 h-4 text-brand-orange" />
              Call Now
            </a>
            <button
              onClick={() => onOpenInquiry('Quick Quote Submission')}
              className="w-full py-2.5 bg-brand-orange hover:bg-brand-orange-hover text-white text-xs font-bold rounded flex items-center justify-center gap-1 text-center"
            >
              Quick Enquiry
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
