import AboutSection from "@/components/AboutSection";
import ContactSection from "@/components/ContactSection";
import GsapScroll from "@/components/gsapScroll/GsapScroll";
import ParallaxSlider from "@/components/ParalaxSlider";
import TeamSection from "@/components/TeamSection";
import ZoomGallery from "@/components/ZoomGallery";
import Image from "next/image";

export default function Home() {
  return (
    <main className="bg-black">
      <AboutSection />
      <ParallaxSlider />
      <ZoomGallery />
      <TeamSection />
      <GsapScroll />
      <ContactSection />
    </main>
  );
}
