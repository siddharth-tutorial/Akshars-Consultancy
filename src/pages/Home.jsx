import React, { useEffect, useState } from "react";
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
import img7 from "../assets/teams.avif";
import HomeSlider from "../component/HomeSlider";

import {
  FaGlobeEurope,
  FaMoneyCheckAlt,
  FaUniversity,
} from "react-icons/fa";

import { Link } from "react-router-dom";
import TestimonialSection from "../component/testimonial";

/* =========================================================
   ANIMATION
========================================================= */

const fadeUp = {
  hidden: {
    opacity: 0,
    y: 50,
  },

  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut",
    },
  },
};

/* =========================================================
   COUNTER
========================================================= */

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

/* =========================================================
   HOME
========================================================= */

const Home = () => {
  const [startCount, setStartCount] = useState(false);

  const years = useCounter(10, startCount);

  /* =======================================================
     SERVICES DATA
  ======================================================= */

  const services = [
    {
      title: "Book Keeping Services",
      icon: <FaPen />,
      image:
        "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&q=80&w=600",
      link: "/service/bookeeping",
      des: "Keep your finances organized with accurate bookkeeping for better business management and growth.",
    },

    {
      title: "Financial Consulting",
      icon: <FaUniversity />,
      image:
        "https://avatars.mds.yandex.net/get-altay/12813969/2a0000018e16a8c1a6609b070fa83c18bac9/XXL_height",
      link: "/service/msme",
      des: "Akshar Tax Consultancy provides expert financial consulting for smarter business decisions and growth.",
    },

    {
      title: "Income Tax Return",
      icon: <FaMoneyCheckAlt />,
      image:
        "https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?auto=format&fit=crop&q=80&w=600",
      link: "/service/taxreturn",
      des: "Akshar Tax Consultancy offers accurate income tax return services for easy and timely filing.",
    },

    {
      title: "Audit & Assurance",
      icon: <FaCoins />,
      image:
        "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&q=80&w=600",
      link: "/service/audit",
      des: "Akshar Tax Consultancy provides reliable audit and assurance services for accurate financial reporting.",
    },

    {
      title: "Payroll Management",
      icon: <FaFileInvoiceDollar />,
      image:
        "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&q=80&w=600",
      link: "/service/payroll",
      des: "Akshar Tax Consultancy delivers efficient payroll services for accurate employee payments and compliance.",
    },

    {
      title: "International Accounting",
      icon: <FaGlobeEurope />,
      image:
        "https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?auto=format&fit=crop&q=80&w=600",
      link: "/service/foreign",
      des: "Akshar Tax Consultancy offers international accounting for compliant global financial management.",
    },
  ];

  return (
    <div className="overflow-x-hidden font-primary w-full">
      {/* =====================================================
          HEADER
      ===================================================== */}

      <Header />

      {/* =====================================================
          HERO
      ===================================================== */}

      <div className="w-full overflow-hidden">
        <HomeSlider />
      </div>

      {/* =====================================================
          ABOUT SECTION
      ===================================================== */}

      <motion.section
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        onViewportEnter={() => setStartCount(true)}
        viewport={{ once: true }}
        className="bg-gray-100 py-10 sm:py-14 md:py-20 lg:py-24 px-4 sm:px-6"
      >
        <div
          className="
            max-w-7xl
            mx-auto
            grid
            grid-cols-1
            lg:grid-cols-2
            gap-8
            sm:gap-10
            lg:gap-14
            items-center
          "
        >
          {/* =================================================
              LEFT IMAGE AREA
          ================================================= */}

          <div className="w-full space-y-4 sm:space-y-6">
            {/* Main Image */}

            <div className="w-full overflow-hidden rounded-xl sm:rounded-2xl">
              <img
                src={img7}
                className="
                  w-full
                  h-auto
                  min-h-[220px]
                  sm:min-h-[280px]
                  md:min-h-[350px]
                  lg:min-h-[400px]
                  object-cover
                  rounded-xl
                  sm:rounded-2xl
                  shadow-lg
                "
                alt="Akshar Tax Consultancy Team"
              />
            </div>

            {/* Bottom Images */}

            <div
              className="
                grid
                grid-cols-2
                gap-3
                sm:gap-4
                md:gap-6
              "
            >
              {/* Counter */}

              <div
                className="
                  bg-black
                  text-white
                  rounded-xl
                  sm:rounded-2xl
                  p-4
                  sm:p-6
                  md:p-8
                  shadow-xl
                  flex
                  flex-col
                  items-center
                  justify-center
                  text-center
                  min-h-[150px]
                  sm:min-h-[190px]
                  md:min-h-[220px]
                  transition
                  duration-300
                  hover:scale-[1.02]
                "
              >
                <FaAward
                  className="
                    text-3xl
                    sm:text-4xl
                    md:text-5xl
                    text-[#F5B800]
                    mb-2
                    sm:mb-3
                  "
                />

                <h2
                  className="
                    text-3xl
                    sm:text-4xl
                    md:text-5xl
                    font-bold
                    font-primary
                    leading-none
                  "
                >
                  {years}+
                </h2>

                <p
                  className="
                    text-[11px]
                    sm:text-xs
                    md:text-sm
                    text-gray-300
                    mt-2
                    leading-tight
                  "
                >
                  Years Of Experience
                </p>
              </div>

              {/* Secondary Image */}

              <div className="overflow-hidden rounded-xl sm:rounded-2xl">
                <img
                  src={img6}
                  className="
                    rounded-xl
                    sm:rounded-2xl
                    shadow-lg
                    w-full
                    h-full
                    min-h-[150px]
                    sm:min-h-[190px]
                    md:min-h-[220px]
                    object-cover
                  "
                  alt="Akshar Tax Consultancy"
                />
              </div>
            </div>
          </div>

          {/* =================================================
              RIGHT CONTENT
          ================================================= */}

          <div className="w-full">
            <h4
              className="
                text-[#F5B800]
                uppercase
                tracking-[0.15em]
                text-xs
                sm:text-sm
                font-semibold
                mb-2
                sm:mb-3
              "
            >
              About Akshar Tax Consultancy
            </h4>

            <h2
              className="
                text-2xl
                sm:text-3xl
                md:text-4xl
                lg:text-5xl
                font-bold
                text-[#0B2A4A]
                mb-4
                sm:mb-6
                font-primary
                leading-tight
              "
            >
              We Have 10+ Years Of Experience In Accounting & Tax Service
            </h2>

            <p
              className="
                text-gray-600
                mb-5
                sm:mb-6
                text-sm
                sm:text-base
                leading-6
                sm:leading-7
              "
            >
              Akshar Tax Consultancy provides expert taxation, GST, and
              financial advisory services with full compliance and
              transparency.
            </p>

            {/* =================================================
                POINTS
            ================================================= */}

            <div
              className="
                grid
                grid-cols-1
                sm:grid-cols-2
                gap-3
                sm:gap-4
                mb-7
                sm:mb-8
              "
            >
              {[
                "High standards of integrity",
                "Best Accounting Service",
                "Quality Control",
                "Professional Team",
              ].map((item, i) => (
                <div
                  key={i}
                  className="
                    flex
                    items-center
                    gap-2
                    min-w-0
                  "
                >
                  <span
                    className="
                      flex-shrink-0
                      w-2
                      h-2
                      bg-[#F5B800]
                      rounded-full
                    "
                  />

                  <p className="text-gray-700 text-sm leading-5">
                    {item}
                  </p>
                </div>
              ))}
            </div>

            {/* =================================================
                PROGRESS BARS
            ================================================= */}

            <div className="space-y-6">
              {[
                {
                  title: "Saving Strategies",
                  value: 91,
                },
                {
                  title: "Tax Planning",
                  value: 89,
                },
              ].map((item, i) => (
                <div key={i}>
                  <div className="flex justify-between text-sm mb-2">
                    <span className="text-gray-700 font-medium">
                      {item.title}
                    </span>

                    <span className="text-gray-700 font-semibold">
                      {item.value}%
                    </span>
                  </div>

                  {/* Progress Bar */}

                  <div className="relative w-full h-2.5 sm:h-3 bg-gray-200 rounded-full">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{
                        width: `${item.value}%`,
                      }}
                      transition={{
                        duration: 1.5,
                      }}
                      viewport={{
                        once: true,
                      }}
                      className="
                        bg-[#F5B800]
                        h-2.5
                        sm:h-3
                        rounded-full
                      "
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </motion.section>

      {/* =====================================================
          SERVICES SECTION
      ===================================================== */}

      <div className="bg-gray-100 min-h-screen font-primary overflow-hidden">
        {/* ===================================================
            SERVICES HEADER
        =================================================== */}

        <div
          className="
            bg-[#0B2A4A]
            text-white
            py-10
            sm:py-12
            md:py-16
            px-4
            text-center
          "
        >
          <h1
            className="
              text-2xl
              sm:text-3xl
              md:text-5xl
              font-bold
              mb-2
              sm:mb-3
            "
          >
            Our Services
          </h1>

          <p
            className="
              text-gray-300
              text-xs
              sm:text-sm
              md:text-base
              max-w-2xl
              mx-auto
              leading-5
              sm:leading-6
            "
          >
            Professional Tax & Accounting Services by Akshar Tax Consultancy
          </p>
        </div>

        {/* ===================================================
            SERVICES
        =================================================== */}

        <section
          className="
            py-10
            sm:py-14
            md:py-20
            lg:py-24
          "
        >
          <div
            className="
              max-w-7xl
              mx-auto
              px-4
              sm:px-6
              lg:px-8
            "
          >
            {/* TOP TEXT */}

            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="
                text-center
                mb-8
                sm:mb-10
                md:mb-12
              "
            >
              <h2
                className="
                  text-2xl
                  sm:text-3xl
                  md:text-4xl
                  font-bold
                  text-[#0B2A4A]
                  mb-3
                  sm:mb-4
                "
              >
                What We Offer
              </h2>

              <p
                className="
                  text-gray-500
                  text-sm
                  sm:text-base
                  leading-6
                  max-w-2xl
                  mx-auto
                "
              >
                We provide reliable financial, taxation, and accounting
                solutions to help your business grow with complete compliance
                and confidence.
              </p>
            </motion.div>

            {/* =================================================
                SERVICE CARDS
            ================================================= */}

            <div
              className="
                grid
                grid-cols-1
                sm:grid-cols-2
                lg:grid-cols-3
                gap-x-6
                sm:gap-x-7
                lg:gap-x-8
                gap-y-10
                sm:gap-y-12
                lg:gap-y-14
              "
            >
              {services.map((service, index) => (
                <motion.div
                  key={index}
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true }}
                  className="group relative w-full"
                >
                  <Link
                    to={service.link}
                    className="
                      block
                      text-inherit
                      no-underline
                      w-full
                    "
                  >
                    {/* IMAGE */}

                    <div
                      className="
                        overflow-hidden
                        rounded-xl
                        sm:rounded-2xl
                        w-full
                      "
                    >
                      <img
                        src={service.image}
                        alt={service.title}
                        loading="lazy"
                        className="
                          w-full
                          h-52
                          sm:h-56
                          md:h-60
                          lg:h-64
                          object-cover
                          transition
                          duration-500
                          group-hover:scale-105
                        "
                      />
                    </div>

                    {/* CARD */}

                    <div
                      className="
                        relative
                        bg-white
                        shadow-lg
                        p-5
                        sm:p-6
                        md:p-7
                        text-center
                        mx-2
                        sm:mx-3
                        md:mx-4
                        -mt-8
                        sm:-mt-10
                        md:-mt-12
                        z-10
                        transition-all
                        duration-500
                        group-hover:-translate-y-2
                        group-hover:shadow-2xl
                        rounded-xl
                        min-h-[245px]
                        sm:min-h-[250px]
                        flex
                        flex-col
                        items-center
                      "
                    >
                      {/* ICON */}

                      <div
                        className="
                          text-[#F5B800]
                          text-3xl
                          sm:text-4xl
                          mb-3
                          sm:mb-4
                          flex
                          justify-center
                          transition
                          duration-500
                          group-hover:scale-110
                        "
                      >
                        {service.icon}
                      </div>

                      {/* TITLE */}

                      <h3
                        className="
                          text-base
                          sm:text-lg
                          md:text-xl
                          font-semibold
                          text-[#0B2A4A]
                          mb-2
                          sm:mb-3
                          group-hover:text-[#F5B800]
                          transition
                          leading-6
                        "
                      >
                        {service.title}
                      </h3>

                      {/* DESCRIPTION */}

                      <p
                        className="
                          text-gray-500
                          text-xs
                          sm:text-sm
                          mb-5
                          sm:mb-6
                          leading-5
                          flex-grow
                          max-w-sm
                        "
                      >
                        {service.des}
                      </p>

                      {/* ARROW */}

                      <div className="flex justify-center">
                        <div
                          className="
                            bg-[#F5B800]
                            w-10
                            h-10
                            sm:w-11
                            sm:h-11
                            md:w-12
                            md:h-12
                            flex
                            items-center
                            justify-center
                            rounded-full
                            shadow-md
                            transition-all
                            duration-500
                            group-hover:scale-110
                            group-hover:-rotate-45
                            transform-gpu
                          "
                        >
                          <FaArrowRight
                            className="
                              text-black
                              text-sm
                              sm:text-base
                            "
                          />
                        </div>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>

            {/* =================================================
                CTA
            ================================================= */}

            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="
                text-center
                mt-10
                sm:mt-14
                md:mt-16
              "
            >
              <Link
                to="/contact"
                className="
                  inline-flex
                  items-center
                  justify-center
                  bg-[#F5B800]
                  text-black
                  px-5
                  sm:px-6
                  py-3
                  sm:py-3.5
                  rounded-full
                  font-semibold
                  text-sm
                  sm:text-base
                  hover:bg-yellow-400
                  transition
                  duration-300
                  min-h-[44px]
                "
              >
                Get Free Consultation
              </Link>
            </motion.div>
          </div>
        </section>
      </div>

      {/* =====================================================
          TESTIMONIAL
      ===================================================== */}

      <div className="w-full overflow-hidden">
        <TestimonialSection />
      </div>

      {/* =====================================================
          FOOTER
      ===================================================== */}

      <Footer />
    </div>
  );
};

export default Home;

