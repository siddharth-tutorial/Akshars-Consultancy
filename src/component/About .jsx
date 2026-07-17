// import { motion } from "framer-motion";
// import { useEffect, useState } from "react";
// import img7 from "../assets/img-7.jpg";
// import img6 from "../assets/img-6.jpg";
// import { FaAward } from "react-icons/fa6";

// /* -------- ANIMATION -------- */
// const fadeUp = {
//   hidden: { opacity: 0, y: 80 },
//   show: {
//     opacity: 1,
//     y: 0,
//     transition: { duration: 0.8, ease: "easeOut" },
//   },
// };

// /* -------- COUNTER -------- */
// const useCounter = (end, trigger) => {
//   const [count, setCount] = useState(0);

//   useEffect(() => {
//     if (!trigger) return;

//     let start = 0;
//     const increment = end / 50;

//     const timer = setInterval(() => {
//       start += increment;
//       if (start >= end) {
//         setCount(end);
//         clearInterval(timer);
//       } else {
//         setCount(Math.floor(start));
//       }
//     }, 30);

//     return () => clearInterval(timer);
//   }, [end, trigger]);

//   return count;
// };

// /* -------- COMPONENT -------- */
// const About = () => {
//   const [startCount, setStartCount] = useState(false);
//   const years = useCounter(10, startCount);

//   return (
//     <motion.section
//       variants={fadeUp}
//       initial="hidden"
//       whileInView="show"
//       onViewportEnter={() => setStartCount(true)}
//       viewport={{ once: true }}
//       className="bg-gray-100 py-16 md:py-24 px-4 md:px-6"
//     >
//       <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-10 md:gap-12 items-center">
//         {/* LEFT */}
//         <div className="space-y-6">
//           <img src={img7} className="rounded-xl shadow-lg w-full" alt="" />

//           <div className="grid grid-cols-2 gap-4 md:gap-6">
//             {/* COUNTER CARD */}
//             <div className="bg-black text-white rounded-2xl p-6 md:p-8 shadow-xl flex flex-col items-center justify-center text-center hover:scale-105 transition duration-300">
//               <FaAward className="text-4xl md:text-5xl text-[#F5B800] mb-3" />

//               <h2 className="text-3xl md:text-5xl font-bold font-primary">
//                 {years}+
//               </h2>

//               <p className="text-xs md:text-sm text-gray-300">
//                 Years Of Experience
//               </p>
//             </div>

//             <img
//               src={img6}
//               className="rounded-xl shadow-lg w-full h-full object-cover"
//               alt=""
//             />
//           </div>
//         </div>

//         {/* RIGHT */}
//         <div>
//           <h4 className="text-[#F5B800] uppercase tracking-widest mb-3">
//             About Akshar Consultancy
//           </h4>

//           <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold text-[#0B2A4A] mb-6 font-primary leading-tight">
//             We Have 10+ Years Of Experience In Accounting & Tax Service
//           </h2>

//           <p className="text-gray-600 mb-6 text-sm md:text-base">
//             Akshar Consultancy provides expert taxation, GST, and financial
//             advisory services with full compliance and transparency.
//           </p>

//           {/* POINTS */}
//           <div className="grid sm:grid-cols-2 gap-4 mb-8">
//             {[
//               "High standards of integrity",
//               "Best Accounting Service",
//               "Quality Control",
//               "Professional Team",
//               "24/7 Customer Support",
//             ].map((item, i) => (
//               <div key={i} className="flex items-center gap-2">
//                 <span className="w-2 h-2 bg-[#F5B800] rounded-full"></span>
//                 <p className="text-gray-700 text-sm">{item}</p>
//               </div>
//             ))}
//           </div>

//           {/* PROGRESS BARS */}
//           <div className="space-y-6">
//             {[
//               { title: "Saving Strategies", value: 91 },
//               { title: "Tax Planning", value: 89 },
//             ].map((item, i) => (
//               <div key={i}>
//                 <div className="flex justify-between text-sm mb-2">
//                   <span>{item.title}</span>
//                 </div>

//                 <div className="relative w-full h-3 bg-gray-200 rounded-full overflow-hidden">
//                   {/* Progress */}
//                   <motion.div
//                     initial={{ width: 0 }}
//                     whileInView={{ width: `${item.value}%` }}
//                     transition={{ duration: 1.5 }}
//                     viewport={{ once: true }}
//                     className="bg-[#F5B800] h-3 rounded-full"
//                   />

//                   {/* Tooltip */}
//                   <motion.span
//                     initial={{ left: "0%" }}
//                     whileInView={{ left: `${item.value}%` }}
//                     transition={{ duration: 1.5 }}
//                     viewport={{ once: true }}
//                     className="absolute -top-7 translate-x-[-50%] bg-black text-white text-xs px-2 py-1 rounded"
//                   >
//                     {item.value}%
//                   </motion.span>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </motion.section>
//   );
// };

// export default About;

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FaAward } from "react-icons/fa6";

import img7 from "../assets/img-7.jpg";
import img6 from "../assets/img-6.jpg";

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

const About = () => {
  const [startCount, setStartCount] = useState(false);
  const years = useCounter(10, startCount);

  return (
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
  );
};

export default About;
