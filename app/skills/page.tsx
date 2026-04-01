import Navigation from '@/components/Navigation';
import SkillCard from '@/components/SkillCard';
import { getAllSkills } from '@/lib/skills';

export default function SkillsPage() {
  const skills = getAllSkills();

  return (
    <main className="min-h-screen bg-cream-100">
      <Navigation />
      
      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="mb-12">
            <h1 className="text-3xl md:text-4xl font-serif font-bold text-coffee-800 mb-4">
              技能库
            </h1>
            <p className="text-coffee-600 max-w-2xl">
              这里收集了我开发的各种 AI 技能，包括文本分析、代码审查、数据处理等功能。
              每个技能都可以独立使用，也可以组合成更复杂的工作流。
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skills.length > 0 ? (
              skills.map((skill) => (
                <SkillCard
                  key={skill.name}
                  name={skill.name}
                  version={skill.version}
                  description={skill.description}
                  tags={skill.tags}
                  author={skill.author}
                />
              ))
            ) : (
              <div className="col-span-full text-center py-12 text-coffee-400">
                <p>暂无技能，敬请期待...</p>
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
