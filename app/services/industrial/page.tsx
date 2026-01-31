import type { Metadata } from 'next';
import { ArrowRight, Factory, Cog, Gauge, Power } from 'lucide-react';
import { Section, Container, AnimatedSection, Card, Button } from '@/components/ui';
import { ServiceHero, ServiceList } from '@/components/services';
import { SERVICES } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'Industrial Electrical Services',
  description:
    'Industrial electrical services including electrical rooms, transformers, machinery connections, and power distribution systems.',
};

const service = SERVICES.industrial;

const capabilities = [
  {
    title: 'Electrical Infrastructure',
    icon: Power,
    items: ['Electrical rooms', 'Transformers', 'Splitters', 'Disconnects', 'Load centres'],
  },
  {
    title: 'Machinery & Equipment',
    icon: Cog,
    items: ['Connecting & powering machinery', 'Motors installation', 'Pumps wiring', 'Compressors'],
  },
  {
    title: 'Power Distribution',
    icon: Gauge,
    items: ['High-capacity systems', 'Load balancing', 'Safety compliance', 'System optimization'],
  },
];

export default function IndustrialPage() {
  return (
    <>
      <ServiceHero
        title="Industrial Services"
        description="Our Operations and Service team work to ensure your industrial construction project needs are met. We offer a host of services in the industrial sector to ensure safe electrical installations and operation of machinery."
        badge="Industrial"
      />

      {/* Overview */}
      <Section>
        <Container>
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <AnimatedSection>
              <h2 className="font-heading text-3xl font-bold text-text-dark mb-6">
                Industrial Electrical Expertise
              </h2>
              <div className="prose prose-lg text-text-muted-dark mb-8">
                <p>
                  Saab Electric offers industrial contracting services from setting up new facilities,
                  new electrical installations or powering up machinery. Our team has the expertise
                  and resources for all your industrial electrical needs.
                </p>
                <p>
                  We ensure all installations meet safety codes and are optimized for efficient
                  operation of your industrial equipment.
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <Card>
                <h3 className="font-heading text-xl font-semibold text-text-dark mb-6">
                  Our Industrial Services
                </h3>
                <ServiceList items={service.items} />
              </Card>
            </AnimatedSection>
          </div>
        </Container>
      </Section>

      {/* Capabilities */}
      <Section dark>
        <Container>
          <AnimatedSection className="text-center mb-12">
            <h2 className="font-heading text-3xl font-bold text-white mb-4">
              Our Capabilities
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Comprehensive industrial electrical solutions for manufacturing and production facilities.
            </p>
          </AnimatedSection>

          <div className="grid md:grid-cols-3 gap-8">
            {capabilities.map((capability, index) => (
              <AnimatedSection key={capability.title} delay={index * 0.15}>
                <Card dark className="h-full text-center">
                  <div className="w-16 h-16 rounded-2xl bg-electric-blue/10 flex items-center justify-center mx-auto mb-6">
                    <capability.icon className="w-8 h-8 text-electric-blue" />
                  </div>
                  <h3 className="font-heading text-xl font-semibold text-white mb-4">
                    {capability.title}
                  </h3>
                  <ul className="space-y-2">
                    {capability.items.map((item) => (
                      <li key={item} className="text-gray-400 flex items-center justify-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-electric-blue" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </Card>
              </AnimatedSection>
            ))}
          </div>
        </Container>
      </Section>

      {/* Industries Served */}
      <Section>
        <Container size="md">
          <AnimatedSection className="text-center mb-12">
            <h2 className="font-heading text-3xl font-bold text-text-dark mb-4">
              Industries We Serve
            </h2>
            <p className="text-text-muted-dark max-w-2xl mx-auto">
              Our industrial expertise spans multiple sectors and facility types.
            </p>
          </AnimatedSection>

          <AnimatedSection delay={0.2}>
            <div className="flex flex-wrap justify-center gap-4">
              {[
                'Manufacturing Plants',
                'Warehouses',
                'Distribution Centers',
                'Production Facilities',
                'Processing Plants',
                'Industrial Complexes',
              ].map((industry) => (
                <span
                  key={industry}
                  className="px-6 py-3 rounded-full bg-light-gray text-text-dark font-medium"
                >
                  {industry}
                </span>
              ))}
            </div>
          </AnimatedSection>
        </Container>
      </Section>

    </>
  );
}
