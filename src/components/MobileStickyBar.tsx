import React from 'react';
import { Phone, MessageCircle } from 'lucide-react';
import { BusinessConfig } from '../types';

interface MobileStickyBarProps {
  business: BusinessConfig;
}

export const MobileStickyBar: React.FC<MobileStickyBarProps> = ({ business }) => {
  const whatsappUrl = `https://wa.me/${business.whatsapp}?text=${encodeURIComponent(
    `Hello ${business.name}, I would like to know more about your spa services, prices and available appointment timings in Indore.`
  )}`;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 sm:hidden bg-white/98 backdrop-blur-md border-t border-purple-200 px-3 py-2.5 shadow-2xl pb-[calc(0.65rem+env(safe-area-inset-bottom,0px))]">
      <div className="grid grid-cols-2 gap-2.5 max-w-sm mx-auto">
        {/* Call Now */}
        <a
          href={`tel:${business.phone}`}
          className="flex items-center justify-center gap-1.5 py-3 px-3 rounded-full text-xs font-bold text-purple-900 border-2 border-purple-300 bg-purple-50 active:scale-95 transition-all text-center whitespace-nowrap shadow-xs"
          aria-label="Call Spa Coordinator directly"
        >
          <Phone className="w-3.5 h-3.5 text-purple-700 shrink-0" />
          <span>Call Now</span>
        </a>

        {/* WhatsApp Booking */}
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-1.5 py-3 px-3 rounded-full text-xs font-bold uppercase tracking-wider text-white bg-purple-600 active:scale-95 transition-all text-center whitespace-nowrap shadow-md shadow-purple-600/25"
          aria-label="Book appointment via WhatsApp"
        >
          <MessageCircle className="w-3.5 h-3.5 fill-current shrink-0" />
          <span>WhatsApp Booking</span>
        </a>
      </div>
    </div>
  );
};
