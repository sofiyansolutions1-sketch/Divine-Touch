import React from 'react';
import { Phone, MessageCircle, MapPin, Shield, Navigation } from 'lucide-react';
import { BusinessConfig, SpaService } from '../types';
import { LegalModalType } from './LegalModal';

interface FooterProps {
  business: BusinessConfig;
  services: SpaService[];
  onOpenLegal: (type: LegalModalType) => void;
  onOpenOwnerConfig: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  business,
  services,
  onOpenLegal,
}) => {
  const currentYear = new Date().getFullYear();

  const whatsappUrl = `https://wa.me/${business.whatsapp}?text=${encodeURIComponent(
    `Hello ${business.name}, I would like to know more about your spa services, prices and available appointment timings in Indore.`
  )}`;

  return (
    <footer className="bg-slate-900 text-slate-300 pt-16 pb-24 sm:pb-16 border-t-4 border-purple-600 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-12 border-b border-slate-800">
          
          {/* Column 1: Brand & Overview (Col 1-4) */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-2xl bg-purple-600 text-white flex items-center justify-center shadow-md">
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M12 2C12 2 8 8 8 13C8 16.5 10 19 12 21C14 19 16 16.5 16 13C16 8 12 2 12 2Z" fill="white" fillOpacity="0.25" />
                  <path d="M12 21C6 17 4 13 4 10C4 6 7 4 7 4" strokeLinecap="round" />
                  <path d="M12 21C18 17 20 13 20 10C20 6 17 4 17 4" strokeLinecap="round" />
                </svg>
              </div>
              <span className="font-serif text-xl font-bold text-white">
                {business.name}
              </span>
            </div>

            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
              Premium outcall spa and wellness service business in Indore, Madhya Pradesh. Relaxing therapies delivered to your home or hotel with utmost comfort and hygiene.
            </p>

            <div className="pt-2 text-xs text-purple-400 flex items-center gap-2 font-medium">
              <Shield className="w-4 h-4 text-purple-500" />
              <span>Prior Appointment Strictly Required</span>
            </div>
          </div>

          {/* Column 2: Navigation Links (Col 5-6) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="font-serif text-sm font-bold uppercase tracking-wider text-purple-400">
              Quick Links
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <a href="#home" className="hover:text-white transition-colors">Home</a>
              </li>
              <li>
                <a href="#services" className="hover:text-white transition-colors">Our Services</a>
              </li>
              <li>
                <a href="#how-it-works" className="hover:text-white transition-colors">How It Works</a>
              </li>
              <li>
                <a href="#why-us" className="hover:text-white transition-colors">Why Choose Us</a>
              </li>
              <li>
                <a href="#location" className="hover:text-white transition-colors">Location &amp; Map</a>
              </li>
              <li>
                <a href="#contact" className="hover:text-white transition-colors">Contact Us</a>
              </li>
            </ul>
          </div>

          {/* Column 3: Featured Treatments (Col 7-9) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="font-serif text-sm font-bold uppercase tracking-wider text-purple-400">
              Popular Services
            </h4>
            <ul className="space-y-2 text-xs">
              {services.slice(0, 5).map((service) => (
                <li key={service.id}>
                  <a href="#services" className="hover:text-white transition-colors">
                    {service.name}
                  </a>
                </li>
              ))}
              <li>
                <a href="#services" className="text-purple-400 hover:underline font-semibold">
                  All 8 Wellness Treatments →
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact & Full Address (Col 10-12) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="font-serif text-sm font-bold uppercase tracking-wider text-purple-400">
              Indore Office &amp; Contact
            </h4>
            
            <div className="space-y-2.5 text-xs text-slate-300">
              <a href={`tel:${business.phone}`} className="flex items-center gap-2 hover:text-white transition-colors font-semibold">
                <Phone className="w-3.5 h-3.5 text-purple-400" />
                <span>{business.phoneDisplay}</span>
              </a>

              <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-white transition-colors font-semibold">
                <MessageCircle className="w-3.5 h-3.5 text-emerald-400" />
                <span>WhatsApp: {business.whatsappDisplay}</span>
              </a>

              <div className="flex items-start gap-2 text-slate-400 pt-1">
                <MapPin className="w-3.5 h-3.5 text-purple-400 shrink-0 mt-0.5" />
                <div>
                  <span className="text-white font-medium block">
                    EF_174, Opposite Bombay Hospital Service Road, Scheme No. 94, Chikitsak Nagar, Indore, MP 452010
                  </span>
                </div>
              </div>
            </div>

            <div className="pt-2">
              <a
                href="#location"
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-purple-400 hover:text-purple-300"
              >
                <Navigation className="w-3 h-3" />
                <span>View on Google Map</span>
              </a>
            </div>
          </div>

        </div>

        {/* Legal & Bottom Row */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div>
            <p>
              © {currentYear} {business.name}. All rights reserved. Indore, Madhya Pradesh.
            </p>
          </div>

          {/* Legal Links */}
          <div className="flex items-center gap-4 sm:gap-6 flex-wrap justify-center">
            <button
              onClick={() => onOpenLegal('privacy')}
              className="hover:text-purple-400 transition-colors cursor-pointer"
            >
              Privacy Policy
            </button>
            <span aria-hidden="true">·</span>
            <button
              onClick={() => onOpenLegal('terms')}
              className="hover:text-purple-400 transition-colors cursor-pointer"
            >
              Terms &amp; Conditions
            </button>
            <span aria-hidden="true">·</span>
            <button
              onClick={() => onOpenLegal('cancellation')}
              className="hover:text-purple-400 transition-colors cursor-pointer"
            >
              Cancellation Policy
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};
