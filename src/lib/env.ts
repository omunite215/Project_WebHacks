import { z } from 'zod';

const schema = z.object({
  VITE_GNEWS_API_KEY: z.string().optional(),
});

export function readEnv(raw: Record<string, string | undefined>) {
  const parsed = schema.safeParse(raw);
  const key = parsed.success ? parsed.data.VITE_GNEWS_API_KEY?.trim() : undefined;
  return {
    gnewsApiKey: key || undefined,
    hasNewsKey: Boolean(key),
  };
}

export const env = readEnv(import.meta.env as Record<string, string | undefined>);
