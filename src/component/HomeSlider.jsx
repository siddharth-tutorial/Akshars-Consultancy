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
//     <div className="relative group bg-white/90 backdrop-blur-md shadow-lg rounded-2xl overflow-hidden transition duration-300 hover:-translate-y-2 hover:shadow-2xl">
//       {/* Hover Background */}
//       <div className="absolute inset-0 bg-yellow-400 translate-y-full group-hover:translate-y-0 transition-transform duration-500 z-0" />

//       <div className="relative z-10 px-6 py-10 flex flex-col items-center text-center">
//         {/* Icon */}
//         <div className="mb-5 text-yellow-400 group-hover:text-[#0B2A4A] text-4xl transition">
//           {icon}
//         </div>

//         {/* Title */}
//         <h3 className="font-primary text-xl font-semibold text-gray-800 group-hover:text-white mb-3">
//           {title}
//         </h3>

//         {/* Description */}
//         <p className="font-secondary text-gray-600 group-hover:text-white text-sm leading-relaxed">
//           {desc}
//         </p>

//         {/* Read More */}
//         <div className="mt-5 font-secondary font-medium tracking-wide text-gray-800 group-hover:text-white">
//           READ MORE →
//         </div>
//       </div>
//     </div>
//   );
// };

// /* ---------------- MAIN COMPONENT ---------------- */
// const HomeSlider = () => {
//   const [active, setActive] = useState(0);

//   return (
//     <div className="font-secondary">
//       {/* ---------------- SLIDER ---------------- */}
//       <section className="relative h-[85vh] md:h-[92vh]">
//         <Swiper
//           modules={[Autoplay, EffectFade, Pagination]}
//           effect="fade"
//           autoplay={{ delay: 5000, disableOnInteraction: false }}
//           pagination={{ clickable: true }}
//           onSlideChange={(swiper) => setActive(swiper.realIndex)}
//           className="h-full w-full"
//         >
//           {slides.map((slide, idx) => (
//             <SwiperSlide key={idx} className="relative overflow-hidden">
//               {/* Overlay */}
//               <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black/80 z-10" />

//               {/* Image */}
//               <img
//                 src={slide.image}
//                 className="h-full w-full object-cover scale-105"
//                 alt="Banner"
//               />

//               {/* Content */}
//               <div className="absolute inset-0 z-20 flex flex-col items-center justify-center text-center px-6">
//                 {/* Heading */}
//                 <motion.h1
//                   initial={{ opacity: 0, y: -60 }}
//                   animate={active === idx ? { opacity: 1, y: 0 } : {}}
//                   transition={{ duration: 0.8 }}
//                   className="font-primary text-3xl md:text-5xl font-bold mb-5 text-white leading-tight"
//                 >
//                   {slide.heading}
//                 </motion.h1>

//                 {/* Subtext */}
//                 <motion.p
//                   initial={{ opacity: 0, x: -80 }}
//                   animate={active === idx ? { opacity: 1, x: 0 } : {}}
//                   transition={{ delay: 0.3, duration: 0.7 }}
//                   className="font-secondary text-gray-300 text-base md:text-lg max-w-2xl mb-8"
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
//                     className="bg-yellow-400 text-black px-8 py-3 rounded-full font-semibold hover:bg-yellow-300 transition"
//                   >
//                     {slide.buttonText}
//                   </Link>
//                 </motion.div>
//               </div>
//             </SwiperSlide>
//           ))}
//         </Swiper>

//         {/* Pagination Styling */}
//         <style>{`
//           .swiper-pagination-bullet {
//             width: 12px;
//             height: 12px;
//             background: #fff;
//             opacity: 0.5;
//           }
//           .swiper-pagination-bullet-active {
//             background: #F5B800;
//             opacity: 1;
//             transform: scale(1.3);
//           }
//         `}</style>
//       </section>

//       {/* ---------------- CARDS ---------------- */}
//       <section className="relative z-30 -mt-20 px-6 md:px-20">
//         <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
//           <Card
//           link="/contact"
//             icon={<FaChartSimple />}
//             title="Tax Planning"
//             desc="Professional tax planning services to minimize liabilities and ensure compliance."
//           />

//           <Card
//           link="/contact"
//             icon={<FaBagShopping />}
//             title="GST Consultancy"
//             desc="Complete GST registration, filing, and return services for smooth operations."
//           />

//           <Card
//           link="/contact"
//             icon={<FaMobile />}
//             title="Financial Support"
//             desc="Expert consultancy to manage taxation and financial decisions effectively."
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
const Card = ({ icon, title, desc, link = "#" }) => {
  return (
    <Link
      to={link}
      className="relative group bg-white/95 backdrop-blur-md shadow-lg rounded-2xl overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl block"
    >
      {/* Hover Background */}
      <div className="absolute inset-0 bg-yellow-400 translate-y-full group-hover:translate-y-0 transition-transform duration-500 z-0" />

      <div className="relative z-10 px-5 py-8 md:px-6 md:py-10 flex flex-col items-center text-center">
        {/* Icon */}
        <div className="mb-4 text-yellow-500 group-hover:text-[#0B2A4A] text-3xl md:text-4xl transition-colors duration-300">
          {icon}
        </div>

        {/* Title */}
        <h3 className="font-primary text-lg md:text-xl font-semibold text-gray-800 group-hover:text-white mb-2 transition-colors">
          {title}
        </h3>

        {/* Description */}
        <p className="font-secondary text-gray-600 group-hover:text-white text-xs md:text-sm leading-relaxed transition-colors">
          {desc}
        </p>

        {/* Read More */}
        <div className="mt-4 font-secondary font-semibold text-xs md:text-sm tracking-wider text-gray-800 group-hover:text-white transition-colors">
          READ MORE →
        </div>
      </div>
    </Link>
  );
};

/* ---------------- MAIN COMPONENT ---------------- */
const HomeSlider = () => {
  const [active, setActive] = useState(0);

  return (
    <div className="font-secondary w-full overflow-hidden">
      {/* ---------------- SLIDER ---------------- */}
      <section className="relative h-[80vh] min-h-[520px] md:h-[90vh]">
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
              <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black/85 z-10" />

              {/* Image */}
              <img
                src={slide.image}
                className="h-full w-full object-cover object-center scale-105"
                alt={slide.heading}
              />

              {/* Content */}
              <div className="absolute inset-0 z-20 flex flex-col items-center justify-center text-center px-4 sm:px-8 pb-12 md:pb-0">
                {/* Heading */}
                <motion.h1
                  initial={{ opacity: 0, y: -40 }}
                  animate={active === idx ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.7 }}
                  className="font-primary text-2xl sm:text-4xl md:text-5xl font-bold mb-3 md:mb-5 text-white leading-tight max-w-3xl"
                >
                  {slide.heading}
                </motion.h1>

                {/* Subtext */}
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={active === idx ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.2, duration: 0.6 }}
                  className="font-secondary text-gray-300 text-sm sm:text-base md:text-lg max-w-xl mb-6 md:mb-8 px-2"
                >
                  {slide.subtext}
                </motion.p>

                {/* Button */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={active === idx ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.4, duration: 0.5 }}
                >
                  <Link
                    to={slide.link}
                    className="bg-yellow-400 text-black px-6 py-2.5 md:px-8 md:py-3 rounded-full text-sm md:text-base font-semibold hover:bg-yellow-300 transition-all inline-block shadow-md active:scale-95"
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
          .swiper-pagination {
            bottom: 3.5rem !important;
          }
          @media (min-width: 768px) {
            .swiper-pagination {
              bottom: 6rem !important;
            }
          }
          .swiper-pagination-bullet {
            width: 10px;
            height: 10px;
            background: #fff;
            opacity: 0.5;
            transition: all 0.3s ease;
          }
          .swiper-pagination-bullet-active {
            background: #F5B800;
            opacity: 1;
            transform: scale(1.25);
            width: 24px;
            border-radius: 6px;
          }
        `}</style>
      </section>

      {/* ---------------- CARDS ---------------- */}
      <section className="relative z-30 -mt-12 md:-mt-20 px-4 sm:px-6 md:px-16 max-w-6xl mx-auto pb-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-8">
          <Card
            link="/contact"
            icon={<FaChartSimple />}
            title="Tax Planning"
            desc="Professional tax planning services to minimize liabilities and ensure compliance."
          />

          <Card
            link="/contact"
            icon={<FaBagShopping />}
            title="GST Consultancy"
            desc="Complete GST registration, filing, and return services for smooth operations."
          />

          <Card
            link="/contact"
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