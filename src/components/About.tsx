export default function About() {
  return <section id="about" className="section-shell section-space">
    <p className="eyebrow">03 / experience &amp; approach</p>
    <div className="grid gap-12 md:grid-cols-2"><div><h2 className="section-title">The people have always been the point.</h2>
      <p className="text-lg leading-relaxed text-paper/80">At CyberMaxx, a managed cybersecurity services provider, I worked as a software engineer from May 2025 to November 2026. I built security operations interfaces and customer reporting with Vue, Python/Django, and SQL. Working closely with Customer Success Managers, I helped investigate escalations, understand client feedback, and turn it into customer-facing improvements.</p>
      <p className="mt-5 leading-relaxed text-paper/75">My background also includes 16 years in technical support and healthcare software consulting. I’m comfortable working through a difficult technical issue and explaining it to someone who doesn’t spend their day thinking about software.</p>
      <p className="mt-5 leading-relaxed text-paper/75">I’ve completed more than 4,000 Uber rides and worked at Trader Joe’s, too. Across all of it, my favorite part has been getting to know people, understanding what they need, and helping. Moving into Customer Success Management is an intentional next step.</p>
      <p className="mt-5 leading-relaxed text-paper/75">Outside work, I organize Tiny Goose Club, a biweekly public creative meetup in Baltimore, and build community apps and music software. At 6′6″, I bring the “big” in Big Friendly Function quite literally.</p>
    </div><div><h3 className="mb-6 font-display text-xl font-semibold">How I work with people</h3>
      <ol className="space-y-4">{['Listen first and understand the goal', 'Make the technical details clear', 'Bring the right people into the problem', 'Follow through and learn from feedback'].map((step, i) => <li key={step} className="flex gap-4 border-b border-white/10 pb-4"><span className="font-mono text-sm text-rose">0{i + 1}</span>{step}</li>)}</ol>
      <h3 className="mb-3 mt-8 font-display text-xl font-semibold">Cybersecurity &amp; technical experience</h3><p className="leading-relaxed text-paper/75">SIEM platforms including Elastic, Devo, and AlienVault USM; MITRE ATT&amp;CK; and security operations workflows. My experience connects cybersecurity software development with technical troubleshooting and escalation management.</p>
      <p className="mt-3 leading-relaxed text-paper/75">Hands-on engineering with JavaScript, Vue, React, TypeScript, Python, Django, Node.js, SQL/MySQL, and Playwright. My independent projects also include Rust and desktop development.</p>
    </div></div>
  </section>;
}
