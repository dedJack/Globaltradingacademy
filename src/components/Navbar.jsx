"use client";
import { NoteContext } from "../context/AuthContext";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import React, { useContext, useState } from "react";

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const router = useRouter();
  const pathname = usePathname();

  const { user, isLoggedIn, LogoutUser } = useContext(NoteContext);

  const navigationItems = [
    { id: "/", label: "Home", route: "/" },
    { id: "about", label: "About", route: "/about" },
    { id: "connect", label: "Connect", route: "/quickLinks" },
    { id: "services", label: "Services", route: "/services" },
    { id: "resources", label: "Resources", route: "/resources" },
    { id: "contact", label: "Contact", route: "/contact" },
  ];

  const handleNavigation = (item) => {
    setIsMobileMenuOpen(false);
    router.push(item.route);
  };

  const handleLogout = () => {
    setIsMobileMenuOpen(false);
    LogoutUser();
  };

  const handleLogin = () => {
    setIsMobileMenuOpen(false);
    router.push("/login");
  };

  return (
    <div className="text-white">
      <nav className="fixed top-0 w-full z-50 bg-black/50 backdrop-blur-md shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex-shrink-0">
              <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                GlobalTradingAcademy
              </h1>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                {navigationItems.map((item) => {
                  const isActive = pathname === item.route;
                  return (
                    <button
                      key={item.id}
                      onClick={() => handleNavigation(item)}
                      className="relative px-4 py-2 rounded-lg text-sm font-medium transition-all duration-500 ease-out group overflow-hidden"
                    >
                      {/* Background Layer */}
                      <span
                        className={`absolute inset-0 rounded-lg transition-all duration-500 ease-out ${
                          isActive
                            ? "bg-gradient-to-r from-blue-600/30 to-purple-600/30 opacity-100 scale-100"
                            : "bg-blue-600/0 opacity-0 scale-95 group-hover:bg-blue-600/10 group-hover:opacity-100 group-hover:scale-100"
                        }`}
                      />

                      {/* Bottom Border */}
                      <span
                        className={`absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-yellow-400 to-yellow-500 transition-all duration-500 ease-out ${
                          isActive
                            ? "opacity-100 scale-x-100"
                            : "opacity-0 scale-x-0 group-hover:opacity-50 group-hover:scale-x-100"
                        }`}
                      />

                      {/* Text */}
                      <span
                        className={`relative z-10 transition-all duration-500 ${
                          isActive
                            ? "text-blue-400"
                            : "text-gray-300 group-hover:text-blue-400"
                        }`}
                      >
                        {item.label}
                      </span>

                      {/* Shine Effect on Hover */}
                      <span className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                        <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
                      </span>
                    </button>
                  );
                })}

                {/* Auth Button */}
                {isLoggedIn ? (
                  <button
                    onClick={handleLogout}
                    className="relative px-4 py-2 rounded-lg text-sm font-medium transition-all duration-500 ease-out group overflow-hidden"
                  >
                    <span className="absolute inset-0 rounded-lg bg-blue-600/0 opacity-0 scale-95 group-hover:bg-red-600/10 group-hover:opacity-100 group-hover:scale-100 transition-all duration-500 ease-out" />
                    <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-red-400 to-red-500 opacity-0 scale-x-0 group-hover:opacity-50 group-hover:scale-x-100 transition-all duration-500 ease-out" />
                    <span className="relative z-10 text-gray-300 group-hover:text-red-400 transition-all duration-500">
                      Logout
                    </span>
                    <span className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                      <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
                    </span>
                  </button>
                ) : (
                  <button
                    onClick={handleLogin}
                    className="relative px-4 py-2 rounded-lg text-sm font-medium transition-all duration-500 ease-out group overflow-hidden"
                  >
                    <span className="absolute inset-0 rounded-lg bg-blue-600/0 opacity-0 scale-95 group-hover:bg-blue-600/10 group-hover:opacity-100 group-hover:scale-100 transition-all duration-500 ease-out" />
                    <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-yellow-400 to-yellow-500 opacity-0 scale-x-0 group-hover:opacity-50 group-hover:scale-x-100 transition-all duration-500 ease-out" />
                    <span className="relative z-10 text-gray-300 group-hover:text-blue-400 transition-all duration-500">
                      Login
                    </span>
                    <span className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                      <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
                    </span>
                  </button>
                )}
              </div>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 transition-all duration-300"
              >
                {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div
          className={`md:hidden transition-all duration-500 ease-in-out ${
            isMobileMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
          } overflow-hidden bg-gray-800/95 backdrop-blur-md`}
        >
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navigationItems.map((item, index) => {
              const isActive = pathname === item.route;
              return (
                <button
                  key={item.id}
                  onClick={() => handleNavigation(item)}
                  style={{
                    transitionDelay: isMobileMenuOpen ? `${index * 50}ms` : "0ms",
                  }}
                  className="relative block px-4 py-3 rounded-lg text-base font-medium w-full text-left transition-all duration-500 ease-out group overflow-hidden"
                >
                  {/* Background Layer */}
                  <span
                    className={`absolute inset-0 rounded-lg transition-all duration-500 ease-out ${
                      isActive
                        ? "bg-gradient-to-r from-blue-600/30 to-purple-600/30 opacity-100 scale-100"
                        : "bg-blue-600/0 opacity-0 scale-95 group-hover:bg-blue-600/10 group-hover:opacity-100 group-hover:scale-100"
                    }`}
                  />

                  {/* Left Border */}
                  <span
                    className={`absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-yellow-400 to-yellow-500 transition-all duration-500 ease-out ${
                      isActive
                        ? "opacity-100 scale-y-100"
                        : "opacity-0 scale-y-0 group-hover:opacity-50 group-hover:scale-y-100"
                    }`}
                  />

                  {/* Text */}
                  <span
                    className={`relative z-10 transition-all duration-500 ${
                      isActive
                        ? "text-blue-400 translate-x-1"
                        : "text-gray-300 group-hover:text-blue-400 group-hover:translate-x-1"
                    }`}
                  >
                    {item.label}
                  </span>
                </button>
              );
            })}

            {/* Mobile Auth Button */}
            {isLoggedIn ? (
              <button
                onClick={handleLogout}
                style={{
                  transitionDelay: isMobileMenuOpen
                    ? `${navigationItems.length * 50}ms`
                    : "0ms",
                }}
                className="relative block px-4 py-3 rounded-lg text-base font-medium w-full text-left transition-all duration-500 ease-out group overflow-hidden"
              >
                <span className="absolute inset-0 rounded-lg bg-blue-600/0 opacity-0 scale-95 group-hover:bg-red-600/10 group-hover:opacity-100 group-hover:scale-100 transition-all duration-500 ease-out" />
                <span className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-red-400 to-red-500 opacity-0 scale-y-0 group-hover:opacity-50 group-hover:scale-y-100 transition-all duration-500 ease-out" />
                <span className="relative z-10 text-gray-300 group-hover:text-red-400 group-hover:translate-x-1 transition-all duration-500">
                  Logout
                </span>
              </button>
            ) : (
              <button
                onClick={handleLogin}
                style={{
                  transitionDelay: isMobileMenuOpen
                    ? `${navigationItems.length * 50}ms`
                    : "0ms",
                }}
                className="relative block px-4 py-3 rounded-lg text-base font-medium w-full text-left transition-all duration-500 ease-out group overflow-hidden"
              >
                <span className="absolute inset-0 rounded-lg bg-blue-600/0 opacity-0 scale-95 group-hover:bg-blue-600/10 group-hover:opacity-100 group-hover:scale-100 transition-all duration-500 ease-out" />
                <span className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-yellow-400 to-yellow-500 opacity-0 scale-y-0 group-hover:opacity-50 group-hover:scale-y-100 transition-all duration-500 ease-out" />
                <span className="relative z-10 text-gray-300 group-hover:text-blue-400 group-hover:translate-x-1 transition-all duration-500">
                  Login
                </span>
              </button>
            )}
          </div>
        </div>
      </nav>
    </div>
  );
}