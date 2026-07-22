import React, { useState } from 'react';
import { 
  CheckCircle, ChevronRight, Download, Phone, MessageSquare, 
  Table, HelpCircle, ArrowLeft, ShieldCheck, Activity, Award 
} from 'lucide-react';
import { PRODUCTS } from '../../data';
import { Product } from '../../types';

interface ProductsProps {
  slug?: string;
  onNavigate: (hash: string) => void;
  onOpenInquiry: (subject: string) => void;
}

export default function Products({ slug, onNavigate, onOpenInquiry }: ProductsProps) {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [downloadSuccess, setDownloadSuccess] = useState<string | null>(null);

  // Filter products by category
  const filteredProducts = activeCategory === 'all' 
    ? PRODUCTS 
    : PRODUCTS.filter(p => p.category === activeCategory);

  // If a slug is provided, let's find the specific product
  const product = slug ? PRODUCTS.find(p => p.slug === slug) : null;

  // Handle fake download catalogue with elegant mock notification state
  const handleDownload = (prodName: string) => {
    setDownloadSuccess(prodName);
    setTimeout(() => {
      setDownloadSuccess(null);
    }, 3000);
  };

  // RENDER SINGLE PRODUCT DETAIL PAGE
  if (product) {
    const relatedProducts = PRODUCTS.filter(p => p.category === product.category && p.id !== product.id);

    return (
      <div className="bg-slate-50 text-slate-800 animate-none" id="single-product-view">
        {/* Breadcrumb / Back Navigation */}
        <div className="bg-brand-blue border-b border-slate-800/80 py-3">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between text-xs text-slate-300">
            <button 
              onClick={() => onNavigate('#/product')} 
              className="flex items-center gap-1 hover:text-white font-bold cursor-pointer"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              Back to Catalog
            </button>
            <div className="flex items-center gap-1">
              <span>Products</span>
              <ChevronRight className="w-3 h-3" />
              <span className="text-brand-orange font-bold font-display">{product.name}</span>
            </div>
          </div>
        </div>

        {/* Product Hero / Overview */}
        <section className="bg-white border-b border-slate-100 py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            
            {/* Product Visual - Technical SVG Schematic representation */}
            <div className="lg:col-span-5 bg-slate-950 rounded p-8 border border-slate-900 text-white flex flex-col justify-between items-center relative overflow-hidden min-h-[380px] shadow-lg">
              <div className="absolute top-0 left-0 w-full h-1 bg-brand-orange"></div>
              
              <div className="w-full flex justify-between items-center text-[10px] text-slate-400 uppercase tracking-wider font-bold font-display">
                <span>Model Code: NX-{product.id.substring(0, 4).toUpperCase()}</span>
                <span>CPRI Tested Design</span>
              </div>

              {/* Dynamic Technical SVG Illustration */}
              <div className="my-8">
                {product.category === 'servo' ? (
                  <svg className="w-40 h-40 stroke-brand-orange fill-none" viewBox="0 0 100 100">
                    <rect x="20" y="10" width="60" height="80" rx="4" stroke="#475569" strokeWidth="2.5" />
                    <rect x="30" y="20" width="40" height="20" rx="2" fill="#0f172a" stroke="#334155" />
                    <text x="50" y="32" fill="#22c55e" fontSize="9" fontWeight="bold" textAnchor="middle" fontFamily="monospace">415.2 V</text>
                    <path d="M 10 70 C 25 50, 25 90, 40 70 C 55 50, 55 90, 70 70 T 90 70" stroke="#F27D26" strokeWidth="2" />
                    <circle cx="50" cy="52" r="3" fill="#38bdf8" />
                    <circle cx="65" cy="52" r="2" fill="#ef4444" />
                  </svg>
                ) : (
                  <svg className="w-40 h-40 stroke-blue-400 fill-none" viewBox="0 0 100 100">
                    <rect x="15" y="10" width="70" height="80" rx="3" stroke="#475569" strokeWidth="2.5" />
                    <line x1="15" y1="25" x2="85" y2="25" stroke="#334155" strokeWidth="2" />
                    {/* Controls row */}
                    <circle cx="30" cy="18" r="3" fill="#22c55e" />
                    <circle cx="50" cy="18" r="3" fill="#f59e0b" />
                    <circle cx="70" cy="18" r="3" fill="#ef4444" />
                    {/* Busbar indicators */}
                    <path d="M 25 35 L 75 35" stroke="#ef4444" strokeWidth="2" />
                    <path d="M 25 45 L 75 45" stroke="#f59e0b" strokeWidth="2" />
                    <path d="M 25 55 L 75 55" stroke="#3b82f6" strokeWidth="2" />
                    <rect x="30" y="65" width="40" height="15" fill="#1e293b" stroke="#334155" />
                  </svg>
                )}
              </div>

              {/* Instant Call actions inside image cards */}
              <div className="w-full grid grid-cols-2 gap-2 mt-4">
                <a 
                  href="tel:+918421548065"
                  className="py-2.5 bg-slate-900 border border-slate-800 hover:bg-slate-850 rounded text-xs font-semibold text-center flex items-center justify-center gap-1.5 cursor-pointer text-slate-200"
                >
                  <Phone className="w-3.5 h-3.5 text-brand-orange" />
                  Call Engineer
                </a>
                <button
                  onClick={() => handleDownload(product.name)}
                  className="py-2.5 bg-brand-orange hover:bg-brand-orange-hover rounded text-xs font-bold text-center flex items-center justify-center gap-1.5 transition-colors cursor-pointer text-white"
                >
                  <Download className="w-3.5 h-3.5" />
                  {downloadSuccess ? 'Brochure Ready!' : 'Download Brochure'}
                </button>
              </div>

              {downloadSuccess && (
                <div className="absolute inset-x-0 bottom-16 mx-6 p-2.5 bg-green-950/90 border border-green-800 rounded text-[11px] text-green-400 text-center relative z-10">
                  ⚡ Brochure &amp; Tech Sheet has been prepared for device.
                </div>
              )}

            </div>

            {/* Product Meta / Overview */}
            <div className="lg:col-span-7 space-y-6">
              <span className="text-brand-orange font-extrabold text-xs uppercase tracking-widest block font-display">
                {product.category.toUpperCase()} SOLUTION GROUP
              </span>
              <h1 className="text-3xl sm:text-4xl font-black tracking-tight font-display text-brand-blue">
                {product.name}
              </h1>
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                {product.fullDescription}
              </p>

              {/* Technical features highlights */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className="bg-slate-50 border border-slate-200/50 rounded p-4 flex gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-bold text-xs text-slate-900">100% Core Protection</h4>
                    <p className="text-[10px] text-slate-500">Provides double barrier limits to shield heavy electronics from high utility surges.</p>
                  </div>
                </div>
                <div className="bg-slate-50 border border-slate-200/50 rounded p-4 flex gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-bold text-xs text-slate-900">Maximum Efficiency</h4>
                    <p className="text-[10px] text-slate-500">Maintains peak power levels above 98.5% to reduce heat core degradation.</p>
                  </div>
                </div>
              </div>

              {/* Direct Buttons */}
              <div className="flex flex-wrap gap-4 pt-4">
                <button
                  onClick={() => onOpenInquiry(`Inquiry for ${product.name}`)}
                  className="bg-brand-orange hover:bg-brand-orange-hover text-white font-extrabold py-3 px-6 rounded text-xs sm:text-sm shadow-md transition-all cursor-pointer"
                >
                  Send Quotation Enquiry
                </button>
                <button
                  onClick={() => onOpenInquiry(`Schedule Free site visit for ${product.name}`)}
                  className="bg-brand-blue hover:bg-[#001c3a] text-white font-bold py-3 px-6 rounded text-xs sm:text-sm transition-all cursor-pointer"
                >
                  Book On-Site Testing
                </button>
              </div>

            </div>

          </div>
        </section>

        {/* Technical Specifications sheet & Features */}
        <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Specs Sheet (Left Column) */}
          <div className="lg:col-span-7 space-y-6">
            <div className="flex items-center gap-2 mb-4">
              <Table className="w-5 h-5 text-brand-orange" />
              <h3 className="font-black text-lg sm:text-xl text-brand-blue font-display uppercase tracking-tight">Technical Specifications Sheet</h3>
            </div>

            <div className="bg-white border border-slate-200 rounded overflow-hidden shadow-sm">
              <table className="w-full text-left border-collapse text-xs sm:text-sm">
                <thead>
                  <tr className="bg-brand-blue text-white">
                    <th className="p-3.5 font-bold uppercase tracking-wider w-2/5 text-left font-display text-xs">Parameter / Criteria</th>
                    <th className="p-3.5 font-bold uppercase tracking-wider w-3/5 text-left font-display text-xs">Standard nextart Rating</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {product.specifications.map((spec, i) => (
                    <tr key={i} className="hover:bg-slate-50">
                      <td className="p-3 font-semibold text-slate-600 bg-slate-50/40">{spec.parameter}</td>
                      <td className="p-3 text-slate-950 font-bold">{spec.value}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="bg-slate-900 text-white p-4 rounded text-xs border border-slate-800">
              <span className="font-bold text-brand-orange block mb-1 font-display">💡 Custom Engineering Available:</span>
              Don't see your specific voltage range or current rating? Nextart specialized in building custom variacs and isolated panels tailored to your local site load variables.
            </div>
          </div>

          {/* Features & Advantages (Right Column) */}
          <div className="lg:col-span-5 space-y-8">
            
            {/* Features list */}
            <div className="space-y-4">
              <h3 className="font-black text-lg text-brand-blue font-display uppercase tracking-tight">Core Construction Features</h3>
              <div className="space-y-3">
                {product.features.map((feat, i) => (
                  <div key={i} className="flex gap-2.5 items-start bg-white border border-slate-200/50 p-3 rounded shadow-sm">
                    <CheckCircle className="w-4 h-4 text-brand-orange shrink-0 mt-0.5" />
                    <span className="text-xs sm:text-sm text-slate-600 leading-normal">{feat}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Advantages list */}
            <div className="space-y-4">
              <h3 className="font-black text-lg text-brand-blue font-display uppercase tracking-tight">Key Advantages &amp; ROI</h3>
              <div className="space-y-3">
                {product.advantages.map((adv, i) => (
                  <div key={i} className="flex gap-2.5 items-start bg-orange-50/30 border border-orange-100 p-3 rounded">
                    <Award className="w-4 h-4 text-brand-orange shrink-0 mt-0.5" />
                    <span className="text-xs sm:text-sm text-slate-700 leading-normal">{adv}</span>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </section>

        {/* Applications & Industry Fit */}
        <section className="bg-white border-y border-slate-100 py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h3 className="font-black text-lg sm:text-xl text-brand-blue font-display uppercase tracking-tight mb-6">Target Machineries &amp; Applications</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {product.applications.map((app, i) => (
                  <div key={i} className="bg-slate-50 border border-slate-200 p-4 rounded text-xs sm:text-sm text-slate-800 font-bold flex items-center gap-2 shadow-sm">
                    <span className="w-2 h-2 bg-brand-orange rounded-full"></span>
                    {app}
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h3 className="font-black text-lg sm:text-xl text-brand-blue font-display uppercase tracking-tight mb-6">Industries We Serve</h3>
              <div className="flex flex-wrap gap-2">
                {product.industries.map((ind, i) => (
                  <span key={i} className="bg-brand-orange/10 text-brand-orange border border-brand-orange/20 font-bold px-3 py-1.5 rounded text-xs font-display">
                    {ind}
                  </span>
                ))}
              </div>
              <p className="text-xs text-slate-500 leading-relaxed mt-4">
                Nextart builds custom electrical products optimized for severe dust, continuous mechanical vibration, extreme temperatures, and high humidity, ensuring absolute safety.
              </p>
            </div>
          </div>
        </section>

        {/* Frequently Asked Questions */}
        <section className="py-16 max-w-4xl mx-auto px-4 sm:px-6">
          <h3 className="text-center font-black text-xl text-brand-blue font-display uppercase tracking-tight mb-10">Product FAQs</h3>
          <div className="space-y-4">
            {product.faqs.map((faq, i) => (
              <div key={i} className="bg-white border border-slate-200 rounded p-5 shadow-sm space-y-2">
                <h4 className="font-bold text-slate-950 text-sm flex gap-1.5 items-start">
                  <span className="text-brand-orange font-black">Q:</span>
                  {faq.question}
                </h4>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed pl-4 border-l-2 border-brand-orange">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Related Products list */}
        {relatedProducts.length > 0 && (
          <section className="bg-slate-100 border-t border-slate-200 py-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
              <h3 className="font-black text-lg sm:text-xl text-brand-blue font-display uppercase tracking-tight text-center sm:text-left">Related Power Solutions</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {relatedProducts.map(p => (
                  <div key={p.id} className="bg-white border border-slate-200 rounded p-6 shadow-sm space-y-4 flex flex-col justify-between">
                    <div>
                      <h4 className="font-bold text-slate-900 text-sm font-display">{p.name}</h4>
                      <p className="text-xs text-slate-500 line-clamp-2 mt-1 leading-relaxed">{p.shortDescription}</p>
                    </div>
                    <button
                      onClick={() => onNavigate(`#/product/${p.slug}`)}
                      className="text-xs font-bold text-brand-orange hover:text-brand-orange-hover flex items-center gap-1 hover:underline cursor-pointer"
                    >
                      View Specs &rarr;
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

      </div>
    );
  }

  // RENDER GENERAL CATALOG LIST VIEW
  return (
    <div className="bg-slate-50 text-slate-800" id="products-catalog-view">
      {/* Catalog Header */}
      <section className="bg-brand-blue text-white py-12 sm:py-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#001a35_1px,transparent_1px),linear-gradient(to_bottom,#001a35_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-30"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-3">
          <span className="text-brand-orange font-extrabold text-xs uppercase tracking-widest block font-display">Industrial Solutions</span>
          <h1 className="text-3xl sm:text-5xl font-black font-display text-white">Our Product Catalog</h1>
          <p className="text-sm sm:text-base text-slate-300 max-w-2xl mx-auto">
            Heavy-duty power stabilizers, power factor correction systems, and smart PLC/MCC panels designed and CPRI tested in Nashik, Maharashtra.
          </p>
        </div>
      </section>

      {/* Filter Tabs */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="flex flex-wrap justify-center gap-2 bg-slate-100 p-1 rounded border border-slate-200 max-w-lg mx-auto">
          {[
            { id: 'all', label: 'All products' },
            { id: 'servo', label: 'Stabilizers' },
            { id: 'apfc', label: 'APFC Panels' },
            { id: 'panel', label: 'Control Panels' }
          ].map(cat => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`py-2 px-4 text-xs font-bold rounded transition-all cursor-pointer ${
                activeCategory === cat.id
                  ? 'bg-[#002E5D] text-white shadow'
                  : 'text-slate-600 hover:text-slate-950'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Catalog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {filteredProducts.map(prod => (
            <div 
              key={prod.id}
              className="bg-white border border-slate-100 rounded overflow-hidden flex flex-col justify-between shadow-sm hover:shadow-md transition-all animate-none"
            >
              <div>
                {/* Visual Header */}
                <div className="bg-slate-900 h-40 flex items-center justify-center p-6 text-white relative">
                  <span className="absolute top-2 right-2 px-2 py-0.5 bg-slate-800 text-[10px] text-slate-400 rounded font-semibold uppercase font-display">
                    {prod.category}
                  </span>
                  
                  {prod.category === 'servo' ? (
                    <svg className="w-20 h-20 stroke-brand-orange fill-none" viewBox="0 0 100 100">
                      <rect x="30" y="15" width="40" height="70" rx="3" stroke="#475569" strokeWidth="2" />
                      <line x1="30" y1="35" x2="70" y2="35" stroke="#334155" />
                      <text x="50" y="27" fill="#22c55e" fontSize="7" fontWeight="bold" textAnchor="middle" fontFamily="monospace">415.0 V</text>
                    </svg>
                  ) : (
                    <svg className="w-20 h-20 stroke-blue-400 fill-none" viewBox="0 0 100 100">
                      <rect x="25" y="10" width="50" height="80" rx="2" stroke="#475569" strokeWidth="2" />
                      <circle cx="37" cy="18" r="2" fill="#ef4444" />
                      <circle cx="50" cy="18" r="2" fill="#f59e0b" />
                      <circle cx="63" cy="18" r="2" fill="#22c55e" />
                    </svg>
                  )}
                </div>

                <div className="p-6 space-y-3">
                  <h3 className="font-extrabold text-slate-900 text-base sm:text-lg font-display">{prod.name}</h3>
                  <p className="text-xs text-slate-500 leading-relaxed line-clamp-3">
                    {prod.shortDescription}
                  </p>
                </div>
              </div>

              <div className="px-6 pb-6 pt-2 border-t border-slate-100 bg-slate-50/40 grid grid-cols-2 gap-2">
                <button
                  onClick={() => onNavigate(`#/product/${prod.slug}`)}
                  className="w-full py-2 border border-slate-200 hover:bg-slate-100 text-slate-700 font-bold rounded text-xs text-center transition-all cursor-pointer"
                >
                  View Details
                </button>
                <button
                  onClick={() => onOpenInquiry(`Inquiry about ${prod.name}`)}
                  className="w-full py-2 bg-brand-orange hover:bg-brand-orange-hover text-white font-bold rounded text-xs text-center transition-all cursor-pointer animate-none"
                >
                  Get Quote
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
}
