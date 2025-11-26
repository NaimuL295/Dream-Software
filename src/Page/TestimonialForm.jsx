import React, { useState } from "react";
import { FaStar } from "react-icons/fa";
import Swal from "sweetalert2";

export default function TestimonialForm() {
  const [formData, setFormData] = useState({
    name: "",
    role: "",
    feedback: "",
    rating: 0,
  });

  // Handle Input Change
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Submit Review
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.name || !formData.feedback || formData.rating === 0) {
      Swal.fire({
        icon: "warning",
        title: "Please fill all required fields!",
        position: "top-end",
        showConfirmButton: false,
        timer: 1500,
      });
      return;
    }

    const res = await fetch("http://localhost:5000/review", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    if (res.ok) {
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "Thanks! Your review has been submitted.",
        showConfirmButton: false,
        timer: 1500,
      });

      setFormData({ name: "", role: "", feedback: "", rating: 0 });
    } else {
      Swal.fire({
        position: "top-end",
        icon: "error",
        title: "Failed to submit review!",
        showConfirmButton: false,
        timer: 1500,
      });
    }
  };

  return (
    <div
      style={{
        maxWidth: "650px",
        margin: "40px auto",
        padding: "25px",
        background: "#fff",
        borderRadius: "12px",
        boxShadow: "0 8px 25px rgba(0,0,0,0.1)",
      }}
    >
      <h2
        style={{
          textAlign: "center",
          fontSize: "28px",
          fontWeight: "700",
          marginBottom: "20px",
        }}
      >
        Submit Your Testimonial
      </h2>

      <form onSubmit={handleSubmit}>
        {/* Name */}
        <input
          type="text"
          name="name"
          placeholder="Your Name *"
          value={formData.name}
          onChange={handleChange}
          style={styles.input}
        />

        {/* Role */}
        <input
          type="text"
          name="role"
          placeholder="Your Role (Optional)"
          value={formData.role}
          onChange={handleChange}
          style={styles.input}
        />

        {/* Rating */}
        <div style={{ marginBottom: "15px" }}>
          <p style={{ marginBottom: "8px", fontWeight: "600" }}>Rating *</p>
          <div style={{ display: "flex", gap: "10px" }}>
            {[1, 2, 3, 4, 5].map((star) => (
              <FaStar
                key={star}
                size={28}
                onClick={() => setFormData({ ...formData, rating: star })}
                color={formData.rating >= star ? "#facc15" : "#d1d5db"}
                style={{ cursor: "pointer", transition: "0.3s" }}
              />
            ))}
          </div>
        </div>

        {/* Feedback */}
        <textarea
          name="feedback"
          placeholder="Write your feedback *"
          value={formData.feedback}
          onChange={handleChange}
          style={styles.textarea}
        ></textarea>

        <button type="submit" style={styles.button}>
          Submit Review
        </button>
      </form>
    </div>
  );
}

const styles = {
  input: {
    width: "100%",
    padding: "12px 15px",
    marginBottom: "15px",
    borderRadius: "8px",
    border: "1px solid #ddd",
    fontSize: "16px",
  },
  textarea: {
    width: "100%",
    padding: "12px 15px",
    height: "120px",
    borderRadius: "8px",
    border: "1px solid #ddd",
    fontSize: "16px",
    marginBottom: "15px",
  },
  button: {
    width: "100%",
    padding: "14px",
    background: "#2563eb",
    color: "#fff",
    fontSize: "18px",
    fontWeight: "600",
    borderRadius: "8px",
    border: "none",
    cursor: "pointer",
  },
};
