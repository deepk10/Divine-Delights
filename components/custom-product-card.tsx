"use client";

import { type ChangeEvent, useState } from "react";
import { useCart } from "@/components/cart-provider";

const MAX_FILE_SIZE = 8 * 1024 * 1024;
const MAX_DATA_URL_LENGTH = 850_000;

async function optimizeImage(file: File) {
  if (!["image/jpeg", "image/png", "image/webp"].includes(file.type)) {
    throw new Error("Choose a JPG, PNG, or WebP image.");
  }

  if (file.size > MAX_FILE_SIZE) {
    throw new Error("Choose an image smaller than 8 MB.");
  }

  const bitmap = await createImageBitmap(file);

  try {
    const scale = Math.min(1, 1200 / Math.max(bitmap.width, bitmap.height));
    const canvas = document.createElement("canvas");
    canvas.width = Math.max(1, Math.round(bitmap.width * scale));
    canvas.height = Math.max(1, Math.round(bitmap.height * scale));

    const context = canvas.getContext("2d");

    if (!context) {
      throw new Error("This browser could not prepare the image.");
    }

    context.drawImage(bitmap, 0, 0, canvas.width, canvas.height);

    for (const quality of [0.82, 0.68, 0.54, 0.4]) {
      const image = canvas.toDataURL("image/webp", quality);

      if (image.length <= MAX_DATA_URL_LENGTH) {
        return image;
      }
    }
  } finally {
    bitmap.close();
  }

  throw new Error("This image is too large to save in your browser cart.");
}

export default function CustomProductCard({ category }: { category: string }) {
  const { addCustomImage, ready } = useCart();
  const [image, setImage] = useState<string | null>(null);
  const [flavor, setFlavor] = useState("");
  const [message, setMessage] = useState<string | null>(null);
  const [busy, setBusy] = useState(false);

  async function handleFileChange(event: ChangeEvent<HTMLInputElement>) {
    const file = event.target.files?.[0];
    event.target.value = "";

    if (!file) {
      return;
    }

    setBusy(true);
    setMessage(null);

    try {
      setImage(await optimizeImage(file));
    } catch (error) {
      setImage(null);
      setMessage(
        error instanceof Error ? error.message : "The image could not be read.",
      );
    } finally {
      setBusy(false);
    }
  }

  function handleAddToCart() {
    if (!image) {
      return;
    }

    if (!flavor.trim()) {
      setMessage("Enter your preferred flavor before adding the design.");
      return;
    }

    if (addCustomImage(category, image, flavor)) {
      setImage(null);
      setFlavor("");
      setMessage("Your design is saved in your cart.");
    } else {
      setMessage(
        "The design could not be saved. Remove an item or choose a smaller image.",
      );
    }
  }

  return (
    <article className="overflow-hidden border border-dashed border-[#d9b8a8] bg-[#fffaf4]">
      <label
        className="relative flex h-[244px] cursor-pointer flex-col items-center justify-center gap-3 bg-[#f4e9df] bg-cover bg-center px-5 text-center transition-colors hover:bg-[#efe0d3] max-[800px]:h-[195px] max-[600px]:h-[150px]"
        style={image ? { backgroundImage: `url("${image}")` } : undefined}
      >
        {image ? (
          <span className="absolute inset-0 bg-[#321b17]/35" />
        ) : (
          <span className="grid size-14 place-items-center rounded-full border border-[#cba997] bg-white/70 text-3xl leading-none text-berry max-[600px]:size-11">
            +
          </span>
        )}
        <span className="relative rounded-full bg-white px-4 py-2 text-xs font-bold text-berry shadow-sm">
          {busy
            ? "Preparing photo..."
            : image
              ? "Change your photo"
              : "Choose a photo"}
        </span>
        <input
          accept="image/jpeg,image/png,image/webp"
          className="sr-only"
          disabled={busy}
          onChange={handleFileChange}
          type="file"
        />
      </label>
      <div className="px-[17px] pt-[17px] pb-[15px] max-[800px]:px-3 max-[800px]:py-[14px] max-[600px]:px-[10px] max-[600px]:pt-[11px] max-[600px]:pb-3">
        <div className="flex items-center justify-between gap-2">
          <h4 className="m-0 font-serif text-[19px] font-medium max-[800px]:text-base max-[600px]:text-[15px]">
            Custom design
          </h4>
          <span className="rounded-full bg-[#f3e7dd] px-2 py-1 text-[9px] font-bold text-[#70442f]">
            YOUR IDEA
          </span>
        </div>
        <p className="mt-[9px] mb-0 text-[10px] leading-relaxed text-muted max-[600px]:text-[9px]">
          Add a reference photo for your {category.toLowerCase()} order.
        </p>
        <label className="mt-3 block text-[10px] font-semibold text-cocoa">
          Preferred flavor
          <input
            className="mt-1 min-h-9 w-full rounded-sm border border-line bg-white px-3 text-xs font-normal text-cocoa outline-none transition focus:border-berry"
            maxLength={60}
            onChange={(event) => setFlavor(event.target.value)}
            placeholder="e.g. chocolate, pineapple"
            required
            type="text"
            value={flavor}
          />
        </label>
        {image && (
          <button
            className="mt-3 min-h-9 w-full rounded-full bg-berry px-4 text-xs font-semibold text-white transition-colors hover:bg-berry-dark disabled:cursor-not-allowed disabled:opacity-50"
            disabled={!ready || !flavor.trim()}
            onClick={handleAddToCart}
            type="button"
          >
            Add design to cart
          </button>
        )}
        {message && (
          <output className="mt-2 block text-xs text-berry" aria-live="polite">
            {message}
          </output>
        )}
      </div>
    </article>
  );
}
