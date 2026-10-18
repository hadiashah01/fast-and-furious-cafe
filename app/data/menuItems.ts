export type MenuCategory = "burgers" | "rolls-shawarma" | "fries-sides";

export interface MenuItem {
  id: string;
  name: string;
  category: MenuCategory;
  price: number;
}

export const menuItems: MenuItem[] = [
  { id: "furious-zinger", name: "Furious Zinger Burger", category: "burgers", price: 420 },
  { id: "monster-zinger", name: "Monster Zinger Burger", category: "burgers", price: 550 },
  { id: "crispy-chicken", name: "Crispy Chicken Burger", category: "burgers", price: 350 },
  { id: "sialkot-special-shawarma", name: "Sialkot Special Shawarma", category: "rolls-shawarma", price: 280 },
  { id: "chicken-tikka-paratha-roll", name: "Chicken Tikka Paratha Roll", category: "rolls-shawarma", price: 320 },
  { id: "zinger-paratha-roll", name: "Zinger Paratha Roll", category: "rolls-shawarma", price: 380 },
  { id: "loaded-pizza-fries", name: "Loaded Pizza Fries", category: "fries-sides", price: 490 },
  { id: "masala-fries", name: "Masala Fries", category: "fries-sides", price: 220 },
  { id: "plain-fries", name: "Plain Fries", category: "fries-sides", price: 180 },
];

export const categoryLabels: Record<MenuCategory, string> = {
  burgers: "Burgers & Zingers",
  "rolls-shawarma": "Rolls & Shawarma",
  "fries-sides": "Fries & Sides",
};
