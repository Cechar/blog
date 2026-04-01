import fs from 'fs';
import path from 'path';
import yaml from 'js-yaml';

const skillsDirectory = path.join(process.cwd(), 'content/skills');

export interface Skill {
  name: string;
  version: string;
  description: string;
  author: string;
  tags: string[];
  config?: {
    timeout?: number;
    retries?: number;
  };
  parameters?: Array<{
    name: string;
    type: string;
    required: boolean;
    description: string;
    default?: any;
  }>;
  logic?: {
    type: string;
    content: string;
  };
  tools?: Array<{
    name: string;
    description: string;
    parameters: Record<string, any>;
  }>;
  workflow?: {
    steps: Array<{
      name: string;
      action: string;
      tool?: string;
      next?: string;
      inputs?: string[];
    }>;
  };
}

export function getAllSkills(): Skill[] {
  // Ensure directory exists
  if (!fs.existsSync(skillsDirectory)) {
    fs.mkdirSync(skillsDirectory, { recursive: true });
    return [];
  }

  const skillFolders = fs.readdirSync(skillsDirectory);
  const allSkills: Skill[] = [];

  for (const folder of skillFolders) {
    const skillPath = path.join(skillsDirectory, folder, 'skill.yml');
    if (fs.existsSync(skillPath)) {
      try {
        const fileContents = fs.readFileSync(skillPath, 'utf8');
        const skillData = yaml.load(fileContents) as Skill;
        allSkills.push(skillData);
      } catch (error) {
        console.error(`Error loading skill from ${skillPath}:`, error);
      }
    }
  }

  return allSkills;
}

export function getSkillByName(name: string): Skill | null {
  const skills = getAllSkills();
  return skills.find((skill) => skill.name === name) || null;
}

export function getSkillsByTag(tag: string): Skill[] {
  const skills = getAllSkills();
  return skills.filter((skill) => skill.tags.includes(tag));
}
