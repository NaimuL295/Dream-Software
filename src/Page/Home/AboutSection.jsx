import React from "react";
import { motion } from "framer-motion";

export default function AboutSection() {
  return (
    <motion.section
      id="about"
      style={{
        backgroundColor: "#f5f5f5",
        padding: "80px 20px",
        textAlign: "center",
      }}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <motion.h2
        style={{ fontSize: "36px", color: "", marginBottom: "20px" }}
      >
        About Our Company
      </motion.h2>

      <motion.p
        style={{
          fontSize: "18px",
          color: "#333",
          maxWidth: "800px",
          margin: "0 auto",
        }}
      >
        We develop powerful subscription-based desktop and web applications 
        designed to help businesses like hospitals, schools, and retailers 
        streamline their daily operations. Our mission is to make management 
        effortless, secure, and efficient for every industry.
      </motion.p>
    </motion.section>
  );
}
