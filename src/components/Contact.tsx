// TODO_CONTENT: Supply a verified WhatsApp destination before restoring that contact option.
export default function Contact() {
  return <section id="contact" className="section-shell section-space">
    <div className="rounded-xl2 border border-rose/25 bg-ink-soft p-6 sm:p-10 md:p-14">
      <p className="eyebrow">04 / contact</p><h2 className="section-title">What would you like to make easier?</h2>
      <p className="max-w-2xl text-lg leading-relaxed text-paper/80">Tell me what you have now, what you want changed, and any timing or budget constraints. We can start there.</p>
      <a href="mailto:nicholas@bigfriendlyfunction.com" className="mt-7 inline-block break-all font-display text-xl font-semibold text-rose underline underline-offset-4 sm:text-2xl">nicholas@bigfriendlyfunction.com</a>
      <div className="mt-8 flex gap-6"><a className="text-link" href="https://github.com/nrrb">GitHub ↗</a><a className="text-link" href="https://www.linkedin.com/in/nicholasrrbennett/">LinkedIn ↗</a></div>
    </div>
  </section>;
}
