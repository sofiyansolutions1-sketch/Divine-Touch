import React, { useState } from 'react';
import { MessageCircle, Phone, Sparkles, MapPin, CheckCircle, Shield } from 'lucide-react';
import { BusinessConfig } from '../types';
import { defaultHeroImage } from '../config/businessInfo';

interface HeroProps {
  business: BusinessConfig;
}

export const Hero: React.FC<HeroProps> = ({ business }) => {
  const [imgLoaded, setImgLoaded] = useState(true);

  const whatsappUrl = `https://wa.me/${business.whatsapp}?text=${encodeURIComponent(
    `Hello ${business.name}, I would like to know more about your spa services, prices and available appointment timings in Indore.`
  )}`;

  return (
    <section id="home" className="relative overflow-hidden bg-gradient-to-b from-purple-50/60 via-white to-purple-50/30 pt-8 pb-16 lg:py-20 border-b border-purple-100">
      {/* Soft Purple Background Orbs */}
      <div className="absolute top-0 right-1/4 w-[450px] h-[450px] rounded-full bg-purple-200/30 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-purple-100/50 blur-[100px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-center">
          
          {/* Left Column: Headlines & High-Converting CTAs */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            
            {/* Locality Tag */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-purple-100/80 border border-purple-200 text-purple-900 text-xs font-semibold tracking-wide">
              <Sparkles className="w-3.5 h-3.5 text-purple-600" />
              <span>Premium Outcall Spa Services in Indore</span>
            </div>

            {/* Main Headline */}
            <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-slate-900 leading-[1.18] text-balance">
              Relax, Refresh &amp; Rejuvenate with{' '}
              <span className="bg-gradient-to-r from-purple-700 via-purple-600 to-indigo-600 bg-clip-text text-transparent">
                Divine Touch
              </span>
            </h1>

            {/* Supporting Text */}
            <p className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-normal">
              Discover relaxing spa and wellness services in Indore. Contact our team to check available treatments, service locations and appointment timings.
            </p>

            {/* High-Visibility Call & WhatsApp Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-full text-sm font-bold uppercase tracking-wider text-white bg-purple-600 hover:bg-purple-700 shadow-xl shadow-purple-600/25 hover:shadow-purple-600/35 transition-all focus:outline-none focus:ring-2 focus:ring-purple-600"
              >
                <MessageCircle className="w-5 h-5 fill-current" />
                <span>Book on WhatsApp</span>
              </a>

              <a
                href={`tel:${business.phone}`}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-4 rounded-full text-sm font-bold text-purple-900 bg-white hover:bg-purple-50 border-2 border-purple-300 hover:border-purple-400 shadow-md transition-all focus:outline-none focus:ring-2 focus:ring-purple-600"
              >
                <Phone className="w-4 h-4 text-purple-600" />
                <span>Call Now: {business.phoneDisplay}</span>
              </a>
            </div>

            {/* Trust points */}
            <div className="pt-2 text-xs sm:text-sm text-slate-600 flex items-center justify-center lg:justify-start gap-3 flex-wrap font-medium">
              <span className="flex items-center gap-1.5 text-purple-800">
                <CheckCircle className="w-4 h-4 text-purple-600" />
                Personalized Service
              </span>
              <span aria-hidden="true" className="text-purple-300">·</span>
              <span className="flex items-center gap-1.5 text-purple-800">
                <CheckCircle className="w-4 h-4 text-purple-600" />
                Convenient Booking
              </span>
              <span aria-hidden="true" className="text-purple-300">·</span>
              <span className="flex items-center gap-1.5 text-purple-800">
                <CheckCircle className="w-4 h-4 text-purple-600" />
                Professional Communication
              </span>
            </div>

            {/* Address Banner */}
            <div className="pt-4 p-4 rounded-2xl bg-white border border-purple-200 shadow-xs flex items-start gap-3 text-xs text-slate-700 max-w-xl mx-auto lg:mx-0">
              <div className="p-2 rounded-xl bg-purple-50 text-purple-600 shrink-0">
                <MapPin className="w-4 h-4" />
              </div>
              <div>
                <span className="font-semibold text-purple-900 block">Indore Location &amp; Outcall Desk:</span>
                <p className="text-slate-600 mt-0.5 leading-snug">
                  EF_174, Opposite Bombay Hospital Service Road, Scheme No. 94, Chikitsak Nagar, Indore, Madhya Pradesh 452010
                </p>
              </div>
            </div>

          </div>

          {/* Right Column: Real Luxury Photographic Spa Showcase */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-3xl overflow-hidden border-2 border-purple-200 shadow-2xl bg-purple-100 aspect-[4/3] lg:aspect-[5/4] group">
              {imgLoaded ? (
                <img
                  src={defaultHeroImage}
                  alt="Luxury Spa Wellness Environment in Indore"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  onError={() => setImgLoaded(false)}
                />
              ) : (
                <div className="w-full h-full bg-gradient-to-br from-purple-600 to-indigo-800 flex items-center justify-center text-white p-6 text-center">
                  <Sparkles className="w-12 h-12 text-purple-200 mb-2" />
                  <p className="font-serif text-lg font-bold">Divine Touch Spa Indore</p>
                </div>
              )}

              {/* Gradient Scrim for Contrast */}
              <div className="absolute inset-0 bg-gradient-to-t from-purple-950/70 via-transparent to-transparent pointer-events-none" />

              {/* Overlay Badge at Bottom */}
              <div className="absolute bottom-4 left-4 right-4 p-3.5 rounded-2xl bg-white/95 backdrop-blur-md border border-purple-100 shadow-lg flex items-center justify-between text-xs">
                <div>
                  <p className="font-serif font-bold text-slate-900">Relaxing Spa Treatments</p>
                  <p className="text-purple-700 font-medium">Delivered at your comfort</p>
                </div>
                <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-purple-600 text-white font-semibold">
                  <Shield className="w-3.5 h-3.5" />
                  <span>Indore</span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
