'use client';

import { AnimatedSection } from '@/components/ui';

export function MapEmbed() {
  // Google Maps embed URL for 421 Nugget Ave Unit 1, Toronto, ON M1S 4L8
  const mapSrc = `https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2878.8774799!2d-79.2847!3d43.7868!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89d4d16e59e3a5d1%3A0x8c4c0c0c0c0c0c0c!2s421%20Nugget%20Ave%2C%20Scarborough%2C%20ON%20M1S%204L8%2C%20Canada!5e0!3m2!1sen!2sca!4v1700000000000!5m2!1sen!2sca`;

  return (
    <AnimatedSection delay={0.3}>
      <div className="rounded-2xl overflow-hidden shadow-lg h-[400px] lg:h-full lg:min-h-[500px]">
        <iframe
          src={mapSrc}
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Saab Electric Location - 421 Nugget Ave Unit 1, Toronto"
          className="grayscale hover:grayscale-0 transition-all duration-500"
        />
      </div>
    </AnimatedSection>
  );
}
