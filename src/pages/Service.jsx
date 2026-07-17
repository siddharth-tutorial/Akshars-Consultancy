<<<<<<< HEAD
import React, { useEffect, useState } from "react";
import Header from "../component/Header";
import { Container, Row, Col, Card, Breadcrumb } from "react-bootstrap";
import { Link } from "react-router-dom";
=======
// import React, { useState } from "react";
// import Header from "../component/Header";
// import { Container, Row, Col, Card, Breadcrumb } from "react-bootstrap";
// import { Link } from "react-router-dom";
// import {
//   FaCoins,
//   FaFileInvoiceDollar,
//   FaGlobeEurope,
//   FaMoneyCheckAlt,
//   FaPen,
//   FaUniversity,
// } from "react-icons/fa";
// import { motion } from "framer-motion";
// import Footer from "../component/Footer";
// import bgImage from "../assets/bg1.webp";
// function Service() {
//   const services = [
//     {
//       title: "Bookkeeping",
//       slug: "bookeeping",
//       icon: <FaPen size={30} />,
//       image: "https://static2.bigstockphoto.com/6/6/3/large1500/366399754.jpg",
//       gradient: "linear-gradient(135deg, #ff6a00, #ee0979)",
//     },
//     {
//       title: "Finance",
//       slug: "msme",
//       icon: <FaUniversity size={30} />,
//       image:
//         "https://avatars.mds.yandex.net/get-altay/12813969/2a0000018e16a8c1a6609b070fa83c18bac9/XXL_height",
//       gradient: "linear-gradient(135deg, #1e3c72, #2a5298)",
//     },
//     {
//       title: "TAX RETURN",
//       slug: "taxreturn",
//       icon: <FaMoneyCheckAlt size={30} />,
//       image:
//         "https://th-i.thgim.com/public/incoming/95hrwy/article69135505.ece/alternates/LANDSCAPE_1200/PO13_Tax_calculating.jpg",
//       gradient: "linear-gradient(135deg, #0f2027, #203a43, #2c5364)",
//     },
//     {
//       title: "Audit",
//       slug: "audit",
//       icon: <FaCoins size={30} />,
//       image:
//         "https://i2.wp.com/www.dataprivacyadvisory.com/app/uploads/2022/10/AdobeStock_429325800-scaled.jpg",
//       gradient: "linear-gradient(135deg, #ff512f, #dd2476)",
//     },
//     {
//       title: "PAYROLL",
//       slug: "payroll",
//       icon: <FaFileInvoiceDollar size={30} />,
//       image:
//         "https://img.freepik.com/free-photo/top-view-payroll-concept-with-items_23-2149103952.jpg",
//       gradient: "linear-gradient(135deg, #000046, #1cb5e0)",
//     },
//     {
//       title: "Foreign Accounting",
//       slug: "foreign",
//       icon: <FaGlobeEurope size={30} />,
//       image:
//         "https://avatars.mds.yandex.net/i?id=baf07b4ee305ca06e9491b20dab2334b93333101-8550886-images-thumbs&n=13",
//       gradient: "linear-gradient(135deg, #3a1c71, #d76d77, #ffaf7b)",
//     },
//   ];

//   const [flippedIndex, setFlippedIndex] = useState(null);
//   const heroStyles = {
//     position: "relative",
//     backgroundImage: `url(${bgImage})`,
//     backgroundSize: "cover",
//     backgroundPosition: "center",
//     color: "white",
//     padding: "100px 0",
//     overflow: "hidden",
//   };

//   const contentStyle = { position: "relative", zIndex: 3 };

//   // Use brand colors for hover effect

//   return (
//     <div>
//       <Header />
//       <div style={heroStyles} className="hero-section">
//         <div className="overlay-before"></div>
//         <div className="overlay-after"></div>
//         <Container style={contentStyle}>
//           <Row>
//             <Col>
//               <h1 className="fw-bold display-4 mb-3 text-center text-md-start">
//                 Our Services
//               </h1>
//               <Breadcrumb className="custom-breadcrumb justify-content-center justify-content-md-start">
//                 <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
//                 <Breadcrumb.Item active style={{ color: "#e45c3c" }}>
//                   Our Services
//                 </Breadcrumb.Item>
//               </Breadcrumb>
//             </Col>
//           </Row>
//         </Container>
//       </div>

//       <section className="py-5 bg-light">
//         <Container>
//           <h4 className="text-center mb-4 head-title">Our Services</h4>
//           <Row className="g-4">
//             {services.map((service, index) => (
//               <Col key={index} xs={12} sm={6} lg={4}>
//                 <motion.div
//                   initial={{ opacity: 0, y: 50 }}
//                   whileInView={{ opacity: 1, y: 0 }}
//                   viewport={{ once: true }}
//                   transition={{ duration: 0.6, delay: index * 0.2 }}
//                   onMouseEnter={() => setFlippedIndex(index)}
//                   onMouseLeave={() => setFlippedIndex(null)}
//                   style={{
//                     perspective: "1000px",
//                     height: "320px",
//                   }}
//                 >
//                   <div
//                     style={{
//                       position: "relative",
//                       width: "100%",
//                       height: "100%",
//                       transformStyle: "preserve-3d",
//                       transition: "transform 0.6s",
//                       transform:
//                         flippedIndex === index
//                           ? "rotateY(180deg)"
//                           : "rotateY(0deg)",
//                     }}
//                   >
//                     {/* Front */}
//                     <Card
//                       style={{
//                         height: "100%",
//                         backfaceVisibility: "hidden",
//                         borderRadius: "16px",
//                         overflow: "hidden",
//                         position: "absolute",
//                         width: "100%",
//                       }}
//                     >
//                       <Card.Img
//                         src={service.image}
//                         alt={service.title}
//                         loading="lazy"
//                         style={{ height: "200px", objectFit: "cover" }}
//                       />
//                       <Card.Body className="text-center">
//                         <div
//                           className="mb-3"
//                           style={{
//                             background: service.gradient,
//                             WebkitBackgroundClip: "text",
//                             WebkitTextFillColor: "transparent",
//                           }}
//                         >
//                           {service.icon}
//                         </div>
//                         <Card.Title
//                           className="fw-bold"
//                           style={{
//                             background: service.gradient,
//                             WebkitBackgroundClip: "text",
//                             WebkitTextFillColor: "transparent",
//                           }}
//                         >
//                           {service.title}
//                         </Card.Title>
//                       </Card.Body>
//                     </Card>
//                     {/* Back */}
//                     <Card
//                       style={{
//                         background: service.gradient,
//                         color: "#fff",
//                         height: "100%",
//                         backfaceVisibility: "hidden",
//                         transform: "rotateY(180deg)",
//                         position: "absolute",
//                         width: "100%",
//                         borderRadius: "16px",
//                         display: "flex",
//                         flexDirection: "column",
//                         alignItems: "center",
//                         justifyContent: "center",
//                       }}
//                     >
//                       <div className="mb-3">{service.icon}</div>
//                       <h5 className="fw-bold">{service.title}</h5>
//                       <Link
//                         to={`/service/${service.slug}`}
//                         className="btn btn-light mt-3"
//                       >
//                         READ MORE
//                       </Link>
//                     </Card>
//                   </div>
//                 </motion.div>
//               </Col>
//             ))}
//           </Row>
//         </Container>
//       </section>
//       <Footer />
//       <style>{`
//   .hero-section .overlay-before {
//     position: absolute;
//     inset: 0;
//     background-color: rgba(0,0,0,0.4);
//     z-index: 1;
//   }
//   .hero-section .overlay-after {
//     position: absolute;
//     top: 0;
//     right: 0;
//     width: 40%;
//     height: 100%;
//     background-color: rgba(0,0,0,0.2);
//     clip-path: polygon(0 0, 100% 0, 100% 100%, 20% 100%);
//     z-index: 2;
//   }

//   /* Breadcrumb text color */
//   .breadcrumb-item,
//   .breadcrumb-item a {
//     color: white !important;
//     text-decoration: none !important;
//   }

//   /* Hover underline */
//   .custom-breadcrumb .breadcrumb-item a:hover {
//     text-decoration: underline !important;
//   }

//   /* Active item color */
//   .custom-breadcrumb .breadcrumb-item.active {
//     color: #e45c3c !important;
//     font-weight: bold;
//   }

//   /* Divider color and symbol */
//   .breadcrumb-item + .breadcrumb-item::before {
//     color: white !important;
//     content: ">" !important;
//     margin: 0 8px !important;
//   }

// `}</style>
//     </div>
//   );
// }

import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Header from "../component/Header";
import Footer from "../component/Footer";
import bgImage from "../assets/bg1.webp";
import { FaArrowRight } from "react-icons/fa6";
>>>>>>> master
import {
  FaCoins,
  FaFileInvoiceDollar,
  FaGlobeEurope,
  FaMoneyCheckAlt,
  FaPen,
  FaUniversity,
} from "react-icons/fa";
<<<<<<< HEAD
import { motion } from "framer-motion";
import Footer from "../component/Footer";
import bgImage from "../assets/bg1.webp";
import Loader from "./Loader";
function Service() {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    // simulate async loading (API call / assets load etc.)
    const timer = setTimeout(() => {
      setLoading(false); // loader close
    }, 2000); // 2 sec demo

    return () => clearTimeout(timer);
  }, []);

  const services = [
    {
      title: "Bookkeeping",
      slug: "bookeeping",
      icon: <FaPen size={30} />,
      image: "https://static2.bigstockphoto.com/6/6/3/large1500/366399754.jpg",
      gradient: "linear-gradient(135deg, #ff6a00, #ee0979)",
    },
    {
      title: "Finance",
      slug: "msme",
      icon: <FaUniversity size={30} />,
      image:
        "https://avatars.mds.yandex.net/get-altay/12813969/2a0000018e16a8c1a6609b070fa83c18bac9/XXL_height",
      gradient: "linear-gradient(135deg, #1e3c72, #2a5298)",
    },
    {
      title: "TAX RETURN",
      slug: "taxreturn",
      icon: <FaMoneyCheckAlt size={30} />,
      image:
        "https://th-i.thgim.com/public/incoming/95hrwy/article69135505.ece/alternates/LANDSCAPE_1200/PO13_Tax_calculating.jpg",
      gradient: "linear-gradient(135deg, #0f2027, #203a43, #2c5364)",
    },
    {
      title: "Audit",
      slug: "audit",
      icon: <FaCoins size={30} />,
      image:
        "https://i2.wp.com/www.dataprivacyadvisory.com/app/uploads/2022/10/AdobeStock_429325800-scaled.jpg",
      gradient: "linear-gradient(135deg, #ff512f, #dd2476)",
    },
    {
      title: "PAYROLL",
      slug: "payroll",
      icon: <FaFileInvoiceDollar size={30} />,
      image:
        "https://img.freepik.com/free-photo/top-view-payroll-concept-with-items_23-2149103952.jpg",
      gradient: "linear-gradient(135deg, #000046, #1cb5e0)",
    },
    {
      title: "Foreign Accounting",
      slug: "foreign",
      icon: <FaGlobeEurope size={30} />,
      image:
        "https://avatars.mds.yandex.net/i?id=baf07b4ee305ca06e9491b20dab2334b93333101-8550886-images-thumbs&n=13",
      gradient: "linear-gradient(135deg, #3a1c71, #d76d77, #ffaf7b)",
    },
  ];

  const [flippedIndex, setFlippedIndex] = useState(null);
  const heroStyles = {
    position: "relative",
    backgroundImage: `url(${bgImage})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    color: "white",
    padding: "100px 0",
    overflow: "hidden",
  };

  const contentStyle = { position: "relative", zIndex: 3 };

  // Use brand colors for hover effect

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <div>
          <Header />
          <div style={heroStyles} className="hero-section">
            <div className="overlay-before"></div>
            <div className="overlay-after"></div>
            <Container style={contentStyle}>
              <Row>
                <Col>
                  <h1 className="fw-bold display-4 mb-3 text-center text-md-start">
                    Our Services
                  </h1>
                  <Breadcrumb className="custom-breadcrumb justify-content-center justify-content-md-start">
                    <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
                    <Breadcrumb.Item active style={{ color: "#e45c3c" }}>
                      Our Services
                    </Breadcrumb.Item>
                  </Breadcrumb>
                </Col>
              </Row>
            </Container>
          </div>

          <section className="py-5 bg-light">
            <Container>
              <h4 className="text-center mb-4 head-title">Our Services</h4>
              <Row className="g-4">
                {services.map((service, index) => (
                  <Col key={index} xs={12} sm={6} lg={4}>
                    <motion.div
                      initial={{ opacity: 0, y: 50 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: index * 0.2 }}
                      onMouseEnter={() => setFlippedIndex(index)}
                      onMouseLeave={() => setFlippedIndex(null)}
                      style={{
                        perspective: "1000px",
                        height: "320px",
                      }}
                    >
                      <div
                        style={{
                          position: "relative",
                          width: "100%",
                          height: "100%",
                          transformStyle: "preserve-3d",
                          transition: "transform 0.6s",
                          transform:
                            flippedIndex === index
                              ? "rotateY(180deg)"
                              : "rotateY(0deg)",
                        }}
                      >
                        {/* Front */}
                        <Card
                          style={{
                            height: "100%",
                            backfaceVisibility: "hidden",
                            borderRadius: "16px",
                            overflow: "hidden",
                            position: "absolute",
                            width: "100%",
                          }}
                        >
                          <Card.Img
                            src={service.image}
                            alt={service.title}
                            loading="lazy"
                            style={{ height: "200px", objectFit: "cover" }}
                          />
                          <Card.Body className="text-center">
                            <div
                              className="mb-3"
                              style={{
                                background: service.gradient,
                                WebkitBackgroundClip: "text",
                                WebkitTextFillColor: "transparent",
                              }}
                            >
                              {service.icon}
                            </div>
                            <Card.Title
                              className="fw-bold"
                              style={{
                                background: service.gradient,
                                WebkitBackgroundClip: "text",
                                WebkitTextFillColor: "transparent",
                              }}
                            >
                              {service.title}
                            </Card.Title>
                          </Card.Body>
                        </Card>
                        {/* Back */}
                        <Card
                          style={{
                            background: service.gradient,
                            color: "#fff",
                            height: "100%",
                            backfaceVisibility: "hidden",
                            transform: "rotateY(180deg)",
                            position: "absolute",
                            width: "100%",
                            borderRadius: "16px",
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                            justifyContent: "center",
                          }}
                        >
                          <div className="mb-3">{service.icon}</div>
                          <h5 className="fw-bold">{service.title}</h5>
                          <Link
                            to={`/service/${service.slug}`}
                            className="btn btn-light mt-3"
                          >
                            READ MORE
                          </Link>
                        </Card>
                      </div>
                    </motion.div>
                  </Col>
                ))}
              </Row>
            </Container>
          </section>
          <Footer />
          <style>{`
  .hero-section .overlay-before {
    position: absolute;
    inset: 0;
    background-color: rgba(0,0,0,0.4);
    z-index: 1;
  }
  .hero-section .overlay-after {
    position: absolute;
    top: 0;
    right: 0;
    width: 40%;
    height: 100%;
    background-color: rgba(0,0,0,0.2);
    clip-path: polygon(0 0, 100% 0, 100% 100%, 20% 100%);
    z-index: 2;
  }

  /* Breadcrumb text color */
  .breadcrumb-item,
  .breadcrumb-item a {
    color: white !important;
    text-decoration: none !important;
  }
  
  /* Hover underline */
  .custom-breadcrumb .breadcrumb-item a:hover {
    text-decoration: underline !important;
  }

  /* Active item color */
  .custom-breadcrumb .breadcrumb-item.active {
    color: #e45c3c !important;
    font-weight: bold;
  }

  /* Divider color and symbol */
  .breadcrumb-item + .breadcrumb-item::before {
    color: white !important;
    content: ">" !important;
    margin: 0 8px !important;
  }
    
`}</style>
        </div>
      )}
    </>
=======

function Service() {
  const services = [
    {
      title: "Bookkeeping Services",
      slug: "bookeeping",
      icon: <FaPen />,
      image: "https://static2.bigstockphoto.com/6/6/3/large1500/366399754.jpg",
    },
    {
      title: "Financial Consulting",
      slug: "msme",
      icon: <FaUniversity />,
      image:
        "https://avatars.mds.yandex.net/get-altay/12813969/2a0000018e16a8c1a6609b070fa83c18bac9/XXL_height",
    },
    {
      title: "Income Tax Return",
      slug: "taxreturn",
      icon: <FaMoneyCheckAlt />,
      image:
        "https://th-i.thgim.com/public/incoming/95hrwy/article69135505.ece/alternates/LANDSCAPE_1200/PO13_Tax_calculating.jpg",
    },
    {
      title: "Audit & Assurance",
      slug: "audit",
      icon: <FaCoins />,
      image:
        "https://www.dataprivacyadvisory.com/app/uploads/2022/10/AdobeStock_429325800-scaled.jpg",
    },
    {
      title: "Payroll Management",
      slug: "payroll",
      icon: <FaFileInvoiceDollar />,
      image:
        "https://img.freepik.com/free-photo/top-view-payroll-concept-with-items_23-2149103952.jpg",
    },
    {
      title: "International Accounting",
      slug: "foreign",
      icon: <FaGlobeEurope />,
      image:
        "https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?auto=format&fit=crop&q=80&w=600",
    },
  ];

  return (
    <div className="min-h-screen bg-[#F8FAFC]">
      <Header />

      {/* Hero Section */}
      <div
        className="relative bg-cover bg-center text-white py-24 overflow-hidden"
        style={{ backgroundImage: `url(${bgImage})` }}
      >
        <div className="absolute inset-0 bg-black/40 z-[1]"></div>
        <div
          className="absolute top-0 right-0 w-2/5 h-full bg-black/20 z-[2] hidden md:block"
          style={{ clipPath: "polygon(0 0, 100% 0, 100% 100%, 20% 100%)" }}
        ></div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-[3]">
          <div className="flex flex-col">
            <h1 className="text-4xl md:text-5xl font-bold mb-3 text-center md:text-left">
              Our Services
            </h1>

            <nav className="flex justify-center md:justify-start items-center text-sm font-medium">
              <ol className="inline-flex items-center space-x-2">
                <li>
                  <a
                    href="/"
                    className="text-white hover:underline transition-all"
                  >
                    Home
                  </a>
                </li>
                <li className="flex items-center text-white">
                  <span className="mx-2 text-white/80">&gt;</span>
                  <span className="text-[#e45c3c] font-bold">Our Services</span>
                </li>
              </ol>
            </nav>
          </div>
        </div>
      </div>

      {/* Services Grid Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h4 className="text-3xl md:text-4xl font-bold text-center text-[#0B2A4A] mb-4">
            Our Services
          </h4>
          <p className="text-gray-500 text-center max-w-2xl mx-auto mb-20 text-base md:text-lg">
            We provide reliable financial, taxation, and accounting solutions to
            help your business grow.
          </p>

          {/* Grid Layout identical to image */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-y-20 gap-x-8 lg:gap-x-10 pt-6">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.12 }}
                className="group relative w-full flex flex-col pt-4"
              >
                {/* Image Container with rounded top corners */}
                <div className="overflow-hidden rounded-2xl aspect-[4/3] w-full shadow-sm">
                  <img
                    src={service.image}
                    alt={service.title}
                    loading="lazy"
                    className="w-full h-full object-cover transition duration-700 ease-out group-hover:scale-105"
                  />
                </div>

                {/* Overlapping White Box */}
                <div className="relative bg-white shadow-[0_10px_30px_rgba(0,0,0,0.06)] p-6 md:p-8 text-center mx-6 -mt-24 z-10 rounded-2xl flex-1 flex flex-col justify-between border border-gray-100/40 transition-all duration-500 group-hover:-translate-y-2 group-hover:shadow-[0_15px_35px_rgba(0,0,0,0.1)]">
                  <div>
                    {/* Yellow Accent Icon */}
                    <div className="text-[#F5B800] text-3xl mb-4 flex justify-center">
                      {service.icon}
                    </div>

                    {/* Service Title */}
                    <h3 className="text-lg md:text-xl font-bold text-[#0B2A4A] mb-3">
                      {service.title}
                    </h3>

                    {/* Fixed text matched from your screenshot template */}
                    <p className="text-gray-400 text-[13px] md:text-sm leading-relaxed px-2 mb-6">
                      Expert solutions by Akshar Consultancy to handle your
                      financial and taxation needs efficiently.
                    </p>
                  </div>

                  {/* Circular Yellow Arrow Button */}
                  <div className="flex justify-center mt-auto">
                    <Link
                      to={`/service/${service.slug}`}
                      className="bg-[#F5B800] w-10 h-10 flex items-center justify-center rounded-full shadow-sm 
                        transition-all duration-300 transform-gpu
                        hover:bg-[#e0a800] hover:scale-110 active:scale-95"
                    >
                      <FaArrowRight className="text-black text-xs" />
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
>>>>>>> master
  );
}

export default Service;
