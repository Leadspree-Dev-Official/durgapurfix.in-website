import React from 'react';
import { DurgapurFixLogo } from './DurgapurFixLogo';
import { PLAY_STORE_URL } from '../constants';
import { 
  Smartphone, 
  ShieldCheck, 
  Lock, 
  Phone, 
  Mail, 
  MapPin, 
  ArrowUpRight,
  HelpCircle
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';

interface FooterProps {
  onOpenAppModal: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenAppModal }) => {
  const navigate = useNavigate();

  const handlePageChange = (path: string) => {
    navigate(path);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-950 text-slate-300 pt-16 pb-12 border-t border-slate-800 relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-indigo-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-10 w-80 h-80 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* App Download Banner in Footer */}
        <div className="mb-12 sm:mb-16 bg-gradient-to-r from-indigo-900 via-slate-900 to-blue-950 rounded-3xl p-6 sm:p-10 border border-indigo-500/20 shadow-2xl flex flex-col lg:flex-row items-center justify-between gap-6 sm:gap-8">
          <div className="space-y-3 max-w-2xl text-center lg:text-left">
            <div className="inline-flex items-center space-x-2 text-amber-300 text-xs font-semibold">
              <Smartphone className="w-3.5 h-3.5" />
              <span>Android Mobile App</span>
            </div>
            <h3 className="text-xl sm:text-3xl font-extrabold text-white font-sans tracking-tight">
              Manage all your home services directly from your smartphone
            </h3>
            <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
              Track assigned service partners in real time, view fixed pricing, store warranties, and pay securely via our official Android mobile app.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 shrink-0 w-full sm:w-auto">
            <a
              href={PLAY_STORE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto min-h-[44px] px-6 py-3.5 rounded-2xl bg-gradient-to-r from-amber-400 to-amber-500 text-slate-950 font-bold text-xs sm:text-sm hover:from-amber-300 hover:to-amber-400 shadow-lg shadow-amber-500/20 transition-all flex items-center justify-center space-x-2 cursor-pointer"
            >
              <Smartphone className="w-4 h-4 sm:w-5 sm:h-5 text-slate-950" />
              <span>Get on Google Play</span>
            </a>
            <button
              onClick={() => handlePageChange('/faq')}
              className="w-full sm:w-auto min-h-[44px] px-6 py-3.5 rounded-2xl bg-white/10 hover:bg-white/15 text-white font-bold text-xs sm:text-sm border border-white/20 transition-all flex items-center justify-center space-x-2 cursor-pointer"
            >
              <HelpCircle className="w-4 h-4 text-amber-400" />
              <span>FAQ & Help</span>
            </button>
          </div>
        </div>

        {/* Navigation Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-10 pb-12 border-b border-slate-800">
          
          {/* Brand Info */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center">
              <DurgapurFixLogo size="md" theme="dark" />
            </div>
            <p className="text-slate-400 text-sm leading-relaxed max-w-sm">
              Durgapur Fix is a premier professional home care agency providing certified, background-verified technician network for on-demand home maintenance across Durgapur, West Bengal.
            </p>
            <div className="flex items-center space-x-3 pt-2">
              <div className="flex items-center space-x-1.5 text-xs text-emerald-400 font-medium bg-emerald-950/60 border border-emerald-800/50 px-3 py-1.5 rounded-lg">
                <ShieldCheck className="w-4 h-4" />
                <span>30-Day Guarantee</span>
              </div>
              <div className="flex items-center space-x-1.5 text-xs text-indigo-300 font-medium bg-indigo-950/60 border border-indigo-800/50 px-3 py-1.5 rounded-lg">
                <Lock className="w-4 h-4" />
                <span>Encrypted Payments</span>
              </div>
            </div>
          </div>

          {/* Quick Page Links */}
          <div className="space-y-3">
            <h4 className="text-white font-bold text-sm uppercase tracking-wider">Quick Navigation</h4>
            <ul className="space-y-2 text-xs font-medium text-slate-400">
              <li><button onClick={() => handlePageChange('/')} className="hover:text-amber-400 transition-colors cursor-pointer">Home Overview</button></li>
              <li>
                <a 
                  href={PLAY_STORE_URL} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="hover:text-amber-400 font-bold text-amber-300 transition-colors cursor-pointer"
                >
                  Download Android App
                </a>
              </li>
              <li><button onClick={() => handlePageChange('/contact')} className="hover:text-amber-400 transition-colors cursor-pointer">Contact & About Us</button></li>
              <li><button onClick={() => handlePageChange('/reviews')} className="hover:text-amber-400 transition-colors cursor-pointer">Customer Reviews</button></li>
              <li><button onClick={() => handlePageChange('/faq')} className="hover:text-amber-400 transition-colors cursor-pointer">FAQ</button></li>
            </ul>
          </div>

          {/* Company & Support */}
          <div className="space-y-3">
            <h4 className="text-white font-bold text-sm uppercase tracking-wider">Legal & Compliance</h4>
            <ul className="space-y-2 text-xs font-medium text-slate-400">
              <li>
                <button 
                  onClick={() => handlePageChange('/privacy')} 
                  className="hover:text-amber-400 transition-colors font-bold text-indigo-300 flex items-center space-x-1 cursor-pointer"
                >
                  <span>Privacy Policy & Terms</span>
                  <ArrowUpRight className="w-3 h-3 text-amber-400" />
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handlePageChange('/refund')} 
                  className="hover:text-amber-400 transition-colors font-bold text-emerald-300 flex items-center space-x-1 cursor-pointer"
                >
                  <span>Refund & Warranty Policy</span>
                  <ArrowUpRight className="w-3 h-3 text-emerald-400" />
                </button>
              </li>
              <li><button onClick={() => handlePageChange('/contact')} className="hover:text-amber-400 transition-colors cursor-pointer">Contact Support Helpline</button></li>
            </ul>
          </div>

          {/* Contact Details */}
          <div className="space-y-3">
            <h4 className="text-white font-bold text-sm uppercase tracking-wider">Contact Agency</h4>
            <ul className="space-y-2.5 text-xs font-medium text-slate-400">
              <li className="flex items-center space-x-2">
                <Phone className="w-4 h-4 text-amber-400 shrink-0" />
                <a href="tel:8250261385" className="hover:text-amber-400 transition-colors">+91 8250261385</a>
              </li>
              <li className="flex items-center space-x-2">
                <Mail className="w-4 h-4 text-indigo-400 shrink-0" />
                <span>support@durgapurfix.com</span>
              </li>
              <li className="flex items-start space-x-2">
                <MapPin className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span>Agency HQ: City Centre, Junction Mall Area, Durgapur, WB 713216</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-4 text-center sm:text-left">
          <p>© {new Date().getFullYear()} Durgapur Fix Agency Inc. All rights reserved.</p>
          <div className="flex flex-wrap items-center justify-center sm:justify-start gap-4 sm:gap-6">
            <button onClick={() => handlePageChange('/privacy')} className="hover:text-slate-300 transition-colors cursor-pointer py-1">
              Privacy Policy
            </button>
            <button onClick={() => handlePageChange('/refund')} className="hover:text-slate-300 transition-colors cursor-pointer py-1">
              Refund Policy
            </button>
            <button onClick={() => handlePageChange('/contact')} className="hover:text-slate-300 transition-colors cursor-pointer py-1">
              Support Center
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};
