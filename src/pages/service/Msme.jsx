
import React, { useEffect, useState } from "react";
import Header from "../../component/Header";
import Footer from "../../component/Footer";
import { motion } from "framer-motion";
import b1 from "../../assets/b-1.jpeg";
import b5 from "../../assets/b-5.jpg";
import bgImage from "../../assets/bg1.webp";
import Loader from "../Loader";
import { FaWhatsapp } from "react-icons/fa";

function Msme() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // simulate async loading (API call / assets load etc.)
    const timer = setTimeout(() => {
      setLoading(false); // loader close
    }, 2000); // 2 sec demo

    return () => clearTimeout(timer);
  }, []);

  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <div className="font-sans overflow-x-hidden">
          <Header />

          {/* Hero Section */}
          <div
            className="relative flex min-h-[300px] items-center overflow-hidden bg-cover bg-center py-16 sm:min-h-[340px] sm:py-20 md:min-h-[380px] md:py-24"
            style={{ backgroundImage: `url(${bgImage})` }}
          >
            {/* overlay-before */}
            <div className="absolute inset-0 z-10 bg-[#0B2A4A]]/75"></div>
            {/* overlay-after */}
            <div
              className="absolute right-0 top-0 z-20 hidden h-full w-2/5 bg-[#0A1F3A]]/50 md:block"
              style={{ clipPath: "polygon(0 0, 100% 0, 100% 100%, 20% 100%)" }}
            ></div>
 <div className="absolute bottom-0 left-0 z-20 h-1 w-24 bg-gold sm:w-32"></div>
            <div className="relative z-30 mx-auto w-full max-w-[1300px] px-4 sm:px-6 lg:px-8">
              <div className="flex flex-col items-center md:items-start">
                <h1 className="text-center font-primary text-4xl font-bold leading-tight text-white sm:text-4xl md:text-5xl lg:text-6xl">
                  Finance, MSME Subsidy
                </h1>
                
                {/* Custom Breadcrumb */}
                <nav className="flex justify-center md:justify-start" aria-label="Breadcrumb">
                  <ol className="inline-flex items-center space-x-2 text-sm sm:text-base text-white">
                    <li className="inline-flex items-center">
                      <a href="/" className="hover:underline text-white transition">
                        Home
                      </a>
                    </li>
                    <li className="flex items-center">
                      <span className="mx-2 text-white">&gt;</span>
                      <a href="/service" className="text-white transition">
                        Service
                      </a>
                    </li>
                    <li className="flex items-center">
                      <span className="mx-2 text-white">&gt;</span>
                      <span className="font-semibold text-[#F5B800]">Finance, MSME Subsidy</span>
                    </li>
                  </ol>
                </nav>
              </div>
            </div>
          </div>

          {/* MSME Subsidy Assistance */}
          <section className="py-16 bg-white">
            <div className="max-w-[1300px] mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
                <motion.div
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={fadeUp}
                >
                  <h4 className="font-bold text-2xl mb-4 text-blue-600">
                    MSME Subsidy Assistance
                  </h4>
                  <p className="mb-4 text-gray-700">
                    Government subsidies for MSMEs are essential for reducing
                    costs, improving efficiency, and increasing
                    competitiveness. At Akshar Consultancy, we simplify the
                    entire subsidy application process so you can focus on
                    growing your business.
                  </p>
                  <p className="mb-4 text-gray-700">
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

                  <p className="mb-4 text-gray-700">
                    <strong>We assist with:</strong> Eligibility assessment,
                    documentation, application filing, follow-ups with
                    departments, and receiving disbursement on time.
                  </p>

                  <p className="mb-6 text-gray-700">
                    Don't miss out on the financial benefits that are
                    rightfully yours. Our consultants guide you step-by-step
                    so your business doesn’t lose out due to technical errors
                    or delays.
                  </p>

                  <a 
                    href="/contact"
                    className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-medium py-2.5 px-6 rounded shadow transition-colors"
                  >
                    Apply for Subsidy
                  </a>
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
                    className="w-full max-h-[600px] object-cover rounded shadow-lg"
                  />
                </motion.div>
              </div>
            </div>
          </section>

          {/* MSME Finance Assistance */}
          <section className="py-16 bg-gray-50">
            <div className="max-w-[1300px] mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
                {/* Image appears first on desktop, second on mobile */}
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
                    className="w-full max-h-[600px] object-cover rounded shadow-lg"
                  />
                </motion.div>

                {/* Text appears second on desktop, first on mobile */}
                <motion.div
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={fadeUp}
                  className="order-1 md:order-2"
                >
                  <h4 className="font-bold text-2xl mb-4 text-green-600">
                    MSME Finance Assistance
                  </h4>
                  <p className="mb-4 text-gray-700">
                    Every MSME requires funding at some stage — whether for
                    starting operations, purchasing machinery, hiring
                    manpower, or handling seasonal demand. Akshar Consultancy
                    provides end-to-end guidance for getting the right
                    financial support.
                  </p>
                  <p className="mb-4 text-gray-700">
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

                  <p className="mb-4 text-gray-700">
                    <strong>Our finance support includes:</strong> bank
                    coordination, business projections, financial ratios
                    analysis, credit score review, and post-sanction
                    compliance support.
                  </p>

                  <p className="mb-6 text-gray-700">
                    With Akshar Consultancy, you gain a long-term partner who
                    supports not just loan approval, but also renewal,
                    top-ups, and restructuring when needed.
                  </p>

                  <a 
                    href="/contact"
                    className="inline-block bg-green-600 hover:bg-green-700 text-white font-medium py-2.5 px-6 rounded shadow transition-colors"
                  >
                    Apply for Finance
                  </a>
                </motion.div>
              </div>
            </div>
          </section>

          {/* WhatsApp Floating Button */}
          <a
            href="https://wa.me/919067640237"
            className="fixed bottom-6 right-6 bg-[#25D366] text-white p-3.5 rounded-full z-[9999] shadow-[0_4px_12px_rgba(0,0,0,0.3)] hover:scale-110 transition-transform duration-200 flex items-center justify-center"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Chat on WhatsApp"
          >
            <FaWhatsapp size={28} />
          </a>

          <Footer />
        </div>
      )}
    </>
  );
}

export default Msme;