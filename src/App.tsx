import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ServicesSection } from './components/ServicesSection';
import { HowItWorks } from './components/HowItWorks';
import { WhyChooseUs } from './components/WhyChooseUs';
import { AboutSection } from './components/AboutSection';
import { ServiceAreaSection } from './components/ServiceAreaSection';
import { LocationMap } from './components/LocationMap';
import { TestimonialsSection } from './components/TestimonialsSection';
import { FaqSection } from './components/FaqSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { FloatingContactButtons } from './components/FloatingContactButtons';
import { LegalModal, LegalModalType } from './components/LegalModal';
import { OwnerConfigModal } from './components/OwnerConfigModal';
import {
  initialBusinessConfig,
  defaultServices,
  defaultServiceAreas,
  defaultFaqs,
  defaultTestimonials,
} from './config/businessInfo';
import { BusinessConfig } from './types';

export default function App() {
  const [business, setBusiness] = useState<BusinessConfig>(() => {
    try {
      const saved = localStorage.getItem('divine_touch_business_config');
      if (saved) {
        const parsed = JSON.parse(saved);
        if (parsed.phone && parsed.phone.includes('7389996090')) {
          parsed.phone = initialBusinessConfig.phone;
          parsed.phoneDisplay = initialBusinessConfig.phoneDisplay;
          parsed.whatsapp = initialBusinessConfig.whatsapp;
          parsed.whatsappDisplay = initialBusinessConfig.whatsappDisplay;
        }
        if (parsed.name && parsed.name.includes('Outcall')) {
          parsed.name = initialBusinessConfig.name;
        }
        localStorage.setItem('divine_touch_business_config', JSON.stringify(parsed));
        return { ...initialBusinessConfig, ...parsed };
      }
    } catch {
      // Fallback
    }
    return initialBusinessConfig;
  });

  const [activeLegalModal, setActiveLegalModal] = useState<LegalModalType>(null);
  const [isOwnerConfigOpen, setIsOwnerConfigOpen] = useState(false);

  const handleSaveConfig = (updated: BusinessConfig) => {
    setBusiness(updated);
    try {
      localStorage.setItem('divine_touch_business_config', JSON.stringify(updated));
    } catch {
      // Storage error
    }
  };

  const handleResetConfig = () => {
    setBusiness(initialBusinessConfig);
    try {
      localStorage.removeItem('divine_touch_business_config');
    } catch {
      // Storage error
    }
  };

  useEffect(() => {
    document.title = `${business.name} | Spa Services in Indore`;
  }, [business.name]);

  return (
    <div className="min-h-screen bg-[#faf8fd] text-[#1e1b4b] flex flex-col font-sans selection:bg-[#7c3aed] selection:text-white">
      
      {/* Top Navigation */}
      <Navbar
        business={business}
        onOpenOwnerConfig={() => setIsOwnerConfigOpen(true)}
      />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* Section B: Hero Banner */}
        <Hero business={business} />

        {/* Section C: Our Spa Services with Photographic Images & Specific WhatsApp Triggers */}
        <ServicesSection services={defaultServices} business={business} />

        {/* Section D: How It Works */}
        <HowItWorks business={business} />

        {/* Section E: Why Choose Us */}
        <WhyChooseUs />

        {/* Section F: About Us */}
        <AboutSection business={business} />

        {/* Section G: Service Area in Indore */}
        <ServiceAreaSection business={business} areas={defaultServiceAreas} />

        {/* Location & Interactive Google Map */}
        <LocationMap business={business} />

        {/* Section H: Testimonials */}
        <TestimonialsSection testimonials={defaultTestimonials} />

        {/* Section I: Frequently Asked Questions */}
        <FaqSection faqs={defaultFaqs} business={business} />

        {/* Section J: Contact & WhatsApp Booking Inquiry Form */}
        <ContactSection business={business} services={defaultServices} />
      </main>

      {/* Footer */}
      <Footer
        business={business}
        services={defaultServices}
        onOpenLegal={(type) => setActiveLegalModal(type)}
        onOpenOwnerConfig={() => setIsOwnerConfigOpen(true)}
      />

      {/* Floating WhatsApp and Phone Buttons */}
      <FloatingContactButtons business={business} />

      {/* Legal Information Modal */}
      <LegalModal
        type={activeLegalModal}
        business={business}
        onClose={() => setActiveLegalModal(null)}
      />

      {/* Owner Quick Configuration Modal */}
      <OwnerConfigModal
        business={business}
        isOpen={isOwnerConfigOpen}
        onClose={() => setIsOwnerConfigOpen(false)}
        onSave={handleSaveConfig}
        onReset={handleResetConfig}
      />
    </div>
  );
}
