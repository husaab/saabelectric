// Navigation Links
export const NAV_LINKS = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/services', label: 'Services' },
  { href: '/projects', label: 'Projects' },
  { href: '/contact', label: 'Contact' },
] as const;

// Service Categories
export const SERVICES = {
  residential: {
    title: 'Residential',
    description: 'Residential services range from general wiring, service upgrades, emergencies, renovations and a variety of additional services.',
    href: '/services/residential',
    icon: 'Home',
    items: [
      'General wiring',
      'Service upgrades',
      'Service Panel Upgrade',
      'Emergency lighting',
      'Renovations',
      'Repairs',
      'Knob & Tube Replacement',
      'Aluminum to Copper Rewiring',
      'Electric Vehicle Charging Stations',
      'In floor heating',
    ],
  },
  commercial: {
    title: 'Commercial',
    description: 'A variety of commercial electrical construction services including new builds, renovations, building maintenance, fire alarm systems and stand by power.',
    href: '/services/commercial',
    icon: 'Building2',
    items: [
      'New builds & renovations',
      'Office building maintenance',
      'Fire alarm systems',
      'Stand-by power',
      'HVAC installation',
      'Parking lot lights',
      'Water heaters & pump repairs',
      'Power supply & restoration',
    ],
  },
  industrial: {
    title: 'Industrial',
    description: 'We offer a host of services in the industrial sector to ensure safe electrical installations and operation of machinery.',
    href: '/services/industrial',
    icon: 'Factory',
    items: [
      'Electrical rooms',
      'Transformers',
      'Splitters',
      'Disconnects',
      'Load centres',
      'Connecting & powering machinery',
      'Motors, pumps and compressors',
    ],
  },
} as const;

// Core Values
export const CORE_VALUES = [
  {
    title: 'Respect',
    description: 'We respect our customers and value their loyalty and trust. We believe respect must be earned and strive to maintain it with everyone we interact with.',
    icon: 'Heart',
  },
  {
    title: 'Commitment',
    description: 'We are committed to delivering quality work in a timely manner to our customers and clients.',
    icon: 'Target',
  },
  {
    title: 'Quality',
    description: 'Providing quality services is a top priority at Saab Electric. Our work reflects our dedication to excellence.',
    icon: 'Award',
  },
  {
    title: 'Improvement',
    description: 'We continuously strive to improve our service, products and processes while keeping our team up to date with industry standards.',
    icon: 'TrendingUp',
  },
  {
    title: 'Efficiency',
    description: 'We implement processes to ensure efficiency at all levels, from project planning and coordination to onsite work.',
    icon: 'Zap',
  },
  {
    title: 'Integrity',
    description: 'We are consistent in our values and actions. The satisfaction of our customers is a testament to that.',
    icon: 'Shield',
  },
] as const;

// Contact Information
export const CONTACT_INFO = {
  company: 'Saab Electric Inc.',
  address: {
    street: '421 Nugget Ave Unit 1',
    city: 'Toronto',
    province: 'ON',
    postalCode: 'M1S 4L8',
    full: '421 Nugget Ave Unit 1, Toronto, ON M1S 4L8',
  },
  phone: '(416) 365-7222',
  fax: '1-866-421-2226',
  email: 'info@saabelectric.ca',
  googleMapsUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2878.5889944144424!2d-79.28446972346857!3d43.78897927109685!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89d4d1e8e8e8e8e9%3A0x1234567890abcdef!2s421%20Nugget%20Ave%20Unit%201%2C%20Toronto%2C%20ON%20M1S%204L8!5e0!3m2!1sen!2sca!4v1234567890',
} as const;

// Company Stats
export const COMPANY_STATS = [
  { value: '25+', label: 'Years Experience' },
  { value: '1000+', label: 'Projects Completed' },
  { value: '500+', label: 'Happy Clients' },
  { value: '100%', label: 'WSIB Certified' },
] as const;

// Project Categories
export const PROJECT_CATEGORIES = [
  { id: 'all', label: 'All Projects' },
  { id: 'residential', label: 'Residential' },
  { id: 'commercial', label: 'Commercial' },
  { id: 'industrial', label: 'Industrial' },
  { id: 'special', label: 'Special Projects' },
] as const;

// Projects
export const PROJECTS = [
  {
    id: 1,
    title: 'Bayview Residence',
    category: 'residential',
    image: '/images/projects/bayview-residence.jpg',
    description: 'Custom exterior and interior lighting for luxury stone home.',
  },
  {
    id: 2,
    title: 'Underground Duct Bank',
    category: 'commercial',
    image: '/images/projects/underground-ductbank.jpg',
    description: 'Underground electrical conduit installation for commercial building.',
  },
  {
    id: 3,
    title: 'HVAC Electrical Systems',
    category: 'commercial',
    image: '/images/projects/hvac-disconnects.jpg',
    description: 'HVAC disconnect switches and 600V splitter installation.',
  },
  {
    id: 4,
    title: 'Downtown Office Complex',
    category: 'commercial',
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=800',
    description: 'Complete electrical installation for a 15-story office building.',
  },
  {
    id: 5,
    title: 'Modern Condominium',
    category: 'residential',
    image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800',
    description: 'Electrical infrastructure for 200+ residential units.',
  },
  {
    id: 6,
    title: 'Community Center',
    category: 'special',
    image: 'https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=800',
    description: 'Multi-purpose facility with specialized lighting.',
  },
] as const;
