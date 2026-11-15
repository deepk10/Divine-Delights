import Link from "next/link";
import CustomProductCard from "@/components/custom-product-card";
import { collections } from "./products/data";

export default function Home() {
  return (
    <>
      <section
        className="mx-auto grid min-h-[533px] w-[min(1190px,calc(100%_-_72px))] grid-cols-[1.02fr_0.98fr] items-center gap-16 py-[55px] pb-[67px] max-[800px]:w-[min(100%_-_40px,620px)] max-[800px]:gap-9 max-[800px]:py-12 max-[800px]:pb-[52px] max-[600px]:w-[calc(100%_-_36px)] max-[600px]:grid-cols-1 max-[600px]:gap-[30px] max-[600px]:py-10 max-[600px]:pb-[43px]"
        aria-labelledby="hero-title"
      >
        <div className="pb-1.5 pl-2.5 max-[600px]:pl-0">
          <span className="inline-flex items-center gap-[9px] text-[10px] font-bold tracking-[0.16em] text-berry uppercase">
            <span className="size-[7px] rounded-full bg-[#89a558]" />A little
            sweetness goes a long way
          </span>
          <h1
            id="hero-title"
            className="mt-[23px] mb-[18px] font-serif text-[clamp(48px,5.4vw,72px)] leading-[0.99] font-medium tracking-[-0.07em] max-[600px]:mt-[19px] max-[600px]:text-[clamp(48px,13vw,67px)]"
          >
            Baked with love,
            <br />
            <span className="font-serif font-normal text-berry italic">
              made for you.
            </span>
          </h1>
          <p className="max-w-[405px] text-[15px] leading-[1.85] text-muted max-[600px]:max-w-[370px] max-[600px]:text-[13px]">
            Cakes, cupcakes, and flaky little day-brighteners, made fresh and
            finished with a whole lot of heart.
          </p>
          <div className="mt-[29px] flex flex-wrap items-center gap-[22px] max-[600px]:mt-[22px] max-[600px]:gap-[15px]">
            <Link
              className="inline-flex min-h-[49px] items-center justify-center gap-[17px] rounded-[3px] bg-berry px-[21px] text-xs font-bold text-white transition duration-200 hover:-translate-y-0.5 hover:bg-berry-dark motion-reduce:transition-none motion-reduce:hover:translate-y-0 max-[600px]:min-h-[45px] max-[600px]:px-4 max-[600px]:text-[11px]"
              href="#menu"
            >
              Find your favorite <span aria-hidden="true">↗</span>
            </Link>
            <Link
              className="text-xs font-bold text-berry transition-colors hover:text-berry-dark max-[600px]:text-[11px]"
              href="#custom-orders"
            >
              Planning something special?
            </Link>
          </div>
          <div className="mt-[39px] flex items-center gap-3 text-[11px] leading-[1.7] text-muted max-[600px]:mt-[22px]">
            <span
              className="grid size-[39px] shrink-0 place-items-center rounded-full border border-[#ead3d1] font-serif text-[23px] text-berry"
              aria-hidden="true"
            >
              ♡
            </span>
            <span>
              <strong className="text-xs text-cocoa">100% eggless</strong>
              <br />A little joy for everyone
            </span>
          </div>
        </div>

        <div
          className="relative min-h-[400px] max-[800px]:min-h-[350px] max-[600px]:mx-[3px] max-[600px]:min-h-[340px]"
          role="img"
          aria-label="A celebratory chocolate layer cake"
        >
          <div
            className="absolute inset-[0_20px_19px_25px] rounded-[47%_47%_4px_4px] bg-cover bg-center max-[800px]:inset-[0_12px_18px_18px] max-[600px]:inset-[0_13px_18px_17px]"
            style={{
              backgroundImage:
                'linear-gradient(180deg, rgb(41 20 12 / 0%) 50%, rgb(41 20 12 / 13%) 100%), url("https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=1200&q=90")',
              backgroundPosition: "center 51%",
            }}
          />
          <div className="absolute top-[33px] left-0 grid size-[92px] -rotate-[9deg] content-center justify-items-center rounded-full border border-[#e9c8b3] bg-cream text-center font-serif text-[11px] leading-[1.45] text-[#604439] max-[800px]:size-[78px] max-[800px]:text-[10px] max-[600px]:top-6">
            <span className="text-[19px] text-[#c39042]" aria-hidden="true">
              ✳
            </span>
            Baked fresh
            <br />
            every morning
          </div>
          <div className="absolute right-0 bottom-0 grid min-w-[225px] gap-[5px] border border-[#f0e2d7] bg-cream px-[21px] py-4 shadow-[0_10px_35px_rgb(60_33_23/8%)] max-[800px]:min-w-[195px] max-[800px]:px-[15px] max-[800px]:py-[13px]">
            <span className="text-[9px] font-bold tracking-[0.15em] text-berry">
              THE CROWD PLEASER
            </span>
            <strong className="font-serif text-base font-medium">
              Chocolate truffle cake
            </strong>
            <span className="text-[10px] text-muted">
              Rich, dreamy, gone too soon.
            </span>
          </div>
          <span
            className="absolute top-[14px] right-[14px] text-xl text-[#e6a754]"
            aria-hidden="true"
          >
            ✳
          </span>
          <span
            className="absolute right-1 bottom-[106px] text-sm text-[#bc5672]"
            aria-hidden="true"
          >
            ✳
          </span>
        </div>
      </section>

      <section
        className="flex min-h-[65px] items-center justify-center gap-[clamp(25px,6vw,90px)] border-y border-[#f0e6dc] bg-surface px-[26px] py-[14px] font-serif text-[13px] text-[#604d43] max-[600px]:min-h-[58px] max-[600px]:flex-wrap max-[600px]:gap-x-5 max-[600px]:gap-y-[10px] max-[600px]:px-4 max-[600px]:py-[13px] max-[600px]:text-[11px]"
        aria-label="Our bakery promises"
      >
        <span className="first-letter:text-berry">♥ &nbsp;100% eggless</span>
        <span className="first-letter:text-berry">
          ✳ &nbsp;Baked fresh daily
        </span>
        <span className="first-letter:text-berry max-[600px]:hidden">
          ♥ &nbsp;Made with the good stuff
        </span>
        <span className="first-letter:text-berry max-[600px]:hidden">
          ✳ &nbsp;A little love in every bite
        </span>
      </section>

      <section
        className="mx-auto w-[min(1190px,calc(100%_-_72px))] py-[99px] pb-[105px] max-[800px]:w-[min(100%_-_40px,620px)] max-[600px]:w-[calc(100%_-_36px)] max-[600px]:py-[67px] max-[600px]:pb-[69px]"
        id="menu"
        aria-labelledby="menu-title"
      >
        <div className="flex items-end justify-between gap-7 max-[600px]:block">
          <div>
            <span className="inline-flex items-center text-[10px] font-bold tracking-[0.16em] text-berry uppercase">
              GOOD THINGS, THIS WAY
            </span>
            <h2
              id="menu-title"
              className="mt-3 font-serif text-[clamp(35px,4vw,48px)] leading-[1.1] font-medium tracking-[-0.055em] max-[600px]:text-[39px]"
            >
              Meet your{" "}
              <span className="font-serif font-normal text-berry italic">
                new favorite.
              </span>
            </h2>
          </div>
          <p className="mb-[5px] max-w-[350px] text-[13px] leading-[1.8] text-muted max-[800px]:max-w-[255px] max-[600px]:mt-[13px] max-[600px]:text-xs">
            Pick a flavor, follow your heart. Everything is baked fresh and
            priced for sharing (or not).
          </p>
        </div>

        <nav
          className="mt-[34px] flex flex-wrap gap-[9px] max-[600px]:mt-[22px] max-[600px]:gap-[7px]"
          aria-label="Browse bakery treats"
        >
          <Link
            className="rounded-full border border-berry bg-berry px-[17px] py-[11px] text-[11px] font-semibold text-white transition-colors max-[600px]:px-3 max-[600px]:py-[9px] max-[600px]:text-[10px]"
            href="#cakes"
          >
            Celebration cakes
          </Link>
          <Link
            className="rounded-full border border-[#e9ded5] px-[17px] py-[11px] text-[11px] font-semibold text-[#73615a] transition-colors hover:border-berry hover:bg-berry hover:text-white max-[600px]:px-3 max-[600px]:py-[9px] max-[600px]:text-[10px]"
            href="#cupcakes"
          >
            Cupcakes
          </Link>
          <Link
            className="rounded-full border border-[#e9ded5] px-[17px] py-[11px] text-[11px] font-semibold text-[#73615a] transition-colors hover:border-berry hover:bg-berry hover:text-white max-[600px]:px-3 max-[600px]:py-[9px] max-[600px]:text-[10px]"
            href="#pastries"
          >
            Pastries
          </Link>
        </nav>

        {collections.map((collection) => (
          <section
            className="pt-[59px] [&+section]:mt-[62px] [&+section]:border-t [&+section]:border-line max-[600px]:pt-[43px] max-[600px]:[&+section]:mt-[43px]"
            id={collection.id}
            key={collection.id}
            aria-labelledby={`${collection.id}-title`}
          >
            <div className="mb-[21px] flex items-end justify-between gap-[25px] max-[600px]:mb-[15px] max-[600px]:block">
              <div>
                <span className="inline-flex items-center text-[10px] font-bold tracking-[0.16em] text-berry uppercase">
                  {collection.eyebrow}
                </span>
                <h3
                  id={`${collection.id}-title`}
                  className="mt-2 font-serif text-[26px] font-medium tracking-[-0.035em] max-[600px]:text-[23px]"
                >
                  {collection.title}
                </h3>
              </div>
              <p className="mb-[2px] max-w-[320px] text-xs leading-[1.8] text-muted max-[600px]:mt-[7px] max-[600px]:text-[11px]">
                {collection.description}
              </p>
            </div>
            <div className="grid grid-cols-3 gap-5 max-[800px]:gap-[13px] max-[600px]:grid-cols-2 max-[600px]:gap-[10px]">
              {collection.products.map((product) => (
                <Link
                  className="group block overflow-hidden border border-[#eee4db] bg-surface transition duration-200 hover:-translate-y-[3px] hover:shadow-[0_14px_40px_rgb(61_36_27/9%)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-berry motion-reduce:transition-none motion-reduce:hover:translate-y-0"
                  href={`/products/${product.id}`}
                  key={product.name}
                >
                  <article>
                    <div
                      className="relative h-[244px] bg-[#efe5dc] bg-cover bg-center max-[800px]:h-[195px] max-[600px]:h-[150px]"
                      role="img"
                      aria-label={`${product.name}, freshly baked`}
                      style={{ backgroundImage: `url("${product.image}")` }}
                    >
                      <span
                        aria-hidden="true"
                        className="pointer-events-none absolute inset-0 flex items-end justify-center bg-[#321b17]/0 pb-4 opacity-0 transition duration-200 group-hover:bg-[#321b17]/35 group-hover:opacity-100 group-focus-visible:bg-[#321b17]/35 group-focus-visible:opacity-100 max-[600px]:pb-3 motion-reduce:transition-none"
                      >
                        <span className="rounded-full bg-white px-5 py-2.5 text-xs font-bold text-[#70442f] shadow-lg">
                          Buy now <span aria-hidden="true">→</span>
                        </span>
                      </span>
                      <span
                        className="absolute top-[13px] left-[13px] inline-flex items-center gap-[7px] rounded-full border border-white/70 px-[11px] py-2 text-[10px] font-bold max-[600px]:top-2 max-[600px]:left-2 max-[600px]:gap-[5px] max-[600px]:px-2 max-[600px]:py-[6px] max-[600px]:text-[9px]"
                        style={{
                          backgroundColor: product.tint,
                          color: product.color,
                        }}
                      >
                        <span
                          className="size-[7px] rounded-full"
                          style={{ backgroundColor: product.color }}
                        />
                        {product.flavor}
                      </span>
                    </div>
                    <div className="px-[17px] pt-[17px] pb-[15px] max-[800px]:px-3 max-[800px]:py-[14px] max-[600px]:px-[10px] max-[600px]:pt-[11px] max-[600px]:pb-3">
                      <div className="flex items-center justify-between gap-[10px] max-[600px]:items-start">
                        <h4 className="m-0 font-serif text-[19px] font-medium max-[800px]:text-base max-[600px]:text-[15px] max-[600px]:leading-[1.2]">
                          {product.name}
                        </h4>
                        <span className="font-numbers tabular-nums text-sm font-bold text-berry max-[600px]:text-xs">
                          {product.price}
                        </span>
                      </div>
                      <div className="mt-[11px] flex items-center justify-between gap-[10px] max-[600px]:mt-[9px] max-[600px]:items-end">
                        <p className="m-0 text-[10px] text-muted max-[800px]:text-[9px] max-[600px]:leading-[1.4]">
                          {product.detail}
                        </p>
                        <span className="font-numbers tabular-nums shrink-0 border-l border-[#e8ded6] pl-[9px] text-[10px] text-muted max-[600px]:text-[9px] max-[600px]:leading-[1.4]">
                          {product.size}
                        </span>
                      </div>
                    </div>
                  </article>
                </Link>
              ))}
              <CustomProductCard category={collection.title} />
            </div>
          </section>
        ))}
      </section>

      <section
        className="relative mx-auto flex min-h-72 w-[min(1190px,calc(100%_-_72px))] items-center justify-between gap-[30px] overflow-hidden bg-[#742d3d] px-[clamp(35px,7vw,86px)] py-[50px] text-[#fff8f0] max-[800px]:w-[min(100%_-_40px,620px)] max-[600px]:min-h-[286px] max-[600px]:w-[calc(100%_-_36px)] max-[600px]:px-6 max-[600px]:py-[37px]"
        id="custom-orders"
        aria-labelledby="order-title"
      >
        <div
          className="pointer-events-none absolute right-[34%] bottom-[-53px] text-[240px] leading-none text-[#ffffff17]"
          aria-hidden="true"
        >
          ✿
        </div>
        <div className="relative z-10">
          <span className="inline-flex items-center text-[10px] font-bold tracking-[0.16em] text-gold uppercase">
            MADE FOR YOUR MOMENT
          </span>
          <h2
            id="order-title"
            className="mt-3 font-serif text-[clamp(37px,4vw,49px)] leading-[1.1] font-medium tracking-[-0.055em] max-[600px]:max-w-[270px] max-[600px]:text-[38px]"
          >
            Dream it. We’ll{" "}
            <span className="font-serif font-normal text-gold italic">
              ice it.
            </span>
          </h2>
          <p className="mt-3 mb-[21px] max-w-[460px] text-xs leading-[1.8] text-[#f4e3dc] max-[600px]:max-w-[360px] max-[600px]:pr-[10px] max-[600px]:text-[11px]">
            Birthdays, big news, or just-because Tuesdays. Tell us what you’re
            celebrating and we’ll make it a little sweeter.
          </p>
          <Link
            className="inline-flex min-h-[49px] items-center justify-center gap-[17px] rounded-[3px] bg-[#fff7ed] px-[21px] text-xs font-bold text-[#742d3d] transition duration-200 hover:-translate-y-0.5 hover:bg-[#f4d7c3] motion-reduce:transition-none motion-reduce:hover:translate-y-0 max-[600px]:min-h-[45px] max-[600px]:px-4 max-[600px]:text-[11px]"
            href="#cakes"
          >
            Explore celebration cakes <span aria-hidden="true">↗</span>
          </Link>
        </div>
        <div className="relative z-10 grid size-[117px] shrink-0 -rotate-[9deg] content-center justify-items-center rounded-full border border-white/60 text-center font-serif text-xs leading-[1.45] max-[600px]:absolute max-[600px]:right-[19px] max-[600px]:bottom-[22px] max-[600px]:size-[81px] max-[600px]:text-[9px]">
          <span
            className="text-[22px] text-gold max-[600px]:text-[17px]"
            aria-hidden="true"
          >
            ♡
          </span>
          Made with
          <br />a little extra love
        </div>
      </section>
    </>
  );
}
