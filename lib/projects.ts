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
    location: "Udwada, Valsad, Gujarat",
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
    image: "/ck-lake-side/ck-7.jpeg",
    gallery: [
      {
        image: "/ck-lake-side/ck-7.jpeg",
        title: "Grand Entrance",
        description:
          "An elegant arrival experience designed with premium finishes and timeless architecture.",
      },
      {
        image: "/ck-lake-side/ck-1.jpeg",
        title: "Lakeside Wellness Promenade",
        description:
          "A serene waterfront jogging track surrounded by lush landscaping, meditation lawns, and breathtaking lake views, creating the perfect environment for an active and balanced lifestyle",
      },
      {
        image: "/ck-lake-side/ck-2.jpeg",
        title: "4BHK Private Terrace View",
        description:
          "Experience spacious 4BHK residences featuring expansive private terraces, contemporary architecture, and seamless indoor-outdoor living designed for modern families.",
      },
      {
        image: "/ck-lake-side/ck-3.jpeg",
        title: "Multi-Sport Activity Arena",
        description:
          "An expansive recreational hub featuring football, tennis, basketball, and open green spaces, thoughtfully designed to encourage fitness, play, and community engagement.",
      },
      {
        image: "/ck-lake-side/ck-4.jpeg",
        title: "Contemporary Villa Boulevard",
        description:
          "A beautifully planned streetscape lined with elegant villas, landscaped pathways, and modern facades that reflect sophistication and timeless architectural design.",
      },
      {
        image: "/ck-lake-side/ck-5.jpeg",
        title: "Family Recreation Plaza",
        description:
          "A vibrant community space featuring dedicated play areas, landscaped gardens, and leisure zones where families can gather, relax, and create lasting memories.",
      },
      {
        image: "/ck-lake-side/ck-15.jpeg",
        title: "Private Balcony",
        description:
          "Open-air spaces designed to maximize views and natural ventilation.",
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
        image: "/ck-lake-side/ck-17.jpeg",
        title: "Bird View Perspective",
        description:
          "A striking front elevation showcasing contemporary architecture, grand proportions, and timeless elegance.",
      },
      {
        image: "/ck-lake-side/ck-13.jpeg",
        title: "Jogging Track",
        description:
          "Thoughtfully designed jogging trails encourage an active lifestyle amidst lush landscaped surroundings.",
      },
      {
        image: "/ck-lake-side/ck-16.jpeg",
        title: "4BHK Front View Horizontal",
        description:
          "A striking front elevation showcasing contemporary architecture, grand proportions, and timeless elegance.",
      },
    ],
  },
];

export function getProjectBySlug(slug: string) {
  return projects.find((p) => p.slug === slug);
}
