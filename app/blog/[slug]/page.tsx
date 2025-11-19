import { notFound } from "next/navigation";
import { Badge } from "@/components/ui/badge";
import { getAllPosts, getPost } from "@/lib/blog";
import Header from "@/components/Header";
import { DocumentRenderer } from "@keystatic/core/renderer";

export async function generateStaticParams() {
  const posts = await getAllPosts();
  return posts.map((post) => ({ slug: post.slug }));
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = await getPost(slug);
  
  if (!post) {
    notFound();
  }

  const content = await post.content();

  return (
    <>
      <Header />
      <main className="min-h-screen bg-white pt-20">
        <article className="max-w-4xl mx-auto px-6 py-12">
          <header className="mb-8">
          <Badge className="mb-4 bg-slate-800 text-white capitalize">{post.category}</Badge>
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">{post.title}</h1>
          <p className="text-xl text-gray-600 mb-4">{post.excerpt}</p>
          <time className="text-sm text-gray-500">
            {new Date(post.date || '').toLocaleDateString('en-US', {
              year: 'numeric',
              month: 'long',
              day: 'numeric'
            })}
          </time>
        </header>

        <div className="prose prose-slate max-w-none">
          <DocumentRenderer document={content} />
        </div>
      </article>
    </main>
    </>
  );
}
