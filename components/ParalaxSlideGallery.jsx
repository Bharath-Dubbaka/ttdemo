"use client";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { useTransform, useScroll, motion } from "framer-motion";

const images = [
   "04.jpg",
   "03.jpg",
   "02.jpg",
   "01.jpg",
   "new_f.png",
   "03.jpg",
   "02.jpg",
   "01.jpg",
   "04.jpg",
   "02.jpg",
   "03.jpg",
   "04.jpg",
];

export default function ParalaxSlideGallery() {
   const gallery = useRef(null);
   const [dimension, setDimension] = useState({ width: 0, height: 0 });

   const { scrollYProgress } = useScroll({
      target: gallery,
      offset: ["start end", "end start"],
   });

   const { height } = dimension;

   // Parallax calculations matching your original movement ratios
   const y = useTransform(scrollYProgress, [0, 1], [0, height * 2]);
   const y2 = useTransform(scrollYProgress, [0, 1], [0, height * 3.3]);
   const y3 = useTransform(scrollYProgress, [0, 1], [0, height * 1.25]);
   const y4 = useTransform(scrollYProgress, [0, 1], [0, height * 3]);

   useEffect(() => {
      const resize = () => {
         setDimension({ width: window.innerWidth, height: window.innerHeight });
      };

      window.addEventListener("resize", resize);
      resize();

      return () => {
         window.removeEventListener("resize", resize);
      };
   }, []);

   return (
      <main className="w-full bg-black">
         {/* Spacer */}
         {/* <div className="h-screen" /> */}

         {/* Gallery Wrapper */}
         <div
            ref={gallery}
            className="relative flex h-[175vh] gap-[2vw] p-[2vw] overflow-hidden bg-[#2d2d2d] box-border"
         >
            <Column
               images={[images[0], images[1], images[2]]}
               y={y}
               topClass="-top-[45%]"
            />
            <Column
               images={[images[3], images[4], images[5]]}
               y={y2}
               topClass="-top-[95%]"
            />
            <Column
               images={[images[6], images[7], images[8]]}
               y={y3}
               topClass="-top-[45%]"
            />
            <Column
               images={[images[9], images[10], images[11]]}
               y={y4}
               topClass="-top-[75%]"
            />
         </div>

         {/* Spacer */}
         {/* <div className="h-screen" /> */}
      </main>
   );
}

const Column = ({ images, y, topClass }) => {
   return (
      <motion.div
         style={{ y }}
         className={`relative flex flex-col h-full w-1/4 min-w-[250px] gap-[2vw] ${topClass}`}
      >
         {images.map((src, i) => (
            <div
               key={i}
               className="relative w-full h-full overflow-hidden rounded-[1vw]"
            >
               <Image
                  src={`/gallery/${src}`}
                  alt="gallery image"
                  fill
                  className="object-cover"
                  sizes="(max-w-768px) 250px, 25vw"
               />
            </div>
         ))}
      </motion.div>
   );
};
