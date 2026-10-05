import React, { useState } from 'react';
import { DurgapurFixLogo } from './DurgapurFixLogo';
import { PLAY_STORE_URL } from '../constants';
import { 
  X, 
  Smartphone, 
  QrCode, 
  Download, 
  Send, 
  CheckCircle2, 
  ShieldCheck, 
  Sparkles, 
  Star,
  MapPin,
  Bell,
  Check
} from 'lucide-react';

interface AppModalProps {
  onClose: () => void;
}

export const AppModal: React.FC<AppModalProps> = ({ onClose }) => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [linkSent, setLinkSent] = useState(false);

  const handleSendLink = (e: React.FormEvent) => {
    e.preventDefault();
    const cleanDigits = phoneNumber.replace(/\D/g, '');
    if (cleanDigits.length >= 10) {
      setLinkSent(true);
      setTimeout(() => {
        setLinkSent(false);
        setPhoneNumber('');
      }, 5000);
    }
  };

  React.useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  return (
    <div 
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm animate-in fade-in duration-200"
    >
      <div className="bg-slate-900 text-white rounded-3xl max-w-lg w-full max-h-[90dvh] flex flex-col border border-slate-700 shadow-2xl overflow-hidden relative">
        
        {/* Header */}
        <div className="p-4 sm:p-6 border-b border-slate-800 flex items-center justify-between shrink-0">
          <div className="flex items-center space-x-3">
            <DurgapurFixLogo size="sm" variant="icon" />
            <div>
              <h3 className="text-sm sm:text-base font-extrabold text-white">Durgapur Fix Android App</h3>
              <p className="text-[11px] sm:text-xs text-emerald-400 font-medium">Official Google Play Store App</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 text-slate-400 hover:text-white hover:bg-slate-800 rounded-full transition-colors cursor-pointer min-w-[40px] min-h-[40px] flex items-center justify-center"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-4 sm:p-6 space-y-4 sm:space-y-6 overflow-y-auto flex-1">
          
          {/* App Highlights */}
          <div className="bg-slate-950 p-3.5 sm:p-4 rounded-2xl border border-slate-800 space-y-2.5">
            <div className="flex items-center justify-between text-xs text-slate-300">
              <span className="flex items-center space-x-2">
                <MapPin className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Live GPS Partner ETA Tracking</span>
              </span>
              <span className="text-emerald-400 font-bold shrink-0">Active</span>
            </div>
            <div className="flex items-center justify-between text-xs text-slate-300">
              <span className="flex items-center space-x-2">
                <ShieldCheck className="w-4 h-4 text-amber-400 shrink-0" />
                <span>30-Day Digital Warranty Vault</span>
              </span>
              <span className="text-amber-400 font-bold shrink-0">Included</span>
            </div>
            <div className="flex items-center justify-between text-xs text-slate-300">
              <span className="flex items-center space-x-2">
                <Bell className="w-4 h-4 text-indigo-400 shrink-0" />
                <span>Express 30-Min Arrival Alerts</span>
              </span>
              <span className="text-indigo-400 font-bold shrink-0">Push SMS</span>
            </div>
          </div>

          {/* QR Code Container */}
          <div className="bg-white p-4 sm:p-5 rounded-2xl text-center space-y-2">
            <div className="w-32 h-32 sm:w-36 sm:h-36 mx-auto bg-slate-900 rounded-xl p-2 flex items-center justify-center">
              <QrCode className="w-28 h-28 sm:w-32 sm:h-32 text-white" />
            </div>
            <p className="text-xs font-black text-slate-900">
              Scan with your Android camera to open on Google Play Store
            </p>
          </div>

          {/* SMS Link Form */}
          <div className="space-y-2">
            <p className="text-xs font-bold text-slate-300">Or Send Google Play Link via SMS:</p>
            {linkSent ? (
              <div className="bg-emerald-500/20 border border-emerald-500/40 text-emerald-300 p-3 rounded-xl text-xs flex items-center space-x-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Google Play link sent to your phone!</span>
              </div>
            ) : (
              <form onSubmit={handleSendLink} className="flex flex-col sm:flex-row gap-2">
                <input
                  type="tel"
                  required
                  value={phoneNumber}
                  onChange={(e) => setPhoneNumber(e.target.value)}
                  placeholder="Enter 10-digit mobile number"
                  className="w-full bg-slate-950 border border-slate-700 rounded-xl px-3.5 py-2.5 text-xs text-white placeholder-slate-500 focus:outline-hidden focus:border-amber-400 min-h-[44px]"
                />
                <button
                  type="submit"
                  className="px-5 py-2.5 bg-indigo-600 hover:bg-indigo-500 text-white font-bold text-xs rounded-xl shrink-0 cursor-pointer min-h-[44px] flex items-center justify-center"
                >
                  Send Link
                </button>
              </form>
            )}
          </div>

          {/* Google Play Store Button */}
          <a
            href={PLAY_STORE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full min-h-[48px] py-3.5 bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600 text-slate-950 font-black text-xs uppercase tracking-wider rounded-xl shadow-lg hover:brightness-110 flex items-center justify-center space-x-2 cursor-pointer transition-all"
          >
            <Smartphone className="w-4 h-4" />
            <span>Get on Google Play Store</span>
          </a>

        </div>

      </div>
    </div>
  );
};
