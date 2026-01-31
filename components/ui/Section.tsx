import { cn } from '@/lib/utils';

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  dark?: boolean;
  pattern?: boolean;
  id?: string;
}

export function Section({ children, className, dark = false, pattern = false, id }: SectionProps) {
  return (
    <section
      id={id}
      className={cn(
        'py-16 md:py-24 lg:py-32',
        dark ? 'bg-industrial-gray text-text-light' : 'bg-off-white text-text-dark',
        pattern && 'circuit-pattern',
        className
      )}
    >
      {children}
    </section>
  );
}
