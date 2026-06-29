/** Same image used in typography and morphs into the about hero image */
export const MORPH_IMAGE = "/ck-lake-side/ck-7.jpeg";

export const ABOUT_IMAGES = {
  smallTop: {
    src: "/ck-lake-side/ck-2.jpeg",
    alt: "Warm minimalist living interior",
  },
  smallBottom: {
    src: "/ck-lake-side/ck-17.jpeg",
    alt: "Elegant bedroom suite",
  },
} as const;

export const ABOUT_COPY = {
  label: "Our Philosophy",
  heading: "About CK-Infinity",
  paragraph:
    "CK Infinity Group is a trusted real estate developer based in Udwada, committed to creating quality residential developments that combine modern living, comfort, and long-term value. With a strong focus on craftsmanship, innovation, and customer satisfaction, we develop thoughtfully planned residential projects including premium apartments, row houses, and bungalows. Our projects are designed to offer residents a perfect balance of contemporary amenities, functional spaces, and a peaceful lifestyle. Every development reflects our dedication to quality construction, transparent business practices, and timely project delivery. At CK Infinity Group, we believe that a home is more than just a property—it is a foundation for families, aspirations, and future generations.",
  cta: { label: "Get in Touch", href: "/contact" },
} as const;

export const ABOUT_STATS = [
  { label: "From Daman", value: 7, suffix: "KM" },
  { label: "From National Highway", value: 3, suffix: "KM" },
  { label: "Premium Amenities", value: 20, suffix: "+" },
] as const;
