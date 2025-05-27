import { SectionWrapper } from '@/components/shared/section-wrapper';
import { PageTitle } from '@/components/shared/page-title';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import Link from 'next/link';
import { ExternalLink, Award } from 'lucide-react';

const certificates = [
  {
    title: 'Certified Kubernetes Administrator (CKA)',
    issuer: 'Cloud Native Computing Foundation',
    date: 'Oct 2023',
    imageUrl: 'https://placehold.co/300x200.png?c=1',
    dataAiHint: 'certificate document',
    verifyLink: '#',
    description: 'Demonstrates expertise in deploying, managing, and troubleshooting Kubernetes clusters.'
  },
  {
    title: 'AWS Certified Solutions Architect - Associate',
    issuer: 'Amazon Web Services',
    date: 'Mar 2022',
    imageUrl: 'https://placehold.co/300x200.png?c=2',
    dataAiHint: 'certificate cloud',
    verifyLink: '#',
    description: 'Validates ability to design and implement distributed systems on AWS.'
  },
  {
    title: 'Professional Scrum Master I (PSM I)',
    issuer: 'Scrum.org',
    date: 'Jul 2021',
    imageUrl: 'https://placehold.co/300x200.png?c=3',
    dataAiHint: 'scrum certificate',
    verifyLink: '#',
    description: 'Affirms understanding of Scrum principles and practices for agile project management.'
  },
];

export default function CertificatesPage() {
  return (
    <SectionWrapper>
      <PageTitle
        title="My Certificates"
        subtitle="A collection of my professional certifications and qualifications."
      />
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {certificates.map((cert, index) => (
          <Card key={index} className="flex flex-col overflow-hidden shadow-lg rounded-lg transition-all duration-300 ease-in-out hover:shadow-xl hover:scale-[1.03]">
            <div className="relative w-full h-48 bg-muted flex items-center justify-center">
              <Image
                src={cert.imageUrl}
                alt={`${cert.title} certificate`}
                width={200}
                height={133}
                objectFit="contain"
                data-ai-hint={cert.dataAiHint}
              />
            </div>
            <CardHeader>
              <CardTitle className="font-heading text-xl flex items-start">
                <Award className="h-6 w-6 text-primary mr-2 mt-1 shrink-0" />
                {cert.title}
              </CardTitle>
              <CardDescription className="text-md">Issued by: {cert.issuer}</CardDescription>
              <CardDescription className="text-sm">Date: {cert.date}</CardDescription>
            </CardHeader>
            <CardContent className="flex-grow">
              <p className="text-muted-foreground text-sm">{cert.description}</p>
            </CardContent>
            <CardFooter>
              {cert.verifyLink && (
                <Button asChild variant="outline" size="sm" className="w-full">
                  <Link href={cert.verifyLink} target="_blank" rel="noopener noreferrer">
                    Verify Certificate <ExternalLink className="ml-2 h-4 w-4" />
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
