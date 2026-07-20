import { useEffect, useState } from 'react';
import { Button } from '@heroui/react';

export function BackToTop() {
  const [show, setShow] = useState(false);
  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 400);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  if (!show) return null;
  return (
    <Button
      isIconOnly
      color="primary"
      radius="full"
      aria-label="Back to top"
      className="fixed bottom-6 right-6 z-40 shadow-lg"
      onPress={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
    >
      ↑
    </Button>
  );
}
