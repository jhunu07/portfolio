import { SectionWrapper } from '@/components/shared/section-wrapper';
import { PageTitle } from '@/components/shared/page-title';
import { PersonalStatementRefinerForm } from '@/components/personal-statement/refiner-form';

export default function PersonalStatementPage() {
  return (
    <SectionWrapper>
      <PageTitle
        title="AI Personal Statement Refiner"
        subtitle="Enhance your personal statement with AI-powered suggestions for clarity, impact, and grammar."
      />
      <PersonalStatementRefinerForm />
    </SectionWrapper>
  );
}
