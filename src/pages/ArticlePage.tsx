import {
  Button,
  Breadcrumbs,
  BreadcrumbItem,
  Chip,
  Image,
  Divider,
  Link as HLink,
} from '@heroui/react';
import { Link, useSearch } from '@tanstack/react-router';
import { SEO } from '@/components/ui/SEO';
import { EmptyState } from '@/components/ui/EmptyState';
import { ShareButton } from '@/components/ui/ShareButton';
import { useBookmarks } from '@/features/bookmarks/bookmarks.context';
import { useArticleByUrl } from '@/features/news/hooks/useArticleByUrl';

const FALLBACK_IMG =
  'https://t3.ftcdn.net/jpg/04/62/93/66/360_F_462936689_BpEEcxfgMuYPfTaIAOC1tCDurmsno7Sp.jpg';

function formatDate(iso: string): string {
  const d = new Date(iso);
  return Number.isNaN(d.getTime())
    ? ''
    : d.toLocaleDateString(undefined, { year: 'numeric', month: 'long', day: 'numeric' });
}

export default function ArticlePage() {
  const { url } = useSearch({ from: '/article' });
  const article = useArticleByUrl(url);
  const { isBookmarked, toggle } = useBookmarks();

  return (
    <article className="mx-auto max-w-3xl py-10">
      <SEO title={article?.title ?? 'Article'} description={article?.description} />
      <Breadcrumbs className="mb-6">
        <BreadcrumbItem>
          <Link to="/">Home</Link>
        </BreadcrumbItem>
        <BreadcrumbItem>Article</BreadcrumbItem>
      </Breadcrumbs>

      {article ? (
        <>
          <div className="flex flex-wrap items-center gap-3">
            <Chip color="primary" variant="flat">
              {article.source.name}
            </Chip>
            <span className="text-sm text-default-500">{formatDate(article.publishedAt)}</span>
          </div>
          <h1 className="mt-3 text-balance text-3xl font-bold leading-tight sm:text-4xl">
            {article.title}
          </h1>
          <Image
            alt={article.title}
            src={article.image ?? FALLBACK_IMG}
            fallbackSrc={FALLBACK_IMG}
            radius="lg"
            className="mt-6 max-h-[420px] w-full object-cover"
          />
          <p className="mt-6 text-lg leading-relaxed text-default-600">{article.description}</p>
          {article.content && article.content !== article.description && (
            <p className="mt-4 leading-relaxed text-default-600">{article.content}</p>
          )}
          <Divider className="my-8" />
          <div className="flex flex-wrap items-center gap-3">
            <Button as={HLink} href={article.url} isExternal color="primary">
              Read full article ↗
            </Button>
            <ShareButton url={article.url} title={article.title} />
            <Button variant="flat" onPress={() => toggle(article)}>
              {isBookmarked(article.id) ? 'Saved ❤️' : 'Save 🤍'}
            </Button>
          </div>
        </>
      ) : (
        <div className="flex flex-col items-center gap-4">
          <EmptyState
            title="Article details aren't available"
            description="This can happen after a refresh. You can still read the original story."
          />
          {url ? (
            <Button as={HLink} href={url} isExternal color="primary">
              Read full article ↗
            </Button>
          ) : (
            <Button as={Link} to="/" color="primary">
              Back to news
            </Button>
          )}
        </div>
      )}
    </article>
  );
}
