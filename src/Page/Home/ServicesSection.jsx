import React from "react";
import { motion } from "framer-motion";

export default function ServicesSection() {
  const services = [
    { title: "Hospital Management", desc: "All-in-one hospital system for doctors, patients, and billing." },
    { title: "School Management", desc: "Smart software for attendance, results, and student profiles." },
    { title: "Inventory Control", desc: "Track stock, purchase, and sales efficiently with automation." },
    { title: "POS System", desc: "Restaurant and retail POS with analytics and cloud backup." },
  ];

  return (
    <motion.section
      id="services"
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
        Our Software Solutions
      </h2>

      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          gap: "30px",
        }}
      >
        {services.map((service, i) => (
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
            <h3 style={{ color: "#1565c0", marginBottom: "10px" }}>{service.title}</h3>
            <p>{service.desc}</p>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}
