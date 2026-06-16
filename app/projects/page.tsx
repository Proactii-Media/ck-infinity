import { PageHero } from "@/components/layout/PageHero";
import { ProjectsExplorer } from "@/components/projects/ProjectsExplorer";

export default function ProjectsPage() {
  return (
    <>
      <PageHero
        title="Our Projects"
        subtitle="A living portfolio of towers, villas-in-the-sky, and clubhouse-centered communities—each with its own character, all with CK-Infinity lineage."
        image="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=1920&q=85"
      />
      <ProjectsExplorer />
    </>
  );
}
