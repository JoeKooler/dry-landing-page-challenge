export default function Header() {
  return (
    <header className="flex items-center justify-between gap-4">
      <div className="flex items-center gap-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-accent text-sm font-semibold text-white shadow-card">
          JOE
        </div>
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-accent">
            JoeKooler
          </p>
          <p className="text-xs text-muted">Software Developer</p>
        </div>
      </div>
      <nav className="hidden items-center gap-8 text-sm font-medium text-muted md:flex">
        <a className="transition hover:text-foreground" href="#">
          Projects
        </a>
        <a className="transition hover:text-foreground" href="#">
          Experience
        </a>
        <a className="transition hover:text-foreground" href="#">
          Stack
        </a>
      </nav>
      <button className="hidden rounded-full border border-black/10 bg-(--surface) px-5 py-2 text-sm font-semibold text-foreground shadow-soft transition hover:-translate-y-0.5 hover:border-black/20 md:inline-flex">
        Get Early Access
      </button>
    </header>
  );
}
