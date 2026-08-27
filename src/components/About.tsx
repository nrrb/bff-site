const SKILLS = [
  'Web Apps',
  'Desktop Apps',
  'Custom Code',
  'Design',
  'AI Tooling',
  'Consulting',
];

export default function About() {
  return (
    <section id="about" className="mx-auto max-w-3xl px-6 py-20">
      <p className="mb-3 font-mono text-sm text-steel">01 / about</p>
      <h2 className="mb-6 font-display text-3xl font-semibold text-paper">
        A big, friendly function that ships.
      </h2>
      <p className="text-lg leading-relaxed text-paper/80">
        I'm Nicholas: a developer, designer, and one-person engineering shop
        working under the name Big Friendly Function. I build web apps,
        desktop apps, custom software, and AI tooling for people who want
        things done well and explained clearly. 
      </p>
      <p className="mt-4 text-lg leading-relaxed text-paper/80">
        Some clients call me Snuffy; a very tall, gentle, imaginary
        creature. I lean into the mythos but I am very real indeed.
        </p><p className="mt-4 text-lg leading-relaxed text-paper/80">
        I care about the people I work with as much as the code I
        write for them. I listen carefully and ask thoughtful questions,
        I don't disappear mid-project, and I'd rather over-communicate
        than leave you guessing. I'm always keen to find the right communication
        balance for you. Whether it's a full product build, a design pass, or
        untangling a technical mess, I'll show up calmly like a big,
        friendly function.
      </p>

      <div className="mt-8 flex flex-wrap gap-2">
        {SKILLS.map((skill) => (
          <span
            key={skill}
            className="rounded-full border border-white/15 px-4 py-1.5 font-mono text-xs text-paper/70"
          >
            {skill}
          </span>
        ))}
      </div>

      <div className="mt-8 flex gap-6">
        <a
          href="https://github.com/nrrb"
          target="_blank"
          rel="noreferrer noopener"
          className="font-display text-sm font-semibold text-paper/80 underline decoration-steel underline-offset-4 hover:text-rose hover:decoration-rose"
        >
          GitHub ↗
        </a>
        <a
          href="https://linkedin.com/in/nicholasrrbennett"
          target="_blank"
          rel="noreferrer noopener"
          className="font-display text-sm font-semibold text-paper/80 underline decoration-steel underline-offset-4 hover:text-rose hover:decoration-rose"
        >
          LinkedIn ↗
        </a>
      </div>
    </section>
  );
}
