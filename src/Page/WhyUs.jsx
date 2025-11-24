import React from "react";
import { FaShieldAlt, FaUsers, FaClock, FaAward } from "react-icons/fa";

export default function WhyUs() {
  const items = [
    {
      icon: <FaShieldAlt size={40} color="#2563eb" />,
      title: "Trusted & Secure",
      desc: "We provide highly secure and reliable service for all users.",
    },
    {
      icon: <FaUsers size={40} color="#2563eb" />,
      title: "Expert Team",
      desc: "Our experienced team ensures top-quality service every time.",
    },
    {
      icon: <FaClock size={40} color="#2563eb" />,
      title: "24/7 Support",
      desc: "We are always available to assist you anytime you need.",
    },
    {
      icon: <FaAward size={40} color="#2563eb" />,
      title: "Quality Guaranteed",
      desc: "We maintain high-level industry standards in every service.",
    },
  ];

  const containerStyle = {
    padding: "50px",
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-between",
    gap: "20px",
    backgroundColor: "#f9fafb",
  };

  const cardStyle = {
    flex: "1 1 calc(25% - 20px)",
    backgroundColor: "#fff",
    padding: "20px",
    borderRadius: "12px",
    boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
    textAlign: "center",
    transition: "transform 0.3s, box-shadow 0.3s",
    cursor: "default",
  };

  const cardHoverStyle = {
    transform: "translateY(-5px)",
    boxShadow: "0 8px 15px rgba(0,0,0,0.2)",
  };

  return (
    <div style={containerStyle}>
      {items.map((item, i) => (
        <div
          key={i}
          style={cardStyle}
          onMouseEnter={(e) => {
            Object.assign(e.currentTarget.style, cardHoverStyle);
          }}
          onMouseLeave={(e) => {
            Object.assign(e.currentTarget.style, cardStyle);
          }}
        >
          <div style={{ marginBottom: "15px" }}>{item.icon}</div>
          <h3 style={{ fontSize: "18px", fontWeight: "600", marginBottom: "10px" }}>
            {item.title}
          </h3>
          <p style={{ color: "#4b5563", fontSize: "14px" }}>{item.desc}</p>
        </div>
      ))}
    </div>
  );
}
