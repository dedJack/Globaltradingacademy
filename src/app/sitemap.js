// src/app/sitemap.js
// Next.js App Router dynamic sitemap — auto-served at /sitemap.xml

const BASE_URL = "https://globaltradingacademy.in";

export default function sitemap() {
  const now = new Date();

  // Static routes with priority + change frequency tuned per page importance
  const staticRoutes = [
    {
      url: BASE_URL,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 1.0,
    },
    {
      url: `${BASE_URL}/about`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/services`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/resources`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.85,
    },
    {
      url: `${BASE_URL}/quickLinks`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${BASE_URL}/contact`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.75,
    },
    {
      url: `${BASE_URL}/Enroll`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.95,
    },
  ];

  return staticRoutes;
}
