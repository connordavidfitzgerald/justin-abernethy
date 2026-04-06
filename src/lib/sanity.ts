import { createClient } from '@sanity/client';
import { createImageUrlBuilder, type SanityImageSource } from '@sanity/image-url';

const projectId = import.meta.env.SANITY_PROJECT_ID;
const dataset = import.meta.env.SANITY_DATASET || 'production';

export const sanityClient = projectId
  ? createClient({
      projectId,
      dataset,
      apiVersion: '2026-04-01',
      useCdn: import.meta.env.DEV ? false : true,
    })
  : null;

const builder = sanityClient ? createImageUrlBuilder(sanityClient) : null;

export function urlFor(source: any) {
  if (!builder) return null;
  return builder.image(source).url(); // add .url() here
}
