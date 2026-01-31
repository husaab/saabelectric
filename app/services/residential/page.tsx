import type { Metadata } from 'next';
import { ArrowRight, Home, Shield, Zap } from 'lucide-react';
import { Section, Container, AnimatedSection, Card, Button } from '@/components/ui';
import { ServiceHero, ServiceList } from '@/components/services';
import { SERVICES } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'Residential Electrical Services',
  description:
    'Professional residential electrical services including general wiring, service upgrades, EV charging stations, renovations, and emergency repairs.',
};

const service = SERVICES.residential;

const serviceCategories = [
  {
    title: 'Wiring & Upgrades',
    icon: Zap,
    items: ['General wiring', 'Service upgrades', 'Service Panel Upgrade', 'Aluminum to Copper Rewiring'],
  },
  {
    title: 'Specialized Services',
    icon: Home,
    items: ['Electric Vehicle Charging Stations', 'In floor heating', 'Emergency lighting', 'Knob & Tube Replacement'],
  },
  {
    title: 'Repairs & Renovations',
    icon: Shield,
    items: ['Renovations', 'Repairs', 'Emergency services', 'Troubleshooting'],
  },
];

export default function ResidentialPage() {
  return (
    <>
      <ServiceHero
        title="Residential Services"
        description="The core of our business is providing electrical contracting services to new and existing residential properties. Our electrical contractors are dependable, reliable with a proven track record of getting the job done."
        badge="Residential"
      />

      {/* Main Content */}
      <Section>
        <Container>
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <AnimatedSection>
              <h2 className="font-heading text-3xl font-bold text-text-dark mb-6">
                Complete Residential Electrical Solutions
              </h2>
              <div className="prose prose-lg text-text-muted-dark mb-8">
                <p>
                  Whether it&apos;s repairs or you&apos;re building your dream home and require an electrical
                  contractor, we are here to help. Our contractors work with you to carry out original
                  designs or help you design a system that is the right fit for your home.
                </p>
                <p>
                  All work adheres to the Ontario Electrical Code and inspections are done by the
                  Electrical Safety Authority (ESA).
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <Card>
                <h3 className="font-heading text-xl font-semibold text-text-dark mb-6">
                  Our Residential Services
                </h3>
                <ServiceList items={service.items} />
              </Card>
            </AnimatedSection>
          </div>
        </Container>
      </Section>

      {/* Service Categories */}
      <section className="py-20 bg-gray-50">
        <Container>
          <AnimatedSection className="text-center mb-12">
            <h2 className="font-heading text-3xl font-bold text-gray-900 mb-4">
              Service Categories
            </h2>
            <p className="text-gray-500 max-w-2xl mx-auto">
              We offer comprehensive residential electrical services to meet all your needs.
            </p>
          </AnimatedSection>

          <div className="grid md:grid-cols-3 gap-8">
            {serviceCategories.map((category, index) => (
              <AnimatedSection key={category.title} delay={index * 0.15}>
                <Card className="h-full">
                  <div className="w-12 h-12 rounded-xl bg-gray-100 flex items-center justify-center mb-4">
                    <category.icon className="w-6 h-6 text-blue-700" />
                  </div>
                  <h3 className="font-heading text-xl font-semibold text-gray-900 mb-4">
                    {category.title}
                  </h3>
                  <ul className="space-y-2">
                    {category.items.map((item) => (
                      <li key={item} className="text-gray-500 flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-blue-700" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </Card>
              </AnimatedSection>
            ))}
          </div>
        </Container>
      </section>

    </>
  );
}
