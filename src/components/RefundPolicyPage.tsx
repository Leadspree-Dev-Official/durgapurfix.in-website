import React from 'react';
import { 
  RotateCcw, 
  ShieldCheck, 
  Clock, 
  CheckCircle2, 
  HelpCircle, 
  Printer, 
  ArrowLeft,
  DollarSign,
  AlertCircle,
  FileCheck2,
  Phone
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export const RefundPolicyPage: React.FC = () => {
  const navigate = useNavigate();

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="bg-slate-50 min-h-screen py-12 sm:py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        
        {/* Navigation & Action Header */}
        <div className="flex items-center justify-between">
          <button
            onClick={() => {
              navigate('/');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="inline-flex items-center space-x-2 text-xs font-bold text-indigo-600 hover:text-indigo-800 bg-indigo-50 px-3.5 py-2 rounded-xl transition-colors cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Return to Home</span>
          </button>

          <button
            onClick={handlePrint}
            className="inline-flex items-center space-x-1.5 text-xs font-bold text-slate-700 bg-white border border-slate-200 px-3 py-2 rounded-xl hover:bg-slate-100 transition-colors cursor-pointer"
          >
            <Printer className="w-3.5 h-3.5 text-slate-500" />
            <span>Print Policy</span>
          </button>
        </div>

        {/* Title Banner */}
        <div className="bg-gradient-to-br from-slate-900 via-indigo-950 to-slate-950 text-white rounded-3xl p-6 sm:p-10 border border-slate-800 shadow-xl space-y-4">
          <div className="inline-flex items-center space-x-2 bg-amber-400/10 border border-amber-400/30 text-amber-300 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
            <RotateCcw className="w-3.5 h-3.5" />
            <span>Cancellation & Refund Protection Guarantee</span>
          </div>

          <h1 className="text-2xl sm:text-4xl font-black font-sans tracking-tight">
            Refund & Service Warranty Policy
          </h1>

          <p className="text-slate-300 text-xs sm:text-sm leading-relaxed max-w-2xl">
            At Durgapur Fix, customer satisfaction and transparent billing are our absolute top priorities. Read our official terms regarding booking cancellations, doorstep refunds, and our signature 30-Day Re-visit Guarantee.
          </p>

          <div className="pt-2 flex flex-wrap items-center gap-3 sm:gap-4 text-xs text-slate-400 font-medium">
            <span>Effective Date: January 1, 2026</span>
            <span>•</span>
            <span>Applies to: All Home Services in Durgapur</span>
          </div>
        </div>

        {/* Core Guarantee Summary Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
          <div className="bg-white rounded-3xl p-5 sm:p-6 border border-slate-200 shadow-xs space-y-2">
            <div className="w-10 h-10 rounded-2xl bg-emerald-100 text-emerald-700 flex items-center justify-center font-bold">
              <RotateCcw className="w-5 h-5" />
            </div>
            <h3 className="font-bold text-slate-900 text-sm font-sans">Free Cancellation</h3>
            <p className="text-xs text-slate-500 leading-relaxed">
              Cancel anytime before technician dispatch with 100% full refund and zero penalty fees.
            </p>
          </div>

          <div className="bg-white rounded-3xl p-5 sm:p-6 border border-slate-200 shadow-xs space-y-2">
            <div className="w-10 h-10 rounded-2xl bg-indigo-100 text-indigo-700 flex items-center justify-center font-bold">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <h3 className="font-bold text-slate-900 text-sm font-sans">30-Day Free Re-visit</h3>
            <p className="text-xs text-slate-500 leading-relaxed">
              If the same repair issue recurs within 30 days, we fix it at zero extra labor cost.
            </p>
          </div>

          <div className="bg-white rounded-3xl p-5 sm:p-6 border border-slate-200 shadow-xs space-y-2">
            <div className="w-10 h-10 rounded-2xl bg-amber-100 text-amber-700 flex items-center justify-center font-bold">
              <Clock className="w-5 h-5" />
            </div>
            <h3 className="font-bold text-slate-900 text-sm font-sans">3-5 Day Refunds</h3>
            <p className="text-xs text-slate-500 leading-relaxed">
              Approved refunds are credited directly back to your original payment mode or UPI within 3 to 5 banking days.
            </p>
          </div>
        </div>

        {/* Detailed Sections */}
        <div className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200 shadow-xs space-y-8 text-slate-700 text-sm leading-relaxed">
          
          {/* Section 1 */}
          <section className="space-y-3">
            <h2 className="text-lg font-bold text-slate-900 font-sans flex items-center space-x-2">
              <span className="w-6 h-6 rounded-lg bg-indigo-100 text-indigo-700 flex items-center justify-center text-xs">1</span>
              <span>Booking Cancellation Policy</span>
            </h2>
            <p>
              Customers can cancel any scheduled service booking via our Android Mobile Application or by calling our customer care hotline at <strong className="text-slate-900">+91 8250261385</strong>.
            </p>
            <ul className="list-disc pl-5 space-y-1.5 text-xs text-slate-600">
              <li><strong>Cancellation Before Technician Dispatch:</strong> 100% refund of any advance booking fee.</li>
              <li><strong>Cancellation After Technician Arrival:</strong> A nominal inspection/visiting fee of ₹99 applies if the customer decides not to proceed after diagnosis.</li>
              <li><strong>Unattended Appointments:</strong> If our partner arrives at the location and is unable to reach the customer after 3 phone attempts and a 15-minute grace wait, the booking is marked as unfulfilled.</li>
            </ul>
          </section>

          <hr className="border-slate-100" />

          {/* Section 2 */}
          <section className="space-y-3">
            <h2 className="text-lg font-bold text-slate-900 font-sans flex items-center space-x-2">
              <span className="w-6 h-6 rounded-lg bg-indigo-100 text-indigo-700 flex items-center justify-center text-xs">2</span>
              <span>The 30-Day Service Warranty & Re-visit Guarantee</span>
            </h2>
            <p>
              Every completed repair or installation carries a standard <strong>30-Day Durgapur Fix Service Warranty</strong> covering labor craftsmanship:
            </p>
            <div className="bg-indigo-50/60 p-4 rounded-2xl border border-indigo-100 space-y-2 text-xs text-indigo-900">
              <div className="font-bold flex items-center space-x-1.5">
                <CheckCircle2 className="w-4 h-4 text-indigo-600" />
                <span>How the Re-visit Guarantee Works:</span>
              </div>
              <p>
                If the specific fault or issue reported during the original service recurs within 30 days of job completion, Durgapur Fix will re-assign a technician to inspect and fix the issue at <strong>zero additional labor charge</strong>.
              </p>
            </div>
          </section>

          <hr className="border-slate-100" />

          {/* Section 3 */}
          <section className="space-y-3">
            <h2 className="text-lg font-bold text-slate-900 font-sans flex items-center space-x-2">
              <span className="w-6 h-6 rounded-lg bg-indigo-100 text-indigo-700 flex items-center justify-center text-xs">3</span>
              <span>Spare Parts Warranty & Replacement Policy</span>
            </h2>
            <p>
              Spare parts supplied and installed directly by Durgapur Fix partners carry manufacturer/vendor warranty cards provided at the time of installation.
            </p>
            <ul className="list-disc pl-5 space-y-1.5 text-xs text-slate-600">
              <li>If a newly fitted spare part fails within its designated warranty period (e.g., 3 to 12 months depending on the manufacturer), we facilitate part replacement free of cost.</li>
              <li>Durgapur Fix is not liable for issues resulting from pre-existing customer-supplied spare parts.</li>
            </ul>
          </section>

          <hr className="border-slate-100" />

          {/* Section 4 */}
          <section className="space-y-3">
            <h2 className="text-lg font-bold text-slate-900 font-sans flex items-center space-x-2">
              <span className="w-6 h-6 rounded-lg bg-indigo-100 text-indigo-700 flex items-center justify-center text-xs">4</span>
              <span>Refund Processing & Timelines</span>
            </h2>
            <p>
              For eligible refunds (overcharges, canceled prepaid orders, or service dissatisfaction claims approved by our quality team):
            </p>
            <div className="bg-slate-50 p-4 rounded-2xl border border-slate-200 space-y-2 text-xs text-slate-700">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <strong>Prepaid Online Payments (UPI, Cards, NetBanking):</strong>
                  <p className="text-slate-500 mt-0.5">Refunded directly back to original account within 3 to 5 working days.</p>
                </div>
                <div>
                  <strong>Cash Payments:</strong>
                  <p className="text-slate-500 mt-0.5">Refunded via instant UPI transfer or account credit within 24 hours.</p>
                </div>
              </div>
            </div>
          </section>

          <hr className="border-slate-100" />

          {/* Section 5 */}
          <section className="space-y-3">
            <h2 className="text-lg font-bold text-slate-900 font-sans flex items-center space-x-2">
              <span className="w-6 h-6 rounded-lg bg-indigo-100 text-indigo-700 flex items-center justify-center text-xs">5</span>
              <span>Dispute Resolution & Helpline</span>
            </h2>
            <p>
              If you have any grievance or wish to request a service review:
            </p>
            <div className="p-4 rounded-2xl bg-amber-50 border border-amber-200 text-xs text-amber-900 flex items-center justify-between">
              <div>
                <strong>Support Email:</strong> refunds@durgapurfix.com <br />
                <strong>Helpline:</strong> +91 8250261385 (Mon-Sun, 7 AM - 11 PM)
              </div>
              <button
                onClick={() => navigate('/contact')}
                className="px-4 py-2 bg-slate-900 text-white font-bold rounded-xl hover:bg-indigo-600 transition-colors shrink-0 cursor-pointer"
              >
                Contact Helpdesk &rarr;
              </button>
            </div>
          </section>

        </div>

      </div>
    </div>
  );
};
