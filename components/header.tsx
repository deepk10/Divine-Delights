import Image from "next/image";
import Link from "next/link";
import CartLink from "@/components/cart-link";

export default function Header() {
  return (
    <header className="sticky top-0 z-20 bg-cream/95 backdrop-blur-md">
      <div className="flex min-h-[34px] items-center justify-center gap-3 bg-berry px-4 text-[10px] font-semibold tracking-[0.1em] text-[#fff7f1] uppercase max-[600px]:min-h-[30px] max-[600px]:gap-2 max-[600px]:text-[8px]">
        <span>Little treats, big reasons to smile</span>
        <span className="text-[13px] text-[#ffd889]" aria-hidden="true">
          ✳
        </span>
        <span>Everything is 100% eggless</span>
      </div>
      <div className="mx-auto flex h-[100px] w-[min(1190px,calc(100%_-_72px))] items-center justify-between max-[800px]:h-[73px] max-[800px]:w-[min(100%_-_40px,620px)] max-[600px]:h-[61px] max-[600px]:w-[calc(100%_-_36px)]">
        <Link
          className="flex h-[76px] w-[166px] items-center overflow-hidden max-[800px]:h-[67px] max-[800px]:w-[142px] max-[600px]:h-[58px] max-[600px]:w-[122px]"
          href="/"
          aria-label="Divine Delights Bakery home"
        >
          <Image
            src="/logo.png"
            alt="Divine Delights Bakery"
            width={500}
            height={500}
            priority
            className="h-auto w-full object-contain"
          />
        </Link>
        <nav
          className="flex items-center gap-[35px] text-[13px] font-semibold text-[#584640] max-[800px]:gap-[19px] max-[800px]:text-[11px] max-[600px]:hidden"
          aria-label="Main navigation"
        >
          <Link className="transition-colors hover:text-berry" href="/#menu">
            The menu
          </Link>
          <Link className="transition-colors hover:text-berry" href="/#cakes">
            Cakes
          </Link>
          <Link
            className="transition-colors hover:text-berry"
            href="/#cupcakes"
          >
            Cupcakes
          </Link>
          <Link
            className="transition-colors hover:text-berry"
            href="/#pastries"
          >
            Pastries
          </Link>
        </nav>
        <div className="flex items-center gap-3 max-[600px]:gap-2">
          <CartLink />
          <Link
            className="inline-flex min-h-[43px] items-center gap-[13px] rounded-full border border-[#e8c4ce] px-[18px] text-xs font-bold text-berry transition-colors hover:bg-berry hover:text-white max-[800px]:min-h-[38px] max-[800px]:gap-2 max-[800px]:px-3 max-[800px]:text-[10px] max-[600px]:hidden"
            href="/#custom-orders"
          >
            Order a cake <span aria-hidden="true">↗</span>
          </Link>
          <Link
            className="hidden min-h-[37px] items-center gap-2 rounded-full border border-[#e8c4ce] px-[14px] text-[11px] font-bold text-berry max-[600px]:inline-flex"
            href="/#menu"
          >
            Menu <span aria-hidden="true">↓</span>
          </Link>
        </div>
      </div>
    </header>
  );
}
