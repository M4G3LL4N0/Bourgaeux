import type { Recommendation } from "../lib/bourgaeux";

type RecommendationCardProps = {
  recommendation: Recommendation;
};

export default function RecommendationCard({
  recommendation,
}: RecommendationCardProps) {
  return (
    <div className="card">
      <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
        <h4 className="text-lg font-semibold text-white">
          {recommendation.title}
        </h4>
        <span className="rounded-full border border-[#FF7D45]/40 bg-[#FF7D45]/10 px-3 py-1 text-xs uppercase tracking-[0.2em] text-[#FF7D45]">
          {recommendation.category}
        </span>
      </div>
      <p className="mt-3 text-sm leading-6 text-white/80">
        {recommendation.reason}
      </p>
      <p className="mt-3 text-sm text-white/90">
        <span className="font-semibold text-[#FF7D45]">Next move:</span>{" "}
        {recommendation.nextStep}
      </p>
    </div>
  );
}
