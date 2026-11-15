"use client";

import Link from "next/link";
import { type FormEvent, useState } from "react";
import { formatPrice } from "@/app/products/data";
import { useCart } from "@/components/cart-provider";

export default function CheckoutPage() {
  const { items, ready, clearCart } = useCart();
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [submitted, setSubmitted] = useState(false);
  const subtotal = items.reduce(
    (total, item) =>
      item.unitPrice === null ? total : total + item.unitPrice * item.quantity,
    0,
  );

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (!items.length || busy) {
      return;
    }

    const formData = new FormData(event.currentTarget);
    const customerName = String(formData.get("name") ?? "").trim();
    const phone = String(formData.get("phone") ?? "").trim();
    const address = String(formData.get("address") ?? "").trim();
    const notes = String(formData.get("notes") ?? "").trim();
    const itemLines = items.map((item) => {
      const flavor = item.custom ? ` — Flavor: ${item.customFlavor}` : "";
      return `• ${item.quantity} × ${item.name} (${item.size})${flavor}`;
    });
    const message = [
      "New bakery order",
      `Name: ${customerName}`,
      `Phone: ${phone}`,
      `Address: ${address}`,
      notes ? `Notes: ${notes}` : "",
      "",
      "Items:",
      ...itemLines,
      `Subtotal: ${formatPrice(subtotal)}`,
      "Custom designs: price to be confirmed",
    ]
      .filter(Boolean)
      .join("\n");

    setBusy(true);
    setError(null);

    try {
      const response = await fetch("/api/telegram", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message }),
      });
      const result: unknown = await response.json();

      if (
        !response.ok ||
        typeof result !== "object" ||
        result === null ||
        !("success" in result) ||
        result.success !== true
      ) {
        const errorMessage =
          typeof result === "object" &&
          result !== null &&
          "error" in result &&
          typeof result.error === "string"
            ? result.error
            : "Your order could not be sent. Please try again.";
        throw new Error(errorMessage);
      }

      clearCart();
      setSubmitted(true);
    } catch (submitError) {
      setError(
        submitError instanceof Error
          ? submitError.message
          : "Your order could not be sent. Please try again.",
      );
    } finally {
      setBusy(false);
    }
  }

  return (
    <section className="mx-auto min-h-[50vh] w-[min(760px,calc(100%_-_72px))] py-14 max-[800px]:w-[min(100%_-_40px,620px)] max-[600px]:w-[calc(100%_-_36px)] max-[600px]:py-9">
      <p className="text-xs font-bold tracking-[0.16em] text-berry uppercase">
        ALMOST A SWEET SUCCESS
      </p>
      <h1 className="mt-3 font-serif text-4xl font-medium tracking-tight">
        Checkout
      </h1>

      {!ready ? (
        <p className="mt-8 animate-pulse text-muted">Loading your order...</p>
      ) : submitted ? (
        <div className="mt-8 border border-line bg-surface px-6 py-10 text-center">
          <h2 className="font-serif text-2xl">Thanks for your order!</h2>
          <p className="mt-3 text-sm leading-6 text-muted">
            Your order request was sent to the bakery. We’ll contact you to
            confirm availability and pricing.
          </p>
          <Link
            className="mt-6 inline-flex min-h-11 items-center justify-center rounded-sm bg-berry px-5 text-sm font-bold text-white transition-colors hover:bg-berry-dark"
            href="/"
          >
            Back to the bakery
          </Link>
        </div>
      ) : items.length === 0 ? (
        <div className="mt-8 border border-line bg-surface px-6 py-10 text-center">
          <h2 className="font-serif text-2xl">Your cart is empty.</h2>
          <p className="mt-2 text-sm text-muted">
            Add something delicious before checking out.
          </p>
          <Link
            className="mt-6 inline-flex min-h-11 items-center justify-center rounded-sm bg-berry px-5 text-sm font-bold text-white transition-colors hover:bg-berry-dark"
            href="/#menu"
          >
            Browse the menu
          </Link>
        </div>
      ) : (
        <form
          className="mt-8 grid gap-5 border border-line bg-surface p-6 max-[600px]:p-4"
          onSubmit={handleSubmit}
        >
          <div className="border-b border-line pb-4">
            <h2 className="font-serif text-xl">Your order</h2>
            <ul className="mt-3 grid gap-2 text-sm text-muted">
              {items.map((item) => (
                <li key={item.id}>
                  {item.quantity} × {item.name} ({item.size})
                  {item.custom && ` · Flavor: ${item.customFlavor}`}
                </li>
              ))}
            </ul>
            <p className="mt-3 text-sm font-semibold text-cocoa">
              Subtotal:{" "}
              <span className="font-numbers tabular-nums text-berry">
                {formatPrice(subtotal)}
              </span>
            </p>
            <p className="mt-2 text-xs text-muted">
              Custom designs are priced after the bakery reviews your request.
            </p>
          </div>

          <label className="grid gap-2 text-sm font-semibold text-cocoa">
            Your name
            <input
              autoComplete="name"
              className="min-h-11 rounded-sm border border-line bg-white px-3 font-normal outline-none transition focus:border-berry"
              maxLength={100}
              name="name"
              required
            />
          </label>
          <label className="grid gap-2 text-sm font-semibold text-cocoa">
            Phone number
            <input
              autoComplete="tel"
              className="font-numbers min-h-11 rounded-sm border border-line bg-white px-3 font-normal outline-none transition focus:border-berry"
              maxLength={10}
              min={7000000000}
              name="phone"
              required
              type="tel"
            />
          </label>
          <label className="grid gap-2 text-sm font-semibold text-cocoa">
            Delivery address
            <textarea
              autoComplete="street-address"
              className="min-h-24 rounded-sm border border-line bg-white px-3 py-2 font-normal outline-none transition focus:border-berry"
              maxLength={500}
              name="address"
              required
              rows={3}
            />
          </label>
          <label className="grid gap-2 text-sm font-semibold text-cocoa">
            Order notes{" "}
            <span className="font-normal text-muted">(optional)</span>
            <textarea
              className="min-h-20 rounded-sm border border-line bg-white px-3 py-2 font-normal outline-none transition focus:border-berry"
              maxLength={500}
              name="notes"
              rows={2}
            />
          </label>

          {error && (
            <p className="border border-[#e8c4ce] bg-[#fae7ec] p-3 text-sm text-berry">
              {error}
            </p>
          )}

          <button
            className="min-h-12 rounded-sm bg-berry px-6 text-sm font-bold text-white transition-colors hover:bg-berry-dark disabled:cursor-not-allowed disabled:opacity-60"
            disabled={busy}
            type="submit"
          >
            {busy ? "Sending order..." : "Send order to bakery"}
          </button>
        </form>
      )}
    </section>
  );
}
