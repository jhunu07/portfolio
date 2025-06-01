import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { SectionWrapper } from "@/components/shared/section-wrapper";
import { PageTitle } from "@/components/shared/page-title";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Briefcase, FileText, Award, Cpu, Mail } from "lucide-react";

const featureCards = [
  {
    title: "Projects",
    description: "Explore a collection of my work and case studies.",
    href: "/projects",
    icon: <Briefcase className="h-8 w-8 text-primary mb-4" />,
    aiHint: "code computer"
  },
  {
    title: "Interactive Resume",
    description: "View my professional background and experience.",
    href: "/resume",
    icon: <FileText className="h-8 w-8 text-primary mb-4" />,
    aiHint: "document desk"
  },
  {
    title: "Skills",
    description: "Discover the technologies and tools I excel in.",
    href: "/skills",
    icon: <Cpu className="h-8 w-8 text-primary mb-4" />,
    aiHint: "gears technology"
  },
  {
    title: "Certificates",
    description: "See my certifications and professional qualifications.",
    href: "/certificates",
    icon: <Award className="h-8 w-8 text-primary mb-4" />,
    aiHint: "award certificate"
  },
];

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <SectionWrapper className="bg-secondary/50 flex-grow flex items-center">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-extrabold text-foreground mb-6 leading-tight">
              Hello, I&apos;m <span className="text-primary">Jhunnu kumar</span>
            </h1>
            <p className="text-lg sm:text-xl text-muted-foreground mb-8 max-w-xl">
              A passionate  Fronted Developer dedicated to creating impactful digital experiences. Welcome to my personal showcase.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg" className="shadow-lg hover:shadow-xl transition-shadow">
                <Link href="/projects">
                  View My Work <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="shadow-lg hover:shadow-xl transition-shadow">
                <Link href="/contact">
                  Get In Touch <Mail className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>
          <div className="relative h-64 md:h-96 rounded-lg overflow-hidden shadow-2xl">
            <Image
              src="https://placehold.co/600x400.png"
              alt="Placeholder hero image"
              layout="fill"
              objectFit="cover"
              className="transform hover:scale-105 transition-transform duration-500"
              data-ai-hint="developer portrait"
            />
          </div>
        </div>
      </SectionWrapper>

      {/* About Me Snippet Section */}
      <SectionWrapper id="about">
        <PageTitle title="About Me" subtitle="A brief introduction to who I am and what I do." />
        <Card className="max-w-3xl mx-auto shadow-xl">
          <CardContent className="p-8">
            <p className="text-muted-foreground text-lg leading-relaxed">
            Motivated and results-driven Computer Engineering student with a strong academic foundation and practical
experience in software development. Proficient in programming languages such as Python, and PHP, with handson experience in full-stack web development, database management (MySQL), and object-oriented
programming (OOP). Skilled in using HTML, CSS, JavaScript, and frameworks like Laravel and Bootstrap for
building dynamic, responsive web applications. . Eager to contribute to real-world projects in a collaborative
environment and continuously expand technical and professional skills.
              </p>
      
          </CardContent>
        </Card>
      </SectionWrapper>

      {/* Feature Cards Section */}
      <SectionWrapper id="features" className="bg-secondary/50">
        <PageTitle title="Explore My Portfolio" subtitle="Discover my projects, skills, and more." />
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {featureCards.map((card) => (
            <Card key={card.title} className="flex flex-col shadow-lg rounded-lg overflow-hidden transition-all duration-300 ease-in-out hover:shadow-xl hover:scale-[1.03]">
              <CardHeader className="items-center text-center">
                {card.icon}
                <CardTitle className="font-heading text-2xl">{card.title}</CardTitle>
              </CardHeader>
              <CardContent className="flex-grow text-center">
                <CardDescription>{card.description}</CardDescription>
              </CardContent>
              <div className="p-6 pt-0 mt-auto">
                <Button asChild variant="outline" className="w-full">
                  <Link href={card.href}>
                    Learn More <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </SectionWrapper>
    </div>
  );
}
