import { describe, it, expect } from 'vitest';
import { contactSchema } from './contact.schema';

describe('contactSchema', () => {
  it('accepts valid input', () => {
    const r = contactSchema.safeParse({ name: 'Om', email: 'o@x.com', message: 'Hello there!' });
    expect(r.success).toBe(true);
  });
  it('rejects short name, bad email, short message', () => {
    const r = contactSchema.safeParse({ name: 'O', email: 'nope', message: 'hi' });
    expect(r.success).toBe(false);
  });
});
