import React from "react";
import { motion } from "framer-motion";

export default function BlogSection() {
  const posts = [
    { title: "Boost Your Hospital Management", date: "Nov 2025", img: "https://via.placeholder.com/300x200" },
    { title: "How Subscription Software Helps Schools", date: "Oct 2025", img: "https://via.placeholder.com/300x200" },
    { title: "Top Features of Inventory Management", date: "Sep 2025", img: "https://via.placeholder.com/300x200" },
  ];

  return (
    <motion.section
      id="blog"
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
        Latest Blog Posts
      </h2>

      <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "30px" }}>
        {posts.map((post, i) => (
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
            <img src={post.img} alt={post.title} style={{ width: "100%", height: "180px", objectFit: "cover" }} />
            <div style={{ padding: "15px" }}>
              <h3 style={{ color: "#1565c0", marginBottom: "10px" }}>{post.title}</h3>
              <p style={{ color: "#333", fontSize: "14px" }}>{post.date}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}
