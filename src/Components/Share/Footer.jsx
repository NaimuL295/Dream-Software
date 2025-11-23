import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router";

export default function Footer() {
  return (
    <motion.footer
      style={{
        backgroundColor: "#f2f3f5",
        color: "#000",
        padding: "80px 20px 40px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
      initial={{ opacity: 0, y: 80 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >
      {/* Top Section */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
          width: "100%",
          maxWidth: "1200px",
          gap: "40px",
          marginBottom: "50px",
        }}
      >
        {/* Company Info */}
        <div>
          <h2 style={{ fontSize: "26px", fontWeight: "700", marginBottom: "10px" }}>
            Dream Software Technology
          </h2>
          <p style={{ lineHeight: "1.7", fontSize: "15px", color: "" }}>
            We build powerful, scalable, and intuitive subscription-based software — 
            from hospital management systems to enterprise applications that help
            your business grow efficiently.
          </p>
        </div>

        {/* Services */}
        <div>
          <h3 style={footerTitle}>Services</h3>
          <ul style={footerList}>
            <li><Link to="/services/hospital" style={linkStyle}>Hospital Management</Link></li>
            <li><Link to="/services/school" style={linkStyle}>School Management</Link></li>
            <li><Link to="/services/billing" style={linkStyle}>Billing Software</Link></li>
            <li><Link to="/services/inventory" style={linkStyle}>Inventory System</Link></li>
            <li><Link to="/services/erp" style={linkStyle}>Custom ERP Solutions</Link></li>
          </ul>
        </div>

        {/* Resources */}
        <div>
          {/* <h3 style={footerTitle}>Resources</h3> */}
          {/* <ul style={footerList}>
            <li><Link to="/about" style={linkStyle}>About Us</Link></li>
            <li><Link to="/portfolio" style={linkStyle}>Our Portfolio</Link></li>
            <li><Link to="/pricing" style={linkStyle}>Pricing Plans</Link></li>
            <li><Link to="/blog" style={linkStyle}>Blog & Updates</Link></li>
            <li><Link to="/career" style={linkStyle}>Career Opportunities</Link></li>
          </ul> */}
        </div>

        {/* Contact Info */}
        <div>
          <h3 style={footerTitle}>Contact</h3>
          <p style={{ lineHeight: "1.8", color: "" }}>
              Bangladesh <br />
             Tangail Medical College & Hspital Road Sabalia,Tangail
            +880+ 01896036830<br />
          dreamssofttech.bd@gmail.com
          </p>
          {/* <div style={{ display: "flex", gap: "15px", marginTop: "15px" }}>
            <motion.a whileHover={{ scale: 1.2 }} href="#" style={socialStyle}>🌐</motion.a>
            <motion.a whileHover={{ scale: 1.2 }} href="#" style={socialStyle}>💼</motion.a>
            <motion.a whileHover={{ scale: 1.2 }} href="#" style={socialStyle}>🐦</motion.a>
            <motion.a whileHover={{ scale: 1.2 }} href="#" style={socialStyle}>📸</motion.a>
          </div> */}
        </div>
      </div>

      {/* Bottom Bar */}
      <div
        style={{
          borderTop: "1px solid rgba(255,255,255,0.2)",
          textAlign: "center",
          paddingTop: "25px",
          width: "100%",
          fontSize: "14px",
          color: "",
        }}
      >
        © 2025 Dream Software Technology. All Rights Reserved.
      </div>
    </motion.footer>
  );
}

// Inline Styles
const footerTitle = {
  fontSize: "18px",
  fontWeight: "600",
  marginBottom: "12px",
  color: "",
};

const footerList = {
  listStyle: "none",
  padding: 0,
  lineHeight: "2",
};

const linkStyle = {
  color: "#000",
  textDecoration: "none",
  transition: "0.3s",
};

const socialStyle = {
  fontSize: "22px",
  color: "#000",
  transition: "0.3s",
};
