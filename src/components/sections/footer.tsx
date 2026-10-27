import { DATA } from "@/app/data";

export function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-2 px-6 py-8 sm:flex-row sm:items-center sm:justify-between sm:px-10">
        <p className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} {DATA.HEADER.NAME}
        </p>
        <a
          href="#top"
          className="link text-sm text-muted-foreground transition-colors duration-500 hover:text-foreground"
        >
          Back to top
        </a>
      </div>
    </footer>
  );
}
