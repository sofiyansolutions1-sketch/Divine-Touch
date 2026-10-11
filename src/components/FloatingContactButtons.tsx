import React, { useState } from 'react';
import { Phone, MessageCircle } from 'lucide-react';
import { BusinessConfig } from '../types';

interface FloatingContactButtonsProps {
  business: BusinessConfig;
}

export const FloatingContactButtons: React.FC<FloatingContactButtonsProps> = ({ business }) => {
  const [showTooltip, setShowTooltip] = useState(false);

  const whatsappUrl = `https://wa.me/${business.whatsapp}?text=${encodeURIComponent(
    `Hello ${business.name}, I would like to know more about your spa services, prices and available appointment timings in Indore.`
  )}`;

  return (
    <div
      className="fixed right-4 sm:right-6 bottom-20 sm:bottom-8 z-50 flex flex-col items-end gap-3 pointer-events-auto"
      onMouseEnter={() => setShowTooltip(true)}
      onMouseLeave={() => setShowTooltip(false)}
    >
      {/* Tooltip on hover */}
      {showTooltip && (
        <div className="hidden sm:block mb-1 px-3 py-1.5 rounded-xl bg-slate-900 text-white text-xs shadow-xl whitespace-nowrap animate-fade-in font-medium border border-slate-700">
          Chat or Call our Indore Coordinator
        </div>
      )}

      {/* Phone Call Floating Button (Royal Purple) */}
      <a
        href={`tel:${business.phone}`}
        className="w-13 h-13 sm:w-14 sm:h-14 rounded-full bg-purple-600 hover:bg-purple-700 text-white shadow-xl shadow-purple-600/30 flex items-center justify-center transition-all duration-300 hover:scale-110 group focus:outline-none focus:ring-4 focus:ring-purple-300 cursor-pointer"
        title={`Call ${business.name}: ${business.phoneDisplay}`}
        aria-label="Call Spa Coordinator Directly"
      >
        <Phone className="w-6 h-6 group-hover:rotate-12 transition-transform" />
      </a>

      {/* WhatsApp Floating Button (Official Green) */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="w-13 h-13 sm:w-14 sm:h-14 rounded-full bg-[#25D366] hover:bg-[#20ba5a] text-white shadow-xl shadow-[#25D366]/35 flex items-center justify-center transition-all duration-300 hover:scale-110 focus:outline-none focus:ring-4 focus:ring-emerald-300 cursor-pointer"
        title="Chat on WhatsApp"
        aria-label="Book on WhatsApp"
      >
        <MessageCircle className="w-7 h-7 fill-current" />
      </a>
    </div>
  );
};
