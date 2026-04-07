import Hero from "../components/Hero";
import FutureFeedPreview from "../components/FutureFeedPreview";
import OnboardingForm from "../components/OnboardingForm";

export default function HomePage() {
  return (
    <main className="min-h-screen p-4 sm:p-8">
      <div className="mx-auto flex max-w-6xl flex-col gap-12">
        <Hero />
        <FutureFeedPreview />

        <section className="grid gap-8">
          <div className="max-w-3xl">
            <p className="section-title">Social + AI for real life</p>
            <h2 className="mt-4 section-heading">
              Discover the restaurants, drinks, and experiences you're missing
            </h2>
            <p className="mt-5 max-w-2xl text-lg leading-8 text-white/80">
              Bourgaeux is a lifestyle intelligence network combining premium recommendations, 
              taste expansion, and social discovery.
            </p>
          </div>

          <OnboardingForm />
        </section>
      </div>
    </main>
  );
}
