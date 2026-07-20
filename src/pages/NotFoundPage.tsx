import { Link } from '@tanstack/react-router';
import { Button } from '@heroui/react';
import { SEO } from '@/components/ui/SEO';

export default function NotFoundPage() {
  return (
    <div className="grid place-items-center py-24 text-center">
      <SEO title="Not Found" />
      <div className="flex flex-col items-center gap-4">
        <p className="text-6xl font-extrabold text-primary">404</p>
        <p className="text-default-500">This page doesn’t exist.</p>
        <Button as={Link} to="/" color="primary">
          Back home
        </Button>
      </div>
    </div>
  );
}
