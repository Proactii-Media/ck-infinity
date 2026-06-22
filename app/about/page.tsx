import Image from "next/image";
import Link from "next/link";
import { PageHero } from "@/components/layout/PageHero";
import { FadeIn } from "@/components/ui/FadeIn";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { MagneticButton } from "@/components/ui/MagneticButton";

import {
  Building2,
  MapPin,
  ShieldCheck,
  Clock3,
  Users,
  Sparkles,
  Target,
  Eye,
} from "lucide-react";

const reasons = [
  {
    icon: Building2,
    title: "Quality Construction",
    text: "We use superior materials and proven construction practices to ensure durability and excellence.",
  },
  {
    icon: MapPin,
    title: "Prime Locations",
    text: "Strategically selected locations with strong connectivity and future growth potential.",
  },
  {
    icon: Sparkles,
    title: "Modern Design",
    text: "Thoughtfully designed homes that maximize space, comfort, and natural living.",
  },
  {
    icon: ShieldCheck,
    title: "Transparency",
    text: "Clear communication and ethical business practices throughout the buying process.",
  },
  {
    icon: Clock3,
    title: "Timely Delivery",
    text: "Strong project management with a commitment to delivering projects on schedule.",
  },
  {
    icon: Users,
    title: "Customer First",
    text: "We focus on understanding customer needs and exceeding expectations.",
  },
];

const values = [
  "Integrity & Transparency",
  "Quality & Excellence",
  "Customer Satisfaction",
  "Innovation & Growth",
  "Trust & Reliability",
  "Sustainable Development",
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        title="About CK Infinity Group"
        subtitle="Building Communities, Enriching Lives"
        image="/ck-hero.jpeg"
      />

      {/* ABOUT */}
      <section className="bg-background py-20 md:py-28">
        <div className="mx-auto grid max-w-7xl gap-14 px-5 md:px-8 lg:grid-cols-2">
          <FadeIn>
            <div className="relative aspect-[5/6] overflow-hidden rounded-[2rem] shadow-2xl">
              <Image
                src="/ck-lake-side/ck-7.jpeg"
                alt="CK Infinity Group"
                fill
                className="object-cover"
              />
            </div>
          </FadeIn>

          <FadeIn delay={0.08}>
            <SectionHeading
              eyebrow="Who We Are"
              title="Creating Homes That Inspire Better Living"
            />

            <div className="space-y-5 text-sm leading-relaxed text-stone-600">
              <p>
                CK Infinity Group is a progressive real estate development
                company based in Udwada, dedicated to creating exceptional
                residential spaces that inspire comfortable and modern living.
              </p>

              <p>
                With a passion for quality construction and a commitment to
                customer satisfaction, we have established ourselves as a
                trusted name in the real estate sector, delivering homes that
                blend thoughtful design, functionality, and lasting value.
              </p>

              <p>
                We understand that a home is much more than a physical
                structure—it is a place where families create memories,
                celebrate milestones, and build their future.
              </p>

              <p>
                From elegant row houses and premium bungalows to thoughtfully
                planned residential communities, every project is designed with
                meticulous attention to detail and a focus on enhancing the
                lifestyle of our residents.
              </p>

              <p>
                Our approach to real estate development is centered around
                innovation, transparency, and excellence. We carefully select
                strategic locations that offer convenience, connectivity, and
                long-term growth potential.
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* MISSION VISION */}
      <section className="bg-cream py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <div className="grid gap-8 lg:grid-cols-2">
            <FadeIn>
              <div className="rounded-[2rem] bg-white p-10 shadow-lg">
                <Target className="h-10 w-10 text-gold" />

                <h3 className="mt-6 font-serif text-3xl font-light text-stone-900">
                  Our Mission
                </h3>

                <p className="mt-5 text-sm leading-relaxed text-stone-600">
                  To develop high-quality residential communities that provide
                  comfort, security, and lasting value while maintaining the
                  highest standards of integrity, transparency, and customer
                  satisfaction.
                </p>
              </div>
            </FadeIn>

            <FadeIn delay={0.08}>
              <div className="rounded-[2rem] bg-white p-10 shadow-lg">
                <Eye className="h-10 w-10 text-gold" />

                <h3 className="mt-6 font-serif text-3xl font-light text-stone-900">
                  Our Vision
                </h3>

                <p className="mt-5 text-sm leading-relaxed text-stone-600">
                  To become one of the most trusted and respected real estate
                  developers in Gujarat by delivering exceptional residential
                  projects that set new benchmarks in quality, innovation, and
                  customer experience.
                </p>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="bg-background py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <FadeIn>
            <SectionHeading
              eyebrow="Why Choose Us"
              title="Built On Trust, Quality & Excellence"
              align="center"
              className="mx-auto"
            />
          </FadeIn>

          <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {reasons.map((item, i) => {
              const Icon = item.icon;

              return (
                <FadeIn key={item.title} delay={i * 0.05}>
                  <div className="rounded-3xl bg-white p-8 shadow-lg shadow-stone-900/5">
                    <Icon className="h-8 w-8 text-gold" />

                    <h3 className="mt-5 text-xl font-medium text-stone-900">
                      {item.title}
                    </h3>

                    <p className="mt-3 text-sm leading-relaxed text-stone-600">
                      {item.text}
                    </p>
                  </div>
                </FadeIn>
              );
            })}
          </div>
        </div>
      </section>

      {/* CORE VALUES */}
      <section className="bg-stone-900 py-20 text-white md:py-28">
        <div className="mx-auto max-w-6xl px-5 md:px-8 text-center">
          <FadeIn>
            <SectionHeading
              eyebrow="Our Values"
              title="The Principles That Guide Us"
              dark
              align="center"
              className="mx-auto"
            />
          </FadeIn>

          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {values.map((value) => (
              <div
                key={value}
                className="rounded-2xl border border-white/10 bg-white/5 p-6"
              >
                {value}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* COMMUNITY */}
      <section className="bg-background py-20 md:py-28">
        <div className="mx-auto grid max-w-7xl gap-14 px-5 md:px-8 lg:grid-cols-2">
          <FadeIn>
            <div className="relative aspect-[16/10] overflow-hidden rounded-[2rem]">
              <Image
                src="/ck-lake-side/ck-4.jpeg"
                alt="Community Living"
                fill
                className="object-cover"
              />
            </div>
          </FadeIn>

          <FadeIn delay={0.08}>
            <SectionHeading
              eyebrow="Our Commitment"
              title="More Than Homes, We Build Communities"
            />

            <p className="mt-6 text-sm leading-relaxed text-stone-600">
              At CK Infinity Group, we believe successful developments
              contribute not only to individual homeowners but also to the
              growth and well-being of the communities they serve.
            </p>

            <p className="mt-4 text-sm leading-relaxed text-stone-600">
              Our projects are designed to foster a sense of community through
              thoughtfully planned infrastructure, open spaces, modern
              amenities, and secure living environments where families can grow
              and thrive.
            </p>

            <p className="mt-4 text-sm leading-relaxed text-stone-600">
              We are committed to delivering homes that reflect our values of
              integrity, excellence, and trust while creating sustainable
              developments that contribute positively to the region's growth.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-b from-cream to-background py-20 md:py-28">
        <div className="mx-auto max-w-4xl px-5 text-center md:px-8">
          <FadeIn>
            <span className="text-xs uppercase tracking-[0.3em] text-gold-dark">
              Building Communities, Enriching Lives
            </span>

            <h2 className="mt-5 font-serif text-4xl font-light text-stone-900 md:text-5xl">
              Discover Your Future Home With CK Infinity Group
            </h2>

            <p className="mt-6 text-stone-600">
              Experience thoughtfully designed residential communities built
              with quality, trust, and a commitment to better living.
            </p>

            <div className="mt-10 flex flex-wrap justify-center gap-4">
              <MagneticButton>
                <Link
                  href="/contact"
                  className="rounded-full bg-stone-900 px-8 py-3.5 text-xs font-semibold uppercase tracking-[0.2em] text-white"
                >
                  Contact Us
                </Link>
              </MagneticButton>

              <MagneticButton>
                <Link
                  href="/projects"
                  className="rounded-full border border-stone-300 bg-white px-8 py-3.5 text-xs font-semibold uppercase tracking-[0.2em] text-stone-900"
                >
                  View Projects
                </Link>
              </MagneticButton>
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
