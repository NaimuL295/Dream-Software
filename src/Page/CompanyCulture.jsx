import React from "react";
import { BiTrendingUp } from "react-icons/bi";
import {  FaHeart, FaUserSecret } from "react-icons/fa";
import { HiLightBulb } from "react-icons/hi";

export default function CompanyCulture() {
  const cultures = [
    {
      icon: <FaUserSecret size={40} color="#1E88E5" />,
      title: "Teamwork",
      desc: "We value collaboration and encourage working together to achieve excellence.",
    },
    {
      icon: <HiLightBulb size={40} color="#E53935" />,
      title: "Innovation",
      desc: "We embrace creativity and continuously innovate to deliver modern solutions.",
    },
    {
      icon: <BiTrendingUp size={40} color="#43A047" />,
      title: "Growth",
      desc: "We support personal and professional growth of our employees and clients.",
    },
    {
      icon: <FaHeart size={40} color="#FDD835" />,
      title: "Passion",
      desc: "Our team is passionate about technology and delivering high-quality software.",
    },
  ];

  return (
    <div
      style={{
        width: "100%",
        backgroundColor: "#f5f7fa",
        padding: "60px 20px",
      }}
    >
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          textAlign: "center",
        }}
      >
        {/* Heading */}
        <h2 style={{ fontSize: "36px", fontWeight: "700", marginBottom: "10px", color: "#333" }}>
          Our Company Culture
        </h2>
        <p style={{ fontSize: "16px", color: "#555", marginBottom: "40px" }}>
          We build a positive environment where creativity, teamwork, and innovation thrive.
        </p>

        {/* Culture Cards */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
            gap: "25px",
          }}
        >
          {cultures.map((item, i) => (
            <div
              key={i}
              style={{
                background: "#fff",
                padding: "25px",
                borderRadius: "14px",
                boxShadow: "0 3px 12px rgba(0,0,0,0.12)",
                transition: "0.3s",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-5px)";
                e.currentTarget.style.boxShadow = "0 6px 18px rgba(0,0,0,0.18)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow = "0 3px 12px rgba(0,0,0,0.12)";
              }}
            >
              <div style={{ marginBottom: "15px" }}>{item.icon}</div>
              <h3 style={{ fontSize: "20px", fontWeight: "600", marginBottom: "8px" }}>
                {item.title}
              </h3>
              <p style={{ fontSize: "14px", color: "#666", lineHeight: "1.5" }}>
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
