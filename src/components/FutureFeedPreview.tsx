const items = [
  {
    title: "Hidden omakase counter",
    meta: "Food · Near you",
    body: "People with similar taste profiles are discovering smaller reservation-only sushi experiences instead of mainstream dinner spots.",
  },
  {
    title: "Design-forward cocktail lounge",
    meta: "Drink · Trending",
    body: "A quieter, more curated drinking environment fits your preferences better than high-volume nightlife.",
  },
  {
    title: "Late-night jazz + dessert",
    meta: "Entertainment · Blind-spot unlock",
    body: "You lean social and refined, but your current activity mix is missing intimate culture-driven evenings.",
  },
];

export default function FutureFeedPreview() {
  return (
    <section className="card hover:border-white/20 transition-colors">
      <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="section-title">Feed preview</p>
          <h3 className="mt-3 section-heading">
            The future <span className="text-[#FF7D45]">Bourgaeux</span> social feed
          </h3>
        </div>

        <div className="rounded-full border border-white/10 bg-black/30 px-4 py-2 text-xs text-white/55">
          People · Places · Taste identities
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        {items.map((item) => (
          <div key={item.title} className="card transition hover:bg-white/[0.03] hover:border-white/20">
            <p className="text-xs uppercase tracking-[0.2em] text-[#FF7D45]">
              {item.meta}
            </p>
            <h4 className="mt-4 text-lg font-semibold text-white">{item.title}</h4>
            <p className="mt-3 text-sm leading-6 text-white/80">{item.body}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
