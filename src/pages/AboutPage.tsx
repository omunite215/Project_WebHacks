import { SEO } from '@/components/ui/SEO';
import { FadeIn } from '@/components/animations/FadeIn';

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-3xl py-12">
      <SEO title="About" description="About Web-Hacks and its author." />
      <FadeIn>
        <h1 className="text-3xl font-bold">About Us</h1>
        <p className="mt-4 text-default-600">
          Web-Hacks is dedicated to the latest technology tips, tricks, and news. Our goal is to
          help individuals and businesses stay ahead by keeping up with trends in technology.
        </p>
        <p className="mt-4 text-default-600">
          Whether you are a tech-savvy individual or just looking to improve your skills, we have
          something for everyone across smartphones, computers, online security, software, and more.
        </p>
        <h2 className="mt-8 text-2xl font-semibold">About Me</h2>
        <p className="mt-2 text-default-600">
          Om Patel is a front-end web developer and UI/UX designer with a strong command of HTML,
          CSS, JavaScript, and React, focused on building visually appealing, user-friendly
          websites.
        </p>
      </FadeIn>
    </div>
  );
}
