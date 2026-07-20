import { Link } from '@tanstack/react-router';
import { Button } from '@heroui/react';

export function ErrorPage({ error }: { error?: unknown }) {
  const message = error instanceof Error ? error.message : 'Unexpected error';
  return (
    <div className="grid min-h-[60vh] place-items-center p-6 text-center">
      <div className="flex flex-col items-center gap-4">
        <h1 className="text-3xl font-bold">Oops — something broke</h1>
        <p className="text-default-500">{message}</p>
        <Button as={Link} to="/" color="primary">
          Go home
        </Button>
      </div>
    </div>
  );
}
