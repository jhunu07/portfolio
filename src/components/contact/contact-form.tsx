'use client';

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Card, CardContent } from '@/components/ui/card';
import { useToast } from '@/hooks/use-toast';
import { Loader2, Send, CheckCircle, AlertTriangle } from 'lucide-react';
import { useState, useTransition } from 'react';

const contactFormSchema = z.object({
  name: z.string().min(2, { message: 'Name must be at least 2 characters.' }),
  email: z.string().email({ message: 'Please enter a valid email address.' }),
  message: z.string().min(10, { message: 'Message must be at least 10 characters.' }),
});

type ContactFormValues = z.infer<typeof contactFormSchema>;

// Server action (simulated)
async function submitContactForm(data: ContactFormValues): Promise<{ success: boolean; message: string }> {
  // Simulate API call
  await new Promise(resolve => setTimeout(resolve, 1500));
  console.log('Form data submitted:', data);
  // Simulate a potential error
  // if (Math.random() > 0.7) {
  //   return { success: false, message: "Simulated server error. Please try again." };
  // }
  return { success: true, message: 'Your message has been sent successfully! I will get back to you soon.' };
}


export function ContactForm() {
  const { toast } = useToast();
  const [isPending, startTransition] = useTransition();
  const [submissionStatus, setSubmissionStatus] = useState<{success: boolean, message: string} | null>(null);


  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: '',
      email: '',
      message: '',
    },
  });

  const onSubmit = (data: ContactFormValues) => {
    setSubmissionStatus(null);
    startTransition(async () => {
      try {
        const result = await submitContactForm(data);
        setSubmissionStatus(result);
        if (result.success) {
          toast({
            title: 'Message Sent!',
            description: result.message,
            variant: 'default',
            action: <CheckCircle className="text-green-500" />,
          });
          form.reset();
        } else {
           toast({
            title: 'Submission Failed',
            description: result.message,
            variant: 'destructive',
            action: <AlertTriangle className="text-red-500" />,
          });
        }
      } catch (error) {
        const errorMessage = error instanceof Error ? error.message : "An unexpected error occurred.";
        setSubmissionStatus({success: false, message: `An error occurred: ${errorMessage}`});
        toast({
          title: 'Error',
          description: `Failed to send message: ${errorMessage}`,
          variant: 'destructive',
          action: <AlertTriangle className="text-red-500" />,
        });
      }
    });
  };

  return (
    <Card className="shadow-xl">
      <CardContent className="p-6 md:p-8">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Full Name</FormLabel>
                  <FormControl>
                    <Input placeholder="Enter name" {...field} disabled={isPending} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email Address</FormLabel>
                  <FormControl>
                    <Input type="email" placeholder="abc@example.com" {...field} disabled={isPending} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="message"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Message</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="Your message here..."
                      rows={5}
                      className="resize-y"
                      {...field}
                      disabled={isPending}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type="submit" className="w-full md:w-auto" disabled={isPending}>
              {isPending ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Sending...
                </>
              ) : (
                <>
                  Send Message <Send className="ml-2 h-4 w-4" />
                </>
              )}
            </Button>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
}
