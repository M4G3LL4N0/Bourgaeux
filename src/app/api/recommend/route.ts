import { NextRequest, NextResponse } from "next/server";
import {
  generateLifestyleExpansion,
  recommendationInputSchema,
} from "../../../lib/bourgaeux";

if (process.env.NODE_ENV === 'production' && !process.env.API_KEY) {
  console.error('Missing API_KEY environment variable');
}

export async function POST(req: NextRequest) {
  if (!process.env.API_KEY) {
    return NextResponse.json(
      { 
        error: "Service temporarily unavailable",
        code: "SERVICE_UNAVAILABLE"
      },
      { status: 503 }
    );
  }

  try {
    const json = await req.json();
    const input = recommendationInputSchema.parse(json);
    
    if (process.env.NODE_ENV === 'production' && !process.env.API_KEY) {
      return NextResponse.json(
        { 
          error: "Service temporarily unavailable",
          code: "SERVICE_UNAVAILABLE"
        },
        { status: 503 }
      );
    }

    // In development, return mock data if no API key
    const result = process.env.API_KEY 
      ? await generateLifestyleExpansion(input)
      : {
          profileSummary: "Development mock data - set API_KEY for real recommendations",
          blindSpots: ["Sample blind spot 1", "Sample blind spot 2"],
          recommendations: [
            {
              title: "Sample Recommendation",
              category: "dining",
              reason: "This fits your tastes perfectly",
              nextStep: "Reserve a table",
              city: input.city || "Your City"
            }
          ],
          socialAngle: ["Great for group outings"],
          upgradePath: ["Try the tasting menu"]
        };

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
