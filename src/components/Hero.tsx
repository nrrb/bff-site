export default function Hero() {
  return <section id="top" className="section-shell pb-20 pt-16 md:pb-28 md:pt-24">
    <div className="grid items-center gap-12 md:grid-cols-[1.5fr_0.8fr]">
      <div>
        <p className="eyebrow"><span className="text-rose">function</span> NicholasBennett.work() <span className="text-rose">{'{'}</span></p>
        <div className="pl-4 sm:pl-6">
          <h1 className="font-display text-4xl font-semibold leading-tight tracking-tight sm:text-5xl lg:text-6xl">Good with code. <span className="text-rose">Even better with people.</span></h1>
          <p className="mt-7 max-w-xl text-lg leading-relaxed text-paper/80">I’m Nicholas Bennett, a Baltimore-based technical problem solver with a background in software engineering, cybersecurity, and 16 years of helping people navigate technology.</p>
          <p className="mt-4 max-w-xl leading-relaxed text-paper/75">I’ve built applications, worked through tricky technical problems, and partnered with Customer Success teams to turn customer feedback into better products.</p>
          <p className="mt-4 max-w-xl leading-relaxed text-paper/75">Now I’m moving into Customer Success Management in cybersecurity and technical SaaS, combining technical understanding with the part of work I’ve always enjoyed most: getting to know people and helping them succeed.</p>
        </div>
        <p aria-hidden="true" className="mt-8 font-mono text-xs text-rose">{'}'}</p>
        <div className="mt-8 flex flex-wrap gap-4"><a href="#contact" className="button-primary">Let’s talk Customer Success</a><a href="#portfolio" className="button-secondary">Explore my work ↗</a></div>
      </div>
      <figure className="mx-auto w-full max-w-xs">
        <img src="/images/portrait.jpg" alt="Nicholas Bennett seated at a table with a laptop" width="1000" height="998" className="h-auto w-full rounded-xl2 border border-white/10" />
        <figcaption className="mt-4 font-mono text-xs text-steel">Nicholas Bennett / Baltimore, MD</figcaption>
      </figure>
    </div>
  </section>;
}
