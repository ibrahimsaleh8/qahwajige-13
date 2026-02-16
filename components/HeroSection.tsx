import { HeroSectionData } from "@/lib/responseType";
import HeroLinks from "./AnimatedComponents/HeroLinks";
import Image from "next/image";

export default function HeroSection({
  headline,
  subheadline,
  whatsApp,
  aboutImage,
}: HeroSectionData & { aboutImage: string }) {
  return (
    <section
      id="home"
      className="relative w-full overflow-hidden pt-10 pb-20 md:pt-16 md:pb-32 bg-[hsl(var(--color-main-background))]">
      {/* Decorative Background Shapes */}
      <div className="absolute inset-0 -z-10 opacity-30">
        <svg
          className="absolute top-20 left-10 w-24 h-24 text-main-color"
          fill="currentColor"
          viewBox="0 0 100 100">
          <circle cx="50" cy="50" r="40" />
        </svg>

        <svg
          className="absolute bottom-20 right-20 w-32 h-32 text-main-color"
          fill="currentColor"
          viewBox="0 0 100 100">
          <rect x="10" y="10" width="80" height="80" rx="20" />
        </svg>
      </div>

      <div className="container mx-auto px-4 md:px-8 grid lg:grid-cols-2 gap-12 items-center my-20">
        {/* Content */}
        <div className="relative z-10 order-2 lg:order-1 text-right">
          <span className="inline-block px-4 py-1 bg-main-color/5 text-main-color rounded-full text-sm font-bold mb-6">
            ✨ فخامة الضيافة العربية
          </span>

          <h1 className="text-4xl md:text-6xl font-extrabold leading-[1.2] mb-6 text-black">
            {headline}
          </h1>

          <p className="text-lg md:text-xl text-black/80 mb-10 leading-relaxed max-w-lg">
            {subheadline}
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <HeroLinks whatsApp={whatsApp} />
          </div>
        </div>

        {/* Image */}
        <div className="relative order-1 lg:order-2 flex justify-center lg:justify-end">
          {/* Blob */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-87.5 h-87.5 md:w-125 md:h-125 bg-main-color/10 rounded-full blur-3xl -z-10" />

          <Image
            width={1000}
            height={1000}
            src={aboutImage}
            alt="Saudi Hospitality"
            className="relative z-10 w-[85%] md:w-[80%] rounded-[2.5rem] shadow-2xl rotate-2 hover:rotate-0 transition-transform duration-700 border-8 border-white object-cover aspect-4/5"
          />

          {/* Experience Badge */}
          <div className="absolute -bottom-6 -right-6 md:bottom-3 md:-right-3 bg-white p-4 rounded-2xl shadow-lg flex items-center gap-3 z-20 animate-bounce animation-duration-[3s]">
            <div className="w-12 h-12 bg-main-color/20 rounded-full flex items-center justify-center text-2xl">
              ☕
            </div>
            <div>
              <p className="text-xs text-black/60 font-bold">خبرة أكثر من</p>
              <p className="text-black font-bold text-lg">١٠ سنوات</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
