import { Link } from '@tanstack/react-router';
import { NewsletterForm } from '@/features/newsletter/NewsletterForm';

export function Footer() {
  return (
    <footer className="mt-16 border-t border-default-100 bg-default-50">
      <div className="mx-auto flex max-w-screen-2xl flex-col gap-8 px-4 py-10 sm:flex-row sm:justify-between sm:px-6 lg:px-8 xl:px-12">
        <div>
          <p className="text-lg font-bold">⚡ Web-Hacks</p>
          <p className="max-w-sm text-sm text-default-500">
            Latest tech news and developer tips, redesigned.
          </p>
          <nav className="mt-4 flex gap-4 text-sm text-default-500">
            <Link to="/tips" className="hover:text-primary">
              Tips
            </Link>
            <Link to="/about" className="hover:text-primary">
              About
            </Link>
            <Link to="/contact" className="hover:text-primary">
              Contact
            </Link>
          </nav>
        </div>
        <div className="max-w-sm">
          <p className="mb-2 font-semibold">Subscribe to our newsletter</p>
          <NewsletterForm />
        </div>
      </div>
      <p className="pb-6 text-center text-xs text-default-400">
        © {new Date().getFullYear()} Web-Hacks. Built with React + HeroUI.
      </p>
    </footer>
  );
}
