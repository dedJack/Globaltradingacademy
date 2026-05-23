// src/app/manifest.js
// Next.js App Router web manifest — auto-served at /manifest.webmanifest

export default function manifest() {
  return {
    name: "Global Trading Academy",
    short_name: "GTA",
    description:
      "Global Trading Academy — Professional trading education covering Forex, stock markets, technical analysis, risk management, and trading psychology.",
    start_url: "/",
    display: "standalone",
    background_color: "#000000",
    theme_color: "#000000",
    orientation: "portrait-primary",
    categories: ["education", "finance", "business"],
    lang: "en",
    icons: [
      {
        src: "/logo192.png",
        sizes: "192x192",
        type: "image/png",
        purpose: "any maskable",
      },
      {
        src: "/logo192.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "any",
      },
    ],
    screenshots: [
      {
        src: "/logo192.png",
        sizes: "192x192",
        type: "image/png",
        form_factor: "wide",
      },
    ],
  };
}
