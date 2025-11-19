import { createReader } from '@keystatic/core/reader';
import keystaticConfig from '../keystatic.config';

const reader = createReader(process.cwd(), keystaticConfig);

export async function getAllPosts() {
  const posts = await reader.collections.posts.all();
  return posts.sort((a, b) => {
    const dateA = new Date(a.entry.date || '');
    const dateB = new Date(b.entry.date || '');
    return dateB.getTime() - dateA.getTime();
  });
}

export async function getRecentPosts(limit: number = 3) {
  const allPosts = await getAllPosts();
  return allPosts.slice(0, limit);
}

export async function getPost(slug: string) {
  return await reader.collections.posts.read(slug);
}
