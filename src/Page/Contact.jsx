import React from "react";
import { MdEmail, MdPhone, MdLocationOn, MdSend } from "react-icons/md";

export default function Contact() {
  const containerStyle = {
    width: "100%",
    backgroundColor: "#f9fafb",
    padding: "64px 24px",
    boxSizing: "border-box",
  };

  const headingStyle = {
    textAlign: "center",
    maxWidth: "640px",
    margin: "0 auto 40px auto",
  };

  const headingTitleStyle = {
    fontSize: "2.5rem",
    fontWeight: "700",
    color: "#1f2937",
    margin: 0,
  };

  const headingDescStyle = {
    fontSize: "1rem",
    color: "#4b5563",
    marginTop: "12px",
  };

  const contactGridStyle = {
    maxWidth: "1152px",
    margin: "0 auto 64px auto",
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
    gap: "32px",
  };

  const cardStyle = {
    backgroundColor: "#ffffff",
    padding: "24px",
    borderRadius: "16px",
    boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
    textAlign: "center",
    transition: "transform 0.3s, box-shadow 0.3s",
    cursor: "default",
  };

  const cardHoverStyle = {
    transform: "translateY(-5px)",
    boxShadow: "0 8px 15px rgba(0,0,0,0.2)",
  };

  const cardIconStyle = {
    marginBottom: "12px",
  };

  const cardTitleStyle = {
    fontSize: "1.25rem",
    fontWeight: "600",
    marginBottom: "8px",
  };

  const cardDescStyle = {
    color: "#4b5563",
    fontSize: "0.875rem",
    margin: 0,
  };

  const formContainerStyle = {
    maxWidth: "768px",
    margin: "0 auto",
    backgroundColor: "#ffffff",
    padding: "40px",
    borderRadius: "24px",
    boxShadow: "0 6px 12px rgba(0,0,0,0.1)",
  };

  const formTitleStyle = {
    fontSize: "1.75rem",
    fontWeight: "700",
    color: "#1f2937",
    marginBottom: "24px",
  };

  const formGridStyle = {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
    gap: "24px",
  };

  const inputStyle = {
    padding: "12px",
    borderRadius: "8px",
    border: "1px solid #d1d5db",
    fontSize: "1rem",
    boxSizing: "border-box",
    width: "100%",
  };

  const textareaStyle = {
    ...inputStyle,
   
    minHeight: "120px",
  };

  const buttonStyle = {
    gridColumn: "",
    backgroundColor: "#2563eb",
    color: "#ffffff",
    padding: "12px",
    borderRadius: "8px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "8px",
    border: "none",
    fontSize: "1rem",
    cursor: "pointer",
    transition: "background-color 0.3s",
  };

  const handleMouseEnter = (e) => {
    e.currentTarget.style.backgroundColor = "#1d4ed8";
  };

  const handleMouseLeave = (e) => {
    e.currentTarget.style.backgroundColor = "#2563eb";
  };

  return (
    <div style={containerStyle}>
      {/* Heading */}
      <div style={headingStyle}>
        <h2 style={headingTitleStyle}>Contact Us</h2>
        <p style={headingDescStyle}>
          Contact us for any kind of software, web application, or PC application development.
        </p>
      </div>

      {/* Contact Info */}
      <div style={contactGridStyle}>
        <div
          style={cardStyle}
          onMouseEnter={(e) => Object.assign(e.currentTarget.style, cardHoverStyle)}
          onMouseLeave={(e) => Object.assign(e.currentTarget.style, cardStyle)}
        >
          <MdEmail size={32} color="#2563eb" style={cardIconStyle} />
          <h3 style={cardTitleStyle}>Email</h3>
          <p style={cardDescStyle}>support@yourcompany.com</p>
        </div>

        <div
          style={cardStyle}
          onMouseEnter={(e) => Object.assign(e.currentTarget.style, cardHoverStyle)}
          onMouseLeave={(e) => Object.assign(e.currentTarget.style, cardStyle)}
        >
          <MdPhone size={32} color="#16a34a" style={cardIconStyle} />
          <h3 style={cardTitleStyle}>Phone</h3>
          <p style={cardDescStyle}>+880 1700-000000</p>
        </div>

        <div
          style={cardStyle}
          onMouseEnter={(e) => Object.assign(e.currentTarget.style, cardHoverStyle)}
          onMouseLeave={(e) => Object.assign(e.currentTarget.style, cardStyle)}
        >
          <MdLocationOn size={32} color="#dc2626" style={cardIconStyle} />
          <h3 style={cardTitleStyle}>Address</h3>
          <p style={cardDescStyle}>Dhaka, Bangladesh</p>
        </div>
      </div>

      {/* Contact Form */}
      <div style={formContainerStyle}>
        <h3 style={formTitleStyle}>Send us a message</h3>
        <form style={formGridStyle}>
          <input type="text" name="name" placeholder="Your Name" style={inputStyle} />
          <input type="email" name="email" placeholder="Your Email" style={inputStyle} />
          <input type="text" name="subject" placeholder="Subject" style={{ ...inputStyle, gridColumn: "1 / -1" }} />
          <textarea name="message" placeholder="Message" style={textareaStyle}></textarea>
          <button
            type="submit"
            style={buttonStyle}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <MdSend size={20} /> Send Message
          </button>
        </form>
      </div>
    </div>
  );
}
