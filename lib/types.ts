// Navigation
export interface NavLink {
  href: string;
  label: string;
}

// Services
export interface ServiceItem {
  title: string;
  description: string;
  href: string;
  icon: string;
  items: readonly string[];
}

// Core Values
export interface CoreValue {
  title: string;
  description: string;
  icon: string;
}

// Contact
export interface ContactInfo {
  company: string;
  address: {
    street: string;
    city: string;
    province: string;
    postalCode: string;
    full: string;
  };
  phone: string;
  fax: string;
  email: string;
  googleMapsUrl: string;
}

// Projects
export interface Project {
  id: number;
  title: string;
  category: 'residential' | 'commercial' | 'industrial' | 'special';
  image: string;
  description: string;
}

export interface ProjectCategory {
  id: string;
  label: string;
}

// Company Stats
export interface CompanyStat {
  value: string;
  label: string;
}
