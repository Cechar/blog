import Navigation from '@/components/Navigation';
import BlogCard from '@/components/BlogCard';
import { getAllPosts } from '@/lib/posts';

export default function Home() {
  const posts = getAllPosts();
  const recentPosts = posts.slice(0, 5);

  return (
    <main className="min-h-screen bg-cream-100">
      <Navigation />
      
      {/* Hero Section */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-coffee-800 mb-6">
            欢迎来到我的博客
          </h1>
          <p className="text-lg text-coffee-600 max-w-2xl mx-auto leading-relaxed">
            这里记录着我的思考、学习和创作。同时，我也在这里整理和分享我的技能库，
            希望能够帮助到你。
          </p>
        </div>
      </section>

      {/* Recent Posts */}
      <section className="py-12 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl font-serif font-semibold text-coffee-800">
              最新文章
            </h2>
            <a 
              href="/blog" 
              className="text-coffee-500 hover:text-coffee-700 transition-colors text-sm"
            >
              查看全部 →
            </a>
          </div>
          
          <div className="space-y-0">
            {recentPosts.length > 0 ? (
              recentPosts.map((post) => (
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

      {/* Skills Preview */}
      <section className="py-12 px-6 bg-coffee-50/30">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl font-serif font-semibold text-coffee-800">
              技能库
            </h2>
            <a 
              href="/skills" 
              className="text-coffee-500 hover:text-coffee-700 transition-colors text-sm"
            >
              查看全部 →
            </a>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white/50 backdrop-blur-sm rounded-lg border border-coffee-200/50 p-6">
              <h3 className="text-lg font-serif font-semibold text-coffee-800 mb-2">
                文本分析技能
              </h3>
              <p className="text-coffee-600 text-sm">
                分析文本内容，提取关键信息，支持情感分析、关键词提取等功能。
              </p>
            </div>
            <div className="bg-white/50 backdrop-blur-sm rounded-lg border border-coffee-200/50 p-6">
              <h3 className="text-lg font-serif font-semibold text-coffee-800 mb-2">
                代码审查技能
              </h3>
              <p className="text-coffee-600 text-sm">
                自动审查代码质量，发现潜在问题，提供改进建议。
              </p>
            </div>
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
