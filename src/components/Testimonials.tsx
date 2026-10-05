import React, { useState } from 'react';
import { Testimonial } from '../types';
import { TESTIMONIALS } from '../data/mockData';
import { Star, CheckCircle2, MessageSquare, Quote, ThumbsUp } from 'lucide-react';

export const Testimonials: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<string>('all');
  const [likes, setLikes] = useState<Record<string, number>>({ '1': 24, '2': 18, '3': 31, '4': 15 });

  const handleLike = (id: string) => {
    setLikes(prev => ({ ...prev, [id]: (prev[id] || 0) + 1 }));
  };

  return (
    <section id="testimonials" className="py-16 sm:py-24 bg-slate-900 text-white relative overflow-hidden">
      
      {/* Background Soft Glow */}
      <div className="absolute top-10 left-10 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center space-x-2 bg-indigo-500/20 text-indigo-300 border border-indigo-500/30 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
            <Star className="w-3.5 h-3.5 text-amber-400 fill-amber-400" />
            <span>Verified Customer Reviews</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black font-sans tracking-tight text-white">
            Trusted by Over 50,000+ Homeowners
          </h2>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            Real feedback from households who booked home repairs, deep cleaning, and appliance servicing through our official Android App.
          </p>
        </div>

        {/* Testimonial Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {TESTIMONIALS.map((item) => (
            <div
              key={item.id}
              className="bg-slate-800/80 border border-slate-700/80 rounded-3xl p-5 sm:p-8 flex flex-col justify-between hover:border-slate-600 transition-all shadow-xl backdrop-blur-md relative group"
            >
              <Quote className="absolute top-6 right-6 w-8 h-8 sm:w-10 sm:h-10 text-slate-700/40 group-hover:text-amber-400/20 transition-colors pointer-events-none" />

              <div className="space-y-4">
                
                {/* Rating & Service Used */}
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <div className="flex items-center space-x-1">
                    {[...Array(item.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <span className="text-xs text-amber-300 bg-amber-400/10 border border-amber-400/20 px-2.5 py-0.5 rounded-full font-semibold">
                    {item.serviceUsed}
                  </span>
                </div>

                {/* Comment Text */}
                <p className="text-slate-300 text-sm sm:text-base leading-relaxed italic">
                  &quot;{item.comment}&quot;
                </p>

              </div>

              {/* Author Footer */}
              <div className="pt-6 mt-6 border-t border-slate-700/60 flex flex-wrap items-center justify-between gap-3">
                <div className="flex items-center space-x-3">
                  <img
                    src={item.avatarUrl}
                    alt={item.name}
                    className="w-11 h-11 rounded-full object-cover border-2 border-indigo-400/40"
                  />
                  <div>
                    <div className="flex items-center space-x-1.5">
                      <span className="font-bold text-white text-sm">{item.name}</span>
                      {item.verified && (
                        <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                      )}
                    </div>
                    <p className="text-xs text-slate-400">{item.location} • {item.date}</p>
                  </div>
                </div>

                <button
                  onClick={() => handleLike(item.id)}
                  className="flex items-center space-x-1.5 text-xs text-slate-400 hover:text-amber-300 transition-colors bg-slate-900/60 border border-slate-700 px-3 py-1.5 rounded-xl cursor-pointer"
                >
                  <ThumbsUp className="w-3.5 h-3.5" />
                  <span>{likes[item.id] || 0}</span>
                </button>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
