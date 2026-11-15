export type BakeryProduct = {
  id: string;
  name: string;
  detail: string;
  description: string;
  price: string;
  unitPrice: number;
  weightKg: number | null;
  size: string;
  flavor: string;
  color: string;
  tint: string;
  image: string;
};

export type BakeryCollection = {
  id: string;
  eyebrow: string;
  title: string;
  description: string;
  products: BakeryProduct[];
};

export const collections: BakeryCollection[] = [
  {
    id: "cakes",
    eyebrow: "For the main event",
    title: "Cakes to celebrate",
    description:
      "Hand-finished, made to order, and always worth a second slice.",
    products: [
      {
        id: "chocolate",
        name: "Chocolate Cake",
        detail: "Dark chocolate · silky ganache",
        description:
          "Moist cocoa sponge is layered with smooth chocolate ganache and finished with dark chocolate curls for a deeply chocolatey celebration cake.",
        price: "₹400",
        unitPrice: 400,
        weightKg: 0.5,
        size: "½ kg",
        flavor: "Chocolate",
        color: "#70442f",
        tint: "#f3e7dd",
        image:
          "https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=1200&q=85",
      },
      {
        id: "chocolate-truffle",
        name: "Chocolate Truffle",
        detail: "Dark chocolate · silky ganache",
        description:
          "Soft chocolate sponge meets a thick, glossy truffle ganache in every layer. Finished with chocolate shavings for an indulgent, bittersweet finish.",
        price: "₹400",
        unitPrice: 400,
        weightKg: 0.5,
        size: "½ kg",
        flavor: "Truffle",
        color: "#70442f",
        tint: "#f3e7dd",
        image:
          "https://images.unsplash.com/photo-1571115177098-24ec42ed204d?auto=format&fit=crop&w=1200&q=85",
      },
      {
        id: "pineapple-cake",
        name: "Pineapple Cake",
        detail: "Golden pineapple · whipped cream",
        description:
          "Light vanilla sponge, sweet pineapple, and fresh whipped cream come together in a bright, sunny cake made for sharing.",
        price: "₹350",
        unitPrice: 350,
        weightKg: 0.5,
        size: "½ kg",
        flavor: "Pineapple",
        color: "#ae7914",
        tint: "#fbf1d5",
        image:
          "https://images.unsplash.com/photo-1550258987-190a2d41a8ba?auto=format&fit=crop&w=1200&q=85",
      },
      {
        id: "red-velvet-cake",
        name: "Red Velvet Cake",
        detail: "Velvety cocoa · cream cheese",
        description:
          "Tender red cocoa sponge is layered with tangy cream-cheese frosting and finished in a striking red velvet crumb.",
        price: "₹500",
        unitPrice: 500,
        weightKg: 0.5,
        size: "½ kg",
        flavor: "Red velvet",
        color: "#a83b48",
        tint: "#f9e6e7",
        image:
          "https://images.unsplash.com/photo-1586788680434-30d324b2d46f?auto=format&fit=crop&w=1200&q=85",
      },
      {
        id: "butter-scotch-cake",
        name: "Butterscotch Cake",
        detail: "Caramel cream · crunchy praline",
        description:
          "Caramel-kissed sponge is layered with buttery butterscotch cream and finished with crunchy praline for a sweet, toasty bite.",
        price: "₹350",
        unitPrice: 350,
        weightKg: 0.5,
        size: "½ kg",
        flavor: "Butterscotch",
        color: "#a8652c",
        tint: "#faeadb",
        image:
          "https://images.unsplash.com/photo-1542826438-bd32f43d626f?auto=format&fit=crop&w=1200&q=85",
      },
      {
        id: "strawberry-cake",
        name: "Strawberry Cake",
        detail: "Fresh strawberries · cream cheese",
        description:
          "Fluffy vanilla sponge is filled with fresh strawberry compote and soft cream, then topped with berries for a bright, fruity finish.",
        price: "₹450",
        unitPrice: 450,
        weightKg: 0.5,
        size: "½ kg",
        flavor: "Strawberry",
        color: "#c45770",
        tint: "#fae7ec",
        image:
          "https://images.unsplash.com/photo-1565958011703-44f9829ba187?auto=format&fit=crop&w=1200&q=85",
      },
      {
        id: "black-forest-cake",
        name: "Black Forest Cake",
        detail: "Chocolate sponge · cherries · whipped cream",
        description:
          "Chocolate sponge, airy whipped cream, and juicy cherries come together in this Black Forest classic, finished with a shower of chocolate curls.",
        price: "₹500",
        unitPrice: 500,
        weightKg: 0.5,
        size: "½ kg",
        flavor: "Black forest",
        color: "#59352b",
        tint: "#f1e4dc",
        image:
          "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?auto=format&fit=crop&w=1200&q=85",
      },
      {
        id: "fresh-fruit-cake",
        name: "Fresh Fruit Cake",
        detail: "Vanilla sponge · seasonal fruit · fresh cream",
        description:
          "Light vanilla sponge and softly whipped cream are topped with a colorful mix of seasonal fresh fruit for a refreshing celebration cake.",
        price: "₹500",
        unitPrice: 500,
        weightKg: 0.5,
        size: "½ kg",
        flavor: "Fresh fruit",
        color: "#54805a",
        tint: "#e7f2e4",
        image:
          "https://images.unsplash.com/photo-1535141192574-5d4897c12636?auto=format&fit=crop&w=1200&q=85",
      },
      {
        id: "belgian-fruit-cake",
        name: "Belgian Fruit Cake",
        detail: "Belgian chocolate · fruit · silky ganache",
        description:
          "Rich Belgian chocolate sponge is layered with smooth ganache and finished with a generous topping of fresh fruit for a lovely mix of rich and bright flavors.",
        price: "₹650",
        unitPrice: 650,
        weightKg: 0.5,
        size: "½ kg",
        flavor: "Belgian fruit",
        color: "#70442f",
        tint: "#f3e7dd",
        image:
          "https://images.unsplash.com/photo-1535141192574-5d4897c12636?auto=format&fit=crop&w=1200&q=85",
      },
    ],
  },
  {
    id: "cupcakes",
    eyebrow: "Little treats, big joy",
    title: "Cupcakes with character",
    description: "A pretty little pick-me-up, baked fresh and ready to share.",
    products: [
      {
        id: "chocolate-cupcake",
        name: "Chocolate Cupcake",
        detail: "Chocolate sponge · fudge swirl",
        description:
          "A tender chocolate sponge topped with a generous swirl of smooth fudge frosting. One little cupcake, a whole lot of chocolate joy.",
        price: "₹80",
        unitPrice: 80,
        weightKg: null,
        size: "each",
        flavor: "Chocolate",
        color: "#70442f",
        tint: "#f3e7dd",
        image:
          "https://images.unsplash.com/photo-1603532648955-039310d9ed75?auto=format&fit=crop&w=1200&q=85",
      },
      {
        id: "strawberry-cloud-cupcake",
        name: "Strawberry Cloud",
        detail: "Vanilla sponge · berry buttercream",
        description:
          "Fluffy vanilla sponge with a cloud of strawberry buttercream. Sweet, soft, and finished with a little berry-colored charm.",
        price: "₹85",
        unitPrice: 85,
        weightKg: null,
        size: "each",
        flavor: "Strawberry",
        color: "#c45770",
        tint: "#fae7ec",
        image:
          "https://images.unsplash.com/photo-1563729784474-d77dbb933a9e?auto=format&fit=crop&w=1200&q=85",
      },
      {
        id: "vanilla-cupcake",
        name: "Vanilla Daydream",
        detail: "Madagascar vanilla · soft frosting",
        description:
          "A soft, fragrant vanilla cupcake crowned with light frosting. Simple, lovely, and just the thing for an everyday celebration.",
        price: "₹70",
        unitPrice: 70,
        weightKg: null,
        size: "each",
        flavor: "Vanilla",
        color: "#9b7938",
        tint: "#f7f0df",
        image:
          "https://images.unsplash.com/photo-1486427944299-d1955d23e34d?auto=format&fit=crop&w=1200&q=85",
      },
    ],
  },
  {
    id: "pastries",
    eyebrow: "A little something",
    title: "Pastries & sweet things",
    description:
      "Flaky, creamy, and just the right size for your coffee break.",
    products: [
      {
        id: "black-forest-pastry",
        name: "Black Forest",
        detail: "Chocolate · cherry · clouds of cream",
        description:
          "Layers of chocolate sponge, airy cream, and bright cherry make this little Black Forest pastry a timeless afternoon treat.",
        price: "₹90",
        unitPrice: 90,
        weightKg: null,
        size: "each",
        flavor: "Black forest",
        color: "#70442f",
        tint: "#f3e7dd",
        image:
          "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?auto=format&fit=crop&w=1200&q=85",
      },
      {
        id: "pineapple-pastry",
        name: "Pineapple Pastry",
        detail: "Fresh pineapple · vanilla cream",
        description:
          "A delicate slice of fluffy vanilla sponge layered with fresh pineapple and soft vanilla cream. A sunny little pick-me-up.",
        price: "₹100",
        unitPrice: 100,
        weightKg: null,
        size: "each",
        flavor: "Pineapple",
        color: "#ae7914",
        tint: "#fbf1d5",
        image:
          "https://images.unsplash.com/photo-1488477181946-6428a0291777?auto=format&fit=crop&w=1200&q=85",
      },
      {
        id: "butterscotch-pastry",
        name: "Butterscotch Crunch",
        detail: "Caramel cream · golden praline",
        description:
          "Smooth butterscotch cream, soft sponge, and a little golden praline crunch make this pastry an irresistible caramel treat.",
        price: "₹100",
        unitPrice: 100,
        weightKg: null,
        size: "each",
        flavor: "Butterscotch",
        color: "#a8652c",
        tint: "#faeadb",
        image:
          "https://images.unsplash.com/photo-1551024506-0bccd828d307?auto=format&fit=crop&w=1200&q=85",
      },
    ],
  },
];

export const CAKE_WEIGHTS = [0.5, 1, 1.5, 2] as const;

export const products = collections.flatMap(
  (collection) => collection.products,
);

export function formatPrice(amount: number) {
  return `₹${amount.toLocaleString("en-IN")}`;
}

export function formatWeight(weightKg: number) {
  if (weightKg === 0.5) {
    return "½ kg";
  }

  if (weightKg === 1.5) {
    return "1½ kg";
  }

  return `${weightKg} kg`;
}

export function getUnitPrice(product: BakeryProduct, weightKg: number | null) {
  if (product.weightKg === null) {
    return product.unitPrice;
  }

  if (
    weightKg === null ||
    !CAKE_WEIGHTS.some((weight) => weight === weightKg)
  ) {
    return null;
  }

  return Math.round(product.unitPrice * (weightKg / product.weightKg));
}

export function getProduct(id: string) {
  return products.find((product) => product.id === id);
}
