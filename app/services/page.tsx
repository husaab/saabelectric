import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, Home, Building2, Factory } from 'lucide-react';
import { Section, Container, AnimatedSection, Card, Button } from '@/components/ui';
import { SERVICES } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'Our Services',
  description:
    'Comprehensive electrical services for residential, commercial, and industrial projects. From general wiring to complex installations.',
};

const iconMap = {
  Home,
  Building2,
  Factory,
};

export default function ServicesPage() {
  return (
    <>
      {/* Hero Section - White with grid pattern */}
      <section className="relative min-h-[60vh] flex items-center bg-white overflow-hidden">
        {/* Subtle grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `linear-gradient(to right, #000 1px, transparent 1px),
                             linear-gradient(to bottom, #000 1px, transparent 1px)`,
            backgroundSize: '80px 80px'
          }}
        />

        <Container className="relative z-10 pt-32 pb-16">
          <AnimatedSection>
            <p className="text-xs uppercase tracking-[0.3em] text-gray-400 mb-8 font-medium">
              What We Offer
            </p>
            <h1 className="font-heading text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-gray-900 leading-[0.95] tracking-tight mb-8">
              Electrical
              <br />
              <span className="text-blue-700">Services</span>
            </h1>
            <p className="text-lg text-gray-500 max-w-xl leading-relaxed">
              Saab Electric provides electrical services for industrial, residential, and commercial
              projects. Our experienced team delivers quality work tailored to your specific needs.
            </p>
            {/* Simple visual accent */}
            <div className="w-16 h-px bg-gray-300 mt-12" />
          </AnimatedSection>
        </Container>

        {/* Bottom border */}
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gray-100" />
      </section>

      {/* Services Grid */}
      <Section>
        <Container>
          <div className="grid md:grid-cols-3 gap-8">
            {Object.entries(SERVICES).map(([key, service], index) => {
              const Icon = iconMap[service.icon as keyof typeof iconMap];

              return (
                <AnimatedSection key={key} delay={index * 0.15}>
                  <Card className="h-full group">
                    <div className="flex flex-col h-full">
                      {/* Icon */}
                      <div className="relative mb-6">
                        <div className="w-16 h-16 rounded-2xl bg-gray-100 flex items-center justify-center group-hover:bg-blue-700 transition-colors duration-300">
                          <Icon className="w-8 h-8 text-blue-700 group-hover:text-white transition-colors duration-300" />
                        </div>
                      </div>

                      {/* Content */}
                      <h2 className="font-heading text-2xl font-semibold text-gray-900 mb-4">
                        {service.title}
                      </h2>
                      <p className="text-gray-500 mb-6 flex-grow">
                        {service.description}
                      </p>

                      {/* Service Items Preview */}
                      <ul className="space-y-2 mb-6">
                        {service.items.slice(0, 4).map((item) => (
                          <li key={item} className="text-sm text-gray-500 flex items-center gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-blue-700" />
                            {item}
                          </li>
                        ))}
                        {service.items.length > 4 && (
                          <li className="text-sm text-blue-700 font-medium">
                            +{service.items.length - 4} more services
                          </li>
                        )}
                      </ul>

                      {/* Link */}
                      <Button href={service.href} variant="outline" className="w-full mt-auto">
                        View Details
                        <ArrowRight className="w-4 h-4" />
                      </Button>
                    </div>
                  </Card>
                </AnimatedSection>
              );
            })}
          </div>
        </Container>
      </Section>

    </>
  );
}
