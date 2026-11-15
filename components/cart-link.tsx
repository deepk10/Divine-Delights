"use client";

import Link from "next/link";
import CartIcon from "@/components/cart-icon";
import { useCart } from "@/components/cart-provider";

export default function CartLink() {
  const { count, ready } = useCart();

  return (
    <Link
      className="relative inline-flex size-11 shrink-0 items-center justify-center rounded-full border border-[#e8c4ce] text-berry transition-colors hover:bg-[#fae7ec]"
      href="/cart"
      aria-label={`Shopping cart, ${ready ? count : 0} items`}
    >
      <CartIcon className="size-5" />
      <span className="font-numbers tabular-nums absolute -top-1 -right-1 grid min-h-[20px] min-w-[20px] place-items-center rounded-full bg-berry px-1 text-[10px] font-bold leading-none text-white">
        {ready ? count : 0}
      </span>
    </Link>
  );
}
