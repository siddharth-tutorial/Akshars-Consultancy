
import React, { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import Header from "../../component/Header";
import Footer from "../../component/Footer";
import b4 from "../../assets/b-4.jpg";
import b5 from "../../assets/1b.png";
import b6 from "../../assets/2b.png";
import bgImage from "../../assets/bg1.webp";
import Loader from "../Loader";
import { FaWhatsapp, FaDownload, FaCheckCircle } from "react-icons/fa";

const fadeUp = {
  hidden: {
    opacity: 0,
    y: 50,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
    },
  },
};

const TaxReturn = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  const processSteps = [
    "Initial Consultation & Requirement Gathering",
    "Collection of Income, Investment, and Deduction Documents",
    "Detailed Tax Computation & Optimization Strategy",
    "Preparation of Draft Return & Client Review",
    "Final Return Filing & Acknowledgement Generation",
    "Post-Filing Guidance, Compliance & Year-Round Assistance",
  ];

  const AnimatedSection = ({ children }) => {
    const ref = useRef(null);

    const isInView = useInView(ref, {
      once: true,
      margin: "-50px",
    });

    return (
      <motion.div
        ref={ref}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={fadeUp}
      >
        {children}
      </motion.div>
    );
  };

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <div className="font-sans overflow-x-hidden">
          <Header />

          {/* =====================================================
              HERO SECTION
          ====================================================== */}
          <section
            className="relative flex min-h-[300px] items-center overflow-hidden bg-cover bg-center py-16 sm:min-h-[340px] sm:py-20 md:min-h-[380px] md:py-24"
            style={{
              backgroundImage: `url(${bgImage})`,
            }}
          >
            {/* Overlay */}
             <div className="absolute inset-0 z-10 bg-[#0B2A4A]]/75"></div>

            {/* Right Overlay */}
            <div
              className="absolute right-0 top-0 z-20 hidden h-full w-2/5 bg-[#0A1F3A]]/50 md:block"
              style={{ clipPath: "polygon(0 0, 100% 0, 100% 100%, 20% 100%)" }}
            ></div>
            <div className="absolute bottom-0 left-0 z-20 h-1 w-24 bg-gold sm:w-32"></div>

            {/* Hero Content */}
            <div className="relative z-30 mx-auto w-full max-w-[1300px] px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col items-center md:items-start">
                <h1 className="text-center font-primary text-4xl font-bold leading-tight text-white sm:text-4xl md:text-5xl lg:text-6xl">
                  Tax Return Services
                </h1>

                {/* Breadcrumb */}
                <nav
                  className="flex justify-center md:justify-start"
                  aria-label="Breadcrumb"
                >
                  <ol className="flex flex-wrap items-center justify-center gap-y-1 text-sm text-white sm:text-base md:justify-start">
                    <li className="inline-flex items-center">
                      <a
                        href="/"
                        className="text-white transition hover:underline"
                      >
                        Home
                      </a>
                    </li>

                    <li className="flex items-center">
                      <span className="mx-2 text-white">&gt;</span>

                      <a
                        href="/service"
                        className="text-white"
                      >
                        Service
                      </a>
                    </li>

                    <li className="flex items-center">
                      <span className="mx-2 text-white">&gt;</span>

                      <span className="font-semibold text-[#F5B800]">
                        Tax Return Services
                      </span>
                    </li>
                  </ol>
                </nav>
              </div>
            </div>
          </section>

          {/* =====================================================
              INCOME TAX FILING SERVICES
          ====================================================== */}
          <section className="bg-gray-50 py-10 sm:py-12 md:py-16">
            <div className="mx-auto w-full max-w-[1300px] px-4 sm:px-6 lg:px-8">
              <AnimatedSection>
                <div className="grid grid-cols-1 items-center gap-8 md:grid-cols-2 md:gap-10 lg:gap-14">
                  {/* Content */}
                  <div className="mb-4 md:mb-0">
                    <h3 className="mb-4 text-2xl font-bold text-gray-900 sm:text-3xl">
                      Income Tax Filing Services
                    </h3>

                    <p className="text-base leading-7 text-gray-700 sm:text-lg">
                      At Akshar Tax Consultancy, we understand that every taxpayer
                      is unique...
                    </p>

                    <h5 className="mb-3 mt-6 text-xl font-bold text-gray-900">
                      Our Offerings:
                    </h5>

                    <ul className="flex flex-col text-gray-700">
                      <li className="border-b border-gray-200 py-3">
                        ✔ ITR Filing for Salaried...
                      </li>

                      <li className="border-b border-gray-200 py-3">
                        ✔ Capital Gains...
                      </li>

                      <li className="border-b border-gray-200 py-3">
                        ✔ Income from Multiple Sources
                      </li>

                      <li className="border-b border-gray-200 py-3">
                        ✔ Tax Deduction Planning
                      </li>

                      <li className="border-b border-gray-200 py-3">
                        ✔ Late Filing or Revised Returns
                      </li>

                      <li className="border-b border-gray-200 py-3">
                        ✔ Tax Notice Handling
                      </li>
                    </ul>

                    {/* Download Button */}
                    <a
                      href="/Akshar_Tax_Consultancy_Brochure.pdf"
                      target="_blank"
                      rel="noopener noreferrer"
                      download
                      className="mt-6 inline-flex w-full items-center justify-center rounded border-2 border-blue-600 px-6 py-2.5 font-medium text-blue-600 transition-colors hover:bg-blue-600 hover:text-white sm:w-auto"
                    >
                      <FaDownload className="mr-2" />
                      Download Brochure
                    </a>
                  </div>

                  {/* Image */}
                  <div className="text-center">
                    <img
                      src={b4}
                      alt="Tax Services"
                      className="mx-auto w-full max-w-md rounded-lg object-cover shadow-lg"
                      loading="lazy"
                    />
                  </div>
                </div>
              </AnimatedSection>
            </div>
          </section>

          {/* =====================================================
              GST SECTION
          ====================================================== */}
          <section className="bg-white py-10 sm:py-12 md:py-16">
            <div className="mx-auto w-full max-w-[1300px] px-4 sm:px-6 lg:px-8">
              <AnimatedSection>
                <div className="grid grid-cols-1 items-center gap-8 md:grid-cols-2 md:gap-10 lg:gap-14">
                  {/* Image */}
                  <div className="order-2 mb-4 text-center md:order-1 md:mb-0">
                    <img
                      src={b6}
                      alt="GST Filing"
                      className="mx-auto w-full max-w-md rounded-lg object-cover shadow-lg"
                      loading="lazy"
                    />
                  </div>

                  {/* Content */}
                  <div className="order-1 md:order-2">
                    <h3 className="mb-4 text-2xl font-bold text-gray-900 sm:text-3xl">
                      GST Filing & Compliance
                    </h3>

                    <p className="text-base leading-7 text-gray-700 sm:text-lg">
                      GST filing can be complex and time-sensitive...
                    </p>

                    <h5 className="mb-3 mt-6 text-xl font-bold text-gray-900">
                      Our GST Solutions:
                    </h5>

                    <ul className="flex flex-col text-gray-700">
                      <li className="border-b border-gray-200 py-3">
                        ✔ GST Registration
                      </li>

                      <li className="border-b border-gray-200 py-3">
                        ✔ GSTR-1, GSTR-3B
                      </li>

                      <li className="border-b border-gray-200 py-3">
                        ✔ Reconciliation of ITC
                      </li>

                      <li className="border-b border-gray-200 py-3">
                        ✔ Monthly Filings
                      </li>

                      <li className="border-b border-gray-200 py-3">
                        ✔ GST Audit Assistance
                      </li>

                      <li className="border-b border-gray-200 py-3">
                        ✔ GST Notice Handling
                      </li>
                    </ul>
                  </div>
                </div>
              </AnimatedSection>
            </div>
          </section>

          {/* =====================================================
              TDS SECTION
          ====================================================== */}
          <section className="bg-gray-50 py-10 sm:py-12 md:py-16">
            <div className="mx-auto w-full max-w-[1300px] px-4 sm:px-6 lg:px-8">
              <AnimatedSection>
                <div className="grid grid-cols-1 items-center gap-8 md:grid-cols-2 md:gap-10 lg:gap-14">
                  {/* Content */}
                  <div className="mb-4 md:mb-0">
                    <h3 className="mb-4 text-2xl font-bold text-gray-900 sm:text-3xl">
                      TDS Return Filing
                    </h3>

                    <p className="text-base leading-7 text-gray-700 sm:text-lg">
                      Ensure your business remains compliant...
                    </p>

                    <h5 className="mb-3 mt-6 text-xl font-bold text-gray-900">
                      Our TDS Offerings:
                    </h5>

                    <ul className="flex flex-col text-gray-700">
                      <li className="border-b border-gray-200 py-3">
                        ✔ TDS Computation
                      </li>

                      <li className="border-b border-gray-200 py-3">
                        ✔ Quarterly e-Filing
                      </li>

                      <li className="border-b border-gray-200 py-3">
                        ✔ Form 16/16A Preparation
                      </li>

                      <li className="border-b border-gray-200 py-3">
                        ✔ PAN Verification
                      </li>

                      <li className="border-b border-gray-200 py-3">
                        ✔ Corrections & Defaults
                      </li>

                      <li className="border-b border-gray-200 py-3">
                        ✔ Compliance Support
                      </li>
                    </ul>
                  </div>

                  {/* Image */}
                  <div className="text-center">
                    <img
                      src={b5}
                      alt="TDS Filing"
                      className="mx-auto w-full max-w-md rounded-lg object-cover shadow-lg"
                      loading="lazy"
                    />
                  </div>
                </div>
              </AnimatedSection>
            </div>
          </section>

          {/* =====================================================
              PROCESS TIMELINE
          ====================================================== */}
          <section className="bg-white py-12 sm:py-16">
            <div className="mx-auto w-full max-w-[1300px] px-4 sm:px-6 lg:px-8">
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
              >
                <h3 className="mb-4 text-center text-2xl font-bold text-gray-900 sm:text-3xl">
                  Our Filing Process
                </h3>

                <p className="mx-auto mb-8 max-w-2xl text-center text-gray-600 sm:mb-10">
                  Our step-by-step filing process ensures transparency and
                  efficiency.
                </p>

                <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
                  {processSteps.map((step, index) => (
                    <motion.div
                      key={index}
                      className="flex h-full flex-col items-center justify-center rounded-lg border border-gray-200 bg-white p-5 text-center shadow-sm sm:p-6"
                      whileHover={{ scale: 1.03 }}
                      transition={{ duration: 0.3 }}
                    >
                      <FaCheckCircle
                        className="mb-4 text-green-500"
                        size={32}
                      />

                      <h6 className="text-base font-bold leading-6 text-gray-800 sm:text-lg">
                        {step}
                      </h6>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>
          </section>

          {/* =====================================================
              WHY CHOOSE US
          ====================================================== */}
          <section className="bg-gray-50 py-12 sm:py-16">
            <div className="mx-auto w-full max-w-[1300px] px-4 sm:px-6 lg:px-8">
              <AnimatedSection>
                <h3 className="mb-8 text-center text-2xl font-bold text-gray-900 sm:mb-10 sm:text-3xl">
                  Why Akshar Tax Consultancy?
                </h3>

                <div className="mx-auto grid max-w-4xl grid-cols-1 gap-6 text-left md:grid-cols-2">
                  <div>
                    <ul className="space-y-4 text-base text-gray-700 sm:text-lg">
                      <li>✅ Over 8 Years of Tax Expertise</li>
                      <li>✅ Personalized Guidance</li>
                      <li>✅ Transparent Fee Structure</li>
                      <li>✅ Timely Filing to Avoid Penalties</li>
                    </ul>
                  </div>

                  <div>
                    <ul className="space-y-4 text-base text-gray-700 sm:text-lg">
                      <li>✅ Support for Tax Notices</li>
                      <li>✅ Confidentiality Guaranteed</li>
                      <li>✅ Online + In-Person Help</li>
                      <li>✅ Trusted by SMEs & Professionals</li>
                    </ul>
                  </div>
                </div>
              </AnimatedSection>
            </div>
          </section>

          {/* =====================================================
              FLOATING WHATSAPP BUTTON
          ====================================================== */}
          <a
            href="https://wa.me/919067640237"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Chat with us on WhatsApp at +91 9067640237"
            title="WhatsApp: +91 9067640237"
            className="fixed bottom-5 right-4 z-[9999] flex h-12 w-12 items-center justify-center rounded-full bg-[#25D366] text-white shadow-xl transition-all duration-300 hover:scale-110 hover:shadow-2xl sm:bottom-6 sm:right-6 sm:h-14 sm:w-14"
          >
            <FaWhatsapp className="text-2xl sm:text-3xl" />
          </a>

          <Footer />
        </div>
      )}
    </>
  );
};

export default TaxReturn;