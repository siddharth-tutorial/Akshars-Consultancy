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
    // simulate async loading (API call / assets load etc.)
    const timer = setTimeout(() => {
      setLoading(false); // loader close
    }, 2000); // 2 sec demo

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <div className="flex flex-col min-h-screen">
          <Header />

          {/* Hero with Parallax */}
          <div
            className="relative bg-cover bg-center py-24 overflow-hidden text-white"
            style={{ backgroundImage: `url(${bgImage})` }}
          >
            {/* overlay-before */}
            <div className="absolute inset-0 bg-black/40 z-10"></div>
            {/* overlay-after */}
            <div className="absolute inset-y-0 right-0 w-2/5 bg-black/20 z-20 [clip-path:polygon(0_0,100%_0,100%_100%,20%_100%)]"></div>
            
            <div className="relative z-30 container mx-auto px-4">
              <div className="flex flex-col items-center md:items-start">
                <h1 className="font-bold text-4xl md:text-5xl mb-4 text-center md:text-left">
                  Audit, Assurance
                </h1>
                
                {/* Custom Breadcrumb */}
                <nav className="flex justify-center md:justify-start">
                  <ol className="flex items-center space-x-2 text-white text-sm md:text-base">
                    <li>
                      <a href="/" className="hover:underline">Home</a>
                    </li>
                    <li><span className="mx-1">{'>'}</span></li>
                    <li>
                      <a href="/service" className="hover:underline">Service</a>
                    </li>
                    <li><span className="mx-1">{'>'}</span></li>
                    <li className="font-bold text-[#e45c3c]">
                      Audit, Assurance
                    </li>
                  </ol>
                </nav>
              </div>
            </div>
          </div>

          {/* Services Section */}
          <section className="py-12 bg-gray-50">
            <div className="container mx-auto px-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                <motion.div
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  variants={fadeUp}
                >
                  <h2 className="font-bold text-3xl mb-4 text-[#e45c3c]">
                    What We Offer
                  </h2>
                  <p className="text-gray-700 mb-4">
                    As a trusted tax consultant, Akshar Consultancy delivers
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
                      <li key={i} className="flex items-start text-gray-700">
                        <FaCheck className="text-green-500 mr-3 mt-1 shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </motion.div>
                
                <motion.div
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8 }}
                  viewport={{ once: true }}
                >
                  <img
                    src={b3}
                    alt="Tax Audit Services"
                    className="w-full h-auto rounded-xl shadow-lg"
                  />
                </motion.div>
              </div>
            </div>
          </section>

          {/* Audit Process Timeline */}
          <section className="py-12 bg-white">
            <div className="container mx-auto px-4">
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                variants={fadeUp}
              >
                <h2 className="text-center font-bold text-3xl mb-10 text-[#e45c3c]">
                  Our Audit Process
                </h2>
              </motion.div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
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
                  >
                    <div className="h-full bg-white border border-gray-100 shadow-sm rounded-lg p-6 hover:shadow-md transition-shadow">
                      <h4 className="font-bold text-blue-600 text-2xl mb-2">{item.step}</h4>
                      <h5 className="font-semibold text-lg mb-2 text-gray-900">{item.title}</h5>
                      <p className="text-gray-500 mb-0">{item.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          {/* Why Choose Us */}
          <section className="py-12 bg-gray-50">
            <div className="container mx-auto px-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                <motion.div
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  variants={fadeUp}
                >
                  <h2 className="font-bold text-3xl mb-6 text-[#e45c3c]">
                    Why Clients Choose Us
                  </h2>
                  <ul className="space-y-4 text-gray-700">
                    <li className="flex items-start">
                      <FaShieldAlt className="text-yellow-500 mr-4 mt-1 text-xl shrink-0" />
                      <span>
                        <strong className="text-gray-900">Confidential & Ethical:</strong> Data security
                        and professionalism guaranteed.
                      </span>
                    </li>
                    <li className="flex items-start">
                      <FaBusinessTime className="text-red-500 mr-4 mt-1 text-xl shrink-0" />
                      <span>
                        <strong className="text-gray-900">SME Focused:</strong> We simplify audit
                        language and guide you practically.
                      </span>
                    </li>
                    <li className="flex items-start">
                      <FaUserTie className="text-green-500 mr-4 mt-1 text-xl shrink-0" />
                      <span>
                        <strong className="text-gray-900">Experience You Can Trust:</strong> Decades of
                        handling tax compliance and audits.
                      </span>
                    </li>
                  </ul>
                  <a
                    href="/Akshar_Consultancy.pdf"
                    target="_blank"
                    rel="noreferrer"
                    download
                    className="inline-flex items-center px-5 py-2.5 mt-8 border border-blue-600 text-blue-600 font-medium rounded hover:bg-blue-600 hover:text-white transition-colors duration-300"
                  >
                    <FaDownload className="mr-2" /> Download Brochure
                  </a>
                </motion.div>
                
                <motion.div
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8 }}
                  viewport={{ once: true }}
                >
                  <img
                    src="https://images.unsplash.com/photo-1603791440384-56cd371ee9a7?auto=format&fit=crop&w=800&q=60"
                    alt="Why Choose Us"
                    className="w-full h-auto rounded-xl shadow-lg"
                  />
                </motion.div>
              </div>
            </div>
          </section>

          {/* WhatsApp Floating Button */}
          <a
            href="https://wa.me/9190676640237"
            target="_blank"
            rel="noopener noreferrer"
            className="fixed bottom-5 right-5 bg-[#25d366] text-white rounded-full w-14 h-14 flex justify-center items-center shadow-lg z-[9999] text-2xl hover:scale-110 transition-transform duration-300"
          >
            <FaWhatsapp />
          </a>

          <Footer />
        </div>
      )}
    </>
  );
}

export default Audit;