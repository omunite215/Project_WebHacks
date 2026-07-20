import { describe, it, expect } from 'vitest';
import { newsletterSchema } from './newsletter.schema';

describe('newsletterSchema', () => {
  it('accepts a valid email', () => {
    expect(newsletterSchema.safeParse({ email: 'a@b.com' }).success).toBe(true);
  });
  it('rejects an invalid email', () => {
    expect(newsletterSchema.safeParse({ email: 'x' }).success).toBe(false);
  });
});
