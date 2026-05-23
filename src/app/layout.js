// src/app/layout.js
import Navbar from "../components/Navbar";
import NoteState from "../context/AuthContext";
import "./globals.css";

const BASE_URL = "https://globaltradingacademy.in";

export const metadata = {
  // ── Core ────────────────────────────────────────────────────────────────
  metadataBase: new URL(BASE_URL),
  title: {
    default: "Global Trading Academy — Professional Trading Education in India",
    template: "%s | Global Trading Academy",
  },
  description:
    "Global Trading Academy offers professional trading courses in Forex, stock markets, technical analysis, risk management, and trading psychology. Founded by Shubham Choudhary with 5+ years of market experience.",
  keywords: [
    "Global Trading Academy",
    "trading academy India",
    "online trading courses",
    "Forex trading course",
    "stock market education",
    "technical analysis course",
    "trading for beginners",
    "risk management trading",
    "trading psychology",
    "Shubham Choudhary trading",
    "financial education India",
    "learn trading online",
    "certified trading program",
    "live trading sessions",
    "portfolio management course",
  ],
  authors: [{ name: "Shubham Choudhary", url: BASE_URL }],
  creator: "Global Trading Academy",
  publisher: "Global Trading Academy",
  category: "Education",
  classification: "Financial Education",

  // ── Robots ───────────────────────────────────────────────────────────────
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  // ── Icons ────────────────────────────────────────────────────────────────
  icons: {
    icon: [
      { url: "/logo192.png", sizes: "192x192", type: "image/png" },
    ],
    apple: [
      { url: "/logo192.png", sizes: "192x192", type: "image/png" },
    ],
    shortcut: "/logo192.png",
  },

  // ── Open Graph ───────────────────────────────────────────────────────────
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: BASE_URL,
    siteName: "Global Trading Academy",
    title: "Global Trading Academy — Professional Trading Education in India",
    description:
      "Master trading with expert guidance from Global Trading Academy. Courses in Forex, technical analysis, risk management, and more. Enroll today.",
    images: [
      {
        url: "/logo192.png",
        width: 192,
        height: 192,
        alt: "Global Trading Academy — Professional Trading Education",
        type: "image/png",
      },
    ],
  },

  // ── Twitter / X ──────────────────────────────────────────────────────────
  twitter: {
    card: "summary_large_image",
    site: "@GlobalTradingAcademy",
    creator: "@GlobalTradingAcademy",
    title: "Global Trading Academy — Professional Trading Education in India",
    description:
      "Master trading with expert guidance from Global Trading Academy. Courses in Forex, technical analysis, risk management, and more.",
    images: ["/logo192.png"],
  },

  // ── Canonical / Alternates ───────────────────────────────────────────────
  alternates: {
    canonical: BASE_URL,
    languages: {
      "en-IN": BASE_URL,
    },
  },

  // ── Verification (add your real codes here) ──────────────────────────────
  verification: {
    google: "PzEAQsMz1ciC8nYkqkcc-u61Irje_xRwqb2uuFzQHOQ",
    // bing: "REPLACE_WITH_BING_WEBMASTER_CODE",
  },

  // ── App / theme ──────────────────────────────────────────────────────────
  applicationName: "Global Trading Academy",
  generator: "Next.js",
  referrer: "origin-when-cross-origin",
  themeColor: [
    { media: "(prefers-color-scheme: dark)", color: "#000000" },
    { media: "(prefers-color-scheme: light)", color: "#000000" },
  ],
  colorScheme: "dark",
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 5,
  },
};

// ── JSON-LD Structured Data ──────────────────────────────────────────────────
const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "EducationalOrganization",
      "@id": `${BASE_URL}/#organization`,
      name: "Global Trading Academy",
      url: BASE_URL,
      logo: {
        "@type": "ImageObject",
        url: `${BASE_URL}/logo192.png`,
        width: 192,
        height: 192,
      },
      description:
        "Global Trading Academy is a premier institute providing professional trading education in Forex, stock markets, technical analysis, risk management, and trading psychology.",
      founder: {
        "@type": "Person",
        name: "Shubham Choudhary",
        jobTitle: "Founder & Head Trader",
        description: "Seasoned trader with 5+ years of hands-on experience in financial markets",
      },
      contactPoint: {
        "@type": "ContactPoint",
        contactType: "customer support",
        email: "info@globaltradingacademy.in",
        availableLanguage: ["English", "Hindi"],
      },
      sameAs: [
        // Add your actual social URLs here
        // "https://www.instagram.com/globaltradingacademy",
        // "https://www.youtube.com/@globaltradingacademy",
        // "https://t.me/globaltradingacademy",
      ],
    },
    {
      "@type": "WebSite",
      "@id": `${BASE_URL}/#website`,
      url: BASE_URL,
      name: "Global Trading Academy",
      description: "Professional trading education platform",
      publisher: { "@id": `${BASE_URL}/#organization` },
      potentialAction: {
        "@type": "SearchAction",
        target: { "@type": "EntryPoint", urlTemplate: `${BASE_URL}/resources?q={search_term_string}` },
        "query-input": "required name=search_term_string",
      },
    },
    {
      "@type": "Course",
      name: "Professional Trading Program",
      description:
        "Comprehensive trading education covering Forex, technical analysis, risk management, live trading sessions, and market psychology.",
      provider: { "@id": `${BASE_URL}/#organization` },
      url: `${BASE_URL}/services`,
      educationalLevel: "Beginner to Advanced",
      courseMode: ["online", "onsite"],
      teaches: [
        "Forex Trading",
        "Technical Analysis",
        "Risk Management",
        "Trading Psychology",
        "Portfolio Management",
        "Live Trading",
      ],
      inLanguage: ["en", "hi"],
    },
    {
      "@type": "BreadcrumbList",
      "@id": `${BASE_URL}/#breadcrumbs`,
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: BASE_URL },
        { "@type": "ListItem", position: 2, name: "About", item: `${BASE_URL}/about` },
        { "@type": "ListItem", position: 3, name: "Services", item: `${BASE_URL}/services` },
        { "@type": "ListItem", position: 4, name: "Resources", item: `${BASE_URL}/resources` },
        { "@type": "ListItem", position: 5, name: "Contact", item: `${BASE_URL}/contact` },
        { "@type": "ListItem", position: 6, name: "Enroll", item: `${BASE_URL}/Enroll` },
      ],
    },
  ],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" dir="ltr">
      <head>
        {/* JSON-LD Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {/* Preconnect for performance (helps SEO via Core Web Vitals) */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="dns-prefetch" href="https://fonts.googleapis.com" />
      </head>
      <body>
        <NoteState>
          <Navbar />
          {children}
        </NoteState>
      </body>
    </html>
  );
}
