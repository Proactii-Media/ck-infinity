import { PageHero } from "@/components/layout/PageHero";
import { FadeIn } from "@/components/ui/FadeIn";
import { ContactForm } from "@/components/contact/ContactForm";
import { FaqAccordion } from "@/components/contact/FaqAccordion";

const WA =
  "https://wa.me/+919537997711?text=Hello%20CK-Infinity%20concierge%2C%20I%20have%20a%20question.";

export default function ContactPage() {
  return (
    <>
      <PageHero
        title="Contact"
        subtitle="Our concierge team is available for appointments, portfolio walkthroughs, and discreet acquisition conversations."
        image="/contact.jpg"
      />

      <section className="bg-background py-16 md:py-24">
        <div className="mx-auto grid max-w-7xl gap-14 px-5 md:px-8 lg:grid-cols-2">
          <FadeIn>
            <h2 className="font-serif text-3xl font-light text-stone-900 md:text-4xl">
              Write to us
            </h2>
            <ContactForm />
          </FadeIn>

          <FadeIn delay={0.08}>
            <div className="grid gap-6 sm:grid-cols-2">
              <div className="glass-panel rounded-3xl p-6">
                <p className="text-[10px] uppercase tracking-[0.25em] text-stone-500">
                  Phone
                </p>
                <p className="mt-2 font-serif text-xl text-stone-900">
                  +91 9537 9977 11,
                  <br></br> +91 9537 9977 22
                </p>
              </div>
              <div className="glass-panel rounded-3xl p-6">
                <p className="text-[10px] uppercase tracking-[0.25em] text-stone-500">
                  Website
                </p>
                <p className="mt-2 font-serif text-xl text-stone-900">
                  www.ckinfinitygroup.com
                </p>
              </div>
            </div>
            <div className="mt-6 flex flex-wrap gap-4">
              <a
                href={WA}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full border border-gold/40 bg-gold/10 px-6 py-2.5 text-xs font-semibold uppercase tracking-[0.18em] text-stone-900"
              >
                WhatsApp
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full border border-stone-200 px-6 py-2.5 text-xs font-semibold uppercase tracking-[0.18em] text-stone-800"
              >
                Instagram
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full border border-stone-200 px-6 py-2.5 text-xs font-semibold uppercase tracking-[0.18em] text-stone-800"
              >
                LinkedIn
              </a>
            </div>
          </FadeIn>
        </div>
      </section>

      <section className="bg-cream py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <FadeIn>
            <h2 className="font-serif text-3xl font-light text-stone-900">
              Visit our Project Office
            </h2>
            <p className="mt-3 max-w-2xl text-sm font-light text-stone-600">
              Nr. Hanuman Temple, N.H. 848-B, Daman Road, Kikarla, Dist- Valsad-
              396185 — appointments recommended.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="bg-background py-16 md:py-24">
        <div className="mx-auto max-w-3xl px-5 md:px-8">
          <FadeIn>
            <h2 className="text-center font-serif text-3xl font-light text-stone-900">
              Frequently asked questions
            </h2>
          </FadeIn>
          <div className="mt-10">
            <FaqAccordion />
          </div>
        </div>
      </section>
    </>
  );
}
