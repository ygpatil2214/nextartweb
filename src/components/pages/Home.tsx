import React, { useState } from 'react';
import { 
  Zap, Shield, ArrowRight, Award, MapPin, 
  Settings, Users, CheckCircle, HelpCircle, 
  ChevronRight, Phone, MessageSquare, BookOpen, Clock, Activity
} from 'lucide-react';
import { PRODUCTS, INDUSTRIES, BLOGS } from '../../data';
import Calculators from '../Calculators';

interface HomeProps {
  onNavigate: (hash: string) => void;
  onOpenInquiry: (subject: string) => void;
}

export default function Home({ onNavigate, onOpenInquiry }: HomeProps) {
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  // Quick state for simple Home Contact form
  const [leadForm, setLeadForm] = useState({
    name: '',
    company: '',
    phone: '',
    product: 'Servo Stabilizer',
    message: ''
  });
  const [leadSuccess, setLeadSuccess] = useState(false);

  const handleLeadSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLeadSuccess(true);
    setTimeout(() => {
      setLeadSuccess(false);
      setLeadForm({ name: '', company: '', phone: '', product: 'Servo Stabilizer', message: '' });
    }, 5000);
  };

  const faqs = [
    {
      q: "What capacity (KVA) Servo Stabilizer does my factory require?",
      a: "This is calculated based on your total connected load in kW or HP, plus a critical safety margin (typically 30% to 50%) to absorb inductive motor starting surges. Our interactive Stabilizer Sizer tool below helps you calculate this instantly, or you can call us to receive an official site study."
    },
    {
      q: "How does the Power Factor incentive work in Maharashtra (MSEDCL)?",
      a: "Under MSEDCL guidelines, maintaining an average monthly power factor above 0.95 rewards factories with billing incentives (discounts) up to 7% on total energy charges. Falling below 0.90 triggers heavy penalties. Nextart APFC panels are designed to automatically maintain a power factor of 0.99, maximizing your savings."
    },
    {
      q: "What is the warranty period for Nextart power products?",
      a: "All Nextart Servo Stabilizers and APFC panels carry a comprehensive 12 to 24-month warranty, backed by on-site repairs and maintenance across our primary Nashik, Pune, and Mumbai service zones."
    },
    {
      q: "Can you provide custom dimensions to fit our existing electrical room?",
      a: "Absolutely. As direct manufacturers, we design enclosures, door panels, and busbar heights to custom fit your space constraints, and we coordinate closely with your local electrical contractors."
    }
  ];

  return (
    <div className="bg-slate-50 text-slate-800" id="home-view">
      
      {/* 1. Industrial Hero Section */}
      <section className="relative bg-brand-blue text-white pt-16 pb-20 sm:pb-28 overflow-hidden">
        {/* Animated Background Grid & Accents */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#001a35_1px,transparent_1px),linear-gradient(to_bottom,#001a35_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-30"></div>
        <div className="absolute top-1/4 left-1/10 w-96 h-96 bg-brand-orange/10 rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute bottom-1/10 right-1/10 w-96 h-96 bg-white/5 rounded-full blur-3xl pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Hero Left Content */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-brand-orange/15 border border-brand-orange/30 rounded-full text-brand-orange text-xs font-bold tracking-wide uppercase">
              <Activity className="w-3.5 h-3.5 animate-pulse text-brand-orange" />
              Heavy-Duty Power Quality Systems
            </div>
            
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-tight font-display text-white">
              Guaranteed Power Quality &amp; Energy Savings for Heavy Industry
            </h1>
            
            <p className="text-base sm:text-lg text-slate-200 leading-relaxed max-w-2xl">
              Nextart manufactures CPRI-standard <strong>Servo Voltage Stabilizers</strong> and <strong>APFC Panels</strong> designed to protect CNC machinery, reduce electricity billing, and eliminate low power factor penalties across Maharashtra.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 pt-2">
              <button 
                onClick={() => onOpenInquiry('Hero Section Request Quote')}
                className="w-full sm:w-auto justify-center bg-brand-orange hover:bg-brand-orange-hover text-white font-extrabold py-3.5 px-8 rounded shadow-lg shadow-orange-950/25 text-sm transition-all flex items-center gap-2 cursor-pointer"
              >
                Request Free Quote
                <ArrowRight className="w-4 h-4" />
              </button>
              
              <a 
                href="tel:+918421548065"
                className="w-full sm:w-auto justify-center bg-slate-800/80 hover:bg-slate-800 text-white border border-slate-700/80 font-bold py-3.5 px-8 rounded text-sm transition-all flex items-center gap-2"
              >
                <Phone className="w-4 h-4 text-brand-orange" />
                Call +91 84215 48065
              </a>
            </div>

            {/* Quick Local Trust Badges */}
            <div className="pt-6 border-t border-slate-700/50 grid grid-cols-1 sm:grid-cols-3 gap-3 text-slate-300">
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-brand-orange shrink-0" />
                <span className="text-xs font-bold">ISO 9001:2015 Quality</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-brand-orange shrink-0" />
                <span className="text-xs font-bold">CPRI Approved Standards</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-brand-orange shrink-0" />
                <span className="text-xs font-bold">Free On-Site Assessment</span>
              </div>
            </div>

          </div>

          {/* Hero Right Visual Column - Custom Vector Diagram of Servo + Waveforms */}
          <div className="lg:col-span-5 relative flex justify-center w-full">
            <div className="w-full max-w-[420px] bg-[#001f3f]/90 rounded-xl border border-slate-800 p-4 sm:p-6 shadow-2xl relative overflow-hidden backdrop-blur-sm">
              <div className="absolute top-0 left-0 w-full h-1 bg-brand-orange"></div>
              
              <div className="flex justify-between items-center mb-5">
                <span className="text-[10px] sm:text-xs font-bold text-slate-400 uppercase tracking-widest">NEXTART Live Power System</span>
                <span className="px-2 py-0.5 bg-green-500/10 text-green-400 border border-green-500/20 rounded text-[9px] font-black uppercase tracking-wider animate-pulse">Stable</span>
              </div>

              {/* Grid with Dial Display Mockup */}
              <div className="grid grid-cols-2 gap-3 sm:gap-4 mb-3">
                <div className="bg-[#00152b] border border-slate-800/80 p-3 sm:p-4 rounded text-center">
                  <span className="text-[9px] sm:text-[10px] text-slate-400 uppercase font-bold block mb-1">Grid Voltage (In)</span>
                  <span className="text-xl sm:text-2xl font-black text-red-500 font-mono">295 V</span>
                  <span className="text-[8px] sm:text-[9px] text-slate-400 block mt-1">Severe Under-voltage</span>
                </div>
                <div className="bg-[#00152b] border border-slate-800/80 p-3 sm:p-4 rounded text-center relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-8 h-8 bg-green-500/5 rounded-full blur"></div>
                  <span className="text-[9px] sm:text-[10px] text-slate-400 uppercase font-bold block mb-1">Nextart Servo (Out)</span>
                  <span className="text-xl sm:text-2xl font-black text-green-400 font-mono">415 V</span>
                  <span className="text-[8px] sm:text-[9px] text-slate-400 block mt-1">Constant Reg. (±1%)</span>
                </div>
              </div>

              {/* Servo CTA button directly matching the voltage stabilizer visual above */}
              <button 
                onClick={() => onNavigate('#/product/three-phase-servo-stabilizer')}
                className="w-full mb-5 py-2.5 bg-brand-orange hover:bg-brand-orange-hover text-white font-bold rounded text-xs flex items-center justify-center gap-1.5 transition-colors cursor-pointer"
              >
                Learn How Servo Systems Work
                <ChevronRight className="w-3.5 h-3.5" />
              </button>

              {/* Power Factor Transformation UI */}
              <div className="bg-[#00152b]/60 rounded p-3 sm:p-4 border border-slate-800/80 mb-2 space-y-4">
                <div className="flex justify-between items-center pb-2 border-b border-slate-800/60">
                  <span className="text-[9px] sm:text-[10px] font-bold text-slate-300 uppercase tracking-wider">APFC Power Factor Optimization</span>
                  <span className="px-1.5 py-0.5 bg-green-500/10 text-green-400 border border-green-500/20 rounded text-[8px] font-black uppercase tracking-wider">Active</span>
                </div>

                <div className="grid grid-cols-2 gap-2 sm:gap-3">
                  {/* Before State */}
                  <div className="bg-[#000f20] border border-red-950/40 p-2 sm:p-3 rounded text-center relative overflow-hidden">
                    <div className="absolute top-0 left-0 w-full h-0.5 bg-red-500/40"></div>
                    <span className="text-[8px] sm:text-[9px] text-slate-400 uppercase font-bold block mb-1">Lagging P.F. (Grid)</span>
                    <span className="text-xl sm:text-2xl font-black text-red-500 font-mono">0.48</span>
                    <span className="text-[8px] text-red-400 bg-red-950/50 border border-red-900/30 px-1 py-0.5 rounded inline-block mt-1.5 font-bold font-display">
                      Heavy Penalty
                    </span>
                  </div>

                  {/* After State */}
                  <div className="bg-[#000f20] border border-green-950/40 p-2 sm:p-3 rounded text-center relative overflow-hidden">
                    <div className="absolute top-0 left-0 w-full h-0.5 bg-green-500/40"></div>
                    <span className="text-[8px] sm:text-[9px] text-slate-400 uppercase font-bold block mb-1">Optimized P.F. (Nextart)</span>
                    <span className="text-xl sm:text-2xl font-black text-green-400 font-mono">0.99</span>
                    <span className="text-[8px] text-green-400 bg-green-950/50 border border-green-900/30 px-1 py-0.5 rounded inline-block mt-1.5 font-bold font-display">
                      Max Incentive
                    </span>
                  </div>
                </div>

                {/* Dynamic Transformation Progress Indicator */}
                <div className="space-y-1.5">
                  <div className="flex justify-between text-[8px] sm:text-[9px] text-slate-400 font-semibold">
                    <span>Power Efficiency Optimization</span>
                    <span className="text-brand-orange font-bold font-mono">Correction Active</span>
                  </div>
                  <div className="relative h-2 bg-[#000f20] rounded-full overflow-hidden border border-slate-800/60">
                    {/* Unoptimized region */}
                    <div className="absolute inset-y-0 left-0 bg-red-500/80 w-[48%]"></div>
                    {/* APFC correction region */}
                    <div className="absolute inset-y-0 left-[48%] bg-gradient-to-r from-brand-orange to-green-500 rounded-r-full w-[51%]"></div>
                    {/* Glow slider point at 0.99 */}
                    <div className="absolute top-0 bottom-0 left-[98%] w-1 bg-white shadow-[0_0_8px_#10b981]"></div>
                  </div>
                  <div className="flex justify-between text-[8px] text-slate-500 font-mono">
                    <span>Lagging (0.48)</span>
                    <span className="text-green-400 font-bold">Target Unity (0.99)</span>
                  </div>
                </div>

                {/* New APFC CTA button directly matching the APFC panel above */}
                <button 
                  onClick={() => onNavigate('#/product/apfc-panel')}
                  className="w-full py-2.5 bg-brand-orange hover:bg-brand-orange-hover text-white font-bold rounded text-xs flex items-center justify-center gap-1.5 transition-colors cursor-pointer"
                >
                  Learn How APFC Works
                  <ChevronRight className="w-3.5 h-3.5" />
                </button>
              </div>

            </div>
          </div>

        </div>
      </section>

      {/* 2. Micro Trust Banner */}
      <section className="bg-white border-b border-slate-200 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-2 md:grid-cols-4 gap-y-6 md:gap-y-0 text-center">
          <div className="space-y-1 p-2">
            <span className="block font-black text-brand-blue text-2xl sm:text-3xl">12+ Years</span>
            <span className="block text-[10px] sm:text-xs font-bold text-slate-500 uppercase tracking-wider">Industrial Experience</span>
          </div>
          <div className="space-y-1 p-2 border-l border-slate-100">
            <span className="block font-black text-brand-blue text-2xl sm:text-3xl">1500+ Units</span>
            <span className="block text-[10px] sm:text-xs font-bold text-slate-500 uppercase tracking-wider">Installed in Maharashtra</span>
          </div>
          <div className="space-y-1 p-2 border-t md:border-t-0 md:border-l border-slate-100 pt-6 md:pt-2">
            <span className="block font-black text-brand-blue text-2xl sm:text-3xl">0.99 PF</span>
            <span className="block text-[10px] sm:text-xs font-bold text-slate-500 uppercase tracking-wider">Target APFC Precision</span>
          </div>
          <div className="space-y-1 p-2 border-t md:border-t-0 border-l border-slate-100 pt-6 md:pt-2">
            <span className="block font-black text-brand-blue text-2xl sm:text-3xl">24/7 Support</span>
            <span className="block text-[10px] sm:text-xs font-bold text-slate-500 uppercase tracking-wider">Emergency Field Service</span>
          </div>
        </div>
      </section>

      {/* 3. Company Introduction & Why Choose Nextart */}
      <section className="py-16 sm:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column - Why Choose Us list */}
          <div className="lg:col-span-5 space-y-6">
            <span className="text-brand-orange font-extrabold text-xs uppercase tracking-widest block font-display">Core Manufacturing Excellence</span>
            <h2 className="text-3xl sm:text-4xl font-black text-brand-blue tracking-tight font-display">
              Uncompromising Quality Built for Extreme Load Stresses
            </h2>
            <p className="text-sm text-slate-600 leading-relaxed">
              Industrial facilities cannot afford power fluctuations. A single power outage or board failure can stop assembly lines, causing substantial revenue loss. Nextart designs rugged power control systems that stand strong under high heat, humidity, and constant workload stress.
            </p>
            <button 
              onClick={() => onNavigate('#/about')}
              className="text-brand-orange hover:text-brand-orange-hover text-sm font-bold flex items-center gap-1 hover:underline cursor-pointer"
            >
              Explore Our Infrastructure &rarr;
            </button>
          </div>

          {/* Right Column - Highlight Grid */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
            
            <div className="bg-white border border-slate-100 rounded p-6 shadow-sm">
              <Award className="w-8 h-8 text-brand-orange mb-4" />
              <h3 className="font-bold text-slate-900 mb-2">99.9% Electrolytic Copper</h3>
              <p className="text-xs text-slate-500 leading-relaxed">
                We strictly use pure insulated electrolytic grade copper winders in our variacs and buck-boost transformers, guaranteeing minimum core loss and long lifespans.
              </p>
            </div>

            <div className="bg-white border border-slate-100 rounded p-6 shadow-sm">
              <Settings className="w-8 h-8 text-brand-orange mb-4" />
              <h3 className="font-bold text-slate-900 mb-2">Microcontroller Precision</h3>
              <p className="text-xs text-slate-500 leading-relaxed">
                Our high-speed 32-bit digital controller boards analyze voltage cycles thousands of times per second, managing carbon brush drives with zero overshoot.
              </p>
            </div>

            <div className="bg-white border border-slate-100 rounded p-6 shadow-sm">
              <Shield className="w-8 h-8 text-brand-orange mb-4" />
              <h3 className="font-bold text-slate-900 mb-2">Dual-Isolation Protection</h3>
              <p className="text-xs text-slate-500 leading-relaxed">
                Built-in low/high voltage limits, phase failure protection, single-phasing prevention, and motor thermal limits protect connected loads from damage.
              </p>
            </div>

            <div className="bg-white border border-slate-100 rounded p-6 shadow-sm">
              <Users className="w-8 h-8 text-brand-orange mb-4" />
              <h3 className="font-bold text-slate-900 mb-2">On-Site Commissioning</h3>
              <p className="text-xs text-slate-500 leading-relaxed">
                We don't just supply equipment; our skilled local engineers physically assist in laying cabling, calibrating controllers, and testing startup loads on-site.
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* 4. INTERACTIVE SIZING & CALCULATORS SECTION */}
      <section className="bg-slate-950 py-16 sm:py-24 border-y border-slate-900 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-12 space-y-4">
            <span className="text-brand-orange font-extrabold text-xs uppercase tracking-widest block">Interactive Engineering Tools</span>
            <h2 className="text-3xl sm:text-4xl font-black text-white font-display">
              Calculate Your Sizing &amp; Energy Savings Instantly
            </h2>
            <p className="text-sm text-slate-400">
              Input your facility load metrics to find the ideal KVA stabilizer rating or APFC capacitor bank size. These calculators utilize actual Indian industrial power load parameters.
            </p>
          </div>

          <Calculators onOpenInquiry={onOpenInquiry} />

        </div>
      </section>

      {/* 5. Featured Products Showcase */}
      <section className="py-16 sm:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between mb-12 gap-4">
          <div className="space-y-3">
            <span className="text-brand-orange font-extrabold text-xs uppercase tracking-widest block">Heavy Duty Product Line</span>
            <h2 className="text-3xl sm:text-4xl font-black text-brand-blue font-display">
              Stabilizers &amp; Custom Control Panels
            </h2>
            <p className="text-sm text-slate-500 max-w-xl">
              We fabricate industrial-grade electrical equipment with world-class switchgear, rigorously simulated at our Nashik plant before shipment.
            </p>
          </div>
          <button 
            onClick={() => onNavigate('#/product/three-phase-servo-stabilizer')}
            className="bg-[#002E5D] hover:bg-[#001f3f] text-white font-bold py-2.5 px-6 rounded text-xs flex items-center gap-1 transition-all inline-flex shrink-0 self-start sm:self-auto cursor-pointer"
          >
            Browse Product Catalog
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>

        {/* Product Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PRODUCTS.slice(0, 6).map(product => {
            return (
              <div 
                key={product.id}
                className="bg-white border border-slate-100 rounded overflow-hidden flex flex-col justify-between shadow-sm hover:shadow-md transition-all"
              >
                <div>
                  {/* Decorative Industrial SVG Illustration representing the cabinet */}
                  <div className="bg-slate-900 h-48 flex items-center justify-center p-6 text-white relative">
                    <div className="absolute top-3 right-3 px-2 py-0.5 bg-slate-800 text-[10px] text-slate-300 rounded font-semibold uppercase">
                      {product.category === 'servo' ? 'Stabilizers' : 'Control Panels'}
                    </div>
                    
                    {/* Unique Stylized SVG schematic for each product card */}
                    {product.category === 'servo' ? (
                      <svg className="w-24 h-24 stroke-brand-orange fill-none" viewBox="0 0 100 100">
                        {/* Stabilizer outer frame */}
                        <rect x="25" y="15" width="50" height="70" rx="4" stroke="#475569" strokeWidth="2" />
                        <rect x="35" y="25" width="30" height="15" rx="2" fill="#0f172a" stroke="#334155" />
                        {/* Voltmeter display */}
                        <text x="50" y="34" fill="#22c55e" fontSize="7" fontWeight="bold" textAnchor="middle" fontFamily="monospace">415.0 V</text>
                        {/* Windings vector lines */}
                        <path d="M 15 65 Q 20 55, 25 65 T 35 65 T 45 65 T 55 65 T 65 65" stroke="#F27D26" strokeWidth="2" />
                        <circle cx="50" cy="72" r="3" fill="#ef4444" />
                      </svg>
                    ) : (
                      <svg className="w-24 h-24 stroke-blue-400 fill-none" viewBox="0 0 100 100">
                        {/* Control Panel board */}
                        <rect x="20" y="10" width="60" height="80" rx="3" stroke="#475569" strokeWidth="2" />
                        {/* Inner contactors & relays */}
                        <rect x="28" y="20" width="12" height="12" rx="1" fill="#334155" />
                        <rect x="44" y="20" width="12" height="12" rx="1" fill="#334155" />
                        <rect x="60" y="20" width="12" height="12" rx="1" fill="#334155" />
                        {/* Wire layouts */}
                        <path d="M 34 32 L 34 80 M 50 32 L 50 80 M 66 32 L 66 80" stroke="#f59e0b" strokeWidth="1.5" />
                        <rect x="28" y="50" width="44" height="6" fill="#1e293b" stroke="#334155" />
                        {/* Indicator Lamps */}
                        <circle cx="34" cy="15" r="2.5" fill="#ef4444" />
                        <circle cx="50" cy="15" r="2.5" fill="#f59e0b" />
                        <circle cx="66" cy="15" r="2.5" fill="#22c55e" />
                      </svg>
                    )}
                  </div>

                  <div className="p-6 space-y-3">
                    <h3 className="font-extrabold text-slate-900 text-lg font-display">{product.name}</h3>
                    <p className="text-xs text-slate-500 leading-relaxed line-clamp-2">
                      {product.shortDescription}
                    </p>
                    
                    {/* Features checklist snippet */}
                    <div className="space-y-1.5 pt-2">
                      {product.features.slice(0, 3).map((feat, idx) => (
                        <div key={idx} className="flex items-start gap-1.5 text-[11px] text-slate-600">
                          <CheckCircle className="w-3.5 h-3.5 text-green-500 shrink-0 mt-0.5" />
                          <span className="line-clamp-1">{feat}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="px-4 pb-4 pt-3 border-t border-slate-100 grid grid-cols-2 gap-2 bg-slate-50/50">
                  <button
                    onClick={() => onNavigate(`#/product/${product.slug}`)}
                    className="w-full py-2.5 border border-slate-200 bg-white hover:bg-slate-50 text-slate-700 font-bold rounded text-[11px] text-center transition-all cursor-pointer"
                  >
                    Specifications
                  </button>
                  <button
                    onClick={() => onOpenInquiry(`Inquiry about ${product.name}`)}
                    className="w-full py-2.5 bg-brand-orange hover:bg-brand-orange-hover text-white font-bold rounded text-[11px] text-center transition-all cursor-pointer animate-none"
                  >
                    Request Quote
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* 6. Industries Served Grid */}
      <section className="bg-white py-16 sm:py-24 border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <span className="text-brand-orange font-extrabold text-xs uppercase tracking-widest block">Industrial Adaptability</span>
            <h2 className="text-3xl sm:text-4xl font-black text-brand-blue font-display">
              Engineered for Maharashtra’s Primary Sectors
            </h2>
            <p className="text-sm text-slate-500">
              From heavy stone crushers in Sinnar MIDC to FDA-regulated clean pharmaceutical zones in Satpur, our engineering adaptions address unique environment stresses.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {INDUSTRIES.map(ind => (
              <div 
                key={ind.id}
                className="bg-slate-50 border border-slate-100 rounded p-6 hover:border-brand-orange/30 transition-all shadow-sm"
              >
                <div className="w-12 h-12 bg-brand-orange/10 text-brand-orange rounded flex items-center justify-center mb-5 font-bold">
                  {ind.id === 'stone-crusher' && <Activity className="w-6 h-6" />}
                  {ind.id === 'food-industry' && <Settings className="w-6 h-6" />}
                  {ind.id === 'chemical-pharma' && <Award className="w-6 h-6" />}
                  {ind.id === 'water-treatment' && <Shield className="w-6 h-6" />}
                  {ind.id === 'cold-storage' && <Zap className="w-6 h-6" />}
                  {ind.id === 'engineering-mfg' && <Users className="w-6 h-6" />}
                </div>
                <h3 className="font-extrabold text-slate-900 text-lg mb-2 font-display">{ind.name}</h3>
                <p className="text-xs text-slate-500 leading-relaxed mb-4">
                  {ind.description}
                </p>
                <div className="space-y-1.5 border-t border-slate-200/60 pt-3">
                  <span className="text-[10px] uppercase font-bold text-slate-400 block tracking-wide">Key Benefit:</span>
                  {ind.benefits.slice(0, 2).map((b, i) => (
                    <div key={i} className="flex items-start gap-1.5 text-[11px] text-slate-600 leading-normal">
                      <CheckCircle className="w-3.5 h-3.5 text-green-500 shrink-0 mt-0.5" />
                      <span>{b}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <button
              onClick={() => onNavigate('#/industries')}
              className="text-brand-orange font-bold hover:underline text-sm inline-flex items-center gap-1 cursor-pointer"
            >
              Learn More about Industries Served &rarr;
            </button>
          </div>
        </div>
      </section>

      {/* 7. Our Manufacturing & Testing Process */}
      <section className="bg-slate-900 text-white py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <span className="text-brand-orange font-extrabold text-xs uppercase tracking-widest block font-display">Six-Stage Quality Protocol</span>
            <h2 className="text-3xl sm:text-4xl font-black text-white font-display">
              Zero-Defect Manufacturing Workflow
            </h2>
            <p className="text-sm text-slate-400">
              Nextart follows rigid quality audits. We inspect every sub-component and simulate severe thermal and voltage stresses prior to dispatch.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-6 relative">
            {/* Sequential Steps */}
            {[
              { step: '01', title: 'Electrical Design', desc: 'Custom CAD blueprint and single-line drawings mapped to customer requirements.' },
              { step: '02', title: 'Core Lamination', desc: 'Precision assembly of high-permeability grain-oriented CRGO silicon steel cores.' },
              { step: '03', title: 'Copper Winding', desc: 'Double-insulated class-H pure electrolytic copper winding for zero power loss.' },
              { step: '04', title: 'Vacuum Varnish', desc: 'Rigid vacuum-pressure impregnation treatment ensuring moisture and rattle resistance.' },
              { step: '05', title: 'Full Load Test', desc: 'Staged simulated test of thermal thresholds and voltage correction limits.' },
              { step: '06', title: 'Despatch & Setup', desc: 'Secure packaging, transport, on-site commissioning and final load trial.' }
            ].map((st, i) => (
              <div key={i} className="bg-slate-950 border border-slate-800 p-5 rounded space-y-3 relative overflow-hidden flex flex-col justify-between">
                <span className="absolute right-3 top-3 text-4xl font-black text-slate-800 font-mono select-none">{st.step}</span>
                <div className="space-y-2 relative z-10 pt-4">
                  <h4 className="font-extrabold text-slate-100 text-sm">{st.title}</h4>
                  <p className="text-[11px] text-slate-400 leading-relaxed">{st.desc}</p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 8. Frequently Asked Questions (FAQ) Accordion */}
      <section className="py-16 sm:py-24 max-w-4xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12 space-y-3">
          <span className="text-brand-orange font-extrabold text-xs uppercase tracking-widest block font-display">Information Desk</span>
          <h2 className="text-3xl font-black text-brand-blue font-display">Frequently Asked Questions</h2>
          <p className="text-sm text-slate-500">
            Got technical queries about industrial stabilizers or power factor? Read through our standard answers.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <div 
              key={idx}
              className="bg-white border border-slate-200 rounded overflow-hidden shadow-sm transition-all"
            >
              <button
                onClick={() => setActiveFaq(activeFaq === idx ? null : idx)}
                className="w-full text-left px-6 py-4 font-bold text-slate-900 hover:bg-slate-50 flex justify-between items-center text-sm sm:text-base focus:outline-none cursor-pointer"
              >
                <span>{faq.q}</span>
                <span className="text-brand-orange font-mono font-bold text-lg">
                  {activeFaq === idx ? '−' : '+'}
                </span>
              </button>
              {activeFaq === idx && (
                <div className="px-6 pb-5 pt-1 text-xs sm:text-sm text-slate-600 border-t border-slate-100 leading-relaxed bg-slate-50/50">
                  {faq.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* 9. Nashik MIDC Google Map & Local B2B Enquiry Form */}
      <section className="bg-slate-100 border-t border-slate-200 py-12 sm:py-24 relative" id="home-contact-form">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          
          {/* Left Column - Contact Form */}
          <div className="bg-white rounded-xl border border-slate-200 p-5 sm:p-8 shadow-sm flex flex-col justify-between">
            <div>
              <div className="space-y-2 mb-6">
                <span className="text-brand-orange font-extrabold text-xs uppercase tracking-widest block font-display">B2B Quick Connect</span>
                <h3 className="text-2xl font-black text-brand-blue font-display">Request Free Technical Appraisal</h3>
                <p className="text-xs text-slate-500">
                  Fill in your factory load details to receive an official proposal from Nextart engineers.
                </p>
              </div>

              {leadSuccess ? (
                <div className="bg-green-50 border border-green-200 text-green-800 rounded-lg p-5 text-center my-6 space-y-2">
                  <h4 className="font-bold text-base font-display">Thank you, Rahul!</h4>
                  <p className="text-xs text-green-700">
                    We received your request. An expert electrical engineer from our <strong>Ambad MIDC</strong> workshop will call you shortly on the number provided.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleLeadSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[10px] uppercase font-bold text-slate-500 mb-1">Your Name</label>
                      <input 
                        type="text" 
                        required
                        value={leadForm.name}
                        onChange={e => setLeadForm({...leadForm, name: e.target.value})}
                        placeholder="e.g. Rahul Patil"
                        className="w-full text-xs border border-slate-200 rounded-lg p-3 focus:outline-none focus:border-[#002E5D] focus:ring-1 focus:ring-[#002E5D]" 
                      />
                    </div>
                    <div>
                      <label className="block text-[10px] uppercase font-bold text-slate-500 mb-1">Factory Name</label>
                      <input 
                        type="text" 
                        required
                        value={leadForm.company}
                        onChange={e => setLeadForm({...leadForm, company: e.target.value})}
                        placeholder="e.g. Nashik Steel Forge"
                        className="w-full text-xs border border-slate-200 rounded-lg p-3 focus:outline-none focus:border-[#002E5D] focus:ring-1 focus:ring-[#002E5D]" 
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[10px] uppercase font-bold text-slate-500 mb-1">Mobile No</label>
                      <input 
                        type="tel" 
                        required
                        value={leadForm.phone}
                        onChange={e => setLeadForm({...leadForm, phone: e.target.value})}
                        placeholder="e.g. +91 84215 48065"
                        className="w-full text-xs border border-slate-200 rounded-lg p-3 focus:outline-none focus:border-[#002E5D] focus:ring-1 focus:ring-[#002E5D]" 
                      />
                    </div>
                    <div>
                      <label className="block text-[10px] uppercase font-bold text-slate-500 mb-1">Select Product</label>
                      <select 
                        value={leadForm.product}
                        onChange={e => setLeadForm({...leadForm, product: e.target.value})}
                        className="w-full text-xs border border-slate-200 rounded-lg p-3 focus:outline-none focus:border-[#002E5D] focus:ring-1 focus:ring-[#002E5D] bg-white"
                      >
                        <option value="Servo Stabilizer">Servo Voltage Stabilizer</option>
                        <option value="APFC Panel">APFC Panel (Capacitor Bank)</option>
                        <option value="Control Panel">PLC / MCC / PCC Panel</option>
                        <option value="Automation Service">Industrial Automation Trial</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-[10px] uppercase font-bold text-slate-500 mb-1">Message / Connected Load in HP/kW</label>
                    <textarea 
                      rows={3}
                      value={leadForm.message}
                      onChange={e => setLeadForm({...leadForm, message: e.target.value})}
                      placeholder="Share details like your connected load, fluctuation window, or local MIDC site location..."
                      className="w-full text-xs border border-slate-200 rounded-lg p-3 focus:outline-none focus:border-[#002E5D] focus:ring-1 focus:ring-[#002E5D]" 
                    />
                  </div>

                  <button 
                    type="submit"
                    className="w-full py-3 bg-brand-orange hover:bg-brand-orange-hover text-white font-bold rounded-lg text-xs transition-colors cursor-pointer text-center font-display uppercase tracking-wider"
                  >
                    Submit Quick Request
                  </button>
                </form>
              )}
            </div>

            <div className="border-t border-slate-100 pt-4 mt-6 text-[10px] sm:text-xs text-slate-400 flex flex-col sm:flex-row gap-2 sm:gap-0 sm:items-center justify-between">
              <span>⚡ Average response time: <strong>1 Hour</strong></span>
              <span>📞 Hotline: <strong>+91 84215 48065</strong></span>
            </div>
          </div>

          {/* Right Column - Map Placeholder */}
          <div className="bg-slate-900 rounded overflow-hidden shadow-sm relative border border-slate-800 flex flex-col justify-between p-6 text-white min-h-[350px]">
            <div className="absolute inset-0 bg-slate-950 opacity-10 bg-[radial-gradient(#e2e8f0_1px,transparent_1px)] bg-[size:1rem_1rem]"></div>
            
            <div className="relative z-10 space-y-4">
              <span className="text-brand-orange font-extrabold text-xs uppercase tracking-widest block font-display">Interactive Workshop Map</span>
              <h3 className="text-xl font-black font-display text-white">Visit Nextart Nashik Plant</h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                Our primary state-of-the-art testing facility and design floor are located inside Ambad MIDC, Nashik, Maharashtra. We welcome client visits, on-site fatal testing simulations, and live wire inspections.
              </p>
              
              <div className="space-y-2 text-xs text-slate-400 pt-2">
                <p><strong>Address:</strong> Plot No. G-48, Sector E, Ambad MIDC, Nashik, Maharashtra 422010</p>
                <p><strong>Phone helpline:</strong> +91 84215 48065</p>
                <p><strong>Business Hours:</strong> Monday - Saturday, 9:00 AM - 7:00 PM</p>
              </div>
            </div>

            {/* Stylized vector map card to avoid iframe breaking constraints and maintain top aesthetic */}
            <div className="relative z-10 bg-[#00152b] border border-slate-800 p-4 rounded mt-6">
              <div className="flex items-center justify-between mb-2">
                <span className="text-[10px] uppercase font-bold tracking-wider text-slate-400 flex items-center gap-1">
                  <MapPin className="w-3.5 h-3.5 text-brand-orange" />
                  Ambad MIDC Coordinates
                </span>
                <a 
                  href="https://maps.google.com/?q=Ambad+MIDC+Nashik" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-[10px] text-brand-orange font-bold hover:underline"
                >
                  Open in Google Maps &rarr;
                </a>
              </div>
              {/* Dynamic stylized representation of road corridors */}
              <div className="h-28 bg-[#000e1e] rounded flex items-center justify-center border border-slate-800 relative overflow-hidden">
                <div className="absolute inset-x-0 h-1 bg-slate-800 top-1/2"></div>
                <div className="absolute inset-y-0 w-1 bg-slate-800 left-1/3"></div>
                <div className="absolute top-1/2 left-1/3 w-4 h-4 bg-brand-orange rounded-full border-2 border-white -translate-x-2 -translate-y-2 flex items-center justify-center text-white text-[8px] font-black animate-pulse">N</div>
                <span className="absolute top-4 left-6 text-[9px] text-slate-500 uppercase font-bold tracking-widest">Mumbai-Agra Highway (NH-3)</span>
                <span className="absolute bottom-4 right-6 text-[9px] text-slate-500 uppercase font-bold tracking-widest">Ambad Link Road</span>
                <span className="text-[10px] text-slate-400 font-bold bg-[#00152b] px-3 py-1.5 rounded border border-slate-800 relative z-10">
                  Plot No. G-48, Ambad MIDC
                </span>
              </div>
            </div>

          </div>

        </div>
      </section>

    </div>
  );
}
