export type Testimonial = {
  name: string;
  role: string;
  image: string;
  quote: string;
};

export const testimonials: Testimonial[] = [
  {
    name: "Ananya Mehta",
    role: "Design Director",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&q=80",
    quote:
      "CK-Infinity delivered a home that feels like a private resort—quiet details, impeccable light, and a community that truly cares.",
  },
  {
    name: "James Alves",
    role: "Entrepreneur",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&q=80",
    quote:
      "From the first site visit to handover, the experience was cinematic. The amenities and finishing are genuinely world-class.",
  },
  {
    name: "Priya Shah",
    role: "Physician",
    image:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&q=80",
    quote:
      "We chose CK-Infinity for safety, space, and serenity. Every weekend feels like a retreat without leaving the city.",
  },
];
