import { describe, it, expect } from 'vitest';
import { readEnv } from './env';

describe('readEnv', () => {
  it('reports no key when undefined/empty', () => {
    expect(readEnv({}).hasNewsKey).toBe(false);
    expect(readEnv({ VITE_GNEWS_API_KEY: '' }).hasNewsKey).toBe(false);
  });
  it('reports a key when present', () => {
    const e = readEnv({ VITE_GNEWS_API_KEY: 'abc' });
    expect(e.hasNewsKey).toBe(true);
    expect(e.gnewsApiKey).toBe('abc');
  });
});
