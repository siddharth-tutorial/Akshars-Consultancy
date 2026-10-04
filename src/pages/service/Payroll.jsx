import React, { useEffect, useState } from "react";
import Footer from "../../component/Footer";
import Header from "../../component/Header";
import bgImage from "../../assets/bg1.webp";
import Loader from "../Loader";
import { FaWhatsapp } from "react-icons/fa";

const PayrollService = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // simulate async loading
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
        <div className="min-h-screen overflow-x-hidden font-sans">
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
                  Payroll
                </h1>

                {/* Breadcrumb */}
                <nav
                  className="flex justify-center md:justify-start"
                  aria-label="Breadcrumb"
                >
                  <ol className="flex flex-wrap items-center justify-center text-sm text-white sm:text-base md:justify-start">
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
                        className="text-white transition hover:underline"
                      >
                        Service
                      </a>
                    </li>

                    <li className="flex items-center">
                      <span className="mx-2 text-white">&gt;</span>

                      <span className="font-semibold text-[#F5B800]">
                        Payroll
                      </span>
                    </li>
                  </ol>
                </nav>
              </div>
            </div>
          </section>

          {/* =====================================================
              MAIN CONTENT AREA
          ====================================================== */}
          <section className="bg-gray-50 py-10 sm:py-12 md:py-16">
            <div className="mx-auto w-full max-w-[1300px] px-4 sm:px-6 lg:px-8">

              {/* Header */}
              <div className="mb-10 text-center sm:mb-12">
                <h2 className="mb-3 text-2xl font-bold leading-tight text-gray-900 sm:text-3xl">
                  End-to-End Payroll Solutions
                </h2>

                <p className="mx-auto max-w-2xl text-sm leading-6 text-gray-500 sm:text-base">
                  Hassle-free payroll processing that ensures compliance,
                  accuracy, and peace of mind.
                </p>
              </div>

              {/* =====================================================
                  MAIN CONTENT
              ====================================================== */}
              <div className="mb-10 grid grid-cols-1 items-center gap-8 sm:gap-10 lg:mb-12 lg:grid-cols-2 lg:gap-14">

                {/* Image */}
                <div className="mb-2 lg:mb-0">
                  <img
                    src="https://img.freepik.com/free-photo/top-view-payroll-concept-with-items_23-2149103952.jpg"
                    alt="Payroll Processing Illustration"
                    className="mx-auto h-auto w-full rounded-lg object-cover shadow-sm"
                  />
                </div>

                {/* Content */}
                <div>
                  <h4 className="mb-4 text-2xl font-semibold text-gray-900">
                    Your Trusted Payroll Partner
                  </h4>

                  <p className="mb-7 text-sm leading-7 text-gray-500 sm:mb-8 sm:text-base">
                    Managing payroll can be complex and time-consuming. At
                    Akshar Consultancy, we simplify the process by offering
                    comprehensive payroll services — from salary calculations
                    to statutory compliance — all while maintaining the
                    highest level of confidentiality.
                  </p>

                  {/* Cards */}
                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">

                    {/* Card 1 */}
                    <div className="flex h-full items-start rounded-lg bg-white p-4 shadow-sm">
                      <svg
                        className="mr-3 h-6 w-6 shrink-0 text-blue-600"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M4 4h16v2H4V4zm0 6h16v2H4v-2zm0 6h10v2H4v-2z" />
                      </svg>

                      <div>
                        <h5 className="mb-1 text-base font-semibold text-gray-900">
                          Salary Processing
                        </h5>

                        <p className="text-sm leading-6 text-gray-500">
                          Accurate monthly payroll with payslips, tax
                          deductions, and reimbursements.
                        </p>
                      </div>
                    </div>

                    {/* Card 2 */}
                    <div className="flex h-full items-start rounded-lg bg-white p-4 shadow-sm">
                      <svg
                        className="mr-3 h-6 w-6 shrink-0 text-blue-600"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M12 1L3 5v6c0 5.25 3.66 10.74 9 12 5.34-1.26 9-6.75 9-12V5l-9-4zM5 7.03l7-3.11 7 3.11V11c0 4.39-3.08 8.88-7 10-3.92-1.12-7-5.61-7-10V7.03z" />
                      </svg>

                      <div>
                        <h5 className="mb-1 text-base font-semibold text-gray-900">
                          Statutory Compliance
                        </h5>

                        <p className="text-sm leading-6 text-gray-500">
                          Timely filing of PF, ESI, PT, TDS, and labor law
                          obligations.
                        </p>
                      </div>
                    </div>

                    {/* Card 3 */}
                    <div className="flex h-full items-start rounded-lg bg-white p-4 shadow-sm">
                      <svg
                        className="mr-3 h-6 w-6 shrink-0 text-blue-600"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M4 6h16v2H4zm0 5h16v2H4zm0 5h10v2H4z" />
                      </svg>

                      <div>
                        <h5 className="mb-1 text-base font-semibold text-gray-900">
                          Employee Records
                        </h5>

                        <p className="text-sm leading-6 text-gray-500">
                          Manage leaves, attendance, and employee HR
                          documentation efficiently.
                        </p>
                      </div>
                    </div>

                    {/* Card 4 */}
                    <div className="flex h-full items-start rounded-lg bg-white p-4 shadow-sm">
                      <svg
                        className="mr-3 h-6 w-6 shrink-0 text-blue-600"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M19 3H5c-1.1 0-2 .9-2 2v14l4-4h12c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z" />
                      </svg>

                      <div>
                        <h5 className="mb-1 text-base font-semibold text-gray-900">
                          Year-End Reports
                        </h5>

                        <p className="text-sm leading-6 text-gray-500">
                          Form 16, tax reports, and audit-ready documents
                          prepared on time.
                        </p>
                      </div>
                    </div>

                  </div>
                </div>
              </div>

              {/* =====================================================
                  CTA
              ====================================================== */}
              <div className="mt-10 text-center sm:mt-16">
                <h5 className="mb-3 text-xl font-semibold text-gray-900 sm:text-2xl">
                  Focus on Growth, Leave Payroll to Us
                </h5>

                <p className="mx-auto mb-6 max-w-xl text-sm leading-6 text-gray-500 sm:text-base">
                  Whether you're a startup or an enterprise, we ensure your
                  payroll is handled with precision and care.
                </p>

                <button className="w-full rounded-lg bg-blue-600 px-6 py-3 text-base font-medium text-white shadow-sm transition-colors hover:bg-blue-700 sm:w-auto sm:px-8 sm:text-lg">
                  Schedule a Free Payroll Consultation
                </button>
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
};

export default PayrollService;