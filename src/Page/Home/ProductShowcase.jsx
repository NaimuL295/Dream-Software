import React from "react";
import { motion } from "framer-motion";

export default function ProductShowcase() {
  const products = [
    { title: "Hospital Management", desc: "Manage patients, doctors, billing & appointments." },
    { title: "School Management", desc: "Attendance, results, and student management." },
    { title: "Inventory System", desc: "Track products, sales, and suppliers easily." },
    { title: "Restaurant POS", desc: "Billing, orders, and menu management made simple." },
  ];

  return (
    <motion.section
      id="product-showcase"
      style={{
        padding: "80px 20px",
        backgroundColor: "#f2f3f5",
        textAlign: "center",
      }}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <h2 style={{ fontSize: "36px", color: "", marginBottom: "40px" }}>
        Our Desktop Applications
      </h2>

      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          gap: "30px",
        }}
      >
        {products.map((product, i) => (
          <motion.div
            key={i}
            style={{
              backgroundColor: "#fff",
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
            <h3 style={{ color: "#1565c0", marginBottom: "10px" }}>{product.title}</h3>
            <p>{product.desc}</p>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}
