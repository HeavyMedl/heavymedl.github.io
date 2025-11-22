import { getCollection, type CollectionEntry } from 'astro:content'

/**
 * Checks if a given id has a segment that starts with an underscore.
 * This is used to filter out hidden posts.
 * @param {string} id - The id to check
 * @returns {boolean} True if the id has a hidden segment, false otherwise
 */
export function hasHiddenSegment(id: string) {
  return id.split('/').some((segment) => segment.startsWith('_'))
}

/**
 * Get all posts, filtering out posts whose filenames start with _
 */
export async function getFilteredPosts() {
  const posts = await getCollection('posts')
  return posts.filter((post: CollectionEntry<'posts'>) => !hasHiddenSegment(post.id))
}

/**
 * Get all posts sorted by publication date, filtering out posts whose filenames start with _
 */
export async function getSortedFilteredPosts() {
  const posts = await getFilteredPosts()
  return posts.sort(
    (a: CollectionEntry<'posts'>, b: CollectionEntry<'posts'>) =>
      b.data.pubDate.valueOf() - a.data.pubDate.valueOf()
  )
}
