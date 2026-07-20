import { Input } from '@heroui/react';

export function NewsSearch({ value, onChange }: { value: string; onChange: (v: string) => void }) {
  return (
    <Input
      isClearable
      value={value}
      onValueChange={onChange}
      placeholder="Search news…"
      variant="bordered"
      className="max-w-md"
      aria-label="Search news"
    />
  );
}
