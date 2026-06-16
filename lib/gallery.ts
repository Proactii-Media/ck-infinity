export type GalleryItem = {
  src: string;
  alt: string;
  category: "Exterior" | "Interior" | "Amenities" | "Clubhouse" | "Pool" | "Kids";
};

export const galleryItems: GalleryItem[] = [
  {
    src: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=900&q=85",
    alt: "Luxury residence exterior at sunset",
    category: "Exterior",
  },
  {
    src: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=900&q=85",
    alt: "Warm minimalist living interior",
    category: "Interior",
  },
  {
    src: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=900&q=85",
    alt: "Designer kitchen and dining",
    category: "Interior",
  },
  {
    src: "https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?w=900&q=85",
    alt: "Resort-style swimming pool",
    category: "Pool",
  },
  {
    src: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=900&q=85",
    alt: "Spa and wellness amenities",
    category: "Amenities",
  },
  {
    src: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=900&q=85",
    alt: "Grand clubhouse lounge",
    category: "Clubhouse",
  },
  {
    src: "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=900&q=85",
    alt: "Kids play and family spaces",
    category: "Kids",
  },
  {
    src: "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?w=900&q=85",
    alt: "Rooftop terrace with city views",
    category: "Amenities",
  },
  {
    src: "https://images.unsplash.com/photo-1600573472550-8090b5e0745e?w=900&q=85",
    alt: "Elegant bedroom suite",
    category: "Interior",
  },
];
