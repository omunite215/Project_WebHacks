import { Button, Dropdown, DropdownTrigger, DropdownMenu, DropdownItem } from '@heroui/react';
import { useTheme, type ThemeMode } from '@/context/theme.context';

const LABELS: Record<ThemeMode, string> = {
  light: '☀️ Light',
  dark: '🌙 Dark',
  system: '💻 System',
};

export function ThemeToggle() {
  const { mode, setMode } = useTheme();
  return (
    <Dropdown>
      <DropdownTrigger>
        <Button variant="light" size="sm" aria-label="Change theme">
          {LABELS[mode]}
        </Button>
      </DropdownTrigger>
      <DropdownMenu
        aria-label="Theme"
        selectedKeys={[mode]}
        selectionMode="single"
        onAction={(k) => setMode(k as ThemeMode)}
      >
        <DropdownItem key="light">☀️ Light</DropdownItem>
        <DropdownItem key="dark">🌙 Dark</DropdownItem>
        <DropdownItem key="system">💻 System</DropdownItem>
      </DropdownMenu>
    </Dropdown>
  );
}
