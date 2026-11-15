import { NextResponse } from "next/server";

export async function POST(request: Request) {
  let body: unknown;

  try {
    body = await request.json();
  } catch {
    return NextResponse.json(
      { error: "Invalid request body." },
      { status: 400 },
    );
  }

  if (
    typeof body !== "object" ||
    body === null ||
    !("message" in body) ||
    typeof body.message !== "string"
  ) {
    return NextResponse.json(
      { error: "A message is required." },
      { status: 400 },
    );
  }

  const message = body.message.trim();

  if (!message || message.length > 3900) {
    return NextResponse.json(
      { error: "Message must be between 1 and 3900 characters." },
      { status: 400 },
    );
  }

  const botToken = process.env.TELEGRAM_BOT_TOKEN;
  const chatId = process.env.TELEGRAM_CHAT_ID;

  if (!botToken || !chatId) {
    return NextResponse.json(
      { error: "Telegram is not configured on the server." },
      { status: 503 },
    );
  }

  let response: Response;

  try {
    response = await fetch(
      `https://api.telegram.org/bot${botToken}/sendMessage`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ chat_id: chatId, text: message }),
        signal: AbortSignal.timeout(8000),
      },
    );
  } catch (error) {
    console.error("Telegram request failed:", error);
    return NextResponse.json(
      { error: "Could not connect to Telegram. Please try again." },
      { status: 502 },
    );
  }

  const data: unknown = await response.json().catch(() => null);

  if (
    !response.ok ||
    typeof data !== "object" ||
    data === null ||
    !("ok" in data) ||
    data.ok !== true
  ) {
    return NextResponse.json(
      { error: "Telegram could not accept this order. Please try again." },
      { status: 502 },
    );
  }

  return NextResponse.json({ success: true });
}
