import React from 'react';
import { Phone, MessageCircle, MapPin, Clock, ShieldCheck, Mail } from 'lucide-react';
import { BusinessConfig, SpaService } from '../types';
import { BookingInquiryForm } from './BookingInquiryForm';

interface ContactSectionProps {
  business: BusinessConfig;
  services: SpaService[];
}

export const ContactSection: React.FC<ContactSectionProps> = ({ business, services }) => {
  const whatsappUrl = `https://wa.me/${business.whatsapp}?text=${encodeURIComponent(
    `Hello ${business.name}, I would like to know more about your spa services, prices and available appointment timings in Indore.`
  )}`;

  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-purple-50/50 via-white to-purple-50/30 relative overflow-hidden border-t border-purple-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-purple-50 text-purple-700 text-xs font-semibold uppercase tracking-wider mb-3">
            <Phone className="w-3.5 h-3.5 text-purple-600" />
            <span>Direct Contact &amp; Booking</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 tracking-tight text-balance">
            Contact Divine Touch
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-600 leading-relaxed">
            Reach out directly to our admin team for instant pricing, therapy consultation, and appointment bookings in Indore.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-start">
          
          {/* Left Column: Business Details & Large Call / WhatsApp Action Buttons */}
          <div className="lg:col-span-5 space-y-6">
            <div className="rounded-3xl bg-white border-2 border-purple-200 p-6 sm:p-8 space-y-6 shadow-sm">
              <div>
                <span className="text-xs uppercase tracking-wider text-purple-700 font-bold bg-purple-50 px-3 py-1 rounded-full">
                  Outcall Spa Services
                </span>
                <h3 className="font-serif text-2xl font-bold text-slate-900 mt-2">
                  {business.name}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 mt-2 leading-relaxed">
                  Dedicated wellness services delivered directly to your home, hotel, or private destination in Indore.
                </p>
              </div>

              {/* Large Action Buttons: Call Now & Chat on WhatsApp */}
              <div className="space-y-3 pt-2">
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2.5 py-4 px-6 rounded-full text-xs sm:text-sm font-bold uppercase tracking-wider text-white bg-purple-600 hover:bg-purple-700 shadow-xl shadow-purple-600/25 transition-all text-center"
                >
                  <MessageCircle className="w-5 h-5 fill-current" />
                  <span>Chat on WhatsApp: {business.whatsappDisplay}</span>
                </a>

                <a
                  href={`tel:${business.phone}`}
                  className="w-full flex items-center justify-center gap-2.5 py-4 px-6 rounded-full text-xs sm:text-sm font-bold text-purple-900 border-2 border-purple-300 bg-purple-50 hover:bg-purple-100 transition-all text-center"
                >
                  <Phone className="w-4 h-4 text-purple-600" />
                  <span>Call Now: {business.phoneDisplay}</span>
                </a>
              </div>

              {/* Verified Address & Contact Breakdown */}
              <div className="space-y-4 pt-4 border-t border-purple-100">
                {/* Full Address */}
                <div className="flex items-start gap-3 text-xs sm:text-sm">
                  <div className="p-2 rounded-xl bg-purple-50 text-purple-600 shrink-0 mt-0.5">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-slate-400 block text-[11px] font-semibold uppercase">Business Address</span>
                    <p className="text-slate-900 font-bold mt-0.5">
                      {business.referenceAddress}
                    </p>
                    <p className="text-[11px] text-purple-700 font-medium mt-1">
                      Landmark: {business.landmark}
                    </p>
                  </div>
                </div>

                {/* Primary Phone */}
                <div className="flex items-start gap-3 text-xs sm:text-sm">
                  <div className="p-2 rounded-xl bg-purple-50 text-purple-600 shrink-0 mt-0.5">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-slate-400 block text-[11px] font-semibold uppercase">Phone Number</span>
                    <a href={`tel:${business.phone}`} className="text-purple-700 hover:text-purple-900 font-bold text-base">
                      {business.phoneDisplay}
                    </a>
                  </div>
                </div>

                {/* WhatsApp */}
                <div className="flex items-start gap-3 text-xs sm:text-sm">
                  <div className="p-2 rounded-xl bg-purple-50 text-purple-600 shrink-0 mt-0.5">
                    <MessageCircle className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-slate-400 block text-[11px] font-semibold uppercase">WhatsApp Desk</span>
                    <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="text-purple-700 hover:text-purple-900 font-bold text-base">
                      {business.whatsappDisplay}
                    </a>
                  </div>
                </div>

                {/* Hours */}
                <div className="flex items-start gap-3 text-xs sm:text-sm">
                  <div className="p-2 rounded-xl bg-purple-50 text-purple-600 shrink-0 mt-0.5">
                    <Clock className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-slate-400 block text-[11px] font-semibold uppercase">Operating Hours</span>
                    <span className="text-slate-800 font-medium">{business.operatingHours}</span>
                  </div>
                </div>
              </div>

              {/* Privacy assurance */}
              <div className="pt-2 flex items-center gap-2 text-xs text-slate-500">
                <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Customer privacy and discreet service respected at all times.</span>
              </div>
            </div>
          </div>

          {/* Right Column: WhatsApp Booking Inquiry Form */}
          <div className="lg:col-span-7">
            <BookingInquiryForm business={business} services={services} />
          </div>

        </div>

      </div>
    </section>
  );
};
