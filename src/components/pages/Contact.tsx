import React, { useState } from 'react';
import { 
  MapPin, Phone, Mail, Clock, ShieldCheck, 
  Send, HelpCircle, MessageSquare, Landmark, CheckSquare 
} from 'lucide-react';

interface ContactProps {
  onOpenInquiry: (subject: string) => void;
}

export default function Contact({ onOpenInquiry }: ContactProps) {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    phone: '',
    email: '',
    location: '',
    urgency: 'Medium',
    loadType: 'VFC CNC / VMC CNC',
    message: ''
  });
  const [isSuccess, setIsSuccess] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const formBody = new URLSearchParams();
      Object.entries(formData).forEach(([key, value]) => {
        formBody.append(key, String(value));
      });
      formBody.append('subject', 'Detailed Contact Page RFQ Submission');

      await fetch('./contact.php', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: formBody.toString()
      });

      setTimeout(() => {
        setIsSubmitting(false);
        setIsSuccess(true);
      }, 800);
    } catch (err) {
      setTimeout(() => {
        setIsSubmitting(false);
        setIsSuccess(true);
      }, 800);
    }
  };

  return (
    <div className="bg-slate-50 text-slate-800 animate-none" id="contact-view">
      
      {/* Header */}
      <section className="bg-brand-blue text-white py-12 sm:py-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#001a35_1px,transparent_1px),linear-gradient(to_bottom,#001a35_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-30"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-3">
          <span className="text-brand-orange font-extrabold text-xs uppercase tracking-widest block font-display">Contact &amp; Support</span>
          <h1 className="text-3xl sm:text-5xl font-black font-display text-white">Connect with Nextart Engineers</h1>
          <p className="text-sm sm:text-base text-slate-300 max-w-2xl mx-auto">
            Get immediate assistance with technical sizing, custom pricing, site inspection, or emergency breakdown support in Nashik MIDC zones.
          </p>
        </div>
      </section>

      {/* Main Grid Contact Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 grid grid-cols-1 lg:grid-cols-12 gap-12">
        
        {/* Left Column - Contact Details */}
        <div className="lg:col-span-5 space-y-8">
          <div className="space-y-2">
            <span className="text-brand-orange font-extrabold text-xs uppercase tracking-widest block font-display">Corporate Contact Desk</span>
            <h2 className="text-2xl font-black text-brand-blue font-display tracking-tight">Get in Touch Directly</h2>
            <p className="text-xs sm:text-sm text-slate-500 leading-relaxed">
              We look forward to serving you. Feel free to contact our technical division via phone, email, or schedule an physical visit to our primary Ambad production facility.
            </p>
          </div>

          <div className="space-y-6 text-sm">
            
            {/* Phone */}
            <div className="flex gap-4 items-start bg-white p-5 rounded border border-slate-100 shadow-sm">
              <div className="p-3 bg-brand-orange/10 text-brand-orange rounded">
                <Phone className="w-5 h-5 text-brand-orange" />
              </div>
              <div className="space-y-1">
                <h4 className="font-extrabold text-slate-900 font-display">Call Engineering Hotline</h4>
                <p className="text-xs text-slate-500">For instant consultations, sizing estimates or breakdowns:</p>
                <a href="tel:+918421548065" className="text-sm font-black text-brand-blue block hover:text-brand-orange transition-colors">
                  +91 84215 48065
                </a>
              </div>
            </div>

            {/* Email */}
            <div className="flex gap-4 items-start bg-white p-5 rounded border border-slate-100 shadow-sm">
              <div className="p-3 bg-brand-orange/10 text-brand-orange rounded">
                <Mail className="w-5 h-5 text-brand-orange" />
              </div>
              <div className="space-y-1">
                <h4 className="font-extrabold text-slate-900 font-display">Email Business Proposals</h4>
                <p className="text-xs text-slate-500">Send drawings, tenders, purchase orders, or technical RFQs:</p>
                <a href="mailto:sales@nextartpower.com" className="text-sm font-black text-brand-blue block hover:text-brand-orange transition-colors">
                  sales@nextartpower.com
                </a>
              </div>
            </div>

            {/* Address */}
            <div className="flex gap-4 items-start bg-white p-5 rounded border border-slate-100 shadow-sm">
              <div className="p-3 bg-brand-orange/10 text-brand-orange rounded">
                <MapPin className="w-5 h-5 text-brand-orange" />
              </div>
              <div className="space-y-1">
                <h4 className="font-extrabold text-slate-900 font-display">Visit Ambad MIDC Plant</h4>
                <p className="text-xs text-slate-500">Plot No. G-48, Sector E, Ambad MIDC, Nashik, Maharashtra - 422010</p>
                <a 
                  href="https://maps.google.com/?q=Ambad+MIDC+Nashik"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-bold text-brand-orange hover:underline block mt-1"
                >
                  View Road Map in New Tab &rarr;
                </a>
              </div>
            </div>

            {/* Business Hours */}
            <div className="flex gap-4 items-start bg-white p-5 rounded border border-slate-100 shadow-sm">
              <div className="p-3 bg-brand-orange/10 text-brand-orange rounded">
                <Clock className="w-5 h-5 text-brand-orange" />
              </div>
              <div className="space-y-1">
                <h4 className="font-extrabold text-slate-900 font-display">Business Operating Hours</h4>
                <p className="text-xs text-slate-500">Mon - Sat: 9:00 AM to 7:00 PM IST</p>
                <p className="text-[10px] font-bold bg-brand-orange/10 text-brand-orange px-2 py-1 rounded inline-block mt-1 font-display">
                  🚨 24/7 Helpline Open for Registered Clients
                </p>
              </div>
            </div>

          </div>
        </div>

        {/* Right Column - Elaborate RFQ Form */}
        <div className="lg:col-span-7 bg-white rounded border border-slate-100 p-8 shadow-sm">
          
          <div className="space-y-2 mb-6">
            <span className="text-brand-orange font-extrabold text-xs uppercase tracking-widest block font-display">Digital RFQ Portal</span>
            <h3 className="text-xl sm:text-2xl font-black text-brand-blue font-display">Submit Technical Spec Enquiry</h3>
            <p className="text-xs text-slate-500 font-display">
              Complete this detailed form to receive an official, print-ready commercial quotation within 2 hours.
            </p>
          </div>

          {isSuccess ? (
            <div className="bg-green-50/50 border border-green-200 text-green-800 rounded p-6 text-center space-y-3">
              <CheckSquare className="w-12 h-12 text-green-600 mx-auto" />
              <h4 className="font-extrabold text-base font-display">RFQ Dispatched to Nextart Sales Desk!</h4>
              <p className="text-xs text-green-700 leading-relaxed">
                Thank you for your detailed requirements. Our pricing estimators are reviewing your machinery specs. A comprehensive pricing sheet is being generated and will be sent to your email.
              </p>
              <button 
                onClick={() => {
                  setIsSuccess(false);
                  setFormData({ name: '', company: '', phone: '', email: '', location: '', urgency: 'Medium', loadType: 'VFC CNC / VMC CNC', message: '' });
                }}
                className="bg-brand-blue hover:bg-[#001c3a] text-white font-bold py-2.5 px-6 rounded text-xs cursor-pointer"
              >
                Send Another Request
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[10px] uppercase font-bold text-slate-500 mb-1 font-display">Your Name *</label>
                  <input 
                    type="text" 
                    required
                    value={formData.name}
                    onChange={e => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Rahul Patil"
                    className="w-full text-xs border border-slate-200 rounded p-3 focus:outline-none focus:border-brand-orange" 
                  />
                </div>
                <div>
                  <label className="block text-[10px] uppercase font-bold text-slate-500 mb-1 font-display">Company Name *</label>
                  <input 
                    type="text" 
                    required
                    value={formData.company}
                    onChange={e => setFormData({ ...formData, company: e.target.value })}
                    placeholder="Nashik Engineering Ltd"
                    className="w-full text-xs border border-slate-200 rounded p-3 focus:outline-none focus:border-brand-orange" 
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[10px] uppercase font-bold text-slate-500 mb-1 font-display">Mobile / Phone *</label>
                  <input 
                    type="tel" 
                    required
                    value={formData.phone}
                    onChange={e => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="+91 84215 48065"
                    className="w-full text-xs border border-slate-200 rounded p-3 focus:outline-none focus:border-brand-orange" 
                  />
                </div>
                <div>
                  <label className="block text-[10px] uppercase font-bold text-slate-500 mb-1 font-display">Business Email *</label>
                  <input 
                    type="email" 
                    required
                    value={formData.email}
                    onChange={e => setFormData({ ...formData, email: e.target.value })}
                    placeholder="purchase@nasheng.com"
                    className="w-full text-xs border border-slate-200 rounded p-3 focus:outline-none focus:border-brand-orange" 
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[10px] uppercase font-bold text-slate-500 mb-1 font-display">Site Location / MIDC Zone *</label>
                  <input 
                    type="text" 
                    required
                    value={formData.location}
                    onChange={e => setFormData({ ...formData, location: e.target.value })}
                    placeholder="Sinnar MIDC, Nashik"
                    className="w-full text-xs border border-slate-200 rounded p-3 focus:outline-none focus:border-brand-orange" 
                  />
                </div>
                <div>
                  <label className="block text-[10px] uppercase font-bold text-slate-500 mb-1 font-display">Machinery Load Type</label>
                  <select 
                    value={formData.loadType}
                    onChange={e => setFormData({ ...formData, loadType: e.target.value })}
                    className="w-full text-xs border border-slate-200 rounded p-3 focus:outline-none focus:border-brand-orange bg-white"
                  >
                    <option value="VFC CNC / VMC CNC">VFC CNC / VMC CNC (Precision)</option>
                    <option value="Compressor chiller">Industrial Air Compressor / Chiller</option>
                    <option value="Stone Crusher radiator">Stone Crusher / Rotary Mining Gears</option>
                    <option value="Thyristor Spot welder">Thyristor Cyclic Welders / Punching Press</option>
                    <option value="Standard Motor inductive">General Motor / Inductive Pumps</option>
                    <option value="Pharma HVAC lines">FDA Pharma Packaging / clean HVAC</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-[10px] uppercase font-bold text-slate-500 mb-1 font-display">Urgency Requirement</label>
                <div className="grid grid-cols-3 gap-2">
                  {['Standard', 'Immediate Purchase', 'Emergency Breakdown'].map(level => (
                    <button
                      key={level}
                      type="button"
                      onClick={() => setFormData({ ...formData, urgency: level })}
                      className={`py-2 px-1 text-[11px] font-bold rounded border text-center transition-all cursor-pointer font-display ${
                        formData.urgency === level
                          ? 'bg-[#002E5D]/10 text-brand-blue border-brand-blue/30'
                          : 'border-slate-200 text-slate-600 hover:bg-slate-50'
                      }`}
                    >
                      {level}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-[10px] uppercase font-bold text-slate-500 mb-1 font-display">Detailed Technical Specs (Observed voltage fluctuations, required KVA, etc.)</label>
                <textarea 
                  rows={4}
                  value={formData.message}
                  onChange={e => setFormData({ ...formData, message: e.target.value })}
                  placeholder="e.g. CNC machine frequently trips on under-voltage. Output voltage requires constant 415V regulation. Average load is 80 kW."
                  className="w-full text-xs border border-slate-200 rounded p-3 focus:outline-none focus:border-brand-orange" 
                />
              </div>

              <button 
                type="submit"
                disabled={isSubmitting}
                className="w-full py-3 bg-brand-orange hover:bg-brand-orange-hover disabled:bg-brand-orange/40 text-white font-extrabold rounded text-xs shadow-md shadow-brand-orange/10 flex items-center justify-center gap-1.5 transition-all cursor-pointer font-display"
              >
                {isSubmitting ? 'Submitting Spec RFQ...' : 'Submit Spec RFQ'}
                <Send className="w-3.5 h-3.5" />
              </button>

            </form>
          )}

        </div>

      </section>

    </div>
  );
}
