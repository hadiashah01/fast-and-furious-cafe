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
    description: "Black sesame bun with a crispy chicken patty.",
    image: image("zinger-burger.avif"),
  },
  {
    id: "chicken-burger",
    name: "Chicken Burger",
    category: "furious-burgers",
    price: 270,
    originalPrice: 300,
    description: "White sesame bun, crispy chicken, butter, and mayonnaise.",
    image: image("chicken-burger.avif"),
  },
  {
    id: "chapli-burger",
    name: "Chapli Burger",
    category: "furious-burgers",
    price: 315,
    originalPrice: 350,
    pricePrefix: "from",
    description: "Chapli-seasoned chicken, onion rings, jalapeño, and sauces.",
    image: image("chapli-burger.avif"),
  },
  {
    id: "double-zinger-burger",
    name: "Double Zinger Burger",
    category: "furious-burgers",
    price: 630,
    originalPrice: 700,
    pricePrefix: "from",
    description: "Two chicken fillets with creamy white sauce and cheese.",
    image: image("double-zinger-burger.avif"),
  },
  {
    id: "tower-burger",
    name: "Tower Burger",
    category: "furious-burgers",
    price: 450,
    originalPrice: 500,
    pricePrefix: "from",
    description: "Two chicken patties, iceberg lettuce, cheese, and sauces.",
    image: image("tower-burger.avif"),
  },
  {
    id: "spicy-grand-chicken-burger",
    name: "Spicy Grand Chicken Burger",
    category: "furious-burgers",
    price: 468,
    originalPrice: 520,
    pricePrefix: "from",
    description: "Spicy chicken breast, cheese, jalapeño, olives, and barbecue sauce.",
    image: image("spicy-grand-chicken-burger.avif"),
  },
  {
    id: "chicken-shawarma",
    name: "Chicken Shawarma",
    category: "furious-shawarma",
    price: 250,
    pricePrefix: "from",
    description: "Chicken, sauces, salad, cucumber, and ketchup in toasted pita.",
    image: image("chicken-shawarma.avif"),
  },
  {
    id: "platter-shawarma",
    name: "Platter Shawarma",
    category: "furious-shawarma",
    price: 500,
    description: "Two pita breads with chicken, sauces, salad, olives, jalapeño, and tomato.",
    image: image("platter-shawarma.avif"),
  },
  {
    id: "zinger-shawarma",
    name: "Zinger Shawarma",
    category: "furious-shawarma",
    price: 350,
    description: "Zinger chicken, vegetables, white and barbecue sauces in toasted pita.",
    image: image("zinger-shawarma.avif"),
  },
  {
    id: "chicken-paratha-roll",
    name: "Chicken Paratha Roll",
    category: "furious-paratha-rolls",
    price: 380,
    description: "Paratha with chicken, sauces, and vegetables.",
    image: image("chicken-paratha-roll.avif"),
  },
  {
    id: "chapli-paratha-roll",
    name: "Chapli Paratha Roll",
    category: "furious-paratha-rolls",
    price: 400,
    description: "Chicken chapli slices, potatoes, vegetables, and sauces in paratha.",
    image: image("chapli-paratha-roll.avif"),
  },
  {
    id: "zinger-paratha-roll",
    name: "Zinger Paratha Roll",
    category: "furious-paratha-rolls",
    price: 450,
    description: "Zinger chicken, vegetables, white and barbecue sauces in paratha.",
    image: image("zinger-paratha-roll.avif"),
  },
  {
    id: "special-wrap",
    name: "Special Wrap",
    category: "furious-wraps",
    price: 600,
    description: "Chicken, cheese, olives, vegetables, and spicy sauce in tortilla.",
    image: image("special-wrap.avif"),
  },
  {
    id: "arabian-wrap",
    name: "Arabian Wrap",
    category: "furious-wraps",
    price: 550,
    description: "Barbecue chicken, red onion, olives, vegetables, and sauce in tortilla.",
    image: image("arabian-wrap.avif"),
  },
  {
    id: "chicken-piece",
    name: "Chicken Piece",
    category: "furious-fried-items",
    price: 200,
    pricePrefix: "from",
    description: "Hot-fried chicken with a crispy exterior.",
    image: image("chicken-piece.avif"),
  },
  {
    id: "tender-chicken-pieces",
    name: "Tender Chicken Pieces",
    category: "furious-fried-items",
    price: 400,
    pricePrefix: "from",
    description: "Tender chicken pieces.",
    image: image("tender-chicken-pieces.avif"),
  },
  {
    id: "nuggets",
    name: "Nuggets",
    category: "furious-fried-items",
    price: 250,
    pricePrefix: "from",
    description: "Crispy chicken nuggets with a mild spice.",
    image: image("nuggets.avif"),
  },
  {
    id: "hot-wings",
    name: "Hot Wings",
    category: "furious-wings",
    price: 400,
    pricePrefix: "from",
    description: "Crispy hot wings.",
    image: image("hot-wings.avif"),
  },
  {
    id: "fries",
    name: "Fries",
    category: "furious-french-fries",
    price: 300,
    pricePrefix: "from",
    description: "Salted potato fries.",
    image: image("fries.avif"),
  },
  {
    id: "masala-fries",
    name: "Masala Fries",
    category: "furious-french-fries",
    price: 430,
    description: "Fries seasoned with masala.",
    image: image("masala-fries.avif"),
  },
  {
    id: "loaded-fries",
    name: "Loaded Fries",
    category: "furious-french-fries",
    price: 600,
    description: "Fries with cheese, chicken, olives, jalapeños, and barbecue sauce.",
    image: image("loaded-fries.avif"),
  },
  {
    id: "garlic-mayo-fries",
    name: "Garlic Mayo Fries",
    category: "furious-french-fries",
    price: 450,
    description: "Potato fries with garlic sauce.",
    image: image("garlic-mayo-fries.avif"),
  },
  {
    id: "mayo-sauce",
    name: "Mayo Sauce",
    category: "sides",
    price: 80,
    description: "Creamy, lightly salted mayonnaise sauce.",
    image: image("mayo-sauce.avif"),
  },
  {
    id: "lava-sauce",
    name: "Lava Sauce",
    category: "sides",
    price: 80,
    description: "Mayonnaise with red chili flakes and black pepper.",
    image: image("lava-sauce.avif"),
  },
  {
    id: "peri-peri-sauce",
    name: "Peri Peri Sauce",
    category: "sides",
    price: 80,
    description: "Creamy peri-peri sauce.",
    image: image("peri-peri-sauce.avif"),
  },
  {
    id: "garlic-sauce",
    name: "Garlic Sauce",
    category: "sides",
    price: 80,
    description: "Garlic mayonnaise with black pepper, sugar, and mustard.",
    image: image("garlic-sauce.avif"),
  },
  {
    id: "pepsi-345ml",
    name: "Pepsi - 345 ml",
    category: "beverages",
    price: 100,
    description: "345 ml Pepsi.",
    image: image("pepsi-345ml.avif"),
  },
  {
    id: "pepsi-500ml",
    name: "Pepsi - 500 ml",
    category: "beverages",
    price: 140,
    description: "500 ml Pepsi.",
    image: image("pepsi-500ml.avif"),
  },
  {
    id: "pepsi-1-litre",
    name: "Pepsi - 1 Litre",
    category: "beverages",
    price: 200,
    description: "1 litre Pepsi.",
    image: image("pepsi-liter.avif"),
  },
  {
    id: "pepsi-1-5-litre",
    name: "Pepsi - 1.5 Litre",
    category: "beverages",
    price: 240,
    description: "1.5 litre Pepsi.",
    image: image("Pepsi-1.5liter.avif"),
  },
  {
    id: "aquafina-water-500ml",
    name: "Aquafina Water - 500 ml",
    category: "beverages",
    price: 80,
    description: "500 ml Aquafina water.",
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
