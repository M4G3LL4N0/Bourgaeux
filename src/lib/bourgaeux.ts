export type Recommendation = {
  title: string;
  subtitle?: string;
  description: string;
  price?: string;
  budget?: string;
  city?: string;
  reason?: string;
  nextStep?: string;
  recommendedBy?: string;
  tags?: string[];
  likes?: number;
  category?: string;
};

export type RecommendationInput = {
  budget?: string;
  region?: string;
  timeline?: string;
  style?: string;
  city?: string;
  goals?: string[];
  constraints?: string[];
};

export type RecommendationRequest = RecommendationInput;

export type RecommendationResponse = {
  profileSummary: string;
  blindSpots: string[];
  recommendations: Recommendation[];
  socialAngle?: string[];
};

export const recommendationInputSchema = {
  parse(input: unknown): RecommendationInput {
    const value = (input ?? {}) as Record<string, unknown>;

    return {
      budget: typeof value.budget === "string" ? value.budget : "",
      region: typeof value.region === "string" ? value.region : "",
      timeline: typeof value.timeline === "string" ? value.timeline : "",
      style: typeof value.style === "string" ? value.style : "",
      city: typeof value.city === "string" ? value.city : "",
      goals: Array.isArray(value.goals)
        ? value.goals.filter((item): item is string => typeof item === "string")
        : [],
      constraints: Array.isArray(value.constraints)
        ? value.constraints.filter((item): item is string => typeof item === "string")
        : [],
    };
  },
};

export async function generateLifestyleExpansion(
  input: RecommendationInput
): Promise<RecommendationResponse> {
  const budget = input.budget?.trim() || "$$";
  const region = input.region?.trim() || "Open";
  const timeline = input.timeline?.trim() || "Open";
  const style = input.style?.trim() || "Balanced";
  const city = input.city?.trim() || "Your City";
  const goals = input.goals?.filter(Boolean) ?? [];
  const constraints = input.constraints?.filter(Boolean) ?? [];

  const goalLine = goals.length > 0 ? ` Goals: ${goals.join(", ")}.` : "";
  const constraintLine =
    constraints.length > 0 ? ` Constraints: ${constraints.join(", ")}.` : "";

  return {
    profileSummary: `Targeting ${region} with a ${style.toLowerCase()} preference, ${timeline.toLowerCase()} timeline, and ${budget.toLowerCase()} budget posture in ${city}.${goalLine}${constraintLine}`,
    blindSpots: [
      "Clarify whether neighborhood priority outweighs square footage.",
      "Define non-negotiables before comparing options.",
      "Confirm financing and move timeline before shortlisting.",
    ],
    recommendations: [
      {
        title: "Prime-fit shortlist",
        subtitle: `${region} · ${style}`,
        description:
          "Start with properties that best match your stated region and style preferences, then narrow by commute, layout, and upside.",
        price: budget,
        budget,
        city,
        reason: "This fits your tastes perfectly",
        nextStep: "Reserve a table",
        recommendedBy: "Bourgaeux",
        tags: [region, style, "Top Match"],
        likes: 12,
        category: "Top Match",
      },
      {
        title: "Value-upside shortlist",
        subtitle: "Best efficiency path",
        description:
          "Compare options slightly outside your first-choice zone to capture better value, inventory depth, or future upside.",
        price: budget,
        budget,
        city,
        reason: "Strong value relative to your priorities",
        nextStep: "Compare neighborhood options",
        recommendedBy: "Bourgaeux",
        tags: ["Value", timeline, "Upside"],
        likes: 8,
        category: "Value",
      },
      {
        title: "Fast-execution shortlist",
        subtitle: `${timeline} timeline`,
        description:
          "Prioritize listings with cleaner decision paths, stronger readiness, and lower friction if speed matters most.",
        price: budget,
        budget,
        city,
        reason: "Best match for your timeline",
        nextStep: "Shortlist and move quickly",
        recommendedBy: "Bourgaeux",
        tags: ["Fast Move", city, "Ready"],
        likes: 5,
        category: "Fast Track",
      },
    ],
    socialAngle: ["Great for group outings"],
  };
}

export async function getRecommendations(
  input: RecommendationRequest
): Promise<RecommendationResponse> {
  return generateLifestyleExpansion(input);
}
