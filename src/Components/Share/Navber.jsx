
// import React, { useState } from "react";
// import { NavLink } from "react-router"; // fixed import
// import { FaBars, FaTimes } from "react-icons/fa";
// import { motion, AnimatePresence } from "framer-motion";

// export default function Navbar() {
//   const [menuOpen, setMenuOpen] = useState(false);

//   const menuItems = [
//     { name: "Home", path: "/" },
//     { name: "Services", path: "/services" },
//     { name: "Our Work", path: "/outwork" },
//     { name: "Why Us?", path: "/whyUs" },
//     { name: "Blog", path: "/blog" },
//     { name: "Company & Culture", path: "/companyCulture" },
//     { name: "Contact", path: "/contact" },
//     {admin ? { name: "DashBoard", path: "/DashBoard" }
//     :""
//     }
   

//   ];
//   const dasbordmenuItesm={
//      name:"TestimonialForm"path:"testimonialForm"
//   }

//   const navbarStyle = {
//     maxWidth: "1320px",
//     margin: "0 auto",
//     padding: "15px 20px",
//     display: "flex",
//     justifyContent: "space-between",
//     alignItems: "center",
//     position: "sticky",
//     top: 0,
//     backgroundColor: "#FFFFFF00",
//     zIndex: 100,
//     // boxShadow: "0 4px 12px rgba(0,0,0,0.05)",
   
//   };

//   const linkStyle = {
//     textDecoration: "none",
//     color: "#333",
//     fontWeight: 500,
//     fontSize: "18px",
//     cursor: "pointer",
//     whiteSpace: "nowrap",
//   };

//   const mobileMenuStyle = {
//     position: "absolute",
//     top: "70px",
//     left: "10px",
//     right: "10px",
//     backgroundColor: "#f1f1f1",
//     padding: "15px",
//     borderRadius: "10px",
//     display: "flex",
//     flexDirection: "column",
//     gap: "10px",
//     zIndex: 99,
//   };

//   // CSS for responsive
//   const responsiveStyle = `
//     @media (max-width: 768px) {
//       .desktop-menu {
//         display: none !important;
//       }
//       .mobile-icon {
//         display: block !important;
//         cursor: pointer;
//       }
//     }

//     @media (min-width: 769px) {
//       .mobile-icon {
//         display: none !important;
//       }
//     }
//   `;

//   return (
//     <nav style={navbarStyle}>
//       <style>{responsiveStyle}</style>

//       {/* Logo */}
//       <div style={{ fontWeight: "700", fontSize: "24px" }}>
//         {/* Dream Software Technology */}
//         DST
//       </div>

//       {/* Desktop Menu */}
//       <div
//         className="desktop-menu"
//         style={{
//           display: "flex",
//           gap: "20px",
//           alignItems: "center",
//           marginLeft: "20px",
//           flexWrap: "wrap",
//         }}
//       >
//         {menuItems.map((item, index) => (
//           <NavLink
//             key={index}
//             to={item.path}
//             style={({ isActive }) => ({
//               ...linkStyle,
//               color: isActive ? "#3272fcff" : "#333",
//             })}
//           >
//             {item.name}
//           </NavLink>
//         ))}
//       </div>

//       {/* Mobile Icon */}
//       <div
//         className="mobile-icon"
//         style={{ fontSize: "24px" }}
//         onClick={() => setMenuOpen(!menuOpen)}
//       >
//         {menuOpen ? <FaTimes /> : <FaBars />}
//       </div>

//       {/* Mobile Menu */}
//       <AnimatePresence>
//         {menuOpen && (
//           <motion.div
//             initial={{ opacity: 0, y: -10, scale: 0.95 }}
//             animate={{ opacity: 1, y: 0, scale: 1 }}
//             exit={{ opacity: 0, y: -10, scale: 0.95 }}
//             transition={{ duration: 0.2 }}
//             style={mobileMenuStyle}
//           >
//             {menuItems.map((item, index) => (
//               <NavLink
//                 key={index}
//                 to={item.path}
//                 style={({ isActive }) => ({
//                   ...linkStyle,
//                   color: isActive ? "#1e90ff" : "#333",
//                 })}
//                 onClick={() => setMenuOpen(false)}
//               >
//                 {item.name}
//               </NavLink>
//             ))}
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </nav>
//   );
// }



import React, { useState } from "react";
import { NavLink } from "react-router";
import { FaBars, FaTimes } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dashboardOpen, setDashboardOpen] = useState(false); // dashboard submenu

  const admin = false;

  const dashboardSubmenu = [
    { name: "Testimonial Form", path: "/testimonialForm" },
    { name: "All Testimonials", path: "/testimonials" },
    { name: "Users", path: "/users" },
    { name: "Settings", path: "/adminSettings" },
  ];

  const menuItems = [
    { name: "Home", path: "/" },
    { name: "Services", path: "/services" },
    { name: "Our Work", path: "/outwork" },
    { name: "Why Us?", path: "/whyUs" },
    { name: "Blog", path: "/blog" },
    { name: "Company & Culture", path: "/companyCulture" },
    { name: "Contact", path: "/contact" },
  ];

  const navbarStyle = {
    maxWidth: "1320px",
    margin: "0 auto",
    padding: "15px 20px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    position: "sticky",
    top: 0,
    zIndex: 100,
    backgroundColor: "",
  };

  const linkStyle = {
    textDecoration: "none",
    color: "#333",
    fontWeight: 500,
    fontSize: "18px",
    cursor: "pointer",
    whiteSpace: "nowrap",
  };

  const dropdownBox = {
    position: "absolute",
    top: "50px",
    left: 0,
    background: "#fff",
    padding: "10px 0",
    borderRadius: "8px",
    boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
    display: "flex",
    flexDirection: "column",
    minWidth: "180px",
    zIndex: 200,
  };

  const responsiveStyle = `
    @media (max-width: 768px) {
      .desktop-menu { display: none !important; }
      .mobile-icon { display: block !important; }
      .mobile-dashboard { margin-left: 15px; font-weight: 600; }
    }
    @media (min-width: 769px) {
      .mobile-icon { display: none !important; }
    }
  `;

  return (
    <nav style={navbarStyle}>
      <style>{responsiveStyle}</style>

      {/* Logo */}
      <div style={{ fontWeight: "700", fontSize: "24px" }}>DST</div>

      {/* Desktop Menu */}
      <div
        className="desktop-menu"
        style={{ display: "flex", gap: "20px", alignItems: "center" }}
      >
        {menuItems.map((item, index) => (
          <NavLink
            key={index}
            to={item.path}
            style={({ isActive }) => ({
              ...linkStyle,
              color: isActive ? "#3272fcff" : "#333",
            })}
          >
            {item.name}
          </NavLink>
        ))}

        {/* ADMIN DASHBOARD DROPDOWN */}
        {admin && (
          <div style={{ position: "relative" }}>
            <span
              onClick={() => setDashboardOpen(!dashboardOpen)}
              style={{ ...linkStyle, cursor: "pointer" }}
            >
              Dashboard ▾
            </span>

            <AnimatePresence>
              {dashboardOpen && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.2 }}
                  style={dropdownBox}
                >
                  {dashboardSubmenu.map((item, idx) => (
                    <NavLink
                      key={idx}
                      to={item.path}
                      onClick={() => setDashboardOpen(false)}
                      style={{
                        padding: "10px 20px",
                        textDecoration: "none",
                        color: "#333",
                        fontSize: "16px",
                      }}
                    >
                      {item.name}
                    </NavLink>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        )}
      </div>

      {/* Mobile Icon */}
      <div
        className="mobile-icon"
        style={{ fontSize: "24px" }}
        onClick={() => setMenuOpen(!menuOpen)}
      >
        {menuOpen ? <FaTimes /> : <FaBars />}
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            style={{
              position: "absolute",
              top: "70px",
              left: "10px",
              right: "10px",
              background: "#f1f1f1",
              padding: "15px",
              borderRadius: "10px",
              display: "flex",
              flexDirection: "column",
              gap: "10px",
            }}
          >
            {menuItems.map((item, index) => (
              <NavLink
                key={index}
                to={item.path}
                onClick={() => setMenuOpen(false)}
                style={linkStyle}
              >
                {item.name}
              </NavLink>
            ))}

            {/* MOBILE DASHBOARD */}
            {admin && (
              <div>
                <div
                  className="mobile-dashboard"
                  onClick={() => setDashboardOpen(!dashboardOpen)}
                  style={{ fontSize: "18px", cursor: "pointer" }}
                >
                  Dashboard ▾
                </div>

                {dashboardOpen && (
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      marginLeft: "15px",
                      marginTop: "10px",
                      gap: "8px",
                    }}
                  >
                    {dashboardSubmenu.map((item, idx) => (
                      <NavLink
                        key={idx}
                        to={item.path}
                        onClick={() => {
                          setMenuOpen(false);
                          setDashboardOpen(false);
                        }}
                        style={linkStyle}
                      >
                        {item.name}
                      </NavLink>
                    ))}
                  </div>
                )}
              </div>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}

