
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";

export default function FAQSection() {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    { 
      question: "Can I try the software before subscribing?", 
      answer: "Yes, we provide a 14-day free trial for all software. No credit card required to get started." 
    },
    { 
      question: "Is my data secure?", 
      answer: "Absolutely. We use encrypted cloud storage and secure local backups. All data is protected with enterprise-grade security measures." 
    },
    { 
      question: "Can I switch plans anytime?", 
      answer: "Yes, you can upgrade or downgrade your subscription at any time. Changes take effect immediately." 
    },
    { 
      question: "What payment methods do you accept?", 
      answer: "We accept all major credit cards, PayPal, and bank transfers for annual plans." 
    },
    { 
      question: "Do you offer customer support?", 
      answer: "Yes, we offer 24/7 customer support via email, chat, and phone for all paid plans." 
    },
  ];

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <motion.section
      id="faq"
      style={{
        backgroundColor: "#ffffff",
        padding: "80px 20px",
        textAlign: "center",
      }}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <h2
        style={{
          fontSize: "36px",
          color: "#000000", 
          marginBottom: "40px",
          fontWeight: "700",
        }}
      >
        Frequently Asked Questions
      </h2>

      <div style={{ maxWidth: "800px", margin: "0 auto" }}>
        {faqs.map((faq, index) => (
          <motion.div
            key={index}
            style={{
              backgroundColor: "#f9fafb", 
              borderRadius: "12px",
              padding: "20px",
              marginBottom: "16px",
              boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
              border: "1px solid #e2e8f0",
              cursor: "pointer",
            }}
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ delay: index * 0.1 }}
            whileHover={{
              backgroundColor: "#f1f5f9",
              boxShadow: "0 4px 12px rgba(0,0,0,0.12)",
            }}
            onClick={() => toggleFAQ(index)}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <h3
                style={{
                  color: "#111827", 
                  fontSize: "18px",
                  fontWeight: "600",
                  textAlign: "left",
                }}
              >
                {faq.question}
              </h3>
              <motion.div
                animate={{ rotate: activeIndex === index ? 180 : 0 }}
                transition={{ duration: 0.3 }}
                style={{ color: "#1565c0" }} 
              >
                {activeIndex === index ? <FiChevronUp size={20} /> : <FiChevronDown size={20} />}
              </motion.div>
            </div>

            <AnimatePresence>
              {activeIndex === index && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <p
                    style={{
                      color: "#334155", 
                      marginTop: "16px",
                      textAlign: "left",
                      lineHeight: "1.6",
                      fontSize: "16px",
                    }}
                  >
                    {faq.answer}
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        ))}
      </div>

      {/* Additional CTA */}
      <motion.div
        style={{
          marginTop: "40px",
          padding: "30px",
          backgroundColor: "#f1f5f9", 
          borderRadius: "12px",
          maxWidth: "600px",
          margin: "40px auto 0",
        }}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
      >
        <h3 style={{ color: "#1565c0", marginBottom: "10px" }}>
          Still have questions?
        </h3>
        <p style={{ color: "#475569", marginBottom: "20px" }}>
          Can't find the answer you're looking for? Please chat with our friendly team.
        </p>
        <motion.button
          style={{
            backgroundColor: "#1565c0",
            color: "#ffffff",
            border: "none",
            padding: "12px 24px",
            borderRadius: "8px",
            fontSize: "16px",
            fontWeight: "600",
            cursor: "pointer",
          }}
          whileHover={{
            backgroundColor: "#0d47a1",
            scale: 1.05,
          }}
          whileTap={{ scale: 0.95 }}
        >
          Get in Touch
        </motion.button>
      </motion.div>
    </motion.section>
  );
}
