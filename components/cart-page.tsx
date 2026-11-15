"use client";

import Link from "next/link";
import { CAKE_WEIGHTS, formatPrice, formatWeight } from "@/app/products/data";
import CartIcon from "@/components/cart-icon";
import { useCart } from "@/components/cart-provider";

export default function CartPage() {
  const {
    items,
    count,
    ready,
    error,
    removeItem,
    updateQuantity,
    updateWeight,
    clearCart,
  } = useCart();
  const subtotal = items.reduce(
    (total, item) =>
      item.unitPrice === null ? total : total + item.unitPrice * item.quantity,
    0,
  );

  return (
    <section className="mx-auto min-h-[50vh] w-[min(960px,calc(100%_-_72px))] py-14 max-[800px]:w-[min(100%_-_40px,620px)] max-[600px]:w-[calc(100%_-_36px)] max-[600px]:py-9">
      <p className="text-xs font-bold tracking-[0.16em] text-berry uppercase">
        YOUR BAKERY BAG
      </p>
      <h1 className="mt-3 font-serif text-4xl font-medium tracking-tight">
        Your cart
        {ready && (
          <span className="font-numbers tabular-nums ml-3 text-lg font-normal text-muted">
            ({count})
          </span>
        )}
      </h1>

      {error && (
        <div className="mt-6 flex flex-wrap items-center justify-between gap-4 border border-[#e8c4ce] bg-[#fae7ec] p-4 text-sm text-berry">
          <p>{error}</p>
          <button
            className="font-bold underline underline-offset-4"
            onClick={clearCart}
            type="button"
          >
            Clear saved cart
          </button>
        </div>
      )}

      {!ready ? (
        <p className="mt-8 animate-pulse text-muted">Loading your cart...</p>
      ) : items.length === 0 ? (
        <div className="mt-8 border border-line bg-surface px-6 py-10 text-center">
          <CartIcon className="mx-auto size-9 text-berry" />
          <h2 className="mt-4 font-serif text-2xl">
            Your bag is looking sweet.
          </h2>
          <p className="mt-2 text-sm text-muted">
            Pick a treat or upload your own design to get started.
          </p>
          <Link
            className="mt-6 inline-flex min-h-11 items-center justify-center rounded-sm bg-berry px-5 text-sm font-bold text-white transition-colors hover:bg-berry-dark"
            href="/#menu"
          >
            Browse the menu
          </Link>
        </div>
      ) : (
        <>
          <ul className="mt-8 divide-y divide-line border-y border-line">
            {items.map((item) => (
              <li
                className="flex items-center gap-5 py-5 max-[600px]:items-start max-[600px]:gap-3"
                key={item.id}
              >
                <div
                  className="size-24 shrink-0 rounded-sm bg-[#f3e7dd] bg-cover bg-center max-[600px]:size-[72px]"
                  role="img"
                  aria-label={
                    item.custom ? "Your uploaded custom design" : item.name
                  }
                  style={{ backgroundImage: `url("${item.image}")` }}
                />
                <div className="min-w-0 flex-1">
                  <h2 className="font-serif text-lg font-medium max-[600px]:text-base">
                    {item.name}
                  </h2>
                  {item.weightKg !== null && (
                    <label className="mt-2 inline-flex items-center gap-2 text-xs text-muted">
                      Weight
                      <select
                        className="font-numbers min-h-8 rounded-sm border border-line bg-surface px-2 text-xs text-cocoa"
                        onChange={(event) =>
                          updateWeight(item.id, Number(event.target.value))
                        }
                        value={item.weightKg}
                      >
                        {CAKE_WEIGHTS.map((weight) => (
                          <option key={weight} value={weight}>
                            {formatWeight(weight)}
                          </option>
                        ))}
                      </select>
                    </label>
                  )}
                  {item.unitPrice === null && (
                    <p className="mt-2 text-xs text-muted">{item.size}</p>
                  )}
                  {item.custom && item.customFlavor && (
                    <p className="mt-2 text-xs text-muted">
                      Flavor: {item.customFlavor}
                    </p>
                  )}
                  <div className="mt-3 flex items-center gap-3">
                    <div className="inline-flex h-8 items-center border border-line bg-surface">
                      <button
                        className="grid size-8 place-items-center text-berry disabled:text-muted/50"
                        disabled={item.quantity <= 1}
                        onClick={() =>
                          updateQuantity(item.id, item.quantity - 1)
                        }
                        type="button"
                        aria-label={`Decrease ${item.name} quantity`}
                      >
                        −
                      </button>
                      <output className="font-numbers tabular-nums w-7 text-center text-xs font-semibold">
                        {item.quantity}
                      </output>
                      <button
                        className="grid size-8 place-items-center text-berry disabled:text-muted/50"
                        disabled={item.quantity >= 99}
                        onClick={() =>
                          updateQuantity(item.id, item.quantity + 1)
                        }
                        type="button"
                        aria-label={`Increase ${item.name} quantity`}
                      >
                        +
                      </button>
                    </div>
                    {item.unitPrice !== null && (
                      <span className="font-numbers tabular-nums text-sm font-semibold text-berry">
                        {formatPrice(item.unitPrice * item.quantity)}
                      </span>
                    )}
                  </div>
                </div>
                <button
                  className="text-xs text-muted underline underline-offset-4 transition-colors hover:text-berry"
                  onClick={() => removeItem(item.id)}
                  type="button"
                  aria-label={`Remove ${item.name} from cart`}
                >
                  Remove
                </button>
              </li>
            ))}
          </ul>

          <div className="mt-6 flex flex-wrap items-center justify-between gap-4">
            <p className="text-sm text-muted">
              Custom designs are confirmed and priced when you place your order.
            </p>
            <div className="flex items-center gap-5">
              <p className="text-sm font-semibold text-cocoa">
                Subtotal{" "}
                <span className="font-numbers tabular-nums ml-1 text-xl text-berry">
                  {formatPrice(subtotal)}
                </span>
              </p>
              <Link
                className="inline-flex min-h-12 items-center justify-center rounded-sm bg-berry px-6 text-sm font-bold text-white transition-colors hover:bg-berry-dark"
                href="/checkout"
              >
                Proceed to checkout{" "}
                <span className="ml-2" aria-hidden="true">
                  ↗
                </span>
              </Link>
            </div>
          </div>
        </>
      )}
    </section>
  );
}
