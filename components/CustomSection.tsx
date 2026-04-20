import SectionHeading from "./SectionHeading";

export default function CustomSection() {
  return (
    <section id="custom" className="container-luxury py-20 sm:py-24">
      <SectionHeading
        eyebrow="Atelier"
        title="Made for You"
        description="Our consultation-led approach allows you to shape a piece around your routine, style, and intention."
      />

      <div className="grid gap-4 sm:grid-cols-3">
        <article className="rounded-2xl border border-ivory/10 bg-[#111] p-5">
          <h3 className="font-serif text-2xl text-ivory">Custom Sizing</h3>
          <p className="mt-2 text-sm text-mist">
            Choose proportions and carrying format adapted to your daily essentials.
          </p>
        </article>
        <article className="rounded-2xl border border-ivory/10 bg-[#111] p-5">
          <h3 className="font-serif text-2xl text-ivory">Personalization</h3>
          <p className="mt-2 text-sm text-mist">
            Tailor finishes, tones, and selected details for a uniquely personal expression.
          </p>
        </article>
        <article className="rounded-2xl border border-ivory/10 bg-[#111] p-5">
          <h3 className="font-serif text-2xl text-ivory">Bespoke Requests</h3>
          <p className="mt-2 text-sm text-mist">
            Collaborate directly with our atelier for one-off concepts and special commissions.
          </p>
        </article>
      </div>
    </section>
  );
}
