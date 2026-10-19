import MenuBrowser from "../components/MenuBrowser";
import { createPageMetadata } from "../config/metadata";

export const metadata = createPageMetadata(
  "/menu",
  "Menu",
  "Browse burgers, zingers, shawarma, paratha rolls, fries, and listed prices at Fast & Furious Cafe in Sialkot.",
);

export default function MenuPage() {
  return <MenuBrowser />;
}
