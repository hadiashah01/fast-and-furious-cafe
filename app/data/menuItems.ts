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
    description: "Fresh bun with black sesame seeds and a tender, crispy chicken patty.",
    image: image("zinger-burger.avif"),
  },
  {
    id: "chicken-burger",
    name: "Chicken Burger",
    category: "furious-burgers",
    price: 270,
    originalPrice: 300,
    description: "Fresh bun with white sesame seeds, crispy chicken patty, butter, and mayonnaise.",
    image: image("chicken-burger.avif"),
  },
  {
    id: "chapli-burger",
    name: "Chapli Burger",
    category: "furious-burgers",
    price: 315,
    originalPrice: 350,
    pricePrefix: "from",
    description: "Fresh toasted bun with tender chicken, chapli seasoning, sauces, onion rings, and jalapeño slices.",
    image: image("chapli-burger.avif"),
  },
  {
    id: "double-zinger-burger",
    name: "Double Zinger Burger",
    category: "furious-burgers",
    price: 630,
    originalPrice: 700,
    pricePrefix: "from",
    description: "Fresh toasted bun with two chicken fillets, creamy white sauce, and a slice of cheese.",
    image: image("double-zinger-burger.avif"),
  },
  {
    id: "tower-burger",
    name: "Tower Burger",
    category: "furious-burgers",
    price: 450,
    originalPrice: 500,
    pricePrefix: "from",
    description: "Fresh toasted bun with sauces, iceberg lettuce, two chicken patties, and a slice of cheese.",
    image: image("tower-burger.avif"),
  },
  {
    id: "spicy-grand-chicken-burger",
    name: "Spicy Grand Chicken Burger",
    category: "furious-burgers",
    price: 468,
    originalPrice: 520,
    pricePrefix: "from",
    description: "Toasted bun with spicy chicken breast, spicy sauce, cheese, jalapeño, black olives, and barbecue sauce.",
    image: image("spicy-grand-chicken-burger.avif"),
  },
  {
    id: "chicken-shawarma",
    name: "Chicken Shawarma",
    category: "furious-shawarma",
    price: 250,
    pricePrefix: "from",
    description: "Toasted pita bread with tender chicken, sauces, salad, cucumber, and ketchup.",
    image: image("chicken-shawarma.avif"),
  },
  {
    id: "platter-shawarma",
    name: "Platter Shawarma",
    category: "furious-shawarma",
    price: 500,
    description: "Two pita breads with chicken, two shawarma sauces, fresh salad, black olives, jalapeño, tomato, and ketchup.",
    image: image("platter-shawarma.avif"),
  },
  {
    id: "zinger-shawarma",
    name: "Zinger Shawarma",
    category: "furious-shawarma",
    price: 350,
    description: "Toasted pita bread with zinger chicken, creamy white sauce, barbecue sauce, and vegetables.",
    image: image("zinger-shawarma.avif"),
  },
  {
    id: "chicken-paratha-roll",
    name: "Chicken Paratha Roll",
    category: "furious-paratha-rolls",
    price: 380,
    description: "Paratha with chicken, special sauces, and vegetables.",
    image: image("chicken-paratha-roll.avif"),
  },
  {
    id: "chapli-paratha-roll",
    name: "Chapli Paratha Roll",
    category: "furious-paratha-rolls",
    price: 400,
    description: "Paratha with sauces, vegetables, potatoes, and chicken chapli slices.",
    image: image("chapli-paratha-roll.avif"),
  },
  {
    id: "zinger-paratha-roll",
    name: "Zinger Paratha Roll",
    category: "furious-paratha-rolls",
    price: 450,
    description: "Paratha with zinger chicken, vegetables, creamy white sauce, and barbecue sauce.",
    image: image("zinger-paratha-roll.avif"),
  },
  {
    id: "special-wrap",
    name: "Special Wrap",
    category: "furious-wraps",
    price: 600,
    description: "Tortilla wrap with spicy sauce, vegetables, black olives, chicken, and cheese.",
    image: image("special-wrap.avif"),
  },
  {
    id: "arabian-wrap",
    name: "Arabian Wrap",
    category: "furious-wraps",
    price: 550,
    description: "Tortilla wrap with vegetables, barbecue chicken, red onion, black olives, and sauce.",
    image: image("arabian-wrap.avif"),
  },
  {
    id: "chicken-piece",
    name: "Chicken Piece",
    category: "furious-fried-items",
    price: 200,
    pricePrefix: "from",
    description: "Hot-fried chicken with a crispy exterior and tender texture.",
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
    description: "Crispy fries topped with melted cheese, chicken, black olives, jalapeños, and barbecue sauce.",
    image: image("loaded-fries.avif"),
  },
  {
    id: "garlic-mayo-fries",
    name: "Garlic Mayo Fries",
    category: "furious-french-fries",
    price: 450,
    description: "Potato fries with creamy garlic sauce.",
    image: image("garlic-mayo-fries.avif"),
  },
  {
    id: "mayo-sauce",
    name: "Mayo Sauce",
    category: "sides",
    price: 80,
    description: "Creamy mayonnaise sauce with a lightly salty taste.",
    image: image("mayo-sauce.avif"),
  },
  {
    id: "lava-sauce",
    name: "Lava Sauce",
    category: "sides",
    price: 80,
    description: "Creamy mayonnaise with red chili flakes and black pepper.",
    image: image("lava-sauce.avif"),
  },
  {
    id: "peri-peri-sauce",
    name: "Peri Peri Sauce",
    category: "sides",
    price: 80,
    description: "Creamy peri peri sauce.",
    image: image("peri-peri-sauce.avif"),
  },
  {
    id: "garlic-sauce",
    name: "Garlic Sauce",
    category: "sides",
    price: 80,
    description: "Creamy mayonnaise with garlic, black pepper, sugar, and mustard.",
    image: image("garlic-sauce.avif"),
  },
  {
    id: "pepsi-345ml",
    name: "Pepsi - 345 ml",
    category: "beverages",
    price: 100,
    description: "Pepsi, 345 ml.",
    image: image("pepsi-345ml.avif"),
  },
  {
    id: "pepsi-500ml",
    name: "Pepsi - 500 ml",
    category: "beverages",
    price: 140,
    description: "Pepsi, 500 ml.",
    image: image("pepsi-500ml.avif"),
  },
  {
    id: "pepsi-1-litre",
    name: "Pepsi - 1 Litre",
    category: "beverages",
    price: 200,
    description: "Pepsi, 1 litre.",
    image: image("pepsi-liter.avif"),
  },
  {
    id: "pepsi-1-5-litre",
    name: "Pepsi - 1.5 Litre",
    category: "beverages",
    price: 240,
    description: "Pepsi, 1.5 litres.",
    image: image("Pepsi-1.5liter.avif"),
  },
  {
    id: "aquafina-water-500ml",
    name: "Aquafina Water - 500 ml",
    category: "beverages",
    price: 80,
    description: "Aquafina bottled water, 500 ml.",
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
