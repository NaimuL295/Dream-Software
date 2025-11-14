import React from "react";
import { motion } from "framer-motion";

export default function CoreValues() {
  const values = [
    { title: "Integrity", text: "We uphold honesty and transparency in every project." },
    { title: "Innovation", text: "We constantly seek new and creative solutions." },
    { title: "Excellence", text: "We aim for the highest standards in everything we do." },
  ];

  return (
    <section
      id="values"
      style={{
        padding: "80px 20px",
        backgroundColor: "#f4f6f8",
        textAlign: "center",
      }}
    >
      <motion.h2
        style={{ fontSize: "36px", color: "", marginBottom: "50px" }}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        Our Core Values
      </motion.h2>

      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          gap: "30px",
        }}
      >
        {values.map((value, index) => (
          <motion.div
            key={index}
            style={{
              backgroundColor: "#fff",
              padding: "25px",
              borderRadius: "10px",
              maxWidth: "300px",
              boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
            }}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
          >
            <h3 style={{ color: "#1565c0", fontSize: "20px", marginBottom: "10px" }}>
              {value.title}
            </h3>
            <p style={{ color: "#555", lineHeight: "1.6" }}>{value.text}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
