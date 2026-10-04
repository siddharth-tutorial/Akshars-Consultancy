import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  FaCheck,
  FaShieldAlt,
  FaBusinessTime,
  FaUserTie,
  FaWhatsapp,
  FaDownload,
} from "react-icons/fa";
import Header from "../../component/Header";
import Footer from "../../component/Footer";
import Loader from "../Loader";
import b3 from "../../assets/b-3.jpg";
import bgImage from "../../assets/bg1.webp";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

function Audit() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <div className="flex min-h-screen flex-col overflow-x-hidden">
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
             <div className="absolute inset-0 z-10 bg-[#0B2A4A]]/75"></div>

            {/* Right Side Overlay */}
            <div
              className="absolute right-0 top-0 z-20 hidden h-full w-2/5 bg-[#0A1F3A]]/50 md:block"
              style={{ clipPath: "polygon(0 0, 100% 0, 100% 100%, 20% 100%)" }}
            ></div>
            <div className="absolute bottom-0 left-0 z-20 h-1 w-24 bg-gold sm:w-32"></div>

            {/* Hero Content */}
             <div className="relative z-30 mx-auto w-full max-w-[1300px] px-4 sm:px-6 lg:px-8">
              <div className="flex flex-col items-center md:items-start">
                 <h1 className="text-center font-primary text-4xl font-bold leading-tight text-white sm:text-4xl md:text-5xl lg:text-6xl">
                  Audit, Assurance
                </h1>

                {/* Breadcrumb */}
                <nav
                  className="flex justify-center md:justify-start"
                  aria-label="Breadcrumb"
                >
                  <ol className="flex flex-wrap items-center justify-center text-sm text-white sm:text-base md:justify-start">
                    <li>
                      <a
                        href="/"
                        className="transition hover:underline"
                      >
                        Home
                      </a>
                    </li>

                    <li>
                      <span className="mx-2">&gt;</span>
                    </li>

                    <li>
                      <a
                        href="/service"
                        className="transition hover:underline"
                      >
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

                  {/* Download Brochure */}
                  <a
                    href="/Akshar_Tax_Consultancy_Brochure.pdf"
                    target="_blank"
                    rel="noreferrer"
                    download
                    className="mt-8 inline-flex w-full items-center justify-center rounded border border-[#0B2A4A] px-5 py-2.5 font-medium text-blue-[#0B2A4A] transition-colors duration-300 hover:bg-[#0B2A4A] hover:text-white sm:w-auto"
                  >
                    <FaDownload className="mr-2" />
                    Download Brochure
                  </a>
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

          <Footer />
        </div>
      )}
    </>
  );
}

export default Audit;