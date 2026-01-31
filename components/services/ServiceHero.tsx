'use client';

import { Container, AnimatedSection } from '@/components/ui';

interface ServiceHeroProps {
  title: string;
  description: string;
  badge: string;
}

export function ServiceHero({ title, description, badge }: ServiceHeroProps) {
  // Split title to add navy accent to first word
  const titleWords = title.split(' ');
  const firstWord = titleWords[0];
  const restOfTitle = titleWords.slice(1).join(' ');

  return (
    <section className="relative min-h-[50vh] flex items-center bg-white overflow-hidden">
      {/* Subtle grid pattern - matches other heroes */}
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
            {badge}
          </p>
          <h1 className="font-heading text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-gray-900 leading-[0.95] tracking-tight mb-8">
            <span className="text-blue-700">{firstWord}</span>
            {restOfTitle && (
              <>
                <br />
                {restOfTitle}
              </>
            )}
          </h1>
          <p className="text-lg text-gray-500 max-w-xl leading-relaxed">
            {description}
          </p>
          {/* Simple visual accent */}
          <div className="w-16 h-px bg-gray-300 mt-12" />
        </AnimatedSection>
      </Container>

      {/* Bottom border */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gray-100" />
    </section>
  );
}
