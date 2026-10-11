import React from 'react';
import { ArrowRight, Sparkles, MapPin, Shield } from 'lucide-react';
import { BusinessConfig } from '../types';
import { defaultAboutImage } from '../config/businessInfo';

interface AboutSectionProps {
  business: BusinessConfig;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ business }) => {
  return (
    <section id="about" className="py-20 bg-gradient-to-b from-purple-50/50 via-white to-purple-50/30 border-y border-purple-100 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-center">
          
          {/* Visual Showcase: Real Photographic Day Spa Lounge */}
          <div className="lg:col-span-5 order-2 lg:order-1">
            <div className="relative aspect-[4/3] rounded-3xl overflow-hidden border-2 border-purple-200 shadow-xl bg-purple-100 group">
              <img
                src={defaultAboutImage}
                alt="Divine Touch Spa Ambiance Indore"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 p-3.5 rounded-2xl bg-white/95 backdrop-blur-md border border-purple-100 shadow-md flex items-center justify-between text-xs">
                <div>
                  <p className="font-serif font-bold text-slate-900">Sanctuary of Tranquility</p>
                  <p className="text-purple-700 font-medium">Serving Indore Clients</p>
                </div>
                <span className="text-purple-900 font-bold bg-purple-50 px-2.5 py-1 rounded-full border border-purple-200">
                  +91 7389996090
                </span>
              </div>
            </div>
          </div>

          {/* Editorial Content */}
          <div className="lg:col-span-7 order-1 lg:order-2 space-y-6">
            <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-purple-50 text-purple-700 text-xs font-semibold uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5 text-purple-600" />
              <span>Dedicated To Restorative Comfort</span>
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 tracking-tight leading-tight text-balance">
              Welcome to Divine Touch Outcall Spa Center
            </h2>

            <div className="space-y-4 text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
              <p>
                Divine Touch is a spa and wellness service brand serving customers in Indore. Our goal is to make discovering wellness treatments and contacting our team simple and convenient.
              </p>
              <p>
                Explore our available services, discuss your preferences with our team, and confirm an appointment based on service availability. We specialize in bringing relaxing, private therapies directly to your location with complete discretion.
              </p>
            </div>

            {/* Address & Outcall Highlights */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="p-4 rounded-2xl bg-white border border-purple-200 shadow-xs flex items-start gap-3">
                <MapPin className="w-5 h-5 text-purple-600 shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-serif text-sm font-bold text-slate-900">Indore Outcall Focus</h3>
                  <p className="text-xs text-slate-600 mt-0.5">Scheme 94, Chikitsak Nagar &amp; all key zones</p>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-white border border-purple-200 shadow-xs flex items-start gap-3">
                <Shield className="w-5 h-5 text-purple-600 shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-serif text-sm font-bold text-slate-900">Client Confidentiality</h3>
                  <p className="text-xs text-slate-600 mt-0.5">Discreet communication and privacy respect</p>
                </div>
              </div>
            </div>

            <div className="pt-2">
              <a
                href="#services"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full text-xs font-bold uppercase tracking-wider text-white bg-purple-600 hover:bg-purple-700 shadow-md shadow-purple-600/20 transition-all"
              >
                <span>Explore Our Services</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
