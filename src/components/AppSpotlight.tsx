import React, { useState } from 'react';
import { DurgapurFixLogo } from './DurgapurFixLogo';
import { PLAY_STORE_URL } from '../constants';
import { 
  Smartphone, 
  Send, 
  CheckCircle2, 
  QrCode, 
  ShieldCheck, 
  Download, 
  Sparkles, 
  MapPin, 
  Bell, 
  CreditCard,
  Check
} from 'lucide-react';

export const AppSpotlight: React.FC = () => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [linkSent, setLinkSent] = useState(false);

  const handleSendLink = (e: React.FormEvent) => {
    e.preventDefault();
    if (phoneNumber.trim().length >= 8) {
      setLinkSent(true);
      setTimeout(() => {
        setLinkSent(false);
        setPhoneNumber('');
      }, 5000);
    }
  };

  return (
    <section className="py-16 sm:py-24 bg-gradient-to-br from-indigo-950 via-slate-900 to-blue-950 text-white relative overflow-hidden">
      {/* Background Orbs */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Text & Interactive SMS Link Sender */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center space-x-2 text-amber-300 text-xs font-bold uppercase tracking-wider">
              <Smartphone className="w-3.5 h-3.5" />
              <span>Native Android Application</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black font-sans tracking-tight text-white leading-tight">
              Book, Track, & Pay Seamlessly <br />
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-amber-300 to-amber-500">
                Via Our Native Android App
              </span>
            </h2>

            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              We have engineered an intuitive Android smartphone application that puts complete home service management in your pocket. Experience live GPS partner tracking, transparent price estimation, and digital receipt storage.
            </p>

            {/* App Features List */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="bg-white/5 border border-white/10 rounded-2xl p-4 flex items-start space-x-3">
                <div className="p-2 bg-amber-400/20 text-amber-300 rounded-xl shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white">Live GPS Partner Map</h4>
                  <p className="text-xs text-slate-400 mt-0.5">Track technician ETA in real time as they navigate to your address.</p>
                </div>
              </div>

              <div className="bg-white/5 border border-white/10 rounded-2xl p-4 flex items-start space-x-3">
                <div className="p-2 bg-indigo-400/20 text-indigo-300 rounded-xl shrink-0">
                  <Bell className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white">30-Min Arrival Alerts</h4>
                  <p className="text-xs text-slate-400 mt-0.5">Automated SMS and push notifications with technician profile & rating.</p>
                </div>
              </div>

              <div className="bg-white/5 border border-white/10 rounded-2xl p-4 flex items-start space-x-3">
                <div className="p-2 bg-emerald-400/20 text-emerald-300 rounded-xl shrink-0">
                  <CreditCard className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white">Post-Service Digital Payment</h4>
                  <p className="text-xs text-slate-400 mt-0.5">Pay safely after work inspection via cards, UPI, or cash.</p>
                </div>
              </div>

              <div className="bg-white/5 border border-white/10 rounded-2xl p-4 flex items-start space-x-3">
                <div className="p-2 bg-rose-400/20 text-rose-300 rounded-xl shrink-0">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white">30-Day Digital Warranty</h4>
                  <p className="text-xs text-slate-400 mt-0.5">Warranty claims logged directly inside the app with 1-tap rebooking.</p>
                </div>
              </div>
            </div>

            {/* Interactive SMS Link Box */}
            <div className="pt-4">
              <div className="bg-slate-900/90 border border-slate-700/80 rounded-2xl p-5 shadow-xl max-w-lg space-y-3">
                <p className="text-xs font-bold text-slate-200">
                  Send Google Play Store Link to Your Mobile Phone:
                </p>
                
                {linkSent ? (
                  <div className="bg-emerald-500/20 border border-emerald-500/40 text-emerald-300 p-3 rounded-xl text-xs flex items-center space-x-2 animate-in fade-in">
                    <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
                    <span>Google Play Store link sent to mobile! Check your phone messages.</span>
                  </div>
                ) : (
                  <form onSubmit={handleSendLink} className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2">
                    <input
                      type="tel"
                      value={phoneNumber}
                      onChange={(e) => setPhoneNumber(e.target.value)}
                      placeholder="Enter 10-digit mobile number"
                      required
                      className="w-full bg-slate-950 border border-slate-700 rounded-xl px-3.5 py-3 text-xs text-white placeholder-slate-500 focus:outline-hidden focus:border-amber-400"
                    />
                    <button
                      type="submit"
                      className="min-h-[44px] px-5 py-2.5 bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-300 hover:to-amber-400 text-slate-950 font-bold text-xs rounded-xl shadow-md shrink-0 flex items-center justify-center space-x-1 cursor-pointer transition-transform"
                    >
                      <span>Send Link</span>
                      <Send className="w-3.5 h-3.5" />
                    </button>
                  </form>
                )}
              </div>
            </div>

          </div>

          {/* Right Phone Graphic & QR Code */}
          <div className="lg:col-span-5 flex flex-col items-center justify-center">
            
            {/* Phone Frame */}
            <div className="w-full max-w-xs bg-slate-950 rounded-[40px] p-4 border-4 border-slate-700/80 shadow-2xl relative">
              
              {/* Notch */}
              <div className="w-32 h-4 bg-slate-800 rounded-b-xl mx-auto mb-4" />

              {/* App UI Content */}
              <div className="bg-slate-900 rounded-[28px] p-4 space-y-4 text-xs border border-slate-800">
                <div className="flex items-center justify-between pb-2 border-b border-slate-800">
                  <span className="font-extrabold text-amber-400">Durgapur Fix App</span>
                  <span className="text-[10px] text-emerald-400 font-bold bg-emerald-950 px-2 py-0.5 rounded-full">Google Play</span>
                </div>

                <div className="bg-gradient-to-tr from-indigo-900 to-slate-800 p-3 rounded-2xl border border-indigo-500/30 text-center space-y-1">
                  <div className="flex justify-center mb-1">
                    <DurgapurFixLogo size="sm" variant="icon" />
                  </div>
                  <div className="font-bold text-white text-sm">Durgapur Fix</div>
                  <div className="text-[10px] text-slate-300">Official App on Google Play Store</div>
                </div>

                {/* QR Code Container */}
                <div className="bg-white p-4 rounded-2xl text-center space-y-2 border border-slate-200">
                  <div className="w-32 h-32 mx-auto bg-slate-900 rounded-xl p-2 flex items-center justify-center">
                    <QrCode className="w-28 h-28 text-white" />
                  </div>
                  <p className="text-[10px] font-bold text-slate-800">Scan QR Code to Open Google Play Store</p>
                </div>

                <div className="text-center pt-1">
                  <a
                    href={PLAY_STORE_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center space-x-1.5 text-xs text-amber-400 font-bold hover:underline cursor-pointer"
                  >
                    <Smartphone className="w-3.5 h-3.5" />
                    <span>Get on Google Play Store</span>
                  </a>
                </div>

              </div>

            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
