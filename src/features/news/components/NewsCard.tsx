import { Card, CardBody, CardFooter, Image, Button, Chip, Tooltip } from '@heroui/react';
import { Link } from '@tanstack/react-router';
import { useBookmarks } from '@/features/bookmarks/bookmarks.context';
import { ShareButton } from '@/components/ui/ShareButton';
import type { Article } from '../types';

const FALLBACK_IMG =
  'https://t3.ftcdn.net/jpg/04/62/93/66/360_F_462936689_BpEEcxfgMuYPfTaIAOC1tCDurmsno7Sp.jpg';

function formatDate(iso: string): string {
  const d = new Date(iso);
  return Number.isNaN(d.getTime())
    ? ''
    : d.toLocaleDateString(undefined, { year: 'numeric', month: 'short', day: 'numeric' });
}

export function NewsCard({ article }: { article: Article }) {
  const { isBookmarked, toggle } = useBookmarks();
  const saved = isBookmarked(article.id);

  return (
    <Card className="group h-full transition-transform hover:-translate-y-1" shadow="sm">
      <CardBody className="p-0">
        <Link
          to="/article"
          search={{ url: article.url }}
          aria-label={article.title}
          className="block overflow-hidden"
        >
          <Image
            removeWrapper
            alt={article.title}
            src={article.image ?? FALLBACK_IMG}
            fallbackSrc={FALLBACK_IMG}
            className="h-44 w-full object-cover transition-transform duration-300 group-hover:scale-105"
            loading="lazy"
            radius="none"
          />
        </Link>
        <div className="flex flex-col gap-2 p-4">
          <div className="flex items-center justify-between gap-2">
            <Chip size="sm" variant="flat" color="primary">
              {article.source.name}
            </Chip>
            <span className="text-xs text-default-500">{formatDate(article.publishedAt)}</span>
          </div>
          <Link
            to="/article"
            search={{ url: article.url }}
            className="line-clamp-2 text-base font-semibold text-foreground hover:text-primary"
          >
            {article.title}
          </Link>
          <p className="line-clamp-3 text-sm text-default-500">{article.description}</p>
        </div>
      </CardBody>
      <CardFooter className="justify-between">
        <Link
          to="/article"
          search={{ url: article.url }}
          className="inline-flex h-8 items-center rounded-medium bg-primary/20 px-3 text-tiny font-medium text-primary-600 transition-opacity hover:opacity-80"
        >
          Read more
        </Link>
        <div className="flex items-center gap-1">
          <ShareButton url={article.url} title={article.title} />
          <Tooltip content={saved ? 'Remove bookmark' : 'Save article'}>
            <Button
              isIconOnly
              size="sm"
              variant="light"
              aria-label={saved ? 'Remove bookmark' : 'Save article'}
              onPress={() => toggle(article)}
            >
              {saved ? '❤️' : '🤍'}
            </Button>
          </Tooltip>
        </div>
      </CardFooter>
    </Card>
  );
}
