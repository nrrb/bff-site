export default function Hero() {
  return <section id="top" className="section-shell pb-20 pt-16 md:pb-28 md:pt-24">
    <div className="grid items-center gap-12 md:grid-cols-[1.5fr_0.8fr]">
      <div>
        <p className="eyebrow"><span className="text-rose">function</span> bigFriendlyFunction(you) <span className="text-rose">{'{'}</span></p>
        <h1 className="font-display text-4xl font-semibold leading-tight tracking-tight sm:text-5xl lg:text-6xl">Websites and custom tools, <span className="text-rose">built around the way you work.</span></h1>
        <p className="mt-7 max-w-xl text-lg leading-relaxed text-paper/80">I’m Nicholas Bennett, the developer behind Big Friendly Function. I build distinctive websites, improve existing apps, and turn repetitive tasks into useful software.</p>
        <div className="mt-8 flex flex-wrap gap-4"><a href="#contact" className="button-primary">Tell me about your project</a><a href="#portfolio" className="button-secondary">Explore my work</a></div>
        <p aria-hidden="true" className="mt-8 font-mono text-xs text-rose">{'}'}</p>
      </div>
      <figure className="mx-auto w-full max-w-xs">
        {/* TODO_MEDIA: Replace with a new coworking-office portrait, preserving the existing photograph until supplied. */}
        <img src="/images/portrait.jpg" alt="Nicholas Bennett" className="h-auto w-full rounded-xl2 border border-white/10" />
        <figcaption className="mt-4 font-mono text-xs text-steel">Nicholas Bennett / Baltimore, MD</figcaption>
      </figure>
    </div>
  </section>;
}
