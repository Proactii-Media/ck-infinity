import { Hero } from "@/components/home/Hero";
import { AboutBrief } from "@/components/home/AboutBrief";
import { ProjectsShowcase } from "@/components/home/ProjectsShowcase";
import { HomeAmenities } from "@/components/home/HomeAmenities";
import { WhyChoose } from "@/components/home/WhyChoose";
import { InquirySection } from "@/components/home/InquirySection";

export default function HomePage() {
  return (
    <>
      <Hero />
      <AboutBrief />
      <ProjectsShowcase />
      <HomeAmenities />
      <WhyChoose />
      <InquirySection />
    </>
  );
}
