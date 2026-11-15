import type { Metadata } from "next";
import localFont from "next/font/local";
import Link from "next/link";
import "./globals.css";
import { CartProvider } from "@/components/cart-provider";
import Header from "@/components/header";

const Rubic = localFont({
  src: "./fonts/Rubic.ttf",
  weight: "100 700",
  variable: "--font-rubic",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Divine Delights Bakery | Baked with Love, Made for You",
  description:
    "Discover eggless celebration cakes, cupcakes, and fresh pastries at Divine Delights Bakery. Baked with love and made for you.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${Rubic.variable} scroll-smooth scroll-pt-[134px] antialiased max-[600px]:scroll-pt-[91px]`}
    >
      <body className="min-h-screen bg-cream font-sans text-cocoa"   data-new-gr-c-s-check-loaded="14.1347.0" data-gr-ext-installed="">
        <CartProvider>
          <Header />
          <main>{children}</main>
          <footer className="border-t border-line bg-surface">
            <div className="mx-auto grid w-[min(1190px,calc(100%_-_72px))] grid-cols-[1.3fr_1fr_1fr] gap-8 py-9 max-[800px]:w-[min(100%_-_40px,620px)] max-[800px]:grid-cols-2 max-[600px]:w-[calc(100%_-_36px)] max-[600px]:gap-6 max-[600px]:py-7">
              <div>
                <Link
                  className="font-serif text-[22px] text-berry transition-colors hover:text-berry-dark"
                  href="/"
                  aria-label="Divine Delights Bakery home"
                >
                  Divine Delights
                </Link>
                <p className="mt-2 text-sm text-muted">
                  Baked with love, made for you.
                </p>
              </div>
              <nav
                className="grid content-start gap-3 text-sm text-muted"
                aria-label="Footer navigation"
              >
                <Link
                  className="transition-colors hover:text-berry"
                  href="/#menu"
                >
                  Our menu
                </Link>
                <Link
                  className="transition-colors hover:text-berry"
                  href="/#cakes"
                >
                  Celebration cakes
                </Link>
                <Link
                  className="transition-colors hover:text-berry"
                  href="/#custom-orders"
                >
                  Custom orders
                </Link>
              </nav>
              <div className="text-sm text-muted max-[600px]:col-span-2">
                <p className="font-bold text-cocoa">
                  A little sweetness for everyone.
                </p>
                <p className="mt-2">Freshly baked · 100% eggless</p>
              </div>
            </div>
            <div className="border-t border-line px-5 py-4 text-center text-[11px] text-muted">
              © Divine Delights Bakery · Baked with love, made for you.
            </div>
          </footer>
        </CartProvider>
      </body>
    </html>
  );
}
