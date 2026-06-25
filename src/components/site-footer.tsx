import Link from "next/link";

export function SiteFooter() {
  return (
    <footer className="border-t border-line">
      <div className="mx-auto grid max-w-7xl gap-8 px-5 py-10 text-sm text-muted sm:px-8 md:grid-cols-[1fr_auto] md:items-center">
        <div>
          <p className="font-medium text-ink">Ajay Thakur</p>
          <p className="mt-2">Full Stack Developer & AI/Automation Engineer. PA, USA.</p>
          <p className="mt-2">© 2026 Ajay Thakur</p>
        </div>
        <div className="flex flex-wrap gap-5">
          <Link href="/case-studies" className="hover:text-ink">
            Work
          </Link>
          <Link href="/about" className="hover:text-ink">
            About
          </Link>
          <Link href="/contact" className="hover:text-ink">
            Contact
          </Link>
          <a href="mailto:hello@ajaythakur.dev" className="hover:text-ink">
            Email
          </a>
          <a href="https://linkedin.com" className="hover:text-ink">
            LinkedIn
          </a>
          <a href="https://www.upwork.com/freelancers/" className="hover:text-ink">
            Upwork
          </a>
        </div>
      </div>
    </footer>
  );
}
