import React, { useState } from 'react';
import { Send, CheckCircle2, MessageCircle, AlertCircle } from 'lucide-react';
import { BusinessConfig, SpaService } from '../types';

interface BookingInquiryFormProps {
  business: BusinessConfig;
  services: SpaService[];
}

export const BookingInquiryForm: React.FC<BookingInquiryFormProps> = ({ business, services }) => {
  const [formData, setFormData] = useState({
    name: '',
    service: services[0]?.name || 'Relaxation Massage',
    date: '',
    time: 'Afternoon (1:00 PM - 5:00 PM)',
    locality: '',
    duration: '60 Minutes',
    message: '',
  });

  const [submittedNotice, setSubmittedNotice] = useState(false);
  const [validationError, setValidationError] = useState('');

  const timeOptions = [
    'Morning (10:00 AM - 1:00 PM)',
    'Afternoon (1:00 PM - 5:00 PM)',
    'Evening (5:00 PM - 9:00 PM)',
  ];

  const durationOptions = [
    '45 Minutes',
    '60 Minutes',
    '90 Minutes',
    '120 Minutes',
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.name.trim()) {
      setValidationError('Please enter your name.');
      return;
    }
    if (!formData.locality.trim()) {
      setValidationError('Please specify your locality in Indore (e.g. Scheme 94, Vijay Nagar, Palasia).');
      return;
    }

    setValidationError('');

    const formattedMessage = [
      `Hello ${business.name}, I would like to inquire about an outcall spa booking:`,
      `• Customer Name: ${formData.name}`,
      `• Selected Service: ${formData.service}`,
      `• Preferred Duration: ${formData.duration}`,
      `• Locality in Indore: ${formData.locality}`,
      formData.date ? `• Preferred Date: ${formData.date}` : `• Preferred Date: Earliest available`,
      `• Preferred Time: ${formData.time}`,
      formData.message ? `• Note / Preferences: ${formData.message}` : null,
      ``,
      `Please confirm price, location coverage and available appointment timings.`,
    ]
      .filter(Boolean)
      .join('\n');

    const whatsappUrl = `https://wa.me/${business.whatsapp}?text=${encodeURIComponent(formattedMessage)}`;

    setSubmittedNotice(true);
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="rounded-3xl bg-white border-2 border-purple-200 p-6 sm:p-8 text-slate-800 relative shadow-xl shadow-purple-500/5">
      <div className="mb-6">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-purple-50 text-purple-700 text-xs font-bold uppercase tracking-wider mb-2">
          <MessageCircle className="w-3.5 h-3.5 text-purple-600 fill-current" />
          <span>Quick WhatsApp Inquiry</span>
        </div>
        <h3 className="font-serif text-2xl font-bold text-slate-900">
          Request Booking on WhatsApp
        </h3>
        <p className="text-xs sm:text-sm text-slate-600 mt-1.5 leading-relaxed">
          Fill in your preferences below. Submitting will open WhatsApp directly with your prefilled details to check availability with our admin.
        </p>
      </div>

      {validationError && (
        <div className="mb-5 p-3 rounded-xl bg-red-50 border border-red-200 text-red-700 text-xs flex items-center gap-2">
          <AlertCircle className="w-4 h-4 shrink-0 text-red-600" />
          <span>{validationError}</span>
        </div>
      )}

      {submittedNotice && (
        <div className="mb-6 p-4 rounded-2xl bg-emerald-50 border border-emerald-200 text-xs text-emerald-900 space-y-1">
          <div className="flex items-center gap-2 font-bold text-sm text-emerald-800">
            <CheckCircle2 className="w-4 h-4 text-emerald-600" />
            <span>Inquiry Form Sent to WhatsApp</span>
          </div>
          <p className="text-emerald-700">
            WhatsApp has been opened with your prefilled inquiry. Please hit &quot;Send&quot; in WhatsApp to reach our coordinator at {business.phoneDisplay}.
          </p>
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Name & Locality */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-bold text-slate-700 mb-1.5">
              Your Name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              required
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              placeholder="e.g. Rahul Sharma"
              className="w-full px-4 py-2.5 rounded-xl bg-purple-50/50 border border-purple-200 text-xs sm:text-sm text-slate-900 focus:border-purple-600 focus:bg-white focus:outline-none transition-colors placeholder-slate-400"
            />
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-700 mb-1.5">
              Indore Locality <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              required
              value={formData.locality}
              onChange={(e) => setFormData({ ...formData, locality: e.target.value })}
              placeholder="e.g. Scheme 94 / Vijay Nagar"
              className="w-full px-4 py-2.5 rounded-xl bg-purple-50/50 border border-purple-200 text-xs sm:text-sm text-slate-900 focus:border-purple-600 focus:bg-white focus:outline-none transition-colors placeholder-slate-400"
            />
          </div>
        </div>

        {/* Treatment & Duration */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-bold text-slate-700 mb-1.5">
              Selected Treatment
            </label>
            <select
              value={formData.service}
              onChange={(e) => setFormData({ ...formData, service: e.target.value })}
              className="w-full px-4 py-2.5 rounded-xl bg-purple-50/50 border border-purple-200 text-xs sm:text-sm text-slate-900 focus:border-purple-600 focus:bg-white focus:outline-none transition-colors cursor-pointer"
            >
              {services.map((s) => (
                <option key={s.id} value={s.name}>
                  {s.name}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-700 mb-1.5">
              Preferred Duration
            </label>
            <select
              value={formData.duration}
              onChange={(e) => setFormData({ ...formData, duration: e.target.value })}
              className="w-full px-4 py-2.5 rounded-xl bg-purple-50/50 border border-purple-200 text-xs sm:text-sm text-slate-900 focus:border-purple-600 focus:bg-white focus:outline-none transition-colors cursor-pointer"
            >
              {durationOptions.map((dur) => (
                <option key={dur} value={dur}>
                  {dur}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Date & Time */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-bold text-slate-700 mb-1.5">
              Preferred Date (Optional)
            </label>
            <input
              type="date"
              value={formData.date}
              onChange={(e) => setFormData({ ...formData, date: e.target.value })}
              className="w-full px-4 py-2.5 rounded-xl bg-purple-50/50 border border-purple-200 text-xs sm:text-sm text-slate-900 focus:border-purple-600 focus:bg-white focus:outline-none transition-colors"
            />
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-700 mb-1.5">
              Preferred Time Slot
            </label>
            <select
              value={formData.time}
              onChange={(e) => setFormData({ ...formData, time: e.target.value })}
              className="w-full px-4 py-2.5 rounded-xl bg-purple-50/50 border border-purple-200 text-xs sm:text-sm text-slate-900 focus:border-purple-600 focus:bg-white focus:outline-none transition-colors cursor-pointer"
            >
              {timeOptions.map((opt) => (
                <option key={opt} value={opt}>
                  {opt}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Note */}
        <div>
          <label className="block text-xs font-bold text-slate-700 mb-1.5">
            Special Requests / Note (Optional)
          </label>
          <textarea
            rows={2}
            value={formData.message}
            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            placeholder="e.g. Please share pricing and earliest slot available today."
            className="w-full px-4 py-2.5 rounded-xl bg-purple-50/50 border border-purple-200 text-xs sm:text-sm text-slate-900 focus:border-purple-600 focus:bg-white focus:outline-none transition-colors placeholder-slate-400"
          />
        </div>

        {/* Submit Button */}
        <div className="pt-2">
          <button
            type="submit"
            className="w-full flex items-center justify-center gap-2 py-4 px-6 rounded-full text-xs sm:text-sm font-bold uppercase tracking-wider text-white bg-purple-600 hover:bg-purple-700 shadow-xl shadow-purple-600/25 hover:shadow-purple-600/35 transition-all focus:outline-none focus:ring-2 focus:ring-purple-600 cursor-pointer"
          >
            <MessageCircle className="w-4 h-4 fill-current" />
            <span>Send Inquiry on WhatsApp</span>
            <Send className="w-3.5 h-3.5 ml-1" />
          </button>
        </div>

        {/* Footnote */}
        <p className="text-[11px] text-slate-400 text-center italic pt-1">
          Direct communication: Opens WhatsApp to message the admin at {business.phoneDisplay}.
        </p>
      </form>
    </div>
  );
};
