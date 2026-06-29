import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Globe2, Landmark, ShieldCheck, Plane, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "NRI Investment | CK Infinity Group",
  description:
    "Premium investment opportunities for NRIs with CK Infinity Group.",
};

const benefits = [
  {
    icon: Globe2,
    title: "Global Investors",
    text: "Helping NRIs invest confidently from anywhere in the world.",
  },
  {
    icon: Landmark,
    title: "Trusted Investment",
    text: "Premium residential projects with long-term appreciation.",
  },
  {
    icon: ShieldCheck,
    title: "Transparent Process",
    text: "Professional assistance from inquiry to possession.",
  },
  {
    icon: Plane,
    title: "Virtual Assistance",
    text: "Property tours, documentation and support without travelling.",
  },
];

export default function NRIPage() {
  return (
    <>
      {/* HERO */}
      <section className="relative h-screen overflow-hidden">
        <Image
          src="/ck-lake-side/ck-17.jpeg"
          alt="NRI Investment"
          fill
          priority
          className="object-cover"
        />

        <div className="absolute inset-0 bg-black/55" />

        <div className="relative z-10 mx-auto flex h-full max-w-7xl items-center px-6">
          <div className="max-w-3xl text-white">
            <p className="mb-4 uppercase tracking-[0.35em] text-yellow-400">
              NRI Investment
            </p>

            <h1 className="font-serif text-5xl font-light leading-tight md:text-7xl">
              Invest In India
              <br />
              With Complete Confidence
            </h1>

            <p className="mt-8 max-w-2xl text-lg leading-8 text-stone-200">
              Whether you're living in the USA, UK, Canada, Australia, Singapore
              or the Middle East, CK Infinity Group provides a seamless property
              buying experience with virtual assistance, transparent
              documentation and dedicated relationship managers.
            </p>

            <div className="mt-10 flex flex-wrap gap-5">
              <Link
                href="/contact"
                className="rounded-full bg-yellow-500 px-8 py-4 text-sm font-semibold uppercase tracking-[0.2em] text-black transition hover:bg-yellow-400"
              >
                Schedule Consultation
              </Link>

              <Link
                href="/projects"
                className="inline-flex items-center gap-2 rounded-full border border-white/30 px-8 py-4 text-sm uppercase tracking-[0.2em] transition hover:bg-white/10"
              >
                Explore Projects
                <ArrowRight size={18} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* WHY INVEST */}
      <section className="bg-[#faf8f4] py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center">
            <p className="uppercase tracking-[0.3em] text-yellow-600">
              Why Choose CK Infinity
            </p>

            <h2 className="mt-5 font-serif text-5xl font-light text-stone-900">
              Built For Global Investors
            </h2>

            <p className="mx-auto mt-6 max-w-3xl text-lg text-stone-600">
              Our dedicated NRI support team ensures a smooth investment journey
              with complete transparency, secure transactions, and premium
              residential developments in Gujarat.
            </p>
          </div>

          <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {benefits.map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.title}
                  className="rounded-3xl bg-white p-8 shadow-lg transition hover:-translate-y-2"
                >
                  <div className="flex h-14 w-14 items-center justify-center rounded-full bg-yellow-100">
                    <Icon className="h-7 w-7 text-yellow-600" />
                  </div>

                  <h3 className="mt-6 text-2xl font-medium text-stone-900">
                    {item.title}
                  </h3>

                  <p className="mt-4 leading-7 text-stone-600">{item.text}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
