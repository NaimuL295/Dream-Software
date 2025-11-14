import React from "react";
import { motion } from "framer-motion";

export default function TeamSection() {
  const team = [
    { name: "Sandeep Hasan", role: "Founder & CEO", img: "https://via.placeholder.com/150" },
    { name: "Rina Akter", role: "Lead Developer", img: "https://via.placeholder.com/150" },
    { name: "Tanvir Alam", role: "UI/UX Designer", img: "https://via.placeholder.com/150" },
    { name: "Nabil Khan", role: "Marketing Head", img: "https://via.placeholder.com/150" },
  ];

  return (
    <motion.section
      id="team"
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
        Meet Our Team
      </h2>

      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          gap: "30px",
        }}
      >
        {team.map((member, i) => (
          <motion.div
            key={i}
            style={{
              backgroundColor: "#fff",
              borderRadius: "12px",
              padding: "20px",
              width: "220px",
              boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
            }}
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ delay: i * 0.2 }}
            whileHover={{ scale: 1.05 }}
          >
            <img
              src={member.img}
              alt={member.name}
              style={{ width: "100%", borderRadius: "50%", marginBottom: "15px" }}
            />
            <h3 style={{ color: "#1565c0", marginBottom: "5px" }}>{member.name}</h3>
            <p style={{ color: "#333" }}>{member.role}</p>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}
