export default function WaitlistSection() {
  return (
    <section className="mt-20 grid gap-8 rounded-[36px] border border-black/5 bg-(--surface) p-10 shadow-soft lg:grid-cols-[1.1fr_0.9fr]">
      <div className="space-y-4">
        <h3 className="text-3xl font-semibold text-foreground">
          Ready to build with a full-stack dev?
        </h3>
        <p className="leading-7 text-muted">
          Open to roles spanning web, mobile, or game-adjacent systems. Recent
          focus: TypeScript migrations, payment integrations, and real-time UX.
        </p>
      </div>
      <div className="flex flex-col gap-4 rounded-3xl border border-black/5 bg-(--surface) p-6 shadow-card">
        <input
          className="rounded-2xl border border-black/10 bg-(--surface-strong) px-4 py-3 text-sm text-foreground outline-none transition focus:border-black/30"
          placeholder="Work email"
          type="email"
        />
        <button className="inline-flex items-center justify-center rounded-2xl bg-accent px-6 py-3 text-sm font-semibold uppercase tracking-[0.18em] text-white transition hover:-translate-y-0.5 hover:bg-[#0c3f4c]">
          Join the waitlist
        </button>
        <p className="text-xs text-muted">
          Chiang Mai, Thailand • Available for collaboration.
        </p>
      </div>
    </section>
  );
}
