"use client";

import { useEffect, useState } from "react";

/** Seconds remaining before another question is allowed. */
export function useCooldown() {
  const [cooldown, setCooldown] = useState(0);

  useEffect(() => {
    if (cooldown <= 0) return;
    const timer = setTimeout(() => setCooldown((value) => value - 1), 1000);
    return () => clearTimeout(timer);
  }, [cooldown]);

  return { cooldown, setCooldown };
}
