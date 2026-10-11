import React from 'react';
import { X, Clock, CheckCircle2, MessageCircle, Phone, Info } from 'lucide-react';
import { SpaService, BusinessConfig } from '../types';

interface ServiceDetailModalProps {
  service: SpaService | null;
  business: BusinessConfig;
  onClose: () => void;
}

export const ServiceDetailModal: React.FC<ServiceDetailModalProps> = ({ service, business, onClose }) => {
  if (!service) return null;

  const prefilledWhatsappUrl = `https://wa.me/${business.whatsapp}?text=${encodeURIComponent(
    `Hello ${business.name}, I am interested in ${service.name}. Please share the price, available appointment timings and whether my location in Indore is covered.`
  )}`;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-service-title"
      className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/60 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6"
    >
      <div
        className="relative w-full max-w-2xl bg-white border border-purple-200 rounded-3xl shadow-2xl overflow-hidden text-slate-800 animate-fade-in"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Photographic Header Banner */}
        <div className="relative h-56 sm:h-64 w-full overflow-hidden bg-purple-100">
          <img
            src={service.imageUrl}
            alt={service.name}
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-black/30" />

          {/* Close button */}
          <button
            onClick={onClose}
            aria-label="Close service details"
            className="absolute top-4 right-4 p-2.5 rounded-full bg-white/90 text-slate-800 hover:bg-white hover:text-purple-700 shadow-md transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Category badge */}
          <div className="absolute bottom-4 left-6">
            <span className="text-xs uppercase tracking-widest text-white font-bold bg-purple-600/90 px-3.5 py-1.5 rounded-full shadow-md">
              {service.category} Therapy
            </span>
          </div>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 space-y-6 max-h-[calc(85vh-16rem)] overflow-y-auto">
          <div>
            <h2 id="modal-service-title" className="font-serif text-2xl sm:text-3xl font-bold text-slate-900">
              {service.name}
            </h2>
            <p className="mt-2 text-sm sm:text-base text-slate-600 leading-relaxed">
              {service.fullDescription}
            </p>
          </div>

          {/* Duration & Pricing Highlights */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 p-4 rounded-2xl bg-purple-50/80 border border-purple-100">
            <div className="flex items-start gap-3">
              <Clock className="w-5 h-5 text-purple-600 shrink-0 mt-0.5" />
              <div>
                <p className="text-xs text-slate-500 font-semibold uppercase">Session Durations</p>
                <div className="flex flex-wrap gap-1.5 mt-1">
                  {service.durations.map((dur) => (
                    <span key={dur} className="text-xs font-semibold px-2.5 py-0.5 rounded-md bg-white text-purple-800 border border-purple-200">
                      {dur}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <Info className="w-5 h-5 text-purple-600 shrink-0 mt-0.5" />
              <div>
                <p className="text-xs text-slate-500 font-semibold uppercase">Pricing</p>
                <p className="text-sm font-bold text-purple-800 mt-0.5">{service.priceDisplay}</p>
                <p className="text-[11px] text-slate-500">Transparent rates confirmed upfront</p>
              </div>
            </div>
          </div>

          {/* Benefits */}
          <div>
            <h3 className="text-xs uppercase tracking-wider text-purple-800 font-bold mb-3">
              Therapeutic Benefits
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {service.benefits.map((benefit, i) => (
                <div key={i} className="flex items-center gap-2.5 text-xs font-medium text-slate-700">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>{benefit}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Ideal for note */}
          <div className="p-3.5 rounded-xl bg-purple-50 border border-purple-200 text-xs text-purple-900 font-medium">
            <span className="font-bold">Ideal For: </span>
            {service.idealFor}
          </div>

          {/* Action Buttons */}
          <div className="pt-2 flex flex-col sm:flex-row gap-3">
            <a
              href={prefilledWhatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 inline-flex items-center justify-center gap-2 py-3.5 px-5 rounded-full text-xs font-bold uppercase tracking-wider text-white bg-purple-600 hover:bg-purple-700 shadow-md shadow-purple-600/20 transition-all text-center"
            >
              <MessageCircle className="w-4 h-4 fill-current" />
              Enquire on WhatsApp
            </a>

            <a
              href={`tel:${business.phone}`}
              className="inline-flex items-center justify-center gap-2 py-3.5 px-5 rounded-full text-xs font-bold text-purple-800 border-2 border-purple-200 bg-purple-50 hover:bg-purple-100 transition-all"
            >
              <Phone className="w-4 h-4 text-purple-600" />
              Call Coordinator
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
