'use client';

import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
  dark?: boolean;
}

export function Card({ children, className, hover = true, dark = false }: CardProps) {
  return (
    <motion.div
      whileHover={hover ? { y: -8 } : undefined}
      transition={{ duration: 0.3, ease: 'easeOut' }}
      className={cn(
        'rounded-2xl p-6 md:p-8',
        'transition-shadow duration-300',
        dark
          ? 'bg-industrial-gray-light border border-industrial-gray-lighter'
          : 'bg-white border border-medium-gray shadow-sm',
        hover && 'hover:shadow-xl',
        className
      )}
    >
      {children}
    </motion.div>
  );
}
