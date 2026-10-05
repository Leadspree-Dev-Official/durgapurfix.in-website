import React, { useState } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { HeroSection } from './components/HeroSection';
import { TrustBadges } from './components/TrustBadges';
import { AppFirstShowcase } from './components/AppFirstShowcase';
import { AppSpotlight } from './components/AppSpotlight';
import { Testimonials } from './components/Testimonials';
import { FaqPage } from './components/FaqPage';
import { ContactPage } from './components/ContactPage';
import { PrivacyPolicyPage } from './components/PrivacyPolicyPage';
import { RefundPolicyPage } from './components/RefundPolicyPage';
import { AppModal } from './components/AppModal';

export default function App() {
  const [isAppModalOpen, setIsAppModalOpen] = useState(false);

  return (
    <BrowserRouter>
      <div className="min-h-screen bg-slate-50 text-slate-900 font-sans selection:bg-amber-400 selection:text-slate-950 flex flex-col justify-between">
        
        {/* Navigation Header */}
        <Header onOpenAppModal={() => setIsAppModalOpen(true)} />

        {/* Main Router Content */}
        <main className="flex-grow">
          <Routes>
            {/* Home Route */}
            <Route
              path="/"
              element={
                <>
                  <HeroSection onOpenAppModal={() => setIsAppModalOpen(true)} />
                  <TrustBadges />
                  <AppFirstShowcase onOpenAppModal={() => setIsAppModalOpen(true)} />
                  <AppSpotlight />
                  <Testimonials />
                </>
              }
            />

            {/* Contact & About Agency Route */}
            <Route
              path="/contact"
              element={<ContactPage onOpenAppModal={() => setIsAppModalOpen(true)} />}
            />

            {/* Customer Reviews Route */}
            <Route
              path="/reviews"
              element={
                <div className="py-8">
                  <Testimonials />
                </div>
              }
            />

            {/* FAQ Route */}
            <Route
              path="/faq"
              element={<FaqPage onOpenAppModal={() => setIsAppModalOpen(true)} />}
            />

            {/* Privacy Policy Route */}
            <Route path="/privacy" element={<PrivacyPolicyPage />} />

            {/* Refund Policy Route */}
            <Route path="/refund" element={<RefundPolicyPage />} />

            {/* Fallback Catch-all Route */}
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </main>

        {/* Footer */}
        <Footer onOpenAppModal={() => setIsAppModalOpen(true)} />

        {/* Mobile App Download Modal */}
        {isAppModalOpen && (
          <AppModal onClose={() => setIsAppModalOpen(false)} />
        )}

      </div>
    </BrowserRouter>
  );
}
