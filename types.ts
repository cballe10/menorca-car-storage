export enum Language {
  EN = 'EN',
  ES = 'ES'
}

export interface NavContent {
  home: string;
  services: string;
  contact: string;
  about: string;
}

export interface HeroContent {
  title: string;
  subtitle: string;
  cta: string;
  tagline: string;
  viewServices: string;
}

export interface ServiceItem {
  title: string;
  description: string;
}

export interface ServicesContent {
  sectionTitle: string;
  heading: string;
  subheading: string;
  items: ServiceItem[];
}

export interface ContactContent {
  heading: string;
  description: string;
  nameLabel: string;
  emailLabel: string;
  phoneLabel: string;
  messageLabel: string;
  submitButton: string;
  successMessage: string;
  callUs: string;
  emailUs: string;
  location: string;
  whatsapp: string;
  locationText: string;
}

export interface AiAssistantContent {
  title: string;
  placeholder: string;
  disclaimer: string;
  welcome: string;
}

export interface Content {
  nav: NavContent;
  hero: HeroContent;
  services: ServicesContent;
  contact: ContactContent;
  ai: AiAssistantContent;
}