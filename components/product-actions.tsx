"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import type { BakeryProduct } from "@/app/products/data";
import {
  CAKE_WEIGHTS,
  formatPrice,
  formatWeight,
  getUnitPrice,
} from "@/app/products/data";
import CartIcon from "@/components/cart-icon";
import { useCart } from "@/components/cart-provider";

export default function ProductActions({
  product,
}: {
  product: BakeryProduct;
}) {
  const router = useRouter();
  const { addProduct, error } = useCart();
  const [quantity, setQuantity] = useState(1);
  const [weightKg, setWeightKg] = useState<number | null>(product.weightKg);
  const [added, setAdded] = useState(false);
  const unitPrice = getUnitPrice(product, weightKg);

  function addToCart() {
    if (addProduct(product, quantity, weightKg)) {
      setAdded(true);
    }
  }

  function buyNow() {
    if (addProduct(product, quantity, weightKg)) {
      router.push("/cart");
    }
  }

  return (
    <div className="mt-8">
      {product.weightKg !== null && (
        <label className="grid max-w-64 gap-2 text-sm font-semibold text-cocoa">
          Cake weight
          <select
            className="font-numbers min-h-11 rounded-sm border border-line bg-surface px-3 text-sm text-cocoa outline-none focus:border-berry"
            onChange={(event) => {
              setWeightKg(Number(event.target.value));
              setAdded(false);
            }}
            value={weightKg ?? product.weightKg}
          >
            {CAKE_WEIGHTS.map((weight) => (
              <option key={weight} value={weight}>
                {formatWeight(weight)}
              </option>
            ))}
          </select>
        </label>
      )}

      <div className="mt-5 flex flex-wrap items-end gap-x-6 gap-y-4">
        <fieldset className="m-0 border-0 p-0">
          <legend className="mb-2 text-sm font-semibold text-cocoa">
            Quantity
          </legend>
          <div className="inline-flex h-11 items-center border border-line bg-surface">
            <button
              className="grid size-10 place-items-center text-lg text-berry disabled:text-muted/50"
              disabled={quantity <= 1}
              onClick={() => setQuantity((current) => Math.max(1, current - 1))}
              type="button"
              aria-label="Decrease quantity"
            >
              −
            </button>
            <output className="font-numbers tabular-nums w-8 text-center text-sm font-semibold">
              {quantity}
            </output>
            <button
              className="grid size-10 place-items-center text-lg text-berry disabled:text-muted/50"
              disabled={quantity >= 99}
              onClick={() =>
                setQuantity((current) => Math.min(99, current + 1))
              }
              type="button"
              aria-label="Increase quantity"
            >
              +
            </button>
          </div>
        </fieldset>

        <p className="text-sm text-muted" aria-live="polite">
          Total{" "}
          <strong className="font-numbers tabular-nums ml-1 text-2xl font-semibold text-berry">
            {unitPrice === null ? "—" : formatPrice(unitPrice * quantity)}
          </strong>
        </p>
      </div>

      <div className="mt-6 flex flex-wrap gap-3">
        <button
          className="inline-flex min-h-12 items-center justify-center gap-2 rounded-sm bg-berry px-6 text-sm font-bold text-white transition-colors hover:bg-berry-dark"
          onClick={addToCart}
          type="button"
        >
          <CartIcon className="size-4" />
          Add to cart
        </button>
        <button
          className="inline-flex min-h-12 items-center justify-center gap-2 rounded-sm border border-berry px-6 text-sm font-bold text-berry transition-colors hover:bg-berry hover:text-white"
          onClick={buyNow}
          type="button"
        >
          Buy now <span aria-hidden="true">↗</span>
        </button>
      </div>

      {(added || error) && (
        <output className="mt-3 block text-sm text-berry" aria-live="polite">
          {error ?? (
            <>
              <span className="font-numbers tabular-nums">{quantity}</span> ×{" "}
              {product.name} added to your cart.
            </>
          )}
          {error && (
            <>
              {" "}
              <Link className="font-bold underline" href="/cart">
                View cart
              </Link>
            </>
          )}
        </output>
      )}
    </div>
  );
}
