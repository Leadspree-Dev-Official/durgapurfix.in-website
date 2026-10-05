import React, { useState } from 'react';
import { FAQS } from '../data/mockData';
import { 
  Mail, 
  Phone, 
  MapPin, 
  MessageSquare, 
  Send, 
  CheckCircle2, 
  Clock, 
  ShieldCheck, 
  HelpCircle,
  ChevronDown,
  ChevronUp,
  Building2,
  Headphones,
  Award,
  UserCheck,
  Sparkles,
  ArrowRight,
  Smartphone
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { PLAY_STORE_URL } from '../constants';

interface ContactPageProps {
  onOpenAppModal: () => void;
}

export const ContactPage: React.FC<ContactPageProps> = ({ onOpenAppModal }) => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    serviceCategory: 'AC & Appliance Repair',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);
  const [openFaqId, setOpenFaqId] = useState<string | null>('f1');
  const [faqFilter, setFaqFilter] = useState<'all' | 'booking' | 'pricing' | 'safety' | 'app'>('all');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.name && formData.email && formData.message) {
      setSubmitted(true);
      setTimeout(() => {
        setSubmitted(false);
        setFormData({
          name: '',
          email: '',
          phone: '',
          serviceCategory: 'AC & Appliance Repair',
          message: ''
        });
      }, 6000);
    }
  };

  const filteredFaqs = faqFilter === 'all' ? FAQS : FAQS.filter(f => f.category === faqFilter);

  return (
    <div className="bg-slate-50 min-h-screen py-12 sm:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center space-x-2 text-indigo-700 text-xs font-bold uppercase tracking-wider">
            <Building2 className="w-3.5 h-3.5 text-indigo-600" />
            <span>About Durgapur Fix Agency & Contact Helpline</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-black font-sans tracking-tight text-slate-900">
            About Our Agency & Customer Support
          </h1>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            Durgapur Fix is Durgapur's premier doorstep home maintenance agency. Learn about our local mission, background verification standard, or reach our 24/7 helpline team.
          </p>
        </div>

        {/* ABOUT AGENCY SECTION: Story, Stats & Verification */}
        <div className="space-y-12">
          
          {/* Core Agency Stats Bar */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-6">
            {[
              { label: 'Completed Home Fixes', value: '18,500+', icon: CheckCircle2, color: 'text-amber-500' },
              { label: 'Verified Technicians', value: '120+', icon: UserCheck, color: 'text-indigo-600' },
              { label: 'Durgapur Localities Covered', value: '25+', icon: MapPin, color: 'text-emerald-600' },
              { label: 'Average Customer Rating', value: '4.9 / 5', icon: Award, color: 'text-blue-600' },
            ].map((stat, idx) => {
              const IconComponent = stat.icon;
              return (
                <div key={idx} className="bg-white rounded-2xl sm:rounded-3xl p-4 sm:p-6 border border-slate-200/80 shadow-xs text-center space-y-1.5 sm:space-y-2">
                  <IconComponent className={`w-6 h-6 sm:w-8 sm:h-8 mx-auto ${stat.color}`} />
                  <div className="text-xl sm:text-3xl font-black text-slate-900 font-sans">{stat.value}</div>
                  <div className="text-[10px] sm:text-xs font-bold text-slate-500 uppercase tracking-wider">{stat.label}</div>
                </div>
              );
            })}
          </div>

          {/* About Story & Partner Verification Standard */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-stretch">
            
            <div className="lg:col-span-7 bg-white rounded-3xl p-5 sm:p-8 md:p-10 border border-slate-200/80 shadow-sm space-y-6 flex flex-col justify-between">
              <div className="space-y-4">
                <div className="inline-flex items-center space-x-2 text-indigo-700 text-xs font-bold uppercase tracking-wider">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>Our Story & Local Mission</span>
                </div>
                <h2 className="text-2xl sm:text-3xl font-black text-slate-900 font-sans tracking-tight">
                  Organizing Durgapur's Local Skilled Labor into a Trusted Agency
                </h2>
                <p className="text-slate-600 text-sm leading-relaxed">
                  Finding skilled electricians, plumbers, or AC mechanics in Durgapur used to mean relying on word-of-mouth, unverified rates, and unpredictable arrival times.
                </p>
                <p className="text-slate-600 text-sm leading-relaxed">
                  Durgapur Fix was founded to organize local skilled technicians with digital tools while guaranteeing customers background checks, standardized rate cards, and a dedicated 24/7 customer support helpline (+91 8250261385).
                </p>

                <div className="pt-2 space-y-3">
                  {[
                    '100% Police & Background-Verified Local Technicians',
                    'Upfront Rate Cards with Zero Hidden Visiting Charges',
                    '30-Day Free Re-visit Guarantee on All Repairs',
                    'Live Dispatch Tracking via Google Play Android App'
                  ].map((item, index) => (
                    <div key={index} className="flex items-center space-x-3 text-xs font-bold text-slate-800">
                      <div className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0">
                        <CheckCircle2 className="w-3.5 h-3.5" />
                      </div>
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-6 border-t border-slate-100 flex flex-wrap gap-3 sm:gap-4">
                <a
                  href={PLAY_STORE_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto min-h-[44px] px-6 py-3.5 bg-gradient-to-r from-indigo-600 via-indigo-700 to-blue-600 hover:from-indigo-700 hover:to-blue-700 text-white font-bold text-xs uppercase tracking-wider rounded-2xl shadow-lg shadow-indigo-600/20 transition-all flex items-center justify-center space-x-2 cursor-pointer"
                >
                  <Smartphone className="w-4 h-4 text-amber-300" />
                  <span>Get App on Google Play</span>
                </a>
                <a
                  href="tel:8250261385"
                  className="w-full sm:w-auto min-h-[44px] px-6 py-3.5 bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold text-xs uppercase tracking-wider rounded-2xl transition-all flex items-center justify-center space-x-2 cursor-pointer"
                >
                  <Phone className="w-4 h-4 text-slate-600" />
                  <span>Call 24/7 Helpline</span>
                </a>
              </div>
            </div>

            {/* 4-Step Verification Card */}
            <div className="lg:col-span-5 bg-slate-900 rounded-3xl p-5 sm:p-8 text-white space-y-6 border border-slate-800 shadow-xl flex flex-col justify-between">
              <div>
                <div className="inline-flex items-center space-x-2 text-amber-300 text-xs font-bold uppercase tracking-wider mb-3">
                  <ShieldCheck className="w-3.5 h-3.5" />
                  <span>Partner Safety Standard</span>
                </div>
                <h3 className="text-xl font-bold font-sans text-amber-300">
                  The 4-Step Partner Verification Standard
                </h3>
                <div className="space-y-3 text-xs mt-4">
                  {[
                    { step: '01', title: 'Identity & Address Check', desc: 'Aadhaar, Voter ID, and local residency verification in Durgapur district.' },
                    { step: '02', title: 'Skill Assessment Test', desc: 'Hands-on practical diagnosis and tool safety evaluation by senior master technicians.' },
                    { step: '03', title: 'Background Clearance', desc: 'Police clearance verification for home entry safety.' },
                    { step: '04', title: 'Rate Card Compliance', desc: 'Mandatory agreement to adhere strictly to Durgapur Fix official rate cards.' },
                  ].map((item) => (
                    <div key={item.step} className="flex items-start space-x-3 p-3 rounded-2xl bg-slate-800/80 border border-slate-700/60">
                      <span className="font-black text-amber-400 text-sm">{item.step}</span>
                      <div>
                        <h4 className="font-bold text-white text-xs">{item.title}</h4>
                        <p className="text-slate-400 mt-0.5 leading-relaxed text-[11px]">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-slate-800 text-xs text-slate-400 flex items-center justify-between">
                <span>Direct Management Line:</span>
                <a href="tel:8250261385" className="text-amber-400 font-bold hover:underline">
                  +91 8250261385
                </a>
              </div>
            </div>

          </div>
        </div>

        {/* Contact Info Grid + Form Container */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start pt-8 border-t border-slate-200">
          
          {/* Left: Contact Info Cards */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Direct Helpline Card */}
            <div className="bg-gradient-to-br from-indigo-900 via-slate-900 to-blue-950 text-white rounded-3xl p-5 sm:p-8 border border-indigo-500/20 shadow-xl space-y-6">
              <div className="flex items-center space-x-3">
                <div className="p-3 bg-amber-400 text-slate-950 rounded-2xl shrink-0">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white">Agency Customer Helpline</h3>
                  <p className="text-xs text-indigo-200">Available 24/7 for support & inquiry</p>
                </div>
              </div>

              <div className="space-y-3 pt-2">
                <a 
                  href="tel:8250261385" 
                  className="text-2xl font-black text-amber-400 block hover:underline"
                >
                  +91 8250261385
                </a>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Average phone wait time: under 45 seconds. Speak directly with a service manager.
                </p>
              </div>

              <div className="pt-4 border-t border-indigo-800/60 flex flex-wrap items-center justify-between gap-2 text-xs text-indigo-200">
                <span className="flex items-center space-x-1">
                  <Clock className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                  <span>Mon - Sun: 7:00 AM - 11:00 PM</span>
                </span>
                <span className="text-emerald-400 font-bold">Live Support</span>
              </div>
            </div>

            {/* Other Support Channels */}
            <div className="space-y-4">
              
              <a 
                href="https://wa.me/918250261385" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="bg-white p-4 sm:p-6 rounded-2xl border border-slate-200 shadow-xs flex items-center space-x-4 hover:border-emerald-300 hover:shadow-sm transition-all group cursor-pointer"
              >
                <div className="p-3 bg-emerald-100 text-emerald-700 rounded-xl shrink-0 group-hover:scale-105 transition-transform">
                  <MessageSquare className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-slate-900 group-hover:text-emerald-700 transition-colors">WhatsApp Support</h4>
                  <p className="text-xs text-slate-500 mt-0.5">+91 8250261385 for fast photo share</p>
                </div>
              </a>

              <a 
                href="mailto:support@durgapurfix.com" 
                className="bg-white p-4 sm:p-6 rounded-2xl border border-slate-200 shadow-xs flex items-center space-x-4 hover:border-indigo-300 hover:shadow-sm transition-all group cursor-pointer"
              >
                <div className="p-3 bg-indigo-100 text-indigo-700 rounded-xl shrink-0 group-hover:scale-105 transition-transform">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-slate-900 group-hover:text-indigo-700 transition-colors">Email Support</h4>
                  <p className="text-xs text-slate-500 mt-0.5">support@durgapurfix.com</p>
                </div>
              </a>

              <div className="bg-white p-4 sm:p-6 rounded-2xl border border-slate-200 shadow-xs flex items-center space-x-4">
                <div className="p-3 bg-amber-100 text-amber-700 rounded-xl shrink-0">
                  <Building2 className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-slate-900">Agency Headquarters</h4>
                  <p className="text-xs text-slate-500 mt-0.5">City Centre, Junction Mall Area, Durgapur, WB 713216</p>
                </div>
              </div>

            </div>

          </div>

          {/* Right: Contact Form */}
          <div className="lg:col-span-7">
            <div className="bg-white rounded-3xl p-5 sm:p-8 md:p-10 border border-slate-200 shadow-md">
              
              <div className="mb-6">
                <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900 font-sans">
                  Send Us a Direct Message
                </h3>
                <p className="text-xs text-slate-500 mt-1">
                  Fill out the form below and an agency service specialist will respond within 15 minutes.
                </p>
              </div>

              {submitted ? (
                <div className="bg-emerald-50 border border-emerald-200 text-emerald-800 p-6 rounded-2xl text-center space-y-3 animate-in fade-in">
                  <CheckCircle2 className="w-12 h-12 text-emerald-600 mx-auto" />
                  <h4 className="text-lg font-bold">Thank You! Message Received</h4>
                  <p className="text-xs text-emerald-700">
                    We have dispatched your inquiry to our customer care team. An agent will contact you shortly on {formData.phone || formData.email}.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">
                        Your Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="John Doe"
                        className="w-full min-h-[44px] bg-slate-50 border border-slate-200 rounded-xl px-3.5 py-2.5 text-xs text-slate-900 focus:outline-hidden focus:ring-2 focus:ring-indigo-500 focus:bg-white"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="john@example.com"
                        className="w-full min-h-[44px] bg-slate-50 border border-slate-200 rounded-xl px-3.5 py-2.5 text-xs text-slate-900 focus:outline-hidden focus:ring-2 focus:ring-indigo-500 focus:bg-white"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="+91 8250261385"
                        className="w-full min-h-[44px] bg-slate-50 border border-slate-200 rounded-xl px-3.5 py-2.5 text-xs text-slate-900 focus:outline-hidden focus:ring-2 focus:ring-indigo-500 focus:bg-white"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">
                        Service Category
                      </label>
                      <select
                        value={formData.serviceCategory}
                        onChange={(e) => setFormData({ ...formData, serviceCategory: e.target.value })}
                        className="w-full min-h-[44px] bg-slate-50 border border-slate-200 rounded-xl px-3.5 py-2.5 text-xs text-slate-900 focus:outline-hidden focus:ring-2 focus:ring-indigo-500 focus:bg-white cursor-pointer"
                      >
                        <option value="AC & Appliance Repair">AC & Appliance Repair</option>
                        <option value="Deep House Cleaning">Deep House Cleaning</option>
                        <option value="Electrical & Lighting">Electrical & Lighting</option>
                        <option value="Plumbing & Sanitary">Plumbing & Sanitary</option>
                        <option value="Painting & Waterproofing">Painting & Waterproofing</option>
                        <option value="Carpentry & Assembly">Carpentry & Assembly</option>
                        <option value="Pest Control">Pest Control</option>
                        <option value="Beauty & Salon at Home">Beauty & Salon at Home</option>
                        <option value="Android App Inquiry">Android App Technical Inquiry</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      Message / Issue Details *
                    </label>
                    <textarea
                      required
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Describe what home service or assistance you need..."
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3.5 py-2.5 text-xs text-slate-900 focus:outline-hidden focus:ring-2 focus:ring-indigo-500 focus:bg-white resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full min-h-[48px] py-3.5 bg-gradient-to-r from-indigo-600 via-indigo-700 to-blue-600 hover:from-indigo-700 hover:to-blue-700 text-white font-black text-xs uppercase tracking-wider rounded-xl shadow-lg shadow-indigo-600/20 transition-all flex items-center justify-center space-x-2 cursor-pointer"
                  >
                    <Send className="w-4 h-4 text-amber-300" />
                    <span>Submit Message</span>
                  </button>

                </form>
              )}

            </div>
          </div>

        </div>

        {/* FAQs Accordion Section */}
        <div className="pt-8 border-t border-slate-200 space-y-8">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <h3 className="text-2xl font-extrabold text-slate-900 font-sans">
              Frequently Asked Questions
            </h3>
            <p className="text-xs text-slate-500">
              Quick answers regarding booking, warranties, and our Android mobile app.
            </p>
          </div>

          {/* Category Filter for FAQs */}
          <div className="flex flex-wrap justify-center gap-2">
            {(['all', 'booking', 'pricing', 'safety', 'app'] as const).map((cat) => (
              <button
                key={cat}
                onClick={() => setFaqFilter(cat)}
                className={`px-3 py-1.5 rounded-xl text-xs font-bold uppercase tracking-wider transition-colors cursor-pointer ${
                  faqFilter === cat
                    ? 'bg-indigo-600 text-white'
                    : 'bg-white text-slate-600 border border-slate-200 hover:bg-slate-100'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* FAQ Accordions */}
          <div className="max-w-3xl mx-auto space-y-3">
            {filteredFaqs.map((faq) => (
              <div
                key={faq.id}
                className="bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-xs"
              >
                <button
                  onClick={() => setOpenFaqId(openFaqId === faq.id ? null : faq.id)}
                  className="w-full p-4 text-left flex items-center justify-between font-bold text-slate-900 text-sm hover:bg-slate-50 transition-colors cursor-pointer"
                >
                  <span className="flex items-center space-x-2">
                    <HelpCircle className="w-4 h-4 text-indigo-600 shrink-0" />
                    <span>{faq.question}</span>
                  </span>
                  {openFaqId === faq.id ? (
                    <ChevronUp className="w-4 h-4 text-slate-400 shrink-0 ml-2" />
                  ) : (
                    <ChevronDown className="w-4 h-4 text-slate-400 shrink-0 ml-2" />
                  )}
                </button>
                {openFaqId === faq.id && (
                  <div className="px-4 pb-4 text-xs text-slate-600 leading-relaxed border-t border-slate-100 pt-3">
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};
