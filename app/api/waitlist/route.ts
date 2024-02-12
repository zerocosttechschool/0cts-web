import { brevoAPI } from "@/lib/api";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    let body = await req.json();
    body = {
      ...body,
      emailBlacklisted: false,
      smsBlacklisted: false,
      updateEnabled: false,
    };
    const response = await brevoAPI.post("/contacts", body);

    return NextResponse.json(response.data, { status: 200 });
  } catch (err: unknown) {
    return NextResponse.json({ error: "Failed to post data" }, { status: 500 });
  }
}
