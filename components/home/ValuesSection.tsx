'use client';

import { motion } from 'framer-motion';
import { Heart, Target, Award, TrendingUp, Zap, Shield } from 'lucide-react';
import { Container, AnimatedSection } from '@/components/ui';
import { CORE_VALUES } from '@/lib/constants';

const iconMap = {
  Heart,
  Target,
  Award,
  TrendingUp,
  Zap,
  Shield,
};

export function ValuesSection() {
  return (
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

      <Container className="relative z-10">
        {/* Left-aligned header */}
        <AnimatedSection className="mb-16 max-w-2xl">
          <p className="text-xs uppercase tracking-[0.3em] text-gray-400 mb-4 font-medium">
            Why Choose Us
          </p>
          <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-[0.95] tracking-tight mb-6">
            Our Core
            <br />
            <span className="text-blue-700">Values</span>
          </h2>
          <p className="text-lg text-gray-500 leading-relaxed">
            At Saab Electric, our core values define who we are, our accountability,
            and what we aspire to deliver for every customer.
          </p>
        </AnimatedSection>

        {/* Clean grid layout */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-12">
          {CORE_VALUES.map((value, index) => {
            const Icon = iconMap[value.icon as keyof typeof iconMap];

            return (
              <AnimatedSection key={value.title} delay={index * 0.1}>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1, ease: [0.25, 0.1, 0.25, 1] }}
                  viewport={{ once: true }}
                  className="group"
                >
                  {/* Simple icon - no background box */}
                  <div className="mb-4">
                    <Icon className="w-6 h-6 text-blue-700" strokeWidth={1.5} />
                  </div>

                  {/* Content */}
                  <h3 className="font-heading text-lg font-semibold text-gray-900 mb-2">
                    {value.title}
                  </h3>
                  <p className="text-gray-500 text-sm leading-relaxed">
                    {value.description}
                  </p>
                </motion.div>
              </AnimatedSection>
            );
          })}
        </div>
      </Container>

      {/* Bottom border */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gray-100" />
    </section>
  );
}
