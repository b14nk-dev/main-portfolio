import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col justify-center px-6 sm:px-10">
      <p className="label">404</p>
      <h1 className="display mt-4 max-w-lg text-[clamp(2.25rem,7vw,4.5rem)] text-foreground">
        This page doesn&apos;t exist.
      </h1>
      <p className="mt-4 max-w-sm text-base leading-[1.7] text-muted-foreground">
        The link may be outdated. Head back to the portfolio to see the work.
      </p>
      <Link
        href="/"
        className="link mt-8 w-fit text-base text-foreground"
      >
        Back to portfolio →
      </Link>
    </div>
  );
}
