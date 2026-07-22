import React from 'react';
import { 
  Award, Shield, Settings, Users, BookOpen, 
  MapPin, CheckCircle, Clock, CheckSquare, Sparkles 
} from 'lucide-react';

interface AboutProps {
  onOpenInquiry: (subject: string) => void;
}

export default function About({ onOpenInquiry }: AboutProps) {
  return (
    <div className="bg-slate-50 text-slate-800" id="about-view">
      
      {/* Page Header */}
      <section className="bg-brand-blue text-white py-12 sm:py-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#001a35_1px,transparent_1px),linear-gradient(to_bottom,#001a35_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-30"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-3">
          <span className="text-brand-orange font-extrabold text-xs uppercase tracking-widest block font-display">About Our Enterprise</span>
          <h1 className="text-3xl sm:text-5xl font-black font-display text-white">Nextart Power Controller</h1>
          <p className="text-sm sm:text-base text-slate-300 max-w-2xl mx-auto">
            Nashik's leading engineering enterprise manufacturing high-precision Servo Stabilizers and custom Power Panels.
          </p>
        </div>
      </section>

      {/* Profile Section */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-7 space-y-6">
          <span className="text-brand-orange font-extrabold text-xs uppercase tracking-widest block font-display">Corporate History</span>
          <h2 className="text-3xl font-black text-brand-blue font-display tracking-tight">
            A Legacy of Uncompromising Electrical Engineering
          </h2>
          <div className="text-sm text-slate-600 space-y-4 leading-relaxed">
            <p>
              Founded in Nashik, Maharashtra, <strong>Nextart Power Controller</strong> has established itself as an industry leader in designing, testing, and deploying specialized voltage stabilizers and electrical panels. From simple beginnings serving agricultural pumps, we have evolved to power large engineering plants, automated pharmaceutical lines, packaging plants, and infrastructure installations across the country.
            </p>
            <p>
              We run a vertically integrated manufacturing plant in Ambad MIDC, housing CAD schematic desks, a sheet fabrication workshop, custom-winding machines, vacuum drying ovens, and high-capacity full-load simulation testing panels. This ensures every product we ship is of outstanding quality and performance.
            </p>
            <p>
              Our design team follows strict CPRI guidelines and coordinates directly with industrial consultants, builders, and electrical contractors. Our goal is simple: to keep your business operating smoothly with stable voltage and high energy efficiency.
            </p>
          </div>
        </div>

        {/* Technical Layout Block representing the plant structure */}
        <div className="lg:col-span-5 bg-slate-900 border border-slate-800 rounded p-6 text-white relative overflow-hidden shadow-xl">
          <div className="absolute top-0 right-0 w-32 h-32 bg-brand-orange/10 rounded-full blur-2xl pointer-events-none"></div>
          <div className="space-y-4">
            <h3 className="font-extrabold text-slate-100 text-lg border-b border-slate-800 pb-2 font-display">Facility Specifications</h3>
            
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-slate-950 p-4 rounded border border-slate-850">
                <span className="text-[10px] text-slate-500 uppercase font-bold block">Workshop Area</span>
                <span className="text-base font-black text-white font-display">8,500 Sq. Ft.</span>
              </div>
              <div className="bg-slate-950 p-4 rounded border border-slate-850">
                <span className="text-[10px] text-slate-500 uppercase font-bold block">Daily Capacity</span>
                <span className="text-base font-black text-white font-display">15+ Panels / Day</span>
              </div>
              <div className="bg-slate-950 p-4 rounded border border-slate-850">
                <span className="text-[10px] text-slate-500 uppercase font-bold block">Testing Bay</span>
                <span className="text-base font-black text-white font-display">up to 2000 KVA</span>
              </div>
              <div className="bg-slate-950 p-4 rounded border border-slate-850">
                <span className="text-[10px] text-slate-500 uppercase font-bold block">Certifications</span>
                <span className="text-base font-black text-white font-display">ISO 9001:2015</span>
              </div>
            </div>

            <div className="bg-slate-950 p-4 rounded border border-slate-850 space-y-1.5 text-xs text-slate-400">
              <span className="font-bold text-slate-200 block">⚡ Main Machinery Installed:</span>
              <p>• Automated copper wire winding mandrels</p>
              <p>• Advanced hydraulic sheet fabrication folders</p>
              <p>• Closed-chamber vacuum pressure impregnator</p>
              <p>• Calibration instruments and load banks</p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision Banner */}
      <section className="bg-slate-950 text-white py-16 sm:py-20 border-y border-slate-900 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-12">
          
          <div className="bg-slate-900 border border-slate-800 p-8 rounded space-y-4">
            <span className="p-2.5 bg-brand-orange/10 text-brand-orange rounded inline-block">
              <Sparkles className="w-6 h-6 text-brand-orange" />
            </span>
            <h3 className="text-xl font-bold font-display text-slate-100">Our Strategic Mission</h3>
            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
              To engineer and supply high-precision, low-loss, and heavy-duty power control systems that guarantee 100% stable voltages and peak power factors for our clients. We strive to help industrial enterprises eliminate down-time, reduce energy billing, and maximize capital equipment returns through superior electrical crafts.
            </p>
          </div>

          <div className="bg-slate-900 border border-slate-800 p-8 rounded space-y-4">
            <span className="p-2.5 bg-blue-600/10 text-blue-400 rounded inline-block">
              <BookOpen className="w-6 h-6" />
            </span>
            <h3 className="text-xl font-bold font-display text-slate-100">Our Industry Vision</h3>
            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
              To become India's most trusted partner in industrial power quality and automation by 2030. We envision a smart, highly integrated factory landscape where every Nextart product incorporates real-time energy logging, preventive thermal diagnostics, and automated grid-balancing controls.
            </p>
          </div>

        </div>
      </section>

      {/* Quality Policy & Testing protocols */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
          <span className="text-brand-orange font-extrabold text-xs uppercase tracking-widest block font-display">Zero Tolerance Protocol</span>
          <h2 className="text-3xl font-black text-brand-blue font-display">Quality Assurance Standards</h2>
          <p className="text-sm text-slate-500">
            Nextart follows a rigid, staged quality testing checklist conforming strictly to IS standards and Bureau of Indian Standards (BIS) parameters.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          <div className="bg-white border border-slate-200 rounded p-6 shadow-sm space-y-4">
            <div className="w-10 h-10 bg-brand-orange/10 text-brand-orange rounded flex items-center justify-center font-bold">1</div>
            <h3 className="font-extrabold text-slate-900 text-base font-display">Incoming Component Check</h3>
            <p className="text-xs text-slate-500 leading-relaxed">
              Every raw material item is checked before acceptance:
            </p>
            <ul className="text-xs text-slate-600 space-y-1.5">
              <li className="flex items-center gap-1.5">• Winding wires tested for conductivity and insulation</li>
              <li className="flex items-center gap-1.5">• CRGO steel cores verified for magnetic flux capacity</li>
              <li className="flex items-center gap-1.5">• Switches and MCBs source-checked for breaking limits</li>
            </ul>
          </div>

          <div className="bg-white border border-slate-200 rounded p-6 shadow-sm space-y-4">
            <div className="w-10 h-10 bg-brand-orange/10 text-brand-orange rounded flex items-center justify-center font-bold">2</div>
            <h3 className="font-extrabold text-slate-900 text-base font-display">In-Process Audits</h3>
            <p className="text-xs text-slate-500 leading-relaxed">
              During fabrication, our technical team executes:
            </p>
            <ul className="text-xs text-slate-600 space-y-1.5">
              <li className="flex items-center gap-1.5">• Core tightness reviews to prevent audible humming</li>
              <li className="flex items-center gap-1.5">• Soldering and busbar connection resistance tests</li>
              <li className="flex items-center gap-1.5">• Varnish baking times and thickness inspection</li>
            </ul>
          </div>

          <div className="bg-white border border-slate-200 rounded p-6 shadow-sm space-y-4">
            <div className="w-10 h-10 bg-brand-orange/10 text-brand-orange rounded flex items-center justify-center font-bold">3</div>
            <h3 className="font-extrabold text-slate-900 text-base font-display">Pre-Dispatch Simulation</h3>
            <p className="text-xs text-slate-500 leading-relaxed">
              Prior to transport, every stabilizer is hooked up to:
            </p>
            <ul className="text-xs text-slate-600 space-y-1.5">
              <li className="flex items-center gap-1.5">• Real-load banks to verify efficiency thresholds</li>
              <li className="flex items-center gap-1.5">• High-voltage flash tests to check insulation integrity</li>
              <li className="flex items-center gap-1.5">• Noload power consumption logging</li>
            </ul>
          </div>

        </div>
      </section>

      {/* Bottom CTA */}
      <section className="bg-slate-100 border-t border-slate-200 py-16 text-center space-y-6">
        <h3 className="text-2xl sm:text-3xl font-black text-brand-blue tracking-tight font-display max-w-2xl mx-auto">
          Partner with Nashik’s Trusted Industrial Power Engineering Team
        </h3>
        <p className="text-sm text-slate-500 max-w-lg mx-auto">
          Need a site visit, electrical audit, or official technical drawing for your industrial plan? Let’s connect today.
        </p>
        <button
          onClick={() => onOpenInquiry('About Us Bottom CTA Inquiry')}
          className="bg-brand-orange hover:bg-brand-orange-hover text-white font-extrabold py-3.5 px-8 rounded text-sm transition-all inline-block cursor-pointer"
        >
          Book Site Audit &amp; Consultation
        </button>
      </section>

    </div>
  );
}
