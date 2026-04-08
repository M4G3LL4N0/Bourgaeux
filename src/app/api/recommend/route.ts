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
    const result = await generateLifestyleExpansion(input);

    return NextResponse.json(result);
  } catch (error) {
    const message =
      error instanceof Error
        ? error.message
        : "Failed to generate recommendations.";

    return NextResponse.json({ error: message }, { status: 400 });
  }
}
