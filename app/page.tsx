import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import CollectionSection from "@/components/CollectionSection";
import CraftsmanshipSection from "@/components/CraftsmanshipSection";
import CustomSection from "@/components/CustomSection";
import InquirySection from "@/components/InquirySection";
import Footer from "@/components/Footer";

export default function HomePage() {
  return (
    <>
      <a href="#main-content" className="focus-ring sr-only focus:not-sr-only">
        Skip to content
      </a>
      <Navbar />
      <main id="main-content">
        <Hero />
        <CollectionSection />
        <CraftsmanshipSection />
        <CustomSection />
        <InquirySection />
      </main>
      <Footer />
    </>
  );
}
