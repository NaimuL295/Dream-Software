import React from "react";
import { motion } from "framer-motion";

export default function PortfolioSection() {
  const portfolio = [
    { title: "Hospital Management", img: "https://via.placeholder.com/300x200" },
    { title: "School Management", img: "https://via.placeholder.com/300x200" },
    { title: "Inventory System", img: "https://via.placeholder.com/300x200" },
    { title: "Restaurant POS", img: "https://via.placeholder.com/300x200" },
  ];

  return (
    <motion.section
      id="portfolio"
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
        Portfolio
      </h2>

      <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "30px" }}>
        {portfolio.map((item, i) => (
          <motion.div
            key={i}
            style={{
              backgroundColor: "#fff",
              borderRadius: "12px",
              overflow: "hidden",
              width: "280px",
              boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
            }}
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ delay: i * 0.2 }}
            whileHover={{ scale: 1.05 }}
          >
            <img src={item.img} alt={item.title} style={{ width: "100%", height: "200px", objectFit: "cover" }} />
            <h3 style={{ color: "#1565c0", padding: "15px 10px" }}>{item.title}</h3>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}
