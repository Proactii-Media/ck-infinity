"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { outdoorAmenities, clubHouseAmenities } from "@/lib/amenities";
import Link from "next/link";

function AmenityGrid({
  title,
  items,
}: {
  title: string;
  items: {
    title: string;
    image: string;
  }[];
}) {
  return (
    <div>
      <h3 className="mb-10 text-center font-serif text-3xl font-light tracking-wide text-white md:text-4xl">
        {title}
      </h3>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {items.map((item, idx) => (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.7,
              delay: idx * 0.05,
            }}
            className="group relative h-[280px] overflow-hidden rounded-[28px]"
          >
            <Image
              src={item.image}
              alt={item.title}
              fill
              className="object-cover transition duration-700 group-hover:scale-110"
            />

            <div className="absolute inset-0 bg-black/40" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />

            <div className="absolute bottom-0 left-0 z-10 w-full p-6">
              <h4 className="font-serif text-2xl font-light tracking-wide text-white">
                {item.title}
              </h4>

              <div className="mt-3 h-[1px] w-0 bg-yellow-500 transition-all duration-500 group-hover:w-24" />
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export function HomeAmenities() {
  return (
    <section className="bg-[#0f0f0f] py-24">
      <div className="mx-auto max-w-7xl px-5">
        {/* Heading */}
        <div className="mb-20 text-center">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-4 uppercase tracking-[0.35em] text-yellow-500"
          >
            Luxury Lifestyle
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-serif text-4xl text-white md:text-6xl"
          >
            Premium Amenities
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-stone-400"
          >
            Thoughtfully curated lifestyle spaces designed for recreation,
            wellness, leisure and unforgettable moments with your family.
          </motion.p>
        </div>

        {/* Amenities */}
        <div className="grid gap-6 md:grid-cols-2">
          {[
            outdoorAmenities[0],
            clubHouseAmenities[0],
            outdoorAmenities[1],
            clubHouseAmenities[1],
          ].map((item, idx) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: idx * 0.08 }}
              className="group relative h-[320px] overflow-hidden rounded-[30px]"
            >
              <Image
                src={item.image}
                alt={item.title}
                fill
                className="object-cover transition duration-700 group-hover:scale-110"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />

              <div className="absolute bottom-8 left-8">
                <span className="mb-3 inline-block rounded-full bg-yellow-500/90 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-black">
                  {idx % 2 === 0 ? "Outdoor" : "Club House"}
                </span>

                <h3 className="font-serif text-3xl text-white">{item.title}</h3>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <Link
            href="/projects/ck-lake-side"
            className="inline-flex items-center gap-3 rounded-full border border-yellow-500 bg-yellow-500 px-8 py-4 text-sm font-semibold uppercase tracking-[0.2em] text-black transition hover:scale-105 hover:bg-yellow-400"
          >
            View All Amenities
            <span>→</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
