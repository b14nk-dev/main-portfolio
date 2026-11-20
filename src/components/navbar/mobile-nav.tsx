"use client";

import { DATA } from "@/app/data";
import { AnimatePresence, motion } from "framer-motion";
import { NAV_LINKS, RESUME_FILENAME } from "./links";

type MobileNavProps = {
  open: boolean;
  onClose: () => void;
};

export function MobileNav({ open, onClose }: MobileNavProps) {
  return (
    <AnimatePresence initial={false}>
      {open && (
        <motion.nav
          id="mobile-nav"
          key="mobile-nav"
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: "auto", opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
          className="overflow-hidden border-t border-border md:hidden"
        >
          <ul className="mx-auto flex w-full max-w-6xl flex-col px-6 py-4">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={onClose}
                  className="block border-b border-border/60 py-3.5 font-serif text-2xl text-foreground"
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li>
              <a
                href={DATA.HEADER.RESUME}
                download={RESUME_FILENAME}
                className="block py-4 text-base text-muted-foreground"
              >
                Résumé
              </a>
            </li>
          </ul>
        </motion.nav>
      )}
    </AnimatePresence>
  );
}
