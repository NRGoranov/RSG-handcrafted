import { NextResponse } from "next/server";
import { sendInquiryMail, type InquiryPayload } from "@/lib/mail";

const inquiryTypes = [
  "Availability",
  "Custom Request",
  "Delivery Question",
  "Personalization",
  "General"
] as const;

export async function POST(req: Request) {
  try {
    const body = (await req.json()) as Partial<InquiryPayload>;
    const validated = validatePayload(body);
    await sendInquiryMail(validated);
    return NextResponse.json({ ok: true, message: "Inquiry sent successfully." });
  } catch (error) {
    const message = error instanceof Error ? error.message : "Unexpected error";
    const status = message.toLowerCase().includes("missing") ? 500 : 400;
    return NextResponse.json({ ok: false, message }, { status });
  }
}

function validatePayload(payload: Partial<InquiryPayload>): InquiryPayload {
  const requiredFields: Array<keyof InquiryPayload> = [
    "name",
    "email",
    "contactMethod",
    "inquiryType",
    "message"
  ];

  for (const field of requiredFields) {
    const value = payload[field];
    if (typeof value !== "string" || !value.trim()) {
      throw new Error(`Invalid or missing field: ${field}`);
    }
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(payload.email!.trim())) {
    throw new Error("Invalid email format");
  }

  if (!inquiryTypes.includes(payload.inquiryType!.trim() as (typeof inquiryTypes)[number])) {
    throw new Error("Invalid inquiry type");
  }

  return {
    name: payload.name!.trim(),
    email: payload.email!.trim(),
    contactMethod: payload.contactMethod!.trim(),
    inquiryType: payload.inquiryType!.trim(),
    message: payload.message!.trim(),
    location: payload.location?.trim() || undefined,
    preferredSize: payload.preferredSize?.trim() || undefined
  };
}
