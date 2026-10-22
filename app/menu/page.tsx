import type { Metadata } from "next";
import MenuBrowser from "../components/MenuBrowser";

export const metadata: Metadata = {
  title: "Full Menu & Prices",
  description:
    "Explore the full menu and prices for burgers, zinger, shawarma, paratha rolls, and fries at Fast & Furious Cafe Sialkot.",
};

export default function MenuPage() {
  return <MenuBrowser />;
}
