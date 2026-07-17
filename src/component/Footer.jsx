<<<<<<< HEAD
import React, { useState, useEffect } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
=======
// import React, { useState, useEffect } from "react";
// import { Container, Row, Col, Button } from "react-bootstrap";
// import {
//   FaFacebookF,
//   FaInstagram,
//   FaLinkedinIn,
//   FaTwitter,
//   FaChevronRight,
//   FaArrowUp,
// } from "react-icons/fa";
// import { IoLocationSharp } from "react-icons/io5";
// import { MdEmail, MdPhone } from "react-icons/md";
// import { Link } from "react-router-dom";

// const Footer = () => {
//   const [showScroll, setShowScroll] = useState(false);

//   // Show back to top button after scrolling
//   useEffect(() => {
//     const handleScroll = () => {
//       setShowScroll(window.scrollY > 200);
//     };
//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   const scrollToTop = () => {
//     window.scrollTo({ top: 0, behavior: "smooth" });
//   };

//   const linkStyle = {
//     color: "#ffffff",
//     textDecoration: "none",
//     display: "flex",
//     alignItems: "center",
//     transition: "all 0.3s ease",
//   };

//   const hoverStyle = {
//     color: "#ffe2da",
//     transform: "translateX(6px)",
//   };

//   return (
//     <footer
//       style={{
//         background:
//           "linear-gradient(45deg, #e45c3c, #dc522e, #e5613d, #e1553a, #da4b2d)",
//         color: "white",
//         position: "relative",
//       }}
//       className="pt-5 pb-4"
//     >
//       <Container>
//         <Row>
//           {/* About Us */}
//           <Col md={3} sm={6} className="mb-4">
//             <h5 className="fw-bold mb-3">Akshar Consultancy</h5>
//             <p>
//               We provide expert solutions for Tax Returns, Business
//               Registrations, Accounting & Compliance. Your financial partner for
//               growth.
//             </p>
//             <div className="d-flex gap-3 mt-3">
//               <a href="/" className="text-white fs-5 social-icon">
//                 <FaFacebookF />
//               </a>
//               <a href="/" className="text-white fs-5 social-icon">
//                 <FaInstagram />
//               </a>
//               <a href="/" className="text-white fs-5 social-icon">
//                 <FaTwitter />
//               </a>
//               <a href="/" className="text-white fs-5 social-icon">
//                 <FaLinkedinIn />
//               </a>
//             </div>
//           </Col>

//           {/* Services */}
//           <Col md={3} sm={6} className="mb-4">
//             <h5 className="fw-bold mb-3">Our Services</h5>
//             <ul className="list-unstyled">
//               {[
//                 { text: "Finance", path: "/service/msme" },
//                 { text: "Tax Return", path: "/service/taxreturn" },
//                 { text: "Audit", path: "/service/audit" },
//                 { text: "Bookkeeping", path: "/service/bookeeping" },
//               ].map(({ text, path }, index) => (
//                 <li className="mb-2" key={index}>
//                   <Link
//                     to={path}
//                     className="text-decoration-none"
//                     style={linkStyle}
//                     onMouseEnter={(e) => {
//                       e.currentTarget.style.color = hoverStyle.color;
//                       e.currentTarget.firstChild.style.transform =
//                         hoverStyle.transform;
//                     }}
//                     onMouseLeave={(e) => {
//                       e.currentTarget.style.color = linkStyle.color;
//                       e.currentTarget.firstChild.style.transform =
//                         "translateX(0)";
//                     }}
//                   >
//                     <FaChevronRight
//                       className="me-2"
//                       style={{ transition: "transform 0.3s ease" }}
//                     />
//                     {text}
//                   </Link>
//                 </li>
//               ))}
//             </ul>
//           </Col>

//           {/* Quick Links */}
//           <Col md={3} sm={6} className="mb-4">
//             <h5 className="fw-bold mb-3">Quick Links</h5>
//             <ul className="list-unstyled">
//               {[
//                 { text: "Home", path: "/" },
//                 { text: "About Us", path: "/about" },
//                 { text: "Our Team", path: "/team" },
//                 { text: "Contact", path: "/contact" },
//               ].map(({ text, path }, index) => (
//                 <li className="mb-2" key={index}>
//                   <Link
//                     to={path}
//                     className="text-decoration-none"
//                     style={linkStyle}
//                     onMouseEnter={(e) => {
//                       e.currentTarget.style.color = hoverStyle.color;
//                       e.currentTarget.firstChild.style.transform =
//                         hoverStyle.transform;
//                     }}
//                     onMouseLeave={(e) => {
//                       e.currentTarget.style.color = linkStyle.color;
//                       e.currentTarget.firstChild.style.transform =
//                         "translateX(0)";
//                     }}
//                   >
//                     <FaChevronRight
//                       className="me-2"
//                       style={{ transition: "transform 0.3s ease" }}
//                     />
//                     {text}
//                   </Link>
//                 </li>
//               ))}
//             </ul>
//           </Col>

//           {/* Contact Info */}
//           <Col md={3} sm={6} className="mb-4">
//             <h5 className="fw-bold mb-3">Contact Info</h5>
//             <p>
//               <a
//                 href="https://www.google.com/maps/place/Rosevill+Sky/@23.0545455,72.6454815,3205m/data=!3m1!1e3!4m10!1m2!2m1!1sA-505,RoseVilleSky,Nikol,Ahmedabad-382350!3m6!1s0x395e878bd3d4c3f9:0x218f4d26a542afaa!8m2!3d23.0545455!4d72.6645359!15sCipBLTUwNSxSb3NlVmlsbGUgU2t5LE5pa29sLEFobWVkYWJhZC0zODIzNTBaLCIqYSA1MDUgcm9zZXZpbGxlIHNreSBuaWtvbCBhaG1lZGFiYWQgMzgyMzUwkgEPc2hvcHBpbmdfY2VudGVymgEkQ2hkRFNVaE5NRzluUzBWSlEwRm5TVVJRY1RsZk1UaFJSUkFCqgGBARABKiwiKDUwNSByb3NldmlsbGUgc2t5IG5pa29sIGFobWVkYWJhZCAzODIzNTAoADIfEAEiG9dLGF3QiOI5Uk2vIe--qJYhNnsTdxSvK72FVzIuEAIiKmEgNTA1IHJvc2V2aWxsZSBza3kgbmlrb2wgYWhtZWRhYmFkIDM4MjM1MOABAPoBBAgAEB8!16s%2Fg%2F11vbvrkrd9?entry=ttu&g_ep=EgoyMDI1MDgxMy4wIKXMDSoASAFQAw%3D%3D"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="text-white text-decoration-none"
//               >
//                 <IoLocationSharp className="me-2" />
//                 A-505, RoseVill Sky,Opp,Pushkar-Icons, Nikol, Ahmedabad - 382350
//               </a>
//             </p>
//             <p>
//               <a
//                 href="tel:+919067640237"
//                 className="text-white text-decoration-none"
//               >
//                 <MdPhone className="me-2" /> +91 90676 40237
//               </a>
//             </p>
//             <p>
//               <a
//                 href="tel:+918980471710"
//                 className="text-white text-decoration-none"
//               >
//                 <MdPhone className="me-2" /> +91 89804 71710
//               </a>
//             </p>
//             <p>
//               <a
//                 href="mailto:aksharconsultancy99@gmail.com"
//                 className="text-white text-decoration-none"
//               >
//                 <MdEmail className="me-2" /> aksharconsultancy99@gmail.com
//               </a>
//             </p>
//           </Col>
//         </Row>

//         <hr className="border-light mt-4" />

//         <Row>
//           <Col className="text-center">
//             <small>
//               © {new Date().getFullYear()} Akshar Consultancy. All rights
//               reserved.
//             </small>
//           </Col>
//         </Row>
//       </Container>

//       {/* Back to Top Button */}
//       {showScroll && (
//         <Button
//           onClick={scrollToTop}
//           style={{
//             position: "fixed",
//             bottom: "25px",
//             right: "25px",
//             borderRadius: "50%",
//             width: "50px",
//             height: "50px",
//             background: "linear-gradient(135deg, #e45c3c, #da4b2d)",
//             color: "white",
//             border: "none",
//             boxShadow: "0 6px 15px rgba(0,0,0,0.3)",
//             zIndex: 999,
//             display: "flex",
//             alignItems: "center",
//             justifyContent: "center",
//             fontSize: "20px",
//             transition: "all 0.3s ease-in-out",
//             animation: "bounce 1.8s infinite",
//           }}
//           className="back-to-top-btn"
//         >
//           <FaArrowUp />
//         </Button>
//       )}

//       <style>{`
//   .back-to-top-btn:hover {
//     transform: scale(1.15) rotate(360deg);
//     background: linear-gradient(135deg, #ff7b5a, #e1553a);
//     box-shadow: 0 8px 20px rgba(0,0,0,0.4);
//   }

//   @keyframes bounce {
//     0%, 20%, 50%, 80%, 100% {
//       transform: translateY(0);
//     }
//     40% {
//       transform: translateY(-6px);
//     }
//     60% {
//       transform: translateY(-3px);
//     }
//   }
// `}</style>
//     </footer>
//   );
// };

// export default Footer;

import React, { useState, useEffect } from "react";
>>>>>>> master
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
  FaChevronRight,
  FaArrowUp,
} from "react-icons/fa";
import { IoLocationSharp } from "react-icons/io5";
import { MdEmail, MdPhone } from "react-icons/md";
import { Link } from "react-router-dom";

const Footer = () => {
  const [showScroll, setShowScroll] = useState(false);

<<<<<<< HEAD
  // Show back to top button after scrolling
  useEffect(() => {
    const handleScroll = () => {
      setShowScroll(window.scrollY > 200);
    };
=======
  useEffect(() => {
    const handleScroll = () => setShowScroll(window.scrollY > 200);
>>>>>>> master
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

<<<<<<< HEAD
  const linkStyle = {
    color: "#ffffff",
    textDecoration: "none",
    display: "flex",
    alignItems: "center",
    transition: "all 0.3s ease",
  };

  const hoverStyle = {
    color: "#ffe2da",
    transform: "translateX(6px)",
  };

  return (
    <footer
      style={{
        background:
          "linear-gradient(45deg, #e45c3c, #dc522e, #e5613d, #e1553a, #da4b2d)",
        color: "white",
        position: "relative",
      }}
      className="pt-5 pb-4"
    >
      <Container>
        <Row>
          {/* About Us */}
          <Col md={3} sm={6} className="mb-4">
            <h5 className="fw-bold mb-3">Akshar Consultancy</h5>
            <p>
              We provide expert solutions for Tax Returns, Business
              Registrations, Accounting & Compliance. Your financial partner for
              growth.
            </p>
            <div className="d-flex gap-3 mt-3">
              <a href="/" className="text-white fs-5 social-icon">
                <FaFacebookF />
              </a>
              <a href="/" className="text-white fs-5 social-icon">
                <FaInstagram />
              </a>
              <a href="/" className="text-white fs-5 social-icon">
                <FaTwitter />
              </a>
              <a href="/" className="text-white fs-5 social-icon">
                <FaLinkedinIn />
              </a>
            </div>
          </Col>

          {/* Services */}
          <Col md={3} sm={6} className="mb-4">
            <h5 className="fw-bold mb-3">Our Services</h5>
            <ul className="list-unstyled">
              {[
                { text: "Finance", path: "/service/msme" },
                { text: "Tax Return", path: "/service/taxreturn" },
                { text: "Audit", path: "/service/audit" },
                { text: "Bookkeeping", path: "/service/bookeeping" },
              ].map(({ text, path }, index) => (
                <li className="mb-2" key={index}>
                  <Link
                    to={path}
                    className="text-decoration-none"
                    style={linkStyle}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.color = hoverStyle.color;
                      e.currentTarget.firstChild.style.transform =
                        hoverStyle.transform;
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.color = linkStyle.color;
                      e.currentTarget.firstChild.style.transform =
                        "translateX(0)";
                    }}
                  >
                    <FaChevronRight
                      className="me-2"
                      style={{ transition: "transform 0.3s ease" }}
                    />
                    {text}
                  </Link>
                </li>
              ))}
            </ul>
          </Col>

          {/* Quick Links */}
          <Col md={3} sm={6} className="mb-4">
            <h5 className="fw-bold mb-3">Quick Links</h5>
            <ul className="list-unstyled">
              {[
                { text: "Home", path: "/" },
                { text: "About Us", path: "/about" },
                { text: "Our Team", path: "/team" },
                { text: "Contact", path: "/contact" },
              ].map(({ text, path }, index) => (
                <li className="mb-2" key={index}>
                  <Link
                    to={path}
                    className="text-decoration-none"
                    style={linkStyle}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.color = hoverStyle.color;
                      e.currentTarget.firstChild.style.transform =
                        hoverStyle.transform;
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.color = linkStyle.color;
                      e.currentTarget.firstChild.style.transform =
                        "translateX(0)";
                    }}
                  >
                    <FaChevronRight
                      className="me-2"
                      style={{ transition: "transform 0.3s ease" }}
                    />
                    {text}
                  </Link>
                </li>
              ))}
            </ul>
          </Col>

          {/* Contact Info */}
          <Col md={3} sm={6} className="mb-4">
            <h5 className="fw-bold mb-3">Contact Info</h5>
            <p>
              <a
                href="https://www.google.com/maps/place/Rosevill+Sky/@23.0545455,72.6454815,3205m/data=!3m1!1e3!4m10!1m2!2m1!1sA-505,RoseVilleSky,Nikol,Ahmedabad-382350!3m6!1s0x395e878bd3d4c3f9:0x218f4d26a542afaa!8m2!3d23.0545455!4d72.6645359!15sCipBLTUwNSxSb3NlVmlsbGUgU2t5LE5pa29sLEFobWVkYWJhZC0zODIzNTBaLCIqYSA1MDUgcm9zZXZpbGxlIHNreSBuaWtvbCBhaG1lZGFiYWQgMzgyMzUwkgEPc2hvcHBpbmdfY2VudGVymgEkQ2hkRFNVaE5NRzluUzBWSlEwRm5TVVJRY1RsZk1UaFJSUkFCqgGBARABKiwiKDUwNSByb3NldmlsbGUgc2t5IG5pa29sIGFobWVkYWJhZCAzODIzNTAoADIfEAEiG9dLGF3QiOI5Uk2vIe--qJYhNnsTdxSvK72FVzIuEAIiKmEgNTA1IHJvc2V2aWxsZSBza3kgbmlrb2wgYWhtZWRhYmFkIDM4MjM1MOABAPoBBAgAEB8!16s%2Fg%2F11vbvrkrd9?entry=ttu&g_ep=EgoyMDI1MDgxMy4wIKXMDSoASAFQAw%3D%3D"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white text-decoration-none"
              >
                <IoLocationSharp className="me-2" />
                A-505, RoseVill Sky,Opp,Pushkar-Icons, Nikol, Ahmedabad - 382350
              </a>
            </p>
            <p>
              <a
                href="tel:+919067640237"
                className="text-white text-decoration-none"
              >
                <MdPhone className="me-2" /> +91 90676 40237
              </a>
            </p>
            <p>
              <a
                href="tel:+918980471710"
                className="text-white text-decoration-none"
              >
                <MdPhone className="me-2" /> +91 89804 71710
              </a>
            </p>
            <p>
              <a
                href="mailto:aksharconsultancy99@gmail.com"
                className="text-white text-decoration-none"
              >
                <MdEmail className="me-2" /> aksharconsultancy99@gmail.com
              </a>
            </p>
          </Col>
        </Row>

        <hr className="border-light mt-4" />

        <Row>
          <Col className="text-center">
            <small>
              © {new Date().getFullYear()} Akshar Consultancy. All rights
              reserved.
            </small>
          </Col>
        </Row>
      </Container>

      {/* Back to Top Button */}
      {showScroll && (
        <Button
          onClick={scrollToTop}
          style={{
            position: "fixed",
            bottom: "25px",
            right: "25px",
            borderRadius: "50%",
            width: "50px",
            height: "50px",
            background: "linear-gradient(135deg, #e45c3c, #da4b2d)",
            color: "white",
            border: "none",
            boxShadow: "0 6px 15px rgba(0,0,0,0.3)",
            zIndex: 999,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: "20px",
            transition: "all 0.3s ease-in-out",
            animation: "bounce 1.8s infinite",
          }}
          className="back-to-top-btn"
        >
          <FaArrowUp />
        </Button>
      )}

      <style>{`
  .back-to-top-btn:hover {
    transform: scale(1.15) rotate(360deg);
    background: linear-gradient(135deg, #ff7b5a, #e1553a);
    box-shadow: 0 8px 20px rgba(0,0,0,0.4);
  }

  @keyframes bounce {
    0%, 20%, 50%, 80%, 100% {
      transform: translateY(0);
    }
    40% {
      transform: translateY(-6px);
    }
    60% {
      transform: translateY(-3px);
    }
  }
`}</style>
=======
  return (
    <footer className="bg-primaryDark text-white pt-16 pb-6 relative">
      {/* 🔷 Main Grid */}
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
        {/* 🔶 About */}
        <div>
          <h4 className="text-xl font-bold mb-4">
            Akshar <span className="text-gold">Consultancy</span>
          </h4>

          <p className="text-sm text-silver leading-relaxed">
            We provide expert solutions for Tax Returns, Business Registrations,
            Accounting & Compliance. Your trusted financial partner for growth.
          </p>

          {/* Social Icons */}
          <div className="flex gap-3 mt-5">
            {[FaFacebookF, FaInstagram, FaTwitter, FaLinkedinIn].map(
              (Icon, i) => (
                <div
                  key={i}
                  className="w-9 h-9 flex items-center justify-center rounded-full bg-white/10 hover:bg-gold hover:text-black transition duration-300 cursor-pointer"
                >
                  <Icon size={14} />
                </div>
              ),
            )}
          </div>
        </div>

        {/* 🔶 Services */}
        <div>
          <h4 className="text-lg font-semibold mb-4 text-gold">Our Services</h4>

          <ul className="space-y-3">
            {[
              { text: "Finance", path: "/service/msme" },
              { text: "Tax Return", path: "/service/taxreturn" },
              { text: "Audit", path: "/service/audit" },
              { text: "Bookkeeping", path: "/service/bookeeping" },
            ].map((item, i) => (
              <li key={i}>
                <Link
                  to={item.path}
                  className="flex items-center gap-2 text-silver hover:text-gold transition duration-300 group"
                >
                  <FaChevronRight className="text-xs group-hover:translate-x-1 transition" />
                  {item.text}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* 🔶 Quick Links */}
        <div>
          <h4 className="text-lg font-semibold mb-4 text-gold">Quick Links</h4>

          <ul className="space-y-3">
            {[
              { text: "Home", path: "/" },
              { text: "About Us", path: "/about" },
              { text: "Our Team", path: "/team" },
              { text: "Contact", path: "/contact" },
            ].map((item, i) => (
              <li key={i}>
                <Link
                  to={item.path}
                  className="flex items-center gap-2 text-silver hover:text-gold transition duration-300 group"
                >
                  <FaChevronRight className="text-xs group-hover:translate-x-1 transition" />
                  {item.text}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* 🔶 Contact */}
        <div>
          <h4 className="text-lg font-semibold mb-4 text-gold">Contact Info</h4>

          <div className="space-y-4 text-sm text-silver">
            <a
              href="#"
              className="flex items-start gap-2 hover:text-gold transition"
            >
              <IoLocationSharp className="mt-1" />
              A-505, RoseVill Sky, Nikol, Ahmedabad - 382350
            </a>

            <a
              href="tel:+919067640237"
              className="flex items-center gap-2 hover:text-gold transition"
            >
              <MdPhone /> +91 90676 40237
            </a>

            <a
              href="tel:+918980471710"
              className="flex items-center gap-2 hover:text-gold transition"
            >
              <MdPhone /> +91 89804 71710
            </a>

            <a
              href="mailto:aksharconsultancy99@gmail.com"
              className="flex items-center gap-2 hover:text-gold transition"
            >
              <MdEmail /> aksharconsultancy99@gmail.com
            </a>
          </div>
        </div>
      </div>

      {/* 🔷 Bottom */}
      <div className="border-t border-white/10 mt-10 pt-5 text-center text-sm text-silver">
        © {new Date().getFullYear()} Akshar Consultancy. All Rights Reserved.
      </div>

      {/* 🔷 Scroll To Top */}
      {showScroll && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 w-12 h-12 bg-gold text-black rounded-full flex items-center justify-center shadow-lg hover:scale-110 hover:rotate-180 transition duration-300"
        >
          <FaArrowUp />
        </button>
      )}
>>>>>>> master
    </footer>
  );
};

export default Footer;
