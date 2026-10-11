import React, { useState } from 'react';
import { Clock, MessageCircle, Phone, Info, Sparkles, Check } from 'lucide-react';
import { SpaService, BusinessConfig } from '../types';
import { ServiceDetailModal } from './ServiceDetailModal';

interface ServicesSectionProps {
  services: SpaService[];
  business: BusinessConfig;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ services, business }) => {
  const [selectedCategory, setSelectedCategory] = useState<'All' | 'Full Body' | 'Targeted' | 'Packages'>('All');
  const [activeServiceForModal, setActiveServiceForModal] = useState<SpaService | null>(null);

  const categories: Array<'All' | 'Full Body' | 'Targeted' | 'Packages'> = [
    'All',
    'Full Body',
    'Targeted',
    'Packages',
  ];

  const filteredServices =
    selectedCategory === 'All'
      ? services
      : services.filter((s) => s.category === selectedCategory);

  // Generates specific prefilled WhatsApp message for this individual service
  const generateServiceWhatsappUrl = (service: SpaService) => {
    const text = `Hello ${business.name}, I would like to inquire about the ${service.name} (${service.durations.join('/')}) at your Indore service. Please share current pricing, available appointment slots, and confirm if my location is covered.`;
    return `https://wa.me/${business.whatsapp}?text=${encodeURIComponent(text)}`;
  };

  return (
    <section id="services" className="py-20 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-purple-50 text-purple-700 text-xs font-semibold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5 text-purple-600" />
            <span>Our Spa &amp; Wellness Services</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 tracking-tight text-balance">
            Explore Spa Treatments
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-600 leading-relaxed">
            Professional outcall massage therapies designed for relaxation and whole-body rejuvenation in Indore. Click on any service to enquire directly on WhatsApp.
          </p>

          {/* Category Filter Tabs */}
          <div className="mt-8 flex items-center justify-center gap-2 p-1.5 bg-purple-50 rounded-full border border-purple-200 max-w-md mx-auto">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`flex-1 py-2 px-3 text-xs font-bold rounded-full transition-all whitespace-nowrap shrink-0 cursor-pointer ${
                  selectedCategory === cat
                    ? 'bg-purple-600 text-white shadow-md shadow-purple-600/20'
                    : 'text-purple-900 hover:text-purple-600'
                }`}
              >
                {cat === 'All' ? 'All Services' : cat}
              </button>
            ))}
          </div>
        </div>

        {/* Services Grid with Individual Visual Images */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredServices.map((service) => (
            <div
              key={service.id}
              className="group rounded-3xl bg-white border-2 border-purple-100 hover:border-purple-300 transition-all duration-300 flex flex-col overflow-hidden shadow-sm hover:shadow-xl hover:shadow-purple-500/10"
            >
              {/* Individual Visual Image */}
              <div className="relative h-56 w-full overflow-hidden bg-purple-100">
                <img
                  src={service.imageUrl}
                  alt={`${service.name} - Divine Touch Spa Indore`}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  onError={(e) => {
                    // Fallback to beautiful purple gradient if image fails
                    (e.target as HTMLElement).style.display = 'none';
                  }}
                />

                {/* Category & Tag Overlay */}
                <div className="absolute top-3 left-3 right-3 flex items-center justify-between text-xs">
                  <span className="bg-white/95 backdrop-blur-md text-purple-800 font-bold px-3 py-1 rounded-full shadow-xs border border-purple-100">
                    {service.category}
                  </span>
                  {service.tag && (
                    <span className="bg-purple-600 text-white font-semibold text-[11px] px-2.5 py-0.5 rounded-full shadow-xs">
                      {service.tag}
                    </span>
                  )}
                </div>

                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>

              {/* Card Details */}
              <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                <div className="space-y-2">
                  <h3 className="font-serif text-xl font-bold text-slate-900 group-hover:text-purple-700 transition-colors">
                    {service.name}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 line-clamp-3 leading-relaxed">
                    {service.shortDescription}
                  </p>
                </div>

                {/* Duration & Pricing Row */}
                <div className="pt-3 border-t border-purple-50 flex items-center justify-between text-xs">
                  <div className="flex items-center gap-1.5 text-slate-500 font-medium">
                    <Clock className="w-4 h-4 text-purple-600" />
                    <span>{service.durations.join(' / ')}</span>
                  </div>
                  <span className="text-purple-700 font-bold bg-purple-50 px-2.5 py-1 rounded-lg">
                    {service.priceDisplay}
                  </span>
                </div>

                {/* High-Intent Inquiry Actions */}
                <div className="pt-2 flex flex-col sm:flex-row items-center gap-2">
                  {/* Dedicated WhatsApp Inquiry Button */}
                  <a
                    href={generateServiceWhatsappUrl(service)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full flex-1 inline-flex items-center justify-center gap-2 py-3 px-4 rounded-full text-xs font-bold uppercase tracking-wider text-white bg-purple-600 hover:bg-purple-700 shadow-md shadow-purple-600/20 hover:shadow-purple-600/30 transition-all text-center"
                    aria-label={`Enquire about ${service.name} on WhatsApp`}
                  >
                    <MessageCircle className="w-4 h-4 fill-current" />
                    <span>Enquire on WhatsApp</span>
                  </a>

                  {/* Details button */}
                  <button
                    onClick={() => setActiveServiceForModal(service)}
                    type="button"
                    className="p-3 rounded-full border border-purple-200 text-purple-700 hover:bg-purple-50 hover:border-purple-300 transition-colors cursor-pointer"
                    title="View treatment details"
                    aria-label={`View details for ${service.name}`}
                  >
                    <Info className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Notice Bar */}
        <div className="mt-12 p-4 rounded-2xl bg-purple-50 border border-purple-200 text-center max-w-3xl mx-auto">
          <p className="text-xs text-purple-900 leading-relaxed font-medium">
            <span className="font-bold">Indore Service Guarantee:</span> All therapies are performed using clean towels, fresh linens, and premium aromatic oils. Transparent pricing and slot confirmation provided directly on WhatsApp.
          </p>
        </div>

      </div>

      {/* Detail Modal */}
      <ServiceDetailModal
        service={activeServiceForModal}
        business={business}
        onClose={() => setActiveServiceForModal(null)}
      />
    </section>
  );
};
