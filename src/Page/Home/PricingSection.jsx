import React from "react";
import { motion } from "framer-motion";
import { FaBangladeshiTakaSign } from "react-icons/fa6";

export default function PricingSection() {
  const plans = [
    { title: "Basic", price: "1500/month", features: ["Single software", "Email support", "Limited updates"] },
    { title: "Pro", price: "2000/month", features: ["All software", "Priority support", "Regular updates"] },
    { title: "Enterprise", price: "2500/month", features: ["Custom solutions", "Dedicated support", "Full access"] },
  ];

  return (
    <motion.section
      id="pricing"
      style={{
        backgroundColor: "#f2f3f5",
        padding: "80px 20px",
        textAlign: "center",
      }}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <h2 style={{ fontSize: "36px", color: "", marginBottom: "50px" }}>
        Subscription Plans
      </h2>

      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          gap: "30px",
        }}
      >
        {plans.map((plan, i) => (
          <motion.div
            key={i}
            style={{
              backgroundColor: "#fff",
              borderRadius: "12px",
              padding: "30px",
              width: "280px",
              boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
            }}
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ delay: i * 0.2 }}
            whileHover={{ scale: 1.05 }}
          >
            <h3 style={{ color: "#1565c0", marginBottom: "15px" }}>{plan.title}</h3>
            <p style={{ fontSize: "24px", fontWeight: "bold", marginBottom: "20px" }}><FaBangladeshiTakaSign />{plan.price}</p>
            <ul style={{ textAlign: "left", paddingLeft: "20px" }}>
              {plan.features.map((f, index) => (
                <li key={index} style={{ marginBottom: "10px", color: "#333" }}>{f}</li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}
