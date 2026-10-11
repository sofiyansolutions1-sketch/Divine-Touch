import React from 'react';
import { X, Shield, FileText, RefreshCw } from 'lucide-react';
import { BusinessConfig } from '../types';

export type LegalModalType = 'privacy' | 'terms' | 'cancellation' | null;

interface LegalModalProps {
  type: LegalModalType;
  business: BusinessConfig;
  onClose: () => void;
}

export const LegalModal: React.FC<LegalModalProps> = ({ type, business, onClose }) => {
  if (!type) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="legal-modal-title"
      className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/60 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6"
    >
      <div
        className="relative w-full max-w-2xl bg-white border border-purple-200 rounded-3xl shadow-2xl p-6 sm:p-8 text-slate-800 max-h-[85vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          aria-label="Close dialog"
          className="absolute top-5 right-5 p-2 rounded-full bg-purple-50 text-slate-700 hover:text-purple-700 hover:bg-purple-100 transition-colors cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        {type === 'privacy' && (
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="p-2.5 rounded-2xl bg-purple-100 text-purple-700">
                <Shield className="w-5 h-5" />
              </div>
              <h2 id="legal-modal-title" className="font-serif text-2xl font-bold text-slate-900">
                Privacy Policy
              </h2>
            </div>

            <p className="text-xs text-slate-400">Effective Date: October 2026</p>

            <div className="text-xs sm:text-sm text-slate-600 space-y-3 leading-relaxed">
              <p>
                At {business.name}, we value your personal privacy and are committed to safeguarding all customer information communicated to us during booking inquiries and service fulfillment.
              </p>
              
              <h3 className="font-serif text-base font-bold text-purple-800 pt-2">1. Information We Collect</h3>
              <p>
                We only collect information voluntarily provided by you through WhatsApp messages, phone calls, or our booking inquiry form, including your name, requested therapy, preferred appointment timing, and locality in Indore.
              </p>

              <h3 className="font-serif text-base font-bold text-purple-800 pt-2">2. How Your Information Is Handled</h3>
              <p>
                Your contact details are used strictly for service coordination, outcall appointment scheduling, and customer communication. We never sell, rent, or share your phone number or address with third parties.
              </p>

              <h3 className="font-serif text-base font-bold text-purple-800 pt-2">3. Outcall Privacy &amp; Discretion</h3>
              <p>
                Our therapists respect your personal boundary and treat client details with strict confidentiality. All conversations on WhatsApp are between you and our authorized coordination desk.
              </p>
            </div>
          </div>
        )}

        {type === 'terms' && (
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="p-2.5 rounded-2xl bg-purple-100 text-purple-700">
                <FileText className="w-5 h-5" />
              </div>
              <h2 id="legal-modal-title" className="font-serif text-2xl font-bold text-slate-900">
                Terms &amp; Conditions
              </h2>
            </div>

            <p className="text-xs text-slate-400">Updated: October 2026</p>

            <div className="text-xs sm:text-sm text-slate-600 space-y-3 leading-relaxed">
              <p>
                Welcome to {business.name}. By inquiring about or scheduling a wellness appointment with our team, you agree to the following terms:
              </p>

              <h3 className="font-serif text-base font-bold text-purple-800 pt-2">1. Nature of Services</h3>
              <p>
                All therapies provided are exclusively for relaxation, general body wellness, and stress easing. They do not constitute medical treatments or physical therapy.
              </p>

              <h3 className="font-serif text-base font-bold text-purple-800 pt-2">2. Professional Decorum</h3>
              <p>
                We maintain strict standards of dignity, professional respect, and safety. Any inappropriate behavior will result in immediate termination of the session.
              </p>

              <h3 className="font-serif text-base font-bold text-purple-800 pt-2">3. Outcall Model &amp; Office Address</h3>
              <p>
                The address {business.referenceAddress} serves as our official administrative and dispatch center in Indore. All customer services are delivered directly via outcall at verified client locations.
              </p>
            </div>
          </div>
        )}

        {type === 'cancellation' && (
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="p-2.5 rounded-2xl bg-purple-100 text-purple-700">
                <RefreshCw className="w-5 h-5" />
              </div>
              <h2 id="legal-modal-title" className="font-serif text-2xl font-bold text-slate-900">
                Cancellation &amp; Rescheduling Policy
              </h2>
            </div>

            <p className="text-xs text-slate-400">Notice Period Guidelines</p>

            <div className="text-xs sm:text-sm text-slate-600 space-y-3 leading-relaxed">
              <p>
                To respect therapist preparation and travel time across Indore, please notify us at least 2 to 3 hours in advance if you need to reschedule your appointment.
              </p>

              <p>
                You can reschedule directly via WhatsApp at {business.whatsappDisplay} or telephone at {business.phoneDisplay}.
              </p>
            </div>
          </div>
        )}

        <div className="pt-6 border-t border-purple-100 flex justify-end">
          <button
            onClick={onClose}
            className="px-6 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider text-white bg-purple-600 hover:bg-purple-700 transition-colors cursor-pointer"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};
