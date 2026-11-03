import { Link } from "@tanstack/react-router";
import { tmvLogo } from "./brand";

const NAV_LINKS = [
  { label: "Home", href: "#top" },
  { label: "Games", href: "#games" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/80 backdrop-blur-md">
      <div className="mx-auto flex h-20 max-w-6xl items-center justify-between px-4 sm:px-6">
        <a href="#top" className="flex items-center gap-3" aria-label="TheManaVerse Games home">
          <img
            src={tmvLogo.url}
            alt="TheManaVerse Games logo"
            className="h-10 w-auto rounded-lg sm:h-12"
          />
        </a>
        <nav aria-label="Main navigation">
          <ul className="flex items-center gap-1 sm:gap-2">
            {NAV_LINKS.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  className="rounded-md px-2 py-2 text-sm text-muted-foreground transition-colors hover:text-foreground sm:px-3"
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li className="hidden sm:block">
              <Link
                to="/privacy-policy"
                className="rounded-md px-3 py-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                Privacy
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
