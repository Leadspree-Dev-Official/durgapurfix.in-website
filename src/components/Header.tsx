import React, { useState, useRef, useEffect } from 'react';
import { DurgapurFixLogo } from './DurgapurFixLogo';
import { 
  ShieldCheck, 
  Smartphone, 
  Phone, 
  Menu, 
  X, 
  ChevronRight,
  ChevronDown,
  MessageSquare,
  HelpCircle,
  Star,
  FileText,
  RefreshCw,
  LogIn
} from 'lucide-react';
import { useNavigate, useLocation } from 'react-router-dom';
import { PLAY_STORE_URL } from '../constants';

interface HeaderProps {
  onOpenAppModal: () => void;
}

interface MoreNavItem {
  label: string;
  path: string;
  icon?: React.ComponentType<{ className?: string }>;
  isExternal: boolean;
}

export const Header: React.FC<HeaderProps> = ({ onOpenAppModal }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [moreDropdownOpen, setMoreDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();
  const location = useLocation();

  const currentPath = location.pathname;

  // More dropdown items: 1st item is Login (with LogIn icon matching other menu items), followed by Reviews, Privacy, Refund
  const moreNavItems: MoreNavItem[] = [
    { label: 'Login', path: 'https://app.durgapurfix.in', icon: LogIn, isExternal: true },
    { label: 'Customer Reviews', path: '/reviews', icon: Star, isExternal: false },
    { label: 'Privacy Policy', path: '/privacy', icon: FileText, isExternal: false },
    { label: 'Refund Policy', path: '/refund', icon: RefreshCw, isExternal: false },
  ];

  const isMoreActive = moreNavItems.some((item) => !item.isExternal && item.path === currentPath);

  // Close dropdown on click outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setMoreDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleNavClick = (path: string) => {
    navigate(path);
    setMobileMenuOpen(false);
    setMoreDropdownOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleItemClick = (item: { path: string; isExternal?: boolean }) => {
    if (item.isExternal) {
      window.location.href = item.path;
    } else {
      handleNavClick(item.path);
    }
  };

  const getBreadcrumbTitle = (path: string) => {
    switch (path) {
      case '/contact': return 'Contact & About Durgapur Fix';
      case '/reviews': return 'Customer Reviews & Ratings';
      case '/faq': return 'FAQ';
      case '/privacy': return 'Privacy Policy & Terms';
      case '/refund': return 'Refund & Service Guarantee Policy';
      default: return '';
    }
  };

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-100 shadow-xs">
      {/* Top Banner Notice */}
      <div className="bg-gradient-to-r from-indigo-900 via-indigo-800 to-blue-900 text-white text-xs py-1.5 px-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-2 truncate">
            <span className="text-amber-300 font-extrabold text-[11px] uppercase tracking-wider">
              Official Android App
            </span>
            <span aria-hidden="true" className="text-indigo-400">·</span>
            <span className="text-indigo-100 hidden sm:inline">
              Book doorstep services with real-time GPS technician tracking on Google Play.
            </span>
          </div>
          <div className="flex items-center space-x-4 shrink-0 text-indigo-200 text-xs">
            <a 
              href="tel:8250261385" 
              className="hover:text-white flex items-center space-x-1 transition-colors"
            >
              <Phone className="w-3 h-3 text-amber-400" />
              <span className="font-semibold text-white">+91 8250261385</span>
            </a>
            <span className="hidden md:inline border-r border-indigo-700 h-3"></span>
            <span className="hidden md:flex items-center space-x-1 text-emerald-400 font-medium">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>30-Day Guarantee</span>
            </span>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          
          {/* Brand Logo */}
          <button 
            onClick={() => handleNavClick('/')} 
            className="flex items-center group text-left cursor-pointer focus:outline-hidden hover:opacity-95 transition-opacity"
          >
            <DurgapurFixLogo size="md" theme="light" />
          </button>

          {/* Desktop Nav Links (Max 4 items: Home, Mobile App, FAQ, More) */}
          <nav className="hidden lg:flex items-center space-x-1">
            {/* 1. Home */}
            <button
              onClick={() => handleNavClick('/')}
              className={`px-4 py-2 rounded-xl text-xs xl:text-sm font-semibold transition-all cursor-pointer whitespace-nowrap ${
                currentPath === '/'
                  ? 'bg-indigo-50 text-indigo-700 font-bold shadow-xs'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
              }`}
            >
              Home
            </button>

            {/* 2. Mobile App */}
            <a
              href={PLAY_STORE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 rounded-xl text-xs xl:text-sm font-semibold transition-all cursor-pointer whitespace-nowrap text-slate-600 hover:text-indigo-700 hover:bg-slate-50 flex items-center space-x-1.5"
            >
              <Smartphone className="w-3.5 h-3.5 text-indigo-600" />
              <span>Mobile App</span>
            </a>

            {/* 3. FAQ */}
            <button
              onClick={() => handleNavClick('/faq')}
              className={`px-4 py-2 rounded-xl text-xs xl:text-sm font-semibold transition-all cursor-pointer whitespace-nowrap flex items-center space-x-1.5 ${
                currentPath === '/faq'
                  ? 'bg-indigo-50 text-indigo-700 font-bold shadow-xs'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
              }`}
            >
              <HelpCircle className="w-3.5 h-3.5 text-indigo-600" />
              <span>FAQ</span>
            </button>

            {/* 4. More Dropdown Button */}
            <div className="relative" ref={dropdownRef}>
              <button
                onClick={() => setMoreDropdownOpen(!moreDropdownOpen)}
                className={`px-4 py-2 rounded-xl text-xs xl:text-sm font-semibold transition-all cursor-pointer whitespace-nowrap flex items-center space-x-1.5 ${
                  isMoreActive || moreDropdownOpen
                    ? 'bg-indigo-50 text-indigo-700 font-bold shadow-xs'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
                }`}
              >
                <span>More</span>
                <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${moreDropdownOpen ? 'rotate-180 text-indigo-600' : 'text-slate-400'}`} />
              </button>

              {/* Dropdown Menu Popup (Contains Reviews, Login, Privacy, Refund) */}
              {moreDropdownOpen && (
                <div className="absolute right-0 mt-2 w-56 bg-white rounded-2xl shadow-2xl border border-slate-100 py-2 z-50 animate-in fade-in slide-in-from-top-2 duration-150">
                  <div className="px-3 py-1.5 text-[10px] font-bold text-slate-400 uppercase tracking-wider">
                    Quick Links
                  </div>
                  {moreNavItems.map((item) => {
                    const IconComp = item.icon;
                    const isSubActive = !item.isExternal && currentPath === item.path;

                    if (item.isExternal) {
                      return (
                        <a
                          key={item.label}
                          href={item.path}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-full text-left px-3.5 py-2.5 text-xs font-semibold flex items-center space-x-2.5 text-slate-700 hover:bg-slate-50 hover:text-slate-900 transition-colors cursor-pointer"
                        >
                          {IconComp && <IconComp className="w-4 h-4 text-slate-400" />}
                          <span>{item.label}</span>
                        </a>
                      );
                    }

                    return (
                      <button
                        key={item.label}
                        onClick={() => handleItemClick(item)}
                        className={`w-full text-left px-3.5 py-2.5 text-xs font-semibold flex items-center space-x-2.5 transition-colors cursor-pointer ${
                          isSubActive
                            ? 'bg-indigo-50 text-indigo-700 font-bold'
                            : 'text-slate-700 hover:bg-slate-50 hover:text-slate-900'
                        }`}
                      >
                        <IconComp className={`w-4 h-4 ${isSubActive ? 'text-indigo-600' : 'text-slate-400'}`} />
                        <span>{item.label}</span>
                      </button>
                    );
                  })}
                </div>
              )}
            </div>
          </nav>

          {/* Right Action Buttons */}
          <div className="hidden sm:flex items-center space-x-3">
            <button
              onClick={() => handleNavClick('/contact')}
              className="px-4 py-2.5 rounded-xl text-xs font-bold text-slate-700 bg-slate-100 hover:bg-slate-200 transition-colors flex items-center space-x-1.5 cursor-pointer"
            >
              <MessageSquare className="w-3.5 h-3.5 text-slate-500" />
              <span>Contact Us</span>
            </button>

            <a
              href={PLAY_STORE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2.5 rounded-xl text-xs font-bold text-white bg-gradient-to-r from-indigo-600 via-indigo-700 to-blue-600 hover:from-indigo-700 hover:to-blue-700 shadow-md shadow-indigo-600/25 transition-all flex items-center space-x-2 cursor-pointer hover:scale-[1.02]"
            >
              <Smartphone className="w-4 h-4 text-amber-300" />
              <span>Get on Google Play</span>
            </a>
          </div>

          {/* Mobile menu toggle */}
          <div className="lg:hidden flex items-center space-x-2">
            <a
              href={PLAY_STORE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="sm:hidden p-2 text-indigo-600 bg-indigo-50 rounded-xl flex items-center justify-center"
              title="Android App"
            >
              <Smartphone className="w-5 h-5" />
            </a>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2.5 rounded-xl text-slate-600 hover:text-slate-900 hover:bg-slate-100 transition-colors focus:outline-hidden"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-slate-200 px-4 pt-3 pb-6 space-y-3 shadow-xl animate-in slide-in-from-top duration-200 max-h-[calc(100dvh-4rem)] overflow-y-auto">
          <div className="space-y-1">
            {/* 1. Home */}
            <button
              onClick={() => handleNavClick('/')}
              className={`w-full min-h-[44px] text-left px-4 py-3 rounded-xl text-sm font-semibold flex items-center justify-between ${
                currentPath === '/'
                  ? 'bg-indigo-600 text-white shadow-sm'
                  : 'text-slate-700 hover:bg-slate-50'
              }`}
            >
              <span>Home</span>
              <ChevronRight className={`w-4 h-4 ${currentPath === '/' ? 'text-white' : 'text-slate-400'}`} />
            </button>

            {/* 2. Mobile App */}
            <a
              href={PLAY_STORE_URL}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full min-h-[44px] text-left px-4 py-3 rounded-xl text-sm font-semibold flex items-center justify-between text-slate-700 hover:bg-slate-50"
            >
              <div className="flex items-center space-x-2">
                <Smartphone className="w-4 h-4 text-indigo-600" />
                <span>Download Android App</span>
              </div>
              <ChevronRight className="w-4 h-4 text-slate-400" />
            </a>

            {/* 3. FAQ */}
            <button
              onClick={() => handleNavClick('/faq')}
              className={`w-full min-h-[44px] text-left px-4 py-3 rounded-xl text-sm font-semibold flex items-center justify-between ${
                currentPath === '/faq'
                  ? 'bg-indigo-600 text-white shadow-sm'
                  : 'text-slate-700 hover:bg-slate-50'
              }`}
            >
              <div className="flex items-center space-x-2">
                <HelpCircle className="w-4 h-4 text-indigo-400" />
                <span>FAQ</span>
              </div>
              <ChevronRight className={`w-4 h-4 ${currentPath === '/faq' ? 'text-white' : 'text-slate-400'}`} />
            </button>

            {/* Sub-items in Mobile Menu under More */}
            <div className="pt-2">
              <div className="px-4 py-1 text-[11px] font-bold text-slate-400 uppercase tracking-wider">
                More Pages
              </div>
              <div className="mt-1 space-y-1 pl-2">
                {moreNavItems.map((item) => {
                  const IconComp = item.icon;
                  const isActive = !item.isExternal && currentPath === item.path;

                  if (item.isExternal) {
                    return (
                      <a
                        key={item.label}
                        href={item.path}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={() => setMobileMenuOpen(false)}
                        className="w-full min-h-[44px] text-left px-3.5 py-2.5 rounded-xl text-xs font-semibold flex items-center justify-between text-slate-600 hover:bg-slate-50"
                      >
                        <div className="flex items-center space-x-2.5">
                          {IconComp && <IconComp className="w-4 h-4 text-slate-400" />}
                          <span>{item.label}</span>
                        </div>
                        <ChevronRight className="w-3.5 h-3.5 text-slate-300" />
                      </a>
                    );
                  }

                  return (
                    <button
                      key={item.label}
                      onClick={() => handleItemClick(item)}
                      className={`w-full min-h-[44px] text-left px-3.5 py-2.5 rounded-xl text-xs font-semibold flex items-center justify-between ${
                        isActive
                          ? 'bg-indigo-50 text-indigo-700 font-bold'
                          : 'text-slate-600 hover:bg-slate-50'
                      }`}
                    >
                      <div className="flex items-center space-x-2.5">
                        <IconComp className={`w-4 h-4 ${isActive ? 'text-indigo-600' : 'text-slate-400'}`} />
                        <span>{item.label}</span>
                      </div>
                      <ChevronRight className="w-3.5 h-3.5 text-slate-300" />
                    </button>
                  );
                })}
              </div>
            </div>
          </div>

          <div className="pt-3 border-t border-slate-100 space-y-2">
            <button
              onClick={() => handleNavClick('/contact')}
              className="w-full min-h-[44px] py-3 rounded-xl text-sm font-bold text-slate-800 bg-slate-100 hover:bg-slate-200 transition-colors flex items-center justify-center space-x-2 cursor-pointer"
            >
              <Phone className="w-4 h-4 text-slate-600" />
              <span>Contact Us</span>
            </button>
            <a
              href={PLAY_STORE_URL}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full min-h-[44px] py-3 rounded-xl text-sm font-bold text-white bg-gradient-to-r from-indigo-600 to-blue-600 flex items-center justify-center space-x-2 shadow-md shadow-indigo-600/20 cursor-pointer"
            >
              <Smartphone className="w-4 h-4 text-amber-300" />
              <span>Get App on Google Play</span>
            </a>
          </div>
        </div>
      )}

      {/* Secondary Breadcrumb Navigation Bar for inner pages */}
      {currentPath !== '/' && (
        <div className="bg-slate-100/90 border-t border-slate-200/80 py-2 px-4 text-xs font-semibold text-slate-600">
          <div className="max-w-7xl mx-auto flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <button onClick={() => handleNavClick('/')} className="hover:text-indigo-600 transition-colors cursor-pointer">
                Home
              </button>
              <span className="text-slate-400">/</span>
              <span className="text-indigo-700 font-bold">
                {getBreadcrumbTitle(currentPath)}
              </span>
            </div>
            <button 
              onClick={() => handleNavClick('/')}
              className="text-slate-500 hover:text-indigo-600 text-[11px] font-bold cursor-pointer"
            >
              &larr; Back to Home Overview
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
