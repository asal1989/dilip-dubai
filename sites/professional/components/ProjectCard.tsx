import Image from 'next/image';
import { icons } from '@/lib/icons';
import type { Project } from '@/data/projects';

export default function ProjectCard({ project }: { project: Project }) {
  const MapPin = icons.MapPin;
  const ArrowRight = icons.ArrowRight;

  return (
    <a href="#contact" className="group flex h-full flex-col border border-navy/10 bg-white">
      <div className="relative aspect-[4/3] overflow-hidden">
        <Image
          src={project.image}
          alt={`${project.title} — ${project.location}`}
          fill
          sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
          className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
        />
        <div className="absolute inset-0 bg-navy/0 transition-colors duration-500 group-hover:bg-navy/15" />
      </div>
      <div className="flex flex-1 flex-col p-5">
        <h3 className="font-sans text-[0.98rem] font-semibold text-navy">{project.title}</h3>
        <p className="mt-1.5 flex items-center gap-1.5 text-xs text-navy/55">
          <MapPin size={13} className="text-teal" />
          {project.location}
        </p>
        <div className="mt-4 flex items-center justify-between border-t border-navy/10 pt-3">
          <span className="font-mono text-[0.68rem] uppercase tracking-[0.16em] text-teal">
            {project.category}
          </span>
          <ArrowRight
            size={16}
            className="text-navy/30 transition-all duration-300 group-hover:translate-x-1 group-hover:text-teal"
          />
        </div>
      </div>
    </a>
  );
}
