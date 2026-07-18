"use client";
import SplitGallery from "./SplitGallery";
import { useSpring } from "framer-motion";

const projects = [
   { name: "Dyal Thak", bgImage: "01.jpg", vignetteImage: "02.jpg" },
   { name: "Leidinger Matthias", bgImage: "02.jpg", vignetteImage: "03.jpg" },
   { name: "Mark Rammers", bgImage: "03.jpg", vignetteImage: "04.jpg" },
   { name: "Landon Speers", bgImage: "04.jpg", vignetteImage: "01.jpg" },
];

export default function SplitVignette() {
   const spring = {
      stiffness: 150,
      damping: 15,
      mass: 0.1,
   };

   // 1. mousePosition is defined right here inside Home()
   const mousePosition = {
      x: useSpring(0, spring),
      y: useSpring(0, spring),
   };

   const mouseMove = (e) => {
      const { clientX, clientY } = e;
      const targetX = clientX - (window.innerWidth / 2) * 0.25;
      const targetY = clientY - (window.innerWidth / 2) * 0.3;
      mousePosition.x.set(targetX);
      mousePosition.y.set(targetY);
   };

   // 2. The return statement must wrap the map function so it can access mousePosition
   return (
      <main onMouseMove={mouseMove} className="relative w-full bg-black">
         {projects.map((project, i) => (
            <SplitGallery
               mousePosition={mousePosition}
               project={project}
               key={i}
            />
         ))}
      </main>
   );
}
