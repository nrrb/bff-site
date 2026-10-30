export default function About() {
  return <section id="about" className="section-shell section-space">
    <p className="eyebrow">03 / experience &amp; approach</p>
    <div className="grid gap-12 md:grid-cols-2"><div><h2 className="section-title">Engineering with the user in mind.</h2>
      <p className="text-lg leading-relaxed text-paper/80">My experience spans cybersecurity software, university applications, technical support, and consulting. At CyberMaxx, I built security operations interfaces and customer reporting with Vue, Python/Django, and SQL, contributing to weekly production releases on an eight-person engineering team.</p>
      <p className="mt-5 leading-relaxed text-paper/75">A long background in technical support shapes how I build: understand the workflow, ask useful questions, and follow problems through to a working solution. I’m looking to bring that approach to my next full-time team.</p>
      <p className="mt-5 leading-relaxed text-paper/75">Outside work, I build community apps and music software. At 6′6″, I bring the “big” in Big Friendly Function quite literally.</p>
    </div><div><h3 className="mb-6 font-display text-xl font-semibold">How I work with a team</h3>
      <ol className="space-y-4">{['Understand the users and the problem', 'Agree on priorities with the team', 'Build, test, and review', 'Release, learn, and improve'].map((step, i) => <li key={step} className="flex gap-4 border-b border-white/10 pb-4"><span className="font-mono text-sm text-rose">0{i + 1}</span>{step}</li>)}</ol>
      <h3 className="mb-3 mt-8 font-display text-xl font-semibold">Tools I work with</h3><p className="leading-relaxed text-paper/75">JavaScript, Vue, React, TypeScript, Python, Django, Node.js, SQL/MySQL, and Playwright. My independent projects also include Rust and desktop development.</p><p className="mt-3 leading-relaxed text-paper/75">I also use Claude Code and ChatGPT Codex alongside automated testing and code review.</p>
    </div></div>
  </section>;
}
