export function EmptyState({ title, description }: { title: string; description?: string }) {
  return (
    <div className="flex flex-col items-center gap-2 py-16 text-center">
      <p className="text-lg font-semibold">{title}</p>
      {description && <p className="text-default-500">{description}</p>}
    </div>
  );
}
