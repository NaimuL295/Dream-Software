import React from "react";
import { FaHospital, FaStore, FaSchool, FaClipboardCheck } from "react-icons/fa";

export default function OurWork() {
  const works = [
    {
      icon: <FaHospital size={45} color="#1565c0" />,
      title: "Hospital Management Software",
      desc: "Complete OPD, IPD, Billing, Pharmacy, Laboratory and Doctor Scheduling system.",
    },
    {
      icon: <FaStore size={45} color="#1565c0" />,
      title: "POS & Inventory System",
      desc: "Stock control, barcode billing, supplier management and shop accounting system.",
    },
    {
      icon: <FaSchool size={45} color="#1565c0" />,
      title: "School Management App",
      desc: "Student info, attendance, exam results, fee collection and teacher management.",
    },
    {
      icon: <FaClipboardCheck size={45} color="#1565c0" />,
      title: "Project & Task Manager",
      desc: "Manage teams, tasks, reports, deadlines and performance analytics.",
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
        }}
      >
        {/* Heading */}
        <h2
          style={{
            textAlign: "center",
            fontSize: "36px",
            fontWeight: "700",
            color: "#333",
            marginBottom: "10px",
          }}
        >
          Our Work
        </h2>

        <p
          style={{
            textAlign: "center",
            maxWidth: "600px",
            margin: "0 auto 40px",
            color: "#555",
            fontSize: "15px",
          }}
        >
          We build powerful desktop and web-based management software for
          hospitals, shops, schools and businesses.
        </p>

        {/* Work Cards */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
            gap: "25px",
          }}
        >
          {works.map((work, i) => (
            <div
              key={i}
              style={{
                background: "#fff",
                padding: "25px",
                borderRadius: "14px",
                boxShadow: "0 3px 12px rgba(0,0,0,0.12)",
                transition: ".3s",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-6px)";
                e.currentTarget.style.boxShadow =
                  "0 6px 18px rgba(0,0,0,0.18)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow =
                  "0 3px 12px rgba(0,0,0,0.12)";
              }}
            >
              {/* Icon */}
              <div style={{ marginBottom: "15px" }}>{work.icon}</div>

              {/* Title */}
              <h3
                style={{
                  fontSize: "20px",
                  fontWeight: "600",
                  marginBottom: "8px",
                }}
              >
                {work.title}
              </h3>

              {/* Description */}
              <p
                style={{
                  fontSize: "14px",
                  color: "#666",
                  lineHeight: "1.5",
                }}
              >
                {work.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
