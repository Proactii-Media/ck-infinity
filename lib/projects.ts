export type ProjectStatus = "Ongoing" | "Completed" | "Upcoming";

export type GalleryImage = {
  image: string;
  title: string;
  description?: string;
};

export type Project = {
  slug: string;
  name: string;
  location: string;
  description: string;
  longDescription: string;
  status: ProjectStatus;
  amenities: string[];
  image: string;
  gallery?: GalleryImage[];
};

export const projects: Project[] = [
  {
    slug: "ck-lake-side",
    name: "CK Lake Side",
    location: "Bandra West, Mumbai",
    description:
      "Sky residences with panoramic sea views, private decks, and curated concierge living.",
    longDescription:
      "CK Lake Side redefines elevated living with floor-to-ceiling glazing, bespoke interiors, and a private sky lounge. Designed for families who value discretion, space, and timeless architecture.",
    status: "Ongoing",
    amenities: [
      "Infinity-edge pool deck",
      "Sky lounge & observatory",
      "Private elevator lobbies",
      "Smart home automation",
    ],
    image: "/ck-lake-side/ck-main.jpeg",
    gallery: [
      {
        image: "/ck-lake-side/ck-1.jpeg",
        title: "Grand Entrance",
        description:
          "An elegant arrival experience designed with premium finishes and timeless architecture.",
      },
      {
        image: "/ck-lake-side/ck-2.jpeg",
        title: "Luxury Living Room",
        description:
          "Spacious interiors with abundant natural light and panoramic views.",
      },
      {
        image: "/ck-lake-side/ck-3.jpeg",
        title: "Master Bedroom",
        description:
          "Private sanctuary crafted for comfort, privacy, and relaxation.",
      },
      {
        image: "/ck-lake-side/ck-4.jpeg",
        title: "Designer Kitchen",
        description:
          "Modern kitchen spaces featuring functional layouts and premium materials.",
      },
      {
        image: "/ck-lake-side/ck-5.jpeg",
        title: "Infinity Pool Deck",
        description:
          "Resort-inspired leisure spaces overlooking the surrounding landscape.",
      },
      {
        image: "/ck-lake-side/ck-6.jpeg",
        title: "Sky Lounge",
        description:
          "An exclusive residents' lounge with sophisticated interiors and city views.",
      },
      {
        image: "/ck-lake-side/ck-7.jpeg",
        title: "Private Balcony",
        description:
          "Open-air spaces designed to maximize views and natural ventilation.",
      },
      {
        image: "/ck-lake-side/ck-8.jpeg",
        title: "Premium Bathroom",
        description:
          "Spa-inspired bathrooms with elegant fittings and contemporary styling.",
      },
      {
        image: "/ck-lake-side/ck-14.jpeg",
        title: "Lake-View Experience",
        description:
          "Wake up to serene lake vistas that bring tranquility, natural beauty, and a refreshing sense of openness to everyday living.",
      },
      {
        image: "/ck-lake-side/ck-10.jpeg",
        title: "Landscaped Gardens",
        description:
          "Beautifully designed green spaces that bring nature closer to home.",
      },
      {
        image: "/ck-lake-side/ck-11.jpeg",
        title: "Skyline Views",
        description: "Breathtaking vistas that elevate everyday living.",
      },
      {
        image: "/ck-lake-side/ck-12.jpeg",
        title: "Luxury Lifestyle",
        description:
          "A complete living experience blending comfort, elegance, and exclusivity.",
      },
      {
        image: "/ck-lake-side/ck-13.jpeg",
        title: "Jogging Track",
        description:
          "Thoughtfully designed jogging trails encourage an active lifestyle amidst lush landscaped surroundings.",
      },
      {
        image: "/ck-lake-side/ck-15.jpeg",
        title: "3BHK Balcony ",
        description:
          "Spacious private balcony offering fresh air, abundant natural light, and relaxing views for everyday comfort.",
      },
      {
        image: "/ck-lake-side/ck-16.jpeg",
        title: "4BHK Front View Horizontal",
        description:
          "A striking front elevation showcasing contemporary architecture, grand proportions, and timeless elegance.",
      },
    ],
  },

  {
    slug: "ck-infinity-elite",
    name: "CK Infinity Elite",
    location: "Jumeirah Village Circle, Dubai",
    description:
      "Boutique towers with resort-style amenities, warm stone palettes, and serene water courtyards.",
    longDescription:
      "CK Infinity Elite brings Dubai’s golden-hour calm into every residence. Expansive layouts, spa-inspired bathrooms, and direct access to curated retail create a seamless luxury lifestyle.",
    status: "Upcoming",
    amenities: [
      "Resort lagoon & cabanas",
      "Signature spa suite",
      "Executive business lounge",
      "Valet & concierge",
    ],
    image:
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=1200&q=85",
    gallery: [
      {
        image:
          "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80",
        title: "Resort Lagoon",
        description:
          "Crystal-clear waters and luxury cabanas inspired by world-class resorts.",
      },
      {
        image:
          "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?w=800&q=80",
        title: "Signature Residences",
        description:
          "Contemporary interiors paired with elegant finishes and open layouts.",
      },
    ],
  },

  {
    slug: "ck-infinity-skyline",
    name: "CK Infinity Skyline",
    location: "Powai, Mumbai",
    description:
      "Completed landmark with lush podium gardens, clubhouse excellence, and family-first planning.",
    longDescription:
      "CK Infinity Skyline is a completed community celebrated for its double-height lobby, landscaped sky bridges, and award-winning clubhouse programming for every generation.",
    status: "Completed",
    amenities: [
      "Podium gardens & jogging loop",
      "Clubhouse with banquet",
      "Indoor sports arena",
      "Dedicated kids’ learning studio",
    ],
    image:
      "https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=1200&q=85",
    gallery: [
      {
        image:
          "https://images.unsplash.com/photo-1600573472550-8090b5e0745e?w=800&q=80",
        title: "Landscaped Podium",
        description:
          "Extensive green spaces designed for wellness and community living.",
      },
      {
        image:
          "https://images.unsplash.com/photo-1600566752355-35792bedcfea?w=800&q=80",
        title: "Clubhouse Facilities",
        description:
          "Premium recreational amenities for residents of all ages.",
      },
    ],
  },
];

export function getProjectBySlug(slug: string) {
  return projects.find((p) => p.slug === slug);
}
