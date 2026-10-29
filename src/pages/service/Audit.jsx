import React, { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { motion } from "framer-motion";
import {
  FaCheck,
  FaShieldAlt,
  FaBusinessTime,
  FaUserTie,
  FaWhatsapp,
} from "react-icons/fa";
import { IoMdDownload } from "react-icons/io";
import { HiX } from "react-icons/hi";
import Header from "../../component/Header";
import Footer from "../../component/Footer";
import Loader from "../Loader";
import b3 from "../../assets/b-3.jpg";
import bgImage from "../../assets/bg1.webp";
import vector from "../../assets/popup.webp"; 

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

function Audit() {
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

    // Web3Forms Access Key
    formData.append("access_key", "e25a4771-1394-4f98-96e0-badcdd4f8e79");
    formData.append("from_name", "Akshar Tax Consultancy Website");
    formData.append(
      "subject",
      `New Audit Brochure Download Request from ${formData.get("name") || "Client"}`
    );

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

     
      if (data.success) {
        setStatusMessage({
          type: "success",
          text: "Thank you! Your inquiry has been sent & brochure is opening...",
        });

        
        window.open(
          "/Akshar_Tax_Consultancy_Brochure.pdf",
          "_blank",
          "noopener,noreferrer"
        );

        
        setTimeout(() => {
          closeModal();
          formElement.reset();
        }, 3000);
      } else {
        
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

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <div className="flex min-h-screen flex-col overflow-x-hidden font-sans">
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
            {/* Background Overlay */}
            <div className="absolute inset-0 z-10 bg-[#0B2A4A]/75"></div>

            {/* Right Side Overlay */}
            <div
              className="absolute right-0 top-0 z-20 hidden h-full w-2/5 bg-[#0A1F3A]/50 md:block"
              style={{ clipPath: "polygon(0 0, 100% 0, 100% 100%, 20% 100%)" }}
            ></div>
            

            {/* Hero Content */}
            <div className="relative z-30 mx-auto w-full max-w-[1300px] px-4 sm:px-6 lg:px-8">
              <div className="flex flex-col items-center md:items-start">
                <h1 className="text-center font-primary text-4xl font-bold leading-tight text-white sm:text-4xl md:text-5xl lg:text-6xl">
                  Audit, Assurance
                </h1>

                {/* Breadcrumb */}
                <nav
                  className="mt-3 flex justify-center md:justify-start"
                  aria-label="Breadcrumb"
                >
                  <ol className="flex flex-wrap items-center justify-center text-sm text-white sm:text-base md:justify-start">
                    <li>
                      <a href="/" className="transition hover:underline">
                        Home
                      </a>
                    </li>
                    <li>
                      <span className="mx-2">&gt;</span>
                    </li>
                    <li>
                      <a href="/service" className="transition hover:underline">
                        Service
                      </a>
                    </li>
                    <li>
                      <span className="mx-2">&gt;</span>
                    </li>
                    <li className="font-semibold text-[#F5B800]">
                      Audit, Assurance
                    </li>
                  </ol>
                </nav>
              </div>
            </div>
          </section>

          {/* =====================================================
              SERVICES SECTION
          ====================================================== */}
          <section className="bg-gray-50 py-10 sm:py-12 md:py-16">
            <div className="mx-auto w-full max-w-[1300px] px-4 sm:px-6 lg:px-8">
              <div className="grid grid-cols-1 items-center gap-8 md:grid-cols-2 md:gap-10 lg:gap-14">
                {/* Content */}
                <motion.div
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  variants={fadeUp}
                >
                  <h2 className="mb-4 text-2xl font-bold text-[#0B2A4A] sm:text-3xl">
                    What We Offer
                  </h2>

                  <p className="mb-4 text-base leading-7 text-gray-700 sm:text-lg">
                    As a trusted tax consultant, Akshar Tax Consultancy delivers
                    strategic audit and compliance support tailored to
                    businesses and professionals. We ensure your tax,
                    licensing, and financial records meet current regulatory
                    expectations.
                  </p>

                  <ul className="space-y-3">
                    {[
                      "Tax Compliance Audits",
                      "GST & Return Accuracy Checks",
                      "TDS / TCS Filing Reviews",
                      "Financial Control Evaluations",
                      "Regulatory & Document Compliance",
                    ].map((item, i) => (
                      <li
                        key={i}
                        className="flex items-start text-gray-700"
                      >
                        <FaCheck className="mr-3 mt-1 shrink-0 text-green-500" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>

                {/* Image */}
                <motion.div
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8 }}
                  viewport={{ once: true }}
                  className="text-center"
                >
                  <img
                    src={b3}
                    alt="Tax Audit Services"
                    className="mx-auto h-auto w-full max-w-xl rounded-xl object-cover shadow-lg"
                  />
                </motion.div>
              </div>
            </div>
          </section>

          {/* =====================================================
              AUDIT PROCESS TIMELINE
          ====================================================== */}
          <section className="bg-white py-10 sm:py-12 md:py-16">
            <div className="mx-auto w-full max-w-[1300px] px-4 sm:px-6 lg:px-8">
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                variants={fadeUp}
              >
                <h2 className="mb-8 text-center text-2xl font-bold text-[#0B2A4A] sm:mb-10 sm:text-3xl">
                  Our Audit Process
                </h2>
              </motion.div>

              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
                {[
                  {
                    step: "01",
                    title: "Initial Consultation",
                    desc: "Understand your business and audit goals.",
                  },
                  {
                    step: "02",
                    title: "Document Review",
                    desc: "Collect and verify required records and returns.",
                  },
                  {
                    step: "03",
                    title: "Compliance Check",
                    desc: "Evaluate GST, TDS, and income tax status.",
                  },
                  {
                    step: "04",
                    title: "Report & Insights",
                    desc: "Deliver an audit report with key observations.",
                  },
                  {
                    step: "05",
                    title: "Recommendations",
                    desc: "Suggest corrective actions and ongoing support.",
                  },
                ].map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.1 }}
                    viewport={{ once: true }}
                    className="h-full"
                  >
                    <div className="flex h-full flex-col rounded-lg border border-gray-100 bg-white p-5 shadow-sm transition-shadow duration-300 hover:shadow-md sm:p-6">
                      <h4 className="mb-2 text-2xl font-bold text-[#F5B800]">
                        {item.step}
                      </h4>

                      <h5 className="mb-2 text-lg font-semibold text-[#0A1F3A]">
                        {item.title}
                      </h5>

                      <p className="mb-0 leading-6 text-gray-500">
                        {item.desc}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          {/* =====================================================
              WHY CHOOSE US
          ====================================================== */}
          <section className="bg-gray-50 py-10 sm:py-12 md:py-16">
            <div className="mx-auto w-full max-w-[1300px] px-4 sm:px-6 lg:px-8">
              <div className="grid grid-cols-1 items-center gap-8 md:grid-cols-2 md:gap-10 lg:gap-14">
                {/* Content */}
                <motion.div
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  variants={fadeUp}
                >
                  <h2 className="mb-6 text-2xl font-bold text-[#0B2A4A] sm:text-3xl">
                    Why Clients Choose Us
                  </h2>

                  <ul className="space-y-4 text-gray-700">
                    <li className="flex items-start">
                      <FaShieldAlt className="mr-4 mt-1 shrink-0 text-xl text-yellow-500" />
                      <span className="leading-7">
                        <strong className="text-gray-900">
                          Confidential & Ethical:
                        </strong>{" "}
                        Data security and professionalism guaranteed.
                      </span>
                    </li>

                    <li className="flex items-start">
                      <FaBusinessTime className="mr-4 mt-1 shrink-0 text-xl text-red-500" />
                      <span className="leading-7">
                        <strong className="text-gray-900">
                          SME Focused:
                        </strong>{" "}
                        We simplify audit language and guide you practically.
                      </span>
                    </li>

                    <li className="flex items-start">
                      <FaUserTie className="mr-4 mt-1 shrink-0 text-xl text-green-500" />
                      <span className="leading-7">
                        <strong className="text-gray-900">
                          Experience You Can Trust:
                        </strong>{" "}
                        Decades of handling tax compliance and audits.
                      </span>
                    </li>
                  </ul>

                  {/* DOWNLOAD BROCHURE BUTTON */}
                  <button
                    type="button"
                    onClick={openModal}
                    className="mt-8 flex w-full items-center justify-center gap-2 rounded-lg bg-[#F5B800] px-6 py-3 font-bold text-black transition-all hover:opacity-90 sm:w-auto"
                  >
                    <IoMdDownload size={20} />
                    Download Brochure
                  </button>
                </motion.div>

                {/* Image */}
                <motion.div
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8 }}
                  viewport={{ once: true }}
                  className="text-center"
                >
                  <img
                    src="https://images.unsplash.com/photo-1603791440384-56cd371ee9a7?auto=format&fit=crop&w=800&q=60"
                    alt="Why Choose Us"
                    className="mx-auto h-auto w-full max-w-xl rounded-xl object-cover shadow-lg"
                  />
                </motion.div>
              </div>
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

                      {/* STATUS MESSAGE */}
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
}

export default Audit;