import React from 'react';
import { Star, ShieldCheck, Quote } from 'lucide-react';
import { Testimonial } from '../types';

interface TestimonialsSectionProps {
  testimonials: Testimonial[];
}

export const TestimonialsSection: React.FC<TestimonialsSectionProps> = ({ testimonials }) => {
  return (
    <section className="py-20 bg-gradient-to-b from-purple-50/40 via-white to-purple-50/20 border-y border-purple-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-xs uppercase tracking-widest text-purple-700 font-bold bg-purple-50 px-3 py-1 rounded-full border border-purple-200">
            Customer Experience
          </span>
          <h2 className="mt-3 font-serif text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight text-balance">
            Client Feedback
          </h2>
          <p className="mt-2 text-xs sm:text-sm text-slate-600">
            Genuine feedback received with customer permission following outcall wellness sessions in Indore.
          </p>
        </div>

        {/* Testimonial Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {testimonials.map((review) => (
            <div
              key={review.id}
              className="rounded-3xl bg-white border border-purple-200 p-6 sm:p-8 flex flex-col justify-between hover:border-purple-400 hover:shadow-lg transition-all"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  {/* Star Rating */}
                  <div className="flex items-center gap-1 text-amber-500">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current" />
                    ))}
                  </div>
                  <Quote className="w-5 h-5 text-purple-200" />
                </div>

                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed italic">
                  &ldquo;{review.comment}&rdquo;
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-purple-100 flex items-center justify-between">
                <div>
                  <h4 className="font-serif text-sm font-bold text-slate-900">
                    {review.name}
                  </h4>
                  <p className="text-[11px] text-purple-600 font-medium">{review.treatment}</p>
                </div>
                <div className="flex items-center gap-1 text-[11px] font-semibold text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-full">
                  <ShieldCheck className="w-3.5 h-3.5" />
                  <span>{review.date}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Disclosure */}
        <p className="mt-10 text-center text-xs text-slate-400 max-w-xl mx-auto">
          We honor our guests&apos; privacy. Customer names and locations are shared in accordance with verified consent.
        </p>

      </div>
    </section>
  );
};
