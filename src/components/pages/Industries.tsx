import React from 'react';
import { INDUSTRIES } from '../../data';
import { CheckCircle, Activity, Award, Shield, Users, Settings, Zap } from 'lucide-react';

interface IndustriesProps {
  onOpenInquiry: (subject: string) => void;
}

export default function Industries({ onOpenInquiry }: IndustriesProps) {
  return (
    <div className="bg-slate-50 text-slate-800 animate-none" id="industries-view">
      
      {/* Header */}
      <section className="bg-brand-blue text-white py-12 sm:py-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#001a35_1px,transparent_1px),linear-gradient(to_bottom,#001a35_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-30"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-3">
          <span className="text-brand-orange font-extrabold text-xs uppercase tracking-widest block font-display">Industrial Segments</span>
          <h1 className="text-3xl sm:text-5xl font-black font-display text-white">Industries We Power</h1>
          <p className="text-sm sm:text-base text-slate-300 max-w-2xl mx-auto">
            From heavy crushing motors to surgical MRI bays, our custom electrical solutions safeguard complex, high-asset machinery from voltage sags and surges.
          </p>
        </div>
      </section>

      {/* Industries Detailed List */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-12">
        {INDUSTRIES.map((ind, idx) => {
          const isEven = idx % 2 === 0;
          return (
            <div 
              key={ind.id}
              className={`bg-white border border-slate-100 rounded p-8 shadow-sm grid grid-cols-1 lg:grid-cols-12 gap-8 items-center hover:border-brand-orange/30 transition-all ${
                isEven ? '' : 'lg:flex-row-reverse'
              }`}
            >
              {/* Info Column (Left or Right depending on alternating index) */}
              <div className={`lg:col-span-7 space-y-5 ${isEven ? 'lg:order-1' : 'lg:order-2'}`}>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-brand-orange/10 text-brand-orange rounded flex items-center justify-center font-bold">
                    {ind.id === 'stone-crusher' && <Activity className="w-5 h-5 text-brand-orange" />}
                    {ind.id === 'food-industry' && <Settings className="w-5 h-5 text-brand-orange" />}
                    {ind.id === 'chemical-pharma' && <Award className="w-5 h-5 text-brand-orange" />}
                    {ind.id === 'water-treatment' && <Shield className="w-5 h-5 text-brand-orange" />}
                    {ind.id === 'cold-storage' && <Zap className="w-5 h-5 text-brand-orange" />}
                    {ind.id === 'engineering-mfg' && <Users className="w-5 h-5 text-brand-orange" />}
                  </div>
                  <h3 className="text-xl sm:text-2xl font-black text-brand-blue font-display">{ind.name}</h3>
                </div>
                
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {ind.description}
                </p>

                <div className="space-y-2 pt-2 border-t border-slate-100">
                  <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest block mb-1 font-display">Staged Solutions &amp; Advancements:</span>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {ind.benefits.map((benefit, i) => (
                      <div key={i} className="flex items-start gap-2 text-xs text-slate-700 leading-relaxed">
                        <CheckCircle className="w-4 h-4 text-green-500 shrink-0 mt-0.5" />
                        <span>{benefit}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-3">
                  <button
                    onClick={() => onOpenInquiry(`Inquiry for custom solutions in the ${ind.name} industry`)}
                    className="bg-brand-blue hover:bg-[#001f3f] text-white font-bold py-2.5 px-5 rounded text-xs transition-colors cursor-pointer"
                  >
                    Discuss Factory Specs
                  </button>
                </div>
              </div>

              {/* Decorative Schematic Grid Mockup (Right or Left depending on index) */}
              <div className={`lg:col-span-5 bg-slate-950 rounded p-6 text-white border border-slate-900 flex flex-col justify-between min-h-[220px] shadow-inner ${isEven ? 'lg:order-2' : 'lg:order-1'}`}>
                <div className="flex justify-between items-center text-[9px] text-slate-400 font-bold uppercase tracking-widest font-display">
                  <span>Industrial Context Map</span>
                  <span>IP-54 Enclosure Grade</span>
                </div>
                
                {/* Micro vector diagram of industrial machinery */}
                <div className="h-28 flex items-center justify-center">
                  {ind.id === 'stone-crusher' ? (
                    <svg viewBox="0 0 100 50" className="w-32 h-20 stroke-brand-orange fill-none" strokeWidth="2">
                      {/* Heavy crusher jaw mockup */}
                      <path d="M 10 10 L 30 40 L 50 10 L 70 40 L 90 10" />
                      <path d="M 10 40 Q 50 20, 90 40" stroke="#ef4444" strokeDasharray="2,2" />
                      <circle cx="50" cy="23" r="5" fill="#3b82f6" />
                    </svg>
                  ) : ind.id === 'food-industry' ? (
                    <svg viewBox="0 0 100 50" className="w-32 h-20 stroke-green-500 fill-none" strokeWidth="2">
                      {/* Rotary process assembly lines */}
                      <circle cx="25" cy="25" r="12" />
                      <circle cx="75" cy="25" r="12" />
                      <path d="M 25 13 L 75 13 M 25 37 L 75 37" />
                      <circle cx="50" cy="25" r="4" fill="#f59e0b" />
                    </svg>
                  ) : (
                    <svg viewBox="0 0 100 50" className="w-32 h-20 stroke-blue-400 fill-none" strokeWidth="2">
                      {/* Cleanroom constant environment line */}
                      <path d="M 10 25 Q 25 10, 40 25 T 70 25 T 90 25" />
                      <line x1="10" y1="25" x2="90" y2="25" stroke="#334155" />
                      <circle cx="40" cy="25" r="3" fill="#22c55e" />
                    </svg>
                  )}
                </div>

                <div className="text-[10px] text-slate-400 border-t border-slate-900 pt-3 flex justify-between font-display">
                  <span>Critical Variable: <strong>Voltage Dips</strong></span>
                  <span>Safety Margin: <strong>+35% Rated</strong></span>
                </div>
              </div>

            </div>
          );
        })}
      </section>

      {/* Trust Quote Banner */}
      <section className="bg-slate-950 text-white py-16 text-center space-y-4 relative">
        <h3 className="text-xl sm:text-2xl font-black font-display max-w-2xl mx-auto px-4 text-white">
          Need a fully customized electrical layout for your new MIDC plant?
        </h3>
        <p className="text-xs text-slate-400 max-w-md mx-auto">
          Our engineering team coordinates with industrial architects and project managers to draft, fabricate, and test custom systems from scratch.
        </p>
        <button
          onClick={() => onOpenInquiry('Industries Layout Project Consult')}
          className="bg-brand-orange hover:bg-brand-orange-hover text-white font-extrabold py-3 px-6 rounded text-xs sm:text-sm shadow shadow-orange-950/25 transition-all inline-block cursor-pointer"
        >
          Request Technical Consultation
        </button>
      </section>

    </div>
  );
}
