const contributions = [
  ['Technical depth', 'I can dig into an application, investigate a security workflow, and work with engineers on a fix. Building cybersecurity software has given me useful context for the questions customers bring.', 'Cybersecurity · SIEM platforms · Software engineering'],
  ['Support that follows through', 'Sixteen years in technical support taught me to ask useful questions, explain what’s happening in plain language, and stay with a problem through troubleshooting and escalation.', 'Technical support · Escalations · Clear communication'],
  ['People and product', 'At CyberMaxx, I worked closely with Customer Success Managers to understand client feedback and implement customer-facing improvements. I like connecting what people need with what a product can do.', 'Customer feedback · Cross-functional collaboration'],
];

export default function Contributions() {
  return <section id="focus" className="section-shell section-space">
    <p id="services" className="eyebrow">01 / what I bring</p><h2 id="resumes" className="section-title">Technical depth. A people-first approach.</h2>
    <p className="mb-10 max-w-2xl text-lg leading-relaxed text-paper/80">I’m looking for a full-time Customer Success role where understanding the technology and understanding the person go hand in hand.</p>
    <div className="grid gap-6 md:grid-cols-3">{contributions.map(([title, description, skills]) => <article key={title} className="flex flex-col border-t border-rose/40 pt-6">
      <h3 className="font-display text-xl font-semibold">{title}</h3><p className="mb-4 mt-4 flex-1 leading-relaxed text-paper/75">{description}</p><p className="mb-6 font-mono text-xs leading-relaxed text-steel">{skills}</p>
    </article>)}</div>
  </section>;
}
