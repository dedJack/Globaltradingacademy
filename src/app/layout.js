// app/layout.js
import Navbar from "../components/Navbar";
import NoteState from "../context/AuthContext";
import "./globals.css";

export const metadata = {
  title: "Global Trading Academy - Latest Market News & Trading Courses",
  description:
    "Global Trading Academy: Your go-to platform for the latest market news, trading courses, and investment strategies.",
  keywords:
    "trading academy, online trading courses, stock market, Forex, investment strategies, financial education",
  authors: [{ name: "Global Trading Academy" }],
  themeColor: "#000000",
  icons: {
    icon: "/logo192.png",
    apple: "/logo192.png",
  },
  openGraph: {
    title: "Global Trading Academy - Latest Market News & Trading Courses",
    description:
      "Stay updated with the latest market news and enhance your trading skills at Global Trading Academy.",
    url: "https://globaltradingacademy.in",
    type: "website",
    images: [
      {
        url: "/logo192.png",
        width: 192,
        height: 192,
        alt: "Global Trading Academy Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Global Trading Academy - Latest Market News & Trading Courses",
    description:
      "Stay updated with the latest market news and enhance your trading skills at Global Trading Academy.",
    images: ["/logo192.png"],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <NoteState>
          <Navbar />
          {children}
        </NoteState>
      </body>
    </html>
  );
}
