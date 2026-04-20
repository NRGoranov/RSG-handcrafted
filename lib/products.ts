export type Product = {
  id: string;
  name: "Petite" | "Atelier" | "Grand";
  description: string;
  dimensions: string;
  images: string[];
  customizable: true;
};

export const products: Product[] = [
  {
    id: "petite",
    name: "Petite",
    description:
      "Defined by compact elegance and refined presence, crafted for everyday distinction.",
    dimensions: "Approx. 22cm x 14cm x 8cm (placeholder)",
    images: ["/images/petite-1.jpg", "/images/petite-2.jpg", "/images/petite-3.jpg"],
    customizable: true
  },
  {
    id: "atelier",
    name: "Atelier",
    description:
      "Balanced in proportion and rich in texture, made for those who favor understated statement pieces.",
    dimensions: "Approx. 28cm x 18cm x 10cm (placeholder)",
    images: ["/images/atelier-1.jpg", "/images/atelier-2.jpg", "/images/atelier-3.jpg"],
    customizable: true
  },
  {
    id: "grand",
    name: "Grand",
    description:
      "Sculpted with bold character and spacious intent, elevating travel and occasion with artisan depth.",
    dimensions: "Approx. 33cm x 24cm x 12cm (placeholder)",
    images: ["/images/grand-1.jpg", "/images/grand-2.jpg", "/images/grand-3.jpg"],
    customizable: true
  }
];
