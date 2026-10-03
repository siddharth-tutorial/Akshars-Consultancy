import React, { useEffect, useState } from "react";
import Footer from "../../component/Footer";
import Header from "../../component/Header";
import bgImage from "../../assets/bg1.webp";
import Loader from "../Loader";
import { FaWhatsapp } from "react-icons/fa";

const PayrollService = () => {
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
                  Payroll
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
                      <span className="text-[#e45c3c] font-bold">Payroll</span>
                    </li>
                  </ol>
                </nav>
              </div>
            </div>
          </div>

          {/* Main Content Area */}
          <div className="py-16 bg-gray-50">
            <div className="container mx-auto px-4">
              {/* Header */}
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold mb-3 text-gray-900">End-to-End Payroll Solutions</h2>
                <p className="text-gray-500 max-w-2xl mx-auto">
                  Hassle-free payroll processing that ensures compliance,
                  accuracy, and peace of mind.
                </p>
              </div>

              {/* Main Content */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center mb-12">
                <div className="mb-6 lg:mb-0">
                  <img
                    src="https://img.freepik.com/free-photo/top-view-payroll-concept-with-items_23-2149103952.jpg"
                    alt="Payroll Processing Illustration"
                    className="w-full h-auto rounded-lg shadow-sm object-cover"
                  />
                </div>

                <div>
                  <h4 className="text-2xl font-semibold mb-4 text-gray-900">
                    Your Trusted Payroll Partner
                  </h4>
                  <p className="text-gray-500 mb-8">
                    Managing payroll can be complex and time-consuming. At
                    Akshar Consultancy, we simplify the process by offering
                    comprehensive payroll services — from salary calculations to
                    statutory compliance — all while maintaining the highest
                    level of confidentiality.
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Card 1 */}
                    <div className="bg-white rounded-lg shadow-sm p-4 flex items-start h-full">
                      <svg
                        className="w-6 h-6 mr-3 text-blue-600 flex-shrink-0"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M4 4h16v2H4V4zm0 6h16v2H4v-2zm0 6h10v2H4v-2z" />
                      </svg>
                      <div>
                        <h5 className="text-base font-semibold mb-1 text-gray-900">
                          Salary Processing
                        </h5>
                        <p className="text-sm text-gray-500">
                          Accurate monthly payroll with payslips, tax
                          deductions, and reimbursements.
                        </p>
                      </div>
                    </div>

                    {/* Card 2 */}
                    <div className="bg-white rounded-lg shadow-sm p-4 flex items-start h-full">
                      <svg
                        className="w-6 h-6 mr-3 text-blue-600 flex-shrink-0"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M12 1L3 5v6c0 5.25 3.66 10.74 9 12 5.34-1.26 9-6.75 9-12V5l-9-4zM5 7.03l7-3.11 7 3.11V11c0 4.39-3.08 8.88-7 10-3.92-1.12-7-5.61-7-10V7.03z" />
                      </svg>
                      <div>
                        <h5 className="text-base font-semibold mb-1 text-gray-900">
                          Statutory Compliance
                        </h5>
                        <p className="text-sm text-gray-500">
                          Timely filing of PF, ESI, PT, TDS, and labor law
                          obligations.
                        </p>
                      </div>
                    </div>

                    {/* Card 3 */}
                    <div className="bg-white rounded-lg shadow-sm p-4 flex items-start h-full">
                      <svg
                        className="w-6 h-6 mr-3 text-blue-600 flex-shrink-0"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M4 6h16v2H4zm0 5h16v2H4zm0 5h10v2H4z" />
                      </svg>
                      <div>
                        <h5 className="text-base font-semibold mb-1 text-gray-900">
                          Employee Records
                        </h5>
                        <p className="text-sm text-gray-500">
                          Manage leaves, attendance, and employee HR
                          documentation efficiently.
                        </p>
                      </div>
                    </div>

                    {/* Card 4 */}
                    <div className="bg-white rounded-lg shadow-sm p-4 flex items-start h-full">
                      <svg
                        className="w-6 h-6 mr-3 text-blue-600 flex-shrink-0"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M19 3H5c-1.1 0-2 .9-2 2v14l4-4h12c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z" />
                      </svg>
                      <div>
                        <h5 className="text-base font-semibold mb-1 text-gray-900">
                          Year-End Reports
                        </h5>
                        <p className="text-sm text-gray-500">
                          Form 16, tax reports, and audit-ready documents
                          prepared on time.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* CTA */}
              <div className="text-center mt-16">
                <h5 className="text-xl font-semibold mb-3 text-gray-900">
                  Focus on Growth, Leave Payroll to Us
                </h5>
                <p className="text-gray-500 mb-6 max-w-xl mx-auto">
                  Whether you're a startup or an enterprise, we ensure your
                  payroll is handled with precision and care.
                </p>
                <button className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-8 rounded-lg shadow-sm transition-colors text-lg">
                  Schedule a Free Payroll Consultation
                </button>
              </div>
            </div>
          </div>

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

export default PayrollService;