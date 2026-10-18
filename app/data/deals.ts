export type DealCategory = "solo" | "sharing" | "late-night";

export interface Deal {
  id: string;
  name: string;
  category: DealCategory;
  price: number;
  items: string[];
}

export const dealsData: Deal[] = [
  {
    id: "furious-duo-feast",
    name: "Furious Duo Feast",
    category: "sharing",
    price: 890,
    items: [
      "2 x Furious Zinger Burgers",
      "1 x Large Fries",
      "2 x Soft Drinks",
    ],
  },
  {
    id: "solo-speed-combo",
    name: "Solo Speed Combo",
    category: "solo",
    price: 520,
    items: [
      "1 x Sialkot Special Shawarma or Burger",
      "Regular Fries",
      "Soft Drink",
    ],
  },
  {
    id: "midnight-roll-bundle",
    name: "Midnight Roll Bundle",
    category: "late-night",
    price: 650,
    items: [
      "2 x Chicken Tikka Paratha Rolls",
      "2 x Drinks",
    ],
  },
];

export const dealCategoryLabels: Record<DealCategory, string> = {
  solo: "Solo Combo",
  sharing: "Duo Feast",
  "late-night": "Late Night Bundle",
};

export const dealCategories: { id: "all" | DealCategory; label: string }[] = [
  { id: "all", label: "All Deals" },
  { id: "solo", label: dealCategoryLabels.solo },
  { id: "sharing", label: dealCategoryLabels.sharing },
  { id: "late-night", label: dealCategoryLabels["late-night"] },
];
