'use client';

import { Phone, Mail, MapPin, Clock } from 'lucide-react';
import { Card, AnimatedSection } from '@/components/ui';
import { CONTACT_INFO } from '@/lib/constants';
import { formatPhoneLink, formatEmailLink } from '@/lib/utils';

export function ContactInfo() {
  const contactItems = [
    {
      icon: MapPin,
      label: 'Address',
      value: (
        <a
          href={`https://maps.google.com/?q=${encodeURIComponent(CONTACT_INFO.address.full)}`}
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-electric-blue transition-colors"
        >
          {CONTACT_INFO.address.street}
          <br />
          {CONTACT_INFO.address.city}, {CONTACT_INFO.address.province}{' '}
          {CONTACT_INFO.address.postalCode}
        </a>
      ),
    },
    {
      icon: Phone,
      label: 'Phone',
      value: (
        <a
          href={formatPhoneLink(CONTACT_INFO.phone)}
          className="hover:text-electric-blue transition-colors"
        >
          {CONTACT_INFO.phone}
        </a>
      ),
    },
    {
      icon: Mail,
      label: 'Email',
      value: (
        <a
          href={formatEmailLink(CONTACT_INFO.email)}
          className="hover:text-electric-blue transition-colors"
        >
          {CONTACT_INFO.email}
        </a>
      ),
    },
    {
      icon: Clock,
      label: 'Fax',
      value: CONTACT_INFO.fax,
    },
  ];

  return (
    <Card>
      <h2 className="font-heading text-2xl font-bold text-text-dark mb-6">
        Contact Information
      </h2>
      <div className="space-y-6">
        {contactItems.map((item, index) => (
          <AnimatedSection key={item.label} delay={index * 0.1} direction="left">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-electric-blue/10 flex items-center justify-center flex-shrink-0">
                <item.icon className="w-5 h-5 text-electric-blue" />
              </div>
              <div>
                <p className="text-sm text-text-muted-dark mb-1">{item.label}</p>
                <div className="text-text-dark font-medium">{item.value}</div>
              </div>
            </div>
          </AnimatedSection>
        ))}
      </div>
    </Card>
  );
}
