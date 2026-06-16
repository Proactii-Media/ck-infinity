"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { outdoorAmenities, clubHouseAmenities } from "@/lib/amenities";

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

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
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
            {/* Image */}
            <Image
              src={item.image}
              alt={item.title}
              fill
              className="object-cover transition duration-700 group-hover:scale-110"
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-black/40" />

            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />

            {/* Content */}
            <div className="absolute bottom-0 left-0 z-10 w-full p-6">
              <h4 className="font-serif text-2xl font-light tracking-wide text-white md:text-3xl">
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

export function Amenities() {
  return (
    <section className="bg-[#0f0f0f] py-24">
      <div className="mx-auto max-w-7xl px-5">
        <div className="mb-20 text-center">
          <p className="mb-4 tracking-[0.3em] text-yellow-500 uppercase">
            Luxury Lifestyle
          </p>

          <h2 className="font-serif text-4xl text-white md:text-6xl">
            Premium Amenities
          </h2>
        </div>

        <div className="space-y-24">
          <AmenityGrid title="Outdoor Amenities" items={outdoorAmenities} />

          <AmenityGrid
            title="Club House Amenities"
            items={clubHouseAmenities}
          />
        </div>
      </div>
    </section>
  );
}
