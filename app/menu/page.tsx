import MenuBrowser from "../components/MenuBrowser";
import { createPageMetadata } from "../config/metadata";

export const metadata = createPageMetadata(
  "/menu",
  "Full Menu & Prices",
  "Explore burgers, zinger burgers, shawarma, paratha rolls and fries with menu prices at Fast & Furious Cafe on Circular Road, Sialkot.",
);

export default function MenuPage() {
  return <MenuBrowser />;
}