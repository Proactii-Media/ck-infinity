import { PageHero } from "@/components/layout/PageHero";
import { BlogsExplorer } from "@/components/blogs/BlogsExplorer";

export default function BlogsPage() {
  return (
    <>
      <PageHero
        title="Journal"
        subtitle="Perspectives on luxury living, investment wisdom, and the craft of building communities that endure."
        image="https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=1920&q=85"
      />
      <BlogsExplorer />
    </>
  );
}
