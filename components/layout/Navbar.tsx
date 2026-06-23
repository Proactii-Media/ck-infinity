"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { cn } from "@/lib/cn";
import Image from "next/image";

const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Us" },
  { href: "/projects", label: "Projects" },
  { href: "/contact", label: "Contact" },
];

export function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 48);
    onScroll();

    window.addEventListener("scroll", onScroll, { passive: true });

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <header
        className={cn(
          "fixed inset-x-0 top-0 z-[100] transition-all duration-500",
          scrolled
            ? "border-b border-gold/10 bg-cream/95 py-3 shadow-sm backdrop-blur-xl"
            : "bg-transparent py-5",
        )}
      >
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 md:px-8">
          <Link href="/" className="group relative flex items-center gap-3">
            <div className="relative h-12 w-12">
              <Image
                src="/ck-logo.jpeg"
                alt="CK Infinity Logo"
                fill
                priority
                className="object-contain"
              />
            </div>

            <span
              className={cn(
                "relative font-serif text-xl font-light tracking-[0.28em] md:text-2xl",
                scrolled ? "text-stone-900" : "text-white",
              )}
            >
              <span
                className={cn(scrolled ? "text-gold-dark" : "text-gold-light")}
              >
                Infinity
              </span>

              <span className="absolute -bottom-1 left-0 h-px w-0 bg-gradient-to-r from-gold to-gold-light transition-all duration-500 group-hover:w-full" />
            </span>
          </Link>

          <ul className="hidden items-center gap-10 lg:flex">
            {links.map((l) => {
              const active = pathname === l.href;

              return (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className={cn(
                      "group relative text-[11px] font-light uppercase tracking-[0.28em] transition-colors",
                      active
                        ? "text-gold-light"
                        : scrolled
                          ? "text-stone-700 hover:text-gold-dark"
                          : "text-white hover:text-gold-light",
                    )}
                  >
                    {l.label}

                    <span
                      className={cn(
                        "absolute -bottom-1 left-0 h-px bg-gradient-to-r from-gold to-gold-light transition-all duration-500",
                        active ? "w-full" : "w-0 group-hover:w-full",
                      )}
                    />
                  </Link>
                </li>
              );
            })}
          </ul>

          <div className="hidden lg:block">
            <Link
              href="/inquiry"
              className={cn(
                "rounded-full px-6 py-2.5 text-[11px] font-medium uppercase tracking-[0.22em] transition",
                scrolled
                  ? "border border-gold/35 bg-gold/10 text-stone-900 hover:border-gold"
                  : "border border-white/40 bg-white/10 text-white backdrop-blur-md hover:bg-white/20",
              )}
            >
              Inquiry
            </Link>
          </div>

          <button
            type="button"
            className="relative z-[130] flex h-10 w-10 flex-col items-center justify-center gap-1.5 lg:hidden"
            onClick={() => setOpen((o) => !o)}
            aria-label={open ? "Close menu" : "Open menu"}
          >
            <motion.span
              className={cn(
                "block h-px w-6",
                scrolled ? "bg-stone-800" : "bg-white",
              )}
              animate={open ? { rotate: 45, y: 4 } : { rotate: 0, y: 0 }}
            />

            <motion.span
              className={cn(
                "block h-px w-6",
                scrolled ? "bg-stone-800" : "bg-white",
              )}
              animate={open ? { opacity: 0 } : { opacity: 1 }}
            />

            <motion.span
              className={cn(
                "block h-px w-6",
                scrolled ? "bg-stone-800" : "bg-white",
              )}
              animate={open ? { rotate: -45, y: -4 } : { rotate: 0, y: 0 }}
            />
          </button>
        </nav>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 z-[125] flex flex-col bg-cream/95 backdrop-blur-2xl lg:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.ul
              className="flex flex-1 flex-col items-center justify-center gap-10 px-8"
              initial="hidden"
              animate="show"
              exit="hidden"
              variants={{
                hidden: {},
                show: {
                  transition: {
                    staggerChildren: 0.06,
                    delayChildren: 0.1,
                  },
                },
              }}
            >
              {links.map((l) => (
                <motion.li
                  key={l.href}
                  variants={{
                    hidden: { opacity: 0, y: 16 },
                    show: { opacity: 1, y: 0 },
                  }}
                >
                  <Link
                    href={l.href}
                    onClick={() => setOpen(false)}
                    className="font-serif text-3xl font-light text-stone-800"
                  >
                    {l.label}
                  </Link>
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
