import type { ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface PageTitleProps {
  title: string;
  subtitle?: string | ReactNode;
  className?: string;
}

export function PageTitle({ title, subtitle, className }: PageTitleProps) {
  return (
    <div className={cn('mb-8 md:mb-12 text-center', className)}>
      <h1 className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-2">
        {title}
      </h1>
      {subtitle && (
        typeof subtitle === 'string' ? (
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            {subtitle}
          </p>
        ) : (
           <div className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            {subtitle}
          </div>
        )
      )}
    </div>
  );
}
