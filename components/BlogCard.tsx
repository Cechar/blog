import Link from 'next/link';
import { format } from 'date-fns';
import { zhCN } from 'date-fns/locale';

interface BlogCardProps {
  title: string;
  date: string;
  excerpt: string;
  slug: string;
  wordCount: number;
}

export default function BlogCard({ title, date, excerpt, slug, wordCount }: BlogCardProps) {
  return (
    <article className="group">
      <Link href={`/blog/${slug}`} className="block">
        <div className="py-8 border-b border-coffee-200/50 hover:bg-coffee-50/30 transition-colors duration-300 -mx-6 px-6">
          <div className="flex items-center gap-4 text-sm text-coffee-400 mb-3">
            <time dateTime={date}>
              {format(new Date(date), 'yyyy年MM月dd日', { locale: zhCN })}
            </time>
            <span className="text-coffee-300">•</span>
            <span>+ {wordCount} 字</span>
          </div>
          
          <h2 className="text-xl font-serif font-semibold text-coffee-800 mb-3 group-hover:text-coffee-600 transition-colors">
            {title}
          </h2>
          
          <p className="text-coffee-600 leading-relaxed line-clamp-2">
            {excerpt}
          </p>
        </div>
      </Link>
    </article>
  );
}
