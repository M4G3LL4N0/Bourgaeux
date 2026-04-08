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

          <div className="grid gap-8 md:grid-cols-3">
            <div className="feature-card">
              <div className="feature-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-sparkles">
                  <path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z"/>
                  <path d="M5 3v4"/>
                  <path d="M19 17v4"/>
                  <path d="M3 5h4"/>
                  <path d="M17 19h4"/>
                </svg>
              </div>
              <h3 className="text-xl font-semibold">Personalized Discovery</h3>
              <p className="text-white/80">
                AI-powered recommendations tailored to your unique tastes and preferences.
              </p>
            </div>

            <div className="feature-card">
              <div className="feature-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-users">
                  <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/>
                  <circle cx="9" cy="7" r="4"/>
                  <path d="M22 21v-2a4 4 0 0 0-3-3.87"/>
                  <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
                </svg>
              </div>
              <h3 className="text-xl font-semibold">Social Curation</h3>
              <p className="text-white/80">
                Discover what your friends and trusted tastemakers are loving right now.
              </p>
            </div>

            <div className="feature-card">
              <div className="feature-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-compass">
                  <circle cx="12" cy="12" r="10"/>
                  <polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76"/>
                </svg>
              </div>
              <h3 className="text-xl font-semibold">Taste Expansion</h3>
              <p className="text-white/80">
                Explore new experiences curated to expand your horizons while staying true to your style.
              </p>
            </div>
          </div>

          <OnboardingForm />
        </section>
      </div>
    </main>
  );
}
