"use client";

import { useState } from "react";

type FormState = {
  budget: string;
  region: string;
  timeline: string;
  style: string;
};

type Recommendation = {
  title?: string;
  subtitle?: string;
  description?: string;
  price?: string;
};

export default function OnboardingForm() {
  const [form, setForm] = useState<FormState>({
    budget: "",
    region: "",
    timeline: "",
    style: "",
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [results, setResults] = useState<Recommendation[]>([]);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const res = await fetch("/api/recommendations", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      if (!res.ok) {
        const errorData = await res.json().catch(() => ({}));
        throw new Error(errorData.error || "Failed to get recommendations");
      }

      const data = await res.json().catch(() => ({}));
      const nextResults = Array.isArray(data?.recommendations)
        ? data.recommendations
        : Array.isArray(data?.results)
          ? data.results
          : [];

      setResults(nextResults);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong");
      setResults([]);
    } finally {
      setLoading(false);
    }
  }

  function updateField<K extends keyof FormState>(key: K, value: FormState[K]) {
    setForm((prev) => ({ ...prev, [key]: value }));
  }

  return (
    <div className="w-full">
      <form onSubmit={handleSubmit} className="grid gap-4">
        <div className="grid gap-2">
          <label htmlFor="budget" className="text-sm font-medium">
            Budget
          </label>
          <input
            id="budget"
            value={form.budget}
            onChange={(e) => updateField("budget", e.target.value)}
            className="w-full rounded-xl border border-black/10 px-4 py-3 outline-none"
            placeholder="Your budget"
          />
        </div>

        <div className="grid gap-2">
          <label htmlFor="region" className="text-sm font-medium">
            Region
          </label>
          <input
            id="region"
            value={form.region}
            onChange={(e) => updateField("region", e.target.value)}
            className="w-full rounded-xl border border-black/10 px-4 py-3 outline-none"
            placeholder="Preferred region"
          />
        </div>

        <div className="grid gap-2">
          <label htmlFor="timeline" className="text-sm font-medium">
            Timeline
          </label>
          <input
            id="timeline"
            value={form.timeline}
            onChange={(e) => updateField("timeline", e.target.value)}
            className="w-full rounded-xl border border-black/10 px-4 py-3 outline-none"
            placeholder="Move-in timeline"
          />
        </div>

        <div className="grid gap-2">
          <label htmlFor="style" className="text-sm font-medium">
            Style
          </label>
          <input
            id="style"
            value={form.style}
            onChange={(e) => updateField("style", e.target.value)}
            className="w-full rounded-xl border border-black/10 px-4 py-3 outline-none"
            placeholder="Style preferences"
          />
        </div>

        <button
          type="submit"
          disabled={loading}
          className="rounded-xl bg-black px-5 py-3 text-white disabled:opacity-60"
        >
          {loading ? "Loading..." : "Get Recommendations"}
        </button>

        {error ? <p className="text-sm text-red-600">{error}</p> : null}
      </form>

      <div className="mt-6 grid gap-4">
        {results.map((item, index) => (
          <div
            key={`${item.title ?? "recommendation"}-${index}`}
            className="rounded-2xl border border-black/10 p-4"
          >
            <h3 className="text-lg font-semibold">{item.title ?? "Recommendation"}</h3>
            {item.subtitle ? (
              <p className="mt-1 text-sm text-neutral-600">{item.subtitle}</p>
            ) : null}
            {item.description ? (
              <p className="mt-3 text-sm text-neutral-700">{item.description}</p>
            ) : null}
            {item.price ? (
              <p className="mt-3 text-sm font-medium">{item.price}</p>
            ) : null}
          </div>
        ))}
      </div>
    </div>
  );
}
