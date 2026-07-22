import React from 'react';
import { BLOGS } from '../../data';
import { BlogPost } from '../../types';
import { Calendar, Clock, ArrowLeft, ChevronRight, BookOpen, Share2 } from 'lucide-react';

interface BlogProps {
  slug?: string;
  onNavigate: (hash: string) => void;
  onOpenInquiry: (subject: string) => void;
}

export default function Blog({ slug, onNavigate, onOpenInquiry }: BlogProps) {
  
  // Find specific blog post if slug is provided
  const blog = slug ? BLOGS.find(b => b.slug === slug) : null;

  // Simple clipboard share feedback (avoiding standard browser alert for sleek UX)
  const [copied, setCopied] = React.useState<boolean>(false);
  const handleShare = (title: string) => {
    navigator.clipboard.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  // Helper to parse simple markdown headings, lists, and tables into React components
  const renderMarkdown = (text: string) => {
    const lines = text.split('\n');
    return lines.map((line, idx) => {
      // Headers
      if (line.startsWith('### ')) {
        return <h3 key={idx} className="text-lg sm:text-xl font-black text-brand-blue font-display mt-6 mb-3">{line.replace('### ', '')}</h3>;
      }
      if (line.startsWith('#### ')) {
        return <h4 key={idx} className="text-base sm:text-lg font-bold text-brand-blue font-display mt-5 mb-2">{line.replace('#### ', '')}</h4>;
      }
      // Blockquotes
      if (line.startsWith('> ')) {
        return (
          <blockquote key={idx} className="border-l-4 border-brand-orange bg-brand-orange/5 p-4 rounded-r my-4 text-xs sm:text-sm text-slate-700 leading-relaxed font-medium">
            {line.replace('> ', '').replace(/\*\*/g, '')}
          </blockquote>
        );
      }
      // Table rendering (simple text parse)
      if (line.startsWith('|')) {
        // Skip header break lines
        if (line.includes(':---')) return null;
        const cols = line.split('|').map(c => c.trim()).filter(c => c !== '');
        const isHeader = idx === lines.findIndex(l => l.startsWith('|'));
        return (
          <div key={idx} className="overflow-x-auto my-4 text-xs sm:text-sm">
            <table className="min-w-full border-collapse border border-slate-200">
              <tbody>
                <tr className={isHeader ? 'bg-brand-blue text-white font-bold' : 'hover:bg-slate-50'}>
                  {cols.map((col, cIdx) => (
                    <td key={cIdx} className="border border-slate-200 p-2.5 font-display">
                      {col.replace(/\*\*/g, '')}
                    </td>
                  ))}
                </tr>
              </tbody>
            </table>
          </div>
        );
      }
      // Bullet lists
      if (line.startsWith('* ')) {
        // Simple parse bold subheadings inside lists
        const cleanLine = line.replace('* ', '');
        const boldParts = cleanLine.split('**');
        if (boldParts.length >= 3) {
          return (
            <li key={idx} className="list-disc ml-6 my-1.5 text-xs sm:text-sm text-slate-600 leading-relaxed">
              <strong>{boldParts[1]}</strong>{boldParts[2]}
            </li>
          );
        }
        return <li key={idx} className="list-disc ml-6 my-1.5 text-xs sm:text-sm text-slate-600 leading-relaxed">{cleanLine}</li>;
      }
      // Empty lines
      if (line.trim() === '') return <div key={idx} className="h-2"></div>;

      // Standard text line
      return <p key={idx} className="text-xs sm:text-sm text-slate-600 leading-relaxed my-2.5">{line}</p>;
    });
  };

  // SINGLE DETAILED POST VIEW
  if (blog) {
    const suggestions = BLOGS.filter(b => b.id !== blog.id);

    return (
      <div className="bg-slate-50 text-slate-800 animate-none" id="single-blog-view">
        {/* Breadcrumbs */}
        <div className="bg-brand-blue border-b border-slate-800/80 py-3">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between text-xs text-slate-300">
            <button 
              onClick={() => onNavigate('#/blog')} 
              className="flex items-center gap-1 hover:text-white font-bold cursor-pointer"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              Back to Blog
            </button>
            <div className="flex items-center gap-1">
              <span>Knowledge Hub</span>
              <ChevronRight className="w-3 h-3" />
              <span className="text-brand-orange font-bold truncate max-w-[200px] font-display">{blog.title}</span>
            </div>
          </div>
        </div>

        {/* Article Details */}
        <section className="py-12 bg-white border-b border-slate-100">
          <div className="max-w-4xl mx-auto px-4 sm:px-6">
            
            <div className="space-y-4 mb-6">
              <span className="px-3 py-1 bg-brand-orange/10 text-brand-orange border border-brand-orange/20 rounded text-xs font-bold uppercase tracking-wider inline-block font-display">
                {blog.category}
              </span>
              <h1 className="text-2xl sm:text-4xl font-black font-display text-brand-blue leading-tight">
                {blog.title}
              </h1>
              
              <div className="flex flex-wrap items-center gap-4 text-xs text-slate-500 border-y border-slate-100 py-3 font-display">
                <span className="flex items-center gap-1">
                  <Calendar className="w-4 h-4 text-brand-orange shrink-0" />
                  Published: {blog.date}
                </span>
                <span>•</span>
                <span className="flex items-center gap-1">
                  <Clock className="w-4 h-4 text-brand-orange shrink-0" />
                  {blog.readTime}
                </span>
                <span>•</span>
                <span className="text-slate-600 font-semibold">Author: Nextart Engineering Board</span>
                
                <button 
                  onClick={() => handleShare(blog.title)}
                  className="ml-auto hover:text-brand-orange transition-colors flex items-center gap-1 font-bold cursor-pointer"
                >
                  <Share2 className="w-3.5 h-3.5" />
                  {copied ? 'Link Copied!' : 'Share Guide'}
                </button>
              </div>
            </div>

            {/* Custom rendered simple markdown body */}
            <div className="prose prose-slate max-w-none pt-4">
              {renderMarkdown(blog.content)}
            </div>

            {/* In-article B2B Lead block */}
            <div className="bg-slate-900 border border-slate-800 rounded p-6 text-white my-10 space-y-4">
              <span className="text-brand-orange font-black text-xs uppercase tracking-widest block font-display">Need immediate engineering assistance?</span>
              <h4 className="font-extrabold text-base sm:text-lg font-display">Get Free Power Auditing &amp; Calculation Support in Nashik</h4>
              <p className="text-xs text-slate-400 leading-relaxed">
                Nextart engineering teams provide physical on-site diagnostic audits in Sinnar, Satpur, Ambad, and Igatpuri MIDC areas. We measure harmonics, load start surges, and voltage fluctuations to provide a complete layout proposal.
              </p>
              <button
                onClick={() => onOpenInquiry(`Inquiry requested via article: ${blog.title}`)}
                className="bg-brand-orange hover:bg-brand-orange-hover text-white font-extrabold py-2.5 px-5 rounded text-xs transition-colors cursor-pointer"
              >
                Schedule Technical Audit Call
              </button>
            </div>

          </div>
        </section>

        {/* Blog suggestions */}
        <section className="py-16 bg-slate-100 border-t border-slate-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
            <h3 className="font-black text-lg sm:text-xl text-brand-blue font-display uppercase tracking-tight text-center sm:text-left">Other Helpful B2B Guides</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {suggestions.map(s => (
                <div key={s.id} className="bg-white border border-slate-200 rounded p-6 shadow-sm space-y-4 flex flex-col justify-between">
                  <div>
                    <span className="text-[10px] uppercase font-bold text-slate-450 block tracking-wider mb-2 font-display">{s.category}</span>
                    <h4 className="font-bold text-slate-950 text-sm sm:text-base leading-snug font-display">{s.title}</h4>
                    <p className="text-xs text-slate-500 line-clamp-2 mt-1 leading-relaxed">{s.summary}</p>
                  </div>
                  <button
                    onClick={() => onNavigate(`#/blog/${s.slug}`)}
                    className="text-xs font-bold text-brand-orange hover:text-brand-orange-hover flex items-center gap-1 hover:underline self-start cursor-pointer"
                  >
                    Read Guide &rarr;
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

      </div>
    );
  }

  // DIRECTORY / BLOG LIST VIEW
  return (
    <div className="bg-slate-50 text-slate-800" id="blogs-directory-view">
      
      {/* Header */}
      <section className="bg-brand-blue text-white py-12 sm:py-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#001a35_1px,transparent_1px),linear-gradient(to_bottom,#001a35_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-30"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-3">
          <span className="text-brand-orange font-extrabold text-xs uppercase tracking-widest block font-display">Engineering Knowledge Hub</span>
          <h1 className="text-3xl sm:text-5xl font-black font-display text-white">Power Quality &amp; Energy Guides</h1>
          <p className="text-sm sm:text-base text-slate-300 max-w-2xl mx-auto">
            Practical guides written by electrical panel builders and transformer engineers to help you choose equipment, reduce electricity bills, and optimize factory loads.
          </p>
        </div>
      </section>

      {/* Blogs list */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 gap-10">
          {BLOGS.map(post => (
            <div 
              key={post.id}
              className="bg-white border border-slate-100 rounded p-6 sm:p-8 hover:border-brand-orange/20 shadow-sm hover:shadow-md transition-all flex flex-col sm:flex-row gap-6 items-start"
            >
              {/* Left Category Vector Box */}
              <div className="w-full sm:w-44 bg-slate-900 text-white rounded p-4 flex flex-col justify-between items-center text-center shrink-0 h-32 sm:h-40 border border-slate-800 shadow-inner">
                <div className="p-2 bg-brand-orange/10 text-brand-orange rounded">
                  <BookOpen className="w-5 h-5 text-brand-orange" />
                </div>
                <div className="space-y-1 mt-2">
                  <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest block font-display">Category</span>
                  <span className="text-xs font-extrabold text-slate-200 block truncate max-w-[130px] font-display">
                    {post.category}
                  </span>
                </div>
              </div>

              {/* Right Content */}
              <div className="space-y-3 flex-1 flex flex-col justify-between h-full">
                <div>
                  <div className="flex items-center gap-3 text-xs text-slate-450 font-display">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5 text-brand-orange shrink-0" />
                      {post.date}
                    </span>
                    <span>•</span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5 text-brand-orange shrink-0" />
                      {post.readTime}
                    </span>
                  </div>
                  
                  <h3 
                    className="font-extrabold text-slate-900 text-lg sm:text-xl font-display leading-snug mt-1 hover:text-brand-orange transition-colors cursor-pointer" 
                    onClick={() => onNavigate(`#/blog/${post.slug}`)}
                  >
                    {post.title}
                  </h3>
                  
                  <p className="text-xs sm:text-sm text-slate-500 leading-relaxed mt-2 line-clamp-2">
                    {post.summary}
                  </p>
                </div>

                <div className="pt-3 border-t border-slate-100 flex justify-between items-center">
                  <div className="flex gap-1.5 flex-wrap">
                    {post.tags.slice(0, 2).map((tg, idx) => (
                      <span key={idx} className="bg-slate-100 text-slate-600 font-semibold px-2 py-0.5 rounded text-[10px] font-display">
                        #{tg}
                      </span>
                    ))}
                  </div>
                  <button
                    onClick={() => onNavigate(`#/blog/${post.slug}`)}
                    className="text-xs font-bold text-brand-orange hover:text-brand-orange-hover flex items-center gap-1 hover:underline cursor-pointer"
                  >
                    Read Technical Article &rarr;
                  </button>
                </div>
              </div>

            </div>
          ))}
        </div>
      </section>

    </div>
  );
}
