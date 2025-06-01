import { SectionWrapper } from '@/components/shared/section-wrapper';
import { PageTitle } from '@/components/shared/page-title';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Download, Briefcase, GraduationCap } from 'lucide-react';
import Link from 'next/link';

const experience = [
  {
    role: ' Web developer',
    company: 'Tech Solutions Inc.',
    period: 'Jan 2020 - Present',
    description: 'Led development of key features for flagship products. Mentored junior engineers and improved code quality across teams. Specialized in [Your Specialization].',
    achievements: [
      'Successfully launched 3 major product updates.',
      'Reduced server response time by 25% through performance optimization.',
      'Implemented a new CI/CD pipeline, improving deployment frequency by 50%.',
    ],
  },
  {
    role: 'Software Developer',
    company: 'Innovatech Ltd.',
    period: 'Jun 2017 - Dec 2019',
    description: 'Developed and maintained web applications using [Technologies]. Collaborated with cross-functional teams to deliver high-quality software.',
     achievements: [
      'Contributed to a 15% increase in user engagement by redesigning key UI components.',
      'Developed a critical API integration for a major client.',
    ],
  },
];

const education = [
  {
    degree: 'Master of Science in Computer Science',
    institution: 'University of Advanced Technology',
    period: '2015 - 2017',
    description: 'Focused on [Specialization, e.g., Artificial Intelligence, Distributed Systems]. Thesis on [Thesis Topic].',
  },
  {
    degree: 'Bachelor of Science in Software Engineering',
    institution: 'State Engineering College',
    period: '2011 - 2015',
    description: 'Graduated with honors. Active member of the coding club and participated in several hackathons.',
  },
];

export default function ResumePage() {
  return (
    <SectionWrapper>
      <PageTitle
        title="My Resume"
        subtitle="A detailed overview of my professional journey, qualifications, and educational background."
      />
      
      <div className="text-center mb-12">
        <Button asChild size="lg" className="shadow-md hover:shadow-lg transition-shadow">
          <Link href="/path-to-your-resume.pdf" target="_blank" download>
            Download Resume <Download className="ml-2 h-5 w-5" />
          </Link>
        </Button>
      </div>

      {/* Experience Section */}
      <div className="mb-16">
        <h2 className="text-3xl font-heading font-semibold text-foreground mb-8 flex items-center">
          <Briefcase className="mr-3 h-7 w-7 text-primary" /> Work Experience
        </h2>
        <div className="space-y-8">
          {experience.map((job, index) => (
            <Card key={index} className="shadow-lg overflow-hidden rounded-lg">
              <CardHeader>
                <CardTitle className="font-heading text-2xl">{job.role}</CardTitle>
                <CardDescription className="text-lg text-primary">{job.company} | {job.period}</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-3">{job.description}</p>
                {job.achievements && job.achievements.length > 0 && (
                  <ul className="list-disc list-inside text-muted-foreground space-y-1">
                    {job.achievements.map((ach, i) => <li key={i}>{ach}</li>)}
                  </ul>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Education Section */}
      <div>
        <h2 className="text-3xl font-heading font-semibold text-foreground mb-8 flex items-center">
          <GraduationCap className="mr-3 h-7 w-7 text-primary" /> Education
        </h2>
        <div className="space-y-8">
          {education.map((edu, index) => (
            <Card key={index} className="shadow-lg overflow-hidden rounded-lg">
              <CardHeader>
                <CardTitle className="font-heading text-2xl">{edu.degree}</CardTitle>
                <CardDescription className="text-lg text-primary">{edu.institution} | {edu.period}</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{edu.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
