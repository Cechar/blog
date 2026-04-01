import Link from 'next/link';

interface SkillCardProps {
  name: string;
  version: string;
  description: string;
  tags: string[];
  author: string;
}

export default function SkillCard({ name, version, description, tags, author }: SkillCardProps) {
  return (
    <div className="group bg-white/50 backdrop-blur-sm rounded-lg border border-coffee-200/50 p-6 hover:shadow-lg hover:shadow-coffee-100/50 transition-all duration-300">
      <div className="flex items-start justify-between mb-4">
        <div>
          <h3 className="text-lg font-serif font-semibold text-coffee-800 group-hover:text-coffee-600 transition-colors">
            {name}
          </h3>
          <span className="text-xs text-coffee-400 font-mono">v{version}</span>
        </div>
        <span className="text-xs text-coffee-400">by {author}</span>
      </div>
      
      <p className="text-coffee-600 text-sm leading-relaxed mb-4">
        {description}
      </p>
      
      <div className="flex flex-wrap gap-2">
        {tags.map((tag) => (
          <span
            key={tag}
            className="px-2 py-1 text-xs bg-coffee-100 text-coffee-600 rounded-full"
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
}
