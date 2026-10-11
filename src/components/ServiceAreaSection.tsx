import React, { useState } from 'react';
import { MapPin, MessageCircle, Search, CheckCircle2 } from 'lucide-react';
import { BusinessConfig, ServiceArea } from '../types';

interface ServiceAreaSectionProps {
  business: BusinessConfig;
  areas: ServiceArea[];
}

export const ServiceAreaSection: React.FC<ServiceAreaSectionProps> = ({ business, areas }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredAreas = areas.filter(
    (area) =>
      area.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      area.zone.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const checkAreaWhatsappUrl = (areaName?: string) => {
    const text = areaName
      ? `Hello ${business.name}, I would like to check if outcall spa services are available in ${areaName}, Indore.`
      : `Hello ${business.name}, I would like to check if outcall spa services are available in my locality in Indore.`;
    return `https://wa.me/${business.whatsapp}?text=${encodeURIComponent(text)}`;
  };

  return (
    <section id="service-area" className="py-20 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-purple-50 text-purple-700 text-xs font-semibold uppercase tracking-wider mb-3">
            <MapPin className="w-3.5 h-3.5 text-purple-600" />
            <span>Indore Coverage Guide</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 tracking-tight text-balance">
            Spa Services Across Indore
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-600 leading-relaxed">
            Contact Divine Touch to check whether outcall services are available in your area of Indore. Our team will confirm location coverage, appointment availability and applicable charges before accepting your booking.
          </p>
        </div>

        {/* Search Locality Box */}
        <div className="max-w-md mx-auto mb-10">
          <div className="relative">
            <Search className="w-4 h-4 text-purple-600 absolute left-4 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search your Indore locality (e.g., Vijay Nagar, Palasia)..."
              className="w-full pl-11 pr-4 py-3 rounded-full bg-purple-50/70 border border-purple-200 text-xs sm:text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:border-purple-600 focus:bg-white transition-colors shadow-xs"
            />
          </div>
        </div>

        {/* Localities Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {filteredAreas.map((area) => (
            <div
              key={area.id}
              className="rounded-2xl bg-gradient-to-br from-white to-purple-50/40 border border-purple-200 p-5 hover:border-purple-400 hover:shadow-md transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between text-xs text-slate-400 mb-2">
                  <span>{area.zone}</span>
                  <span className="text-purple-600 font-bold">Indore</span>
                </div>
                <h3 className="font-serif text-base font-bold text-slate-900 mb-2">
                  {area.name}
                </h3>
              </div>

              <div className="pt-3 border-t border-purple-100 flex items-center justify-between">
                <span className="text-[11px] text-slate-600 font-medium flex items-center gap-1">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                  {area.status}
                </span>

                <a
                  href={checkAreaWhatsappUrl(area.name)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg text-purple-700 bg-purple-50 hover:bg-purple-600 hover:text-white transition-colors"
                  title="Check area availability on WhatsApp"
                  aria-label={`Check availability in ${area.name}`}
                >
                  <MessageCircle className="w-4 h-4 fill-current" />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Unlisted Area Callout */}
        <div className="mt-12 p-6 rounded-3xl bg-purple-50 border border-purple-200 flex flex-col sm:flex-row items-center justify-between gap-6 max-w-4xl mx-auto shadow-xs">
          <div className="text-center sm:text-left">
            <h3 className="font-serif text-lg font-bold text-slate-900">
              Don&apos;t see your specific locality listed?
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 mt-1">
              Share your address or landmark with our coordinator. We will verify travel feasibility and schedule options right away.
            </p>
          </div>

          <a
            href={checkAreaWhatsappUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="whitespace-nowrap shrink-0 inline-flex items-center gap-2 px-6 py-3 rounded-full text-xs font-bold uppercase tracking-wider text-white bg-purple-600 hover:bg-purple-700 shadow-md shadow-purple-600/20 transition-all"
          >
            <MessageCircle className="w-4 h-4 fill-current" />
            <span>Check Area on WhatsApp</span>
          </a>
        </div>

      </div>
    </section>
  );
};
