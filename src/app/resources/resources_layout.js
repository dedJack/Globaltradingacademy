// ── src/app/resources/layout.js ──────────────────────────────
export const metadata = {
  title: "Trading Resources & Broker Links — Global Trading Academy",
  description:
    "Access curated trading resources, broker comparisons, market news, and educational tools at Global Trading Academy to sharpen your trading edge.",
  keywords: [
    "trading resources",
    "best forex brokers India",
    "trading tools",
    "market news",
    "trading educational resources",
    "broker comparison",
  ],
  alternates: { canonical: "https://globaltradingacademy.in/resources" },
  openGraph: {
    title: "Trading Resources & Broker Links — Global Trading Academy",
    description:
      "Curated trading resources, broker links, and market tools for serious traders at Global Trading Academy.",
    url: "https://globaltradingacademy.in/resources",
  },
};

export default function ResourcesLayout({ children }) {
  return children;
}
