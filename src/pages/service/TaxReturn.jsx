import React, { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { motion, useInView } from "framer-motion";
import Header from "../../component/Header";
import Footer from "../../component/Footer";
import b4 from "../../assets/b-4.jpg";
import b5 from "../../assets/1b.png";
import b6 from "../../assets/2b.png";
import bgImage from "../../assets/bg1.webp";
import vector from "../../assets/popup.webp";
import Loader from "../Loader";
import { FaWhatsapp, FaCheckCircle } from "react-icons/fa";
import { IoMdDownload } from "react-icons/io";
import { HiX } from "react-icons/hi";

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

  // Modal & Form States
  const [showModal, setShowModal] = useState(false);
  const [animateIn, setAnimateIn] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [statusMessage, setStatusMessage] = useState({ type: "", text: "" });

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  // Modal Open Handler
  const openModal = () => {
    setShowModal(true);
    setStatusMessage({ type: "", text: "" });
    setTimeout(() => {
      setAnimateIn(true);
    }, 20);
  };

  // Modal Close Handler
  const closeModal = () => {
    setAnimateIn(false);
    setTimeout(() => {
      setShowModal(false);
      setStatusMessage({ type: "", text: "" });
    }, 300);
  };

  // Form Submit Handler with Web3Forms & PDF Open
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatusMessage({ type: "", text: "" });

    const formElement = e.target;
    const formData = new FormData(formElement);

    // તમારા Contact પેજવાળી જ Web3Forms access key
    formData.append("access_key", "e25a4771-1394-4f98-96e0-badcdd4f8e79");
    formData.append("from_name", "Akshar Tax Consultancy Website");
    formData.append(
      "subject",
      `New Brochure Download Request from ${formData.get("name") || "Client"}`
    );

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      // મેઇલ જાય તો જ Success અને PDF ઓપન થશે
      if (data.success) {
        setStatusMessage({
          type: "success",
          text: "Thank you! Your inquiry has been sent & brochure is opening...",
        });

        // PDF ને નવા ટેબમાં ઓપન કરો
        window.open(
          "/Akshar_Tax_Consultancy_Brochure.pdf",
          "_blank",
          "noopener,noreferrer"
        );

        // 2 સેકન્ડ પછી Modal બંધ કરી ફોર્મ reset કરો
        setTimeout(() => {
          closeModal();
          formElement.reset();
        }, 2000);
      } else {
        // મેઇલ ન જાય તો લાલ Error મેસેજ આવશે
        setStatusMessage({
          type: "error",
          text: data.message || "Failed to send inquiry. Please try again.",
        });
      }
    } catch (error) {
      console.error("Brochure inquiry form submission error:", error);
      setStatusMessage({
        type: "error",
        text: "Network error: Unable to send inquiry. Please try again later.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

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
        <div className="overflow-x-hidden font-sans">
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
            <div className="absolute inset-0 z-10 bg-[#0B2A4A]/75"></div>

            {/* Right Overlay */}
            <div
              className="absolute right-0 top-0 z-20 hidden h-full w-2/5 bg-[#0A1F3A]/50 md:block"
              style={{ clipPath: "polygon(0 0, 100% 0, 100% 100%, 20% 100%)" }}
            ></div>
            

            {/* Hero Content */}
            <div className="relative z-30 mx-auto w-full max-w-[1300px] px-4 sm:px-6 lg:px-8">
              <div className="flex flex-col items-center md:items-start">
                <h1 className="text-center font-primary text-4xl font-bold leading-tight text-white sm:text-4xl md:text-5xl lg:text-6xl">
                  Tax Return Services
                </h1>

                {/* Breadcrumb */}
                <nav
                  className="mt-3 flex justify-center md:justify-start"
                  aria-label="Breadcrumb"
                >
                  <ol className="flex flex-wrap items-center justify-center gap-y-1 text-sm text-white sm:text-base md:justify-start">
                    <li className="inline-flex items-center">
                      <a href="/" className="text-white transition hover:underline">
                        Home
                      </a>
                    </li>
                    <li className="flex items-center">
                      <span className="mx-2 text-white">&gt;</span>
                      <a href="/service" className="text-white transition hover:underline">
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
                      At Akshar Tax Consultancy, we understand that every taxpayer has unique financial needs. Our expert tax consultancy services include income tax filing, GST returns, tax planning, and accounting solutions tailored to individuals and businesses.
                    </p>

                    <h5 className="mb-3 mt-6 text-xl font-bold text-gray-900">
                      Our Offerings:
                    </h5>

                    <ul className="flex flex-col text-gray-700">
                      <li className="border-b border-gray-200 py-3">
                        ✔ ITR Filing for Salaried Individuals
                      </li>
                      <li className="border-b border-gray-200 py-3">
                        ✔ Capital Gains Computation & Filing
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

                    {/* DOWNLOAD BROCHURE BUTTON */}
                    <button
                      type="button"
                      onClick={openModal}
                      className="mt-6 flex w-full items-center justify-center gap-2 rounded-lg bg-[#F5B800] px-6 py-3 font-bold text-black transition-all hover:opacity-90 sm:w-auto"
                    >
                      <IoMdDownload size={20} />
                      Download Brochure
                    </button>
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

          {/* =====================================================
              TAILWIND ANIMATED MODAL PORTAL
          ====================================================== */}
          {showModal &&
            createPortal(
              <div
                className={`fixed inset-0 z-[99999] flex items-center justify-center overflow-y-auto bg-black/60 p-2 backdrop-blur-sm transition-opacity duration-300 ease-out sm:p-4 ${
                  animateIn ? "opacity-100" : "opacity-0"
                }`}
                onMouseDown={(event) => {
                  if (event.target === event.currentTarget) closeModal();
                }}
              >
                {/* MODAL CONTAINER */}
                <div
                  role="dialog"
                  aria-modal="true"
                  aria-labelledby="brochure-modal-title"
                  className={`relative my-auto flex max-h-[94dvh] w-full max-w-5xl flex-col overflow-y-auto rounded-xl bg-white shadow-2xl transition-all duration-300 ease-out md:max-h-[90dvh] md:flex-row md:overflow-hidden ${
                    animateIn
                      ? "scale-100 translate-y-0 opacity-100"
                      : "scale-95 -translate-y-4 opacity-0"
                  }`}
                >
                  {/* CLOSE BUTTON */}
                  <button
                    type="button"
                    onClick={closeModal}
                    aria-label="Close inquiry form"
                    className="absolute right-2 top-2 z-30 flex h-9 w-9 items-center justify-center rounded-full bg-white text-gray-700 shadow-md transition hover:bg-gray-100 sm:right-3 sm:top-3 sm:h-10 sm:w-10"
                  >
                    <HiX size={23} />
                  </button>

                  {/* IMAGE SECTION */}
                  <div className="flex w-full shrink-0 items-center justify-center bg-[#002D3A] px-6 py-5 sm:px-10 md:w-[36%] md:py-8">
                    <img
                      src={vector}
                      alt="Contact Akshar Tax Consultancy"
                      className="h-auto max-h-[150px] w-auto max-w-[180px] object-contain sm:max-h-[190px] sm:max-w-[220px] md:max-h-[65vh] md:max-w-full"
                    />
                  </div>

                  {/* FORM SECTION */}
                  <div className="w-full min-w-0 bg-[#FAFAFA] px-4 py-7 sm:px-7 sm:py-9 md:w-[64%] md:overflow-y-auto md:px-9 md:py-8">
                    <h2
                      id="brochure-modal-title"
                      className="mb-5 pr-7 text-xl font-bold leading-snug text-[#0B2A4A] sm:mb-6 sm:text-2xl md:text-3xl"
                    >
                      Inquiry Now. Our Team Will Contact You Shortly!
                    </h2>

                    <form className="space-y-3 sm:space-y-4" onSubmit={handleSubmit}>
                      {/* INPUT FIELDS */}
                      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-4">
                        <input
                          type="text"
                          name="name"
                          placeholder="Your Name *"
                          aria-label="Your Name"
                          autoComplete="name"
                          required
                          className="box-border w-full min-w-0 rounded-sm border border-gray-200 bg-white px-3 py-3 text-base text-gray-700 shadow-sm outline-none transition focus:border-[#0B2A4A] focus:ring-1 focus:ring-[#0B2A4A] sm:px-4 sm:py-3.5"
                        />

                        <input
                          type="email"
                          name="email"
                          placeholder="Email Address *"
                          aria-label="Email Address"
                          autoComplete="email"
                          required
                          className="box-border w-full min-w-0 rounded-sm border border-gray-200 bg-white px-3 py-3 text-base text-gray-700 shadow-sm outline-none transition focus:border-[#0B2A4A] focus:ring-1 focus:ring-[#0B2A4A] sm:px-4 sm:py-3.5"
                        />

                        <input
                          type="tel"
                          name="phone"
                          placeholder="Contact Details *"
                          aria-label="Contact Details"
                          autoComplete="tel"
                          inputMode="numeric"
                            maxLength={10}
                            pattern="[0-9]{10}"
                          onInput={(e) => {
                          e.target.value = e.target.value.replace(/[^0-9]/g, "");
                          }}
                          required
                          className="box-border w-full min-w-0 rounded-sm border border-gray-200 bg-white px-3 py-3 text-base text-gray-700 shadow-sm outline-none transition focus:border-[#0B2A4A] focus:ring-1 focus:ring-[#0B2A4A] sm:px-4 sm:py-3.5"
                        />

                        <input
                          type="text"
                          name="subject"
                          placeholder="Your Subject *"
                          aria-label="Your Subject"
                          required
                          className="box-border w-full min-w-0 rounded-sm border border-gray-200 bg-white px-3 py-3 text-base text-gray-700 shadow-sm outline-none transition focus:border-[#0B2A4A] focus:ring-1 focus:ring-[#0B2A4A] sm:px-4 sm:py-3.5"
                        />
                      </div>

                      {/* MESSAGE TEXTAREA */}
                      <textarea
                        name="message"
                        placeholder="Message *"
                        aria-label="Message"
                        rows={3}
                        required
                        className="box-border block w-full min-w-0 resize-y rounded-sm border border-gray-200 bg-white px-3 py-3 text-base text-gray-700 shadow-sm outline-none transition focus:border-[#0B2A4A] focus:ring-1 focus:ring-[#0B2A4A] sm:px-4"
                      />

                      {/* STATUS MESSAGE (SUCCESS OR ERROR) */}
                      {statusMessage?.text && (
                        <div
                          className={`flex items-center gap-2 rounded-md p-3 text-sm font-medium transition-all duration-300 ${
                            statusMessage.type === "success"
                              ? "border border-green-200 bg-green-50 text-green-800"
                              : "border border-red-200 bg-red-50 text-red-800"
                          }`}
                        >
                          <span className="text-base font-bold">
                            {statusMessage.type === "success" ? "✓" : "⚠"}
                          </span>
                          <span>{statusMessage.text}</span>
                        </div>
                      )}

                      {/* SUBMIT BUTTON */}
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full rounded-md bg-[#0B2A4A] px-5 py-3 font-bold text-white transition-all duration-200 hover:bg-[#0A1F3A] disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto sm:px-7 sm:py-3.5"
                      >
                        {isSubmitting ? "SENDING..." : "DOWNLOAD & SEND INQUIRY"}
                      </button>
                    </form>
                  </div>
                </div>
              </div>,
              document.body
            )}

          <Footer />
        </div>
      )}
    </>
  );
};

export default TaxReturn;