export default function About() {
  return <section id="about" className="section-shell section-space">
    <p className="eyebrow">03 / about &amp; process</p>
    <div className="grid gap-12 md:grid-cols-2"><div><h2 className="section-title">A real person, a practical approach.</h2>
      <p className="text-lg leading-relaxed text-paper/80">I’m a Baltimore-based developer with a creative streak and a practical approach to problem-solving. My work spans public-facing websites, interactive tools, data processing, and music software. I care about understanding the people using what I build, and keeping the people I work with informed.</p>
      <p className="mt-5 leading-relaxed text-paper/75">I work as a frontend developer in cybersecurity and take on scoped freelance projects. At 6′6″, I bring the “big” quite literally. I also enjoy making playful apps.</p>
    </div><div><h3 className="mb-6 font-display text-xl font-semibold">How we’ll work together</h3>
      <ol className="space-y-4">{['Discuss the problem', 'Agree scope and price', 'Build and review', 'Handoff'].map((step, i) => <li key={step} className="flex gap-4 border-b border-white/10 pb-4"><span className="font-mono text-sm text-rose">0{i + 1}</span>{step}</li>)}</ol>
      <h3 className="mb-3 mt-8 font-display text-xl font-semibold">Tools I work with</h3><p className="leading-relaxed text-paper/75">Vue, React, TypeScript, Python, Rust, and SQL. Web interfaces, desktop development, and data processing.</p><p className="mt-3 leading-relaxed text-paper/75">Agentic tools: Claude Code and ChatGPT Codex, using test-driven development (TDD).</p>
    </div></div>
  </section>;
}
