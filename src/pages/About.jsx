<<<<<<< HEAD
import React, { useEffect, useState } from "react";
import Header from "../component/Header";
import Footer from "../component/Footer";
import { Container, Row, Col, Breadcrumb, Card } from "react-bootstrap";
=======
// import React, { useEffect, useState } from "react";
// import Header from "../component/Header";
// import Footer from "../component/Footer";
// import { Container, Row, Col, Breadcrumb, Card } from "react-bootstrap";
// import {
//   FaEye,
//   FaRocket,
//   FaCheck,
//   FaCogs,
//   FaLaptopCode,
//   FaClipboardCheck,
//   FaHandsHelping,
//   FaLightbulb,
//   FaBalanceScale,
// } from "react-icons/fa";
// import bgImage from "../assets/bg1.webp";

// function About() {
//   const [hovered, setHovered] = useState(null);

//   useEffect(() => {
//     const element = document.getElementById("about-section");
//     if (element) {
//       element.scrollIntoView({ behavior: "smooth" });
//     }
//   }, []);

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
//   const getTextStyle = (key) => ({
//     color: hovered === key ? "#e45c3c" : "#032E5A",
//     cursor: "pointer",
//     transition: "color 0.3s ease",
//   });

//   const services = [
//     {
//       icon: <FaBalanceScale size={36} style={{ color: "#e45c3c" }} />,
//       title: "Business Structuring",
//       desc: "Helping you choose the right legal structure for optimal taxation and compliance.",
//     },
//     {
//       icon: <FaLightbulb size={36} style={{ color: "#dc522e" }} />,
//       title: "Tax Strategy & Planning",
//       desc: "Proactive planning to reduce your tax liability while ensuring legal compliance.",
//     },
//     {
//       icon: <FaHandsHelping size={36} style={{ color: "#e5613d" }} />,
//       title: "Government Subsidy Advisory",
//       desc: "Expert guidance on subsidies and schemes available for your business type.",
//     },
//     {
//       icon: <FaClipboardCheck size={36} style={{ color: "#e1553a" }} />,
//       title: "Compliance Health Check",
//       desc: "We review your financial & regulatory health and flag any red zones.",
//     },
//     {
//       icon: <FaLaptopCode size={36} style={{ color: "#da4b2d" }} />,
//       title: "Digital Filing Assistance",
//       desc: "Ensuring timely and accurate filings of all required documents through digital platforms.",
//     },
//     {
//       icon: <FaCogs size={36} style={{ color: "#dc522e" }} />,
//       title: "Process Optimization",
//       desc: "Streamlining internal accounting and compliance processes for efficiency.",
//     },
//   ];

//   return (
//     <div id="about-section">
//       <Header />
//       {/* Hero Section */}
//       <div style={heroStyles} className="hero-section">
//         <div className="overlay-before"></div>
//         <div className="overlay-after"></div>
//         <Container style={contentStyle}>
//           <Row>
//             <Col>
//               <h1 className="fw-bold display-4 mb-3 text-center text-md-start">
//                 About Us
//               </h1>
//               <Breadcrumb className="custom-breadcrumb justify-content-center justify-content-md-start">
//                 <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
//                 <Breadcrumb.Item active style={{ color: "#e45c3c" }}>
//                   About Us
//                 </Breadcrumb.Item>
//               </Breadcrumb>
//             </Col>
//           </Row>
//         </Container>
//       </div>

//       {/* About Us Section */}
//       <Container className="my-5">
//         <Row className="align-items-center g-5">
//           <Col md={6}>
//             <Card className="border-0 shadow-sm h-100">
//               <Card.Body>
//                 <h2 className="fw-bold mb-3" style={{ color: "#e45c3c" }}>
//                   About Us
//                 </h2>
//                 <p>
//                   <strong>Akshar Consultancy</strong> is a trusted tax
//                   consultancy firm based in Ahmedabad, Gujarat. We specialize
//                   in:
//                 </p>
//                 <ul className="ps-0" style={{ listStyle: "none" }}>
//                   {[
//                     "Company Registration",
//                     "Project Finance & Business Loans",
//                     "Government Subsidies",
//                     "Taxation, GST, Audit & Assurance",
//                     "Financial Strategy & Advisory",
//                   ].map((item, index) => (
//                     <li key={index}>
//                       <FaCheck
//                         style={{ color: "#e45c3c", marginRight: "10px" }}
//                       />
//                       {item}
//                     </li>
//                   ))}
//                 </ul>
//                 <p>Driven by integrity, insight, and compliance excellence.</p>
//               </Card.Body>
//             </Card>
//           </Col>
//           <Col md={6}>
//             <div
//               className="rounded shadow overflow-hidden"
//               style={{ height: "350px" }}
//             >
//               <img
//                 src="https://avatars.mds.yandex.net/i?id=ba83c359c06a2e7419744f9466ec5c0edb66c543-10465625-images-thumbs&n=13"
//                 alt="Who we are"
//                 loading="lazy"
//                 className="w-100 h-100"
//                 style={{ objectFit: "contain" }}
//               />
//             </div>
//           </Col>
//         </Row>
//       </Container>

//       {/* Mission & Vision */}
//       <Container className="my-5">
//         <Card
//           className="p-4 shadow-lg border-0"
//           style={{
//             borderRadius: "24px",
//             background: "#fff6f4", // very light orange background
//           }}
//         >
//           <Row>
//             <Col
//               md={6}
//               className="pe-md-4 position-relative"
//               onMouseEnter={() => setHovered("vision")}
//               onMouseLeave={() => setHovered(null)}
//             >
//               <div className="text-center text-md-start">
//                 <FaEye size={32} color="#e45c3c" className="mb-3" />
//                 <h4 className="fw-bold mb-3" style={getTextStyle("vision")}>
//                   Our Vision
//                 </h4>
//                 <p style={{ color: "#555" }}>
//                   To revolutionize tax consultancy by making financial services
//                   accessible and seamless. We envision a future where compliance
//                   and success go hand-in-hand.
//                 </p>
//               </div>
//               <div
//                 className="d-none d-md-block"
//                 style={{
//                   position: "absolute",
//                   right: 0,
//                   top: "10%",
//                   bottom: "10%",
//                   width: "1px",
//                   background:
//                     "linear-gradient(to bottom, #e45c3c, #dc522e, #e5613d)",
//                   opacity: 0.8,
//                 }}
//               />
//             </Col>
//             <Col
//               md={6}
//               className="ps-md-4 mt-4 mt-md-0"
//               onMouseEnter={() => setHovered("mission")}
//               onMouseLeave={() => setHovered(null)}
//             >
//               <div className="text-center text-md-start">
//                 <FaRocket size={32} color="#e5613d" className="mb-3" />
//                 <h4 className="fw-bold mb-3" style={getTextStyle("mission")}>
//                   Our Mission
//                 </h4>
//                 <p style={{ color: "#555" }}>
//                   To empower businesses and individuals by offering trustworthy
//                   guidance, financial clarity, and end-to-end support from
//                   registration to long-term planning.
//                 </p>
//               </div>
//             </Col>
//           </Row>
//         </Card>
//       </Container>

//       {/* Services */}
//       <Container className="my-5">
//         <h2 className="text-center fw-bold mb-4" style={{ color: "#e45c3c" }}>
//           Expert Tax Consultancy Services
//         </h2>
//         <p className="text-center text-muted mb-5">
//           We provide strategic tax advice and compliance solutions tailored for
//           your business and financial goals.
//         </p>
//         <Row className="g-4">
//           {services.map((service, index) => (
//             <Col key={index} md={4}>
//               <Card className="service-card p-4 border-0 shadow-sm h-100">
//                 <div className="mb-3 service-icon">{service.icon}</div>
//                 <h5 className="fw-semibold mb-2" style={{ color: "#032E5A" }}>
//                   {service.title}
//                 </h5>
//                 <p className="text-muted small">{service.desc}</p>
//               </Card>
//             </Col>
//           ))}
//         </Row>
//       </Container>

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
//       .service-card {
//       transition: all 0.3s ease;
//       cursor: pointer;
//       text-align: center;
//     }
//     .service-card:hover {
//       box-shadow: 0 10px 20px rgba(0,0,0,0.2) !important;
//       transform: translateY(-6px);
//     }

//     /* Icon flip effect */
//     .service-icon svg {
//       transition: transform 0.6s ease;
//       display: inline-block;
//     }
//     .service-card:hover .service-icon svg {
//       transform: rotateY(180deg);
//     }
// `}</style>
//     </div>
//   );
// }

// export default About;

import React, { useEffect, useState } from "react";
import Header from "../component/Header";
import Footer from "../component/Footer";
>>>>>>> master
import {
  FaEye,
  FaRocket,
  FaCheck,
  FaCogs,
  FaLaptopCode,
  FaClipboardCheck,
  FaHandsHelping,
  FaLightbulb,
  FaBalanceScale,
} from "react-icons/fa";
<<<<<<< HEAD
import bgImage from "../assets/bg1.webp";
import Loader from "./Loader";

function About() {
  const [hovered, setHovered] = useState(null);
  const [loading, setLoading] = useState(true);
=======

import bgImage from "../assets/bg1.webp";

function About() {
  const [hovered, setHovered] = useState(null);
>>>>>>> master

  useEffect(() => {
    const element = document.getElementById("about-section");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  }, []);
<<<<<<< HEAD
  useEffect(() => {
    // simulate async loading (API call / assets load etc.)
    const timer = setTimeout(() => {
      setLoading(false); // loader close
    }, 3000); // 3 sec demo

    return () => clearTimeout(timer);
  }, []);

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
  const getTextStyle = (key) => ({
    color: hovered === key ? "#e45c3c" : "#032E5A",
    cursor: "pointer",
    transition: "color 0.3s ease",
  });

  const services = [
    {
      icon: <FaBalanceScale size={36} style={{ color: "#e45c3c" }} />,
=======

  const services = [
    {
      icon: <FaBalanceScale size={36} className="text-[#e45c3c]" />,
>>>>>>> master
      title: "Business Structuring",
      desc: "Helping you choose the right legal structure for optimal taxation and compliance.",
    },
    {
<<<<<<< HEAD
      icon: <FaLightbulb size={36} style={{ color: "#dc522e" }} />,
=======
      icon: <FaLightbulb size={36} className="text-[#e45c3c]" />,
>>>>>>> master
      title: "Tax Strategy & Planning",
      desc: "Proactive planning to reduce your tax liability while ensuring legal compliance.",
    },
    {
<<<<<<< HEAD
      icon: <FaHandsHelping size={36} style={{ color: "#e5613d" }} />,
=======
      icon: <FaHandsHelping size={36} className="text-[#e45c3c]" />,
>>>>>>> master
      title: "Government Subsidy Advisory",
      desc: "Expert guidance on subsidies and schemes available for your business type.",
    },
    {
<<<<<<< HEAD
      icon: <FaClipboardCheck size={36} style={{ color: "#e1553a" }} />,
=======
      icon: <FaClipboardCheck size={36} className="text-[#e45c3c]" />,
>>>>>>> master
      title: "Compliance Health Check",
      desc: "We review your financial & regulatory health and flag any red zones.",
    },
    {
<<<<<<< HEAD
      icon: <FaLaptopCode size={36} style={{ color: "#da4b2d" }} />,
=======
      icon: <FaLaptopCode size={36} className="text-[#e45c3c]" />,
>>>>>>> master
      title: "Digital Filing Assistance",
      desc: "Ensuring timely and accurate filings of all required documents through digital platforms.",
    },
    {
<<<<<<< HEAD
      icon: <FaCogs size={36} style={{ color: "#dc522e" }} />,
=======
      icon: <FaCogs size={36} className="text-[#e45c3c]" />,
>>>>>>> master
      title: "Process Optimization",
      desc: "Streamlining internal accounting and compliance processes for efficiency.",
    },
  ];

  return (
<<<<<<< HEAD
    <>
      {loading ? (
        <Loader /> // 👈 loader fullscreen
      ) : (
        <>
          <div id="about-section">
            <Header />
            {/* Hero Section */}
            <div style={heroStyles} className="hero-section">
              <div className="overlay-before"></div>
              <div className="overlay-after"></div>
              <Container style={contentStyle}>
                <Row>
                  <Col>
                    <h1 className="fw-bold display-4 mb-3 text-center text-md-start">
                      About Us
                    </h1>
                    <Breadcrumb className="custom-breadcrumb justify-content-center justify-content-md-start">
                      <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
                      <Breadcrumb.Item active style={{ color: "#e45c3c" }}>
                        About Us
                      </Breadcrumb.Item>
                    </Breadcrumb>
                  </Col>
                </Row>
              </Container>
            </div>

            {/* About Us Section */}
            <Container className="my-5">
              <Row className="align-items-center g-5">
                <Col md={6}>
                  <Card className="border-0 shadow-sm h-100">
                    <Card.Body>
                      <h2 className="fw-bold mb-3" style={{ color: "#e45c3c" }}>
                        About Us
                      </h2>
                      <p>
                        <strong>Akshar Consultancy</strong> is a trusted tax
                        consultancy firm based in Ahmedabad, Gujarat. We
                        specialize in:
                      </p>
                      <ul className="ps-0" style={{ listStyle: "none" }}>
                        {[
                          "Company Registration",
                          "Project Finance & Business Loans",
                          "Government Subsidies",
                          "Taxation, GST, Audit & Assurance",
                          "Financial Strategy & Advisory",
                        ].map((item, index) => (
                          <li key={index}>
                            <FaCheck
                              style={{ color: "#e45c3c", marginRight: "10px" }}
                            />
                            {item}
                          </li>
                        ))}
                      </ul>
                      <p>
                        Driven by integrity, insight, and compliance excellence.
                      </p>
                    </Card.Body>
                  </Card>
                </Col>
                <Col md={6}>
                  <div
                    className="rounded shadow overflow-hidden"
                    style={{ height: "350px" }}
                  >
                    <img
                      src="https://avatars.mds.yandex.net/i?id=ba83c359c06a2e7419744f9466ec5c0edb66c543-10465625-images-thumbs&n=13"
                      alt="Who we are"
                      loading="lazy"
                      className="w-100 h-100"
                      style={{ objectFit: "contain" }}
                    />
                  </div>
                </Col>
              </Row>
            </Container>

            {/* Mission & Vision */}
            <Container className="my-5">
              <Card
                className="p-4 shadow-lg border-0"
                style={{
                  borderRadius: "24px",
                  background: "#fff6f4", // very light orange background
                }}
              >
                <Row>
                  <Col
                    md={6}
                    className="pe-md-4 position-relative"
                    onMouseEnter={() => setHovered("vision")}
                    onMouseLeave={() => setHovered(null)}
                  >
                    <div className="text-center text-md-start">
                      <FaEye size={32} color="#e45c3c" className="mb-3" />
                      <h4
                        className="fw-bold mb-3"
                        style={getTextStyle("vision")}
                      >
                        Our Vision
                      </h4>
                      <p style={{ color: "#555" }}>
                        To revolutionize tax consultancy by making financial
                        services accessible and seamless. We envision a future
                        where compliance and success go hand-in-hand.
                      </p>
                    </div>
                    <div
                      className="d-none d-md-block"
                      style={{
                        position: "absolute",
                        right: 0,
                        top: "10%",
                        bottom: "10%",
                        width: "1px",
                        background:
                          "linear-gradient(to bottom, #e45c3c, #dc522e, #e5613d)",
                        opacity: 0.8,
                      }}
                    />
                  </Col>
                  <Col
                    md={6}
                    className="ps-md-4 mt-4 mt-md-0"
                    onMouseEnter={() => setHovered("mission")}
                    onMouseLeave={() => setHovered(null)}
                  >
                    <div className="text-center text-md-start">
                      <FaRocket size={32} color="#e5613d" className="mb-3" />
                      <h4
                        className="fw-bold mb-3"
                        style={getTextStyle("mission")}
                      >
                        Our Mission
                      </h4>
                      <p style={{ color: "#555" }}>
                        To empower businesses and individuals by offering
                        trustworthy guidance, financial clarity, and end-to-end
                        support from registration to long-term planning.
                      </p>
                    </div>
                  </Col>
                </Row>
              </Card>
            </Container>

            {/* Services */}
            <Container className="my-5">
              <h2
                className="text-center fw-bold mb-4"
                style={{ color: "#e45c3c" }}
              >
                Expert Tax Consultancy Services
              </h2>
              <p className="text-center text-muted mb-5">
                We provide strategic tax advice and compliance solutions
                tailored for your business and financial goals.
              </p>
              <Row className="g-4">
                {services.map((service, index) => (
                  <Col key={index} md={4}>
                    <Card className="service-card p-4 border-0 shadow-sm h-100">
                      <div className="mb-3 service-icon">{service.icon}</div>
                      <h5
                        className="fw-semibold mb-2"
                        style={{ color: "#032E5A" }}
                      >
                        {service.title}
                      </h5>
                      <p className="text-muted small">{service.desc}</p>
                    </Card>
                  </Col>
                ))}
              </Row>
            </Container>

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
      .service-card {
      transition: all 0.3s ease;
      cursor: pointer;
      text-align: center;
    }
    .service-card:hover {
      box-shadow: 0 10px 20px rgba(0,0,0,0.2) !important;
      transform: translateY(-6px);
    }

    /* Icon flip effect */
    .service-icon svg {
      transition: transform 0.6s ease;
      display: inline-block;
    }
    .service-card:hover .service-icon svg {
      transform: rotateY(180deg);
    }
`}</style>
          </div>
        </>
      )}
    </>
=======
    <div id="about-section">
      <Header />

      {/* Hero Section */}
      <section
        className="relative bg-cover bg-center py-28 overflow-hidden"
        style={{ backgroundImage: `url(${bgImage})` }}
      >
        <div className="absolute inset-0 bg-black/50"></div>

        <div
          className="absolute top-0 right-0 h-full w-[40%] bg-black/20"
          style={{
            clipPath: "polygon(0 0, 100% 0, 100% 100%, 20% 100%)",
          }}
        ></div>

        <div className="relative z-10 max-w-7xl mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            About Us
          </h1>

          <div className="flex items-center gap-2 text-white">
            <a href="/" className="hover:underline">
              Home
            </a>
            <span>{">"}</span>
            <span className="text-[#F5B800] font-semibold">About Us</span>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-3xl font-bold text-[#e45c3c] mb-5">
                About Us
              </h2>

              <p className="text-gray-700 mb-4">
                <strong>Akshar Consultancy</strong> is a trusted tax consultancy
                firm based in Ahmedabad, Gujarat.
              </p>

              <ul className="space-y-3 mb-5">
                {[
                  "Company Registration",
                  "Project Finance & Business Loans",
                  "Government Subsidies",
                  "Taxation, GST, Audit & Assurance",
                  "Financial Strategy & Advisory",
                ].map((item, index) => (
                  <li key={index} className="flex items-center">
                    <FaCheck className="text-[#e45c3c] mr-3" />
                    {item}
                  </li>
                ))}
              </ul>

              <p className="text-gray-600">
                Driven by integrity, insight, and compliance excellence.
              </p>
            </div>

            <div className="rounded-2xl overflow-hidden shadow-lg h-[350px]">
              <img
                src="https://avatars.mds.yandex.net/i?id=ba83c359c06a2e7419744f9466ec5c0edb66c543-10465625-images-thumbs&n=13"
                alt="About Us"
                className="w-full h-full object-contain"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission Vision */}
      <section className="py-10">
        <div className="max-w-7xl mx-auto px-4">
          <div className="bg-[#fff6f4] rounded-3xl shadow-xl p-8 md:p-12">
            <div className="grid md:grid-cols-2 gap-10">
              <div
                onMouseEnter={() => setHovered("vision")}
                onMouseLeave={() => setHovered(null)}
              >
                <FaEye size={32} className="text-[#e45c3c] mb-4" />

                <h3
                  className={`text-2xl font-bold mb-4 transition-all duration-300 ${
                    hovered === "vision" ? "text-[#e45c3c]" : "text-[#032E5A]"
                  }`}
                >
                  Our Vision
                </h3>

                <p className="text-gray-600">
                  To revolutionize tax consultancy by making financial services
                  accessible and seamless. We envision a future where compliance
                  and success go hand-in-hand.
                </p>
              </div>

              <div
                onMouseEnter={() => setHovered("mission")}
                onMouseLeave={() => setHovered(null)}
              >
                <FaRocket size={32} className="text-[#e45c3c] mb-4" />

                <h3
                  className={`text-2xl font-bold mb-4 transition-all duration-300 ${
                    hovered === "mission" ? "text-[#e45c3c]" : "text-[#032E5A]"
                  }`}
                >
                  Our Mission
                </h3>

                <p className="text-gray-600">
                  To empower businesses and individuals by offering trustworthy
                  guidance, financial clarity, and end-to-end support from
                  registration to long-term planning.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-center text-4xl font-bold text-[#e45c3c] mb-4">
            Expert Tax Consultancy Services
          </h2>

          <p className="text-center text-gray-500 mb-12">
            We provide strategic tax advice and compliance solutions tailored
            for your business and financial goals.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-md p-6 text-center transition-all duration-300 hover:-translate-y-2 hover:shadow-xl cursor-pointer group"
              >
                <div className="flex justify-center mb-4 transition-transform duration-500 group-hover:rotate-y-180">
                  {service.icon}
                </div>

                <h3 className="text-xl font-semibold text-[#032E5A] mb-3">
                  {service.title}
                </h3>

                <p className="text-gray-500 text-sm">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
>>>>>>> master
  );
}

export default About;
