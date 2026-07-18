import React from "react";
import Image from "next/image";
import Background from "../../public/gallery/02.jpg";
import { useScroll, useTransform, motion } from "framer-motion";
import { useRef } from "react";

export default function Intro() {
   const container = useRef(null);
   const { scrollYProgress } = useScroll({
      target: container,
      offset: ["start start", "end start"],
   });

   // Parallax effect on the image moving down
   const y = useTransform(scrollYProgress, [0, 1], ["0vh", "80vh"]);
   return (
      <div ref={container} className="relative h-screen overflow-hidden z-0">
         <motion.div style={{ y }} className="relative h-full">
            <Image
               src={Background}
               fill
               alt="image"
               style={{ objectFit: "cover" }}
            />
         </motion.div>
      </div>
   );
}
