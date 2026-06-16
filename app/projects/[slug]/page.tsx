import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getProjectBySlug, projects } from "@/lib/projects";
import { PageHero } from "@/components/layout/PageHero";
import { FadeIn } from "@/components/ui/FadeIn";

type Props = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return projects.map((p) => ({
    slug: p.slug,
  }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const p = getProjectBySlug(slug);

  if (!p) {
    return {
      title: "Project",
    };
  }

  return {
    title: p.name,
    description: p.description,
  };
}

export default async function ProjectDetailPage({ params }: Props) {
  const { slug } = await params;
  const p = getProjectBySlug(slug);

  if (!p) notFound();

  return (
    <>
      {" "}
      <PageHero title={p.name} subtitle={p.location} image={p.image} />
      ```
      <section className="bg-background py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <FadeIn>
            <div className="flex flex-wrap items-center gap-4">
              <span className="rounded-full border border-gold/35 bg-gold/10 px-4 py-1 text-[10px] font-semibold uppercase tracking-[0.22em] text-gold-dark">
                {p.status}
              </span>

              <Link
                href="/projects"
                className="text-xs font-light uppercase tracking-[0.2em] text-stone-500 transition hover:text-stone-800"
              >
                ← All Projects
              </Link>
            </div>

            <p className="mt-8 max-w-3xl text-lg font-light leading-relaxed text-stone-600">
              {p.longDescription}
            </p>
          </FadeIn>

          <FadeIn delay={0.08} className="mt-20 space-y-24">
            {(p.gallery ?? []).map((item, index) => (
              <div
                key={item.image}
                className={`grid items-center gap-10 lg:grid-cols-2 ${
                  index % 2 === 1 ? "lg:[&>*:first-child]:order-2" : ""
                }`}
              >
                <div className="relative aspect-[16/9] overflow-hidden rounded-[2rem] shadow-xl">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover transition duration-700 hover:scale-105"
                    sizes="50vw"
                  />
                </div>

                <div className="max-w-xl">
                  <span className="text-xs font-semibold uppercase tracking-[0.3em] text-gold">
                    Gallery Feature
                  </span>

                  <h3 className="mt-4 font-serif text-4xl font-light text-stone-900">
                    {item.title}
                  </h3>

                  {item.description && (
                    <p className="mt-6 text-lg font-light leading-relaxed text-stone-600">
                      {item.description}
                    </p>
                  )}
                </div>
              </div>
            ))}
          </FadeIn>

          <FadeIn
            delay={0.12}
            className="mt-20 glass-panel rounded-[2rem] p-8 md:p-10"
          >
            <h2 className="font-serif text-2xl font-light text-stone-900">
              Signature Amenities
            </h2>

            <ul className="mt-6 grid gap-3 text-sm font-light text-stone-600 sm:grid-cols-2">
              {p.amenities.map((amenity) => (
                <li key={amenity}>— {amenity}</li>
              ))}
            </ul>

            <Link
              href="/inquiry"
              className="mt-8 inline-flex rounded-full bg-stone-900 px-8 py-3 text-xs font-semibold uppercase tracking-[0.2em] text-white transition hover:bg-stone-800"
            >
              Request Brochure
            </Link>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
