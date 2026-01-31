'use client';

import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import { PROJECT_CATEGORIES } from '@/lib/constants';

interface ProjectFilterProps {
  activeFilter: string;
  onFilterChange: (filter: string) => void;
}

export function ProjectFilter({ activeFilter, onFilterChange }: ProjectFilterProps) {
  return (
    <div className="flex flex-wrap justify-center gap-3">
      {PROJECT_CATEGORIES.map((category) => (
        <button
          key={category.id}
          onClick={() => onFilterChange(category.id)}
          className={cn(
            'relative px-5 py-2 rounded-full font-medium text-sm transition-colors duration-200',
            activeFilter === category.id
              ? 'text-white'
              : 'text-text-muted-dark hover:text-text-dark'
          )}
        >
          {activeFilter === category.id && (
            <motion.span
              layoutId="filter-indicator"
              className="absolute inset-0 bg-electric-blue rounded-full"
              transition={{ type: 'spring', bounce: 0.2, duration: 0.6 }}
            />
          )}
          <span className="relative z-10">{category.label}</span>
        </button>
      ))}
    </div>
  );
}
