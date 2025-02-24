"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { AnimatedText, MovingElement } from "../navbar";

export function Navbar() {
  const router = useRouter();
  const { setTheme, resolvedTheme } = useTheme();
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const toggleTheme = () => {
    const nextTheme =
      resolvedTheme === "dark"
        ? "light"
        : resolvedTheme === "light"
          ? "dark"
          : "system";
    setTheme(nextTheme);
  };

  return (
    <header className="flex justify-between items-end">
      <MovingElement
        change={() => router.push("/")}
        ariaLabel="Navigate to home"
      >
        <Link href={"/"} className="tracking-tighter font-bold text-xl">
          Ritik Negi.
        </Link>
      </MovingElement>

      <nav className="flex items-center gap-2">
        <ul className="flex items-center gap-2 sm:gap-0">
          {["experience", "projects"].map((link, index) => (
            <li key={index}>
              <AnimatedText href={`/#${link}`}>{link}</AnimatedText>
            </li>
          ))}
        </ul>

        {isMounted && (
          <MovingElement
            className="rounded-full p-[10px]"
            change={toggleTheme}
            ariaLabel={`Switch to ${
              resolvedTheme === "dark" ? "light" : "dark"
            } mode`}
          >
            {resolvedTheme === "dark" ? <Moon /> : <Sun />}
          </MovingElement>
        )}
      </nav>
    </header>
  );
}
