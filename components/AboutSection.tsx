import { AboutSectionData, WhyUsFeatureData } from "@/lib/responseType";
import { Award, Clock, Shield, Sparkles, LucideIcon } from "lucide-react";

const iconMap: Record<string, LucideIcon> = {
  Award,
  Clock,
  Shield,
  Sparkles,
};

export default function AboutSection({
  description1,
  label,
  title,
  features,
  whyUsDescription,
}: AboutSectionData & {
  features?: WhyUsFeatureData[];
  whyUsDescription: string;
}) {
  return (
    <section id="about" className="relative overflow-hidden py-24 bg-second-bg">
      {/* Decorative background */}
      <div className="absolute inset-0 -z-10 opacity-30">
        <div className="absolute top-20 right-10 w-40 h-40 bg-main-color/20 rounded-full blur-3xl" />
        <div className="absolute bottom-10 left-10 w-52 h-52 bg-main-color/10 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 md:px-8 flex text-center items-center gap-14 justify-center">
        {/* Content */}
        <div className="text-center w-full flex-col items-center justify-center">
          {label && (
            <span className="inline-block mx-auto mb-4 px-4 py-1 rounded-full text-sm font-bold text-white bg-main-color">
              {label}
            </span>
          )}

          <h2 className="text-3xl md:text-4xl  font-extrabold text-black mb-6 leading-tight">
            {title}
          </h2>

          <p className="text-black/80 text-lg mx-auto leading-relaxed mb-4 max-w-xl">
            {description1}
          </p>

          <p className="text-black/70 text-lg mx-auto leading-relaxed mb-12 max-w-xl text-center">
            {whyUsDescription}
          </p>

          {/* Features */}
          {features && features.length > 0 && (
            <div className="grid lg:grid-cols-3 md:grid-cols-2  gap-6 w-full">
              {features.map((item) => {
                const Icon = iconMap[item.icon as keyof typeof iconMap];

                return (
                  <div
                    key={item.title}
                    className="group bg-white border border-black/5 rounded-2xl p-6 shadow-sm hover:shadow-xl transition-all duration-300">
                    <div className="mb-4 flex h-12 w-12 items-center justify-center mx-auto rounded-xl bg-main-color/15 group-hover:bg-main-color/25 transition-colors">
                      {Icon && (
                        <Icon className="w-6 h-6 text-main-color group-hover:scale-110 transition-transform" />
                      )}
                    </div>

                    <h3 className="text-xl font-bold text-black mb-1">
                      {item.title}
                    </h3>

                    <p className="text-sm text-black/70 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </div>

      <svg
        className="absolute bottom-10 left-10 w-24 h-24 text-main-color opacity-10 rotate-45 -z-10"
        viewBox="0 0 100 100">
        <path d="M50 0 L100 50 L50 100 L0 50 Z" />
      </svg>
    </section>
  );
}
