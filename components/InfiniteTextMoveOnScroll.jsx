"use client";
import Image from "next/image";
import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

export default function ParallaxSlider() {
   const firstText = useRef(null);
   const secondText = useRef(null);
   const slider = useRef(null);

   const state = useRef({ xPercent: 0, direction: -1 });

   useEffect(() => {
      gsap.registerPlugin(ScrollTrigger);

      const tl = gsap.to(slider.current, {
         scrollTrigger: {
            trigger: document.documentElement,
            scrub: 0.55,
            start: 0,
            end: window.innerHeight,
            onUpdate: (e) => (state.current.direction = e.direction * -3),
         },
         x: "-500px",
      });

      let animationFrameId;

      const animate = () => {
         if (state.current.xPercent < -100) {
            state.current.xPercent = 0;
         } else if (state.current.xPercent > 0) {
            state.current.xPercent = -100;
         }

         gsap.set(firstText.current, { xPercent: state.current.xPercent });
         gsap.set(secondText.current, { xPercent: state.current.xPercent });

         state.current.xPercent += 0.1 * state.current.direction;
         animationFrameId = requestAnimationFrame(animate);
      };

      animationFrameId = requestAnimationFrame(animate);

      return () => {
         cancelAnimationFrame(animationFrameId);
         tl.scrollTrigger?.kill();
         tl.kill();
      };
   }, []);

   return (
      /* Changed mb-screen to h-screen to match margin-bottom: 100vh */
      <main className="relative flex h-screen  overflow-hidden w-full font-body">
         <Image
            src="/gallery/03.jpg"
            fill
            className="object-cover"
            alt="background"
            priority
         />

         {/* Container height and responsive vertical placement */}
         <div className="absolute top-[calc(100vh-180px)] sm:top-[calc(100vh-350px)] w-full">
            <div ref={slider} className="relative whitespace-nowrap">
               {/* <p
                  ref={firstText}
                  className="relative m-0 text-white text-[12vw] sm:text-[130px] font-medium pr-6 sm:pr-[50px] leading-none uppercase"
               >
                  Freelance - Developer -
               </p> */}
               <p
                  ref={secondText}
                  className="absolute left-full top-0 m-0 text-white text-[10vw] sm:text-[130px] font-medium pr-6 sm:pr-[50px] leading-none uppercase"
               >
                  Developer - Developer
               </p>
            </div>
         </div>
      </main>
   );
}
