export default function Hero() {
  return <section id="top" className="section-shell pb-20 pt-16 md:pb-28 md:pt-24">
    <div className="grid items-center gap-12 md:grid-cols-[1.5fr_0.8fr]">
      <div>
        <p className="eyebrow"><span className="text-rose">function</span> bigFriendlyFunction(you) <span className="text-rose">{'{'}</span></p>
        <div className="pl-4 sm:pl-6">
          <h1 className="font-display text-4xl font-semibold leading-tight tracking-tight sm:text-5xl lg:text-6xl">Software engineer, <span className="text-rose">ready for my next team.</span></h1>
          <p className="mt-7 max-w-xl text-lg leading-relaxed text-paper/80">I’m Nicholas Bennett, a Baltimore-based software engineer available for full-time opportunities. I build responsive interfaces, JavaScript and Python applications, and integrations that help people get their work done.</p>
          <p className="mt-4 max-w-xl leading-relaxed text-paper/75">Open to Frontend Software Engineer, Full Stack Software Engineer (JavaScript / Python), and Solutions Engineer roles.</p>
        </div>
        <p aria-hidden="true" className="mt-8 font-mono text-xs text-rose">{'}'}</p>
        <div className="mt-8 flex flex-wrap gap-4"><a href="#resumes" className="button-primary">View my résumés</a><a href="#contact" className="button-secondary">Let’s talk about your role</a><a href="#portfolio" className="text-link self-center">Explore my work ↗</a></div>
      </div>
      <figure className="mx-auto w-full max-w-xs">
        {/* TODO_MEDIA: Replace with a new coworking-office portrait, preserving the existing photograph until supplied. */}
        <img src="/images/portrait.jpg" alt="Nicholas Bennett" className="h-auto w-full rounded-xl2 border border-white/10" />
        <figcaption className="mt-4 font-mono text-xs text-steel">Nicholas Bennett / Baltimore, MD</figcaption>
      </figure>
    </div>
  </section>;
}
