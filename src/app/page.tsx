"use client"

import { useEffect } from 'react';
import Hero from "../components/Hero";

// Remove loading screen when page is fully loaded
if (typeof window !== 'undefined') {
  window.addEventListener('load', () => {
    const loadingScreen = document.getElementById('loading-screen');
    if (loadingScreen) {
      loadingScreen.style.opacity = '0';
      setTimeout(() => loadingScreen.remove(), 300);
    }
  });
}
import FutureFeedPreview from "../components/FutureFeedPreview";
import OnboardingForm from "../components/OnboardingForm";

export default function HomePage() {
  return (
    <main className="min-h-screen p-4 sm:p-8">
      <div className="mx-auto flex max-w-6xl flex-col gap-12">
        <Hero />
        <FutureFeedPreview />

        <section className="grid gap-8">
          <div className="card">
            <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <p className="section-title">Fresh Picks</p>
                <h3 className="mt-3 section-heading">
                  Recently recommended <span className="text-[#FF7D45]">experiences</span>
                </h3>
              </div>
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              <div className="feature-card group">
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-full bg-gradient-to-r from-[#FF7D45] via-[#FF5E62] to-[#FF3D71]"></div>
                  <div>
                    <p className="font-medium">Alexandra R.</p>
                    <p className="text-sm text-white/60">Miami</p>
                  </div>
                </div>
                <div className="mt-4">
                  <h4 className="font-semibold">Bar Marilou</h4>
                  <p className="text-sm text-white/80 mt-1">Luxury cocktail bar with Parisian vibes and live jazz</p>
                  <div className="mt-3 flex gap-2">
                    <span className="text-xs px-2 py-1 rounded-full bg-white/10">$$$</span>
                    <span className="text-xs px-2 py-1 rounded-full bg-white/10">Cocktails</span>
                    <span className="text-xs px-2 py-1 rounded-full bg-white/10">Live Music</span>
                  </div>
                </div>
                <div className="mt-4 pt-4 border-t border-white/10 opacity-0 group-hover:opacity-100 transition-opacity">
                  <button className="text-xs text-[#FF7D45] hover:text-[#FF5E62] transition-colors">
                    Save to profile
                  </button>
                </div>
              </div>

              <div className="feature-card">
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-full bg-gradient-to-r from-[#FF7D45] via-[#FF5E62] to-[#FF3D71]"></div>
                  <div>
                    <p className="font-medium">James K.</p>
                    <p className="text-sm text-white/60">Chicago</p>
                  </div>
                </div>
                <div className="mt-4">
                  <h4 className="font-semibold">Kumiko</h4>
                  <p className="text-sm text-white/80 mt-1">Japanese-inspired tasting menu with cocktail pairings</p>
                  <div className="mt-3 flex gap-2">
                    <span className="text-xs px-2 py-1 rounded-full bg-white/10">$$$$</span>
                    <span className="text-xs px-2 py-1 rounded-full bg-white/10">Omakase</span>
                    <span className="text-xs px-2 py-1 rounded-full bg-white/10">Date Night</span>
                  </div>
                </div>
              </div>

              <div className="feature-card">
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-full bg-gradient-to-r from-[#FF7D45] via-[#FF5E62] to-[#FF3D71]"></div>
                  <div>
                    <p className="font-medium">Sophie M.</p>
                    <p className="text-sm text-white/60">Austin</p>
                  </div>
                </div>
                <div className="mt-4">
                  <h4 className="font-semibold">Pool Burger</h4>
                  <p className="text-sm text-white/80 mt-1">Retro poolside burger spot with tropical cocktails</p>
                  <div className="mt-3 flex gap-2">
                    <span className="text-xs px-2 py-1 rounded-full bg-white/10">$$</span>
                    <span className="text-xs px-2 py-1 rounded-full bg-white/10">Burgers</span>
                    <span className="text-xs px-2 py-1 rounded-full bg-white/10">Poolside</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
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

          <div className="grid gap-6 md:grid-cols-3 mb-12">
            <div className="feature-card group">
              <div className="feature-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-clock">
                  <circle cx="12" cy="12" r="10"/>
                  <polyline points="12 6 12 12 16 14"/>
                </svg>
              </div>
              <h3 className="text-xl font-semibold">Recent Activity</h3>
              <p className="text-white/80">
                See what's new from your network and trending in your city.
              </p>
              <div className="mt-4 pt-4 border-t border-white/10 opacity-0 group-hover:opacity-100 transition-opacity">
                <button className="text-xs text-[#FF7D45] hover:text-[#FF5E62] transition-colors">
                  View Updates
                </button>
              </div>
            </div>
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

          <div className="form-section">
            <div className="max-w-3xl mx-auto text-center mb-8">
              <h2 className="section-heading">
                Ready to elevate your lifestyle?
              </h2>
              <p className="mt-4 text-lg text-white/80">
                Join Bourgaeux today and start discovering the best experiences in your city.
              </p>
              <div className="mt-6">
                <button 
                  className="btn-primary" 
                  onClick={(e) => {
                    e.currentTarget.classList.add('loading');
                    // Simulate async operation
                    setTimeout(() => {
                      e.currentTarget.classList.remove('loading');
                    }, 2000);
                  }}
                >
                  Get Started
                </button>
              </div>
            </div>

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 mb-12">
              <div className="testimonial-card">
                <p className="text-white/80 italic">
                  "Bourgaeux completely changed how I explore my city. The recommendations are spot on!"
                </p>
                <div className="flex items-center gap-3 mt-4">
                  <div className="h-10 w-10 rounded-full bg-gradient-to-r from-[#FF7D45] via-[#FF5E62] to-[#FF3D71]"></div>
                  <div>
                    <p className="font-medium">Sarah L.</p>
                    <p className="text-sm text-white/60">Los Angeles</p>
                  </div>
                </div>
              </div>

              <div className="testimonial-card">
                <p className="text-white/80 italic">
                  "I've discovered so many amazing places I never would have found on my own."
                </p>
                <div className="flex items-center gap-3 mt-4">
                  <div className="h-10 w-10 rounded-full bg-gradient-to-r from-[#FF7D45] via-[#FF5E62] to-[#FF3D71]"></div>
                  <div>
                    <p className="font-medium">Michael T.</p>
                    <p className="text-sm text-white/60">New York</p>
                  </div>
                </div>
              </div>

              <div className="stats-card">
                <h3 className="text-3xl font-bold">10,000+</h3>
                <p className="text-white/80">Experiences Discovered</p>
              </div>
            </div>

            <OnboardingForm />
          </div>
        </section>
      </div>
    </main>
  );
}
