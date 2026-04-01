import Navigation from '@/components/Navigation';
import BlogCard from '@/components/BlogCard';
import { getAllPosts } from '@/lib/posts';

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <main className="min-h-screen bg-cream-100">
      <Navigation />
      
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="mb-12">
            <h1 className="text-3xl md:text-4xl font-serif font-bold text-coffee-800 mb-4">
              博客文章
            </h1>
            <p className="text-coffee-600">
              记录思考、分享知识、探索技术
            </p>
          </div>
          
          <div className="space-y-0">
            {posts.length > 0 ? (
              posts.map((post) => (
                <BlogCard
                  key={post.slug}
                  title={post.title}
                  date={post.date}
                  excerpt={post.excerpt}
                  slug={post.slug}
                  wordCount={post.wordCount}
                />
              ))
            ) : (
              <div className="text-center py-12 text-coffee-400">
                <p>暂无文章，敬请期待...</p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 border-t border-coffee-200/50">
        <div className="max-w-4xl mx-auto text-center text-coffee-400 text-sm">
          <p>© 2024 My Blog. All rights reserved.</p>
        </div>
      </footer>
    </main>
  );
}
