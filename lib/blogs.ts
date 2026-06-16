export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  readTime: string;
  image: string;
  featured?: boolean;
};

export const blogPosts: BlogPost[] = [
  {
    slug: "future-of-luxury-living",
    title: "Future of Luxury Living",
    excerpt:
      "How biophilic design, wellness architecture, and intelligent homes are shaping the next decade of premium residential experiences.",
    category: "Lifestyle",
    date: "2026-04-12",
    readTime: "6 min read",
    image:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200&q=85",
    featured: true,
  },
  {
    slug: "best-residential-amenities",
    title: "Best Residential Amenities",
    excerpt:
      "From sky lounges to curated clubhouses—what discerning buyers expect in a world-class residential address today.",
    category: "Amenities",
    date: "2026-03-28",
    readTime: "5 min read",
    image:
      "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=1200&q=85",
  },
  {
    slug: "smart-homes-india",
    title: "Smart Homes in India",
    excerpt:
      "A practical guide to automation, security, and energy intelligence for luxury apartments in Indian metros.",
    category: "Technology",
    date: "2026-03-02",
    readTime: "7 min read",
    image:
      "https://images.unsplash.com/photo-1558002038-bb4237ef46b9?w=1200&q=85",
  },
  {
    slug: "real-estate-investment-tips",
    title: "Real Estate Investment Tips",
    excerpt:
      "Location fundamentals, builder track records, and long-term wealth creation in premium residential markets.",
    category: "Investment",
    date: "2026-02-14",
    readTime: "8 min read",
    image:
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1200&q=85",
  },
];

export const blogCategories = [
  "All",
  "Lifestyle",
  "Amenities",
  "Technology",
  "Investment",
];
