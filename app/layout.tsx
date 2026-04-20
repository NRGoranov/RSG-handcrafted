import type { Metadata } from "next";
import { Manrope, Playfair_Display } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap"
});

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  display: "swap"
});

const siteUrl = "https://rsg-handcrafted.vercel.app";

export const metadata: Metadata = {
  title: "RSG Handcrafted | Wooden & Leather Handbags",
  description:
    "RSG Handcrafted creates luxury wooden and leather handbags, shaped by hand for timeless presence. Every piece is available by inquiry and can be customized.",
  keywords: [
    "handcrafted luxury bags",
    "wooden leather handbags",
    "custom artisan bags",
    "bespoke handbag"
  ],
  openGraph: {
    title: "RSG Handcrafted | Wooden & Leather Handbags",
    description:
      "Handcrafted elegance in wood and leather. Explore limited pieces and request custom artisan creations.",
    url: siteUrl,
    siteName: "RSG Handcrafted",
    images: [{ url: "/images/logo.png", width: 1200, height: 630, alt: "RSG Handcrafted logo" }],
    locale: "en_US",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "RSG Handcrafted | Wooden & Leather Handbags",
    description:
      "Handcrafted luxury bags in wood and leather. Inquiry-first atelier experience.",
    images: ["/images/logo.png"]
  },
  icons: {
    icon: [
      { url: "/images/logo.png", sizes: "512x512", type: "image/png" },
      { url: "/images/logo.png", sizes: "192x192", type: "image/png" },
      { url: "/images/favicon.ico", type: "image/x-icon" }
    ],
    apple: [{ url: "/images/apple-touch-icon.png", sizes: "180x180", type: "image/png" }],
    shortcut: ["/images/logo.png", "/images/favicon.ico"]
  },
  manifest: "/images/site.webmanifest",
  metadataBase: new URL(siteUrl)
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "RSG Handcrafted",
  url: siteUrl,
  logo: `${siteUrl}/images/logo.png`,
  description:
    "Artisan studio creating handcrafted wooden and leather handbags, including custom and personalized requests.",
  makesOffer: {
    "@type": "Offer",
    itemOffered: {
      "@type": "Product",
      name: "Handcrafted Wooden and Leather Handbags",
      category: "Luxury Accessories"
    }
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${playfair.variable} ${manrope.variable}`}>
      <body className="bg-ink text-ivory antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
