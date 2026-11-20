"use client";

import { warmup } from "@/lib/ask";
import { useEffect, useState } from "react";

/**
 * True until the backend answers its warm-up call. Free hosting sleeps when
 * idle, so the chat stays closed while the instance starts.
 */
export function useWarmup() {
  const [warming, setWarming] = useState(true);

  useEffect(() => {
    let cancelled = false;

    warmup()
      // An unreachable host is reported by the first question instead of
      // leaving the chat closed forever.
      .catch(() => undefined)
      .finally(() => {
        if (!cancelled) setWarming(false);
      });

    return () => {
      cancelled = true;
    };
  }, []);

  return warming;
}
