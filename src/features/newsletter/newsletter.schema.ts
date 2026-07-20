import { z } from 'zod';

export const newsletterSchema = z.object({
  email: z.email('Enter a valid email'),
});
export type NewsletterValues = z.infer<typeof newsletterSchema>;
