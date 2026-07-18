"use client";
import Image from "next/image";
import { motion } from "framer-motion";

export default function SplitGallery({ mousePosition, project }) {
   const { x, y } = mousePosition;
   const { bgImage, vignetteImage } = project;

   return (
      <div className="relative h-[120vh] w-full [clip-path:polygon(0_0,0_100%,100%_100%,100%_0)]">
         {/* Background Image Container */}
         <div className="relative w-full h-full">
            <Image
               src={`/gallery/${bgImage}`} // Changed from /images/gallery/
               alt="background image"
               fill
               className="object-cover w-full h-full"
               priority
            />
         </div>

         {/* Floating Mouse Vignette */}
         <motion.div
            style={{ x, y }}
            className="fixed top-0 left-0 h-[30vw] w-[25vw] rounded-[1.5vw] overflow-hidden pointer-events-none z-10"
         >
            <Image
               src={`/gallery/${vignetteImage}`} // Changed from /images/gallery/
               alt="hover vignette"
               fill
               className="object-cover w-full h-full"
            />
         </motion.div>
      </div>
   );
}
