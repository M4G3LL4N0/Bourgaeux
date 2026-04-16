import { NextRequest, NextResponse } from "next/server";
import {
  generateLifestyleExpansion,
  recommendationInputSchema,
} from "../../../lib/bourgaeux";

export async function POST(req: NextRequest) {
  const isProduction = process.env.NODE_ENV === 'production';
  const hasApiKey = !!process.env.API_KEY;

  if (isProduction && !process.env.API_KEY) {
    console.error('Missing API_KEY environment variable - production mode requires API key');
    return NextResponse.json(
      { 
        error: "API key required for production",
        code: "API_KEY_REQUIRED" 
      }, 
      { status: 401 }
    );
  }
  try {
    const json = await req.json();
    const input = recommendationInputSchema.parse(json);
    
    // Return mock data in development when no API key
    if (!hasApiKey && !isProduction) {
      return NextResponse.json({
        profileSummary: "Development mock data - set API_KEY for real recommendations",
        blindSpots: [
          "You might be missing out on new openings in your area",
          "Consider expanding your usual cuisine preferences"
        ],
        recommendations: [
          {
            title: "The Hidden Vine",
            category: "dining",
            reason: "Cozy wine bar with small plates that matches your preferences",
            nextStep: "Reserve for Friday evening",
            city: input.city || "Your City",
            likes: 24,
            recommendedBy: "Bourgaeux Team",
            tags: ["wine", "date spot", "small plates"]
          },
          {
            title: "Sunset Rooftop Lounge",
            category: "drinks",
            reason: "Perfect for enjoying summer evenings with friends",
            nextStep: "Check happy hour specials",
            city: input.city || "Your City",
            likes: 42,
            recommendedBy: "Local Influencers",
            tags: ["rooftop", "cocktails", "views"]
          }
        ],
        socialAngle: [
          "Popular with groups of 4-6 people",
          "Great for special occasions"
        ],
        upgradePath: [
          "Ask about the seasonal tasting menu",
          "Reserve the chef's counter for a unique experience"
        ]
      });
    }

    if (isProduction && !hasApiKey) {
      return NextResponse.json(
        { 
          error: "Service temporarily unavailable",
          code: "SERVICE_UNAVAILABLE"
        },
        { status: 503 }
      );
    }

    const result = await generateLifestyleExpansion(input);

    return NextResponse.json(result);
  } catch (error) {
    console.error('Recommendation API error:', error);
    const message = error instanceof Error ? error.message : "Invalid request";
    return NextResponse.json(
      { 
        error: message,
        code: error instanceof Error ? error.constructor.name : "API_ERROR" 
      }, 
      { status: 400 }
    );
  }
}
