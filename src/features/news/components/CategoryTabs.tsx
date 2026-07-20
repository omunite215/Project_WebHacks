import { Tabs, Tab } from '@heroui/react';
import { NEWS_CATEGORIES, type NewsCategory } from '../types';

export function CategoryTabs({
  value,
  onChange,
}: {
  value: NewsCategory;
  onChange: (c: NewsCategory) => void;
}) {
  return (
    <Tabs
      aria-label="News categories"
      selectedKey={value}
      onSelectionChange={(k) => onChange(k as NewsCategory)}
      variant="underlined"
      className="max-w-full overflow-x-auto"
    >
      {NEWS_CATEGORIES.map((c) => (
        <Tab key={c} title={c[0].toUpperCase() + c.slice(1)} />
      ))}
    </Tabs>
  );
}
