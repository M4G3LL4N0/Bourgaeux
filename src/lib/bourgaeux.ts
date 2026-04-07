export type Recommendation = {
  title: string;
  category: string;
  reason: string;
  nextStep: string;
};

export type RecommendationInput = {
  city: string;
  vibe: string;
  foodPreferences: string;
  drinkPreferences: string;
  entertainmentPreferences: string;
  lifestylePreferences: string;
  budget: string;
  dislikes: string;
};

export type RecommendationResponse = {
  profileSummary: string;
  blindSpots: string[];
  recommendations: Recommendation[];
  socialAngle: string[];
  upgradePath: string[];
};

export const recommendationInputSchema = {
  parse(input: unknown): RecommendationInput {
    if (!input || typeof input !== "object") {
      throw new Error("Invalid request body.");
    }

    const data = input as Record<string, unknown>;

    return {
      city: readString(data.city, "city"),
      vibe: readString(data.vibe, "vibe"),
      foodPreferences: readString(data.foodPreferences, "foodPreferences"),
      drinkPreferences: readString(data.drinkPreferences, "drinkPreferences"),
      entertainmentPreferences: readString(
        data.entertainmentPreferences,
        "entertainmentPreferences"
      ),
      lifestylePreferences: readString(
        data.lifestylePreferences,
        "lifestylePreferences"
      ),
      budget: readString(data.budget, "budget"),
      dislikes: readString(data.dislikes, "dislikes"),
    };
  },
};

function readString(value: unknown, field: string): string {
  if (typeof value !== "string" || value.trim().length === 0) {
    throw new Error(`Invalid field: ${field}`);
  }

  return value.trim();
}

export async function generateLifestyleExpansion(
  input: RecommendationInput
): Promise<RecommendationResponse> {
  return {
    profileSummary: `You have a defined taste profile in ${input.city} with a ${input.vibe} vibe, but there are still strong opportunities to expand across food, drink, entertainment, and lifestyle.`,
    blindSpots: [
      "You may be repeating familiar choices instead of exploring adjacent high-fit experiences.",
      "Your current entertainment mix likely misses more intimate and curated formats.",
      "Your lifestyle choices could benefit from more intentional sequencing of places and experiences.",
    ],
    recommendations: [
      {
        title: "Curated tasting night",
        category: "Food",
        reason:
          "Guided tasting formats expand your palate faster than repeating the same restaurant patterns.",
        nextStep:
          "Try an omakase, prix-fixe, chef counter, or regional tasting dinner this week.",
      },
      {
        title: "Refined lounge exploration",
        category: "Drink",
        reason:
          "A more curated atmosphere may fit your profile better than generic high-volume nightlife.",
        nextStep:
          "Choose one design-forward cocktail, wine, or zero-proof lounge and stay long enough to understand the space.",
      },
      {
        title: "Smaller-format culture night",
        category: "Entertainment",
        reason:
          "Your profile suggests you may respond well to intimate environments with higher signal and less noise.",
        nextStep:
          "Try a jazz room, listening bar, art-house screening, live comedy room, or gallery evening.",
      },
      {
        title: "Intentional lifestyle circuit",
        category: "Lifestyle",
        reason:
          "Taste expands more effectively when experiences are sequenced into a full-day flow.",
        nextStep:
          "Build one day around coffee, movement, food, design, and evening entertainment in the same neighborhood.",
      },
    ],
    socialAngle: [
      "Your taste profile can evolve into a public identity based on what you actually do in real life.",
      "Recommendations can become a personalized social feed shaped by similar taste profiles.",
      "Blind spots can become recurring prompts that drive exploration and sharing.",
    ],
    upgradePath: [
      "Refine your preferences with more specific examples.",
      "Log completed experiences and ratings.",
      "Build a living taste profile that improves future recommendations.",
    ],
  };
}
