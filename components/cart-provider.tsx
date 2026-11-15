"use client";

import {
  createContext,
  type ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";
import {
  type BakeryProduct,
  CAKE_WEIGHTS,
  formatPrice,
  formatWeight,
  getProduct,
  getUnitPrice,
} from "@/app/products/data";

const CART_STORAGE_KEY = "divine-delights-cart";

export type CartItem = {
  id: string;
  productId: string;
  name: string;
  unitPrice: number | null;
  weightKg: number | null;
  price: string;
  size: string;
  image: string;
  quantity: number;
  custom: boolean;
  customFlavor: string;
};

type CartContextValue = {
  items: CartItem[];
  count: number;
  ready: boolean;
  error: string | null;
  addProduct: (
    product: BakeryProduct,
    quantity: number,
    weightKg: number | null,
  ) => boolean;
  addCustomImage: (category: string, image: string, flavor: string) => boolean;
  removeItem: (id: string) => void;
  updateQuantity: (id: string, quantity: number) => void;
  updateWeight: (id: string, weightKg: number) => void;
  clearCart: () => void;
};

const CartContext = createContext<CartContextValue | null>(null);

function isCartItem(value: unknown): value is CartItem {
  if (typeof value !== "object" || value === null) {
    return false;
  }

  const item = value as Record<string, unknown>;

  return (
    typeof item.id === "string" &&
    typeof item.productId === "string" &&
    typeof item.name === "string" &&
    (typeof item.unitPrice === "number" || item.unitPrice === null) &&
    (typeof item.weightKg === "number" || item.weightKg === null) &&
    typeof item.price === "string" &&
    typeof item.size === "string" &&
    typeof item.image === "string" &&
    typeof item.quantity === "number" &&
    Number.isInteger(item.quantity) &&
    item.quantity > 0 &&
    item.quantity <= 99 &&
    typeof item.custom === "boolean" &&
    typeof item.customFlavor === "string" &&
    (item.weightKg === null ||
      CAKE_WEIGHTS.some((weight) => weight === item.weightKg))
  );
}

function normalizeCartItem(value: unknown): CartItem | null {
  if (isCartItem(value)) {
    return value;
  }

  if (typeof value !== "object" || value === null) {
    return null;
  }

  const item = value as Record<string, unknown>;

  if (
    typeof item.id !== "string" ||
    typeof item.productId !== "string" ||
    typeof item.name !== "string" ||
    typeof item.price !== "string" ||
    typeof item.size !== "string" ||
    typeof item.image !== "string" ||
    typeof item.quantity !== "number" ||
    !Number.isInteger(item.quantity) ||
    item.quantity < 1 ||
    typeof item.custom !== "boolean"
  ) {
    return null;
  }

  const product = item.custom ? undefined : getProduct(item.productId);

  if (!item.custom && !product) {
    return null;
  }

  const weightKg = product?.weightKg ?? null;

  return {
    id: item.id,
    productId: item.productId,
    name: item.name,
    unitPrice: product?.unitPrice ?? null,
    weightKg,
    price: product?.price ?? item.price,
    size: product?.size ?? item.size,
    image: item.image,
    quantity: Math.min(item.quantity, 99),
    custom: item.custom,
    customFlavor:
      typeof item.customFlavor === "string" ? item.customFlavor : "",
  };
}

export function CartProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([]);
  const [ready, setReady] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    try {
      const saved = window.localStorage.getItem(CART_STORAGE_KEY);

      if (saved) {
        const parsed: unknown = JSON.parse(saved);

        const normalized = Array.isArray(parsed)
          ? parsed.map(normalizeCartItem)
          : null;

        if (
          !normalized ||
          !normalized.every((item): item is CartItem => item !== null)
        ) {
          setError(
            "Your saved cart could not be read. Clear it to start a new cart.",
          );
        } else {
          setItems(normalized);
        }
      }
    } catch {
      setError("Your saved cart could not be read from this browser.");
    } finally {
      setReady(true);
    }
  }, []);

  function saveItems(nextItems: CartItem[]) {
    try {
      window.localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(nextItems));
      setItems(nextItems);
      setError(null);
      return true;
    } catch {
      setError(
        "Your cart could not be saved. Remove an item or choose a smaller image.",
      );
      return false;
    }
  }

  function addProduct(
    product: BakeryProduct,
    quantity: number,
    weightKg: number | null,
  ) {
    if (!ready) {
      setError("Your cart is still loading. Please try again in a moment.");
      return false;
    }

    const unitPrice = getUnitPrice(product, weightKg);

    if (
      !Number.isInteger(quantity) ||
      quantity < 1 ||
      quantity > 99 ||
      unitPrice === null
    ) {
      setError("Choose a valid quantity and cake weight.");
      return false;
    }

    const itemSize = weightKg === null ? product.size : formatWeight(weightKg);
    const existing = items.find(
      (item) =>
        item.productId === product.id &&
        item.weightKg === weightKg &&
        !item.custom,
    );

    const nextItems = existing
      ? items.map((item) =>
          item.id === existing.id
            ? {
                ...item,
                quantity: Math.min(99, item.quantity + quantity),
              }
            : item,
        )
      : [
          ...items,
          {
            id: `${product.id}-${weightKg ?? "each"}`,
            productId: product.id,
            name: product.name,
            unitPrice,
            weightKg,
            price: formatPrice(unitPrice),
            size: itemSize,
            image: product.image,
            quantity,
            custom: false,
            customFlavor: "",
          },
        ];

    return saveItems(nextItems);
  }

  function addCustomImage(category: string, image: string, flavor: string) {
    if (!ready) {
      setError("Your cart is still loading. Please try again in a moment.");
      return false;
    }

    const cleanFlavor = flavor.trim();

    if (!cleanFlavor || cleanFlavor.length > 60) {
      setError(
        "Enter a flavor up to 60 characters long for your custom order.",
      );
      return false;
    }

    const id = `custom-${Date.now()}-${Math.random().toString(36).slice(2, 8)}`;

    return saveItems([
      ...items,
      {
        id,
        productId: id,
        name: `Custom ${category} design`,
        unitPrice: null,
        weightKg: null,
        price: "Quote on request",
        size: "Custom order",
        image,
        quantity: 1,
        custom: true,
        customFlavor: cleanFlavor,
      },
    ]);
  }

  function removeItem(id: string) {
    if (!ready) {
      return;
    }

    saveItems(items.filter((item) => item.id !== id));
  }

  function updateQuantity(id: string, quantity: number) {
    if (
      !ready ||
      !Number.isInteger(quantity) ||
      quantity < 1 ||
      quantity > 99
    ) {
      return;
    }

    saveItems(
      items.map((item) => (item.id === id ? { ...item, quantity } : item)),
    );
  }

  function updateWeight(id: string, weightKg: number) {
    if (!ready || !CAKE_WEIGHTS.some((weight) => weight === weightKg)) {
      return;
    }

    const item = items.find((cartItem) => cartItem.id === id);
    const product = item ? getProduct(item.productId) : undefined;

    if (!item || !product || product.weightKg === null) {
      return;
    }

    const unitPrice = getUnitPrice(product, weightKg);

    if (unitPrice === null) {
      return;
    }

    const updatedItem: CartItem = {
      ...item,
      id: `${product.id}-${weightKg}`,
      weightKg,
      price: formatPrice(unitPrice),
      size: formatWeight(weightKg),
      unitPrice,
    };
    const duplicate = items.find(
      (cartItem) =>
        cartItem.id !== id &&
        cartItem.productId === product.id &&
        cartItem.weightKg === weightKg &&
        !cartItem.custom,
    );
    const nextItems = duplicate
      ? items
          .filter((cartItem) => cartItem.id !== id)
          .map((cartItem) =>
            cartItem.id === duplicate.id
              ? {
                  ...cartItem,
                  quantity: Math.min(99, cartItem.quantity + item.quantity),
                }
              : cartItem,
          )
      : items.map((cartItem) => (cartItem.id === id ? updatedItem : cartItem));

    saveItems(nextItems);
  }

  function clearCart() {
    if (ready) {
      saveItems([]);
    }
  }

  const value: CartContextValue = {
    items,
    count: items.reduce((total, item) => total + item.quantity, 0),
    ready,
    error,
    addProduct,
    addCustomImage,
    removeItem,
    updateQuantity,
    updateWeight,
    clearCart,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart() {
  const context = useContext(CartContext);

  if (!context) {
    throw new Error("useCart must be used inside CartProvider.");
  }

  return context;
}
