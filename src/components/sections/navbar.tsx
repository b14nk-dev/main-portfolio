"use client";

import { DATA } from "@/app/data";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { NAV_LINKS, RESUME_FILENAME } from "../navbar/links";
import { MobileNav } from "../navbar/mobile-nav";
import { ThemeToggle } from "../navbar/theme-toggle";

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="site-nav sticky top-0 z-40 border-b border-border bg-background/85 backdrop-blur-sm">
      <div className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between px-6 sm:px-10">
        <Link
          href="/"
          className="font-serif text-[22px] tracking-tight text-foreground"
        >
          Ritik Negi
        </Link>

        <nav className="hidden items-center gap-7 md:flex">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="link text-[15px] text-muted-foreground transition-colors duration-500 hover:text-foreground"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-5">
          <a
            href={DATA.HEADER.RESUME}
            download={RESUME_FILENAME}
            className="link hidden text-[15px] text-foreground sm:inline-block"
          >
            Résumé
          </a>

          <ThemeToggle />

          <button
            type="button"
            onClick={() => setOpen((value) => !value)}
            aria-label="Toggle navigation menu"
            aria-expanded={open}
            aria-controls="mobile-nav"
            className="-m-2 p-2 text-muted-foreground transition-colors duration-500 hover:text-foreground md:hidden"
          >
            {open ? (
              <X className="size-[18px]" strokeWidth={1.25} />
            ) : (
              <Menu className="size-[18px]" strokeWidth={1.25} />
            )}
          </button>
        </div>
      </div>

      <MobileNav open={open} onClose={() => setOpen(false)} />
    </header>
  );
}
