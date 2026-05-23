// src/app/about/layout.js
export const metadata = {
  title: "About Global Trading Academy — Founded by Shubham Choudhary",
  description:
    "Learn about Global Trading Academy, founded by Shubham Choudhary — a seasoned trader with 5+ years of financial market experience. Our mission is to empower traders at every level.",
  keywords: [
    "about Global Trading Academy",
    "Shubham Choudhary trader",
    "trading academy India",
    "trading education institute",
    "learn trading from experts",
  ],
  alternates: { canonical: "https://globaltradingacademy.in/about" },
  openGraph: {
    title: "About Global Trading Academy — Founded by Shubham Choudhary",
    description:
      "Global Trading Academy was founded by Shubham Choudhary with a vision to make professional trading education accessible to everyone in India.",
    url: "https://globaltradingacademy.in/about",
  },
};

export default function AboutLayout({ children }) {
  return children;
}
