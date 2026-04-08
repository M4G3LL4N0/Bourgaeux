"use client";

import { useState } from "react";

type Recommendation = {
  title: string;
  category: string;
  reason: string;
  nextStep: string;
};

type ApiResult = {
  profileSummary: string;
  blindSpots: string[];
  recommendations: Recommendation[];
  socialAngle: string[];
  upgradePath: string[];
};

const initialState = {
  city: "",
  vibe: "",
  foodPreferences: "",
  drinkPreferences: "",
  entertainmentPreferences: "",
  lifestylePreferences: "",
  budget: "",
  dislikes: "",
};

export default function OnboardingForm() {
  const [form, setForm] = useState(initialState);
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<ApiResult | null>(null);
  const [error, setError] = useState("");
  const [currentStep, setCurrentStep] = useState(0);

  function updateField(name: keyof typeof initialState, value: string) {
    setForm((prev) => ({ ...prev, [name]: value }));
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    setError("");
    setResult(null);

    try {
      const res = await fetch("/api/recommend", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data?.error || "Failed to generate recommendations.");
      }

      setResult(data);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
      <section className="rounded-3xl border border-white/10 bg-white/[0.04] p-6">
        <div className="mb-5">
          <h3 className="text-xl font-semibold text-white">
            Build your Bourgaeux profile
          </h3>
          <p className="mt-2 text-sm leading-6 text-white/60">
            Tell Bourgaeux how you currently live so it can show you what you are
            missing next.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="grid gap-4">
          <div className="mb-6">
            <div className="flex gap-2">
              {['Basics', 'Preferences', 'Details'].map((step, index) => (
                <button
                  type="button"
                  onClick={() => setCurrentStep(index)}
                  className={`flex-1 rounded-lg py-2 text-sm font-medium ${
                    currentStep === index
                      ? 'bg-[#FF7D45]/10 text-[#FF7D45]'
                      : 'bg-white/5 text-white/50 hover:bg-white/10'
                  } transition-colors`}
                >
                  {step}
                </button>
              ))}
            </div>
          </div>

          {currentStep === 0 && (
            <>
              <Input
                label="City"
                placeholder="Los Angeles"
                value={form.city}
                onChange={(value) => updateField("city", value)}
              />
              <Input
                label="Your vibe"
                placeholder="curious, upscale, spontaneous, social"
                value={form.vibe}
                onChange={(value) => updateField("vibe", value)}
              />
            </>
          )}

          {currentStep === 1 && (
            <>
              <Textarea
                label="Food preferences"
                placeholder="Sushi, steakhouses, Mediterranean, brunch, dessert spots"
                value={form.foodPreferences}
                onChange={(value) => updateField("foodPreferences", value)}
              />
              <Textarea
                label="Drink preferences"
                placeholder="Cocktail lounges, espresso bars, wine bars, mocktails"
                value={form.drinkPreferences}
                onChange={(value) => updateField("drinkPreferences", value)}
              />
              <Textarea
                label="Entertainment preferences"
                placeholder="Live music, rooftops, comedy, museums, films, nightlife"
                value={form.entertainmentPreferences}
                onChange={(value) => updateField("entertainmentPreferences", value)}
              />
            </>
          )}

          {currentStep === 2 && (
            <>
              <Textarea
                label="Lifestyle preferences"
                placeholder="Luxury wellness, beach days, design hotels, social dining, curated experiences"
                value={form.lifestylePreferences}
                onChange={(value) => updateField("lifestylePreferences", value)}
              />
              <Input
                label="Budget"
                placeholder="$, $$, $$$ or mixed"
                value={form.budget}
                onChange={(value) => updateField("budget", value)}
              />
              <Textarea
                label="Dislikes / avoid"
                placeholder="Crowded clubs, dive bars, chain restaurants, overly touristy spots"
                value={form.dislikes}
                onChange={(value) => updateField("dislikes", value)}
              />
            </>
          )}

          <div className="flex justify-between mt-6">
            {currentStep > 0 && (
              <button
                type="button"
                onClick={() => setCurrentStep(currentStep - 1)}
                className="btn-secondary"
              >
                Back
              </button>
            )}
            {currentStep < 2 ? (
              <button
                type="button"
                onClick={() => setCurrentStep(currentStep + 1)}
                className="btn-primary"
              >
                Next
              </button>
            ) : (
              <button
                type="submit"
                disabled={loading}
                className="btn-primary"
              >
                {loading ? 'Expanding your life...' : 'Get recommendations'}
              </button>
            )}
          </div>
          <Input
            label="City"
            placeholder="Los Angeles"
            value={form.city}
            onChange={(value) => updateField("city", value)}
          />

          <Input
            label="Your vibe"
            placeholder="curious, upscale, spontaneous, social"
            value={form.vibe}
            onChange={(value) => updateField("vibe", value)}
          />
          <button 
            type="submit" 
            className={`btn-primary mt-6 ${loading ? 'loading' : ''}`}
            disabled={loading}
          >
            {loading ? (
              <div className="flex items-center gap-2">
                <div className="h-4 w-4 animate-spin rounded-full border-2 border-white border-t-transparent"></div>
                <span>Finding Recommendations...</span>
              </div>
            ) : (
              'Get Recommendations'
            )}
          </button>

          <Textarea
            label="Food preferences"
            placeholder="Sushi, steakhouses, Mediterranean, brunch, dessert spots"
            value={form.foodPreferences}
            onChange={(value) => updateField("foodPreferences", value)}
          />

          <Textarea
            label="Drink preferences"
            placeholder="Cocktail lounges, espresso bars, wine bars, mocktails"
            value={form.drinkPreferences}
            onChange={(value) => updateField("drinkPreferences", value)}
          />

          <Textarea
            label="Entertainment preferences"
            placeholder="Live music, rooftops, comedy, museums, films, nightlife"
            value={form.entertainmentPreferences}
            onChange={(value) => updateField("entertainmentPreferences", value)}
          />

          <Textarea
            label="Lifestyle preferences"
            placeholder="Luxury wellness, beach days, design hotels, social dining, curated experiences"
            value={form.lifestylePreferences}
            onChange={(value) => updateField("lifestylePreferences", value)}
          />

          <Input
            label="Budget"
            placeholder="$, $$, $$$ or mixed"
            value={form.budget}
            onChange={(value) => updateField("budget", value)}
          />

          <Textarea
            label="Dislikes / avoid"
            placeholder="Crowded clubs, dive bars, chain restaurants, overly touristy spots"
            value={form.dislikes}
            onChange={(value) => updateField("dislikes", value)}
          />

          <button
            type="submit"
            disabled={loading}
            className="mt-2 btn-primary px-5 py-3 text-sm disabled:cursor-not-allowed disabled:opacity-60 transition-opacity"
          >
            {loading ? "Expanding your life..." : "Generate recommendations"}
          </button>

          {error ? <p className="text-sm text-red-300">{error}</p> : null}
        </form>
      </section>

      <section className="rounded-3xl border border-white/10 bg-white/[0.04] p-6">
        {!result ? (
          <div>
            <h3 className="text-xl font-semibold text-white">What Bourgaeux returns</h3>
            <p className="mt-3 text-sm leading-6 text-white/60">
              Bourgaeux is not trying to help users search harder. It is trying
              to help them live better through recommendation, taste expansion,
              and blind-spot detection.
            </p>
          </div>
        ) : (
          <div className="space-y-6">
            <div>
              <p className="text-xs uppercase tracking-[0.22em] text-white/45">
                Profile summary
              </p>
              <p className="mt-2 text-sm leading-6 text-white/80">
                {result.profileSummary}
              </p>
            </div>

            <div>
              <p className="text-xs uppercase tracking-[0.22em] text-white/45">
                Blind spots
              </p>
              <ul className="mt-3 space-y-2">
                {result.blindSpots.map((spot) => (
                  <li
                    key={spot}
                    className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white/80"
                  >
                    {spot}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <p className="text-xs uppercase tracking-[0.22em] text-white/45">
                Recommendations
              </p>
              <div className="mt-3 grid gap-3">
                {result.recommendations.map((item) => (
                  <div
                    key={`${item.category}-${item.title}`}
                    className={`rounded-2xl border border-white/10 bg-black/30 p-4 ${loading ? 'opacity-60 cursor-not-allowed' : 'hover:border-white/20 hover:bg-white/[0.03]'} transition-all`}
                  >
                    <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                      <h4 className="text-lg font-semibold text-white">{item.title}</h4>
                      <span className="rounded-full border border-[#d4b06a]/40 bg-[#d4b06a]/10 px-3 py-1 text-xs uppercase tracking-[0.2em] text-[#e8c98a]">
                        {item.category}
                      </span>
                    </div>
                    <p className="mt-3 text-sm leading-6 text-white/75">
                      {item.reason}
                    </p>
                    <p className="mt-3 text-sm text-white/85">
                      <span className="font-semibold text-[#e8c98a]">Next move:</span>{" "}
                      {item.nextStep}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <p className="text-xs uppercase tracking-[0.22em] text-white/45">
                Social angle
              </p>
              <ul className="mt-3 space-y-2">
                {result.socialAngle.map((item) => (
                  <li
                    key={item}
                    className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white/80"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <p className="text-xs uppercase tracking-[0.22em] text-white/45">
                Upgrade path
              </p>
              <ul className="mt-3 space-y-2">
                {result.upgradePath.map((item) => (
                  <li
                    key={item}
                    className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white/80"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        )}
      </section>
    </div>
  );
}

function Input({
  label,
  placeholder,
  value,
  onChange,
}: {
  label: string;
  placeholder: string;
  value: string;
  onChange: (value: string) => void;
}) {
  return (
    <label className="grid gap-2">
      <span className="text-sm font-medium text-white/80">{label}</span>
      <input
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className="rounded-2xl border border-white/10 bg-black/30 px-4 py-3 text-sm text-white placeholder:text-white/30 hover:border-white/20 transition-colors"
      />
    </label>
  );
}

function Textarea({
  label,
  placeholder,
  value,
  onChange,
}: {
  label: string;
  placeholder: string;
  value: string;
  onChange: (value: string) => void;
}) {
  return (
    <label className="grid gap-2">
      <span className="text-sm font-medium text-white/80">{label}</span>
      <textarea
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        rows={4}
        className="rounded-2xl border border-white/10 bg-black/30 px-4 py-3 text-sm text-white placeholder:text-white/30 hover:border-white/20 transition-colors"
      />
    </label>
  );
}
