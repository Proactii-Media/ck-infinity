export type GalleryItem = {
  src: string;
  alt: string;
  category:
    | "Exterior"
    | "Interior"
    | "Amenities"
    | "Clubhouse"
    | "Pool"
    | "Kids";
};

export const galleryItems: GalleryItem[] = [
  {
    src: "/ck-lake-side/ck-1.jpeg",
    alt: "Luxury residence exterior at sunset",
    category: "Exterior",
  },
  {
    src: "/ck-lake-side/ck-2.jpeg",
    alt: "Warm minimalist living interior",
    category: "Interior",
  },
  {
    src: "/ck-lake-side/ck-3.jpeg",
    alt: "Designer kitchen and dining",
    category: "Interior",
  },
  {
    src: "/ck-lake-side/ck-4.jpeg",
    alt: "Resort-style swimming pool",
    category: "Pool",
  },
  {
    src: "/ck-lake-side/ck-5.jpeg",
    alt: "Spa and wellness amenities",
    category: "Amenities",
  },
  {
    src: "/ck-lake-side/ck-6.jpeg",
    alt: "Grand clubhouse lounge",
    category: "Clubhouse",
  },
  {
    src: "/ck-lake-side/ck-7.jpeg",
    alt: "Kids play and family spaces",
    category: "Kids",
  },
  {
    src: "/ck-lake-side/ck-8.jpeg",
    alt: "Rooftop terrace with city views",
    category: "Amenities",
  },
  {
    src: "/ck-lake-side/ck-10.jpeg",
    alt: "Elegant bedroom suite",
    category: "Interior",
  },
];
