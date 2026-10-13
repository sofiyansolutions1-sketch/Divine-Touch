import React, { useState } from 'react';
import { Menu, X, Phone, MessageCircle, MapPin } from 'lucide-react';
import { BusinessConfig } from '../types';

interface NavbarProps {
  business: BusinessConfig;
  onOpenOwnerConfig?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ business, onOpenOwnerConfig }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'Our Services', href: '#services' },
    { label: 'How It Works', href: '#how-it-works' },
    { label: 'Why Choose Us', href: '#why-us' },
    { label: 'Location & Map', href: '#location' },
    { label: 'Contact', href: '#contact' },
  ];

  const handleNavClick = (href: string) => {
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const whatsappUrl = `https://wa.me/${business.whatsapp}?text=${encodeURIComponent(
    `Hello ${business.name}, I would like to know more about your spa services, prices and available appointment timings in Indore.`
  )}`;

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-purple-100 shadow-xs transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-8 h-20">
          
          {/* Zone 1: Brand Wordmark */}
          <a
            href="#home"
            className="flex items-center gap-3 whitespace-nowrap shrink-0 group focus:outline-none focus-visible:ring-2 focus-visible:ring-purple-600"
          >
            <div className="w-11 h-11 rounded-2xl bg-purple-600 text-white flex items-center justify-center shadow-md shadow-purple-600/20 group-hover:bg-purple-700 transition-colors">
              <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M12 2C12 2 8 8 8 13C8 16.5 10 19 12 21C14 19 16 16.5 16 13C16 8 12 2 12 2Z" fill="white" fillOpacity="0.25" />
                <path d="M12 21C6 17 4 13 4 10C4 6 7 4 7 4" strokeLinecap="round" />
                <path d="M12 21C18 17 20 13 20 10C20 6 17 4 17 4" strokeLinecap="round" />
              </svg>
            </div>
            <div>
              <span className="font-serif text-xl sm:text-2xl font-bold tracking-tight text-slate-900 group-hover:text-purple-700 transition-colors">
                Divine Touch
              </span>
              <span className="hidden sm:block text-[11px] font-semibold text-purple-600 uppercase tracking-wider">
                Spa Center • Indore
              </span>
            </div>
          </a>

          {/* Zone 2: Navigation Links */}
          <nav className="hidden lg:flex items-center gap-7 text-sm font-semibold text-slate-700">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(link.href);
                }}
                className="whitespace-nowrap shrink-0 hover:text-purple-700 transition-colors relative py-1 focus:outline-none focus-visible:ring-2 focus-visible:ring-purple-600"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Zone 3: Direct Actions */}
          <div className="hidden sm:flex items-center gap-3 shrink-0">
            <a
              href={`tel:${business.phone}`}
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full text-xs font-semibold text-purple-800 bg-purple-50 hover:bg-purple-100 border border-purple-200 transition-colors"
              title="Call directly"
            >
              <Phone className="w-3.5 h-3.5 text-purple-600" />
              <span>{business.phoneDisplay}</span>
            </a>

            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-semibold uppercase tracking-wider text-white bg-purple-600 hover:bg-purple-700 shadow-md shadow-purple-600/20 transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-purple-600"
            >
              <MessageCircle className="w-4 h-4 fill-current" />
              <span>Book on WhatsApp</span>
            </a>
          </div>

          {/* Mobile Buttons */}
          <div className="flex items-center gap-2 lg:hidden">
            <a
              href={`tel:${business.phone}`}
              className="p-2 text-purple-700 hover:text-purple-800 rounded-xl border border-purple-200 bg-purple-50"
              aria-label="Call Direct"
            >
              <Phone className="w-4 h-4" />
            </a>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              type="button"
              className="p-2 rounded-xl text-slate-700 hover:text-purple-700 border border-purple-200 bg-white focus:outline-none focus:ring-2 focus:ring-purple-600"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-b border-purple-100 bg-white px-5 py-6 space-y-4 shadow-lg animate-fade-in">
          <nav className="flex flex-col space-y-3">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(link.href);
                }}
                className="text-base font-semibold text-slate-800 hover:text-purple-700 py-1.5 border-b border-slate-100"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="pt-2 flex flex-col gap-2.5">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl text-sm font-semibold uppercase tracking-wider text-white bg-purple-600 hover:bg-purple-700 shadow-md shadow-purple-600/20"
            >
              <MessageCircle className="w-4 h-4 fill-current" />
              Book on WhatsApp
            </a>

            <a
              href={`tel:${business.phone}`}
              className="w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl text-sm font-semibold text-purple-800 border border-purple-200 bg-purple-50"
            >
              <Phone className="w-4 h-4 text-purple-600" />
              Call Coordinator: {business.phoneDisplay}
            </a>

            <div className="pt-2 text-xs text-slate-500 flex items-center gap-1.5 justify-center">
              <MapPin className="w-3.5 h-3.5 text-purple-600" />
              <span>Chikitsak Nagar, Scheme 94, Indore</span>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
