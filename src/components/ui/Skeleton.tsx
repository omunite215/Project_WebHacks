import { Skeleton as HeroSkeleton, Card, CardBody, CardFooter } from '@heroui/react';

export function Skeleton({ className = '' }: { className?: string }) {
  return <HeroSkeleton className={`rounded-lg ${className}`} />;
}

export function NewsCardSkeleton() {
  return (
    <Card shadow="sm" className="h-full">
      <CardBody className="gap-3 p-0">
        <HeroSkeleton className="h-44 w-full rounded-none" />
        <div className="flex flex-col gap-3 p-4">
          <HeroSkeleton className="h-4 w-1/3 rounded-lg" />
          <HeroSkeleton className="h-5 w-4/5 rounded-lg" />
          <HeroSkeleton className="h-4 w-full rounded-lg" />
          <HeroSkeleton className="h-4 w-2/3 rounded-lg" />
        </div>
      </CardBody>
      <CardFooter className="justify-between">
        <HeroSkeleton className="h-8 w-24 rounded-medium" />
        <HeroSkeleton className="h-8 w-8 rounded-full" />
      </CardFooter>
    </Card>
  );
}
