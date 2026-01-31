import type { Metadata } from 'next';
import { Section, Container, AnimatedSection } from '@/components/ui';
import { ProjectGrid } from '@/components/projects';

export const metadata: Metadata = {
  title: 'Our Projects',
  description:
    'Explore our portfolio of residential, commercial, industrial, and special electrical projects completed across the Greater Toronto Area.',
};

export default function ProjectsPage() {
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
              Our Work
            </p>
            <h1 className="font-heading text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-gray-900 leading-[0.95] tracking-tight mb-8">
              Featured
              <br />
              <span className="text-blue-700">Projects</span>
            </h1>
            <p className="text-lg text-gray-500 max-w-xl leading-relaxed">
              Over the years, Saab Electric has been a part of many residential, commercial,
              industrial and special projects. All of our projects adhere to the safety code
              and we are proud to provide electrical construction and power solutions to our
              clients and customers.
            </p>
            {/* Simple visual accent */}
            <div className="w-16 h-px bg-gray-300 mt-12" />
          </AnimatedSection>
        </Container>

        {/* Bottom border */}
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gray-100" />
      </section>

      {/* Projects Grid */}
      <Section>
        <Container>
          <ProjectGrid />
        </Container>
      </Section>
    </>
  );
}
