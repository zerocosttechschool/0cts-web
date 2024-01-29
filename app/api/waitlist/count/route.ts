import { brevoAPI } from "@/app/lib/api";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const response = await brevoAPI.get("/contacts");
    return NextResponse.json(response.data.count, { status: 200 });
  } catch (err) {
    return NextResponse.json(
      { error: "Failed to fetch data" },
      { status: 500 }
    );
  }
}
