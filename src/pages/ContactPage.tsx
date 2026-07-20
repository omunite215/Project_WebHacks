import { SEO } from '@/components/ui/SEO';
import { ContactForm } from '@/features/contact/ContactForm';

export default function ContactPage() {
  return (
    <div className="mx-auto max-w-lg py-12">
      <SEO title="Contact" description="Get in touch with Web-Hacks." />
      <h1 className="mb-6 text-3xl font-bold">Contact</h1>
      <ContactForm />
    </div>
  );
}
