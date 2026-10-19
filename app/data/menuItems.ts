export type MenuCategory =
  | "furious-burgers"
  | "furious-shawarma"
  | "furious-paratha-rolls"
  | "furious-wraps"
  | "furious-fried-items"
  | "furious-wings"
  | "furious-french-fries"
  | "sides"
  | "beverages";

export interface MenuItem {
  id: string;
  name: string;
  category: MenuCategory;
  price: number;
  originalPrice?: number;
  pricePrefix?: "from";
  description: string;
  image?: string;
}

const image = (filename: string) => `/images/${filename}`;

export const categoryLabels: Record<MenuCategory, string> = {
  "furious-burgers": "Furious Burgers",
  "furious-shawarma": "Furious Shawarma",
  "furious-paratha-rolls": "Furious Paratha Rolls",
  "furious-wraps": "Furious Wraps",
  "furious-fried-items": "Furious Fried Items",
  "furious-wings": "Furious Wings",
  "furious-french-fries": "Furious French Fries",
  sides: "Sides",
  beverages: "Beverages",
};

export const menuItems: MenuItem[] = [
  {
    id: "zinger-burger",
    name: "Zinger Burger",
    category: "furious-burgers",
    price: 360,
    originalPrice: 400,
    description: "Fresh bun with black sesame seeds juicy crispy petty and tender fluffy taste",
    image: image("zinger-burger.avif"),
  },
  {
    id: "chicken-burger",
    name: "Chicken Burger",
    category: "furious-burgers",
    price: 270,
    originalPrice: 300,
    description: "Fresh bun with white seeds Crispy chicken petty and butter Mayonise",
    image: image("chicken-burger.avif"),
  },
  {
    id: "chapli-burger",
    name: "Chapli Burger",
    category: "furious-burgers",
    price: 315,
    originalPrice: 350,
    pricePrefix: "from",
    description: "Fresh Toast Bun with juicy and tender chicken with chapli flavor along with delicious sauces. Add Ring onion and jalapeno slices.",
    image: image("chapli-burger.avif"),
  },
  {
    id: "double-zinger-burger",
    name: "Double Zinger Burger",
    category: "furious-burgers",
    price: 630,
    originalPrice: 700,
    pricePrefix: "from",
    description: "Fresh toast bun with double chicken Fillet o fish petty along with creamy white sauce add with cheese slice",
    image: image("double-zinger-burger.avif"),
  },
  {
    id: "tower-burger",
    name: "Tower Burger",
    category: "furious-burgers",
    price: 450,
    originalPrice: 500,
    pricePrefix: "from",
    description: "Fresh toast bun dressing on heel and club with sauces and ice berg with two chicken petty add with cheese slice",
    image: image("tower-burger.avif"),
  },
  {
    id: "spicy-grand-chicken-burger",
    name: "Spicy Grand Chicken Burger",
    category: "furious-burgers",
    price: 468,
    originalPrice: 520,
    pricePrefix: "from",
    description: "Messy and Cramelized fresh tossed bun with Spicy chicken breast fillet along with spicy sauces added their cheese slice Jalapeno black olive and touch there BBq sauce",
    image: image("spicy-grand-chicken-burger.avif"),
  },
  {
    id: "chicken-shawarma",
    name: "Chicken Shawarma",
    category: "furious-shawarma",
    price: 250,
    pricePrefix: "from",
    description: "Fresh toast pita bread along with sauces salad Cucumber ketchup add with tender chicken",
    image: image("chicken-shawarma.avif"),
  },
  {
    id: "platter-shawarma",
    name: "Platter Shawarma",
    category: "furious-shawarma",
    price: 500,
    description: "Two pita bread juicy and creamy chicken Flavor along with two diff shawarma sauces fresh salad black olive and Jalapeno with tomato Keptchup",
    image: image("platter-shawarma.avif"),
  },
  {
    id: "zinger-shawarma",
    name: "Zinger Shawarma",
    category: "furious-shawarma",
    price: 350,
    description: "Fresh toast pita bread along with tender zinger chicken with creamy white sauce also add bbq sauce with veggies",
    image: image("zinger-shawarma.avif"),
  },
  {
    id: "chicken-paratha-roll",
    name: "Chicken Paratha Roll",
    category: "furious-paratha-rolls",
    price: 380,
    description: "Frozen paratha juicy and creamy chicken along with special sauces and vegetables",
    image: image("chicken-paratha-roll.avif"),
  },
  {
    id: "chapli-paratha-roll",
    name: "Chapli Paratha Roll",
    category: "furious-paratha-rolls",
    price: 400,
    description: "Frozen paratha add some sauces and vegetables add some potatoes with tender and juicy chicken chapli slices",
    image: image("chapli-paratha-roll.avif"),
  },
  {
    id: "zinger-paratha-roll",
    name: "Zinger Paratha Roll",
    category: "furious-paratha-rolls",
    price: 450,
    description: "Frozen paratha add some sauces and vegetables including heavy loaded zinger slices with white creamy and bbq sauces",
    image: image("zinger-paratha-roll.avif"),
  },
  {
    id: "special-wrap",
    name: "Special Wrap",
    category: "furious-wraps",
    price: 600,
    description: "Dressing on Tortilla bread lape special spicy sauce and add some veggies with black olive add creamy and juicy tender chicken with cheese",
    image: image("special-wrap.avif"),
  },
  {
    id: "arabian-wrap",
    name: "Arabian Wrap",
    category: "furious-wraps",
    price: 550,
    description: "Creamalized Tortilla bread inside fresh vegitables small Bbq chicken slices recon onion added some black olive and slightly sauces",
    image: image("arabian-wrap.avif"),
  },
  {
    id: "chicken-piece",
    name: "Chicken Piece",
    category: "furious-fried-items",
    price: 200,
    pricePrefix: "from",
    description: "Hot fried chicken piece crispy and juicy tender mild chicken",
    image: image("chicken-piece.avif"),
  },
  {
    id: "tender-chicken-pieces",
    name: "Tender Chicken Pieces",
    category: "furious-fried-items",
    price: 400,
    pricePrefix: "from",
    description: "Soft and juicy mild tender chicken",
    image: image("tender-chicken-pieces.avif"),
  },
  {
    id: "nuggets",
    name: "Nuggets",
    category: "furious-fried-items",
    price: 250,
    pricePrefix: "from",
    description: "Mild crispy tender chicken with spicy taste",
    image: image("nuggets.avif"),
  },
  {
    id: "hot-wings",
    name: "Hot Wings",
    category: "furious-wings",
    price: 400,
    pricePrefix: "from",
    description: "Hot Crispy tender chicken",
    image: image("hot-wings.avif"),
  },
  {
    id: "fries",
    name: "Fries",
    category: "furious-french-fries",
    price: 300,
    pricePrefix: "from",
    description: "Salty potato fries",
    image: image("fries.avif"),
  },
  {
    id: "masala-fries",
    name: "Masala Fries",
    category: "furious-french-fries",
    price: 430,
    description: "Special masala fries",
    image: image("masala-fries.avif"),
  },
  {
    id: "loaded-fries",
    name: "Loaded Fries",
    category: "furious-french-fries",
    price: 600,
    description: "Crispy golden fries generously loaded with rich melted cheese tender mild chicken black olives fresh jalapenos and a savory layer of smoky BBQ sauce for an indulgent treat",
    image: image("loaded-fries.avif"),
  },
  {
    id: "garlic-mayo-fries",
    name: "Garlic Mayo Fries",
    category: "furious-french-fries",
    price: 450,
    description: "Fresh potato with creamy garlic sauce",
    image: image("garlic-mayo-fries.avif"),
  },
  {
    id: "mayo-sauce",
    name: "Mayo Sauce",
    category: "sides",
    price: 80,
    description: "White creamy and salty Mayonise",
    image: image("mayo-sauce.avif"),
  },
  {
    id: "lava-sauce",
    name: "Lava Sauce",
    category: "sides",
    price: 80,
    description: "Creamy Mayonise added with spicy red chili flack also added black pepper",
    image: image("lava-sauce.avif"),
  },
  {
    id: "peri-peri-sauce",
    name: "Peri Peri Sauce",
    category: "sides",
    price: 80,
    description: "Creamy sauce with black pepper and added some specific ingredients",
    image: image("peri-peri-sauce.avif"),
  },
  {
    id: "garlic-sauce",
    name: "Garlic Sauce",
    category: "sides",
    price: 80,
    description: "Creamy mayonnaise and added some garlic paste black pepper sugar and salty mustard",
    image: image("garlic-sauce.avif"),
  },
  {
    id: "pepsi-345ml",
    name: "Pepsi - 345 ml",
    category: "beverages",
    price: 100,
    description: "The Bold, Refreshing & STRONG cola! Click to add to your meal.",
    image: image("pepsi-345ml.avif"),
  },
  {
    id: "pepsi-500ml",
    name: "Pepsi - 500 ml",
    category: "beverages",
    price: 140,
    description: "The Bold, Refreshing & STRONG cola! Click to add to your meal.",
    image: image("pepsi-500ml.avif"),
  },
  {
    id: "pepsi-1-litre",
    name: "Pepsi - 1 Litre",
    category: "beverages",
    price: 200,
    description: "The Bold, Refreshing & STRONG cola! Click to add to your meal.",
    image: image("pepsi-liter.avif"),
  },
  {
    id: "pepsi-1-5-litre",
    name: "Pepsi - 1.5 Litre",
    category: "beverages",
    price: 240,
    description: "The Bold, Refreshing & STRONG cola! Click to add to your meal.",
    image: image("Pepsi-1.5liter.avif"),
  },
  {
    id: "aquafina-water-500ml",
    name: "Aquafina Water - 500 ml",
    category: "beverages",
    price: 80,
    description: "Pure water for a perfect taste! Click to add refreshing water to your meal.",
    image: image("aquafina-water500%20ml.avif"),
  },
];

export const popularItemIds = [
  "zinger-burger",
  "fries",
  "platter-shawarma",
  "nuggets",
  "loaded-fries",
  "hot-wings",
] as const;

export const popularItems = popularItemIds.map((id) =>
  menuItems.find((item) => item.id === id)!,
);
