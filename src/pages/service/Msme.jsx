import React, { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { motion } from "framer-motion";
import Header from "../../component/Header";
import Footer from "../../component/Footer";
import b1 from "../../assets/b-1.jpeg";
import b5 from "../../assets/b-5.jpg";
import bgImage from "../../assets/bg1.webp";
import vector from "../../assets/popup.webp";
import Loader from "../Loader";
import { FaWhatsapp } from "react-icons/fa";
import { IoMdDownload } from "react-icons/io";
import { HiX } from "react-icons/hi";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

function Msme() {
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
      `New MSME Brochure Download Request from ${formData.get("name") || "Client"}`
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
        <div className="font-sans overflow-x-hidden">
          <Header />

          {/* =====================================================
              HERO / BANNER SECTION
          ====================================================== */}
          <section
            className="relative flex min-h-[300px] items-center overflow-hidden bg-cover bg-center py-16 sm:min-h-[340px] sm:py-20 md:min-h-[380px] md:py-24"
            style={{ backgroundImage: `url(${bgImage})` }}
          >
            {/* Dark Navy Background Overlay */}
            <div className="absolute inset-0 z-10 bg-[#0B2A4A]/75"></div>

            {/* Right Side Clip-Path Overlay */}
            <div
              className="absolute right-0 top-0 z-20 hidden h-full w-2/5 bg-[#0A1F3A]/50 md:block"
              style={{ clipPath: "polygon(0 0, 100% 0, 100% 100%, 20% 100%)" }}
            ></div>

            

            {/* Hero Content */}
            <div className="relative z-30 mx-auto w-full max-w-[1300px] px-4 sm:px-6 lg:px-8">
              <div className="flex flex-col items-center md:items-start">
                <h1 className="text-center font-primary text-4xl font-bold leading-tight text-white sm:text-4xl md:text-5xl lg:text-6xl">
                  Finance, MSME Subsidy
                </h1>

                {/* Custom Breadcrumb */}
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
                        Finance, MSME Subsidy
                      </span>
                    </li>
                  </ol>
                </nav>
              </div>
            </div>
          </section>

          {/* =====================================================
              MSME SUBSIDY ASSISTANCE
          ====================================================== */}
          <section className="py-16 bg-white">
            <div className="max-w-[1300px] mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
                <motion.div
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={fadeUp}
                >
                  <h4 className="font-bold text-2xl mb-4 text-[#0B2A4A]">
                    MSME Subsidy Assistance
                  </h4>
                  <p className="mb-4 text-gray-700 leading-relaxed">
                    Government subsidies for MSMEs are essential for reducing
                    costs, improving efficiency, and increasing
                    competitiveness. At Akshar Tax Consultancy, we simplify the
                    entire subsidy application process so you can focus on
                    growing your business.
                  </p>
                  <p className="mb-4 text-gray-700 leading-relaxed">
                    Whether you're a manufacturer upgrading equipment or a
                    service provider expanding operations, our team ensures
                    that you receive the maximum benefits available under
                    various Central and State subsidy schemes.
                  </p>

                  <ul className="mb-6 space-y-2 text-gray-700 pl-5 list-disc">
                    <li>
                      <strong>Capital Subsidy:</strong> Helps reduce
                      investment burden on new machinery and infrastructure.
                      Ideal for modernization or capacity expansion.
                    </li>
                    <li>
                      <strong>Interest Subsidy:</strong> Enables you to avail
                      loans at lower interest rates by reimbursing a portion
                      of the interest paid.
                    </li>
                    <li>
                      <strong>Net GST Subsidy:</strong> Refunds on the GST
                      paid on purchases help maintain healthy cash flow for
                      daily operations.
                    </li>
                  </ul>

                  <p className="mb-4 text-gray-700 leading-relaxed">
                    <strong>We assist with:</strong> Eligibility assessment,
                    documentation, application filing, follow-ups with
                    departments, and receiving disbursement on time.
                  </p>

                  <p className="mb-6 text-gray-700 leading-relaxed">
                    Don't miss out on the financial benefits that are
                    rightfully yours. Our consultants guide you step-by-step
                    so your business doesn’t lose out due to technical errors
                    or delays.
                  </p>

                  <div className="flex flex-wrap items-center gap-4">
                    <a
                      href="/contact"
                      className="inline-block bg-[#0B2A4A] hover:bg-[#0A1F3A] text-white font-medium py-3 px-6 rounded-lg shadow transition-colors"
                    >
                      Apply for Subsidy
                    </a>
                    <button
                      type="button"
                      onClick={openModal}
                      className="flex items-center justify-center gap-2 rounded-lg bg-[#F5B800] px-6 py-3 font-bold text-black transition-all hover:opacity-90"
                    >
                      <IoMdDownload size={20} />
                      Download Brochure
                    </button>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: true }}
                >
                  <img
                    src={b1}
                    alt="MSME Subsidy"
                    className="w-full max-h-[600px] object-cover rounded-xl shadow-lg"
                  />
                </motion.div>
              </div>
            </div>
          </section>

          {/* =====================================================
              MSME FINANCE ASSISTANCE
          ====================================================== */}
          <section className="py-16 bg-gray-50">
            <div className="max-w-[1300px] mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
                {/* Image */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: true }}
                  className="order-2 md:order-1"
                >
                  <img
                    src={b5}
                    alt="MSME Finance"
                    className="w-full max-h-[600px] object-cover rounded-xl shadow-lg"
                  />
                </motion.div>

                {/* Content */}
                <motion.div
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={fadeUp}
                  className="order-1 md:order-2"
                >
                  <h4 className="font-bold text-2xl mb-4 text-[#0B2A4A]">
                    MSME Finance Assistance
                  </h4>
                  <p className="mb-4 text-gray-700 leading-relaxed">
                    Every MSME requires funding at some stage — whether for
                    starting operations, purchasing machinery, hiring
                    manpower, or handling seasonal demand. Akshar Tax Consultancy
                    provides end-to-end guidance for getting the right
                    financial support.
                  </p>
                  <p className="mb-4 text-gray-700 leading-relaxed">
                    Our consultants work with you to prepare loan proposals,
                    ensure documentation accuracy, and liaise with banks or
                    NBFCs to secure financing quickly and efficiently.
                  </p>

                  <ul className="mb-6 space-y-2 text-gray-700 pl-5 list-disc">
                    <li>
                      <strong>Working Capital Loans:</strong> Smoothen daily
                      operations like raw material purchase, salaries, rent,
                      etc., with short-term funding.
                    </li>
                    <li>
                      <strong>Term Loans:</strong> Suitable for asset
                      purchase, equipment upgrade, business expansion, or real
                      estate acquisition.
                    </li>
                    <li>
                      <strong>Collateral-Free Loans:</strong> Avail loans
                      under CGTMSE and other schemes without providing
                      property/security.
                    </li>
                  </ul>

                  <p className="mb-4 text-gray-700 leading-relaxed">
                    <strong>Our finance support includes:</strong> bank
                    coordination, business projections, financial ratios
                    analysis, credit score review, and post-sanction
                    compliance support.
                  </p>

                  <p className="mb-6 text-gray-700 leading-relaxed">
                    With Akshar Tax Consultancy, you gain a long-term partner who
                    supports not just loan approval, but also renewal,
                    top-ups, and restructuring when needed.
                  </p>

                  <a
                    href="/contact"
                    className="inline-block bg-[#0B2A4A] hover:bg-[#0A1F3A] text-white font-medium py-3 px-6 rounded-lg shadow transition-colors"
                  >
                    Apply for Finance
                  </a>
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

export default Msme;