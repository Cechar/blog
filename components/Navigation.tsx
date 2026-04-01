'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navigation() {
  const pathname = usePathname();

  const navItems = [
    { href: '/', label: '首页' },
    { href: '/blog', label: '博客' },
    { href: '/skills', label: '技能库' },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-cream-100/80 backdrop-blur-sm border-b border-coffee-200">
      <div className="max-w-4xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link 
            href="/" 
            className="text-xl font-serif font-bold text-coffee-800 hover:text-coffee-600 transition-colors"
          >
            我的博客
          </Link>
          
          <div className="flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`text-sm font-medium transition-colors duration-200 ${
                  pathname === item.href
                    ? 'text-coffee-700 border-b-2 border-coffee-500'
                    : 'text-coffee-500 hover:text-coffee-700'
                }`}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}
