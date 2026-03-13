export interface Project {
  id: string;
  title: string;
  location: string;
  category: 'route' | 'amenagement' | 'immobilier';
  image: string;
  description?: string;
}

export interface Stat {
  value: number;
  label: string;
  suffix?: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}

export interface Expertise {
  title: string;
  icon: string;
  items: string[];
}

export interface GovernanceValue {
  title: string;
  description: string;
  icon: string;
}