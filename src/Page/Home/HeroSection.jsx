import React from "react";

export default function HeroSection() {
  return (
    <div
      style={{
        width: "100%",
        height: "110vh", // full viewport height
        position: "relative",
        overflow: "hidden",
        padding: "0 20px",
        boxSizing: "border-box",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center", // vertical center
        alignItems: "center",     // horizontal center
        textAlign: "center",      // center text inside
      }}
    >
      {/* 🔵 Top Blue Glow */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage: `radial-gradient(circle at 50% 0%, rgba(70,130,180,0.55), transparent 70%)`,
          filter: "blur(120px)",
          zIndex: 0,
          pointerEvents: "none",
        }}
      />

      {/* ⚪ Bottom Radial Background */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: "radial-gradient(125% 125% at 50% 90%, #fff 40%, #475569 100%)",
          zIndex: -1,
          pointerEvents: "none",
        }}
      />

      {/* Hero Content */}
      <div
        style={{
          position: "relative",
          zIndex: 10,
          maxWidth: "1320px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "20px",
        }}
      >
        <h1
          style={{
            fontSize: "65px",
            fontWeight: "800",
            lineHeight: "1.2",
            color: "#111",
          }}
        >
          Build Future-Ready <span style={{ color: "#4da3ff" }}>Software Solutions</span>
        </h1>

        <p
          style={{
            fontSize: "22px",
            color: "#555",
            maxWidth: "800px",
            lineHeight: "1.6",
          }}
        >
          We develop powerful, scalable and modern applications designed to transform your business digitally.
        </p>

        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "20px",
            flexWrap: "wrap",
          }}
        >
          <button
            style={{
              padding: "14px 35px",
              background: "#1e90ff",
              border: "none",
              color: "white",
              borderRadius: "10px",
              fontSize: "18px",
              fontWeight: "600",
              cursor: "pointer",
            }}
          >
            Get Started
          </button>

          <button
            style={{
              padding: "14px 35px",
              border: "2px solid #444",
              background: "transparent",
              color: "#222",
              borderRadius: "10px",
              fontSize: "18px",
              fontWeight: "600",
              cursor: "pointer",
            }}
          >
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
}
