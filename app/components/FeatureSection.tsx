const features = [
  {
    title: "Trinket Application",
    body: "React Native + Expo, v1→v2 social collectible app with music.",
  },
  {
    title: "Tech Combine / GoSoft",
    body: "Migrated legacy Java servlet to React micro-frontend + Node.",
  },
  {
    title: "Denso (Freelance)",
    body: "Next.js + Ant Design + Tailwind document tagging & kiosk viz.",
  },
  {
    title: "Ideal8 Live Stream",
    body: "React TS frontend + Nginx RTMP + Node backend streaming.",
  },
];

export default function FeatureSection() {
  return (
    <section className="mt-20 grid gap-6 rounded-[36px] border border-black/5 bg-(--surface) p-8 shadow-soft lg:grid-cols-[1fr_1.1fr]">
      <div className="space-y-4">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
          Built from real projects
        </p>
        <h2 className="text-3xl font-semibold text-foreground">
          A landing zone for shipped work and shipped learnings.
        </h2>
        <p className="leading-7 text-muted">
          From Unity C# game systems to modern web stacks (Next.js, React Native,
          Node, Postgres), these are the projects that shaped my workflow.
        </p>
      </div>
      <div className="grid gap-4 md:grid-cols-2">
        {features.map((feature) => (
          <div
            key={feature.title}
            className="rounded-2xl border border-black/5 bg-(--surface) p-5 text-sm text-muted shadow-card"
          >
            <p className="text-base font-semibold text-foreground">
              {feature.title}
            </p>
            <p className="mt-2 leading-6">{feature.body}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
