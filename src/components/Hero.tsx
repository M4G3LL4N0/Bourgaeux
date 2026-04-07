export default function Hero() {
  return (
    <section className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-[#0a0a1a] to-[#0a0a0a] p-8 sm:p-12">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(255,125,69,0.15)_0%,_transparent_70%)] opacity-20" />
      <div className="relative max-w-4xl">
        <div className="inline-flex rounded-full border border-[#FF7D45]/30 bg-[#FF7D45]/10 px-4 py-2 text-xs font-medium uppercase tracking-[0.28em] text-[#FF7D45]">
          Lifestyle Intelligence Network
        </div>

        <h1 className="mt-6 text-4xl font-semibold tracking-tight text-white sm:text-5xl md:text-6xl">
          Discover the life you <span className="bg-gradient-to-r from-[#FF7D45] to-[#FF3D71] bg-clip-text text-transparent">haven't lived</span> yet
        </h1>

        <p className="mt-6 max-w-2xl text-lg leading-8 text-white/80">
          A premium social + AI lifestyle assistant revealing your blind spots in food, drink, entertainment, and experiences.
        </p>

        <div className="mt-10 grid gap-4 sm:grid-cols-3">
          {[
            "Recommendation engine for real life",
            "Blind-spot detection across taste",
            "Social identity through experiences"
          ].map((item) => (
            <div key={item} className="card">
              <p className="text-sm text-white/80">{item}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
