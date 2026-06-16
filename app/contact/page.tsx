import { PageHero } from "@/components/layout/PageHero";
import { FadeIn } from "@/components/ui/FadeIn";
import { ContactForm } from "@/components/contact/ContactForm";
import { FaqAccordion } from "@/components/contact/FaqAccordion";

const WA =
  "https://wa.me/919876543210?text=Hello%20CK-Infinity%20concierge%2C%20I%20have%20a%20question.";

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
                  +91 98765 43210
                </p>
              </div>
              <div className="glass-panel rounded-3xl p-6">
                <p className="text-[10px] uppercase tracking-[0.25em] text-stone-500">
                  Email
                </p>
                <p className="mt-2 font-serif text-xl text-stone-900">
                  concierge@ck-infinity.com
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
              Visit our gallery
            </h2>
            <p className="mt-3 max-w-2xl text-sm font-light text-stone-600">
              Infinity Tower, 12th Road, Bandra West, Mumbai 400050 —
              appointments recommended.
            </p>
            <div className="mt-8 overflow-hidden rounded-[1.75rem] shadow-xl ring-1 ring-stone-200/80">
              <iframe
                title="CK-Infinity office map"
                src="https://maps.google.com/maps?q=Bandra+West%2C+Mumbai&t=&z=14&ie=UTF8&iwloc=&output=embed"
                width="100%"
                height="420"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full"
              />
            </div>
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
