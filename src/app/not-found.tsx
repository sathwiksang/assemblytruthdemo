import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex min-h-[70vh] items-center justify-center bg-muted px-5">
      <div className="text-center">
        <p className="font-body text-[11px] font-medium uppercase tracking-[0.3em] text-primary">
          404
        </p>
        <h1 className="mb-4 mt-3 font-heading text-4xl font-semibold text-foreground">
          Page not found
        </h1>
        <p className="mb-8 font-body text-muted-foreground">
          The page you are looking for does not exist or has moved.
        </p>
        <Link
          href="/"
          className="inline-flex items-center bg-primary px-7 py-3.5 font-body text-xs font-medium uppercase tracking-[0.2em] text-primary-foreground transition-colors hover:bg-teal-dark"
        >
          Return Home
        </Link>
      </div>
    </div>
  );
}
