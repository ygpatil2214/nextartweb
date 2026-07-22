import React, { useState } from 'react';
import { Phone, MessageSquare, Calendar, Sparkles } from 'lucide-react';

interface FloatingActionsProps {
  onOpenInquiry: (subject: string) => void;
}

export default function FloatingActions({ onOpenInquiry }: FloatingActionsProps) {
  const [showCallbackTip, setShowCallbackTip] = useState(true);

  // Custom pre-populated WhatsApp message text
  const whatsappUrl = `https://wa.me/918421548065?text=${encodeURIComponent(
    "Hello Nextart Power Controller, I'm visiting your website. I want to inquire about your Servo Stabilizers / APFC Panels for my factory. Please share the catalogue."
  )}`;

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-3 pointer-events-none" id="floating-lead-widgets">
      
      {/* Dynamic CTA Tip Box */}
      {showCallbackTip && (
        <div className="bg-slate-900 text-white text-[11px] px-3 py-2 rounded-xl border border-slate-800 shadow-2xl flex items-center gap-2 pointer-events-auto animate-bounce max-w-[240px]">
          <Sparkles className="w-4 h-4 text-orange-400 shrink-0" />
          <div>
            <span className="font-semibold block text-slate-100">Need sizing help?</span>
            <button 
              onClick={() => {
                onOpenInquiry("Request Technical Sizing Support Call");
              }}
              className="text-orange-400 hover:underline font-bold"
            >
              Request Free Callback
            </button>
          </div>
          <button 
            onClick={() => setShowCallbackTip(false)}
            className="text-slate-400 hover:text-white ml-2 text-[14px]"
          >
            &times;
          </button>
        </div>
      )}

      {/* Action Buttons Hub (touch safe 48px sizes) */}
      <div className="flex flex-col gap-2.5 pointer-events-auto">
        
        {/* Book Site Visit / RFQ Trigger */}
        <button
          onClick={() => onOpenInquiry("Schedule Free On-Site Electrical Audit")}
          title="Schedule Free Site Visit"
          className="w-12 h-12 bg-slate-900 text-white rounded-full flex items-center justify-center hover:bg-slate-800 shadow-2xl border border-slate-850 hover:scale-105 transition-all cursor-pointer group"
        >
          <Calendar className="w-5 h-5 group-hover:rotate-12 transition-transform" />
        </button>

        {/* Sticky WhatsApp */}
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          title="Chat with Technical Sales on WhatsApp"
          className="w-12 h-12 bg-green-500 text-white rounded-full flex items-center justify-center hover:bg-green-600 shadow-2xl hover:scale-105 transition-all group"
        >
          <MessageSquare className="w-5 h-5 fill-white group-hover:scale-110 transition-transform" />
        </a>

        {/* Sticky Call Button */}
        <a
          href="tel:+918421548065"
          title="Call Direct Hotline"
          className="w-12 h-12 bg-orange-600 text-white rounded-full flex items-center justify-center hover:bg-orange-700 shadow-2xl hover:scale-105 transition-all group"
        >
          <Phone className="w-5 h-5 fill-white animate-pulse" />
        </a>

      </div>
    </div>
  );
}
