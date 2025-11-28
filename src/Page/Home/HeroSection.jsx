import React, { useEffect, useState } from "react";
import video from "../../assets/video.mp4";
import Navbar from "../../Components/Share/Navber";

export default function HeroSection() {
  const [isMobile, setIsMobile] = useState(false);
  const [isTablet, setIsTablet] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 480);
      setIsTablet(window.innerWidth > 480 && window.innerWidth <= 768);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // 🎨 Responsive Styles
  const titleStyle = {
    fontSize: isMobile ? "28px" : isTablet ? "40px" : "65px",
    fontWeight: "800",
    lineHeight: "1.2",
    color: "#fff",
    textShadow: "2px 2px 8px rgba(0,0,0,0.5)",
  };

  const paragraphStyle = {
    fontSize: isMobile ? "16px" : isTablet ? "18px" : "22px",
    color: "#eee",
    maxWidth: "800px",
    lineHeight: "1.6",
    marginTop: "15px",
  };

  const buttonStylePrimary = {
    padding: isMobile ? "12px 25px" : "14px 35px",
    background: "#1e90ff",
    border: "none",
    color: "white",
    borderRadius: "10px",
    fontSize: isMobile ? "16px" : "18px",
    fontWeight: "600",
    cursor: "pointer",
  };

  const buttonStyleOutline = {
    padding: isMobile ? "12px 25px" : "14px 35px",
    border: "2px solid #fff",
    background: "transparent",
    color: "#fff",
    borderRadius: "10px",
    fontSize: isMobile ? "16px" : "18px",
    fontWeight: "600",
    cursor: "pointer",
  };

  return (
    <div
      style={{
        width: "100%",
        height: "110vh",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Navbar */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          zIndex: 20,
        }}
      >
        <Navbar />
      </div>

      {/* Video Background */}
      <video
        autoPlay
        loop
        muted
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover",
          zIndex: 0,
        }}
      >
        <source src={video} type="video/mp4" />
      </video>

      {/* Glow */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage:
            "radial-gradient(circle at 50% 0%, rgba(70,130,180,0.55), transparent 70%)",
          filter: "blur(120px)",
          zIndex: 1,
          pointerEvents: "none",
        }}
      />

      {/* Background */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "radial-gradient(125% 125% at 50% 90%, #fff 40%, #475569 100%)",
          zIndex: -1,
          pointerEvents: "none",
        }}
      />

      {/* Content */}
      <div
        style={{
          position: "relative",
          zIndex: 2,
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
          paddingTop: "80px",
          paddingLeft: "10px",
          paddingRight: "10px",
        }}
      >
        <h1 style={titleStyle}>
          Build Future-Ready{" "}
          <span style={{ color: "#4da3ff" }}>Software Solutions</span>
        </h1>

        <p style={paragraphStyle}>
          We develop powerful, scalable and modern applications designed to
          transform your business digitally.
        </p>

        <div
          style={{
            marginTop: "30px",
            display: "flex",
            gap: "20px",
            flexWrap: "wrap",
            justifyContent: "center",
          }}
        >
          <button style={buttonStylePrimary}>Get Started</button>
          <button style={buttonStyleOutline}>Learn More</button>
        </div>
      </div>
    </div>
  );
}
