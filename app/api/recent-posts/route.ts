import { NextResponse } from 'next/server';
import { getRecentPosts } from '@/lib/blog';

export async function GET() {
  const posts = await getRecentPosts(3);
  return NextResponse.json(posts);
}
