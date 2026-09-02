import ProjectCard from './ProjectCard';
import Reveal from './Reveal';
import { icons } from '@/lib/icons';
import { projects } from '@/data/projects';

export default function Projects() {
  const ArrowRight = icons.ArrowRight;

  return (
    <section id="projects" className="bg-off py-24 sm:py-28">
      <div className="mx-auto max-w-[1280px] px-5 sm:px-8">
        <Reveal className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <p className="label text-teal">Our Projects</p>
            <h2 className="mt-4 text-3xl text-navy sm:text-[2.5rem]">Selected Projects</h2>
          </div>
          <a
            href="#contact"
            className="group inline-flex items-center gap-2 border border-navy/20 px-5 py-3 text-[0.7rem] font-semibold uppercase tracking-[0.06em] text-navy transition-colors hover:border-teal hover:text-teal"
          >
            View All Projects
            <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
          </a>
        </Reveal>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {projects.map((project, i) => (
            <Reveal key={project.title} delay={i * 70} className="h-full">
              <ProjectCard project={project} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
