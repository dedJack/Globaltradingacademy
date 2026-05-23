"use client";
import { NoteContext } from "../context/AuthContext";
import { Menu, X } from "lucide-react";
import { usePathname, useRouter } from "next/navigation";
import React, { useContext, useState, useEffect, useRef } from "react";

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeIndicator, setActiveIndicator] = useState({ left: 0, width: 0 });
  const navRef = useRef(null);
  const router = useRouter();
  const pathname = usePathname();
  const { isLoggedIn, LogoutUser } = useContext(NoteContext);

  const navigationItems = [
    { id: "/", label: "Home", route: "/" },
    { id: "about", label: "About", route: "/about" },
    { id: "connect", label: "Connect", route: "/quickLinks" },
    { id: "services", label: "Services", route: "/services" },
    { id: "resources", label: "Resources", route: "/resources" },
    { id: "contact", label: "Contact", route: "/contact" },
  ];

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // sliding active indicator
  useEffect(() => {
    if (!navRef.current) return;
    const activeBtn = navRef.current.querySelector("[data-active='true']");
    if (activeBtn) {
      const navRect = navRef.current.getBoundingClientRect();
      const btnRect = activeBtn.getBoundingClientRect();
      setActiveIndicator({
        left: btnRect.left - navRect.left,
        width: btnRect.width,
      });
    }
  }, [pathname]);

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
    <>
      <style>{`
        .gta-nav {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          z-index: 50;
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
        }
        .gta-nav.scrolled {
          padding: 0 1rem;
        }
        .gta-nav-inner {
          max-width: 1280px;
          margin: 0 auto;
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
        }
        .gta-nav.scrolled .gta-nav-inner {
          background: rgba(2, 6, 23, 0.85);
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
          border: 1px solid rgba(99, 179, 237, 0.12);
          border-radius: 16px;
          margin-top: 10px;
          box-shadow: 0 8px 32px rgba(0, 0, 0, 0.4), 0 0 0 1px rgba(255,255,255,0.03) inset;
        }
        .gta-nav:not(.scrolled) .gta-nav-inner {
          background: linear-gradient(180deg, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0) 100%);
        }
        @media (max-width: 768px) {
          .gta-nav .gta-nav-inner {
            background: rgba(2, 6, 23, 0.97) !important;
            backdrop-filter: blur(20px) !important;
            -webkit-backdrop-filter: blur(20px) !important;
            border-radius: 0 !important;
            margin-top: 0 !important;
            border: none !important;
            border-bottom: 1px solid rgba(99, 179, 237, 0.1) !important;
            box-shadow: 0 4px 24px rgba(0,0,0,0.5) !important;
          }
        }

        .gta-logo-text {
          font-size: 1.2rem;
          font-weight: 700;
          letter-spacing: -0.02em;
          background: linear-gradient(135deg, #93c5fd 0%, #a78bfa 50%, #60a5fa 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          white-space: nowrap;
        }
        .gta-logo-badge {
          font-size: 0.6rem;
          font-weight: 600;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: rgba(147, 197, 253, 0.6);
          display: block;
          margin-top: -2px;
        }

        .nav-items-wrapper {
          position: relative;
          display: flex;
          align-items: center;
          gap: 2px;
        }
        .nav-pill-indicator {
          position: absolute;
          height: 32px;
          background: rgba(99, 179, 237, 0.1);
          border: 1px solid rgba(99, 179, 237, 0.2);
          border-radius: 8px;
          transition: all 0.35s cubic-bezier(0.4, 0, 0.2, 1);
          pointer-events: none;
          top: 50%;
          transform: translateY(-50%);
        }

        .nav-btn {
          position: relative;
          padding: 6px 14px;
          border-radius: 8px;
          font-size: 0.825rem;
          font-weight: 500;
          letter-spacing: 0.01em;
          color: rgba(203, 213, 225, 0.85);
          background: transparent;
          border: none;
          cursor: pointer;
          transition: color 0.25s ease;
          white-space: nowrap;
          z-index: 1;
        }
        .nav-btn:hover { color: #e2e8f0; }
        .nav-btn[data-active="true"] { color: #93c5fd; }

        .nav-btn-dot {
          position: absolute;
          bottom: 3px;
          left: 50%;
          transform: translateX(-50%);
          width: 3px;
          height: 3px;
          border-radius: 50%;
          background: #60a5fa;
          opacity: 0;
          transition: opacity 0.25s ease;
        }
        .nav-btn[data-active="true"] .nav-btn-dot { opacity: 1; }

        .auth-btn-enroll {
          position: relative;
          padding: 7px 18px;
          border-radius: 9px;
          font-size: 0.825rem;
          font-weight: 600;
          color: #fff;
          background: linear-gradient(135deg, #2563eb, #7c3aed);
          border: none;
          cursor: pointer;
          overflow: hidden;
          transition: transform 0.2s ease, box-shadow 0.2s ease;
          letter-spacing: 0.01em;
        }
        .auth-btn-enroll::before {
          content: '';
          position: absolute;
          inset: 0;
          background: linear-gradient(135deg, #1d4ed8, #6d28d9);
          opacity: 0;
          transition: opacity 0.25s ease;
        }
        .auth-btn-enroll:hover { transform: translateY(-1px); box-shadow: 0 4px 20px rgba(99,102,241,0.4); }
        .auth-btn-enroll:hover::before { opacity: 1; }
        .auth-btn-enroll span { position: relative; z-index: 1; }

        .auth-btn-logout {
          padding: 7px 18px;
          border-radius: 9px;
          font-size: 0.825rem;
          font-weight: 500;
          color: rgba(248, 113, 113, 0.9);
          background: rgba(239, 68, 68, 0.08);
          border: 1px solid rgba(239, 68, 68, 0.2);
          cursor: pointer;
          transition: all 0.25s ease;
          letter-spacing: 0.01em;
        }
        .auth-btn-logout:hover {
          background: rgba(239, 68, 68, 0.15);
          border-color: rgba(239, 68, 68, 0.4);
          color: #f87171;
        }

        .mobile-btn {
  align-items: center;
  justify-content: center;
  width: 38px;
  height: 38px;
  border-radius: 10px;
  background: rgba(255,255,255,0.05);
  border: 1px solid rgba(255,255,255,0.1);
  color: #cbd5e1;
  cursor: pointer;
  transition: all 0.2s ease;
}
        .mobile-btn:hover { background: rgba(255,255,255,0.08); color: #e2e8f0; }

        .mobile-menu {
          overflow: hidden;
          transition: max-height 0.4s cubic-bezier(0.4, 0, 0.2, 1), opacity 0.3s ease;
        }
        .mobile-menu.open { max-height: 420px; opacity: 1; }
        .mobile-menu.closed { max-height: 0; opacity: 0; }

        .mobile-menu-inner {
          border-top: 1px solid rgba(99, 179, 237, 0.08);
          margin: 0;
          padding: 12px 1rem 1rem;
          display: flex;
          flex-direction: column;
          gap: 4px;
          background: rgba(2, 6, 23, 0.97);
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
        }

        .mobile-nav-btn {
          display: flex;
          align-items: center;
          gap: 10px;
          padding: 11px 14px;
          border-radius: 10px;
          font-size: 0.9rem;
          font-weight: 500;
          color: rgba(203, 213, 225, 0.85);
          background: transparent;
          border: none;
          cursor: pointer;
          text-align: left;
          width: 100%;
          transition: all 0.2s ease;
          letter-spacing: 0.01em;
        }
        .mobile-nav-btn:hover { background: rgba(99, 179, 237, 0.07); color: #e2e8f0; }
        .mobile-nav-btn.active {
          background: rgba(99, 179, 237, 0.1);
          color: #93c5fd;
          border: 1px solid rgba(99, 179, 237, 0.18);
        }
        .mobile-nav-btn .dot {
          width: 6px; height: 6px;
          border-radius: 50%;
          background: #60a5fa;
          flex-shrink: 0;
          margin-left: auto;
          opacity: 0;
        }
        .mobile-nav-btn.active .dot { opacity: 1; }

        .mobile-divider {
          height: 1px;
          background: rgba(255,255,255,0.05);
          margin: 6px 0;
        }

        @keyframes fadeSlideDown {
          from { opacity: 0; transform: translateY(-6px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .mobile-menu.open .mobile-menu-inner { animation: fadeSlideDown 0.3s ease forwards; }
      `}</style>

      <div className={`gta-nav ${scrolled ? "scrolled" : ""}`}>
        <div className="gta-nav-inner top-2 relative">
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", height: "64px", padding: "0 1.25rem" }}>

            {/* ── Logo ── */}
            <div
              style={{ display: "flex", alignItems: "center", gap: "10px", cursor: "pointer", flexShrink: 0 }}
              onClick={() => router.push("/")}
            >
              <div style={{ position: "relative" }}>
                <img
                  src="/logo192.png"
                  alt="Global Trading Academy Logo"
                  style={{ width: "36px", height: "36px", borderRadius: "9px", objectFit: "cover" }}
                />
                <div style={{
                  position: "absolute", inset: 0, borderRadius: "9px",
                  boxShadow: "0 0 0 1.5px rgba(99,179,237,0.3), 0 0 12px rgba(99,179,237,0.15)",
                  pointerEvents: "none"
                }} />
              </div>
              <div>
                <span className="gta-logo-text">Global Trading Academy</span>
                <span className="gta-logo-badge">Professional Trading Education</span>
              </div>
            </div>

            {/* ── Desktop Nav ── */}
            <div className="hidden md:flex" style={{ alignItems: "center", gap: "8px" }}>
              <div className="nav-items-wrapper" ref={navRef}>
                {/* Sliding pill */}
                <div
                  className="nav-pill-indicator"
                  style={{ left: activeIndicator.left, width: activeIndicator.width }}
                />
                {navigationItems.map((item) => {
                  const isActive = pathname === item.route;
                  return (
                    <button
                      key={item.id}
                      data-active={isActive ? "true" : "false"}
                      className="nav-btn"
                      onClick={() => handleNavigation(item)}
                    >
                      {item.label}
                      <span className="nav-btn-dot" />
                    </button>
                  );
                })}
              </div>

              <div style={{ width: "1px", height: "20px", background: "rgba(255,255,255,0.1)", margin: "0 6px" }} />

              {isLoggedIn ? (
                <button className="auth-btn-logout" onClick={handleLogout}>
                  Sign out
                </button>
              ) : (
                <button className="auth-btn-enroll" onClick={handleLogin}>
                  <span>Sign in</span>
                </button>
              )}
            </div>

            {/* ── Mobile Toggle ── */}
            <button
              className="mobile-btn flex lg:hidden"
              onClick={() => setIsMobileMenuOpen((o) => !o)}
              aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
            >
              {isMobileMenuOpen ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>

          {/* ── Mobile Menu ── */}
          <div className={`mobile-menu md:hidden ${isMobileMenuOpen ? "open" : "closed"}`}>
            <div className="mobile-menu-inner">
              {navigationItems.map((item) => {
                const isActive = pathname === item.route;
                return (
                  <button
                    key={item.id}
                    className={`mobile-nav-btn ${isActive ? "active" : ""}`}
                    onClick={() => handleNavigation(item)}
                  >
                    {item.label}
                    <span className="dot" />
                  </button>
                );
              })}

              <div className="mobile-divider" />

              {isLoggedIn ? (
                <button
                  className="mobile-nav-btn"
                  onClick={handleLogout}
                  style={{ color: "rgba(248,113,113,0.85)" }}
                >
                  Sign out
                </button>
              ) : (
                <button
                  className="auth-btn-enroll"
                  onClick={handleLogin}
                  style={{ marginTop: "4px", textAlign: "center" }}
                >
                  <span>Sign in to your account</span>
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}