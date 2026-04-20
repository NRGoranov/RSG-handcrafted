"use client";

import { useState } from "react";
import { products, type Product } from "@/lib/products";
import ProductCard from "./ProductCard";
import ProductModal from "./ProductModal";
import SectionHeading from "./SectionHeading";

export default function CollectionSection() {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  return (
    <section id="collection" className="container-luxury py-20 sm:py-24">
      <SectionHeading
        eyebrow="Collection"
        title="Signature Forms"
        description="Three silhouettes, each shaped in hand-finished wood and leather, available through personal inquiry."
      />

      <div className="grid gap-6 md:grid-cols-3">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} onView={setSelectedProduct} />
        ))}
      </div>

      <ProductModal product={selectedProduct} onClose={() => setSelectedProduct(null)} />
    </section>
  );
}
