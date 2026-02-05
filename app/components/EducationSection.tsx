const educationItems = [
  "Rangsit University, Pathumthani (2018–2022)",
  "B.I.T. — Computer Game & Multimedia",
  "GPAX 3.53/4.00 (First-class honors)",
];

export default function EducationSection() {
  return (
    <section className="mt-20 grid gap-6 rounded-[36px] border border-black/5 bg-(--surface) p-8 shadow-soft lg:grid-cols-[1fr_1.1fr]">
      <div className="space-y-4">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
          Education
        </p>
        <h2 className="text-3xl font-semibold text-foreground">
          Academic foundations that shaped the build style.
        </h2>
        <p className="leading-7 text-muted">
          Game and multimedia training with a strong engineering base, now
          applied to full-stack product delivery.
        </p>
      </div>
      <div className="grid gap-4">
        {educationItems.map((item) => (
          <div
            key={item}
            className="flex items-center justify-between rounded-2xl border border-black/5 bg-(--surface) px-5 py-4 text-sm font-semibold text-foreground shadow-card"
          >
            <span>{item}</span>
            <span className="text-xs text-muted">Verified</span>
          </div>
        ))}
      </div>
    </section>
  );
}
