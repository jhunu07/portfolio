import { SectionWrapper } from '@/components/shared/section-wrapper';
import { PageTitle } from '@/components/shared/page-title';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import Link from 'next/link';
import { ExternalLink, Github } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

const projects = [
  {
    title: 'Project Alpha',
    description: 'A cutting-edge web application that solves [problem]. Built with modern technologies to deliver a seamless user experience.',
    imageUrl: 'https://placehold.co/600x400.png?a=1',
    dataAiHint: 'web application interface',
    liveLink: '#',
    repoLink: '#',
    tags: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Firebase'],
  },
  {
    title: 'Project Beta',
    description: 'An innovative mobile app designed for [purpose]. Focused on usability and performance, targeting [audience].',
    imageUrl: 'https://placehold.co/600x400.png?a=2',
    dataAiHint: 'mobile app screen',
    liveLink: '#',
    repoLink: '#',
    tags: ['React Native', 'GraphQL', 'Node.js', 'MongoDB'],
  },
  {
    title: 'Project Gamma',
    description: 'A data visualization platform that provides insights into [data domain]. Features interactive charts and dashboards.',
    imageUrl: 'https://placehold.co/600x400.png?a=3',
    dataAiHint: 'dashboard charts',
    liveLink: '#',
    repoLink: '#',
    tags: ['D3.js', 'Python', 'Flask', 'PostgreSQL'],
  },
];

export default function ProjectsPage() {
  return (
    <SectionWrapper>
      <PageTitle
        title="My Projects"
        subtitle="A selection of projects I've worked on, showcasing my skills and passion for development and design."
      />
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <Card key={index} className="flex flex-col overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 rounded-lg">
            <div className="relative w-full h-56">
              <Image
                src={project.imageUrl}
                alt={project.title}
                layout="fill"
                objectFit="cover"
                data-ai-hint={project.dataAiHint}
              />
            </div>
            <CardHeader>
              <CardTitle className="font-heading text-2xl">{project.title}</CardTitle>
              <div className="flex flex-wrap gap-2 pt-2">
                {project.tags.map(tag => (
                  <Badge key={tag} variant="secondary">{tag}</Badge>
                ))}
              </div>
            </CardHeader>
            <CardContent className="flex-grow">
              <CardDescription className="text-base leading-relaxed">{project.description}</CardDescription>
            </CardContent>
            <CardFooter className="flex justify-start space-x-3">
              {project.liveLink && (
                <Button asChild variant="default" size="sm">
                  <Link href={project.liveLink} target="_blank" rel="noopener noreferrer">
                    Live Demo <ExternalLink className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              )}
              {project.repoLink && (
                <Button asChild variant="outline" size="sm">
                  <Link href={project.repoLink} target="_blank" rel="noopener noreferrer">
                    GitHub <Github className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              )}
            </CardFooter>
          </Card>
        ))}
      </div>
    </SectionWrapper>
  );
}
