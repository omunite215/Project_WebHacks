import { Button } from '@heroui/react';

export function ErrorState({ message, onRetry }: { message: string; onRetry?: () => void }) {
  return (
    <div role="alert" className="flex flex-col items-center gap-3 py-16 text-center">
      <p className="text-lg font-semibold text-danger">Something went wrong</p>
      <p className="text-default-500">{message}</p>
      {onRetry && (
        <Button color="primary" variant="flat" onPress={onRetry}>
          Try again
        </Button>
      )}
    </div>
  );
}
