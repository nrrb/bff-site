import { projects } from '../data/projects';
import linkedProjects from '../data/linked-projects.json';
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
    <div className="mt-16">
      <h3 className="mb-4 font-display text-2xl font-semibold">More projects &amp; experiments</h3>
      <p className="mb-8 max-w-2xl leading-relaxed text-paper/75">More of my work across web apps, creative coding, data analysis, and developer tools. Explore the project links and source on GitHub.</p>
      <details>
      <summary className="mb-6 cursor-pointer font-display text-lg font-semibold text-rose">Explore all {linkedProjects.length} projects</summary>
      <ul className="grid gap-x-10 md:grid-cols-2">{linkedProjects.map((project) =>
        <li key={project.source} className="flex flex-col border-t border-white/10 py-6">
          <h4 className="font-display text-xl font-semibold">{project.title}</h4>
          <p className="mb-5 mt-3 flex-1 leading-relaxed text-paper/75">{project.description}</p>
          <div className="flex flex-wrap gap-6"><a href={project.website} className="text-link" aria-label={`${project.linkLabel}: ${project.title}`}>{project.linkLabel} <span aria-hidden="true">↗</span></a><a href={project.source} className="text-link" aria-label={`GitHub source: ${project.title}`}>GitHub <span aria-hidden="true">↗</span></a></div>
        </li>
      )}</ul>
      </details>
    </div>
  </section>;
}
