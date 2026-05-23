// src/app/robots.js
// Next.js App Router robots — auto-served at /robots.txt

const BASE_URL = "https://globaltradingacademy.in";

export default function robots() {
  return {
    rules: [
      {
        // Allow all crawlers on public pages
        userAgent: "*",
        allow: ["/", "/about", "/services", "/resources", "/quickLinks", "/contact", "/Enroll"],
        disallow: [
          "/api/",         // never expose API routes
          "/login",        // no value indexing auth pages
          "/signup",
          "/logout",
          "/_next/",       // Next.js internals
          "/private/",
        ],
      },
      {
        // Block AI training scrapers
        userAgent: ["GPTBot", "ChatGPT-User", "CCBot", "anthropic-ai", "Claude-Web", "Diffbot"],
        disallow: ["/"],
      },
    ],
    sitemap: `${BASE_URL}/sitemap.xml`,
    host: BASE_URL,
  };
}
