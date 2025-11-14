import React from "react";
import { motion } from "framer-motion";

export default function MissionVision() {
  return (
    <motion.section
      id="mission"
      style={{
        backgroundColor: "#ffffff",
        padding: "80px 20px",
        textAlign: "center",
      }}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 1 }}
    >
      <motion.h2
        style={{ fontSize: "36px", color: "", marginBottom: "20px" }}
      >
        Our Mission & Vision
      </motion.h2>

      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          gap: "30px",
          marginTop: "40px",
        }}
      >
        <motion.div
          style={{
            backgroundColor: "#f5f5f5",
            borderRadius: "12px",
            padding: "30px",
            width: "300px",
            boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
          }}
          whileHover={{ scale: 1.05 }}
        >
          <h3 style={{ color: "#1565c0", marginBottom: "10px" }}>Our Mission</h3>
          <p>
            To empower businesses and organizations with modern, reliable, and 
            scalable management software — making their daily operations smarter and faster.
          </p>
        </motion.div>

        <motion.div
          style={{
            backgroundColor: "#f5f5f5",
            borderRadius: "12px",
            padding: "30px",
            width: "300px",
            boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
          }}
          whileHover={{ scale: 1.05 }}
        >
          <h3 style={{ color: "#1565c0", marginBottom: "10px" }}>Our Vision</h3>
          <p>
            To become a global software brand offering subscription-based 
            management tools that simplify complex business challenges across industries.
          </p>
        </motion.div>
      </div>
    </motion.section>
  );
}
