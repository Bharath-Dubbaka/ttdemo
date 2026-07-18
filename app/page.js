import AboutSection from "@/components/AboutSection";
import BgvParalax from "@/components/bgvParalax/BgvParalax";
import ContactSection from "@/components/ContactSection";
import GsapScroll from "@/components/gsapScroll/GsapScroll";
import ParallaxSlider from "@/components/ParalaxSlider";
import PerspectiveSlide from "@/components/perspective-section-transition/PerspectiveSlide";
import TeamSection from "@/components/TeamSection";
import ZoomGallery from "@/components/ZoomGallery";
import Image from "next/image";

export default function Home() {
   return (
      <main className="bg-black">
         <AboutSection />
         <PerspectiveSlide />
         <ParallaxSlider />
         <ZoomGallery />
         <TeamSection />
         <GsapScroll />
         <BgvParalax />
         <ContactSection />
      </main>
   );
}
