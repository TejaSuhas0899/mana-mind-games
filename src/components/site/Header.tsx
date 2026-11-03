import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Menu, X } from "lucide-react";

import { tmvLogo } from "./brand";
import { NAV_LINKS, NavLink } from "./NavLink";

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/80 backdrop-blur-md">
      <div className="mx-auto flex h-20 max-w-6xl items-center justify-between px-4 sm:px-6">
        <Link to="/" aria-label="TheManaVerse Games home" onClick={closeMenu}>
          <img
            src={tmvLogo.url}
            alt="TheManaVerse Games logo"
            className="h-10 w-auto rounded-lg sm:h-12"
          />
        </Link>

        {/* Desktop navigation */}
        <nav aria-label="Main navigation" className="hidden md:block">
          <ul className="flex items-center gap-2">
            {NAV_LINKS.map((link) => (
              <li key={link.label}>
                <NavLink label={link.label} hash={link.hash} />
              </li>
            ))}
            <li>
              <Link
                to="/privacy-policy"
                className="rounded-md px-3 py-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                Privacy
              </Link>
            </li>
          </ul>
        </nav>

        {/* Mobile menu toggle */}
        <button
          type="button"
          className="rounded-md p-2 text-muted-foreground transition-colors hover:text-foreground md:hidden"
          aria-expanded={menuOpen}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          onClick={() => setMenuOpen((open) => !open)}
        >
          {menuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <nav
          aria-label="Mobile navigation"
          className="border-t border-border bg-card/95 backdrop-blur-md md:hidden"
        >
          <ul className="mx-auto max-w-6xl px-4 py-3 sm:px-6">
            {NAV_LINKS.map((link) => (
              <li key={link.label}>
                <NavLink
                  label={link.label}
                  hash={link.hash}
                  className="block rounded-md px-3 py-3 text-base text-muted-foreground transition-colors hover:text-foreground"
                  onNavigate={closeMenu}
                />
              </li>
            ))}
            <li>
              <Link
                to="/privacy-policy"
                className="block rounded-md px-3 py-3 text-base text-muted-foreground transition-colors hover:text-foreground"
                onClick={closeMenu}
              >
                Privacy Policy
              </Link>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}
