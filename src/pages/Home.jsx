// import React, { useEffect, useState } from "react";
// import Header from "../component/Header";
// import Footer from "../component/Footer";

// import b1 from "../assets/img-1.png";
// import b2 from "../assets/img-2.webp";
// import b3 from "../assets/img-3.webp";

// import { Button, Card, Carousel, Col, Container, Row } from "react-bootstrap";

// import "animate.css";
// import { motion } from "framer-motion";
// import {
//   FaCoins,
//   FaMoneyCheckAlt,
//   FaPen,
//   FaUniversity,
//   FaFileInvoiceDollar,
//   FaGlobeEurope,
// } from "react-icons/fa";
// import { Link } from "react-router-dom";

// function Home() {
//   const [activeIndex, setActiveIndex] = useState(0);
//   const [animationDone, setAnimationDone] = useState(false);
//   const [flippedIndex, setFlippedIndex] = useState(null);
//   const slideDelay = 4000;

//   const slides = [
//     {
//       image: b1,
//       heading: "Simplifying Your Tax Journey",
//       subtext: "Expert guidance for individuals & businesses across Gujarat.",
//       buttonText: "Explore Services",
//       link: "/service/msme",
//     },
//     {
//       image: b2,
//       heading: "Trusted Financial Advisory",
//       subtext:
//         "From project finance to government subsidies — we’ve got you covered.",
//       buttonText: "Get Consultation",
//       link: "/contact",
//     },
//     {
//       image: b3,
//       heading: "Startup & Compliance Made Easy",
//       subtext: "Company Registration, GST, and Audit support under one roof.",
//       buttonText: "Learn More",
//       link: "/about",
//     },
//   ];

//   useEffect(() => {
//     if (animationDone) {
//       const timer = setTimeout(() => {
//         const nextIndex = (activeIndex + 1) % slides.length;
//         setActiveIndex(nextIndex);
//         setAnimationDone(false);
//       }, slideDelay);
//       return () => clearTimeout(timer);
//     }
//   }, [animationDone, activeIndex]);

//   const services = [
//     {
//       title: "Bookkeeping",
//       icon: <FaPen size={30} />,
//       image: "https://static2.bigstockphoto.com/6/6/3/large1500/366399754.jpg",
//       gradient: "linear-gradient(135deg, #e45c3c, #e5613d)",
//     },
//     {
//       title: "Finance",
//       icon: <FaUniversity size={30} />,
//       image:
//         "https://avatars.mds.yandex.net/get-altay/12813969/2a0000018e16a8c1a6609b070fa83c18bac9/XXL_height",
//       gradient: "linear-gradient(135deg, #dc522e, #e1553a)",
//     },
//     {
//       title: "TAX RETURN",
//       icon: <FaMoneyCheckAlt size={30} />,
//       image:
//         "https://th-i.thgim.com/public/incoming/95hrwy/article69135505.ece/alternates/LANDSCAPE_1200/PO13_Tax_calculating.jpg",
//       gradient: "linear-gradient(135deg, #e5613d, #e45c3c)",
//     },
//     {
//       title: "Audit",
//       icon: <FaCoins size={30} />,
//       image:
//         "https://i2.wp.com/www.dataprivacyadvisory.com/app/uploads/2022/10/AdobeStock_429325800-scaled.jpg",
//       gradient: "linear-gradient(135deg, #e1553a, #da4b2d)",
//     },
//     {
//       title: "PAYROLL",
//       icon: <FaFileInvoiceDollar size={30} />,
//       image:
//         "https://img.freepik.com/free-photo/top-view-payroll-concept-with-items_23-2149103952.jpg",
//       gradient: "linear-gradient(135deg, #e45c3c, #dc522e)",
//     },
//     {
//       title: "Foreign Accounting",
//       icon: <FaGlobeEurope size={30} />,
//       image:
//         "https://avatars.mds.yandex.net/i?id=baf07b4ee305ca06e9491b20dab2334b93333101-8550886-images-thumbs&n=13",
//       gradient: "linear-gradient(135deg, #e5613d, #da4b2d)",
//     },
//   ];

//   return (
//     <>
//       <Header />

//       {/* Carousel */}
//       <Carousel
//         fade
//         activeIndex={activeIndex}
//         controls={false}
//         indicators
//         interval={null}
//       >
//         {slides.map((slide, idx) => (
//           <Carousel.Item key={idx}>
//             <div style={{ position: "relative" }}>
//               <img
//                 src={slide.image}
//                 className="d-block w-100"
//                 style={{
//                   objectFit: "cover",
//                   maxHeight: "92vh",
//                   filter: "brightness(70%)",
//                 }}
//                 alt={`Slide ${idx}`}
//                 loading="lazy"
//               />
//               <motion.div
//                 key={activeIndex}
//                 style={{
//                   position: "absolute",
//                   top: "50%",
//                   left: "50%",
//                   transform: "translate(-50%, -50%)",
//                   color: "#fff",
//                   textAlign: "center",
//                   zIndex: 10,
//                   padding: "0 20px",
//                 }}
//                 initial={{ opacity: 0, y: 60 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.8, delay: 0.3 }}
//               >
//                 <motion.h1
//                   style={{
//                     fontSize: "3rem",
//                     fontWeight: "bold",
//                     WebkitBackgroundClip: "text",
//                     WebkitTextFillColor: "transparent",
//                     backgroundImage:
//                       "linear-gradient(to right, #e45c3c, #da4b2d)",
//                     marginBottom: "1rem",
//                   }}
//                   initial={{ opacity: 0 }}
//                   animate={{ opacity: 1 }}
//                   transition={{ delay: 0.5 }}
//                 >
//                   {slide.heading}
//                 </motion.h1>
//                 <motion.p
//                   style={{ fontSize: "1.25rem", color: "#f0f0f0" }}
//                   initial={{ opacity: 0 }}
//                   animate={{ opacity: 1 }}
//                   transition={{ delay: 0.7 }}
//                 >
//                   {slide.subtext}
//                 </motion.p>
//                 <motion.div
//                   initial={{ opacity: 0 }}
//                   animate={{ opacity: 1 }}
//                   transition={{ delay: 1 }}
//                   onAnimationComplete={() => setAnimationDone(true)}
//                 >
//                   <Button
//                     href={slide.link}
//                     style={{
//                       marginTop: "1.5rem",
//                       padding: "10px 24px",
//                       fontWeight: 600,
//                       fontSize: "1rem",
//                       background: "linear-gradient(to right, #e45c3c, #dc522e)",
//                       border: "none",
//                       borderRadius: "8px",
//                     }}
//                   >
//                     {slide.buttonText}
//                   </Button>
//                 </motion.div>
//               </motion.div>
//             </div>
//           </Carousel.Item>
//         ))}
//       </Carousel>

//       {/* About Section */}
//       <section
//         style={{
//           padding: "80px 20px",
//           background: "linear-gradient(135deg, #fdf2ef, #ffffff)",
//         }}
//       >
//         <Container>
//           <motion.div
//             initial={{ opacity: 0, y: 50 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.6 }}
//             viewport={{ once: true }}
//           >
//             <Row className="justify-content-center text-center mb-4">
//               <Col md={8}>
//                 <h2 className="fw-bold display-5">
//                   Discover{" "}
//                   <span style={{ color: "#e45c3c" }}>Akshar Consultancy</span>
//                 </h2>
//               </Col>
//             </Row>
//           </motion.div>

//           <motion.div
//             initial={{ opacity: 0, x: -50 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.8, delay: 0.2 }}
//             viewport={{ once: true }}
//           >
//             <Row className="justify-content-center">
//               <Col md={10}>
//                 <p
//                   className="text-center fs-5 text-muted fw-medium"
//                   style={{ lineHeight: "1.8" }}
//                 >
//                   At <strong>Akshar Consultancy</strong>, we empower
//                   entrepreneurs and businesses to grow with confidence. Based in
//                   Ahmedabad, we offer comprehensive financial and strategic
//                   support across Gujarat — from <strong>Taxation & GST</strong>{" "}
//                   to <strong>Business Loans</strong>,{" "}
//                   <strong>Project Financing</strong>,{" "}
//                   <strong>Government Subsidy Advisory</strong>, and{" "}
//                   <strong>Company Registrations</strong>. Our client-first
//                   approach and deep domain expertise help you make informed,
//                   profitable decisions.
//                 </p>
//               </Col>
//             </Row>
//           </motion.div>

//           <motion.div
//             initial={{ opacity: 0, y: 30 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.6, delay: 0.4 }}
//             viewport={{ once: true }}
//           >
//             <Row className="justify-content-center mt-4">
//               <Col xs="auto">
//                 <Button
//                   href="/about"
//                   className="px-4 py-2 fw-semibold rounded-pill"
//                   style={{
//                     background: "linear-gradient(to right, #e45c3c, #dc522e)",
//                     border: "none",
//                     fontSize: "1.1rem",
//                   }}
//                 >
//                   Learn More
//                 </Button>
//               </Col>
//             </Row>
//           </motion.div>
//         </Container>
//       </section>

//       {/* Services Section */}
//       <section className="py-5 bg-light">
//         <Container>
//           <h4
//             className="text-center fw-bold text-uppercase pb-2 mb-4 border-bottom d-inline-block"
//             style={{ borderColor: "#e45c3c" }}
//           >
//             Our Services
//           </h4>
//           <Row>
//             {services.map((service, index) => (
//               <Col key={index} xs={12} sm={6} lg={4} className="mb-4">
//                 <motion.div
//                   initial={{ opacity: 0, y: 50 }}
//                   whileInView={{ opacity: 1, y: 0 }}
//                   transition={{ duration: 0.6, delay: index * 0.2 }}
//                   viewport={{ once: true }}
//                   onMouseEnter={() => setFlippedIndex(index)}
//                   onMouseLeave={() => setFlippedIndex(null)}
//                   style={{
//                     perspective: "1200px",
//                     height: "340px",
//                   }}
//                 >
//                   <div
//                     style={{
//                       position: "relative",
//                       width: "100%",
//                       height: "100%",
//                       transformStyle: "preserve-3d",
//                       transition: "transform 0.7s ease-in-out",
//                       transform:
//                         flippedIndex === index
//                           ? "rotateY(180deg)"
//                           : "rotateY(0deg)",
//                     }}
//                   >
//                     {/* Front Side */}
//                     <Card
//                       className="shadow-lg"
//                       style={{
//                         height: "100%",
//                         backfaceVisibility: "hidden",
//                         borderRadius: "18px",
//                         overflow: "hidden",
//                         position: "absolute",
//                         width: "100%",
//                         transition: "transform 0.3s",
//                       }}
//                     >
//                       <Card.Img
//                         src={service.image}
//                         alt={service.title}
//                         loading="lazy"
//                         style={{
//                           height: "200px",
//                           objectFit: "cover",
//                           filter: "brightness(0.9)",
//                         }}
//                       />
//                       <Card.Body className="text-center">
//                         <div
//                           className="mb-3 fs-2"
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

//                     {/* Back Side */}
//                     <Card
//                       className="shadow-lg"
//                       style={{
//                         background: service.gradient,
//                         color: "#fff",
//                         height: "100%",
//                         backfaceVisibility: "hidden",
//                         transform: "rotateY(180deg)",
//                         position: "absolute",
//                         width: "100%",
//                         borderRadius: "18px",
//                         display: "flex",
//                         flexDirection: "column",
//                         alignItems: "center",
//                         justifyContent: "center",
//                         padding: "20px",
//                       }}
//                     >
//                       <div className="mb-3 fs-2">{service.icon}</div>
//                       <h5 className="fw-bold text-center">{service.title}</h5>
//                       <Link
//                         to={"/service"}
//                         className="btn btn-light mt-3 fw-bold px-4 rounded-pill shadow-sm"
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
//     </>
//   );
// }

// export default Home;

import React, { useEffect, useState } from "react"; // useState kadhi nakhyu
// import { Link } from "react-router-dom";

// import {
//   FaCoins,
//   FaMoneyCheckAlt,
//   FaPen,
//   FaUniversity,
//   FaFileInvoiceDollar,
//   FaGlobeEurope,
//   FaArrowRight,
//   // FaAward,
// } from "react-icons/fa";

import Header from "../component/Header";
import Footer from "../component/Footer";

import { motion } from "framer-motion";
import {
  FaArrowRight,
  FaAward,
  FaCoins,
  FaFileInvoiceDollar,
  FaPen,
} from "react-icons/fa6";

import img6 from "../assets/img-6.jpg";
import img7 from "../assets/img-7.jpg";
import HomeSlider from "../component/HomeSlider";
import { FaGlobeEurope, FaMoneyCheckAlt, FaUniversity } from "react-icons/fa";
import { Link } from "react-router-dom";
import TestimonialSection from "../component/testimonial";
/* -------- ANIMATION -------- */
const fadeUp = {
  hidden: { opacity: 0, y: 80 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

/* -------- COUNTER -------- */
const useCounter = (end, trigger) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!trigger) return;

    let start = 0;
    const increment = end / 50;

    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 30);

    return () => clearInterval(timer);
  }, [end, trigger]);

  return count;
};

const Home = () => {
  const [startCount, setStartCount] = useState(false);
  const years = useCounter(10, startCount);
  /* ---------------- SERVICES DATA ---------------- */
  const services = [
    {
      title: "Bookkeeping Services",
      icon: <FaPen />,
      image:
        "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&q=80&w=600",
    },
    {
      title: "Financial Consulting",
      icon: <FaUniversity />,
      image:
        "https://avatars.mds.yandex.net/get-altay/12813969/2a0000018e16a8c1a6609b070fa83c18bac9/XXL_height",
    },
    {
      title: "Income Tax Return",
      icon: <FaMoneyCheckAlt />,
      image:
        "https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?auto=format&fit=crop&q=80&w=600",
    },
    {
      title: "Audit & Assurance",
      icon: <FaCoins />,
      image:
        "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&q=80&w=600",
    },
    {
      title: "Payroll Management",
      icon: <FaFileInvoiceDollar />,
      image:
        "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&q=80&w=600",
    },
    {
      title: "International Accounting",
      icon: <FaGlobeEurope />,
      image:
        "https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?auto=format&fit=crop&q=80&w=600",
    },
  ];
  return (
    <div className="overflow-x-hidden font-primary">
      <Header />
      {/* Hero Carousel */}
      <HomeSlider />
      {/* <section className="relative h-[85vh] md:h-[92vh]">
        <Swiper
          modules={[Autoplay, EffectFade, Pagination]}
          effect="fade"
          autoplay={{ delay: 5000, disableOnInteraction: false }}
          pagination={{ clickable: true }}
          className="h-full w-full"
        >
          {slides.map((slide, idx) => (
            <SwiperSlide key={idx} className="relative">
              <div className="absolute inset-0 bg-black/50 z-10" />
              <img
                src={slide.image}
                className="h-full w-full object-cover"
                alt="Banner"
              />

              <div className="absolute inset-0 z-20 flex flex-col items-center justify-center text-center px-6">
                <motion.h1
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                  className="text-4xl md:text-7xl font-extrabold text-white mb-6"
                >
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-500">
                    {slide.heading}
                  </span>
                </motion.h1>
                <motion.p
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 0.4 }}
                  className="text-gray-200 text-lg md:text-2xl max-w-3xl mb-10"
                >
                  {slide.subtext}
                </motion.p>
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                >
                  <Link
                    to={slide.link}
                    className="bg-gradient-to-r from-[#e45c3c] to-[#da4b2d] text-white px-10 py-4 rounded-full font-bold text-lg hover:shadow-2xl hover:shadow-orange-500/40 transition-all transform hover:-translate-y-1 inline-block"
                  >
                    {slide.buttonText}
                  </Link>
                </motion.div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </section> */}
      {/* hero slider closed */}

      {/* About Section */}

      <motion.section
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        onViewportEnter={() => setStartCount(true)}
        viewport={{ once: true }}
        className="bg-gray-100 py-16 md:py-24 px-4 md:px-6"
      >
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-10 md:gap-12 items-center">
          {/* LEFT */}
          <div className="space-y-6">
            <img src={img7} className="rounded-xl shadow-lg w-full" alt="" />

            <div className="grid grid-cols-2 gap-4 md:gap-6">
              {/* COUNTER CARD */}
              <div className="bg-black text-white rounded-2xl p-6 md:p-8 shadow-xl flex flex-col items-center justify-center text-center hover:scale-105 transition duration-300">
                <FaAward className="text-4xl md:text-5xl text-[#F5B800] mb-3" />

                <h2 className="text-3xl md:text-5xl font-bold font-primary">
                  {years}+
                </h2>

                <p className="text-xs md:text-sm text-gray-300">
                  Years Of Experience
                </p>
              </div>

              <img
                src={img6}
                className="rounded-xl shadow-lg w-full h-full object-cover"
                alt=""
              />
            </div>
          </div>

          {/* RIGHT */}
          <div>
            <h4 className="text-[#F5B800] uppercase tracking-widest mb-3">
              About Akshar Consultancy
            </h4>

            <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold text-[#0B2A4A] mb-6 font-primary leading-tight">
              We Have 10+ Years Of Experience In Accounting & Tax Service
            </h2>

            <p className="text-gray-600 mb-6 text-sm md:text-base">
              Akshar Consultancy provides expert taxation, GST, and financial
              advisory services with full compliance and transparency.
            </p>

            {/* POINTS */}
            <div className="grid sm:grid-cols-2 gap-4 mb-8">
              {[
                "High standards of integrity",
                "Best Accounting Service",
                "Quality Control",
                "Professional Team",
                "24/7 Customer Support",
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-[#F5B800] rounded-full"></span>
                  <p className="text-gray-700 text-sm">{item}</p>
                </div>
              ))}
            </div>

            {/* PROGRESS BARS */}
            <div className="space-y-6">
              {[
                { title: "Saving Strategies", value: 91 },
                { title: "Tax Planning", value: 89 },
              ].map((item, i) => (
                <div key={i}>
                  <div className="flex justify-between text-sm mb-2">
                    <span>{item.title}</span>
                  </div>

                  {/* BAR */}
                  <div className="relative w-full h-3 bg-gray-200 rounded-full">
                    {/* Progress */}
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${item.value}%` }}
                      transition={{ duration: 1.5 }}
                      viewport={{ once: true }}
                      className="bg-[#F5B800] h-3 rounded-full"
                    />

                    {/* Tooltip */}
                    <motion.span
                      initial={{ left: "0%" }}
                      whileInView={{ left: `calc(${item.value}% - 12px)` }}
                      transition={{ duration: 1.5 }}
                      viewport={{ once: true }}
                      className="absolute -top-8 bg-black text-white text-xs px-2 py-1 rounded whitespace-nowrap 
                    after:content-[''] after:absolute after:left-1/2 after:-bottom-1 after:-translate-x-1/2 
                    after:border-4 after:border-transparent after:border-t-black"
                    >
                      {item.value}%
                    </motion.span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </motion.section>
      {/* about section closed */}

      {/* Services  Grid section */}
      <div className="bg-gray-100 min-h-screen font-primary">
        {/* ---------------- HEADER SECTION ---------------- */}
        <div className="bg-[#0B2A4A] text-white py-16 text-center">
          <h1 className="text-3xl md:text-5xl font-bold mb-3">Our Services</h1>
          <p className="text-gray-300 text-sm md:text-base">
            Professional Tax & Accounting Services by Akshar Consultancy
          </p>
        </div>

        {/* ---------------- SERVICES ---------------- */}
        <section className="py-16 md:py-24">
          <div className="max-w-7xl mx-auto px-4 md:px-6">
            {/* TOP TEXT */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-2xl md:text-4xl font-bold text-[#0B2A4A] mb-4">
                What We Offer
              </h2>
              <p className="text-gray-500 max-w-2xl mx-auto">
                We provide reliable financial, taxation, and accounting
                solutions to help your business grow with complete compliance
                and confidence.
              </p>
            </motion.div>

            {/* CARDS */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
              {services.map((service, index) => (
                <motion.div
                  key={index}
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true }}
                  className="group relative"
                >
                  {/* IMAGE */}
                  <div className="overflow-hidden rounded-xl">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-56 md:h-64 object-cover transition duration-500 group-hover:scale-110"
                    />
                  </div>

                  {/* CARD */}
                  <div className="relative bg-white shadow-lg p-6 md:p-8 text-center mx-4 -mt-14 z-10 transition-all duration-500 group-hover:-translate-y-3 group-hover:shadow-2xl rounded-xl">
                    {/* ICON */}
                    <div className="text-[#F5B800] text-3xl md:text-4xl mb-4 flex justify-center transition duration-500 group-hover:scale-110 group-hover:rotate-6">
                      {service.icon}
                    </div>

                    {/* TITLE */}
                    <h3 className="text-lg md:text-xl font-semibold text-[#0B2A4A] mb-3 group-hover:text-[#F5B800] transition">
                      {service.title}
                    </h3>

                    {/* DESCRIPTION */}
                    <p className="text-gray-500 text-sm mb-6 group-hover:text-gray-700 transition">
                      Expert solutions by Akshar Consultancy to handle your
                      financial and taxation needs efficiently.
                    </p>

                    {/* BUTTON */}
                    {/* <div className="flex justify-center">
                    <div className="bg-[#F5B800] w-10 h-10 md:w-12 md:h-12 flex items-center justify-center rounded-full shadow-md transition-all duration-500 group-hover:rotate-45 group-hover:scale-110">
                      <FaArrowRight className="text-black" />
                    </div>
                  </div> */}
                    <div className="flex justify-center">
                      <div
                        className="bg-[#F5B800] w-10 h-10 md:w-12 md:h-12 flex items-center justify-center rounded-full shadow-md 
  transition-all duration-500 
  group-hover:scale-110 group-hover:-rotate-45
  transform-gpu origin-center"
                      >
                        <FaArrowRight className="text-black transition-transform duration-500 group-hover:shadow-[0_10px_25px_rgba(245,184,0,0.4)]" />
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* CTA */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="text-center mt-16"
            >
              <Link
                to="/contact"
                className="bg-[#F5B800] text-black px-6 py-3 rounded-full font-semibold hover:bg-yellow-400 transition"
              >
                Get Free Consultation
              </Link>
            </motion.div>
          </div>
        </section>
      </div>
      {/* secrvice grid section closed */}

      <TestimonialSection />
      {/* testimonial sections
      <section className="relative py-24 bg-black text-white">
        {/* Background Image 
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=1600&q=80"
            className="w-full h-full object-cover opacity-30"
            alt="bg"
          />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
          {/* Heading
          <h4 className="text-[#F5B800] font-semibold uppercase tracking-[0.2em] mb-3">
            Testimonials
          </h4>

          <h2 className="text-xl md:text-4xl font-bold mb-4">
            What Clients Say About Akshar Consultancy
          </h2>

          <p className="text-gray-300 max-w-2xl mx-auto mb-16">
            We are proud to provide trusted taxation, GST, and financial
            services with complete client satisfaction.
          </p>

          {/* Cards *
          <div className="grid md:grid-cols-3 gap-8">
            {/* Card 1 
            <div className="bg-gray-100 text-gray-700 p-8 text-left shadow-lg relative rounded-lg">
              <span className="text-5xl text-[#F5B800] absolute top-6 left-6">
                “
              </span>

              <p className="mt-8 mb-10 leading-relaxed">
                Akshar Consultancy has been very supportive in managing our
                accounts and taxation. Their expert advice helped us grow
                confidently.
              </p>

              <div className="border-t pt-4">
                <h4 className="font-semibold text-[#0B2A4A] text-lg">
                  Umiya Bags
                </h4>
                <p className="text-sm text-gray-500">Valued Client</p>
              </div>

              <span className="absolute bottom-6 right-6 text-5xl text-[#F5B800]">
                ”
              </span>
            </div>

            {/* Card 2 
            <div className="bg-gray-100 text-gray-700 p-8 text-left shadow-lg relative rounded-lg">
              <span className="text-5xl text-[#F5B800] absolute top-6 left-6">
                “
              </span>

              <p className="mt-8 mb-10 leading-relaxed">
                We appreciate Akshar Consultancy for their professionalism and
                deep knowledge of GST and tax compliance. Always reliable
                support.
              </p>

              <div className="border-t pt-4">
                <h4 className="font-semibold text-[#0B2A4A] text-lg">
                  Devang Steel Corporation
                </h4>
                <p className="text-sm text-gray-500">Valued Client</p>
              </div>

              <span className="absolute bottom-6 right-6 text-5xl text-[#F5B800]">
                ”
              </span>
            </div>

            {/* Card 3 
            <div className="bg-gray-100 text-gray-700 p-8 text-left shadow-lg relative rounded-lg">
              <span className="text-5xl text-[#F5B800] absolute top-6 left-6">
                “
              </span>

              <p className="mt-8 mb-10 leading-relaxed">
                Akshar Consultancy simplified our financial processes and
                ensured compliance. Their team is efficient and highly
                professional.
              </p>

              <div className="border-t pt-4">
                <h4 className="font-semibold text-[#0B2A4A] text-lg">
                  Yogiraj Parlour
                </h4>
                <p className="text-sm text-gray-500">Valued Client</p>
              </div>

              <span className="absolute bottom-6 right-6 text-5xl text-[#F5B800]">
                ”
              </span>
            </div>
          </div>
        </div>
      </section> */}
      <Footer />
    </div>
  );
};

export default Home;
