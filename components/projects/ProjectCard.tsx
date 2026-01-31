'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { ExternalLink } from 'lucide-react';
import type { Project } from '@/lib/types';

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.3 }}
      className="group relative overflow-hidden rounded-2xl bg-industrial-gray aspect-[4/3]"
    >
      {/* Image */}
      <Image
        src={project.image}
        alt={project.title}
        fill
        className="object-cover transition-transform duration-500 group-hover:scale-110"
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
      />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-industrial-gray via-industrial-gray/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

      {/* Content */}
      <div className="absolute inset-0 p-6 flex flex-col justify-end translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
        <span className="inline-block px-3 py-1 rounded-full bg-electric-blue/20 text-electric-blue text-xs font-medium w-fit mb-2 capitalize">
          {project.category}
        </span>
        <h3 className="font-heading text-xl font-semibold text-white mb-2">
          {project.title}
        </h3>
        <p className="text-gray-300 text-sm line-clamp-2">
          {project.description}
        </p>
      </div>

      {/* Corner Icon */}
      <div className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <ExternalLink className="w-5 h-5 text-white" />
      </div>
    </motion.div>
  );
}
