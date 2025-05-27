'use client';

import { useState, useTransition } from 'react';
import { refinePersonalStatement, type RefinePersonalStatementOutput } from '@/ai/flows/personal-statement-refinement';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Loader2, Wand2, CheckCircle, AlertTriangle } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

export function PersonalStatementRefinerForm() {
  const [statement, setStatement] = useState('');
  const [result, setResult] = useState<RefinePersonalStatementOutput | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [isPending, startTransition] = useTransition();
  const { toast } = useToast();

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!statement.trim()) {
      setError('Please enter your personal statement.');
      return;
    }
    setError(null);
    setResult(null);

    startTransition(async () => {
      try {
        const output = await refinePersonalStatement({ statement });
        setResult(output);
        toast({
          title: "Statement Refined!",
          description: "Your personal statement has been successfully refined.",
          variant: "default",
          action: <CheckCircle className="text-green-500" />,
        });
      } catch (e) {
        console.error("Error refining statement:", e);
        const errorMessage = e instanceof Error ? e.message : 'An unexpected error occurred.';
        setError(`Failed to refine statement: ${errorMessage}`);
        toast({
          title: "Refinement Failed",
          description: `Could not refine statement: ${errorMessage}`,
          variant: "destructive",
          action: <AlertTriangle className="text-red-500" />,
        });
      }
    });
  };

  return (
    <Card className="max-w-3xl mx-auto shadow-xl">
      <form onSubmit={handleSubmit}>
        <CardHeader>
          <CardTitle className="font-heading text-2xl flex items-center">
            <Wand2 className="mr-2 h-6 w-6 text-primary" />
            Refine Your Statement
          </CardTitle>
          <CardDescription>
            Paste your personal statement below and let our AI assistant help you improve it.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <Textarea
            placeholder="Enter your personal statement here..."
            value={statement}
            onChange={(e) => setStatement(e.target.value)}
            rows={10}
            className="resize-y"
            disabled={isPending}
            aria-label="Personal Statement Input"
          />
          {error && (
            <Alert variant="destructive">
              <AlertTriangle className="h-4 w-4" />
              <AlertTitle>Error</AlertTitle>
              <AlertDescription>{error}</AlertDescription>
            </Alert>
          )}
        </CardContent>
        <CardFooter>
          <Button type="submit" disabled={isPending || !statement.trim()} className="w-full md:w-auto">
            {isPending ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Refining...
              </>
            ) : (
              <>
                Refine Statement <Wand2 className="ml-2 h-4 w-4" />
              </>
            )}
          </Button>
        </CardFooter>
      </form>

      {result && (
        <div className="p-6 border-t">
          <h3 className="text-xl font-heading font-semibold mb-4 text-primary">Refinement Results</h3>
          
          <div className="mb-6">
            <h4 className="text-lg font-semibold mb-2 text-foreground">Revised Statement:</h4>
            <Card className="bg-secondary/50">
              <CardContent className="p-4">
                <p className="whitespace-pre-wrap text-foreground/90">{result.refinedStatement}</p>
              </CardContent>
            </Card>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-2 text-foreground">Suggestions for Improvement:</h4>
            {result.suggestions.length > 0 ? (
              <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                {result.suggestions.map((suggestion, index) => (
                  <li key={index}>{suggestion}</li>
                ))}
              </ul>
            ) : (
              <p className="text-muted-foreground">No specific suggestions provided, the AI found it quite good!</p>
            )}
          </div>
        </div>
      )}
    </Card>
  );
}
