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
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
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
    const isInView = useInView(ref, { once: true, margin: "-50px" });

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
        <div className="font-sans">
          <Header />

          {/* Hero Section */}
          <div
            className="relative bg-cover bg-center text-white py-24 overflow-hidden"
            style={{ backgroundImage: `url(${bgImage})` }}
          >
            {/* overlay-before */}
            <div className="absolute inset-0 bg-black/40 z-10"></div>
            {/* overlay-after */}
            <div
              className="absolute top-0 right-0 w-2/5 h-full bg-black/20 z-20 hidden md:block"
              style={{ clipPath: "polygon(0 0, 100% 0, 100% 100%, 20% 100%)" }}
            ></div>

            <div className="container mx-auto px-4 relative z-30">
              <div className="flex flex-col">
                <h1 className="font-bold text-4xl md:text-5xl mb-4 text-center md:text-left">
                  Tax Return Services
                </h1>
                
                {/* Custom Breadcrumb */}
                <nav className="flex justify-center md:justify-start" aria-label="Breadcrumb">
                  <ol className="inline-flex items-center space-x-2 text-white">
                    <li className="inline-flex items-center">
                      <a href="/" className="hover:underline text-white transition">
                        Home
                      </a>
                    </li>
                    <li className="flex items-center">
                      <span className="mx-2 text-white">&gt;</span>
                      <a href="/service" className="hover:underline text-white transition">
                        Service
                      </a>
                    </li>
                    <li className="flex items-center">
                      <span className="mx-2 text-white">&gt;</span>
                      <span className="text-[#e45c3c] font-bold">Tax Return Services</span>
                    </li>
                  </ol>
                </nav>
              </div>
            </div>
          </div>

          {/* Income Tax Filing Services */}
          <section className="py-12 bg-gray-50">
            <div className="container mx-auto px-4">
              <AnimatedSection>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                  <div className="mb-6 md:mb-0">
                    <h3 className="font-bold text-2xl md:text-3xl mb-4 text-gray-900">
                      Income Tax Filing Services
                    </h3>
                    <p className="text-gray-700">
                      At Akshar Consultancy, we understand that every taxpayer
                      is unique...
                    </p>
                    <h5 className="font-bold text-xl mt-6 mb-3 text-gray-900">
                      Our Offerings:
                    </h5>
                    <ul className="flex flex-col text-gray-700">
                      <li className="py-3 border-b border-gray-200">
                        ✔ ITR Filing for Salaried...
                      </li>
                      <li className="py-3 border-b border-gray-200">
                        ✔ Capital Gains...
                      </li>
                      <li className="py-3 border-b border-gray-200">
                        ✔ Income from Multiple Sources
                      </li>
                      <li className="py-3 border-b border-gray-200">
                        ✔ Tax Deduction Planning
                      </li>
                      <li className="py-3 border-b border-gray-200">
                        ✔ Late Filing or Revised Returns
                      </li>
                      <li className="py-3 border-b border-gray-200">
                        ✔ Tax Notice Handling
                      </li>
                    </ul>
                    <a
                      href="/Akshar_Consultancy.pdf"
                      target="_blank"
                      rel="noopener noreferrer"
                      download
                      className="inline-flex items-center justify-center mt-6 px-6 py-2.5 border-2 border-blue-600 text-blue-600 font-medium rounded hover:bg-blue-600 hover:text-white transition-colors"
                    >
                      <FaDownload className="mr-2" /> Download Brochure
                    </a>
                  </div>
                  <div className="text-center">
                    <img
                      src={b4}
                      alt="Tax Services"
                      className="w-full max-w-md mx-auto rounded shadow-lg object-cover"
                      loading="lazy"
                    />
                  </div>
                </div>
              </AnimatedSection>
            </div>
          </section>

          {/* GST Section */}
          <section className="py-12 bg-white">
            <div className="container mx-auto px-4">
              <AnimatedSection>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                  <div className="text-center order-2 md:order-1 mb-6 md:mb-0">
                    <img
                      src={b6}
                      alt="GST Filing"
                      className="w-full max-w-md mx-auto rounded shadow-lg object-cover"
                      loading="lazy"
                    />
                  </div>
                  <div className="order-1 md:order-2">
                    <h3 className="font-bold text-2xl md:text-3xl mb-4 text-gray-900">
                      GST Filing & Compliance
                    </h3>
                    <p className="text-gray-700">
                      GST filing can be complex and time-sensitive...
                    </p>
                    <h5 className="font-bold text-xl mt-6 mb-3 text-gray-900">
                      Our GST Solutions:
                    </h5>
                    <ul className="flex flex-col text-gray-700">
                      <li className="py-3 border-b border-gray-200">
                        ✔ GST Registration
                      </li>
                      <li className="py-3 border-b border-gray-200">
                        ✔ GSTR-1, GSTR-3B
                      </li>
                      <li className="py-3 border-b border-gray-200">
                        ✔ Reconciliation of ITC
                      </li>
                      <li className="py-3 border-b border-gray-200">
                        ✔ Monthly Filings
                      </li>
                      <li className="py-3 border-b border-gray-200">
                        ✔ GST Audit Assistance
                      </li>
                      <li className="py-3 border-b border-gray-200">
                        ✔ GST Notice Handling
                      </li>
                    </ul>
                  </div>
                </div>
              </AnimatedSection>
            </div>
          </section>

          {/* TDS Section */}
          <section className="py-12 bg-gray-50">
            <div className="container mx-auto px-4">
              <AnimatedSection>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                  <div className="mb-6 md:mb-0">
                    <h3 className="font-bold text-2xl md:text-3xl mb-4 text-gray-900">
                      TDS Return Filing
                    </h3>
                    <p className="text-gray-700">
                      Ensure your business remains compliant...
                    </p>
                    <h5 className="font-bold text-xl mt-6 mb-3 text-gray-900">
                      Our TDS Offerings:
                    </h5>
                    <ul className="flex flex-col text-gray-700">
                      <li className="py-3 border-b border-gray-200">
                        ✔ TDS Computation
                      </li>
                      <li className="py-3 border-b border-gray-200">
                        ✔ Quarterly e-Filing
                      </li>
                      <li className="py-3 border-b border-gray-200">
                        ✔ Form 16/16A Preparation
                      </li>
                      <li className="py-3 border-b border-gray-200">
                        ✔ PAN Verification
                      </li>
                      <li className="py-3 border-b border-gray-200">
                        ✔ Corrections & Defaults
                      </li>
                      <li className="py-3 border-b border-gray-200">
                        ✔ Compliance Support
                      </li>
                    </ul>
                  </div>
                  <div className="text-center">
                    <img
                      src={b5}
                      alt="TDS Filing"
                      className="w-full max-w-md mx-auto rounded shadow-lg object-cover"
                      loading="lazy"
                    />
                  </div>
                </div>
              </AnimatedSection>
            </div>
          </section>

          {/* Process Timeline */}
          <section className="py-16 bg-white">
            <div className="container mx-auto px-4">
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
              >
                <h3 className="text-center font-bold text-3xl mb-4 text-gray-900">
                  Our Filing Process
                </h3>
                <p className="text-center mb-10 text-gray-600 max-w-2xl mx-auto">
                  Our step-by-step filing process ensures transparency and
                  efficiency.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                  {processSteps.map((step, index) => (
                    <motion.div
                      key={index}
                      className="p-6 text-center border border-gray-200 rounded-lg shadow-sm bg-white h-full flex flex-col items-center justify-center"
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.3 }}
                    >
                      <FaCheckCircle
                        className="text-green-500 mb-4"
                        size={32}
                      />
                      <h6 className="font-bold text-gray-800 text-lg">{step}</h6>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>
          </section>

          {/* Why Choose Us */}
          <section className="py-16 bg-gray-50">
            <div className="container mx-auto px-4">
              <AnimatedSection>
                <h3 className="text-center font-bold text-3xl mb-10 text-gray-900">
                  Why Akshar Consultancy?
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto text-left">
                  <div>
                    <ul className="space-y-4 text-gray-700 text-lg">
                      <li>✅ Over 8 Years of Tax Expertise</li>
                      <li>✅ Personalized Guidance</li>
                      <li>✅ Transparent Fee Structure</li>
                      <li>✅ Timely Filing to Avoid Penalties</li>
                    </ul>
                  </div>
                  <div>
                    <ul className="space-y-4 text-gray-700 text-lg">
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

          {/* WhatsApp Floating */}
          <a
            href="https://wa.me/919067640237"
            className="fixed bottom-5 left-5 bg-[#25D366] text-white p-3 rounded-full z-[9999] shadow-[0_4px_10px_rgba(0,0,0,0.2)] hover:scale-110 transition-transform duration-200"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaWhatsapp size={24} />
          </a>

          <Footer />
        </div>
      )}
    </>
  );
};

export default TaxReturn;