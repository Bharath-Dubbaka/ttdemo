"use client";

import React from "react";
import { Mail, Phone, MapPin, Clock } from "lucide-react";

export default function ContactSection() {
  return (
    <section className="relative w-full bg-[#0a0a0a] text-[#e4e2e6] py-24 px-6 md:px-12">
      {/* Background Studio Ambient Layer */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-5 grayscale pointer-events-none"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1590246814883-57f511e76523?q=80&w=1200&auto=format&fit=crop')`,
        }}
      />

      <div className="relative z-10 max-w-6xl mx-auto space-y-16">
        {/* Section Header */}
        <div className="text-center space-y-2">
          <span className="text-xs uppercase tracking-[0.25em] text-neutral-500 font-semibold">
            Get in Touch
          </span>
          <h2 className="font-serif text-4xl sm:text-5xl font-light tracking-widest text-white uppercase">
            Contact
          </h2>
        </div>

        {/* Info, Form, and Map Three-Column layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Column 1: Core Details (lg:span-4) */}
          <div className="lg:col-span-4 space-y-8">
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <MapPin className="w-5 h-5 text-neutral-500 mt-0.5 shrink-0" />
                <div>
                  <h4 className="text-xs uppercase tracking-widest text-neutral-400 font-medium mb-1">
                    Studio Location
                  </h4>
                  <p className="text-sm text-neutral-400 font-light leading-relaxed">
                    Tērbatas iela 49/51, Centra rajons,
                    <br />
                    Rīga, LV-1011, Latvia
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Phone className="w-5 h-5 text-neutral-500 mt-0.5 shrink-0" />
                <div>
                  <h4 className="text-xs uppercase tracking-widest text-neutral-400 font-medium mb-1">
                    Call Us
                  </h4>
                  <p className="text-sm text-neutral-400 font-light">
                    +371 27 843 833
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Mail className="w-5 h-5 text-neutral-500 mt-0.5 shrink-0" />
                <div>
                  <h4 className="text-xs uppercase tracking-widest text-neutral-400 font-medium mb-1">
                    Write Us
                  </h4>
                  <p className="text-sm text-neutral-400 font-light">
                    info@dbk
                  </p>
                </div>
              </div>
            </div>

            {/* Separator */}
            <div className="h-[1px] w-full bg-white/[0.05]" />

            {/* Working Hours */}
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-neutral-500" />
                <h4 className="text-xs uppercase tracking-widest text-neutral-400 font-medium">
                  Working Hours
                </h4>
              </div>
              <ul className="space-y-2 text-sm text-neutral-400 font-light">
                <li className="flex justify-between">
                  <span>Tuesday - Thursday</span> <span>11:00 - 19:00</span>
                </li>
                <li className="flex justify-between">
                  <span>Friday</span> <span>11:00 - 18:00</span>
                </li>
                <li className="flex justify-between">
                  <span>Saturday</span> <span>11:00 - 17:00</span>
                </li>
                <li className="flex justify-between text-red-400/80">
                  <span>Sunday - Monday</span> <span>Closed</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Column 2: Minimalist Input Form (lg:span-4) */}
          <form
            className="lg:col-span-4 space-y-5"
            onSubmit={(e) => e.preventDefault()}
          >
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-1">
                <label className="text-[10px] uppercase tracking-widest text-neutral-500">
                  First Name
                </label>
                <input
                  type="text"
                  className="w-full bg-white/[0.02] border border-white/10 rounded-md py-2 px-3 text-sm focus:outline-none focus:border-white/30 transition"
                />
              </div>
              <div className="space-y-1">
                <label className="text-[10px] uppercase tracking-widest text-neutral-500">
                  Last Name
                </label>
                <input
                  type="text"
                  className="w-full bg-white/[0.02] border border-white/10 rounded-md py-2 px-3 text-sm focus:outline-none focus:border-white/30 transition"
                />
              </div>
            </div>

            <div className="space-y-1">
              <label className="text-[10px] uppercase tracking-widest text-neutral-500">
                Email Address
              </label>
              <input
                type="email"
                className="w-full bg-white/[0.02] border border-white/10 rounded-md py-2 px-3 text-sm focus:outline-none focus:border-white/30 transition"
              />
            </div>

            <div className="space-y-1">
              <label className="text-[10px] uppercase tracking-widest text-neutral-500">
                Message
              </label>
              <textarea
                rows={3}
                className="w-full bg-white/[0.02] border border-white/10 rounded-md py-2 px-3 text-sm focus:outline-none focus:border-white/30 transition resize-none"
              />
            </div>

            <button
              type="submit"
              className="w-full py-3 bg-[#e4e2e6] hover:bg-white text-black text-xs uppercase tracking-widest font-semibold rounded-md transition duration-300"
            >
              Send Message
            </button>
          </form>

          {/* Column 3: Styled Interactive Map Display (lg:span-4) */}
          <div className="lg:col-span-4 w-full h-[330px] rounded-xl overflow-hidden border border-white/10 relative group">
            {/* Embedded maps iframe styled cleanly for a dark interface */}
            <iframe
              title="DBK Tattoo Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2175.760155554366!2d24.120935515783305!3d56.95287668089155!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46eecfd3db4015c7%3A0x64bf2fa7908b8b0!2zVMTTcmJhdGFzIGllbGEgNDkvNTEsIENlbnRyYSByYWpvbnMsIFLEqGdhLCBMVi0xMDExLCBMYXR2aWE!5e0!3m2!1sen!2sus!4v1689000000000!5m2!1sen!2sus"
              className="w-full h-full grayscale invert contrast-125 opacity-80 group-hover:opacity-100 transition duration-300"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
