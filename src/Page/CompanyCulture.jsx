import React from "react";
import { BiTrendingUp } from "react-icons/bi";
import { FaHeart, FaUserSecret } from "react-icons/fa";
import { HiLightBulb } from "react-icons/hi";

export default function CompanyCulture() {
  const isMobile = window.innerWidth <= 480;
  const isTablet = window.innerWidth > 480 && window.innerWidth <= 900;

  const headingSize = isMobile ? "26px" : isTablet ? "32px" : "36px";
  const subTextSize = isMobile ? "14px" : isTablet ? "15px" : "16px";
  const cardTitleSize = isMobile ? "18px" : "20px";
  const cardDescSize = isMobile ? "13px" : "14px";

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
        padding: "60px 0",
        backgroundColor: "#eef1f6",
      }}
    >
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "0 20px",
          textAlign: "center",
        }}
      >
        {/* Heading */}
        <h2
          style={{
            fontSize: headingSize,
            fontWeight: "700",
            color: "#333",
            marginBottom: "10px",
          }}
        >
          Our Company Culture
        </h2>

        {/* Sub Text */}
        <p
          style={{
            fontSize: subTextSize,
            color: "#555",
            marginBottom: "40px",
            lineHeight: "1.6",
            maxWidth: "700px",
            marginInline: "auto",
          }}
        >
          We build a positive environment where creativity, teamwork, and innovation thrive.
        </p>

        {/* Cards */}
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
                padding: isMobile ? "20px" : "25px",
                borderRadius: "14px",
                boxShadow: "0 3px 12px rgba(0,0,0,0.12)",
                transition: "0.3s",

                // ⭐ Center content perfectly
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                textAlign: "center",
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

              <h3
                style={{
                  fontSize: cardTitleSize,
                  fontWeight: "600",
                  marginBottom: "8px",
                }}
              >
                {item.title}
              </h3>

              <p
                style={{
                  fontSize: cardDescSize,
                  color: "#666",
                  lineHeight: "1.6",
                }}
              >
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
