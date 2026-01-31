'use client';

import { cn } from '@/lib/utils';
import Link from 'next/link';
import { forwardRef } from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  href?: string;
  children: React.ReactNode;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'primary', size = 'md', href, children, ...props }, ref) => {
    const baseStyles = cn(
      'inline-flex items-center justify-center font-heading font-semibold rounded-lg',
      'transition-all duration-300 ease-out',
      'focus:outline-none focus-visible:ring-2 focus-visible:ring-electric-blue focus-visible:ring-offset-2',
      'disabled:opacity-50 disabled:cursor-not-allowed',
      'btn-shine'
    );

    const variants = {
      primary: cn(
        'bg-electric-blue text-white',
        'hover:bg-electric-blue-light hover:shadow-lg hover:shadow-electric-blue/30',
        'active:bg-electric-blue-dark'
      ),
      secondary: cn(
        'bg-voltage-orange text-white',
        'hover:bg-voltage-orange-light hover:shadow-lg hover:shadow-voltage-orange/30',
        'active:bg-voltage-orange-dark'
      ),
      outline: cn(
        'border-2 border-electric-blue text-electric-blue bg-transparent',
        'hover:bg-electric-blue hover:text-white',
        'active:bg-electric-blue-dark active:border-electric-blue-dark'
      ),
      ghost: cn(
        'text-electric-blue bg-transparent',
        'hover:bg-electric-blue/10',
        'active:bg-electric-blue/20'
      ),
    };

    const sizes = {
      sm: 'px-4 py-2 text-sm gap-2',
      md: 'px-6 py-3 text-base gap-2',
      lg: 'px-8 py-4 text-lg gap-3',
    };

    const classes = cn(baseStyles, variants[variant], sizes[size], className);

    if (href) {
      return (
        <Link href={href} className={classes}>
          {children}
        </Link>
      );
    }

    return (
      <button ref={ref} className={classes} {...props}>
        {children}
      </button>
    );
  }
);

Button.displayName = 'Button';

export { Button };
