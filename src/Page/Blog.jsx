import React from "react";
import { BiCalendar, BiUser } from "react-icons/bi";


export default function Blog() {
  const posts = [
    {
      title: "Building Efficient Hospital Management Software",
      date: "Nov 10, 2025",
      author: "Admin",
      desc: "Learn how we develop scalable hospital management software with patient records, billing, and staff management features.",
    },
    {
      title: "Modern POS Systems for Retail Stores",
      date: "Oct 28, 2025",
      author: "Admin",
      desc: "Discover how our POS and inventory solutions help retail stores manage stock, sales, and invoices efficiently.",
    },
    {
      title: "Creating School Management Applications",
      date: "Sep 15, 2025",
      author: "Admin",
      desc: "We design school management software to handle student data, attendance, exams, and teacher management seamlessly.",
    },
  ];

  return (
    <div style={{ width: "100%", backgroundColor: "#f5f7fa", padding: "60px 20px" }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        
        {/* Heading */}
        <h2 style={{ fontSize: "36px", fontWeight: "700", textAlign: "center", color: "#333", marginBottom: "10px" }}>
          Our Blog
        </h2>
        <p style={{ fontSize: "16px", color: "#555", textAlign: "center", marginBottom: "40px" }}>
          Stay updated with the latest news, updates, and insights about our software and applications.
        </p>

        {/* Blog Cards */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
          gap: "25px"
        }}>
          {posts.map((post, i) => (
            <div key={i} style={{
              background: "#fff",
              padding: "25px",
              borderRadius: "14px",
              boxShadow: "0 3px 12px rgba(0,0,0,0.12)",
              transition: "0.3s"
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
              <h3 style={{ fontSize: "20px", fontWeight: "600", marginBottom: "10px" }}>{post.title}</h3>
              <p style={{ fontSize: "14px", color: "#666", marginBottom: "10px" }}>{post.desc}</p>
              <div style={{ display: "flex", justifyContent: "space-between", fontSize: "13px", color: "#999" }}>
                <span><BiCalendar size={14} /> {post.date}</span>
                <span><BiUser size={14} /> {post.author}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
