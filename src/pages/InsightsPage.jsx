import React, { useState, useEffect } from 'react';
import { ArrowUpRight, BookOpen, Clock, Calendar, X, ArrowRight } from 'lucide-react';
import { insightsArticles } from '../data/insightsData';
import MagneticButton from '../components/MagneticButton';

export default function InsightsPage() {
  const [selectedArticle, setSelectedArticle] = useState(null);
  const [activeCategory, setActiveCategory] = useState('All');

  useEffect(() => {
    document.title = 'Insights & Editorial | Pinnancle Group';
  }, []);

  const categories = ['All', 'Lead Generation', 'CRM', 'Customer Experience', 'AI Agents'];

  const filtered = insightsArticles.filter((art) => {
    if (activeCategory === 'All') return true;
    return art.category === activeCategory;
  });

  return (
    <div className="pt-32 pb-24 bg-[#050505] text-brand-softWhite min-h-screen">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Header */}
        <div className="max-w-4xl mb-16">
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-white text-xs font-mono uppercase tracking-widest mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-brand-lime" />
            Engineering & Strategy Perspectives
          </span>
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-display font-bold tracking-tight text-white mt-3 leading-tight">
            Practical Business Automation Insights.
          </h1>
          <p className="text-lg md:text-xl text-neutral-400 mt-6 leading-relaxed">
            No generic buzzwords or surface-level AI hype. In-depth analysis of speed-to-lead mechanics, CRM adoption architectures, telephony recovery loops, and multi-agent workflows.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-12 no-scrollbar">
          {categories.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-full text-xs font-mono font-medium transition-all duration-200 border whitespace-nowrap ${
                activeCategory === cat
                  ? 'bg-white text-black border-white shadow-md font-semibold'
                  : 'bg-[#101010] border-white/10 text-neutral-400 hover:text-white hover:border-white/20'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filtered.map((art) => (
            <div
              key={art.slug}
              onClick={() => setSelectedArticle(art)}
              className="rounded-3xl bg-[#0e0e0e] border border-white/10 p-8 sm:p-10 flex flex-col justify-between group hover:border-brand-lime/30 transition-all duration-300 cursor-pointer shadow-2xl relative overflow-hidden"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-4">
                  <span className="text-xs font-mono text-neutral-400 uppercase tracking-wider flex items-center gap-1.5">
                    <span className="w-1 h-1 rounded-full bg-brand-lime" />
                    {art.category}
                  </span>
                  <div className="flex items-center gap-3 text-xs font-mono text-neutral-500">
                    <span className="flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5" /> {art.readTime}
                    </span>
                    <span>{art.date}</span>
                  </div>
                </div>

                <h3 className="text-2xl font-display font-bold text-white tracking-tight group-hover:text-brand-lime transition-colors">
                  {art.title}
                </h3>

                <p className="text-xs font-mono text-neutral-400 mt-2">
                  By {art.author} · Pinnancle Specialist
                </p>

                <p className="text-sm text-neutral-400 mt-4 leading-relaxed line-clamp-3">
                  {art.excerpt}
                </p>
              </div>

              <div className="pt-6 mt-8 border-t border-white/10 flex items-center justify-between text-xs font-semibold text-white group-hover:text-brand-lime transition-colors">
                <span>Read Full Analysis</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </div>
            </div>
          ))}
        </div>

        {/* Article Reader Modal */}
        {selectedArticle && (
          <div className="fixed inset-0 z-50 bg-black/90 backdrop-blur-xl flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
            <div className="w-full max-w-3xl rounded-3xl bg-[#121212] border border-white/20 p-8 sm:p-12 shadow-2xl relative my-8 max-h-[90vh] overflow-y-auto">
              <button
                type="button"
                onClick={() => setSelectedArticle(null)}
                className="absolute top-6 right-6 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
                aria-label="Close article"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="flex items-center gap-3 text-xs font-mono text-brand-lime uppercase tracking-wider mb-2">
                <span>{selectedArticle.category}</span>
                <span>·</span>
                <span>{selectedArticle.readTime}</span>
              </div>

              <h2 className="text-2xl sm:text-4xl font-display font-bold text-white tracking-tight leading-tight">
                {selectedArticle.title}
              </h2>

              <p className="text-xs font-mono text-neutral-400 mt-2 pb-6 border-b border-white/10">
                Author: {selectedArticle.author} · {selectedArticle.date}
              </p>

              <div className="prose prose-invert max-w-none text-neutral-300 text-sm sm:text-base leading-relaxed space-y-4 pt-6 whitespace-pre-line">
                {selectedArticle.content}
              </div>

              <div className="mt-10 pt-6 border-t border-white/10 flex items-center justify-between">
                <span className="text-xs font-mono text-neutral-400">
                  Discuss implementing this system:
                </span>
                <MagneticButton to="/book" variant="primary" size="sm" onClick={() => setSelectedArticle(null)}>
                  Book a Consultation
                </MagneticButton>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
