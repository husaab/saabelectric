'use client';

import { motion } from 'framer-motion';

interface ElectricalPatternProps {
  className?: string;
  animated?: boolean;
}

export function ElectricalPattern({ className = '', animated = true }: ElectricalPatternProps) {
  return (
    <svg
      className={`absolute inset-0 w-full h-full ${className}`}
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="xMidYMid slice"
    >
      <defs>
        <pattern
          id="circuit-grid"
          x="0"
          y="0"
          width="100"
          height="100"
          patternUnits="userSpaceOnUse"
        >
          {/* Vertical lines */}
          <path
            d="M50 0 L50 30 M50 70 L50 100"
            stroke="currentColor"
            strokeWidth="0.5"
            fill="none"
            opacity="0.2"
          />
          {/* Horizontal lines */}
          <path
            d="M0 50 L30 50 M70 50 L100 50"
            stroke="currentColor"
            strokeWidth="0.5"
            fill="none"
            opacity="0.2"
          />
          {/* Corner connectors */}
          <path
            d="M30 30 L30 50 L50 50 M70 70 L70 50 L50 50"
            stroke="currentColor"
            strokeWidth="0.5"
            fill="none"
            opacity="0.15"
          />
          {/* Center node */}
          <circle cx="50" cy="50" r="4" fill="currentColor" opacity="0.15" />
          {/* Corner nodes */}
          <circle cx="30" cy="30" r="2" fill="currentColor" opacity="0.1" />
          <circle cx="70" cy="70" r="2" fill="currentColor" opacity="0.1" />
        </pattern>

        {/* Animated gradient for energy flow */}
        {animated && (
          <linearGradient id="energy-flow" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="var(--electric-blue)" stopOpacity="0">
              <animate
                attributeName="offset"
                values="0;1;0"
                dur="3s"
                repeatCount="indefinite"
              />
            </stop>
            <stop offset="50%" stopColor="var(--electric-blue)" stopOpacity="0.5">
              <animate
                attributeName="offset"
                values="0.5;1.5;0.5"
                dur="3s"
                repeatCount="indefinite"
              />
            </stop>
            <stop offset="100%" stopColor="var(--electric-blue)" stopOpacity="0">
              <animate
                attributeName="offset"
                values="1;2;1"
                dur="3s"
                repeatCount="indefinite"
              />
            </stop>
          </linearGradient>
        )}
      </defs>

      {/* Base pattern */}
      <rect width="100%" height="100%" fill="url(#circuit-grid)" />

      {/* Animated energy lines */}
      {animated && (
        <g className="text-electric-blue">
          <motion.path
            d="M0 50% Q 25% 30% 50% 50% T 100% 50%"
            stroke="url(#energy-flow)"
            strokeWidth="2"
            fill="none"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: [0, 0.5, 0] }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: 'linear',
            }}
          />
        </g>
      )}
    </svg>
  );
}
