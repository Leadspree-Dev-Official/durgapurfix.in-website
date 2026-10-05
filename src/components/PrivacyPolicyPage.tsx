import React from 'react';
import { 
  Shield, 
  Eye, 
  CheckCircle, 
  Printer, 
  ArrowLeft 
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export const PrivacyPolicyPage: React.FC = () => {
  const navigate = useNavigate();

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="bg-slate-50 min-h-screen py-12 sm:py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        
        {/* Back Button & Header */}
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

          <div className="flex items-center space-x-2">
            <button
              onClick={handlePrint}
              className="inline-flex items-center space-x-1.5 text-xs font-bold text-slate-700 bg-white border border-slate-200 px-3 py-2 rounded-xl hover:bg-slate-100 transition-colors cursor-pointer"
            >
              <Printer className="w-3.5 h-3.5 text-slate-500" />
              <span>Print Policy</span>
            </button>
          </div>
        </div>

        {/* Title Card */}
        <div className="bg-gradient-to-br from-slate-900 via-indigo-950 to-slate-950 text-white rounded-3xl p-6 sm:p-10 border border-slate-800 shadow-xl space-y-4">
          <div className="inline-flex items-center space-x-2 bg-amber-400/10 border border-amber-400/30 text-amber-300 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
            <Shield className="w-3.5 h-3.5" />
            <span>Legal Compliance & Privacy Governance</span>
          </div>

          <h1 className="text-2xl sm:text-4xl font-black font-sans tracking-tight text-white">
            Privacy Policy & Data Protection
          </h1>

          <div className="flex flex-wrap items-center gap-3 sm:gap-4 text-xs text-slate-400 pt-2 border-t border-slate-800">
            <span>Last Updated: August 2026</span>
            <span>•</span>
            <span>Effective Date: Immediate</span>
            <span>•</span>
            <span className="text-emerald-400 font-medium flex items-center space-x-1">
              <CheckCircle className="w-3.5 h-3.5" />
              <span>GDPR & CCPA Compliant</span>
            </span>
          </div>
        </div>

        {/* Main Document Content */}
        <div className="bg-white rounded-3xl p-6 sm:p-12 border border-slate-200 shadow-sm space-y-8 text-slate-700 text-sm leading-relaxed">
          
          {/* Summary Callout */}
          <div className="p-4 rounded-2xl bg-indigo-50/80 border border-indigo-100 text-indigo-950 space-y-2">
            <h3 className="font-bold text-indigo-900 text-sm flex items-center space-x-2">
              <Eye className="w-4 h-4 text-indigo-600" />
              <span>Privacy Summary at a Glance</span>
            </h3>
            <p className="text-xs text-indigo-900/80 leading-relaxed">
              Durgapur Fix (&quot;Agency&quot;, &quot;we&quot;, &quot;us&quot;) respects your privacy. We collect only essential personal information required to dispatch verified service technicians to your address in Durgapur, process payment receipts, and maintain service warranties on our official Android mobile application. We never sell your personal data to third-party marketing companies.
            </p>
          </div>

          {/* Section 1 */}
          <section className="space-y-3">
            <h2 className="text-lg font-black text-slate-900 font-sans flex items-center space-x-2">
              <span className="w-2 h-2 rounded-full bg-indigo-600" />
              <span>1. Information We Collect</span>
            </h2>
            <p>
              When you use our website, place a service booking, or download our official Android mobile application, we collect the following categories of information:
            </p>
            <ul className="list-disc pl-5 space-y-1.5 text-xs text-slate-600">
              <li><strong>Personal Identifiers:</strong> Name, phone number, email address, and service delivery address.</li>
              <li><strong>Service & Booking Details:</strong> Requested service category, issue descriptions, chosen pricing tier, preferred time slot, and technician feedback.</li>
              <li><strong>Mobile Device Data (Android App):</strong> Device model, OS version, app usage diagnostics, and push notification tokens for arrival alerts.</li>
              <li><strong>Location Data:</strong> Approximate GPS location used exclusively during active service bookings to pair you with the closest verified technician partner.</li>
            </ul>
          </section>

          {/* Section 2 */}
          <section className="space-y-3">
            <h2 className="text-lg font-black text-slate-900 font-sans flex items-center space-x-2">
              <span className="w-2 h-2 rounded-full bg-indigo-600" />
              <span>2. How We Use Your Information</span>
            </h2>
            <p>
              Your data is processed strictly for legitimate operational purposes:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs pt-1">
              <div className="p-3 rounded-xl bg-slate-50 border border-slate-200">
                <strong className="text-slate-900 block mb-1">Service Dispatch & ETA Tracking</strong>
                Assigning verified technicians and sending real-time SMS arrival notifications.
              </div>
              <div className="p-3 rounded-xl bg-slate-50 border border-slate-200">
                <strong className="text-slate-900 block mb-1">30-Day Warranty Management</strong>
                Maintaining job history records to honor free 30-day rework guarantees.
              </div>
              <div className="p-3 rounded-xl bg-slate-50 border border-slate-200">
                <strong className="text-slate-900 block mb-1">Payment Receipts</strong>
                Generating electronic itemized tax invoices and verifying secure digital payments.
              </div>
              <div className="p-3 rounded-xl bg-slate-50 border border-slate-200">
                <strong className="text-slate-900 block mb-1">Customer Care & Dispute Resolution</strong>
                Resolving service feedback or technical inquiries submitted through our contact channels.
              </div>
            </div>
          </section>

          {/* Section 3 */}
          <section className="space-y-3">
            <h2 className="text-lg font-black text-slate-900 font-sans flex items-center space-x-2">
              <span className="w-2 h-2 rounded-full bg-indigo-600" />
              <span>3. Android App Permissions Governance</span>
            </h2>
            <p>
              Our native Android application requests minimal system permissions strictly when needed:
            </p>
            <ul className="list-disc pl-5 space-y-1 text-xs text-slate-600">
              <li><strong>Location (FINE/COARSE):</strong> Used only during active booking creation to set service address or track technician proximity.</li>
              <li><strong>Camera/Storage:</strong> Used optionally if you attach a photo of an appliance fault or cleaning area for a quote.</li>
              <li><strong>Notifications:</strong> Used for arrival alerts, technician chat updates, and warranty expiration reminders.</li>
            </ul>
          </section>

          {/* Section 4 */}
          <section className="space-y-3">
            <h2 className="text-lg font-black text-slate-900 font-sans flex items-center space-x-2">
              <span className="w-2 h-2 rounded-full bg-indigo-600" />
              <span>4. Data Security & Storage</span>
            </h2>
            <p>
              All data transmissions across our web servers and Android application use AES-256 SSL encryption. Financial transactions are tokenized through PCI-DSS Level 1 certified payment gateways. We store service logs securely with strict role-based access control.
            </p>
          </section>

          {/* Section 5 */}
          <section className="space-y-3">
            <h2 className="text-lg font-black text-slate-900 font-sans flex items-center space-x-2">
              <span className="w-2 h-2 rounded-full bg-indigo-600" />
              <span>5. Your Data Protection Rights</span>
            </h2>
            <p>
              Under applicable privacy laws, you hold the following rights regarding your personal information:
            </p>
            <ul className="list-disc pl-5 space-y-1 text-xs text-slate-600">
              <li>Right to request a copy of all stored personal service records.</li>
              <li>Right to request immediate correction or deletion of your profile.</li>
              <li>Right to opt out of promotional SMS or email communications at any time.</li>
            </ul>
          </section>

          {/* Section 6 - DPO Contact */}
          <section className="pt-4 border-t border-slate-200">
            <div className="bg-slate-900 text-white rounded-2xl p-6 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div>
                <h4 className="font-bold text-white text-base">Questions for Data Protection Officer (DPO)?</h4>
                <p className="text-xs text-slate-400 mt-0.5">
                  Contact our legal team at privacy@durgapurfix.com or call +91 8250261385.
                </p>
              </div>
              <button
                onClick={() => {
                  navigate('/contact');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="px-4 py-2 bg-amber-400 text-slate-950 font-bold text-xs rounded-xl hover:bg-amber-300 transition-colors shrink-0 cursor-pointer"
              >
                Contact Legal Support
              </button>
            </div>
          </section>

        </div>

      </div>
    </div>
  );
};
