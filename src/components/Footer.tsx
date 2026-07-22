import React from 'react';
import { Zap, MapPin, Phone, Mail, Clock, ShieldCheck, Heart, FileText, Globe } from 'lucide-react';
import { PRODUCTS, BLOGS } from '../data';

interface FooterProps {
  onNavigate: (hash: string) => void;
  onOpenInquiry: (subject: string) => void;
}

export default function Footer({ onNavigate, onOpenInquiry }: FooterProps) {
  return (
    <footer className="bg-slate-900 text-white pt-16 pb-8 border-t border-slate-800" id="app-footer">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        
        {/* Company Bio & Local SEO Signals */}
        <div className="space-y-4">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-brand-orange rounded flex items-center justify-center text-white font-black">
              <Zap className="w-4 h-4 fill-white" />
            </div>
            <div>
              <span className="block font-black text-lg text-white leading-none font-display">NEXTART</span>
              <span className="block text-[9px] text-brand-orange font-bold uppercase tracking-wider">Power Controller</span>
            </div>
          </div>
          <p className="text-xs text-slate-400 leading-relaxed">
            Nextart Power Controller is a premier, ISO-certified industrial manufacturer of high-precision Servo Voltage Stabilizers, APFC Panels, and customized Electrical Control Panels. Operating out of Nashik, we power heavy factories across Maharashtra and India.
          </p>
          <div className="flex items-center gap-2 text-[11px] text-slate-400">
            <ShieldCheck className="w-4 h-4 text-brand-orange" />
            <span>CPRI Tested Design Standard</span>
          </div>
          <div className="flex items-center gap-2 text-[11px] text-slate-400">
            <Globe className="w-4 h-4 text-brand-orange" />
            <span>Serving Ambad, Satpur, Sinnar, &amp; Pan-India</span>
          </div>
        </div>

        {/* B2B Product Directory */}
        <div>
          <h4 className="text-sm font-bold uppercase tracking-wider text-slate-300 mb-4 border-b border-slate-800 pb-2">
            Product Directory
          </h4>
          <ul className="space-y-2 text-xs text-slate-400">
            {PRODUCTS.map(p => (
              <li key={p.id}>
                <button
                  onClick={() => onNavigate(`#/product/${p.slug}`)}
                  className="hover:text-brand-orange transition-colors text-left"
                >
                  {p.name}
                </button>
              </li>
            ))}
            <li>
              <button onClick={() => onNavigate('#/product/three-phase-servo-stabilizer')} className="hover:text-brand-orange transition-colors text-left">
                Automatic Voltage Regulator
              </button>
            </li>
            <li>
              <button onClick={() => onNavigate('#/product/automatic-power-factor-control-panel')} className="hover:text-brand-orange transition-colors text-left">
                Capacitor Bank Panel
              </button>
            </li>
          </ul>
        </div>

        {/* Knowledge & Articles */}
        <div>
          <h4 className="text-sm font-bold uppercase tracking-wider text-slate-300 mb-4 border-b border-slate-800 pb-2">
            Engineering Articles
          </h4>
          <ul className="space-y-2 text-xs text-slate-400">
            {BLOGS.map(b => (
              <li key={b.id}>
                <button
                  onClick={() => onNavigate(`#/blog/${b.slug}`)}
                  className="hover:text-brand-orange transition-colors text-left line-clamp-2"
                >
                  {b.title}
                </button>
              </li>
            ))}
            <li>
              <button onClick={() => onNavigate('#/blog')} className="text-brand-orange hover:underline font-semibold">
                View All Guides &rarr;
              </button>
            </li>
          </ul>
        </div>

        {/* Corporate Address & Support */}
        <div className="space-y-4 text-xs text-slate-400">
          <h4 className="text-sm font-bold uppercase tracking-wider text-slate-300 border-b border-slate-800 pb-2">
            Nashik Headquarters
          </h4>
          <div className="flex items-start gap-2.5">
            <MapPin className="w-4 h-4 text-brand-orange shrink-0 mt-0.5" />
            <p className="leading-relaxed">
              <strong>Nextart Power Controller</strong><br />
              Plot No. G-48, Sector E, Ambad MIDC,<br />
              Nashik, Maharashtra - 422010, India
            </p>
          </div>
          <div className="flex items-center gap-2.5">
            <Phone className="w-4 h-4 text-brand-orange shrink-0" />
            <a href="tel:+918421548065" className="hover:text-white font-bold text-slate-200">
              +91 84215 48065
            </a>
          </div>
          <div className="flex items-center gap-2.5">
            <Clock className="w-4 h-4 text-brand-orange shrink-0" />
            <p>Mon - Sat: 9:00 AM - 7:00 PM (IST)</p>
          </div>
          <div className="bg-slate-950 p-3 rounded text-[10px] text-slate-400 border border-slate-800">
            <span className="font-bold text-slate-200 block">🚨 24/7 Industrial Emergency Support</span>
            Call our breakdown helpline for immediate field engineers to Satpur, Sinnar or Ambad MIDC.
          </div>
        </div>

      </div>

      {/* SEO Regional Targeting Area */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 pt-8 border-t border-slate-800 text-[11px] text-slate-500">
        <p className="leading-relaxed text-center lg:text-left">
          <strong>Local SEO Manufacturing Outreach:</strong> We supply CPRI-approved automatic control panels, APFC setups, and servo voltage correctors directly to leading engineering hubs across Maharashtra, including <strong>Ambad MIDC</strong>, <strong>Satpur MIDC</strong>, <strong>Sinnar MIDC (Musalgaon)</strong>, <strong>Igatpuri Industrial Area</strong>, <strong>Malegaon Powerlooms Zone</strong>, <strong>Chakan MIDC (Pune)</strong>, <strong>Waluj MIDC (Aurangabad/Chhatrapati Sambhajinagar)</strong>, and key infrastructure sites across India.
        </p>
      </div>

      {/* Under Footer Links & Metadata Copyright */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-8 pt-6 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-slate-500">
        <div>
          &copy; {new Date().getFullYear()} Nextart Power Controller. All Rights Reserved.
        </div>
        <div className="flex flex-wrap gap-4 justify-center">
          <a href="./robots.txt" target="_blank" className="hover:text-white flex items-center gap-1">
            <FileText className="w-3.5 h-3.5" />
            robots.txt
          </a>
          <a href="./sitemap.xml" target="_blank" className="hover:text-white flex items-center gap-1">
            <Globe className="w-3.5 h-3.5" />
            XML Sitemap
          </a>
          <button onClick={() => onNavigate('#/contact')} className="hover:text-white">Privacy Policy</button>
          <button onClick={() => onNavigate('#/contact')} className="hover:text-white">Terms of Supply</button>
        </div>
        <div className="flex items-center gap-1">
          <span>Engineered with</span>
          <Heart className="w-3 h-3 text-red-500 fill-red-500" />
          <span>in Nashik, MH</span>
        </div>
      </div>
    </footer>
  );
}
