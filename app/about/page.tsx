import Image from "next/image";
import Link from "next/link";
import { PageHero } from "@/components/layout/PageHero";
import { FadeIn } from "@/components/ui/FadeIn";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { MagneticButton } from "@/components/ui/MagneticButton";

const team = [
  {
    name: "Arjun Khanna",
    role: "Founder & Managing Director",
    image:
      "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=600&q=80",
  },
  {
    name: "Sofia Fernandes",
    role: "Chief Design Officer",
    image:
      "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600&q=80",
  },
  {
    name: "Omar Haddad",
    role: "Head of Development",
    image:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=600&q=80",
  },
];

const timeline = [
  { year: "2008", text: "First premium tower delivered in Mumbai suburbs." },
  {
    year: "2014",
    text: "International design collaboration for waterfront residences.",
  },
  {
    year: "2019",
    text: "CK-Infinity brand unified across India & GCC corridors.",
  },
  {
    year: "2024",
    text: "Net-zero ready clubhouse pilot across flagship communities.",
  },
  {
    year: "2026",
    text: "Four landmark launches with smart wellness infrastructure.",
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        title="About CK-Infinity"
        subtitle="A studio-minded developer building addresses that feel personal, peaceful, and unmistakably premium."
        image="/ck-hero.jpeg"
      />

      <section className="bg-background py-20 md:py-28">
        <div className="mx-auto grid max-w-7xl items-center gap-14 px-5 md:px-8 lg:grid-cols-2">
          <FadeIn>
            <div className="relative aspect-[5/6] overflow-hidden rounded-[2rem] shadow-2xl">
              <Image
                src="/ck-hero.jpeg"
                alt="Corporate interior"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </FadeIn>
          <FadeIn delay={0.08}>
            <SectionHeading
              eyebrow="Introduction"
              title="Composed for generations"
              subtitle="CK-Infinity began as a belief that luxury should feel calm—not loud. We partner with master planners, landscape artists, and craftspeople to shape communities where children grow, parents unwind, and legacy quietly accumulates."
            />
            <p className="mt-6 text-sm font-light leading-relaxed text-stone-600">
              Our process is iterative and intimate: fewer launches, deeper
              attention, and long-term stewardship of common spaces. We remain
              accountable after you move in—because a home is not a transaction;
              it is a relationship measured in decades.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="bg-cream py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">
            <FadeIn>
              <SectionHeading
                title="Vision"
                subtitle="To be the most trusted curator of residential serenity in emerging global cities—where design integrity and human warmth coexist."
              />
            </FadeIn>
            <FadeIn delay={0.06}>
              <SectionHeading
                title="Mission"
                subtitle="We deliver meticulously planned homes, immersive amenities, and service ecosystems that honor privacy, safety, and the poetry of daily life."
              />
            </FadeIn>
          </div>
          <FadeIn delay={0.12} className="mt-16">
            <div className="glass-panel rounded-[2rem] p-8 md:p-12">
              <h3 className="font-serif text-3xl font-light text-stone-900">
                Objectives
              </h3>
              <ul className="mt-6 grid gap-4 text-sm font-light leading-relaxed text-stone-600 md:grid-cols-2">
                <li>
                  — Elevate environmental performance without compromising
                  aesthetics.
                </li>
                <li>
                  — Invest in clubhouse programming that families actually use
                  weekly.
                </li>
                <li>
                  — Maintain transparent timelines and proactive resident
                  communication.
                </li>
                <li>
                  — Champion local art, materials, and craftsmanship in every
                  region.
                </li>
              </ul>
            </div>
          </FadeIn>
        </div>
      </section>

      <section className="bg-background py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <FadeIn>
            <SectionHeading
              eyebrow="People"
              title="Leadership team"
              align="center"
              className="mx-auto"
            />
          </FadeIn>
          <div className="mt-14 grid gap-8 sm:grid-cols-3">
            {team.map((m, i) => (
              <FadeIn key={m.name} delay={i * 0.06}>
                <div className="group overflow-hidden rounded-3xl bg-white shadow-lg shadow-stone-900/5">
                  <div className="relative aspect-[4/5] overflow-hidden">
                    <Image
                      src={m.image}
                      alt={m.name}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                      sizes="(max-width: 640px) 100vw, 33vw"
                    />
                  </div>
                  <div className="p-6">
                    <p className="font-serif text-xl text-stone-900">
                      {m.name}
                    </p>
                    <p className="mt-1 text-xs uppercase tracking-[0.2em] text-gold-dark">
                      {m.role}
                    </p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-stone-900 py-20 text-stone-200 md:py-28">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <FadeIn>
            <SectionHeading
              eyebrow="Milestones"
              title="Achievements timeline"
              dark
              align="center"
              className="mx-auto"
            />
          </FadeIn>
          <div className="relative mx-auto mt-16 max-w-3xl">
            <div className="absolute left-[11px] top-0 hidden h-full w-px bg-gradient-to-b from-gold via-gold/40 to-transparent md:block" />
            <ul className="space-y-10">
              {timeline.map((item, i) => (
                <FadeIn key={item.year} delay={i * 0.05}>
                  <li className="relative flex flex-col gap-2 md:flex-row md:items-start md:gap-10">
                    <span className="font-serif text-2xl text-gold-light md:w-24">
                      {item.year}
                    </span>
                    <p className="flex-1 text-sm font-light leading-relaxed text-stone-300">
                      {item.text}
                    </p>
                  </li>
                </FadeIn>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-b from-cream to-background py-20 md:py-28">
        <div className="mx-auto max-w-4xl px-5 text-center md:px-8">
          <FadeIn>
            <h2 className="font-serif text-4xl font-light text-stone-900 md:text-5xl">
              Ready to experience CK-Infinity in person?
            </h2>
            <p className="mt-5 text-base font-light text-stone-600">
              Schedule a private tour or connect with our acquisition desk for
              early access inventory.
            </p>
            <div className="mt-10 flex flex-wrap justify-center gap-4">
              <MagneticButton>
                <Link
                  href="/inquiry"
                  className="inline-flex rounded-full bg-stone-900 px-8 py-3.5 text-xs font-semibold uppercase tracking-[0.2em] text-white"
                >
                  Book consultation
                </Link>
              </MagneticButton>
              <MagneticButton>
                <Link
                  href="/projects"
                  className="inline-flex rounded-full border border-stone-300 bg-white px-8 py-3.5 text-xs font-semibold uppercase tracking-[0.2em] text-stone-900"
                >
                  View projects
                </Link>
              </MagneticButton>
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
