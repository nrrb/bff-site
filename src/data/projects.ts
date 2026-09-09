import content from './projects.json';

const localImages = new Set(Object.keys(import.meta.glob('/public/images/**/*')).map(path => path.replace('/public', '')));

// TODO_MEDIA entries stay deliberate placeholders until a real local asset exists.
export const projects = content.map((project) => ({
  ...project,
  media: project.media.map((media) => ({
    ...media,
    src: typeof media.src === 'string' && String(media.src).startsWith('/images/') &&
      localImages.has(media.src) ? media.src : null,
  })),
}));
