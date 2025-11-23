import React from "react";
import { motion } from "framer-motion";

export default function TechnologiesUsed() {
  const techs = [
    ".NET",
    "MySQL",
    "C/C++",
    "Python",
    "C#",
    "XHTML",
    "VB"
  ];

  return (
    <motion.section
      id="technologies"
      style={{
        backgroundColor: "#ffffff",
        padding: "80px 20px",
        textAlign: "center",
      }}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <h2
        style={{
          fontSize: "36px",
          color: "#111827", // black heading
          marginBottom: "40px",
          fontWeight: "700",
        }}
      >
        Technologies We Use
      </h2>

      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          gap: "20px",
        }}
      >
        {techs.map((tech, i) => (
          <motion.div
            key={i}
            style={{
              backgroundColor: "#f5f5f5",
              borderRadius: "12px",
              padding: "20px 25px",
              boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
            }}
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ delay: i * 0.15 }}
            whileHover={{ scale: 1.05 }}
          >
            <p style={{ fontSize: "18px", color: "#333", margin: 0 }}>{tech}</p>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}
