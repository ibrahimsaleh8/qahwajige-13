import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "قهوجين الرياض - خدمات قهوجين مميزة للمناسبات",
    short_name: "قهوجين الرياض",
    description:
      "نوفر أفضل القهوجين في الرياض لتقديم القهوة والمشروبات في مناسباتكم وفعالياتكم بكل احترافية وجودة عالية.",
    start_url: "/",
    scope: "/",
    display: "standalone",
    background_color: "#F5F1EA",
    theme_color: "#5A2D2D",
    lang: "ar",
    dir: "rtl",
    icons: [
      {
        src: "/icons/icon-192x192.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "/icons/icon-512x512.png",
        sizes: "512x512",
        type: "image/png",
      },
      {
        src: "/icons/icon-512x512-maskable.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "maskable",
      },
    ],
  };
}
