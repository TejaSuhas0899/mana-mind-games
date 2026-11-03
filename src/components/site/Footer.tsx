import { Link } from "@tanstack/react-router";
import { tmvLogo } from "./brand";
import { NAV_LINKS, NavLink } from "./NavLink";

export function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-6 px-4 py-12 text-center sm:px-6 md:flex-row md:justify-between md:text-left">
        <div>
          <Link to="/" aria-label="TheManaVerse Games home">
            <img
              src={tmvLogo.url}
              alt="TheManaVerse Games logo"
              className="mx-auto h-11 w-auto rounded-lg md:mx-0"
            />
          </Link>
          <p className="mt-3 text-sm text-muted-foreground">
            TheManaVerse Games – Play. Think. Explore.
          </p>
        </div>
        <nav aria-label="Footer navigation">
          <ul className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm text-muted-foreground">
            {NAV_LINKS.filter((link) => link.hash).map((link) => (
              <li key={link.label}>
                <NavLink label={link.label} hash={link.hash} className="transition-colors hover:text-foreground" />
              </li>
            ))}
            <li>
              <Link to="/privacy-policy" className="transition-colors hover:text-foreground">
                Privacy Policy
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </footer>
  );
}
