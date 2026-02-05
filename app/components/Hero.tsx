const ritualItems = [
  "Rangsit University (2018–2022)",
  "B.I.T. in Computer Game & Multimedia",
  "GPAX 3.53/4.00 (First-class honors)",
];
const miniCards = [
  {
    title: "GMS marketplace",
    body: "Shipped platform features, code reviews, automated tests.",
  },
  {
    title: "Death Message",
    body: "Migrated JS to TS + integrated RevenueCat end-to-end.",
  },
];

export default function Hero() {
  return (
    <section className="mt-14 grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">
      <div className="space-y-8">
        <div className="inline-flex items-center gap-2 rounded-full bg-(--surface) px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-muted shadow-card">
          AI generated, supervised by Joe
        </div>
        <h1 className="text-balance text-4xl font-semibold leading-tight text-foreground sm:text-5xl lg:text-6xl">
          Chitsanupong Klaithin (Joe): Full-stack builder with a game dev core.
        </h1>
        <p className="text-balance text-lg leading-8 text-muted sm:text-xl">
          Chiang Mai, Thailand. From Unity C# and React Native to Next.js and
          TypeScript, I build fast, reliable interfaces with a calm delivery
          loop.
        </p>
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
          <button className="inline-flex items-center justify-center rounded-full bg-(--accent) px-6 py-3 text-sm font-semibold uppercase tracking-[0.18em] text-white shadow-soft transition hover:-translate-y-0.5 hover:bg-[#0c3f4c]">
            Start a Pilot
          </button>
          <button className="inline-flex items-center justify-center rounded-full border border-black/10 bg-(--surface) px-6 py-3 text-sm font-semibold text-foreground transition hover:-translate-y-0.5 hover:border-black/20">
            See the workflow
          </button>
        </div>
        <div className="grid gap-6 rounded-3xl border border-black/5 bg-(--surface) p-6 text-sm text-muted shadow-card sm:grid-cols-3">
          <div>
            <p className="text-2xl font-semibold text-foreground">
              2024–2026
            </p>
            <p>Twenty Ideas — Senior Software Dev</p>
          </div>
          <div>
            <p className="text-2xl font-semibold text-foreground">
              2023–2024
            </p>
            <p>Trinket — Software Developer</p>
          </div>
          <div>
            <p className="text-2xl font-semibold text-foreground">
              2020–2021
            </p>
            <p>Klong Technology — Full-stack Dev</p>
          </div>
        </div>
      </div>

      <div className="relative">
        <div className="absolute -left-6 -top-6 hidden h-24 w-24 rounded-full bg-(--accent-strong) opacity-70 blur-2xl lg:block" />
        <div className="rounded-4xl border border-black/5 bg-(--surface) p-6 shadow-soft">
          <div className="rounded-3xl bg-(--surface-strong) p-6">
            <div className="flex items-center justify-between text-sm text-muted">
              <p>Project Highlights</p>
              <p className="rounded-full bg-(--surface) px-3 py-1 text-xs font-semibold text-accent">
                Live
              </p>
            </div>
            <h2 className="mt-4 text-xl font-semibold text-foreground">
              Evercred & GMS delivery loop
            </h2>
            <p className="mt-2 text-sm leading-6 text-muted">
              Led ~80% of portal delivery, Stripe payments, and platform
              features with reliable releases.
            </p>
            <div className="mt-6 grid gap-3">
              {ritualItems.map((item) => (
                <div
                  key={item}
                  className="flex items-center justify-between rounded-2xl bg-(--surface) px-4 py-3 text-sm text-foreground shadow-card"
                >
                  <span>{item}</span>
                  <span className="text-xs text-muted">Ready</span>
                </div>
              ))}
            </div>
          </div>
          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            {miniCards.map((card) => (
              <div
                key={card.title}
                className="rounded-2xl border border-black/5 bg-(--surface) p-4 text-sm text-muted shadow-card"
              >
                <p className="text-base font-semibold text-foreground">
                  {card.title}
                </p>
                <p className="mt-2 leading-6">{card.body}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="absolute -bottom-8 right-8 hidden rounded-full border border-black/10 bg-(--surface) px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-accent shadow-card lg:inline-flex animate-float">
          CodeWars 5 kyu • Frontend Mentor
        </div>
      </div>
    </section>
  );
}
