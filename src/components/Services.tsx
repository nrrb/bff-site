const services = [
  ['Website launches and refreshes', 'A focused website with responsive layouts, a distinctive identity, and the contact, signup, or service integrations you need.', 'Discuss your website'],
  ['Existing-app improvements', 'Interface polish, bug fixes, and new features for an app you already have. We agree on a defined set of changes before the work begins.', 'Discuss your app'],
  ['Custom workflow tools', 'Software that turns repetitive processing, spreadsheet tasks, and awkward handoffs into a workflow people can use.', 'Discuss your workflow'],
];
export default function Services() {
  return <section id="services" className="section-shell section-space">
    <p className="eyebrow">01 / services</p><h2 className="section-title">What can I help you build?</h2>
    <div className="grid gap-6 md:grid-cols-3">{services.map(([title, description, action], i) => <article key={title} className="flex flex-col border-t border-rose/40 pt-6">
      <span className="mb-6 font-mono text-sm text-steel">0{i + 1}</span><h3 className="font-display text-xl font-semibold">{title}</h3><p className="mb-6 mt-4 flex-1 leading-relaxed text-paper/75">{description}</p><a className="text-link" href="#contact">{action} ↗</a>
    </article>)}</div>
  </section>;
}
