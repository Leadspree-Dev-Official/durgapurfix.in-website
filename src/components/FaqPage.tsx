import React, { useState } from 'react';
import { FAQS } from '../data/mockData';
import { 
  HelpCircle, 
  Search, 
  ChevronDown, 
  ChevronUp, 
  Phone,
  Smartphone
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { PLAY_STORE_URL } from '../constants';

interface FaqPageProps {
  onOpenAppModal: () => void;
}

export const FaqPage: React.FC<FaqPageProps> = ({ onOpenAppModal }) => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState('');
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [openFaqId, setOpenFaqId] = useState<string | null>('f1');

  const categories = [
    { id: 'all', label: 'All Questions' },
    { id: 'booking', label: 'Booking & Dispatch' },
    { id: 'pricing', label: 'Pricing & Rates' },
    { id: 'safety', label: 'Safety & 30-Day Guarantee' },
    { id: 'app', label: 'Google Play Android App' },
  ];

  const filteredFaqs = FAQS.filter((faq) => {
    const matchesSearch = faq.question.toLowerCase().includes(searchTerm.toLowerCase()) || faq.answer.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = activeCategory === 'all' || faq.category === activeCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="bg-slate-50 min-h-screen pb-16">
      {/* Hero Banner */}
      <div className="bg-gradient-to-r from-slate-900 via-indigo-950 to-slate-900 text-white py-16 px-4 text-center border-b border-slate-800 relative overflow-hidden">
        <div className="max-w-4xl mx-auto space-y-4 relative z-10">
          <div className="inline-flex items-center space-x-2 text-amber-300 text-xs font-bold uppercase tracking-wider">
            <HelpCircle className="w-4 h-4" />
            <span>FAQ</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-black font-sans tracking-tight">
            Frequently Asked Questions
          </h1>
          <p className="text-slate-300 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
            Everything you need to know about booking via our Android app, technician verification, 30-day warranties, and rates.
          </p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 space-y-6 sm:space-y-8">
        
        {/* Search Bar */}
        <div className="bg-white rounded-3xl p-4 sm:p-6 border border-slate-200/80 shadow-xs space-y-4">
          <div className="relative">
            <Search className="w-5 h-5 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search help topics (e.g. warranty, app booking, visiting charge)..."
              className="w-full pl-12 pr-4 py-3.5 rounded-2xl bg-slate-50 border border-slate-200 text-sm font-semibold text-slate-900 focus:outline-hidden focus:ring-2 focus:ring-indigo-500 min-h-[44px]"
            />
          </div>

          {/* Category Filter Pills */}
          <div className="flex items-center space-x-2 overflow-x-auto pb-1 scrollbar-none">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-3.5 sm:px-4 py-2 rounded-xl text-xs font-bold transition-all shrink-0 cursor-pointer min-h-[40px] ${
                  activeCategory === cat.id
                    ? 'bg-indigo-600 text-white shadow-xs'
                    : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Accordion FAQ List */}
        <div className="space-y-3 sm:space-y-4">
          {filteredFaqs.map((faq) => {
            const isOpen = openFaqId === faq.id;

            return (
              <div
                key={faq.id}
                className="bg-white rounded-2xl sm:rounded-3xl border border-slate-200/80 shadow-xs overflow-hidden transition-all"
              >
                <button
                  onClick={() => setOpenFaqId(isOpen ? null : faq.id)}
                  className="w-full p-4 sm:p-6 text-left flex items-center justify-between gap-3 sm:gap-4 font-bold text-slate-900 text-sm sm:text-base font-sans hover:text-indigo-600 transition-colors cursor-pointer min-h-[48px]"
                >
                  <span className="leading-snug">{faq.question}</span>
                  <div className={`p-1.5 sm:p-2 rounded-xl shrink-0 ${isOpen ? 'bg-indigo-100 text-indigo-700' : 'bg-slate-100 text-slate-500'}`}>
                    {isOpen ? <ChevronUp className="w-4 h-4 sm:w-5 sm:h-5" /> : <ChevronDown className="w-4 h-4 sm:w-5 sm:h-5" />}
                  </div>
                </button>

                {isOpen && (
                  <div className="px-4 sm:px-6 pb-5 sm:pb-6 pt-2 text-slate-600 text-xs sm:text-sm leading-relaxed border-t border-slate-100 font-medium">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Support Hotline CTA */}
        <div className="bg-slate-900 rounded-3xl p-6 sm:p-8 text-white flex flex-col sm:flex-row items-center justify-between gap-6 border border-slate-800 shadow-xl">
          <div className="space-y-2 text-center sm:text-left">
            <h3 className="text-lg sm:text-xl font-bold font-sans text-amber-300">Ready to Book or Have Questions?</h3>
            <p className="text-xs text-slate-300">
              Download the Durgapur Fix app or speak directly with our agency support team.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 w-full sm:w-auto shrink-0">
            <a
              href={PLAY_STORE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto min-h-[44px] px-6 py-3.5 bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-300 hover:to-amber-400 text-slate-950 font-black text-xs uppercase tracking-wider rounded-2xl transition-all flex items-center justify-center space-x-2 cursor-pointer shadow-md"
            >
              <Smartphone className="w-4 h-4" />
              <span>Get Android App</span>
            </a>
            <a
              href="tel:8250261385"
              className="w-full sm:w-auto min-h-[44px] px-6 py-3.5 bg-white/10 hover:bg-white/20 text-white font-bold text-xs uppercase tracking-wider rounded-2xl border border-white/20 transition-all flex items-center justify-center space-x-2"
            >
              <Phone className="w-4 h-4 text-amber-400" />
              <span>Call Helpline</span>
            </a>
          </div>
        </div>

      </div>
    </div>
  );
};
