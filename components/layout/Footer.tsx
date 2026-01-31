import Link from 'next/link';
import Image from 'next/image';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';
import { NAV_LINKS, CONTACT_INFO, SERVICES } from '@/lib/constants';
import { formatPhoneLink, formatEmailLink } from '@/lib/utils';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white text-gray-600 border-t border-gray-200">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-3 mb-6">
              <div className="relative w-10 h-10">
                <Image
                  src="/images/logo-icon.png"
                  alt="Saab Electric"
                  fill
                  className="object-contain"
                />
              </div>
              <span className="font-heading font-bold text-xl text-gray-900">
                Saab Electric
              </span>
            </Link>
            <p className="text-sm leading-relaxed mb-6">
              Serving the Greater Toronto Area since 2000. Professional electrical contracting
              services for residential, commercial, and industrial projects.
            </p>
            <div className="flex items-center gap-2 text-sm text-electric-blue">
              <Clock className="w-4 h-4" />
              <span>WSIB Certified & Insured</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-heading font-semibold text-gray-900 text-lg mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm hover:text-electric-blue transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-heading font-semibold text-gray-900 text-lg mb-6">Our Services</h3>
            <ul className="space-y-3">
              {Object.values(SERVICES).map((service) => (
                <li key={service.href}>
                  <Link
                    href={service.href}
                    className="text-sm hover:text-electric-blue transition-colors duration-200"
                  >
                    {service.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-heading font-semibold text-gray-900 text-lg mb-6">Contact Us</h3>
            <ul className="space-y-4">
              <li>
                <a
                  href={`https://maps.google.com/?q=${encodeURIComponent(CONTACT_INFO.address.full)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-3 text-sm hover:text-electric-blue transition-colors duration-200"
                >
                  <MapPin className="w-5 h-5 flex-shrink-0 mt-0.5 text-electric-blue" />
                  <span>
                    {CONTACT_INFO.address.street}
                    <br />
                    {CONTACT_INFO.address.city}, {CONTACT_INFO.address.province}{' '}
                    {CONTACT_INFO.address.postalCode}
                  </span>
                </a>
              </li>
              <li>
                <a
                  href={formatPhoneLink(CONTACT_INFO.phone)}
                  className="flex items-center gap-3 text-sm hover:text-electric-blue transition-colors duration-200"
                >
                  <Phone className="w-5 h-5 flex-shrink-0 text-electric-blue" />
                  <span>{CONTACT_INFO.phone}</span>
                </a>
              </li>
              <li>
                <a
                  href={formatEmailLink(CONTACT_INFO.email)}
                  className="flex items-center gap-3 text-sm hover:text-electric-blue transition-colors duration-200"
                >
                  <Mail className="w-5 h-5 flex-shrink-0 text-electric-blue" />
                  <span>{CONTACT_INFO.email}</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm">
            <p>
              &copy; {currentYear} {CONTACT_INFO.company}. All Rights Reserved.
            </p>
            <div className="flex items-center gap-6">
              <Link href="/contact" className="hover:text-electric-blue transition-colors">
                Careers
              </Link>
              <span className="text-gray-300">|</span>
              <Link href="/contact" className="hover:text-electric-blue transition-colors">
                Legal
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
