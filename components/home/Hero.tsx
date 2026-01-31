'use client';

import { motion } from 'framer-motion';
import { Container } from '@/components/ui';

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center bg-white overflow-hidden">
      {/* Subtle grid pattern - barely visible */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(to right, #000 1px, transparent 1px),
                           linear-gradient(to bottom, #000 1px, transparent 1px)`,
          backgroundSize: '80px 80px'
        }}
      />

      <Container className="relative z-10 pt-32 pb-20">
        <div className="max-w-4xl">
          {/* Small label */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="text-xs uppercase tracking-[0.3em] text-gray-400 mb-8 font-medium"
          >
            Toronto &middot; Since 2000
          </motion.p>

          {/* Main Heading - Large, confident typography */}
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.25, 0.1, 0.25, 1] }}
            className="font-heading text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-gray-900 leading-[0.95] tracking-tight mb-8"
          >
            Professional
            <br />
            <span className="text-blue-700">Electrical</span>
            <br />
            Solutions
          </motion.h1>

          {/* Subheading - Clean and minimal */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
            className="text-lg text-gray-500 max-w-md leading-relaxed"
          >
            Residential, commercial, and industrial electrical services.
            WSIB certified. Quality guaranteed.
          </motion.p>

          {/* Simple visual accent - thin line */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 1, delay: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
            className="w-16 h-px bg-gray-300 mt-12 origin-left"
          />
        </div>
      </Container>

      {/* Bottom border */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gray-100" />
    </section>
  );
}
