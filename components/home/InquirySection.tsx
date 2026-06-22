"use client";

import Link from "next/link";
import { useState } from "react";
import { motion } from "framer-motion";
import { projects } from "@/lib/projects";
import { FadeIn } from "@/components/ui/FadeIn";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { MagneticButton } from "@/components/ui/MagneticButton";

const WA =
  "https://wa.me/+919537997711?text=Hello%20CK-Infinity%2C%20I%27d%20like%20to%20schedule%20a%20visit.";

export function InquirySection() {
  const [sent, setSent] = useState(false);

  return (
    <section
      id="inquiry"
      className="relative overflow-hidden bg-background py-24 md:py-32"
    >
      <div className="pointer-events-none absolute left-1/2 top-0 h-px w-[min(90%,56rem)] -translate-x-1/2 bg-gradient-to-r from-transparent via-gold/35 to-transparent" />

      <div className="relative mx-auto max-w-7xl px-5 md:px-8">
        <div className="grid gap-14 lg:grid-cols-2 lg:gap-20">
          <FadeIn>
            <SectionHeading
              eyebrow="Private Consultation"
              title="Begin your CK-Infinity journey"
              subtitle="Share your preferences—our concierge team responds with discretion and clarity, typically within one business day."
            />

            <form
              className="mt-10 space-y-5"
              onSubmit={(e) => {
                e.preventDefault();
                setSent(true);
                window.setTimeout(() => setSent(false), 3200);
              }}
            >
              <div className="grid gap-5 sm:grid-cols-2">
                <Field label="Name" name="name" placeholder="Your full name" />
                <Field
                  label="Phone"
                  name="phone"
                  type="tel"
                  placeholder="+91 …"
                />
              </div>
              <Field
                label="Email"
                name="email"
                type="email"
                placeholder="you@email.com"
              />
              <div>
                <label className="text-[10px] font-medium uppercase tracking-[0.25em] text-stone-500">
                  Interested Project
                </label>
                <select
                  name="project"
                  className="mt-2 w-full rounded-2xl border border-stone-200/80 bg-white/80 px-4 py-3 text-sm outline-none ring-gold/20 backdrop-blur focus:ring-2"
                  defaultValue=""
                  required
                >
                  <option value="" disabled>
                    Select a project
                  </option>
                  {projects.map((p) => (
                    <option key={p.slug} value={p.slug}>
                      {p.name}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label className="text-[10px] font-medium uppercase tracking-[0.25em] text-stone-500">
                  Message
                </label>
                <textarea
                  name="message"
                  rows={4}
                  className="mt-2 w-full resize-none rounded-2xl border border-stone-200/80 bg-white/80 px-4 py-3 text-sm outline-none ring-gold/20 backdrop-blur focus:ring-2"
                  placeholder="Tell us about your ideal home…"
                  required
                />
              </div>
              <MagneticButton>
                <button
                  type="submit"
                  className="rounded-full bg-stone-900 px-10 py-3.5 text-xs font-semibold uppercase tracking-[0.22em] text-white transition hover:bg-stone-800"
                >
                  Submit Inquiry
                </button>
              </MagneticButton>
            </form>

            <motion.p
              className="mt-4 text-sm text-gold-dark"
              initial={false}
              animate={{ opacity: sent ? 1 : 0, y: sent ? 0 : 6 }}
            >
              Thank you—our team will reach out shortly.
            </motion.p>
          </FadeIn>

          <FadeIn delay={0.1}>
            <div className="glass-panel h-full rounded-[2rem] p-8 md:p-10">
              <h3 className="font-serif text-3xl font-light text-stone-900">
                Concierge desk
              </h3>
              <p className="mt-4 text-sm font-light leading-relaxed text-stone-600">
                Visit our experience gallery by appointment. We welcome private
                walkthroughs, family visits, and NRI consultations across time
                zones.
              </p>
              <ul className="mt-8 space-y-4 text-sm font-light text-stone-700">
                <li>
                  <span className="text-[10px] uppercase tracking-[0.25em] text-stone-400">
                    Phone
                  </span>
                  <br />
                  +91 9537 9977 11, +91 9537 9977 22
                </li>
                <li>
                  <span className="text-[10px] uppercase tracking-[0.25em] text-stone-400">
                    Email
                  </span>
                  <br />
                  www.ckinfinitygroup.com
                </li>
                <li>
                  <span className="text-[10px] uppercase tracking-[0.25em] text-stone-400">
                    Prject Info:
                  </span>
                  <br />
                  Nr. Hanuman Temple, N.H. 848-B, Daman Road, Kikarla, Dist-
                  Valsad- 396185.
                </li>
              </ul>
              <div className="mt-10 flex flex-col gap-3 sm:flex-row">
                <a
                  href={WA}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex flex-1 items-center justify-center rounded-full border border-gold/40 bg-gold/10 px-6 py-3 text-center text-xs font-semibold uppercase tracking-[0.18em] text-stone-900 transition hover:bg-gold/20"
                >
                  WhatsApp
                </a>
                <Link
                  href="/contact"
                  className="inline-flex flex-1 items-center justify-center rounded-full border border-stone-200 bg-white px-6 py-3 text-center text-xs font-semibold uppercase tracking-[0.18em] text-stone-900 transition hover:border-gold/40"
                >
                  Visit Office
                </Link>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}

function Field({
  label,
  name,
  type = "text",
  placeholder,
}: {
  label: string;
  name: string;
  type?: string;
  placeholder: string;
}) {
  return (
    <div>
      <label className="text-[10px] font-medium uppercase tracking-[0.25em] text-stone-500">
        {label}
      </label>
      <input
        name={name}
        type={type}
        placeholder={placeholder}
        required
        className="mt-2 w-full rounded-2xl border border-stone-200/80 bg-white/80 px-4 py-3 text-sm outline-none ring-gold/20 backdrop-blur focus:ring-2"
      />
    </div>
  );
}
