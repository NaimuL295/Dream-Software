import React from "react";
import { motion } from "framer-motion";

export default function WhyChooseUs() {
  const points = [
    "Subscription-based flexible pricing",
    "Easy installation & setup",
    "Secure cloud & local data storage",
    "24/7 support & maintenance",
  ];

  return (
    <motion.section
      id="why-choose-us"
      style={{
        backgroundColor: "#f2f3f5",
        padding: "80px 20px",
        textAlign: "center",
      }}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <h2 style={{ fontSize: "36px", color: "", marginBottom: "40px" }}>
        Why Choose Us
      </h2>

      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          gap: "30px",
        }}
      >
        {points.map((point, i) => (
          <motion.div
            key={i}
            style={{
              backgroundColor: "#fff",
              borderRadius: "12px",
              padding: "25px",
              width: "280px",
              boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
            }}
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ delay: i * 0.2 }}
            whileHover={{ scale: 1.05 }}
          >
            <p style={{ fontSize: "18px", color: "#333" }}>{point}</p>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}
