import React, { useState } from 'react';
import { X, Check, RotateCcw, ShieldCheck, MapPin, Phone, MessageCircle } from 'lucide-react';
import { BusinessConfig } from '../types';

interface OwnerConfigModalProps {
  business: BusinessConfig;
  isOpen: boolean;
  onClose: () => void;
  onSave: (updated: BusinessConfig) => void;
  onReset: () => void;
}

export const OwnerConfigModal: React.FC<OwnerConfigModalProps> = ({
  business,
  isOpen,
  onClose,
  onSave,
  onReset,
}) => {
  const [formData, setFormData] = useState<BusinessConfig>({ ...business });
  const [savedSuccess, setSavedSuccess] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSave(formData);
    setSavedSuccess(true);
    setTimeout(() => {
      setSavedSuccess(false);
      onClose();
    }, 1200);
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="owner-config-title"
      className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/60 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6"
    >
      <div
        className="relative w-full max-w-2xl bg-white border border-purple-200 rounded-3xl shadow-2xl p-6 sm:p-8 text-slate-800 max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          aria-label="Close configuration"
          className="absolute top-5 right-5 p-2 rounded-full bg-purple-50 text-slate-600 hover:text-purple-700 hover:bg-purple-100 transition-colors cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="mb-6">
          <div className="inline-flex items-center gap-1.5 text-xs uppercase tracking-widest text-purple-700 font-bold bg-purple-50 px-3 py-1 rounded-full mb-1">
            <ShieldCheck className="w-4 h-4 text-purple-600" />
            <span>Business Administrator Controls</span>
          </div>
          <h2 id="owner-config-title" className="font-serif text-2xl font-bold text-slate-900 mt-2">
            Verify &amp; Update Business Information
          </h2>
          <p className="text-xs text-slate-500 mt-1 leading-relaxed">
            Update phone numbers, WhatsApp links, operating hours, and address settings for Divine Touch Spa Center.
          </p>
        </div>

        {savedSuccess && (
          <div className="mb-5 p-3 rounded-xl bg-emerald-50 border border-emerald-300 text-emerald-800 text-xs flex items-center gap-2">
            <Check className="w-4 h-4 text-emerald-600" />
            <span>Business information updated and applied successfully!</span>
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Phone & WhatsApp */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1 flex items-center gap-1.5">
                <Phone className="w-3.5 h-3.5 text-purple-600" />
                <span>Contact Phone</span>
              </label>
              <input
                type="text"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value, phoneDisplay: e.target.value })}
                className="w-full px-3.5 py-2.5 rounded-xl bg-purple-50/50 border border-purple-200 text-xs text-slate-900 focus:border-purple-600 focus:bg-white focus:outline-none"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1 flex items-center gap-1.5">
                <MessageCircle className="w-3.5 h-3.5 text-purple-600" />
                <span>WhatsApp Number</span>
              </label>
              <input
                type="text"
                value={formData.whatsapp}
                onChange={(e) => setFormData({ ...formData, whatsapp: e.target.value, whatsappDisplay: `+${e.target.value}` })}
                className="w-full px-3.5 py-2.5 rounded-xl bg-purple-50/50 border border-purple-200 text-xs text-slate-900 focus:border-purple-600 focus:bg-white focus:outline-none"
              />
            </div>
          </div>

          {/* Operating Hours & Email */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">
                Operating Hours
              </label>
              <input
                type="text"
                value={formData.operatingHours}
                onChange={(e) => setFormData({ ...formData, operatingHours: e.target.value })}
                className="w-full px-3.5 py-2.5 rounded-xl bg-purple-50/50 border border-purple-200 text-xs text-slate-900 focus:border-purple-600 focus:bg-white focus:outline-none"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">
                Contact Email
              </label>
              <input
                type="email"
                value={formData.emailContact}
                onChange={(e) => setFormData({ ...formData, emailContact: e.target.value })}
                className="w-full px-3.5 py-2.5 rounded-xl bg-purple-50/50 border border-purple-200 text-xs text-slate-900 focus:border-purple-600 focus:bg-white focus:outline-none"
              />
            </div>
          </div>

          {/* Address */}
          <div className="space-y-3 pt-2 border-t border-purple-100">
            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1 flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-purple-600" />
                <span>Business &amp; Dispatch Address</span>
              </label>
              <input
                type="text"
                value={formData.referenceAddress}
                onChange={(e) => setFormData({ ...formData, referenceAddress: e.target.value })}
                className="w-full px-3.5 py-2.5 rounded-xl bg-purple-50/50 border border-purple-200 text-xs text-slate-900 focus:border-purple-600 focus:bg-white focus:outline-none"
              />
            </div>
          </div>

          {/* Actions */}
          <div className="pt-4 border-t border-purple-100 flex items-center justify-between">
            <button
              type="button"
              onClick={() => {
                onReset();
                setSavedSuccess(true);
                setTimeout(() => setSavedSuccess(false), 1500);
              }}
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs text-slate-500 hover:text-purple-700 border border-slate-200 transition-colors cursor-pointer"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>Reset Defaults</span>
            </button>

            <div className="flex items-center gap-2.5">
              <button
                type="button"
                onClick={onClose}
                className="px-4 py-2 rounded-xl text-xs text-slate-600 hover:text-slate-900 transition-colors cursor-pointer"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="inline-flex items-center gap-1.5 px-6 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider text-white bg-purple-600 hover:bg-purple-700 transition-all shadow-md shadow-purple-600/20 cursor-pointer"
              >
                <Check className="w-4 h-4" />
                <span>Save Changes</span>
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};
