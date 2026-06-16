import { PageHero } from "@/components/layout/PageHero";
import { InquiryExperience } from "@/components/inquiry/InquiryExperience";

export default function InquiryPage() {
  return (
    <>
      <PageHero
        title="Inquiry"
        subtitle="Tell us about your ideal residence—our team will curate options, timelines, and a private walkthrough."
        image="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=1920&q=85"
      />
      <InquiryExperience />
    </>
  );
}
