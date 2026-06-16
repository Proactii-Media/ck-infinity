import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { blogPosts } from "@/lib/blogs";
import { FadeIn } from "@/components/ui/FadeIn";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return blogPosts.map((b) => ({ slug: b.slug }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const b = blogPosts.find((x) => x.slug === slug);
  if (!b) return { title: "Article" };
  return { title: b.title, description: b.excerpt };
}

export default async function BlogArticlePage({ params }: Props) {
  const { slug } = await params;
  const b = blogPosts.find((x) => x.slug === slug);
  if (!b) notFound();

  return (
    <article className="bg-background pb-20 pt-28 md:pb-28 md:pt-36">
      <div className="mx-auto max-w-3xl px-5 md:px-8">
        <FadeIn>
          <Link
            href="/blogs"
            className="text-xs font-light uppercase tracking-[0.22em] text-stone-500 hover:text-stone-800"
          >
            ← Back to journal
          </Link>
          <p className="mt-6 text-[10px] font-semibold uppercase tracking-[0.3em] text-gold-dark">
            {b.category} · {b.date}
          </p>
          <h1 className="mt-4 font-serif text-4xl font-light leading-tight text-stone-900 md:text-5xl">
            {b.title}
          </h1>
          <p className="mt-4 text-sm text-stone-500">{b.readTime}</p>
        </FadeIn>

        <FadeIn delay={0.06} className="relative mt-10 aspect-[16/9] overflow-hidden rounded-[1.75rem] shadow-xl">
          <Image src={b.image} alt={b.title} fill className="object-cover" sizes="100vw" priority />
        </FadeIn>

        <FadeIn delay={0.1} className="mt-12 max-w-none space-y-6">
          <p className="text-lg font-light leading-relaxed text-stone-600">{b.excerpt}</p>
          <p className="mt-6 text-base font-light leading-relaxed text-stone-600">
            Luxury residential design is entering a quieter, more intentional era. Buyers are asking for homes
            that breathe—spaces shaped by natural light, tactile materials, and amenities that encourage
            daily use rather than occasional spectacle. At CK-Infinity, we translate these expectations into
            master plans where every courtyard, corridor, and clubhouse lounge has a reason to exist.
          </p>
          <p className="mt-6 text-base font-light leading-relaxed text-stone-600">
            Whether you are comparing markets in Mumbai and Dubai or evaluating smart infrastructure in India’s
            metro corridors, the through-line remains the same: enduring value follows disciplined design,
            transparent delivery, and communities that feel safe, social, and serene.
          </p>
          <p className="mt-6 text-base font-light leading-relaxed text-stone-600">
            Our journal continues to explore these themes—so you can move forward with clarity, confidence,
            and a vision of home that feels unmistakably yours.
          </p>
        </FadeIn>
      </div>
    </article>
  );
}
