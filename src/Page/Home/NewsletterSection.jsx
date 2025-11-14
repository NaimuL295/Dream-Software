import React, { useState } from "react";
import { motion } from "framer-motion";

export default function NewsletterSection() {
  const [email, setEmail] = useState("");

  return (
    <motion.section
      id="newsletter"
      style={{
        backgroundColor: "#d5d8df",
        padding: "80px 20px",
        textAlign: "center",
      }}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <h2 style={{ fontSize: "36px", color: "", marginBottom: "20px" }}>Subscribe to Our Newsletter</h2>
      <p style={{ marginBottom: "30px", color: "#333", fontSize: "18px" }}>
        Get the latest updates about our software and special offers.
      </p>

      <motion.form
        whileHover={{ scale: 1.02 }}
        style={{ display: "flex", justifyContent: "center", gap: "10px", flexWrap: "wrap" }}
        onSubmit={(e) => {
          e.preventDefault();
          alert(`Subscribed with ${email}`);
          setEmail("");
        }}
      >
        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          style={{
            padding: "12px 20px",
            borderRadius: "8px",
            border: "1px solid #ccc",
            width: "250px",
          }}
          required
        />
        <button
          type="submit"
          style={{
            padding: "12px 25px",
            borderRadius: "8px",
            border: "none",
            backgroundColor: "",
            color: "#fff",
            fontWeight: "bold",
            cursor: "pointer",
          }}
        >
          Subscribe
        </button>
      </motion.form>
    </motion.section>
  );
}
