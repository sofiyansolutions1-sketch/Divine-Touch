import React from 'react';
import { CalendarCheck, ShieldCheck, Banknote, UserCheck, HeartHandshake, MapPin } from 'lucide-react';

export const WhyChooseUs: React.FC = () => {
  const principles = [
    {
      title: 'Convenient Inquiry & Booking',
      description: 'Quickly connect via WhatsApp or phone call without mandatory app downloads or complicated sign-ups.',
      icon: CalendarCheck,
    },
    {
      title: 'Clear Communication on Pricing',
      description: 'All rates, durations, and packages are clearly communicated upfront before scheduling confirmation.',
      icon: Banknote,
    },
    {
      title: 'Appointment Confirmation Before Service',
      description: 'We verify schedules, location access, and therapist availability thoroughly before locking in your appointment.',
      icon: UserCheck,
    },
    {
      title: 'Respect for Customer Privacy',
      description: 'Your personal information, phone number, and location details remain strictly confidential and protected.',
      icon: ShieldCheck,
    },
    {
      title: 'Professional & Respectful Service',
      description: 'Our team adheres to strict standards of courtesy, dignity, and client comfort throughout the session.',
      icon: HeartHandshake,
    },
    {
      title: 'Service Availability Verified Upfront',
      description: 'We transparently evaluate location coverage in Indore to avoid cancellations or unfulfilled expectations.',
      icon: MapPin,
    },
  ];

  return (
    <section id="why-us" className="py-20 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs uppercase tracking-widest text-purple-700 font-bold bg-purple-50 px-3 py-1 rounded-full border border-purple-200">
            Core Service Commitments
          </span>
          <h2 className="mt-3 font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 tracking-tight text-balance">
            Why Choose Divine Touch?
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-600 leading-relaxed">
            Our wellness service is grounded in clear communication, customer dignity, and respectful outcall coordination in Indore.
          </p>
        </div>

        {/* 6 Principles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {principles.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="rounded-3xl bg-gradient-to-br from-white to-purple-50/40 border border-purple-200 p-6 sm:p-8 hover:border-purple-400 hover:shadow-lg hover:shadow-purple-500/10 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-purple-600 text-white flex items-center justify-center shadow-md shadow-purple-600/20 mb-5">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="font-serif text-lg sm:text-xl font-bold text-slate-900 mb-2.5">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                    {item.description}
                  </p>
                </div>

                <div className="mt-6 pt-3 border-t border-purple-100 text-[11px] font-semibold text-purple-800 flex items-center justify-between">
                  <span>Commitment</span>
                  <span className="text-purple-600">0{idx + 1}</span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
