import { z } from 'zod';

export const contactSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.email('Enter a valid email'),
  message: z.string().min(10, 'Message must be at least 10 characters'),
});
export type ContactValues = z.infer<typeof contactSchema>;
