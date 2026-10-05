import React from 'react';
import { useNavigate } from 'react-router-dom';
import { PLAY_STORE_URL } from '../constants';
import { 
  Smartphone, 
  MapPin, 
  ShieldCheck, 
  Lock, 
  CreditCard, 
  CheckCircle2, 
  ArrowRight, 
  QrCode, 
  Clock, 
  UserCheck, 
  FileCheck2,
  Phone,
  HelpCircle
} from 'lucide-react';

interface AppFirstShowcaseProps {
  onOpenAppModal: () => void;
}

export const AppFirstShowcase: React.FC<AppFirstShowcaseProps> = ({ onOpenAppModal }) => {
  const navigate = useNavigate();
  const appPillars = [
    {
      icon: MapPin,
      title: 'Live GPS Partner Tracking',
      desc: 'Watch your assigned background-verified technician navigate to your location in real time with minute-by-minute ETA. Never wait around wondering when help will arrive.',
      color: 'text-indigo-600 bg-indigo-50 border-indigo-100',
    },
    {
      icon: Lock,
      title: 'Secure OTP Handshake at Doorstep',
      desc: 'Every service call begins only when you share a one-time security code generated inside your app, guaranteeing that only authorized personnel enter your residence.',
      color: 'text-emerald-600 bg-emerald-50 border-emerald-100',
    },
    {
      icon: CreditCard,
      title: 'Upfront Locked Rate Cards',
      desc: 'No on-the-spot price inflation or awkward bargaining. The exact scope and transparent rates are locked in the app before our technician leaves the agency hub.',
      color: 'text-amber-600 bg-amber-50 border-amber-100',
    },
    {
      icon: ShieldCheck,
      title: 'In-App 30-Day Warranty Vault',
      desc: 'Every completed job automatically activates a 30-day service warranty in your account. Request a free rework with a single tap directly from your booking history.',
      color: 'text-blue-600 bg-blue-50 border-blue-100',
    },
  ];

  const bookingSteps = [
    {
      step: '01',
      title: 'Download Official App',
      description: 'Available on Google Play Store for quick booking and live technician tracking.',
    },
    {
      step: '02',
      title: 'Sign In & Select Service',
      description: 'Login with mobile OTP, choose your maintenance requirement, view fixed pricing, and pick your time slot.',
    },
    {
      step: '03',
      title: 'Track Partner & Pay Post-Inspection',
      description: 'Follow your partner live on the map. After the job is completed to your satisfaction, pay safely via UPI, card, or cash.',
    },
  ];

  return (
    <section className="py-16 sm:py-24 bg-white border-t border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4">
          <div className="inline-flex items-center space-x-2 text-indigo-700 text-xs font-bold uppercase tracking-wider">
            <Smartphone className="w-4 h-4 text-indigo-600" />
            <span>Mobile App Ecosystem</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black font-sans tracking-tight text-slate-900 leading-tight">
            All Durgapur Fix Services Are Handled via App
          </h2>
          <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
            To eliminate untracked visits, variable charges, and unverified personnel, we operate our entire technician dispatch and warranty tracking exclusively through our official mobile application.
          </p>
        </div>

        {/* 4 Feature Pillars Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {appPillars.map((pillar, idx) => {
            const IconComp = pillar.icon;
            return (
              <div 
                key={idx}
                className="bg-slate-50 rounded-3xl p-5 sm:p-7 border border-slate-200/80 shadow-xs flex flex-col justify-between hover:border-slate-300 transition-colors"
              >
                <div className="space-y-4">
                  <div className={`w-12 h-12 rounded-2xl flex items-center justify-center border ${pillar.color}`}>
                    <IconComp className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 font-sans">
                    {pillar.title}
                  </h3>
                  <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                    {pillar.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* How It Works on the App */}
        <div className="bg-slate-900 text-white rounded-3xl p-5 sm:p-8 md:p-12 border border-slate-800 shadow-xl overflow-hidden relative">
          <div className="absolute top-0 right-0 w-96 h-96 bg-indigo-600/10 rounded-full blur-3xl pointer-events-none" />
          
          <div className="relative z-10 space-y-8 sm:space-y-10">
            <div className="max-w-2xl space-y-3">
              <span className="text-amber-400 text-xs font-bold uppercase tracking-wider">
                Simple 3-Step Process
              </span>
              <h3 className="text-2xl sm:text-3xl font-black font-sans text-white">
                How to Book Your Service on the App
              </h3>
              <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">
                Enjoy transparent rates, guaranteed arrival slots, and 100% verified technician dispatch in minutes.
              </p>
            </div>

            {/* 3 Steps Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
              {bookingSteps.map((step) => (
                <div 
                  key={step.step}
                  className="bg-slate-800/80 rounded-2xl p-5 sm:p-6 border border-slate-700/80 flex flex-col justify-between space-y-4"
                >
                  <div className="space-y-3">
                    <span className="text-2xl font-black text-amber-400 font-sans">
                      {step.step}
                    </span>
                    <h4 className="text-base font-bold text-white font-sans">
                      {step.title}
                    </h4>
                    <p className="text-slate-400 text-xs leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Bottom Actions Banner */}
            <div className="pt-6 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4 sm:gap-6">
              <div className="flex items-center space-x-3 text-xs text-slate-300">
                <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
                <span>Compatible with all Android smartphones on Google Play</span>
              </div>

              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 w-full sm:w-auto">
                <a
                  href={PLAY_STORE_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto min-h-[44px] px-6 py-3.5 bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600 hover:from-amber-300 hover:to-amber-500 text-slate-950 font-bold text-xs uppercase tracking-wider rounded-xl shadow-lg transition-all flex items-center justify-center space-x-2 cursor-pointer"
                >
                  <Smartphone className="w-4 h-4" />
                  <span>Download Durgapur Fix App</span>
                </a>
                <button
                  onClick={() => navigate('/faq')}
                  className="w-full sm:w-auto min-h-[44px] px-6 py-3.5 bg-slate-800 hover:bg-slate-700 text-slate-200 font-bold text-xs uppercase tracking-wider rounded-xl border border-slate-700 transition-all flex items-center justify-center space-x-2 cursor-pointer"
                >
                  <HelpCircle className="w-4 h-4 text-amber-400" />
                  <span>FAQ & Help</span>
                </button>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
