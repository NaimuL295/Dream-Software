import React from "react";
import { FaHospitalUser, FaCashRegister, FaClipboardList, FaUsersCog } from "react-icons/fa";

export default function Services() {
  const items = [
    {
      icon: <FaHospitalUser size={40} color="#1E88E5" />,
      title: "Patient Management",
      desc: "Add, update, and track patient records, history and prescriptions.",
    },
    {
      icon: <FaClipboardList size={40} color="#1E88E5" />,
      title: "Inventory Control",
      desc: "Manage medicine, stock, suppliers and automated low stock alerts.",
    },
    {
      icon: <FaCashRegister size={40} color="#1E88E5" />,
      title: "Billing & Invoices",
      desc: "Generate professional bills, print receipts and track payments.",
    },
    {
      icon: <FaUsersCog size={40} color="#1E88E5" />,
      title: "Staff Management",
      desc: "Manage doctors, nurses, staff roles and daily performance.",
    },
  ];

  return (
    <div
      style={{
        width: "100%",
        padding: "50px 0",
        backgroundColor: "#f2f4f7",
      }}
    >
      <div
        style={{
          width: "90%",
          maxWidth: "1200px",
          margin: "0 auto",
        }}
      >
        {/* Heading */}
        <h2
          style={{
            fontSize: "34px",
            fontWeight: "700",
            marginBottom: "10px",
            textAlign: "center",
            color: "#333",
          }}
        >
          Our Software Modules
        </h2>

        <p
          style={{
            textAlign: "center",
            maxWidth: "600px",
            margin: "0 auto 40px",
            fontSize: "15px",
            color: "#555",
          }}
        >
          We develop professional desktop applications for hospital, inventory,
          school and business management.
        </p>

        {/* Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
            gap: "25px",
          }}
        >
          {items.map((item, index) => (
            <div
              key={index}
              style={{
                background: "#fff",
                padding: "25px",
                borderRadius: "12px",
                boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
                transition: "0.3s",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-6px)";
                e.currentTarget.style.boxShadow =
                  "0 5px 15px rgba(0,0,0,0.15)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow =
                  "0 2px 10px rgba(0,0,0,0.1)";
              }}
            >
              {/* Icon */}
              <div style={{ marginBottom: "15px" }}>{item.icon}</div>

              {/* Title */}
              <h3
                style={{
                  fontSize: "20px",
                  fontWeight: "600",
                  marginBottom: "8px",
                }}
              >
                {item.title}
              </h3>

              {/* Description */}
              <p style={{ color: "#666", fontSize: "14px", lineHeight: "1.5" }}>
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
