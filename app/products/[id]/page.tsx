import Link from "next/link";
import { notFound } from "next/navigation";
import ProductActions from "@/components/product-actions";
import { getProduct } from "../data";

export default async function ProductPage({
  params,
}: PageProps<"/products/[id]">) {
  const { id } = await params;
  const product = getProduct(id);

  if (!product) {
    notFound();
  }

  return (
    <div className="mx-auto w-[min(1190px,calc(100%_-_72px))] py-12 pb-20 max-[800px]:w-[min(100%_-_40px,620px)] max-[600px]:w-[calc(100%_-_36px)] max-[600px]:py-8">
      <Link
        className="inline-flex items-center gap-2 text-sm font-semibold text-muted transition-colors hover:text-berry"
        href="/#menu"
      >
        <span aria-hidden="true">←</span> Back to the bakery
      </Link>

      <section className="mt-8 grid grid-cols-2 items-center gap-14 max-[800px]:gap-8 max-[600px]:grid-cols-1">
        <div
          className="relative min-h-[540px] overflow-hidden rounded-t-[45%] bg-cover bg-center max-[800px]:min-h-[400px] max-[600px]:min-h-[340px]"
          role="img"
          aria-label={product.name}
          style={{ backgroundImage: `url("${product.image}")` }}
        >
          <span
            className="absolute top-5 left-5 inline-flex items-center gap-2 rounded-full px-4 py-2 text-xs font-bold"
            style={{ backgroundColor: product.tint, color: product.color }}
          >
            <span
              className="size-2 rounded-full"
              style={{ backgroundColor: product.color }}
            />
            {product.flavor}
          </span>
        </div>

        <div className="py-8 max-[600px]:py-0">
          <p className="text-xs font-bold tracking-[0.16em] text-berry uppercase">
            Fresh from our eggless bakery
          </p>
          <h1 className="mt-4 font-serif text-[clamp(38px,5vw,62px)] leading-tight font-medium tracking-[-0.05em]">
            {product.name}
          </h1>
          <p className="mt-5 text-base leading-7 text-muted">
            {product.description}
          </p>
          <div className="mt-7 flex items-center gap-4">
            <span className="font-numbers tabular-nums text-3xl font-semibold text-berry">
              {product.price}
            </span>
            <span className="font-numbers border-l border-line pl-4 text-sm text-muted">
              {product.size}
            </span>
          </div>
          <p className="mt-5 text-sm text-muted">
            Baked fresh to order · 100% eggless
          </p>
          <ProductActions product={product} />
        </div>
      </section>
    </div>
  );
}
