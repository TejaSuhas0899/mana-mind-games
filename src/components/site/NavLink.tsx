import { Link, useLocation } from "@tanstack/react-router";

export const NAV_LINKS = [
  { label: "Home", hash: "" },
  { label: "Games", hash: "games" },
  { label: "About", hash: "about" },
  { label: "Contact", hash: "contact" },
] as const;

type NavLinkProps = {
  label: string;
  hash: string;
  className?: string;
  onNavigate?: () => void;
};

/**
 * Section navigation that works from any page:
 * on the home page it scrolls to the section anchor, elsewhere it navigates
 * back to the matching home section.
 */
export function NavLink({ label, hash, className, onNavigate }: NavLinkProps) {
  const { pathname } = useLocation();
  const onHome = pathname === "/";
  const classes =
    className ??
    "rounded-md px-3 py-2 text-sm text-muted-foreground transition-colors hover:text-foreground";

  if (onHome) {
    return (
      <a href={hash ? `#${hash}` : "#top"} className={classes} onClick={onNavigate}>
        {label}
      </a>
    );
  }

  return (
    <Link
      to="/"
      {...(hash ? { hash } : {})}
      className={classes}
      onClick={onNavigate}
      activeOptions={{ exact: true }}
    >
      {label}
    </Link>
  );
}
