import { SectionWrapper } from '@/components/shared/section-wrapper';
import { PageTitle } from '@/components/shared/page-title';
import { ContactForm } from '@/components/contact/contact-form';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Mail, Phone, MapPin } from 'lucide-react';

export default function ContactPage() {
  return (
    <SectionWrapper>
      <PageTitle
        title="Get In Touch"
        subtitle="I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions."
      />
      <div className="grid md:grid-cols-2 gap-12">
        <div>
          <h2 className="text-2xl font-heading font-semibold mb-6 text-foreground">Contact Information</h2>
          <Card className="shadow-lg border-transparent bg-background/0 md:bg-card">
            <CardContent className="space-y-6 p-0 md:p-6">
              <div className="flex items-start">
                <Mail className="h-6 w-6 text-primary mr-4 mt-1 shrink-0" />
                <div>
                  <h3 className="font-semibold text-lg text-foreground">Email</h3>
                  <a href="mailto:your.email@example.com" className="text-muted-foreground hover:text-primary transition-colors">
                    your.email@example.com
                  </a>
                </div>
              </div>
              <div className="flex items-start">
                <Phone className="h-6 w-6 text-primary mr-4 mt-1 shrink-0" />
                <div>
                  <h3 className="font-semibold text-lg text-foreground">Phone</h3>
                  <p className="text-muted-foreground">(123) 456-7890</p>
                </div>
              </div>
              <div className="flex items-start">
                <MapPin className="h-6 w-6 text-primary mr-4 mt-1 shrink-0" />
                <div>
                  <h3 className="font-semibold text-lg text-foreground">Location</h3>
                  <p className="text-muted-foreground">City, Country</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
        <div>
          <h2 className="text-2xl font-heading font-semibold mb-6 text-foreground">Send Me a Message</h2>
          <ContactForm />
        </div>
      </div>
    </SectionWrapper>
  );
}
