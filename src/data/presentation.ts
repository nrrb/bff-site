/**
 * Presentation copy source for /presentation.
 *
 * Replace the bracketed sample language before presenting. Keeping the story
 * here, rather than inside page markup, makes it easy to tune the deck without
 * touching layout code.
 */

export type PresentationSlide = {
  eyebrow: string;
  title: string;
  prompt?: string;
  body?: string;
  points?: Array<{ label: string; sample: string }>;
  project?: {
    label: string;
    href: string;
    live?: string;
    image?: { src: string; alt: string; caption: string };
  };
};

export const presentation = {
  title: 'A practical path from need to delivery',
  subtitle: 'A portfolio walkthrough for a Digital Project Manager',
  notice: 'Draft presentation copy — replace every [bracketed prompt] with your own precise experience before sharing.',
  process: [
    { name: 'Discover', prompt: '[How did you learn what people needed?]' },
    { name: 'Define', prompt: '[What did you prioritize or make clear?]' },
    { name: 'Make', prompt: '[What did you design or build?]' },
    { name: 'Iterate', prompt: '[What feedback, constraints, or tests changed it?]' },
    { name: 'Deliver', prompt: '[What shipped and what became easier?]' },
  ],
  slides: [
    {
      eyebrow: '01 / how I work',
      title: 'A consistent process, adapted to the problem.',
      prompt: 'Use this slide to give the audience a lens for every case study.',
      body: '[Sample: “I start by making the real need and constraints visible. Then I turn them into a focused product decision, keep feedback close to the work, and deliver something people can actually use.”]',
    },
    {
      eyebrow: '02 / case study',
      title: 'Kellogg Board Fellows Optimizer',
      project: {
        label: 'Open supporting project page',
        href: '/projects/kellogg-board-fellows-optimizer/',
        image: {
          src: '/images/projects/kellogg-matcher/original-interface.png',
          alt: 'Kellogg Board Fellows Optimizer interface showing a four-step internship matching workflow.',
          caption: 'Independent portfolio interface concept',
        },
      },
      points: [
        { label: 'The need', sample: '[Sample: “Matching fellows to placements through ranked preferences required a clearer, more repeatable way to work through choices.”]' },
        { label: 'My role', sample: '[Sample: “I translated the matching task into a tool that made the preference input and resulting placements easier to work with.”]' },
        { label: 'Key choice', sample: '[Sample: “I centered ranked preferences, because they were the meaningful input behind a defensible placement process.”]' },
        { label: 'Iteration to describe', sample: '[Add one true example: a rule clarified, an edge case found, feedback on the workflow, or a constraint that changed the build.]' },
        { label: 'Delivery', sample: '[Sample: “The original tool was used in a more rudimentary form; my portfolio refresh is independent work and should be described separately.”]' },
      ],
    },
    {
      eyebrow: '03 / case study',
      title: 'Rekordbox Bass Notes',
      project: {
        label: 'Open supporting project page',
        href: '/projects/rekordbox-bass-notes/',
        image: {
          src: '/images/projects/rekordbox-bass-notes/analysis-output.png',
          alt: 'Rekordbox Bass Notes desktop app showing a track library, bass scores, spectrum bars, and a batch re-analysis panel.',
          caption: 'Library analysis and batch re-analysis view',
        },
      },
      points: [
        { label: 'The need', sample: '[Sample: “DJs needed a faster way to identify tracks with strong low-end energy inside the library workflow they already use.”]' },
        { label: 'My role', sample: '[Sample: “I built the analysis tool and connected its output directly to the Rekordbox database.”]' },
        { label: 'Key choice', sample: '[Sample: “Instead of making DJs consult a separate report, I put the bass information where track selection already happens.”]' },
        { label: 'Iteration to describe', sample: '[Add one true example: how you tuned the analysis, validated output, handled database constraints, or improved usability.]' },
        { label: 'Delivery', sample: '[Sample: “The delivered tool profiles bass characteristics and writes usable results into Rekordbox.”]' },
      ],
    },
    {
      eyebrow: '04 / case study',
      title: 'Medium Talk',
      project: {
        label: 'Open supporting project page',
        href: '/projects/medium-talk/',
        live: 'https://mediumtalk.org/',
        image: {
          src: '/images/projects/medium-talk/medium-talk-fan.png',
          alt: 'Three Medium Talk screens in an overlapping fan: a yellow picnic prompt on the left, the Medium Talk home screen centered in front, and a blue city prompt on the right.',
          caption: 'Three connected conversation experiences',
        },
      },
      points: [
        { label: 'The need', sample: '[Sample: “People arriving at a public picnic as strangers needed a low-pressure way to begin meaningful conversation.”]' },
        { label: 'My role', sample: '[Sample: “I organized the gathering and built the digital conversation tool around that real-world setting.”]' },
        { label: 'Key choice', sample: '[Sample: “I treated the app as a shared starting point—not the center of the event—so the interaction could stay human and in-person.”]' },
        { label: 'Iteration to describe', sample: '[Add one true example: prompt selection, observing the event, participant feedback, or a decision you revised.]' },
        { label: 'Delivery', sample: '[Sample: “Medium Talk is an app built to support conversation at the public picnic I hosted.”]' },
      ],
    },
    {
      eyebrow: '05 / case study',
      title: 'ogblacman.com',
      project: {
        label: 'Open supporting project page',
        href: '/projects/og-blacman/',
        live: 'https://www.ogblacman.com/',
        image: {
          src: '/images/projects/og-blacman/desktop-hero.png',
          alt: 'OG Blacman artist website hero with a red stairwell scene and oversized hand-drawn wordmark.',
          caption: 'Live artist website hero',
        },
      },
      points: [
        { label: 'The need', sample: '[Sample: “The site needed to express a distinct artist identity while giving people an easy way to explore music and media on the devices they use.”]' },
        { label: 'My role', sample: '[Sample: “I built the website and developed dedicated desktop and mobile experiences around the supplied creative work.”]' },
        { label: 'Key choice', sample: '[Sample: “I used distinct compositions for desktop and phone so the visual identity and music experience could work at each scale.”]' },
        { label: 'Iteration to describe', sample: '[Add one true example: a creative decision, responsive adjustment, collaborator feedback, or performance/usability refinement.]' },
        { label: 'Delivery', sample: '[Sample: “The result is a live artist website with dedicated desktop and mobile experiences.”]' },
      ],
    },
    {
      eyebrow: '06 / working together',
      title: 'What a project manager can expect from me.',
      points: [
        { label: 'Clarity early', sample: '[Sample: “I surface assumptions, user needs, and constraints before they become expensive surprises.”]' },
        { label: 'Decisions with reasons', sample: '[Sample: “I explain what I recommend, what it solves, and what trade-offs it creates.”]' },
        { label: 'Feedback that moves work forward', sample: '[Sample: “I use concrete work-in-progress to turn broad reactions into useful decisions.”]' },
        { label: 'A usable handoff', sample: '[Sample: “I focus on shipping work that fits the actual workflow, with clear boundaries around what is delivered and what comes next.”]' },
      ],
    },
  ] satisfies PresentationSlide[],
};
