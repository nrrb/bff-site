type Media = { src: string | null; title: string; caption: string; alt: string };
export default function ProjectMedia({ media, compact = false }: { media: Media; compact?: boolean }) {
  return <figure className={compact ? 'h-full' : 'my-8'}>
    {media.src ? <div className="media-frame">{media.src.endsWith('.webm') ?
      <video src={media.src} aria-label={media.alt} autoPlay loop muted playsInline preload="metadata" className="h-auto max-h-[42rem] w-full object-contain" /> :
      <img src={media.src} alt={media.alt} loading="lazy" className="h-auto max-h-[42rem] w-full object-contain" />}</div> :
      <div className={`media-placeholder ${compact ? 'min-h-44' : 'min-h-64 sm:min-h-80'}`}>
        <span aria-hidden="true" className="mb-5 font-mono text-2xl text-rose/60">{'[ ]'}</span>
        <p className="font-display text-base font-medium text-paper/85">{media.title}</p>
        <p className="mt-2 font-mono text-xs text-steel">{compact ? 'Screenshot to be added' : 'Media to be supplied'}</p>
      </div>}
    {!compact && <figcaption className="mt-3 max-w-3xl text-sm leading-relaxed text-paper/65">{media.caption}</figcaption>}
  </figure>;
}
