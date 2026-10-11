export interface SpaService {
  id: string;
  name: string;
  category: 'Full Body' | 'Targeted' | 'Packages';
  shortDescription: string;
  fullDescription: string;
  durations: string[];
  priceDisplay: string;
  benefits: string[];
  idealFor: string;
  tag?: string;
  imageUrl: string;
  illustrationType: 'relaxation' | 'fullbody' | 'aromatherapy' | 'deeptissue' | 'headneck' | 'foot' | 'couple' | 'custom';
}

export interface BusinessConfig {
  name: string;
  tagline: string;
  category: string;
  serviceModel: string;
  phone: string;
  phoneDisplay: string;
  whatsapp: string;
  whatsappDisplay: string;
  city: string;
  state: string;
  country: string;
  postalCode: string;
  locality: string;
  landmark: string;
  referenceAddress: string;
  showStreetAddress: boolean; // only when verified
  operatingHours: string;
  emailContact: string;
}

export interface Testimonial {
  id: string;
  name: string;
  treatment: string;
  comment: string;
  rating: number;
  date: string;
  verified: boolean;
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
}

export interface ServiceArea {
  id: string;
  name: string;
  zone: string;
  status: 'Available on confirmation' | 'Subject to schedule';
}
