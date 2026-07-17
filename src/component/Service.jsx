// import React from "react";
// import { Link } from "react-router-dom";
// import { motion } from "framer-motion";
// import { FaArrowRight, FaPen } from "react-icons/fa6";
// import { FaMoneyCheckAlt, FaUniversity } from "react-icons/fa";
// import {
//   bookkeeping,
//   financialConsulting,
//   incomeTaxReturn,
// } from "../pages/service/Bookeeping";

// /* ---------------- ANIMATION ---------------- */
// const fadeUp = {
//   hidden: { opacity: 0, y: 60 },
//   show: {
//     opacity: 1,
//     y: 0,
//     transition: { duration: 0.6 },
//   },
// };

// const Service = () => {
//   /* ---------------- SERVICES DATA ---------------- */
//   const services = [
//     {
//       title: "Bookkeeping Services",
//       icon: <FaPen />,
//       image:
//         "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&q=80&w=600",
//       link: "/service/bookkeeping",
//     },
//     {
//       title: "Financial Consulting",
//       icon: <FaUniversity />,
//       image:
//         "https://avatars.mds.yandex.net/get-altay/12813969/2a0000018e16a8c1a6609b070fa83c18bac9/XXL_height",
//     },
//     {
//       title: "Income Tax Return",
//       icon: <FaMoneyCheckAlt />,
//       image:
//         "https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?auto=format&fit=crop&q=80&w=600",
//     },
//     // {
//     //   title: "Audit & Assurance",
//     //   icon: <FaCoins />,
//     //   image:
//     //     "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&q=80&w=600",
//     // },
//     // {
//     //   title: "Payroll Management",
//     //   icon: <FaFileInvoiceDollar />,
//     //   image:
//     //     "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&q=80&w=600",
//     // },
//     // {
//     //   title: "International Accounting",
//     //   icon: <FaGlobeEurope />,
//     //   image:
//     //     "https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?auto=format&fit=crop&q=80&w=600",
//     //},
//   ];

//   return (
//     <div className="bg-gray-100 min-h-screen font-primary">
//       {/* ---------------- HEADER SECTION ---------------- */}
//       <div className="bg-[#0B2A4A] text-white py-16 text-center">
//         <h1 className="text-3xl md:text-5xl font-bold mb-3">Our Services</h1>
//         <p className="text-gray-300 text-sm md:text-base">
//           Professional Tax & Accounting Services by Akshar Consultancy
//         </p>
//       </div>

//       {/* ---------------- SERVICES ---------------- */}
//       <section className="py-16 md:py-24">
//         <div className="max-w-7xl mx-auto px-4 md:px-6">
//           {/* TOP TEXT */}
//           <motion.div
//             variants={fadeUp}
//             initial="hidden"
//             whileInView="show"
//             viewport={{ once: true }}
//             className="text-center mb-12"
//           >
//             <h2 className="text-2xl md:text-4xl font-bold text-[#0B2A4A] mb-4">
//               What We Offer
//             </h2>
//             <p className="text-gray-500 max-w-2xl mx-auto">
//               We provide reliable financial, taxation, and accounting solutions
//               to help your business grow with complete compliance and
//               confidence.
//             </p>
//           </motion.div>

//           {/* CARDS */}
//           <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
//             {services.map((service, index) => (
//               <motion.div
//                 key={index}
//                 variants={fadeUp}
//                 initial="hidden"
//                 whileInView="show"
//                 viewport={{ once: true }}
//                 className="group relative"
//               >
//                 {/* IMAGE */}
//                 <div className="overflow-hidden rounded-xl">
//                   <img
//                     src={service.image}
//                     alt={service.title}
//                     className="w-full h-56 md:h-64 object-cover transition duration-500 group-hover:scale-110"
//                   />
//                 </div>

//                 {/* CARD */}
//                 <div className="relative bg-white shadow-lg p-6 md:p-8 text-center mx-4 -mt-14 z-10 transition-all duration-500 group-hover:-translate-y-3 group-hover:shadow-2xl rounded-xl">
//                   {/* ICON */}
//                   <div className="text-[#F5B800] text-3xl md:text-4xl mb-4 flex justify-center transition duration-500 group-hover:scale-110 group-hover:rotate-6">
//                     {service.icon}
//                   </div>

//                   {/* TITLE */}
//                   <h3 className="text-lg md:text-xl font-semibold text-[#0B2A4A] mb-3 group-hover:text-[#F5B800] transition">
//                     {service.title}
//                   </h3>

//                   {/* DESCRIPTION */}
//                   <p className="text-gray-500 text-sm mb-6 group-hover:text-gray-700 transition">
//                     Expert solutions by Akshar Consultancy to handle your
//                     financial and taxation needs efficiently.
//                   </p>

//                   {/* BUTTON */}
//                   {/* <div className="flex justify-center">
//                     <div className="bg-[#F5B800] w-10 h-10 md:w-12 md:h-12 flex items-center justify-center rounded-full shadow-md transition-all duration-500 group-hover:rotate-45 group-hover:scale-110">
//                       <FaArrowRight className="text-black" />
//                     </div>
//                   </div> */}
//                   <div className="flex justify-center">
//                     <div
//                       className="bg-[#F5B800] w-10 h-10 md:w-12 md:h-12 flex items-center justify-center rounded-full shadow-md 
//   transition-all duration-500 
//   group-hover:scale-110 group-hover:-rotate-45
//   transform-gpu origin-center"
//                     >
//                       <FaArrowRight className="text-black transition-transform duration-500 group-hover:shadow-[0_10px_25px_rgba(245,184,0,0.4)]" />
//                     </div>
//                   </div>
//                 </div>
//               </motion.div>
//             ))}
//           </div>

//           {/* CTA */}
//           <motion.div
//             variants={fadeUp}
//             initial="hidden"
//             whileInView="show"
//             viewport={{ once: true }}
//             className="text-center mt-16"
//           >
//             <Link
//               to="/contact"
//               className="bg-[#F5B800] text-black px-6 py-3 rounded-full font-semibold hover:bg-yellow-400 transition"
//             >
//               Get Free Consultation
//             </Link>
//           </motion.div>
//         </div>
//       </section>
//     </div>
//   );
// };

// export default Service;
import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FaArrowRight, FaPen } from "react-icons/fa6";
import { FaMoneyCheckAlt, FaUniversity } from "react-icons/fa";

/* ---------------- ANIMATION ---------------- */
const fadeUp = {
  hidden: { opacity: 0, y: 60 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 },
  },
};

const Service = () => {
  /* ---------------- SERVICES DATA ---------------- */
  const services = [
    {
      title: "Bookkeeping Services",
      icon: <FaPen />,
      image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&q=80&w=600",
      link: "/bookkeeping", // દરેકની અલગ લિંક
    },
    {
      title: "Financial Consulting",
      icon: <FaUniversity />,
      image: "https://avatars.mds.yandex.net/get-altay/12813969/2a0000018e16a8c1a6609b070fa83c18bac9/XXL_height",
      link: "/financial-consulting",
    },
    {
      title: "Income Tax Return",
      icon: <FaMoneyCheckAlt />,
      image: "https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?auto=format&fit=crop&q=80&w=600",
      link: "/tax-return",
    },
  ];

  return (
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
              We provide reliable financial, taxation, and accounting solutions
              to help your business grow with complete compliance and confidence.
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
                <div className="overflow-hidden rounded-xl">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-56 md:h-64 object-cover transition duration-500 group-hover:scale-110"
                  />
                </div>

                <div className="relative bg-white shadow-lg p-6 md:p-8 text-center mx-4 -mt-14 z-10 transition-all duration-500 group-hover:-translate-y-3 group-hover:shadow-2xl rounded-xl">
                  <div className="text-[#F5B800] text-3xl md:text-4xl mb-4 flex justify-center transition duration-500 group-hover:scale-110 group-hover:rotate-6">
                    {service.icon}
                  </div>

                  <h3 className="text-lg md:text-xl font-semibold text-[#0B2A4A] mb-3 group-hover:text-[#F5B800] transition">
                    {service.title}
                  </h3>

                  <p className="text-gray-500 text-sm mb-6 group-hover:text-gray-700 transition">
                    Expert solutions by Akshar Consultancy to handle your
                    financial and taxation needs efficiently.
                  </p>

                  {/* લિંક સાથેનું અપડેટેડ બટન */}
                  <Link to={service.link} className="flex justify-center">
                    <div
                      className="bg-[#F5B800] w-10 h-10 md:w-12 md:h-12 flex items-center justify-center rounded-full shadow-md 
                      transition-all duration-500 
                      group-hover:scale-110 group-hover:-rotate-45
                      transform-gpu origin-center"
                    >
                      <FaArrowRight className="text-black transition-transform duration-500" />
                    </div>
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>

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
  );
};

export default Service;