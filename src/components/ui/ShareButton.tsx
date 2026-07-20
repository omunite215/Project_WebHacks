import { Button, addToast } from '@heroui/react';

export function ShareButton({ url, title }: { url: string; title: string }) {
  const share = async () => {
    try {
      if (navigator.share) {
        await navigator.share({ title, url });
      } else {
        await navigator.clipboard.writeText(url);
        addToast({ title: 'Link copied', color: 'success' });
      }
    } catch {
      /* ignore */
    }
  };
  return (
    <Button size="sm" variant="light" onPress={share} aria-label={`Share ${title}`}>
      Share
    </Button>
  );
}
