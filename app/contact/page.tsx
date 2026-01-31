import type { Metadata } from 'next';
import { Section, Container, AnimatedSection } from '@/components/ui';
import { ContactInfo, MapEmbed } from '@/components/contact';

export const metadata: Metadata = {
  title: 'Contact Us',
  description:
    'Contact Saab Electric for electrical services in Toronto and the GTA. Call us at (416) 365-7222 or email info@saabelectric.ca.',
};

export default function ContactPage() {
  return (
    <>
      {/* Hero Section - White with grid pattern */}
      <section className="relative min-h-[50vh] flex items-center bg-white overflow-hidden">
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
              Get In Touch
            </p>
            <h1 className="font-heading text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-gray-900 leading-[0.95] tracking-tight mb-8">
              Contact
              <br />
              <span className="text-blue-700">Us</span>
            </h1>
            <p className="text-lg text-gray-500 max-w-xl leading-relaxed">
              Have questions? Reach out to our team.
            </p>
            {/* Simple visual accent */}
            <div className="w-16 h-px bg-gray-300 mt-12" />
          </AnimatedSection>
        </Container>

        {/* Bottom border */}
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gray-100" />
      </section>

      {/* Contact Content */}
      <Section>
        <Container>
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <AnimatedSection>
              <ContactInfo />
            </AnimatedSection>

            {/* Map */}
            <MapEmbed />
          </div>
        </Container>
      </Section>

      {/* Service Area */}
      <section className="py-16 bg-gray-50">
        <Container size="md">
          <AnimatedSection className="text-center">
            <h2 className="font-heading text-2xl font-bold text-gray-900 mb-4">
              Service Area
            </h2>
            <p className="text-gray-500">
              We proudly serve Toronto and the Greater Toronto Area (GTA) including Scarborough,
              North York, Etobicoke, Mississauga, Brampton, Markham, Richmond Hill, Vaughan,
              and surrounding areas.
            </p>
          </AnimatedSection>
        </Container>
      </section>
    </>
  );
}
