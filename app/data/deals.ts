export type DealCategory = "exclusive-deals" | "promotional-deals";

export interface Deal {
  id: string;
  name: string;
  category: DealCategory;
  price: number;
  items: string[];
  image?: string;
}

export const dealCategories: { id: "all" | DealCategory; label: string }[] = [
  { id: "all", label: "All Deals" },
  { id: "exclusive-deals", label: "Exclusive Discounted Deals" },
  { id: "promotional-deals", label: "Promotional Deals" },
];

export const dealCategoryLabels: Record<DealCategory, string> = {
  "exclusive-deals": "Exclusive Discounted Deal",
  "promotional-deals": "Promotional Deal",
};

const image = (filename: string) => `/images/${encodeURIComponent(filename)}`;

export const dealsData: Deal[] = [
  {
    id: "deal-1",
    name: "Deal 1",
    category: "exclusive-deals",
    price: 700,
    items: [
      "Crispy zinger burger with tender chicken fillet",
      "Small fries",
      "345 ml soft drink",
    ],
    image: image("Crispy Chicken Burger and Seasoned Fries.png"),
  },
  {
    id: "deal-2",
    name: "Deal 2",
    category: "exclusive-deals",
    price: 600,
    items: [
      "Crispy golden chicken burger",
      "Hot seasoned fries",
      "345 ml soft drink",
    ],
    image: image("Crispy Chicken Burgers on Rustic Board.png"),
  },
  {
    id: "deal-3",
    name: "Deal 3",
    category: "exclusive-deals",
    price: 560,
    items: ["Large chicken shawarma", "Small fries", "345 ml soft drink"],
    image: image("Grilled Chicken Wrap with Crispy Fries.png"),
  },
  {
    id: "deal-4",
    name: "Deal 4",
    category: "exclusive-deals",
    price: 800,
    items: [
      "Two crispy Zinger burgers with juicy chicken",
      "345 ml soft drink",
    ],
    image: image("Double-Crispy Chicken Burger.png"),
  },
  {
    id: "deal-5",
    name: "Deal 5",
    category: "exclusive-deals",
    price: 650,
    items: ["2 Chicken burgers", "345 ml soft drink"],
    image: image("Crispy Chicken Burgers on Rustic Board.png"),
  },
  {
    id: "deal-6",
    name: "Deal 6",
    category: "exclusive-deals",
    price: 600,
    items: ["2 Large chicken shawarma", "345 ml soft drink"],
    image: image("Grilled Chicken Shawarma Wrap Stack.png"),
  },
  {
    id: "deal-7",
    name: "Deal 7",
    category: "exclusive-deals",
    price: 1400,
    items: ["2 Zinger burgers", "2 chicken burgers", "500 ml soft drink"],
    image: image("Double Crispy Chicken Feast.png"),
  },
  {
    id: "deal-8",
    name: "Deal 8",
    category: "exclusive-deals",
    price: 1500,
    items: ["4 Zinger burgers", "500 ml soft drink"],
    image: image("Crispy Chicken Feast with Coca-Cola.png"),
  },
  {
    id: "deal-9",
    name: "Deal 9",
    category: "exclusive-deals",
    price: 450,
    items: ["5 Hot wings", "345 ml soft drink"],
    image: image("Crispy Golden Chicken Wings.png"),
  },
  {
    id: "deal-10",
    name: "Deal 10",
    category: "exclusive-deals",
    price: 1400,
    items: ["2 Double zinger burgers", "500 ml soft drink"],
    image: image("Crispy Double Chicken Burger.png"),
  },
  {
    id: "deal-11",
    name: "Deal 11",
    category: "exclusive-deals",
    price: 1000,
    items: ["2 Tower burgers", "500 ml soft drink"],
    image: image("Towering Double Fried Chicken Burger.png"),
  },
  {
    id: "deal-12",
    name: "Deal 12",
    category: "exclusive-deals",
    price: 300,
    items: ["5 Nuggets", "345 ml soft drink"],
    image: image("Crispy Chicken Nuggets with Ketchup.png"),
  },
  {
    id: "deal-13",
    name: "Deal 13",
    category: "exclusive-deals",
    price: 650,
    items: ["Zinger shawarma", "Small fries", "345ml soft drink"],
    image: image("Grilled Chicken Wrap with Crispy Fries.png"),
  },
  {
    id: "deal-14",
    name: "Deal 14",
    category: "exclusive-deals",
    price: 530,
    items: ["Chicken shawarma", "Small fries", "345 ml soft drink"],
    image: image("Grilled Chicken Shawarma Wrap Stack.png"),
  },
  {
    id: "deal-15",
    name: "Deal 15",
    category: "exclusive-deals",
    price: 450,
    items: ["5 Pieces chicken tender", "345 ml soft drink"],
    image: image("Crispy Chicken Tenders with Dipping Sauce.png"),
  },
  {
    id: "deal-16",
    name: "Deal 16",
    category: "exclusive-deals",
    price: 800,
    items: ["10 Pieces hot wings", "345 ml soft drink"],
    image: image("Crispy Wings and Seasoned Fries.png"),
  },
  {
    id: "deal-17",
    name: "Deal 17",
    category: "exclusive-deals",
    price: 1230,
    items: ["5 Pieces chicken", "Small fries", "500 ml soft drink"],
    image: image("Spicy Crispy Fried Chicken Feast.png"),
  },
  {
    id: "deal-18",
    name: "Deal 18",
    category: "exclusive-deals",
    price: 1850,
    items: ["9 Chicken pieces", "1 litre soft drink"],
    image: image("Crispy Golden Fried Chicken Feast.png"),
  },
  {
    id: "promo-deal-1",
    name: "Promotional Deal 1",
    category: "promotional-deals",
    price: 600,
    items: ["3 Small shawarma"],
    image: image("Grilled Chicken Shawarma Wrap Stack.png"),
  },
  {
    id: "promo-deal-2",
    name: "Promotional Deal 2",
    category: "promotional-deals",
    price: 750,
    items: ["3 Large shawarma"],
    image: image("Golden Chicken Wrap Stack with Green Chutney.png"),
  },
  {
    id: "promo-deal-3",
    name: "Promotional Deal 3",
    category: "promotional-deals",
    price: 650,
    items: ["Chicken piece", "Chapli burger", "2 hot wings"],
    image: image("Spicy Fried Chicken Burger Feast.png"),
  },
  {
    id: "promo-deal-4",
    name: "Promotional Deal 4",
    category: "promotional-deals",
    price: 2200,
    items: ["6 Zinger burgers"],
    image: image("Double-Crispy Chicken Burger (1).png"),
  },
  {
    id: "promo-deal-5",
    name: "Promotional Deal 5",
    category: "promotional-deals",
    price: 900,
    items: ["3 Zinger shawarma"],
    image: image("Crispy Chicken Wrap Close-Up.png"),
  },
];
