// import React, { useState } from "react";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Autoplay, EffectFade, Pagination } from "swiper/modules";
// import { motion } from "framer-motion";
// import { Link } from "react-router-dom";

// // Swiper CSS
// import "swiper/css";
// import "swiper/css/effect-fade";
// import "swiper/css/pagination";

// const slides = [
//   {
//     heading: "Expert Financial Solutions",
//     subtext: "We provide trusted accounting, GST & tax services.",
//     buttonText: "Explore Services",
//     link: "/service",
//     image:
//       "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=1600&q=80",
//   },
//   {
//     heading: "Grow Your Business",
//     subtext: "Smart financial planning for long-term success.",
//     buttonText: "Get Started",
//     link: "/contact",
//     image:
//       "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=1600&q=80",
//   },
//   {
//     heading: "Reliable Tax Consultancy",
//     subtext: "Simplifying taxation with expert guidance.",
//     buttonText: "Learn More",
//     link: "/about",
//     image:
//       "https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?auto=format&fit=crop&w=1600&q=80",
//   },
// ];

// const HomeSlider = () => {
//   const [active, setActive] = useState(0);

//   return (
//     <section className="relative h-[85vh] md:h-[92vh]">
//       <Swiper
//         modules={[Autoplay, EffectFade, Pagination]}
//         effect="fade"
//         autoplay={{ delay: 5000, disableOnInteraction: false }}
//         pagination={{ clickable: true }}
//         onSlideChange={(swiper) => setActive(swiper.realIndex)}
//         className="h-full w-full custom-swiper"
//       >
//         {slides.map((slide, idx) => (
//           <SwiperSlide key={idx} className="relative overflow-hidden">
//             {/* Overlay */}
//             <div className="absolute inset-0 bg-gradient-to-b from-primaryDark/80 via-primaryDark/70 to-black/80 z-10" />

//             {/* Image */}
//             <img
//               src={slide.image}
//               className="h-full w-full object-cover"
//               alt="Banner"
//             />

//             {/* Content */}
//             <div className="absolute inset-0 z-20 flex flex-col items-center justify-center text-center px-6">
//               {/* Heading */}
//               <motion.h1
//                 initial={{ opacity: 0, y: -60 }}
//                 animate={
//                   active === idx ? { opacity: 1, y: 0 } : { opacity: 0, y: -60 }
//                 }
//                 transition={{ duration: 0.8 }}
//                 className="text-3xl md:text-5xl font-bold mb-5"
//               >
//                 <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold to-yellow-300">
//                   {slide.heading}
//                 </span>
//               </motion.h1>

//               {/* Subtext */}
//               <motion.p
//                 initial={{ opacity: 0, x: -80 }}
//                 animate={
//                   active === idx ? { opacity: 1, x: 0 } : { opacity: 0, x: -80 }
//                 }
//                 transition={{ delay: 0.3, duration: 0.7 }}
//                 className="text-silver text-base md:text-xl max-w-2xl mb-8"
//               >
//                 {slide.subtext}
//               </motion.p>

//               {/* Button */}
//               <motion.div
//                 initial={{ opacity: 0, y: 50, scale: 0.8 }}
//                 animate={
//                   active === idx
//                     ? { opacity: 1, y: 0, scale: 1 }
//                     : { opacity: 0, y: 50, scale: 0.8 }
//                 }
//                 transition={{ delay: 0.6 }}
//               >
//                 <Link
//                   to={slide.link}
//                   className="bg-gold text-black px-8 py-3 rounded-full font-semibold hover:bg-yellow-400 transition"
//                 >
//                   {slide.buttonText}
//                 </Link>
//               </motion.div>
//             </div>
//           </SwiperSlide>
//         ))}
//       </Swiper>

//       {/* 🔥 CUSTOM PAGINATION DESIGN */}
//       <style>{`
//         .custom-swiper .swiper-pagination {
//           bottom: 30px;
//         }

//         .custom-swiper .swiper-pagination-bullet {
//           width: 12px;
//           height: 12px;
//           background: #ffffff;
//           opacity: 0.5;
//           margin: 0 6px !important;
//           border-radius: 50%;
//           transition: all 0.3s ease;
//         }

//         .custom-swiper .swiper-pagination-bullet-active {
//           background: #F5B800;
//           opacity: 1;
//           transform: scale(1.4);
//           box-shadow: 0 0 10px rgba(245, 184, 0, 0.8);
//         }
//       `}</style>
//     </section>
//   );
// };

// export default HomeSlider;
// import React, { useState } from "react";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Autoplay, EffectFade, Pagination } from "swiper/modules";
// import { motion } from "framer-motion";
// import { Link } from "react-router-dom";
// import { FaChartSimple, FaBagShopping, FaMobile } from "react-icons/fa6";

// // Swiper CSS
// import "swiper/css";
// import "swiper/css/effect-fade";
// import "swiper/css/pagination";

// /* ---------------- SLIDER DATA ---------------- */
// const slides = [
//   {
//     heading: "Expert Financial Solutions",
//     subtext: "We provide trusted accounting, GST & tax services.",
//     buttonText: "Explore Services",
//     link: "/service",
//     image:
//       "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=1600&q=80",
//   },
//   {
//     heading: "Grow Your Business",
//     subtext: "Smart financial planning for long-term success.",
//     buttonText: "Get Started",
//     link: "/contact",
//     image:
//       "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=1600&q=80",
//   },
//   {
//     heading: "Reliable Tax Consultancy",
//     subtext: "Simplifying taxation with expert guidance.",
//     buttonText: "Learn More",
//     link: "/about",
//     image:
//       "https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?auto=format&fit=crop&w=1600&q=80",
//   },
// ];

// /* ---------------- CARD COMPONENT ---------------- */
// const Card = ({ icon, title, desc }) => {
//   return (
//     <div className="relative group bg-gray-100 shadow-md rounded-xl overflow-hidden">
//       {/* Animated Background */}
//       <div
//         className="absolute inset-0 bg-yellow-400
//         translate-y-full group-hover:translate-y-0
//         transition-transform duration-500 ease-in-out z-0"
//       />

//       <div className="relative z-10 px-6 py-12 flex flex-col items-center text-center">
//         {/* 3D Flip Icon */}
//         <div className="mb-6 [perspective:1000px]">
//           <div
//             className="relative w-12 h-12 transition-transform duration-700
//             [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]"
//           >
//             {/* Front */}
//             <div
//               className="absolute inset-0 flex items-center justify-center
//               text-yellow-500 group-hover:text-[#0B2A4A] text-4xl
//               [backface-visibility:hidden]"
//             >
//               {icon}
//             </div>

//             {/* Back */}
//             <div
//               className="absolute inset-0 flex items-center justify-center
//               text-[#0B2A4A] text-4xl
//               [transform:rotateY(180deg)] [backface-visibility:hidden]"
//             >
//               {icon}
//             </div>
//           </div>
//         </div>

//         {/* Title */}
//         <h3 className="text-xl font-semibold tracking-tight text-black group-hover:text-white mb-4 transition">
//           {title}
//         </h3>

//         {/* Description */}
//         <p className="text-gray-600 group-hover:text-white leading-relaxed text-sm md:text-base transition">
//           {desc}
//         </p>

//         <div className="mt-6 font-medium tracking-wide text-black group-hover:text-white">
//           READ MORE →
//         </div>
//       </div>
//     </div>
//   );
// };

// /* ---------------- MAIN PAGE ---------------- */
// const HomeSlider = () => {
//   const [active, setActive] = useState(0);

//   return (
//     <div className="font-primary">
//       {/* ---------------- SLIDER ---------------- */}
//       <section className="relative h-[85vh] md:h-[92vh]">
//         <Swiper
//           modules={[Autoplay, EffectFade, Pagination]}
//           effect="fade"
//           autoplay={{ delay: 5000, disableOnInteraction: false }}
//           pagination={{ clickable: true }}
//           onSlideChange={(swiper) => setActive(swiper.realIndex)}
//           className="h-full w-full custom-swiper"
//         >
//           {slides.map((slide, idx) => (
//             <SwiperSlide key={idx} className="relative overflow-hidden">
//               {/* Overlay */}
//               <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black/80 z-10" />

//               {/* Image */}
//               <img
//                 src={slide.image}
//                 className="h-full w-full object-cover"
//                 alt="Banner"
//               />

//               {/* Content */}
//               <div className="absolute inset-0 z-20 flex flex-col items-center justify-center text-center px-6">
//                 {/* Heading */}
//                 <motion.h1
//                   initial={{ opacity: 0, y: -60 }}
//                   animate={active === idx ? { opacity: 1, y: 0 } : {}}
//                   transition={{ duration: 0.8 }}
//                   className="text-3xl md:text-5xl font-bold tracking-tight mb-5 text-white"
//                 >
//                   {slide.heading}
//                 </motion.h1>

//                 {/* Subtext */}
//                 <motion.p
//                   initial={{ opacity: 0, x: -80 }}
//                   animate={active === idx ? { opacity: 1, x: 0 } : {}}
//                   transition={{ delay: 0.3, duration: 0.7 }}
//                   className="text-gray-300 text-base md:text-lg leading-relaxed max-w-2xl mb-8"
//                 >
//                   {slide.subtext}
//                 </motion.p>

//                 {/* Button */}
//                 <motion.div
//                   initial={{ opacity: 0, y: 50 }}
//                   animate={active === idx ? { opacity: 1, y: 0 } : {}}
//                   transition={{ delay: 0.6 }}
//                 >
//                   <Link
//                     to={slide.link}
//                     className="bg-yellow-400 text-black px-8 py-3 rounded-full font-medium tracking-wide hover:bg-yellow-300 transition"
//                   >
//                     {slide.buttonText}
//                   </Link>
//                 </motion.div>
//               </div>
//             </SwiperSlide>
//           ))}
//         </Swiper>

//         {/* Pagination */}
//         <style>{`
//           .custom-swiper .swiper-pagination {
//             bottom: 30px;
//           }
//           .custom-swiper .swiper-pagination-bullet {
//             width: 12px;
//             height: 12px;
//             background: #fff;
//             opacity: 0.5;
//           }
//           .custom-swiper .swiper-pagination-bullet-active {
//             background: #F5B800;
//             opacity: 1;
//             transform: scale(1.3);
//           }
//         `}</style>
//       </section>

//       {/* ---------------- CARDS ---------------- */}
//       <section className="relative z-30 -mt-24 px-6 md:px-20">
//         <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
//           <Card
//             icon={<FaChartSimple />}
//             title="Tax Planning"
//             desc="Professional tax planning services to minimize liabilities and ensure compliance with latest regulations."
//           />

//           <Card
//             icon={<FaBagShopping />}
//             title="GST Consultancy"
//             desc="Complete GST registration, filing, and return services for smooth business operations."
//           />

//           <Card
//             icon={<FaMobile />}
//             title="Financial Support"
//             desc="Expert consultancy support to manage taxation and financial decisions effectively."
//           />
//         </div>
//       </section>
//     </div>
//   );
// };

// export default HomeSlider;
import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade, Pagination } from "swiper/modules";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FaChartSimple, FaBagShopping, FaMobile } from "react-icons/fa6";

// Swiper CSS
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/pagination";

/* ---------------- SLIDER DATA ---------------- */
const slides = [
  {
    heading: "Expert Financial Solutions",
    subtext: "We provide trusted accounting, GST & tax services.",
    buttonText: "Explore Services",
    link: "/service",
    image:
      "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=1600&q=80",
  },
  {
    heading: "Grow Your Business",
    subtext: "Smart financial planning for long-term success.",
    buttonText: "Get Started",
    link: "/contact",
    image:
      "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=1600&q=80",
  },
  {
    heading: "Reliable Tax Consultancy",
    subtext: "Simplifying taxation with expert guidance.",
    buttonText: "Learn More",
    link: "/about",
    image:
      "https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?auto=format&fit=crop&w=1600&q=80",
  },
];

/* ---------------- CARD COMPONENT ---------------- */
const Card = ({ icon, title, desc }) => {
  return (
    <div className="relative group bg-white/90 backdrop-blur-md shadow-lg rounded-2xl overflow-hidden transition duration-300 hover:-translate-y-2 hover:shadow-2xl">
      {/* Hover Background */}
      <div className="absolute inset-0 bg-yellow-400 translate-y-full group-hover:translate-y-0 transition-transform duration-500 z-0" />

      <div className="relative z-10 px-6 py-10 flex flex-col items-center text-center">
        {/* Icon */}
        <div className="mb-5 text-yellow-400 group-hover:text-[#0B2A4A] text-4xl transition">
          {icon}
        </div>

        {/* Title */}
        <h3 className="font-primary text-xl font-semibold text-gray-800 group-hover:text-white mb-3">
          {title}
        </h3>

        {/* Description */}
        <p className="font-secondary text-gray-600 group-hover:text-white text-sm leading-relaxed">
          {desc}
        </p>

        {/* Read More */}
        <div className="mt-5 font-secondary font-medium tracking-wide text-gray-800 group-hover:text-white">
          READ MORE →
        </div>
      </div>
    </div>
  );
};

/* ---------------- MAIN COMPONENT ---------------- */
const HomeSlider = () => {
  const [active, setActive] = useState(0);

  return (
    <div className="font-secondary">
      {/* ---------------- SLIDER ---------------- */}
      <section className="relative h-[85vh] md:h-[92vh]">
        <Swiper
          modules={[Autoplay, EffectFade, Pagination]}
          effect="fade"
          autoplay={{ delay: 5000, disableOnInteraction: false }}
          pagination={{ clickable: true }}
          onSlideChange={(swiper) => setActive(swiper.realIndex)}
          className="h-full w-full"
        >
          {slides.map((slide, idx) => (
            <SwiperSlide key={idx} className="relative overflow-hidden">
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black/80 z-10" />

              {/* Image */}
              <img
                src={slide.image}
                className="h-full w-full object-cover scale-105"
                alt="Banner"
              />

              {/* Content */}
              <div className="absolute inset-0 z-20 flex flex-col items-center justify-center text-center px-6">
                {/* Heading */}
                <motion.h1
                  initial={{ opacity: 0, y: -60 }}
                  animate={active === idx ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.8 }}
                  className="font-primary text-3xl md:text-5xl font-bold mb-5 text-white leading-tight"
                >
                  {slide.heading}
                </motion.h1>

                {/* Subtext */}
                <motion.p
                  initial={{ opacity: 0, x: -80 }}
                  animate={active === idx ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.3, duration: 0.7 }}
                  className="font-secondary text-gray-300 text-base md:text-lg max-w-2xl mb-8"
                >
                  {slide.subtext}
                </motion.p>

                {/* Button */}
                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  animate={active === idx ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.6 }}
                >
                  <Link
                    to={slide.link}
                    className="bg-yellow-400 text-black px-8 py-3 rounded-full font-semibold hover:bg-yellow-300 transition"
                  >
                    {slide.buttonText}
                  </Link>
                </motion.div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Pagination Styling */}
        <style>{`
          .swiper-pagination-bullet {
            width: 12px;
            height: 12px;
            background: #fff;
            opacity: 0.5;
          }
          .swiper-pagination-bullet-active {
            background: #F5B800;
            opacity: 1;
            transform: scale(1.3);
          }
        `}</style>
      </section>

      {/* ---------------- CARDS ---------------- */}
      <section className="relative z-30 -mt-20 px-6 md:px-20">
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <Card
            icon={<FaChartSimple />}
            title="Tax Planning"
            desc="Professional tax planning services to minimize liabilities and ensure compliance."
          />

          <Card
            icon={<FaBagShopping />}
            title="GST Consultancy"
            desc="Complete GST registration, filing, and return services for smooth operations."
          />

          <Card
            icon={<FaMobile />}
            title="Financial Support"
            desc="Expert consultancy to manage taxation and financial decisions effectively."
          />
        </div>
      </section>
    </div>
  );
};

export default HomeSlider;
