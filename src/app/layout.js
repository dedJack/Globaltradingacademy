"use client";
import Navbar from "../components/Navbar";
import NoteState from "../context/AuthContext";
import "./globals.css"

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <NoteState>
        <Navbar/>  
        {children}
          </NoteState>      
      </body>
    </html>
  );
}
