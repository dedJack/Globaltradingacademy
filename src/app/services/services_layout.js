// src/app/services/layout.js
export const metadata = {
  title: "Trading Courses & Services — Global Trading Academy",
  description:
    "Explore trading courses at Global Trading Academy: Forex trading, technical analysis, risk management, live trading sessions, portfolio management, and market psychology.",
  keywords: [
    "trading courses India",
    "Forex trading course",
    "technical analysis course",
    "risk management trading",
    "live trading sessions",
    "portfolio management course",
    "market psychology",
    "beginner trading course",
    "advanced trading course",
  ],
  alternates: { canonical: "https://globaltradingacademy.in/services" },
  openGraph: {
    title: "Trading Courses & Services — Global Trading Academy",
    description:
      "From beginner trading to advanced technical analysis — find the right course at Global Trading Academy.",
    url: "https://globaltradingacademy.in/services",
  },
};

export default function ServicesLayout({ children }) {
  return children;
}
