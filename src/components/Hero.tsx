export default function Hero() {
  return (
    <section id="top" className="mx-auto max-w-5xl px-6 pb-20 pt-16 md:pb-28 md:pt-24">
      <div className="grid items-center gap-12 md:grid-cols-[1.2fr_0.8fr]">
        <div>
          <p className="mb-4 font-mono text-sm text-steel">
            <span className="text-rose">function</span> bigFriendlyFunction(you) {'{'}
          </p>
          <h1 className="font-display text-4xl font-semibold leading-tight tracking-tight text-paper sm:text-5xl md:text-6xl">
            Web apps, desktop apps,
            <br />
            design, and AI tooling:
            <br />
            <span className="text-rose">built by one big friendly function.</span>
          </h1>
          <p className="mt-4 font-mono text-sm text-steel">{'  return solved;'}<br />{'}'}</p>

          <p className="mt-8 max-w-lg text-lg text-paper/75">
            Hi there! I'm Nicholas Bennett.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="#contact"
              className="rounded-xl2 bg-rose px-6 py-3 font-display text-sm font-semibold text-ink transition-transform hover:scale-[1.02] active:scale-[0.98]"
            >
              Get in touch
            </a>
            <a
              href="#portfolio"
              className="rounded-xl2 border border-white/15 px-6 py-3 font-display text-sm font-semibold text-paper transition-colors hover:border-rose hover:text-rose"
            >
              See the work
            </a>
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-xs">
          <div className="aspect-[4/5] overflow-hidden rounded-xl2 border border-white/10 bg-ink-soft">
            {/* Replace src with your actual portrait photo in /public/images/ */}
            <img
              src="/images/portrait.jpg"
              alt="Portrait of Nicholas"
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
