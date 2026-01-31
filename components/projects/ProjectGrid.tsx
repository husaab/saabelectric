'use client';

import { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import { ProjectCard } from './ProjectCard';
import { ProjectFilter } from './ProjectFilter';
import { PROJECTS } from '@/lib/constants';
import { AnimatedSection } from '@/components/ui';

export function ProjectGrid() {
  const [activeFilter, setActiveFilter] = useState('all');

  const filteredProjects =
    activeFilter === 'all'
      ? PROJECTS
      : PROJECTS.filter((project) => project.category === activeFilter);

  return (
    <div>
      {/* Filter */}
      <AnimatedSection className="mb-12">
        <ProjectFilter activeFilter={activeFilter} onFilterChange={setActiveFilter} />
      </AnimatedSection>

      {/* Grid */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <AnimatePresence mode="popLayout">
          {filteredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </AnimatePresence>
      </div>

      {/* Empty State */}
      {filteredProjects.length === 0 && (
        <div className="text-center py-16">
          <p className="text-text-muted-dark">No projects found in this category.</p>
        </div>
      )}
    </div>
  );
}
