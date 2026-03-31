export enum Language {
  EN = 'EN',
  ES = 'ES',
  FR = 'FR'
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

export interface HowItWorksStep {
  step: string;
  title: string;
  description: string;
}

export interface HowItWorksContent {
  sectionTitle: string;
  heading: string;
  steps: HowItWorksStep[];
}

export interface TrustStat {
  value: string;
  label: string;
}

export interface TrustBarContent {
  stats: TrustStat[];
}

export interface SeoSectionContent {
  heading: string;
  body: string[];
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
  howItWorks: HowItWorksContent;
  trustBar: TrustBarContent;
  seoSection: SeoSectionContent;
  contact: ContactContent;
  ai: AiAssistantContent;
}
