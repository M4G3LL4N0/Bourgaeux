import FutureFeedPreview from "../components/FutureFeedPreview";
import Hero from "../components/Hero";
import OnboardingForm from "../components/OnboardingForm";

const pillars = [
  {
    title: "Taste identity",
    body: "A profile built from where you go, what you skip, and what your social circle unlocks.",
  },
  {
    title: "Blind-spot detection",
    body: "Recommendations that surface the cuisines, rooms, rituals, and experiences missing from your real life.",
  },
  {
    title: "Social discovery",
    body: "A future feed for people, places, and taste signals instead of generic ratings.",
  },
];

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-14 px-4 py-5 sm:px-6 lg:px-8">
        <Hero />

        <section id="how-it-works" className="grid gap-5 md:grid-cols-3">
          {pillars.map((pillar) => (
            <article key={pillar.title} className="feature-card">
              <p className="section-title">{pillar.title}</p>
              <p className="text-sm leading-6 text-white/70">{pillar.body}</p>
            </article>
          ))}
        </section>

        <OnboardingForm />
        <FutureFeedPreview />

        <section className="pb-12">
          <div className="rounded-3xl border border-[#d9b66f]/20 bg-[#d9b66f]/10 p-6 sm:p-8">
            <p className="section-title">Early access</p>
            <div className="mt-4 grid gap-6 lg:grid-cols-[1fr_auto] lg:items-end">
              <div>
                <h2 className="max-w-3xl text-3xl font-semibold tracking-tight text-white sm:text-4xl">
                  Build a life with better inputs.
                </h2>
                <p className="mt-4 max-w-2xl text-sm leading-6 text-white/70">
                  Bourgaeux starts with AI lifestyle recommendations and grows
                  into a social taste graph for food, drink, culture, and the
                  experiences people did not know they were missing.
                </p>
              </div>
              <a href="#recommend" className="btn-primary text-center">
                Start taste read
              </a>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
