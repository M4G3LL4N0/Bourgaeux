export default function Hero() {
  return (
    <section className="relative min-h-[680px] overflow-hidden rounded-[2rem] border border-white/10 bg-[#070705] px-5 py-6 sm:px-8 lg:px-10">
      <div className="absolute inset-0 bg-[linear-gradient(120deg,rgba(7,7,5,0.92),rgba(7,7,5,0.66)),url('https://images.unsplash.com/photo-1514933651103-005eec06c04b?auto=format&fit=crop&w=1800&q=80')] bg-cover bg-center" />
      <div className="absolute inset-x-0 bottom-0 h-56 bg-gradient-to-t from-[#070705] to-transparent" />

      <div className="relative flex min-h-[620px] flex-col justify-between">
        <div className="max-w-4xl pb-10 pt-4">
          <div className="inline-flex rounded-full border border-[#d9b66f]/30 bg-black/30 px-4 py-2 text-xs font-medium uppercase tracking-[0.24em] text-[#f0d58c]">
            Lifestyle Intelligence Network
          </div>

          <h1 className="mt-7 max-w-4xl text-5xl font-semibold tracking-tight text-white sm:text-6xl lg:text-7xl">
            Discover the life you have not lived yet.
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-white/75">
            Bourgaeux detects the invisible taste loops shaping your food,
            drink, entertainment, and lifestyle choices, then recommends what
            you should try next.
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <a href="#recommend" className="btn-primary text-center">
              Reveal my blind spots
            </a>
            <div className="rounded-2xl border border-white/10 bg-black/30 px-5 py-3 text-sm text-white/70">
              Recommendation-first discovery for real life.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
