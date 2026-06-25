import Link from "next/link";

export function SiteFooter() {
  return (
    <footer className="border-t border-line">
      <div className="mx-auto flex max-w-7xl flex-col gap-5 px-5 py-10 text-sm text-muted sm:px-8 md:flex-row md:items-center md:justify-between">
        <p>Senior Full Stack Developer. AI Engineer. Automation Architect.</p>
        <div className="flex gap-5">
          <Link href="/case-studies" className="hover:text-ink">
            Work
          </Link>
          <Link href="/about" className="hover:text-ink">
            About
          </Link>
          <Link href="/contact" className="hover:text-ink">
            Contact
          </Link>
        </div>
      </div>
    </footer>
  );
}
