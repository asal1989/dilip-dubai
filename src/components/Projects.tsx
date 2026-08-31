import { ImageOff } from '@/icons';
import { projectCategories } from '@/data/content';

export default function Projects() {
  return (
    <section id="projects" className="bg-cream">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 py-20 sm:py-28">
        <div className="max-w-2xl">
          <p className="eyebrow text-teal">Projects</p>
          <h2 className="font-display text-3xl sm:text-4xl font-semibold text-navy mt-4 leading-tight">
            Work Across Every Property Type
          </h2>
          <p className="mt-4 text-ink/65 leading-relaxed">
            Project photography will be added here. Each card below is wired to a category and
            ready to take a real image.
          </p>
        </div>

        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {projectCategories.map(({ category, image }) => (
            <div
              key={category}
              className="group relative aspect-[4/3] overflow-hidden rounded-sm border border-navy/10 bg-navy/5"
            >
              {image ? (
                // eslint-disable-next-line @next/next/no-img-element -- category images are user-supplied paths, not static imports
                <img src={image} alt={category} className="h-full w-full object-cover" />
              ) : (
                <div className="flex h-full w-full flex-col items-center justify-center gap-3 bg-[repeating-linear-gradient(135deg,rgba(15,41,74,0.06)_0px,rgba(15,41,74,0.06)_2px,transparent_2px,transparent_14px)]">
                  <ImageOff size={26} className="text-navy/30" />
                  <span className="font-mono text-xs text-navy/70">Image coming soon</span>
                </div>
              )}
              <div className="absolute inset-x-0 bottom-0 bg-navy/90 px-4 py-3">
                <span className="font-display text-sm font-semibold text-cream">{category}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
