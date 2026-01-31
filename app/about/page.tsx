import type { Metadata } from 'next';
import { Section, Container, AnimatedSection } from '@/components/ui';
import { CORE_VALUES } from '@/lib/constants';
import { Heart, Target, Award, TrendingUp, Zap, Shield } from 'lucide-react';

export const metadata: Metadata = {
  title: 'About Us',
  description:
    'Learn about Saab Electric Inc., a Toronto-based electrical contracting company serving the GTA since 2000. WSIB certified and committed to excellence.',
};

const iconMap = {
  Heart,
  Target,
  Award,
  TrendingUp,
  Zap,
  Shield,
};

export default function AboutPage() {
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
              About Us
            </p>
            <h1 className="font-heading text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-gray-900 leading-[0.95] tracking-tight mb-8">
              Building the
              <br />
              <span className="text-blue-700">Future</span>
            </h1>
            <p className="text-lg text-gray-500 max-w-xl leading-relaxed">
              Saab Electric Inc. is an electrical contracting company based in Toronto, Ontario, Canada.
              We have been serving our customers in the Greater Toronto Area (GTA) since 2000.
            </p>
            {/* Simple visual accent */}
            <div className="w-16 h-px bg-gray-300 mt-12" />
          </AnimatedSection>
        </Container>

        {/* Bottom border */}
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gray-100" />
      </section>

      {/* Company Overview */}
      <Section>
        <Container>
          <AnimatedSection>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Experienced Electrical Professionals
            </h2>
            <div className="space-y-4 text-gray-500 leading-relaxed max-w-3xl">
              <p>
                Our customers have included homeowners, renovators, general contractors, property
                management companies, residential apartment buildings, condominiums, office buildings,
                industrial buildings, factories, and community centers—both renovations and new construction.
              </p>
              <p>
                We pride ourselves on doing quality work in a timely manner. Most of our customers are
                repeat, satisfied customers. We stand by our core values of Respect, Commitment, Quality,
                Improvement, Efficiency, and Integrity.
              </p>
              <p>
                Our professional and committed team of Office Support Staff, Operation Managers, Estimators,
                Project Managers, Lead hands, and Electricians will be happy to assist you with your
                electrical projects.
              </p>
            </div>
          </AnimatedSection>
        </Container>
      </Section>

      {/* Certifications - Light gray with clean badges */}
      <section className="py-20 bg-gray-50">
        <Container>
          <AnimatedSection className="mb-12 max-w-2xl">
            <p className="text-xs uppercase tracking-[0.3em] text-gray-400 mb-4 font-medium">
              Credentials
            </p>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Trusted &amp; Certified
            </h2>
            <p className="text-gray-500 leading-relaxed">
              We are insured and in good standing with the Workplace Safety and Insurance Board (WSIB).
              We are reliable, professional and we guarantee our work.
            </p>
          </AnimatedSection>

          <AnimatedSection delay={0.2}>
            <div className="flex flex-wrap gap-4">
              {[
                'WSIB Certified',
                'ESA Inspected',
                'Fully Insured',
                'Licensed Electricians',
              ].map((cert) => (
                <div
                  key={cert}
                  className="flex items-center gap-3 px-5 py-3 rounded-full border border-gray-200 bg-white"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-700" />
                  <span className="text-gray-900 font-medium text-sm">{cert}</span>
                </div>
              ))}
            </div>
          </AnimatedSection>
        </Container>
      </section>

      {/* Mission Statement */}
      <Section>
        <Container size="md">
          <AnimatedSection className="text-center">
            <p className="text-xs uppercase tracking-[0.3em] text-gray-400 mb-6 font-medium">
              Our Mission
            </p>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-gray-900 mb-8">
              Mission Statement
            </h2>
            <blockquote className="text-xl md:text-2xl text-gray-500 leading-relaxed">
              &quot;Our mission is to provide excellent professional electrical contracting services to our
              customers in the residential, commercial and industrial sectors. These services include
              installations, maintenance and repairs. We strive to meet and exceed customer expectations.
              Safety and efficiency are achieved through rigorous training and continuous improvement in
              whatever we do.&quot;
            </blockquote>
          </AnimatedSection>
        </Container>
      </Section>

      {/* Core Values - White with grid pattern */}
      <section className="relative py-24 md:py-32 bg-white overflow-hidden">
        {/* Subtle grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `linear-gradient(to right, #000 1px, transparent 1px),
                             linear-gradient(to bottom, #000 1px, transparent 1px)`,
            backgroundSize: '80px 80px'
          }}
        />

        {/* Top border */}
        <div className="absolute top-0 left-0 right-0 h-px bg-gray-100" />

        <Container className="relative z-10">
          <AnimatedSection className="mb-16 max-w-2xl">
            <p className="text-xs uppercase tracking-[0.3em] text-gray-400 mb-4 font-medium">
              What We Believe
            </p>
            <h2 className="font-heading text-4xl md:text-5xl font-bold text-gray-900 leading-[0.95] tracking-tight mb-6">
              Our Core
              <br />
              <span className="text-blue-700">Values</span>
            </h2>
            <p className="text-lg text-gray-500 leading-relaxed">
              At Saab Electric, we believe in providing a great experience for our customers and
              our core values define who we are, our accountability and what we aspire to.
            </p>
          </AnimatedSection>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-12">
            {CORE_VALUES.map((value, index) => {
              const Icon = iconMap[value.icon as keyof typeof iconMap];
              return (
                <AnimatedSection key={value.title} delay={index * 0.1}>
                  <div>
                    {/* Simple icon */}
                    <div className="mb-4">
                      <Icon className="w-6 h-6 text-blue-700" strokeWidth={1.5} />
                    </div>
                    <h3 className="font-heading text-lg font-semibold text-gray-900 mb-2">
                      {value.title}
                    </h3>
                    <p className="text-gray-500 text-sm leading-relaxed">{value.description}</p>
                  </div>
                </AnimatedSection>
              );
            })}
          </div>
        </Container>

        {/* Bottom border */}
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gray-100" />
      </section>
    </>
  );
}
