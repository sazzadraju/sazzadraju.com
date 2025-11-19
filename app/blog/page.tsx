import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { getAllPosts } from "@/lib/blog";
import Header from "@/components/Header";

export default async function BlogPage() {
  const posts = await getAllPosts();

  return (
    <>
      <Header />
      <main className="min-h-screen bg-white pt-20">
        <div className="max-w-6xl mx-auto px-6 py-12">
          <div className="mb-12">
            <h1 className="text-4xl font-bold mb-4 text-gray-900">Blog</h1>
            <p className="text-xl text-gray-600">Insights on product management, SaaS, and leadership</p>
          </div>

        {posts.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-gray-600 mb-4">No blog posts yet. Create your first post in Keystatic!</p>
            <Link href="/keystatic" className="text-slate-800 hover:underline font-semibold">
              Go to Admin Panel →
            </Link>
          </div>
        ) : (
          <div className="grid md:grid-cols-3 gap-6">
            {posts.map((post) => (
              <Link key={post.slug} href={`/blog/${post.slug}`}>
                <Card className="border-2 hover:border-slate-800 transition-all hover:shadow-lg h-full">
                  <CardHeader className="pb-3">
                    <Badge className="w-fit mb-2 bg-slate-800 text-white text-xs capitalize">
                      {post.entry.category}
                    </Badge>
                    <CardTitle className="text-lg">{post.entry.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-gray-600 mb-2">{post.entry.excerpt}</p>
                    <p className="text-xs text-gray-400">
                      {new Date(post.entry.date || '').toLocaleDateString('en-US', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric'
                      })}
                    </p>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        )}
      </div>
    </main>
    </>
  );
}
