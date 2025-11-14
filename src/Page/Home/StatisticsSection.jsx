import React from "react";
import { motion } from "framer-motion";
import CountUp from "react-countup";

export default function StatisticsSection() {
  const stats = [
    { label: "Clients", value: 200 },
    { label: "Projects Completed", value: 250 },
    { label: "Software Products", value: 15 },
    { label: "Active Subscribers", value: 5000 },
  ];

  return (
    <motion.section
      id="statistics"
      style={{
        backgroundColor: "#ffffff",
        padding: "80px 20px",
        textAlign: "center",
        fontFamily: "Roboto, sans-serif",
      }}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <h2 style={{ fontSize: "36px", color: "#222", marginBottom: "50px" }}>
        Our Achievements
      </h2>

      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          gap: "50px",
        }}
      >
        {stats.map((stat, i) => (
          <motion.div
            key={i}
            style={{
              backgroundColor: "#f5f5f5",
              borderRadius: "12px",
              padding: "40px 30px",
              width: "200px",
              boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
            }}
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ delay: i * 0.2 }}
            whileHover={{ scale: 1.05 }}
          >
            <h3
              style={{
                fontSize: "32px",
                color: "#1565c0",
                marginBottom: "10px",
              }}
            >
              <CountUp end={stat.value} duration={5.5} />+
            </h3>
            <p style={{ fontSize: "18px", color: "#333" }}>{stat.label}</p>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}
