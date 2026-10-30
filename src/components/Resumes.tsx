const resumes = [
  ['Frontend Software Engineer', 'Production Vue 3 applications, responsive dashboards, and complex interfaces owned from architecture through release, with additional React project experience.', 'JavaScript · Vue · React · Playwright', 'frontend-software-engineer', 'Frontend résumé'],
  ['Full Stack Software Engineer', 'JavaScript applications, Python/Django APIs, SQL, and external integrations. Experience modernizing legacy apps and delivering features from data retrieval to the interface.', 'JavaScript / Python · Django · Node.js · SQL', 'full-stack-software-engineer', 'Full stack résumé'],
  ['Solutions Engineer', 'Hands-on engineering backed by extensive technical support and consulting experience. I translate user workflows into applications, integrations, and clear technical solutions.', 'Workflow analysis · API integration · Troubleshooting', 'solutions-engineer', 'Solutions résumé'],
];

export default function Resumes() {
  return <section id="resumes" className="section-shell section-space">
    <p id="services" className="eyebrow">01 / résumés &amp; opportunities</p><h2 className="section-title">Where I can contribute.</h2>
    <p className="mb-10 max-w-2xl text-lg leading-relaxed text-paper/80">I’m looking for a full-time role on a team building useful software. Choose the résumé that fits your opening; each is available as a PDF.</p>
    <div className="grid gap-6 md:grid-cols-3">{resumes.map(([title, description, skills, slug, label]) => <article key={slug} className="flex flex-col border-t border-rose/40 pt-6">
      <h3 className="font-display text-xl font-semibold">{title}</h3><p className="mb-4 mt-4 flex-1 leading-relaxed text-paper/75">{description}</p><p className="mb-6 font-mono text-xs leading-relaxed text-steel">{skills}</p><a className="text-link self-start" href={`/resumes/nicholas-bennett-${slug}.pdf`}>{label} (PDF) <span aria-hidden="true">↗</span></a>
    </article>)}</div>
  </section>;
}
