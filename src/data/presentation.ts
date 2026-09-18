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
  title: 'A human-centered path from need to use',
  subtitle: 'A portfolio walkthrough for Taiji Thomas, Digital Project Manager',
  notice: '',
  slides: [
    {
      eyebrow: '01 / how I work',
      title: 'Empathetic listening and focus on user experience.',
      prompt: 'A consistent process, adapted to the problem.',
      body: 'I start with user interviews, then define the problem, design a solution, iterate based on feedback, and deliver a usable product. I focus on understanding the people who will use the product and the context in which they will use it.',
    },
    {
      eyebrow: '02 / case study',
      title: 'Kellogg Board Fellows Optimizer',
      project: {
        label: 'Open supporting project page',
        href: '/projects/kellogg-board-fellows-optimizer/',
        live: 'https://kbfmatcher.surge.sh/',
        image: {
          src: '/images/projects/kellogg-matcher/original-interface.png',
          alt: 'Kellogg Board Fellows Optimizer interface showing a four-step internship matching workflow.',
          caption: 'Intuitive four-step workflow for matching MBA students to internships',
        },
      },
      points: [
        { label: 'The need', sample: 'Administrators needed a faster, more repeatable way to match MBA students to internships through ranked preferences.' },
        { label: 'My role', sample: 'I interviewed the administrators to understand their pain points and workflows, and iteratively designed a solution to address their needs.' },
        { label: 'Key choice', sample: 'I used a mathematical optimization algorithm to ensure fairness.' },
        { label: 'Iteration to describe', sample: 'Built on top of Qualtrics used to survey student preferences, minimizing change for administrators and students.' },
        { label: 'Delivery', sample: 'I built a web app in 2011, making it truly cross-platform compatible and it continued to be used for years after.' },
      ],
    },
    {
      eyebrow: '03 / case study',
      title: 'RekordBox Bass Notes',
      project: {
        label: 'Open supporting project page',
        href: '/projects/rekordbox-bass-notes/',
        image: {
          src: '/images/projects/rekordbox-bass-notes/analysis-output.png',
          alt: 'RekordBox Bass Notes desktop app showing a track library, bass scores, spectrum bars, and a batch re-analysis panel.',
          caption: 'RekordBox library analysis with bass scores and a live player',
        },
      },
      points: [
        { label: 'The need', sample: 'DJs need a quick way to identify tracks likely to SHAKE the dancers at different intensity levels—inside RekordBox, the software they use to prepare and perform.' },
        { label: 'My role', sample: 'I investigated whether RekordBox’s proprietary database could be modified directly, then built a bass-analysis tool around that workflow.' },
        { label: 'Key choice', sample: 'I wrote concise, DJ-readable results into RekordBox while preserving the existing metadata a DJ already depends on.' },
        { label: 'Iteration', sample: 'I developed a safe backup and restoration workflow, then refined how analysis results appear so they work as a fast heads-up view rather than a separate report.' },
        { label: 'Delivery', sample: 'The delivered tool profiles bass characteristics and writes usable results directly into RekordBox.' },
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
        { label: 'The need', sample: 'People meeting through a public picnic needed a welcoming, low-pressure way to begin a more meaningful conversation.' },
        { label: 'My role', sample: 'I organized the picnic and created Medium Talk as a digital conversation companion for the event, then made it available through the Meetup listing.' },
        { label: 'Key choice', sample: 'I designed the experience around generous prompts rather than social feeds or profiles, so it could support in-person connection without competing for attention.' },
        { label: 'Iteration', sample: 'I extended the proof of concept into a reusable prompt system with city-specific themes and color schemes, designed for 12 U.S. cities and 43 cities overall.' },
        { label: 'Delivery', sample: 'Medium Talk is a live, mobile-first conversation app that demonstrates how lightweight software can create an inviting entry point for community gathering.' },
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
        { label: 'The need', sample: 'The artist needed a distinctive, mobile-first web presence that could translate a loose brief and an inspiration site into a polished experience within two weeks.' },
        { label: 'My role', sample: 'I consulted with the artist, his manager, and a supporting team member to shape requirements, make recommendations, and build the web app.' },
        { label: 'Key choice', sample: 'I prioritized a mobile-first composition and a custom embedded player, while mapping a practical path for future merch and event-listing integrations.' },
        { label: 'Iteration', sample: 'The work progressed through at least 15 rounds of revision, using the live build to turn creative direction into focused, reviewable decisions.' },
        { label: 'Delivery', sample: 'I delivered a live, optimized artist website with dedicated desktop and mobile experiences, plus platform recommendations for merch, Posh event listings, and future releases.' },
      ],
    },
    {
      eyebrow: '06 / working together',
      title: 'How I work with project managers.',
      points: [
        { label: 'Clarify the brief', sample: 'I translate loose goals, inspiration, and constraints into a focused scope with decisions people can review.' },
        { label: 'Work in the real workflow', sample: 'I account for the tools, data, safety requirements, and handoffs people already rely on.' },
        { label: 'Make iteration visible', sample: 'I use working prototypes and targeted revisions to turn broad feedback into decisions that move delivery forward.' },
        { label: 'Deliver with a next step', sample: 'I separate what is ready now from what needs client input, platform setup, or a subsequent phase.' },
      ],
    },
  ] satisfies PresentationSlide[],
};
