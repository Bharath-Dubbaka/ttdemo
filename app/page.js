import AboutSection from "@/components/AboutSection";
import BgvParalax from "@/components/bgvParalax/BgvParalax";
import ContactSection from "@/components/ContactSection";
import GsapScroll from "@/components/gsapScroll/GsapScroll";
import ParallaxSlider from "@/components/ParalaxSlider";
import PerspectiveSlide from "@/components/perspective-section-transition/PerspectiveSlide";
import TeamSection from "@/components/TeamSection";
import ZoomGallery from "@/components/ZoomGallery";
import InfiniteTextMoveOnScroll from "@/components/InfiniteTextMoveOnScroll";
import Image from "next/image";
import ParalaxSlideGallery from "@/components/ParalaxSlideGallery";

export default function Home() {
   return (
      <main className="bg-black">
         <AboutSection />

         {/* Errors causing heavy load on runtime */}
         {/* <InfiniteTextMoveOnScroll /> */}

         <ParalaxSlideGallery />
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
