import React from 'react';
import { Search, MessageSquare, CheckCircle } from 'lucide-react';
import { BusinessConfig } from '../types';

interface HowItWorksProps {
  business: BusinessConfig;
}

export const HowItWorks: React.FC<HowItWorksProps> = ({ business }) => {
  const steps = [
    {
      number: '01',
      title: 'Explore Services',
      description: 'Browse the available spa and wellness treatments, session durations, and targeted areas that best match your rest and recovery needs.',
      icon: Search,
    },
    {
      number: '02',
      title: 'Contact Our Team',
      description: `Use WhatsApp or call our coordinator at ${business.phoneDisplay} to ask about transparent pricing, your Indore locality coverage, and available appointment timings.`,
      icon: MessageSquare,
    },
    {
      number: '03',
      title: 'Confirm Your Appointment',
      description: 'Our team verifies therapist availability, confirms the service, applicable price, and exact appointment time before finalizing your outcall booking.',
      icon: CheckCircle,
    },
  ];

  return (
    <section id="how-it-works" className="py-20 bg-gradient-to-b from-purple-50/40 via-white to-purple-50/30 border-y border-purple-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs uppercase tracking-widest text-purple-700 font-bold bg-purple-50 px-3 py-1 rounded-full border border-purple-200">
            Simple 3-Step Process
          </span>
          <h2 className="mt-3 font-serif text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight text-balance">
            How It Works
          </h2>
          <p className="mt-2 text-sm sm:text-base text-slate-600">
            A seamless, transparent outcall booking experience with direct personal communication.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step) => {
            const Icon = step.icon;
            return (
              <div
                key={step.number}
                className="relative rounded-3xl bg-white border border-purple-200 p-8 flex flex-col justify-between hover:border-purple-400 hover:shadow-lg hover:shadow-purple-500/10 transition-all group"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span className="font-serif text-3xl font-extrabold text-purple-600">
                      {step.number}
                    </span>
                    <div className="w-12 h-12 rounded-2xl bg-purple-50 border border-purple-200 flex items-center justify-center text-purple-700 group-hover:bg-purple-600 group-hover:text-white transition-colors">
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>

                  <h3 className="font-serif text-xl font-bold text-slate-900 mb-3">
                    {step.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                    {step.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-purple-100 text-xs text-purple-800 font-semibold flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-purple-600" />
                  <span>Outcall service across Indore</span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
