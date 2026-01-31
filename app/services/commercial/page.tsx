import type { Metadata } from 'next';
import { ArrowRight, Building2, Flame, Power, Wrench } from 'lucide-react';
import { Section, Container, AnimatedSection, Card, Button } from '@/components/ui';
import { ServiceHero, ServiceList } from '@/components/services';
import { SERVICES } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'Commercial Electrical Services',
  description:
    'Commercial electrical construction services including new builds, renovations, building maintenance, fire alarm systems, and stand-by power.',
};

const service = SERVICES.commercial;

const serviceCategories = [
  {
    title: 'New Builds & Renovations',
    icon: Building2,
    description: 'We provide electrical installations for new builds or pre-existing structures.',
    items: [
      'Underground duct banks from property lines to pad mount transformers',
      'Duct banks from transformers to main electrical disconnects',
      'Step-down transformers, metering cabinets, splitters and disconnects',
      'HVAC installation specialization',
      'Elevators, sump pumps, power and lighting loads',
      'Parking lot lights, wall packs and various light fixtures',
    ],
  },
  {
    title: 'Office Building Maintenance',
    icon: Wrench,
    description: 'Specialization in office building maintenance including:',
    items: [
      'Water heaters',
      'Water pump repairs',
      'Light fixtures',
      'Power supply and restoration',
    ],
  },
  {
    title: 'Fire Alarm Systems',
    icon: Flame,
    description: 'The Saab Electric team has extensive experience in fire alarm system installation that are certified by a third-party fire alarm company.',
    items: [
      'Fire alarm installation',
      'Third-party certification',
      'System testing and maintenance',
      'Code compliance',
    ],
  },
  {
    title: 'Stand-by Power',
    icon: Power,
    description: 'Stand-in power generators are a good option for backup power during outages.',
    items: [
      'Generator installations',
      'Backup power systems',
      'Automatic transfer switches',
      'Emergency power solutions',
    ],
  },
];

export default function CommercialPage() {
  return (
    <>
      <ServiceHero
        title="Commercial Services"
        description="Saab Electric offers a variety of commercial electrical construction services including new builds, renovations, building maintenance, fire alarm systems and stand-by power."
        badge="Commercial"
      />

      {/* Overview */}
      <Section>
        <Container>
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <AnimatedSection>
              <h2 className="font-heading text-3xl font-bold text-text-dark mb-6">
                Quality Commercial Electrical Solutions
              </h2>
              <div className="prose prose-lg text-text-muted-dark mb-8">
                <p>
                  We ensure efficient and quality services best suited to your project needs.
                  Whether it&apos;s building a new commercial unit or required maintenance service,
                  Saab Electric has the team to help you with your commercial projects.
                </p>
                <p>
                  From new to existing builds, our experienced team delivers reliable electrical
                  solutions that meet all safety codes and industry standards.
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <Card>
                <h3 className="font-heading text-xl font-semibold text-text-dark mb-6">
                  Our Commercial Services
                </h3>
                <ServiceList items={service.items} />
              </Card>
            </AnimatedSection>
          </div>
        </Container>
      </Section>

      {/* Detailed Services */}
      <Section dark>
        <Container>
          <AnimatedSection className="text-center mb-12">
            <h2 className="font-heading text-3xl font-bold text-white mb-4">
              Detailed Service Categories
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Comprehensive commercial electrical services tailored to your business needs.
            </p>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 gap-8">
            {serviceCategories.map((category, index) => (
              <AnimatedSection key={category.title} delay={index * 0.1}>
                <Card dark className="h-full">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-12 h-12 rounded-xl bg-electric-blue/10 flex items-center justify-center flex-shrink-0">
                      <category.icon className="w-6 h-6 text-electric-blue" />
                    </div>
                    <div>
                      <h3 className="font-heading text-xl font-semibold text-white">
                        {category.title}
                      </h3>
                      <p className="text-gray-400 text-sm mt-1">{category.description}</p>
                    </div>
                  </div>
                  <ul className="space-y-2 ml-16">
                    {category.items.map((item) => (
                      <li key={item} className="text-gray-400 text-sm flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-electric-blue mt-1.5 flex-shrink-0" />
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

    </>
  );
}
