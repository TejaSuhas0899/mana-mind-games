import { Link } from "@tanstack/react-router";
import { tmvLogo } from "./brand";

export function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-6 px-4 py-12 text-center sm:px-6 md:flex-row md:justify-between md:text-left">
        <div>
          <img
            src={tmvLogo.url}
            alt="TheManaVerse Games logo"
            className="mx-auto h-11 w-auto rounded-lg md:mx-0"
          />
          <p className="mt-3 text-sm text-muted-foreground">
            TheManaVerse Games – Play. Think. Explore.
          </p>
        </div>
        <nav aria-label="Footer navigation">
          <ul className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm text-muted-foreground">
            <li>
              <a href="#about" className="transition-colors hover:text-foreground">
                About
              </a>
            </li>
            <li>
              <a href="#contact" className="transition-colors hover:text-foreground">
                Contact
              </a>
            </li>
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
