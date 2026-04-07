import { NextRequest, NextResponse } from "next/server";
import {
  generateLifestyleExpansion,
  recommendationInputSchema,
} from "../../../lib/bourgaeux";

export async function POST(req: NextRequest) {
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
