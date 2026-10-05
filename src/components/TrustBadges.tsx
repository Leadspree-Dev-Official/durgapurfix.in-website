import React from 'react';
import { ShieldCheck, UserCheck, Clock, Award, Headphones, ThumbsUp } from 'lucide-react';

export const TrustBadges: React.FC = () => {
  const badges = [
    {
      icon: <UserCheck className="w-6 h-6 text-indigo-600" />,
      title: 'Verified Professionals',
      description: '5-step background verification and government ID validation for every partner.'
    },
    {
      icon: <ShieldCheck className="w-6 h-6 text-emerald-600" />,
      title: '30-Day Work Warranty',
      description: 'If your issue reoccurs within 30 days, we fix it completely free of charge.'
    },
    {
      icon: <Clock className="w-6 h-6 text-amber-600" />,
      title: 'Express 30-Min Dispatch',
      description: 'Instant technician allocation with live GPS tracking on our Android App.'
    },
    {
      icon: <Award className="w-6 h-6 text-blue-600" />,
      title: '100% Upfront Pricing',
      description: 'Fixed rate cards with zero hidden visiting charges or surprise add-ons.'
    }
  ];

  return (
    <section className="py-8 sm:py-12 bg-white border-y border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
          {badges.map((b, i) => (
            <div key={i} className="flex items-start space-x-4 p-4 rounded-2xl bg-slate-50 border border-slate-100">
              <div className="p-3 bg-white rounded-xl shadow-xs border border-slate-200 shrink-0">
                {b.icon}
              </div>
              <div className="space-y-1">
                <h4 className="text-sm font-bold text-slate-900">{b.title}</h4>
                <p className="text-xs text-slate-500 leading-relaxed">{b.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
