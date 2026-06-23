import { Hero } from "@/components/home/Hero";
import { AboutBrief } from "@/components/home/AboutBrief";
import { ProjectsShowcase } from "@/components/home/ProjectsShowcase";
import { Amenities } from "@/components/home/Amenities";
import { WhyChoose } from "@/components/home/WhyChoose";
import { Gallery } from "@/components/home/Gallery";
import { InquirySection } from "@/components/home/InquirySection";

export default function HomePage() {
  return (
    <>
      <Hero />
      <AboutBrief />
      <ProjectsShowcase />
      <Amenities />
      <WhyChoose />
      <Gallery />
      <InquirySection />
    </>
  );
}
