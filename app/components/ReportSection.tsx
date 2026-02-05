const reportItems = [
  "GISTDA: raytracing + signal range algorithms (2018)",
  "Pi R Square: Unity C# Play-to-Learn game (2022)",
  "Klong Tech: NodeJS + Python on AWS Lambda",
];

export default function ReportSection() {
  return (
    <section className="bg-grid mt-20 grid gap-6 rounded-[36px] border border-black/5 p-10 shadow-soft lg:grid-cols-[1.1fr_0.9fr]">
      <div className="space-y-5 rounded-[28px] bg-(--surface) p-8 shadow-card">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
          Resume easter eggs
        </p>
        <h3 className="text-3xl font-semibold text-foreground">
          Signals from past roles and internships.
        </h3>
        <p className="leading-7 text-muted">
          GISTDA (Geo-Informatics and Space Technology Development Agency),
          Pi R Square, and Klong Technology shaped the way I build systems that
          stay reliable under real-world constraints.
        </p>
        <button className="inline-flex items-center justify-center rounded-full bg-(--accent-strong) px-6 py-3 text-sm font-semibold uppercase tracking-[0.18em] text-foreground transition hover:-translate-y-0.5">
          Read the timeline
        </button>
      </div>
      <div className="grid gap-4">
        {reportItems.map((item) => (
          <div
            key={item}
            className="flex items-center justify-between rounded-2xl border border-black/5 bg-(--surface) px-5 py-4 text-sm font-semibold text-foreground shadow-card"
          >
            <span>{item}</span>
            <span className="text-xs text-muted">Included</span>
          </div>
        ))}
      </div>
    </section>
  );
}
