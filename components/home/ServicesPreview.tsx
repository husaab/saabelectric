'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Home, Building2, Factory } from 'lucide-react';
import Link from 'next/link';
import { Section, Container, Card, AnimatedSection } from '@/components/ui';
import { SERVICES } from '@/lib/constants';

const iconMap = {
  Home,
  Building2,
  Factory,
};

export function ServicesPreview() {
  return (
    <Section className="relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-electric-blue/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-voltage-orange/5 rounded-full blur-3xl" />

      <Container>
        <AnimatedSection className="text-center mb-16">
          <span className="inline-block px-4 py-1 rounded-full bg-electric-blue/10 text-electric-blue text-sm font-medium mb-4">
            What We Offer
          </span>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-text-dark mb-6">
            Electrical Services
          </h2>
          <p className="text-text-muted-dark max-w-2xl mx-auto text-lg">
            Saab Electric provides comprehensive electrical services for industrial, residential,
            and commercial projects across the Greater Toronto Area.
          </p>
        </AnimatedSection>

        <div className="grid md:grid-cols-3 gap-8">
          {Object.entries(SERVICES).map(([key, service], index) => {
            const Icon = iconMap[service.icon as keyof typeof iconMap];

            return (
              <AnimatedSection key={key} delay={index * 0.15}>
                <Card className="h-full group">
                  <div className="flex flex-col h-full">
                    {/* Icon */}
                    <div className="relative mb-6">
                      <div className="w-16 h-16 rounded-2xl bg-electric-blue/10 flex items-center justify-center group-hover:bg-electric-blue transition-colors duration-300">
                        <Icon className="w-8 h-8 text-electric-blue group-hover:text-white transition-colors duration-300" />
                      </div>
                      {/* Glow effect */}
                      <div className="absolute inset-0 w-16 h-16 rounded-2xl bg-electric-blue/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </div>

                    {/* Content */}
                    <h3 className="font-heading text-xl font-semibold text-text-dark mb-3">
                      {service.title}
                    </h3>
                    <p className="text-text-muted-dark mb-6 flex-grow">
                      {service.description}
                    </p>

                    {/* Link */}
                    <Link
                      href={service.href}
                      className="inline-flex items-center gap-2 text-electric-blue font-medium group/link"
                    >
                      Learn More
                      <ArrowRight className="w-4 h-4 transition-transform group-hover/link:translate-x-1" />
                    </Link>
                  </div>
                </Card>
              </AnimatedSection>
            );
          })}
        </div>
      </Container>
    </Section>
  );
}
