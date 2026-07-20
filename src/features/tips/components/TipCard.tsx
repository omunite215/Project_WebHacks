import { Card, CardBody, CardFooter, Image, Button, Link as HLink } from '@heroui/react';
import type { Tip } from '../data/tips';

export function TipCard({ tip }: { tip: Tip }) {
  return (
    <Card data-reveal shadow="sm" className="h-full transition-transform hover:-translate-y-1">
      <CardBody className="p-0">
        <Image
          removeWrapper
          alt={tip.title}
          src={tip.image}
          className="h-40 w-full object-cover"
          loading="lazy"
          radius="none"
        />
        <div className="flex flex-col gap-2 p-4">
          <h3 className="text-base font-semibold">{tip.title}</h3>
          <p className="text-sm text-default-500">{tip.description}</p>
        </div>
      </CardBody>
      <CardFooter>
        <Button as={HLink} href={tip.href} isExternal size="sm" color="primary" variant="flat">
          Read more
        </Button>
      </CardFooter>
    </Card>
  );
}
