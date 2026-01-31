'use client';

import { CheckCircle2 } from 'lucide-react';
import { AnimatedSection } from '@/components/ui';

interface ServiceListProps {
  items: readonly string[];
  className?: string;
}

export function ServiceList({ items, className = '' }: ServiceListProps) {
  return (
    <ul className={`space-y-4 ${className}`}>
      {items.map((item, index) => (
        <AnimatedSection key={item} delay={index * 0.05} direction="left">
          <li className="flex items-start gap-3">
            <CheckCircle2 className="w-5 h-5 text-electric-blue flex-shrink-0 mt-0.5" />
            <span className="text-text-muted-dark">{item}</span>
          </li>
        </AnimatedSection>
      ))}
    </ul>
  );
}
