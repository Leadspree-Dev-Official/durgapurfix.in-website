import React from 'react';
import { useNavigate } from 'react-router-dom';
import { DurgapurFixLogo } from './DurgapurFixLogo';
import { PLAY_STORE_URL } from '../constants';
import { 
  Sparkles, 
  Star, 
  ShieldCheck, 
  Smartphone, 
  ArrowRight, 
  CheckCircle, 
  Clock, 
  MapPin,
  Lock,
  Download,
  QrCode,
  HelpCircle
} from 'lucide-react';

interface HeroSectionProps {
  onOpenAppModal: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onOpenAppModal }) => {
  const navigate = useNavigate();
  return (
    <section className="relative pt-8 pb-16 lg:pt-16 lg:pb-24 overflow-hidden bg-gradient-to-b from-slate-900 via-indigo-950 to-slate-900 text-white">
      {/* Decorative Background Elements */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-tr from-indigo-600/30 via-purple-600/20 to-amber-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-10 left-10 w-72 h-72 bg-blue-500/10 rounded-full blur-2xl pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Headline, Narrative & App Download CTA */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            
            {/* Agency Badge */}
            <div className="inline-flex items-center space-x-2 text-xs font-semibold text-amber-300">
              <Sparkles className="w-4 h-4 text-amber-400" />
              <span>Durgapur's Verified Doorstep Service Network</span>
              <span aria-hidden="true">·</span>
              <span className="text-indigo-200">Official Android App</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight font-sans text-white leading-tight sm:leading-[1.15]">
              Expert Home Care & Repairs, <br className="hidden sm:inline" />
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-amber-300 via-amber-400 to-indigo-300">
                Exclusively on Our Mobile App.
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-sm sm:text-lg text-slate-300 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-normal">
              To guarantee background-checked technician safety, minute-by-minute live GPS partner tracking, transparent upfront pricing, and in-app 30-day warranty storage, all Durgapur Fix services are booked and managed exclusively via our official mobile app.
            </p>

            {/* App Exclusivity Highlights */}
            <div className="pt-2 grid grid-cols-1 sm:grid-cols-2 gap-2.5 sm:gap-3 max-w-xl mx-auto lg:mx-0 text-left">
              <div className="flex items-center space-x-2.5 text-xs text-slate-200 bg-white/5 border border-white/10 rounded-xl p-2.5 sm:p-3">
                <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Live GPS partner arrival map</span>
              </div>
              <div className="flex items-center space-x-2.5 text-xs text-slate-200 bg-white/5 border border-white/10 rounded-xl p-2.5 sm:p-3">
                <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Secure OTP doorstep check-in</span>
              </div>
              <div className="flex items-center space-x-2.5 text-xs text-slate-200 bg-white/5 border border-white/10 rounded-xl p-2.5 sm:p-3">
                <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Locked rate cards • Zero hidden fees</span>
              </div>
              <div className="flex items-center space-x-2.5 text-xs text-slate-200 bg-white/5 border border-white/10 rounded-xl p-2.5 sm:p-3">
                <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Automatic 30-day digital warranty</span>
              </div>
            </div>

            {/* Primary Action Buttons */}
            <div className="pt-4 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3 sm:gap-4">
              <a
                href={PLAY_STORE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto min-h-[48px] px-6 sm:px-8 py-3.5 sm:py-4 rounded-2xl bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600 hover:from-amber-300 hover:to-amber-500 text-slate-950 font-black text-xs sm:text-sm uppercase tracking-wider shadow-xl shadow-amber-500/20 transition-all flex items-center justify-center space-x-2.5 cursor-pointer"
              >
                <Smartphone className="w-5 h-5 text-slate-950 shrink-0" />
                <span>Download Durgapur Fix App</span>
              </a>

              <button
                onClick={() => navigate('/faq')}
                className="w-full sm:w-auto min-h-[48px] px-6 py-3.5 sm:py-4 rounded-2xl bg-white/10 hover:bg-white/20 text-white font-bold text-xs sm:text-sm border border-white/15 transition-all flex items-center justify-center space-x-2 cursor-pointer"
              >
                <HelpCircle className="w-4 h-4 text-amber-400 shrink-0" />
                <span>Frequently Asked Questions</span>
              </button>
            </div>

            {/* Trust Metrics Bar */}
            <div className="pt-6 border-t border-slate-800/80 grid grid-cols-3 gap-2 sm:gap-4 text-center lg:text-left">
              <div>
                <div className="flex items-center justify-center lg:justify-start space-x-1 text-amber-400 font-black text-lg sm:text-2xl">
                  <Star className="w-4 h-4 sm:w-5 sm:h-5 fill-amber-400 shrink-0" />
                  <span>4.9 / 5</span>
                </div>
                <p className="text-[10px] sm:text-xs text-slate-400 font-medium">18,500+ Fixes Completed</p>
              </div>
              <div>
                <div className="flex items-center justify-center lg:justify-start space-x-1 text-emerald-400 font-black text-lg sm:text-2xl">
                  <ShieldCheck className="w-4 h-4 sm:w-5 sm:h-5 shrink-0" />
                  <span>100%</span>
                </div>
                <p className="text-[10px] sm:text-xs text-slate-400 font-medium">Police & Skill Verified</p>
              </div>
              <div>
                <div className="flex items-center justify-center lg:justify-start space-x-1 text-indigo-300 font-black text-lg sm:text-2xl">
                  <Clock className="w-4 h-4 sm:w-5 sm:h-5 text-indigo-400 shrink-0" />
                  <span>30 Min</span>
                </div>
                <p className="text-[10px] sm:text-xs text-slate-400 font-medium">Express Dispatch Window</p>
              </div>
            </div>

          </div>

          {/* Right Column: Android App Live Preview Card */}
          <div className="lg:col-span-5 relative">
            
            {/* Card Frame with Soft Glow */}
            <div className="relative mx-auto max-w-sm sm:max-w-md bg-gradient-to-b from-slate-800/95 to-slate-900/95 rounded-3xl p-6 sm:p-7 border border-slate-700/80 shadow-2xl backdrop-blur-xl">
              
              {/* Top Card Header */}
              <div className="flex items-center justify-between pb-4 border-b border-slate-700">
                <div className="flex items-center space-x-3">
                  <DurgapurFixLogo size="sm" variant="icon" />
                  <div>
                    <h3 className="text-sm font-bold text-white">Durgapur Fix App</h3>
                    <p className="text-[11px] text-emerald-400 font-medium flex items-center">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 mr-1 animate-pulse"></span>
                      Real-Time Dispatch Engine Active
                    </p>
                  </div>
                </div>
                <span className="text-[10px] text-indigo-300 font-mono font-semibold">
                  Official Portal
                </span>
              </div>

              {/* Simulated App Screen Preview */}
              <div className="my-5 bg-slate-950 rounded-2xl p-4 border border-slate-800 space-y-3.5">
                
                {/* Active Partner Dispatch Banner */}
                <div className="bg-gradient-to-r from-indigo-900/90 to-blue-900/90 p-3.5 rounded-xl border border-indigo-500/30 flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 rounded-full bg-indigo-600 flex items-center justify-center font-bold text-white text-xs shrink-0">
                      SS
                    </div>
                    <div>
                      <div className="text-xs font-bold text-white">Subhash Sen</div>
                      <div className="text-[10px] text-indigo-200">Master Technician • En Route</div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-xs font-black text-amber-400">ETA 8 MIN</div>
                    <div className="text-[10px] text-emerald-300">GPS Live</div>
                  </div>
                </div>

                {/* App Features List */}
                <div className="space-y-2 text-xs">
                  <div className="flex items-center justify-between text-slate-300 p-2.5 rounded-xl bg-slate-900 border border-slate-800/80">
                    <span className="flex items-center space-x-2">
                      <MapPin className="w-4 h-4 text-emerald-400" />
                      <span>Live Doorstep Navigation Tracker</span>
                    </span>
                    <span className="text-[10px] text-slate-400 font-mono">Real-time</span>
                  </div>

                  <div className="flex items-center justify-between text-slate-300 p-2.5 rounded-xl bg-slate-900 border border-slate-800/80">
                    <span className="flex items-center space-x-2">
                      <Lock className="w-4 h-4 text-amber-400" />
                      <span>Doorstep OTP Verification</span>
                    </span>
                    <span className="text-[10px] text-slate-400 font-mono">100% Safe</span>
                  </div>

                  <div className="flex items-center justify-between text-slate-300 p-2.5 rounded-xl bg-slate-900 border border-slate-800/80">
                    <span className="flex items-center space-x-2">
                      <ShieldCheck className="w-4 h-4 text-indigo-400" />
                      <span>30-Day Digital Warranty Vault</span>
                    </span>
                    <span className="text-[10px] text-slate-400 font-mono">Guaranteed</span>
                  </div>
                </div>

                {/* Direct Google Play / Web Portal Notice */}
                <div className="p-3 bg-indigo-950/60 rounded-xl border border-indigo-800/50 text-[11px] text-indigo-200 flex items-center space-x-2">
                  <Smartphone className="w-4 h-4 text-amber-400 shrink-0" />
                  <span>Available on Google Play Store for Android</span>
                </div>

              </div>

              {/* Action Button */}
              <div>
                <a
                  href={PLAY_STORE_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3.5 rounded-xl bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600 text-slate-950 font-black text-xs uppercase tracking-wider hover:brightness-110 shadow-lg shadow-amber-500/20 transition-all flex items-center justify-center space-x-2 cursor-pointer"
                >
                  <Smartphone className="w-4 h-4" />
                  <span>Get App on Google Play</span>
                </a>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
