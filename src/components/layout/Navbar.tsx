import {
  Navbar as HNavbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
  Button,
  Badge,
  Kbd,
  Tooltip,
} from '@heroui/react';
import { useState } from 'react';
import { Link, useRouterState } from '@tanstack/react-router';
import { useBookmarks } from '@/features/bookmarks/bookmarks.context';
import { ThemeToggle } from './ThemeToggle';

const NAV = [
  { label: 'Home', to: '/' },
  { label: 'Tips', to: '/tips' },
  { label: 'Saved', to: '/saved' },
  { label: 'About', to: '/about' },
  { label: 'Contact', to: '/contact' },
] as const;

export function Navbar({ onOpenPalette }: { onOpenPalette: () => void }) {
  const [open, setOpen] = useState(false);
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const { bookmarks } = useBookmarks();

  return (
    <HNavbar isBordered isMenuOpen={open} onMenuOpenChange={setOpen} maxWidth="2xl">
      <NavbarContent>
        <NavbarMenuToggle className="sm:hidden" aria-label="Toggle menu" />
        <NavbarBrand>
          <Link to="/" className="text-lg font-bold text-inherit">
            ⚡ Web-Hacks
          </Link>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden gap-5 sm:flex" justify="center">
        {NAV.map((n) => {
          const active = pathname === n.to;
          const label =
            n.to === '/saved' ? (
              <Badge
                color="primary"
                size="sm"
                content={bookmarks.length}
                isInvisible={bookmarks.length === 0}
              >
                {n.label}
              </Badge>
            ) : (
              n.label
            );
          return (
            <NavbarItem key={n.to} isActive={active}>
              <Link to={n.to} className={active ? 'text-primary' : 'text-foreground'}>
                {label}
              </Link>
            </NavbarItem>
          );
        })}
      </NavbarContent>

      <NavbarContent justify="end">
        <NavbarItem className="hidden sm:flex">
          <Tooltip content={<span>Search &amp; navigate</span>} placement="bottom">
            <Button
              size="sm"
              variant="flat"
              onPress={onOpenPalette}
              aria-label="Open command palette"
              endContent={<Kbd keys={['command']}>K</Kbd>}
            >
              Search
            </Button>
          </Tooltip>
        </NavbarItem>
        <NavbarItem>
          <ThemeToggle />
        </NavbarItem>
      </NavbarContent>

      <NavbarMenu>
        {NAV.map((n) => (
          <NavbarMenuItem key={n.to} isActive={pathname === n.to}>
            <Link to={n.to} className="w-full py-1 text-foreground" onClick={() => setOpen(false)}>
              {n.label}
              {n.to === '/saved' && bookmarks.length > 0 ? ` (${bookmarks.length})` : ''}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </HNavbar>
  );
}
