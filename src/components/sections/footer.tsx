import { ArrowUp } from "lucide-react";

export function Footer() {
  function scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }

  return (
    <button
      className="mx-auto flex w-fit cursor-pointer flex-col items-center gap-0 py-10 text-muted-foreground"
      onClick={scrollToTop}
    >
      <p className="flex items-center gap-1">
        Elevate to the top
        <ArrowUp size={20} />
      </p>
    </button>
  );
}
