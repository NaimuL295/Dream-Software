import React from "react";
import { motion } from "framer-motion";

export default function FeaturesSection() {
  const features = [
    { title: "Multi-User Access", desc: "Support multiple roles with secure permissions." },
    { title: "Real-Time Analytics", desc: "Monitor operations and performance instantly." },
    { title: "Custom Reports", desc: "Generate detailed reports for informed decisions." },
    { title: "Cross-Platform", desc: "Works on Windows, Mac, and Web seamlessly." },
  ];

  return (
    <motion.section
      id="features"
      style={{
        padding: "80px 20px",
        backgroundColor: "#ffffff",
        textAlign: "center",
      }}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <h2 style={{ fontSize: "36px", color: "", marginBottom: "40px" }}>
        Key Features
      </h2>

      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          gap: "30px",
        }}
      >
        {features.map((feature, i) => (
          <motion.div
            key={i}
            style={{
              backgroundColor: "#f5f5f5",
              borderRadius: "12px",
              padding: "30px",
              width: "280px",
              boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
            }}
            initial={{ y: 40, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ delay: i * 0.2 }}
            whileHover={{ scale: 1.05 }}
          >
            <h3 style={{ color: "#1565c0", marginBottom: "10px" }}>{feature.title}</h3>
            <p>{feature.desc}</p>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}
