"use client";

import React from "react";

const teamMembers = [
   {
      name: "Brat DBK",
      role: "Founder & Lead Artist",
      img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=400&auto=format&fit=crop",
   },
   {
      name: "Dr. Gauss",
      role: "Neo-Traditional",
      img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=400&auto=format&fit=crop",
   },
   {
      name: "Germanis G",
      role: "Blackwork specialist",
      img: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=400&auto=format&fit=crop",
   },
   {
      name: "Katrina s.",
      role: "Fine-Line & Dotwork",
      img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=400&auto=format&fit=crop",
   },
   {
      name: "Nils",
      role: "Realism Expert",
      img: "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?q=80&w=400&auto=format&fit=crop",
   },
];

export default function TeamSection() {
   return (
      <section className="relative w-full bg-black text-[#e4e2e6] py-24 px-6 md:px-12 border-b border-white/[0.05]">
         <div className="max-w-6xl mx-auto space-y-16">
            {/* Section Title */}
            <div className="text-center space-y-2">
               <span className="text-xs uppercase tracking-[0.25em] text-neutral-500 font-semibold">
                  The Masters
               </span>
               <h2 className="font-serif text-4xl sm:text-5xl font-light tracking-widest text-white uppercase">
                  Meet the Team
               </h2>
            </div>

            {/* 5-Column Artist Grid */}
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4 lg:gap-6">
               {teamMembers.map((member, idx) => (
                  <div
                     key={idx}
                     className="group flex flex-col items-center space-y-4"
                  >
                     {/* Portrait Container */}
                     <div className="relative aspect-[3/4] w-full overflow-hidden rounded-lg bg-neutral-900 border border-white/10">
                        <img
                           src={member.img}
                           alt={member.name}
                           className="w-full h-full object-cover grayscale contrast-[1.15] brightness-90 transition duration-500 group-hover:scale-105 group-hover:brightness-100"
                        />

                        {/* Dynamic "Shutter Blind" Shadow Overlay matching the reference image */}
                        <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0)_80%,rgba(0,0,0,0.85)_100%)] pointer-events-none" />
                        <div className="absolute inset-0 opacity-25 bg-[linear-gradient(45deg,transparent_45%,#000_50%,transparent_55%)] bg-[length:24px_24px] pointer-events-none mix-blend-multiply" />
                     </div>

                     {/* Identity Detail */}
                     <div className="text-center">
                        <h3 className="text-sm font-serif tracking-widest uppercase text-white font-medium">
                           {member.name}
                        </h3>
                        <p className="text-[10px] uppercase tracking-widest text-neutral-500 mt-1">
                           {member.role}
                        </p>
                     </div>
                  </div>
               ))}
            </div>
         </div>
      </section>
   );
}
