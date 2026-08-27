import projects from '../data/projects.json';

type Project = {
  title: string;
  description: string;
  image: string;
  tags: string[];
  link: string;
};

export default function Portfolio() {
  const items = projects as Project[];

  return (
    <section id="portfolio" className="mx-auto max-w-5xl px-6 py-20">
      <p className="mb-3 font-mono text-sm text-steel">02 / portfolio</p>
      <h2 className="mb-10 font-display text-3xl font-semibold text-paper">
        Selected work.
      </h2>

      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((project) => (
          <article
            key={project.title}
            className="group flex flex-col overflow-hidden rounded-xl2 border border-white/10 bg-ink-soft transition-colors hover:border-rose/50"
          >
            <div className="aspect-video overflow-hidden">
              <img
                src={project.image}
                alt=""
                className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </div>
            <div className="flex flex-1 flex-col gap-3 p-5">
              <h3 className="font-display text-lg font-semibold text-paper">
                {project.title}
              </h3>
              <p className="flex-1 text-sm leading-relaxed text-paper/70">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full bg-white/5 px-3 py-1 font-mono text-xs text-steel"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              {project.link && (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="mt-1 font-display text-sm font-semibold text-rose hover:underline"
                >
                  View project ↗
                </a>
              )}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
