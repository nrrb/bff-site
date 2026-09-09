import { projects } from '../data/projects';
import ProjectMedia from './ProjectMedia';

export default function Portfolio() {
  return <section id="portfolio" className="section-shell section-space">
    <p className="eyebrow">02 / selected projects</p><h2 className="section-title">Different problems. Thoughtful software.</h2>
    <div className="grid gap-7 sm:grid-cols-2">{projects.map((project) =>
      <article key={project.slug} className="flex flex-col overflow-hidden rounded-xl2 border border-white/10 bg-ink-soft transition-colors hover:border-rose/50">
        <ProjectMedia media={project.media[0]} compact />
        <div className="flex flex-1 flex-col p-6 sm:p-7"><p className="mb-3 font-mono text-xs leading-relaxed text-steel">{project.label}</p><h3 className="font-display text-2xl font-semibold">{project.title}</h3><p className="mb-6 mt-3 flex-1 leading-relaxed text-paper/75">{project.description}</p><a className="text-link self-start" href={`/projects/${project.slug}/`}>Explore {project.title} <span aria-hidden="true">↗</span></a></div>
      </article>
    )}</div>
  </section>;
}
