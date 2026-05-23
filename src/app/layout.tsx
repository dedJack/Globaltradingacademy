'use client'
import './globals.css'
import Navbar from '../components/Navbar'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <meta name="google-site-verification" content="PzEAQsMz1ciC8nYkqkcc-u61Irje_xRwqb2uuFzQHOQ" />
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  )
}
