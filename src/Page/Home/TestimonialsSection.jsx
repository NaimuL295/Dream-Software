import React from "react";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay, EffectCoverflow } from "swiper/modules";
import { FaQuoteLeft, FaStar } from "react-icons/fa";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-coverflow";

export default function TestimonialsSection() {
  const testimonials = [
    { 
      name: "Dr. Rahman", 
      role: "Chief Medical Officer",
      feedback: "Hospital management software simplified all our daily operations and improved patient care significantly. The transition was seamless and our staff adapted quickly.",
      rating: 5,
      avatar: "👨‍⚕️"
    },
    { 
      name: "Mrs. Alam", 
      role: "School Principal",
      feedback: "School management system is very user-friendly and efficient. It saved us countless hours of administrative work and improved communication with parents.",
      rating: 5,
      avatar: "👩‍🏫"
    },
    { 
      name: "Mr. Karim", 
      role: "Store Owner",
      feedback: "Inventory tracking became effortless with their POS system. Our sales have increased by 40% since implementation and stock management is now a breeze.",
      rating: 4,
      avatar: "👨‍💼"
    },
    { 
      name: "Ms. Hossain", 
      role: "Finance Director",
      feedback: "The ERP solution helped streamline our accounting process and reduced errors by 95%. Highly recommended for any growing business!",
      rating: 5,
      avatar: "👩‍💼"
    },
    { 
      name: "Mr. Akbar", 
      role: "IT Manager",
      feedback: "Customer support is fast, friendly, and always helpful. They go above and beyond to solve any issues. Truly exceptional service!",
      rating: 5,
      avatar: "👨‍💻"
    },
    { 
      name: "Ms. Chowdhury", 
      role: "HR Director",
      feedback: "The employee management module transformed our HR processes. Everything from onboarding to payroll is now automated and efficient.",
      rating: 5,
      avatar: "👩‍💼"
    },
  ];

  const StarRating = ({ rating }) => {
    return (
      <div style={{ display: "flex", gap: "0.25rem", justifyContent: "center", marginBottom: "0.9375rem" }}>
        {[...Array(5)].map((_, i) => (
          <FaStar
            key={i}
            size="1.125rem"
            color={i < rating ? "#FFD700" : "#E2E8F0"}
            style={{ transition: "all 0.3s ease" }}
          />
        ))}
      </div>
    );
  };

  return (
    <motion.section
      id="testimonials"
      style={{
        background: "#ffffff",
        padding: "4.5rem 1.25rem",
        textAlign: "center",
        overflow: "hidden",
        position: "relative",
      }}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      {/* Background decorative elements */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: "radial-gradient(circle at 20% 80%, rgba(102, 126, 234, 0.05) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(118, 75, 162, 0.05) 0%, transparent 50%)",
          pointerEvents: "none",
        }}
      />
      
      <motion.div
        initial={{ y: "1.875rem", opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <h2
          style={{
            fontSize: "3.5rem",
            color: "#1a202c",
            marginBottom: "1.25rem",
            fontWeight: "800",
          }}
        >
          What Our Clients Say
        </h2>
        <p
          style={{
            fontSize: "1.2rem",
            color: "#4a5568",
            marginBottom: "5rem",
            maxWidth: "37.5rem",
            marginLeft: "auto",
            marginRight: "auto",
            lineHeight: "1.6",
          }}
        >
          Don't just take our word for it. Here's what our valued clients have to say about their experience.
        </p>
      </motion.div>

      <div style={{ position: "relative", maxWidth: "87.5rem", margin: "0 auto" }}>
        {/* Custom Navigation Arrows */}
        <button className="swiper-button-prev-custom" 
          style={{
            position: "absolute",
            left: "-3.75rem",
            top: "50%",
            transform: "translateY(-50%)",
            zIndex: 10,
            background: "white",
            borderRadius: "50%",
            width: "3.125rem",
            height: "3.125rem",
            border: "0.125rem solid #e2e8f0",
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            boxShadow: "0 0.25rem 0.9375rem rgba(0,0,0,0.1)",
            transition: "all 0.3s ease",
          }}
          onMouseEnter={(e) => {
            e.target.style.background = "#f7fafc";
            e.target.style.borderColor = "#667eea";
            e.target.style.transform = "translateY(-50%) scale(1.1)";
          }}
          onMouseLeave={(e) => {
            e.target.style.background = "white";
            e.target.style.borderColor = "#e2e8f0";
            e.target.style.transform = "translateY(-50%) scale(1)";
          }}
        >
          <IoIosArrowBack size="1.5rem" color="#667eea" />
        </button>

        <button className="swiper-button-next-custom"
          style={{
            position: "absolute",
            right: "-3.75rem",
            top: "50%",
            transform: "translateY(-50%)",
            zIndex: 10,
            background: "white",
            borderRadius: "50%",
            width: "3.125rem",
            height: "3.125rem",
            border: "0.125rem solid #e2e8f0",
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            boxShadow: "0 0.25rem 0.9375rem rgba(0,0,0,0.1)",
            transition: "all 0.3s ease",
          }}
          onMouseEnter={(e) => {
            e.target.style.background = "#f7fafc";
            e.target.style.borderColor = "#667eea";
            e.target.style.transform = "translateY(-50%) scale(1.1)";
          }}
          onMouseLeave={(e) => {
            e.target.style.background = "white";
            e.target.style.borderColor = "#e2e8f0";
            e.target.style.transform = "translateY(-50%) scale(1)";
          }}
        >
          <IoIosArrowForward size="1.5rem" color="#667eea" />
        </button>

        <Swiper
          modules={[Navigation, Pagination, Autoplay, EffectCoverflow]}
          spaceBetween={30}
          slidesPerView={3}
          navigation={{
            prevEl: ".swiper-button-prev-custom",
            nextEl: ".swiper-button-next-custom",
          }}
          pagination={{
            clickable: true,
            el: ".swiper-pagination-custom",
            renderBullet: function (index, className) {
              return `<span class="${className}" style="background: #667eea; width: 0.75rem; height: 0.75rem; margin: 0 0.375rem; opacity: 0.4;"></span>`;
            },
          }}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          effect="coverflow"
          coverflowEffect={{
            rotate: 0,
            stretch: 0,
            depth: 100,
            modifier: 2.5,
            slideShadows: false,
          }}
          breakpoints={{
            320: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 30,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 30,
            },
          }}
          loop={true}
          style={{
            padding: "2.5rem 0 5rem 0",
          }}
        >
          {testimonials.map((t, i) => (
            <SwiperSlide key={i}>
              <motion.div
                style={{
                  background: "white",
                  borderRadius: "1.5rem",
                  padding: "2.5rem 1.875rem",
                  minHeight: "25rem",
                  boxShadow: "0 0.625rem 1.875rem rgba(0,0,0,0.08), 0 0 0 0.0625rem #f1f5f9",
                  position: "relative",
                  border: "0.0625rem solid #f1f5f9",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  transition: "all 0.3s ease",
                }}
                initial={{ y: "3.75rem", opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ 
                  delay: i * 0.1,
                  type: "spring",
                  stiffness: 100
                }}
                whileHover={{ 
                  scale: 1.03,
                  y: "-0.3125rem",
                  boxShadow: "0 1.25rem 2.5rem rgba(0,0,0,0.12), 0 0 0 0.0625rem #e2e8f0"
                }}
              >
                {/* Quote Icon */}
                <div
                  style={{
                    position: "absolute",
                    top: "-1.25rem",
                    left: "1.875rem",
                    background: "linear-gradient(135deg, #667eea, #764ba2)",
                    borderRadius: "50%",
                    width: "3.75rem",
                    height: "3.75rem",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    boxShadow: "0 0.5rem 1.25rem rgba(102, 126, 234, 0.3)",
                  }}
                >
                  <FaQuoteLeft size="1.25rem" color="white" />
                </div>

                {/* Avatar */}
                <div
                  style={{
                    fontSize: "3rem",
                    marginBottom: "1.25rem",
                    marginTop: "0.625rem",
                  }}
                >
                  {t.avatar}
                </div>

                <StarRating rating={t.rating} />

                <p
                  style={{
                    fontSize: "1rem",
                    color: "#4a5568",
                    marginBottom: "1.5625rem",
                    lineHeight: "1.7",
                    fontStyle: "italic",
                    textAlign: "left",
                    flex: 1,
                  }}
                >
                  "{t.feedback}"
                </p>
                
                <div style={{ textAlign: "left" }}>
                  <h4
                    style={{
                      color: "#2d3748",
                      fontWeight: "700",
                      fontSize: "1.2rem",
                      marginBottom: "0.3125rem",
                    }}
                  >
                    {t.name}
                  </h4>
                  <p
                    style={{
                      color: "#718096",
                      fontSize: "0.9rem",
                      fontWeight: "500",
                    }}
                  >
                    {t.role}
                  </p>
                </div>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Custom Pagination */}
        <div className="swiper-pagination-custom" 
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            marginTop: "1.25rem",
          }}
        />
      </div>

      {/* Floating decorative icons */}
      <div style={{
        position: "absolute",
        bottom: "3.125rem",
        right: "3.125rem",
        opacity: 0.03,
        fontSize: "8rem",
        zIndex: 0,
        color: "#667eea",
      }}>
        <FaQuoteLeft />
      </div>
      <div style={{
        position: "absolute",
        top: "3.125rem",
        left: "3.125rem",
        opacity: 0.03,
        fontSize: "6rem",
        transform: "rotate(180deg)",
        zIndex: 0,
        color: "#764ba2",
      }}>
        <FaQuoteLeft />
      </div>
    </motion.section>
  );
}