import React from 'react';
import { MapPin, Navigation, ExternalLink, Phone, MessageCircle } from 'lucide-react';
import { BusinessConfig } from '../types';

interface LocationMapProps {
  business: BusinessConfig;
}

export const LocationMap: React.FC<LocationMapProps> = ({ business }) => {
  const encodedAddress = encodeURIComponent(
    'EF_174, Opposite Bombay Hospital Service Road, Scheme No. 94, Chikitsak Nagar, Indore, Madhya Pradesh 452010'
  );

  // Google Maps Search / Directions Link
  const googleMapsDirectionsUrl = `https://www.google.com/maps/search/?api=1&query=${encodedAddress}`;

  // Embedded map URL pointing to Bombay Hospital / Scheme 94 Indore
  const mapEmbedUrl = `https://maps.google.com/maps?q=Bombay%20Hospital%20Indore%20Scheme%2094%20Chikitsak%20Nagar&t=&z=15&ie=UTF8&iwloc=&output=embed`;

  const whatsappUrl = `https://wa.me/${business.whatsapp}?text=${encodeURIComponent(
    `Hello ${business.name}, I would like directions or want to confirm outcall service in my area near Bombay Hospital, Scheme 94, Indore.`
  )}`;

  return (
    <section id="location" className="py-16 bg-white border-t border-purple-100 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-50 text-purple-700 text-xs font-semibold uppercase tracking-wider mb-3">
            <MapPin className="w-3.5 h-3.5 text-purple-600" />
            <span>Our Location &amp; Map</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight text-balance">
            Find Us in Indore
          </h2>
          <p className="mt-2 text-sm sm:text-base text-slate-600">
            Conveniently located opposite Bombay Hospital Service Road in Scheme No. 94, Chikitsak Nagar, Indore.
          </p>
        </div>

        {/* Map & Address Box */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Address Details Card */}
          <div className="lg:col-span-5 bg-gradient-to-br from-purple-50 via-white to-purple-50/50 rounded-3xl p-6 sm:p-8 border border-purple-200 shadow-sm flex flex-col justify-between">
            <div className="space-y-5">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-2xl bg-purple-600 text-white flex items-center justify-center shadow-md shadow-purple-600/20">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-serif text-xl font-bold text-slate-900">
                    {business.name}
                  </h3>
                  <p className="text-xs text-purple-700 font-medium">Scheme 94, Indore</p>
                </div>
              </div>

              {/* Exact Address */}
              <div className="p-4 rounded-2xl bg-white border border-purple-100 shadow-xs space-y-2">
                <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider">
                  Full Address
                </span>
                <p className="text-sm font-medium text-slate-800 leading-relaxed">
                  EF_174, Opposite Bombay Hospital Service Road, Scheme No. 94, Chikitsak Nagar, Indore, Madhya Pradesh 452010
                </p>
              </div>

              {/* Locality & Landmark highlights */}
              <div className="grid grid-cols-2 gap-3 text-xs">
                <div className="p-3 rounded-xl bg-white border border-purple-100">
                  <span className="text-slate-400 block">Locality</span>
                  <span className="font-semibold text-slate-800">Chikitsak Nagar</span>
                </div>
                <div className="p-3 rounded-xl bg-white border border-purple-100">
                  <span className="text-slate-400 block">Landmark</span>
                  <span className="font-semibold text-slate-800">Opp. Bombay Hospital</span>
                </div>
              </div>

              {/* Operating notice */}
              <div className="p-3.5 rounded-xl bg-purple-100/60 text-purple-900 text-xs leading-relaxed">
                <span className="font-semibold">Service Model: </span>
                We specialize in outcall therapies delivered directly to your location in Indore. Prior appointment is required before dispatch.
              </div>
            </div>

            {/* Direct Action Buttons */}
            <div className="pt-6 space-y-3">
              <a
                href={googleMapsDirectionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 py-3 px-5 rounded-full text-xs font-semibold uppercase tracking-wider text-white bg-purple-600 hover:bg-purple-700 shadow-md shadow-purple-600/20 transition-all"
              >
                <Navigation className="w-4 h-4" />
                <span>Open in Google Maps</span>
                <ExternalLink className="w-3.5 h-3.5 opacity-80" />
              </a>

              <div className="grid grid-cols-2 gap-3">
                <a
                  href={`tel:${business.phone}`}
                  className="flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-full text-xs font-semibold text-purple-700 bg-white border border-purple-200 hover:bg-purple-50 transition-all text-center"
                >
                  <Phone className="w-3.5 h-3.5" />
                  <span>Call Us</span>
                </a>

                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-full text-xs font-semibold text-white bg-emerald-600 hover:bg-emerald-700 transition-all text-center"
                >
                  <MessageCircle className="w-3.5 h-3.5 fill-current" />
                  <span>WhatsApp</span>
                </a>
              </div>
            </div>
          </div>

          {/* Interactive Google Map Embed */}
          <div className="lg:col-span-7 rounded-3xl overflow-hidden border border-purple-200 shadow-md bg-slate-100 min-h-[380px] relative">
            <iframe
              title="Divine Touch Spa Location Map - Bombay Hospital Service Road Indore"
              src={mapEmbedUrl}
              className="w-full h-full min-h-[400px] border-0"
              loading="lazy"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
            />
            {/* Map Floating Tag */}
            <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-md px-3.5 py-1.5 rounded-full shadow-md border border-purple-100 flex items-center gap-2 text-xs font-semibold text-purple-900 pointer-events-none">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
              <span>Chikitsak Nagar, Scheme 94, Indore</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
