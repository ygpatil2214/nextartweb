import React, { useState } from 'react';
import { PROJECTS } from '../../data';
import { MapPin, Calendar, CheckCircle, Info, ChevronRight } from 'lucide-react';

interface ProjectsProps {
  onOpenInquiry: (subject: string) => void;
}

export default function Projects({ onOpenInquiry }: ProjectsProps) {
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const categories = ['all', 'Servo Stabilizers', 'APFC Panels', 'Industrial Automation'];

  const filteredProjects = activeCategory === 'all'
    ? PROJECTS
    : PROJECTS.filter(p => p.category === activeCategory);

  return (
    <div className="bg-slate-50 text-slate-800 animate-none" id="projects-view">
      
      {/* Header */}
      <section className="bg-brand-blue text-white py-12 sm:py-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#001a35_1px,transparent_1px),linear-gradient(to_bottom,#001a35_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-30"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-3">
          <span className="text-brand-orange font-extrabold text-xs uppercase tracking-widest block font-display">Installation Gallery</span>
          <h1 className="text-3xl sm:text-5xl font-black font-display text-white">Completed Installations</h1>
          <p className="text-sm sm:text-base text-slate-300 max-w-2xl mx-auto">
            Review actual site installations of heavy-duty buck-boost stabilizers, thyristor APFC panels, and automation boards running across Maharashtra industrial corridors.
          </p>
        </div>
      </section>

      {/* Projects Filters */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="flex flex-wrap justify-center gap-2 mb-10 max-w-xl mx-auto bg-slate-100 p-1 rounded border border-slate-200">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`py-2 px-4 text-xs font-bold rounded transition-all cursor-pointer ${
                activeCategory === cat
                  ? 'bg-[#002E5D] text-white shadow'
                  : 'text-slate-600 hover:text-slate-950'
              }`}
            >
              {cat === 'all' ? 'All Installations' : cat}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map(project => (
            <div 
              key={project.id}
              className="bg-white border border-slate-100 rounded overflow-hidden shadow-sm hover:shadow-md transition-all flex flex-col justify-between"
            >
              <div>
                {/* Decorative Tech Map Visual Header */}
                <div className="bg-slate-950 h-48 p-6 text-white relative flex flex-col justify-between overflow-hidden">
                  <div className="absolute inset-0 bg-[radial-gradient(#334155_1px,transparent_1px)] bg-[size:1rem_1rem] opacity-20"></div>
                  
                  <span className="self-start px-2 py-0.5 bg-slate-900 border border-slate-800 text-[9px] text-slate-400 rounded uppercase font-bold tracking-wider font-display">
                    {project.category}
                  </span>
                  
                  {/* Micro vector electrical drawing placeholder */}
                  <div className="my-2 flex justify-center">
                    <svg viewBox="0 0 100 40" className="w-28 h-12 stroke-brand-orange fill-none" strokeWidth="1.5">
                      <rect x="10" y="5" width="24" height="24" rx="2" stroke="#475569" />
                      <line x1="34" y1="17" x2="66" y2="17" />
                      <circle cx="50" cy="17" r="4" fill="#F27D26" />
                      <rect x="66" y="5" width="24" height="24" rx="2" stroke="#475569" />
                      <path d="M 40 32 L 60 32" stroke="#22c55e" strokeWidth="2" />
                    </svg>
                  </div>

                  <div className="flex justify-between items-center text-[10px] text-slate-400 border-t border-slate-900 pt-2 relative z-10 font-display">
                    <span className="flex items-center gap-1">
                      <MapPin className="w-3.5 h-3.5 text-brand-orange shrink-0" />
                      {project.location}
                    </span>
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5 text-brand-orange shrink-0" />
                      Year: {project.year}
                    </span>
                  </div>
                </div>

                <div className="p-6 space-y-3">
                  <h3 className="font-extrabold text-slate-900 text-base sm:text-lg leading-tight font-display">
                    {project.title}
                  </h3>
                  <p className="text-xs text-slate-500 leading-relaxed">
                    {project.description}
                  </p>
                </div>
              </div>

              {/* Action buttons inside card */}
              <div className="px-6 pb-6 pt-2 border-t border-slate-100 bg-slate-50/30 flex items-center justify-between">
                <span className="text-[11px] text-slate-400 flex items-center gap-1">
                  <CheckCircle className="w-3.5 h-3.5 text-green-500 shrink-0" />
                  Performance Stable
                </span>
                <button
                  onClick={() => onOpenInquiry(`Inquiry regarding case project: ${project.title}`)}
                  className="text-xs font-bold text-brand-orange hover:text-brand-orange-hover flex items-center gap-1 hover:underline cursor-pointer"
                >
                  Request Similar Sizing
                  <ChevronRight className="w-3.5 h-3.5" />
                </button>
              </div>

            </div>
          ))}
        </div>

        {/* No Projects Found */}
        {filteredProjects.length === 0 && (
          <div className="text-center py-16 bg-white border border-slate-200 rounded max-w-md mx-auto">
            <Info className="w-8 h-8 text-slate-400 mx-auto mb-2" />
            <p className="text-sm font-semibold text-slate-600">No installation records matched this category.</p>
          </div>
        )}
      </section>

      {/* Trust Quote Banner */}
      <section className="bg-slate-100 border-t border-slate-200 py-16 text-center space-y-4">
        <h3 className="text-xl sm:text-2xl font-black text-brand-blue tracking-tight font-display max-w-2xl mx-auto px-4">
          Looking for verifiable client referrals in Nashik MIDC?
        </h3>
        <p className="text-xs text-slate-500 max-w-md mx-auto leading-relaxed">
          We can connect you directly with plant directors and maintenance engineers running Nextart stabilizers so you can verify our quality firsthand.
        </p>
        <button
          onClick={() => onOpenInquiry('Projects referral list inquiry')}
          className="bg-brand-orange hover:bg-brand-orange-hover text-white font-extrabold py-3 px-6 rounded text-xs sm:text-sm transition-all cursor-pointer inline-block"
        >
          Request Client Reference List
        </button>
      </section>

    </div>
  );
}
