import { useMemo, useState } from 'react';
import { Modal, ModalContent, ModalBody, Input, Listbox, ListboxItem, Kbd } from '@heroui/react';
import { useNavigate } from '@tanstack/react-router';

const ACTIONS = [
  { key: '/', label: 'Go to Home' },
  { key: '/tips', label: 'Go to Tips' },
  { key: '/saved', label: 'Go to Saved' },
  { key: '/about', label: 'Go to About' },
  { key: '/contact', label: 'Go to Contact' },
] as const;

export function CommandPalette({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  const navigate = useNavigate();
  const [query, setQuery] = useState('');

  const filtered = useMemo(
    () => ACTIONS.filter((a) => a.label.toLowerCase().includes(query.toLowerCase())),
    [query],
  );

  const close = () => {
    setQuery('');
    onClose();
  };

  const run = (key: string) => {
    const trimmed = query.trim();
    if (key === 'search' && trimmed) {
      navigate({ to: '/', search: { q: trimmed } });
    } else {
      const action = ACTIONS.find((a) => a.key === key);
      if (action) navigate({ to: action.key });
    }
    close();
  };

  return (
    <Modal isOpen={isOpen} onClose={close} placement="top" size="lg">
      <ModalContent>
        <ModalBody className="gap-2 p-2">
          <Input
            autoFocus
            value={query}
            onValueChange={setQuery}
            placeholder="Search pages or type to search news…"
            variant="bordered"
            aria-label="Command palette input"
            endContent={<Kbd>esc</Kbd>}
          />
          <Listbox aria-label="Commands" onAction={(key) => run(String(key))}>
            <>
              {query.trim() && (
                <ListboxItem key="search" textValue={`Search news for ${query.trim()}`}>
                  🔎 Search news for “{query.trim()}”
                </ListboxItem>
              )}
              {filtered.map((a) => (
                <ListboxItem key={a.key}>{a.label}</ListboxItem>
              ))}
            </>
          </Listbox>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
}
