import { SectionWrapper } from '@/components/shared/section-wrapper';
import { PageTitle } from '@/components/shared/page-title';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';
import { Zap, Users, Brain, Code } from 'lucide-react';

interface Skill {
  name: string;
  level: number; // 0-100 for progress bar
  category: string;
  description?: string;
}

const skillsData: Skill[] = [
  // Programming Languages
  { name: 'JavaScript', level: 95, category: 'Programming Languages', description: 'Extensive experience with ES6+ and modern frameworks.' },
  { name: 'TypeScript', level: 90, category: 'Programming Languages', description: 'Strongly typed JavaScript for robust applications.' },
  { name: 'Python', level: 85, category: 'Programming Languages', description: 'Used for scripting, backend development, and data analysis.' },
  { name: 'Java', level: 75, category: 'Programming Languages', description: 'Experience in enterprise-level applications.' },
  
  // Frontend Technologies
  { name: 'React', level: 95, category: 'Frontend Technologies', description: 'Building dynamic and responsive user interfaces.' },
  { name: 'Next.js', level: 90, category: 'Frontend Technologies', description: 'Server-side rendering and static site generation with React.' },
  { name: 'HTML5 & CSS3', level: 98, category: 'Frontend Technologies', description: 'Semantic HTML and modern CSS techniques including Flexbox and Grid.' },
  { name: 'Tailwind CSS', level: 88, category: 'Frontend Technologies', description: 'Utility-first CSS framework for rapid UI development.' },
  
  // Backend Technologies
  { name: 'Node.js', level: 90, category: 'Backend Technologies', description: 'Building scalable server-side applications.' },
  { name: 'Express.js', level: 85, category: 'Backend Technologies', description: 'Web application framework for Node.js.' },
  { name: 'Firebase', level: 80, category: 'Backend Technologies', description: 'Backend-as-a-Service for rapid development.' },
  
  // Databases
  { name: 'MongoDB', level: 80, category: 'Databases', description: 'NoSQL document database.' },
  { name: 'PostgreSQL', level: 75, category: 'Databases', description: 'Relational database management.' },
  
  // Tools & Platforms
  { name: 'Git & GitHub', level: 95, category: 'Tools & Platforms', description: 'Version control and collaborative development.' },
  { name: 'Docker', level: 70, category: 'Tools & Platforms', description: 'Containerization for consistent environments.' },
  { name: 'AWS', level: 65, category: 'Tools & Platforms', description: 'Basic cloud services deployment and management.' },

  // Soft Skills
  { name: 'Problem Solving', level: 95, category: 'Soft Skills', description: 'Analytical and creative approach to challenges.' },
  { name: 'Communication', level: 90, category: 'Soft Skills', description: 'Clear and effective verbal and written communication.' },
  { name: 'Teamwork', level: 92, category: 'Soft Skills', description: 'Collaborative and supportive team player.' },
];

const skillCategories = [
  { name: 'Programming Languages', icon: <Code className="h-6 w-6 mr-2 text-primary" /> },
  { name: 'Frontend Technologies', icon: <Zap className="h-6 w-6 mr-2 text-primary" /> },
  { name: 'Backend Technologies', icon: <Zap className="h-6 w-6 mr-2 text-primary" /> },
  { name: 'Databases', icon: <Zap className="h-6 w-6 mr-2 text-primary" /> },
  { name: 'Tools & Platforms', icon: <Zap className="h-6 w-6 mr-2 text-primary" /> },
  { name: 'Soft Skills', icon: <Users className="h-6 w-6 mr-2 text-primary" /> },
];

export default function SkillsPage() {
  return (
    <SectionWrapper>
      <PageTitle
        title="My Skills"
        subtitle="A showcase of my technical abilities, tools I use, and soft skills I bring to the table."
      />
      <div className="space-y-12">
        {skillCategories.map(category => {
          const categorySkills = skillsData.filter(skill => skill.category === category.name);
          if (categorySkills.length === 0) return null;

          return (
            <Card key={category.name} className="shadow-xl overflow-hidden rounded-lg">
              <CardHeader>
                <CardTitle className="font-heading text-2xl md:text-3xl flex items-center">
                  {category.icon}
                  {category.name}
                </CardTitle>
              </CardHeader>
              <CardContent className="grid md:grid-cols-2 gap-x-8 gap-y-6">
                {categorySkills.map((skill) => (
                  <div key={skill.name}>
                    <div className="flex justify-between items-center mb-1">
                      <h3 className="text-lg font-semibold text-foreground">{skill.name}</h3>
                      <Badge variant="outline" className="text-sm">{skill.level}%</Badge>
                    </div>
                    <Progress value={skill.level} aria-label={`${skill.name} proficiency ${skill.level}%`} className="h-3 [&>div]:bg-primary" />
                    {skill.description && <p className="text-sm text-muted-foreground mt-1">{skill.description}</p>}
                  </div>
                ))}
              </CardContent>
            </Card>
          );
        })}
      </div>
    </SectionWrapper>
  );
}
