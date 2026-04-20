"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section id="top" className="relative min-h-[88vh] overflow-hidden bg-ink">
      <Image
        src="/images/hero.jpg"
        alt="Handcrafted wooden and leather handbag by RSG Handcrafted"
        fill
        priority
        className="object-cover"
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/45 via-black/55 to-ink" />
      <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-b from-transparent to-ink" />
      <div className="absolute inset-x-0 bottom-0 h-[2px] bg-ink" />

      <div className="container-luxury relative z-10 flex min-h-[88vh] flex-col justify-center pt-16">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-2xl space-y-6"
        >
          <h1 className="font-serif text-4xl leading-tight text-ivory sm:text-5xl md:text-6xl">
            Handcrafted Elegance, Shaped in Wood and Leather.
          </h1>
          <p className="max-w-xl text-sm text-ivory/85 sm:text-base">
            Each piece formed with precision, patience, and character.
          </p>
          <div className="flex flex-wrap gap-3">
            <a
              href="#inquiry"
              className="focus-ring inline-flex min-h-11 items-center rounded-full bg-caramel px-6 py-3 text-sm font-medium text-ink transition hover:bg-[#c99d6b]"
            >
              Request a Piece
            </a>
            <a
              href="#collection"
              className="focus-ring inline-flex min-h-11 items-center rounded-full border border-ivory/50 px-6 py-3 text-sm text-ivory transition hover:border-caramel hover:text-caramel"
            >
              Explore Collection
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
