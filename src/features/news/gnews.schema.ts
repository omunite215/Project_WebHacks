import { z } from 'zod';
import type { Article } from './types';

export const gnewsArticleSchema = z.object({
  title: z.string().default(''),
  description: z.string().default(''),
  content: z.string().default(''),
  url: z.url(),
  image: z.string().optional().nullable(),
  publishedAt: z.string(),
  source: z.object({
    name: z.string().default('Unknown'),
    url: z.string().default(''),
  }),
});
export type GNewsArticle = z.infer<typeof gnewsArticleSchema>;

export const gnewsResponseSchema = z.object({
  totalArticles: z.number().default(0),
  articles: z.array(gnewsArticleSchema).default([]),
});

export function mapGNewsArticle(a: GNewsArticle): Article {
  return {
    id: a.url,
    title: a.title,
    description: a.description,
    content: a.content,
    url: a.url,
    image: a.image ? a.image : null,
    publishedAt: a.publishedAt,
    source: { name: a.source.name, url: a.source.url },
  };
}
