
import React, { useState } from "react";
import { NavLink } from "react-router"; // fixed import
import { FaBars, FaTimes } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const menuItems = [
    { name: "Home", path: "/" },
    { name: "Services", path: "/services" },
    { name: "Our Work", path: "/our-work" },
    { name: "Why Us?", path: "/why-us" },
    { name: "Blog", path: "/blog" },
    { name: "Company & Culture", path: "/company-culture" },
    { name: "Contact", path: "/contact" },
  ];

  const navbarStyle = {
    maxWidth: "1320px",
    margin: "0 auto",
    padding: "15px 20px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    position: "sticky",
    top: 0,
    backgroundColor: "#FFFFFF00",
    zIndex: 100,
    boxShadow: "0 4px 12px rgba(0,0,0,0.05)",
  };

  const linkStyle = {
    textDecoration: "none",
    color: "#333",
    fontWeight: 500,
    fontSize: "16px",
    cursor: "pointer",
    whiteSpace: "nowrap",
  };

  const mobileMenuStyle = {
    position: "absolute",
    top: "70px",
    left: "10px",
    right: "10px",
    backgroundColor: "#f1f1f1",
    padding: "15px",
    borderRadius: "10px",
    display: "flex",
    flexDirection: "column",
    gap: "10px",
    zIndex: 99,
  };

  // CSS for responsive
  const responsiveStyle = `
    @media (max-width: 768px) {
      .desktop-menu {
        display: none !important;
      }
      .mobile-icon {
        display: block !important;
        cursor: pointer;
      }
    }

    @media (min-width: 769px) {
      .mobile-icon {
        display: none !important;
      }
    }
  `;

  return (
    <nav style={navbarStyle}>
      <style>{responsiveStyle}</style>

      {/* Logo */}
      <div style={{ fontWeight: "700", fontSize: "24px" }}>
        Dream Software Technology
      </div>

      {/* Desktop Menu */}
      <div
        className="desktop-menu"
        style={{
          display: "flex",
          gap: "20px",
          alignItems: "center",
          marginLeft: "20px",
          flexWrap: "wrap",
        }}
      >
        {menuItems.map((item, index) => (
          <NavLink
            key={index}
            to={item.path}
            style={({ isActive }) => ({
              ...linkStyle,
              color: isActive ? "#1e90ff" : "#333",
            })}
          >
            {item.name}
          </NavLink>
        ))}
      </div>

      {/* Mobile Icon */}
      <div
        className="mobile-icon"
        style={{ fontSize: "24px" }}
        onClick={() => setMenuOpen(!menuOpen)}
      >
        {menuOpen ? <FaTimes /> : <FaBars />}
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            style={mobileMenuStyle}
          >
            {menuItems.map((item, index) => (
              <NavLink
                key={index}
                to={item.path}
                style={({ isActive }) => ({
                  ...linkStyle,
                  color: isActive ? "#1e90ff" : "#333",
                })}
                onClick={() => setMenuOpen(false)}
              >
                {item.name}
              </NavLink>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
