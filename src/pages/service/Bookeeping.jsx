import React, { useEffect, useState } from "react";
import bgImage from "../../assets/bg1.webp";
import Header from "../../component/Header";
import Footer from "../../component/Footer";
import Loader from "../Loader";
import { FaWhatsapp } from "react-icons/fa";

const BookKeeping = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // simulate async loading (API call / assets load etc.)
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  const services = [
    {
      title: "Daily Transaction Recording",
      text: "We handle all your daily expenses and income entries with accuracy and consistency.",
    },
    {
      title: "Bank Reconciliation",
      text: "Matching your books with bank statements to ensure everything adds up correctly.",
    },
    {
      title: "Financial Reports",
      text: "Get monthly profit & loss, balance sheet, and cash flow statements for clarity.",
    },
    {
      title: "GST & TDS Recordkeeping",
      text: "Ensure proper classification and record maintenance for GST and TDS returns.",
    },
    {
      title: "Accounts Payable/Receivable",
      text: "Stay on top of invoices, bills, and payments with accurate aging reports.",
    },
    {
      title: "Customized Reports",
      text: "We provide tailored reports as per your business needs for better analysis.",
    },
  ];

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <div className="min-h-screen overflow-x-hidden bg-white font-secondary text-gray-700">

          {/* =========================
              HEADER
          ========================== */}
          <Header />

          {/* =========================
              HERO SECTION
          ========================== */}
          <section
            className="relative flex min-h-[300px] items-center overflow-hidden bg-cover bg-center py-16 sm:min-h-[340px] sm:py-20 md:min-h-[380px] md:py-24"
            style={{ backgroundImage: `url(${bgImage})` }}
          >
            {/* Main Overlay */}
            <div className="absolute inset-0 z-10 bg-[#0B2A4A]]/75"></div>

            {/* Right Shape */}
            <div
              className="absolute right-0 top-0 z-20 hidden h-full w-2/5 bg-[#0A1F3A]]/50 md:block"
              style={{
                clipPath:
                  "polygon(20% 0, 100% 0, 100% 100%, 0% 100%)",
              }}
            ></div>

            {/* Gold Decorative Shape */}
            <div className="absolute bottom-0 left-0 z-20 h-1 w-24 bg-gold sm:w-32"></div>

            {/* Hero Content - 1300px */}
            <div className="relative z-30 mx-auto w-full max-w-[1300px] px-4 sm:px-6 lg:px-8">
              <div className="flex flex-col items-center md:items-start">

                {/* Heading */}
                <h1 className="text-center font-primary text-3xl font-bold leading-tight text-white sm:text-4xl md:text-5xl lg:text-6xl">
                  Book Keeping
                </h1>

                {/* Breadcrumb */}
                <nav
                  className="mt-4"
                  aria-label="Breadcrumb"
                >
                  <ol className="flex flex-wrap items-center justify-center gap-y-1 text-sm sm:text-base md:justify-start">
                    <li>
                      <a
                        href="/"
                        className="font-secondary text-white transition-colors duration-200 hover:text-gold"
                      >
                        Home
                      </a>
                    </li>

                    <li className="mx-2 text-white">
                      &gt;
                    </li>

                    <li>
                      <a
                        href="/service"
                        className="font-secondary text-white transition-colors duration-200 hover:text-gold"
                      >
                        Service
                      </a>
                    </li>

                    <li className="mx-2 text-white">
                      &gt;
                    </li>

                    <li className="font-semibold text-[#F5B800]">
                      Book Keeping
                    </li>
                  </ol>
                </nav>
              </div>
            </div>
          </section>

          {/* =========================
              WHAT IS BOOK KEEPING
          ========================== */}
          <section className="bg-white py-12 sm:py-16 md:py-20">

            {/* Main Container - 1300px */}
            <div className="mx-auto w-full max-w-[1300px] px-4 sm:px-6 lg:px-8">

              {/* Section Heading */}
              <div className="mx-auto mb-10 max-w-4xl text-center sm:mb-14">

                <span className="mb-3 inline-block font-primary text-sm font-semibold uppercase tracking-wider text-gold">
                  Book Keeping Services
                </span>

                <h2 className="font-primary text-2xl font-semibold leading-tight text-primaryDark sm:text-3xl md:text-4xl">
                  What is Book Keeping?
                </h2>

                <div className="mx-auto mt-4 h-1 w-16 rounded-full bg-gold"></div>

                <p className="mt-5 text-sm leading-6 text-gray-600 sm:text-base sm:leading-7">
                  Book Keeping is the process of recording and organizing all
                  the financial transactions of your business. It provides a
                  solid foundation for financial decision-making, ensuring
                  accuracy and compliance.
                </p>
              </div>

              {/* =========================
                  BENEFITS
              ========================== */}
              <div className="mb-14 grid grid-cols-1 gap-5 sm:mb-16 sm:grid-cols-2 sm:gap-6 md:grid-cols-3 md:gap-7">

                {/* Benefit 1 */}
                <div className="group rounded-2xl border border-silver/60 bg-white p-6 text-center shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-gold hover:shadow-lg sm:p-7">

                  <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-full bg-primaryDark text-2xl transition-all duration-300 group-hover:bg-gold">
                    📊
                  </div>

                  <h3 className="font-primary text-lg font-semibold text-primaryDark sm:text-xl">
                    Financial Clarity
                  </h3>

                  <p className="mt-3 text-sm leading-6 text-gray-600 sm:text-base">
                    Track your business performance with up-to-date financial
                    records.
                  </p>
                </div>

                {/* Benefit 2 */}
                <div className="group rounded-2xl border border-silver/60 bg-white p-6 text-center shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-gold hover:shadow-lg sm:p-7">

                  <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-full bg-primaryDark text-2xl transition-all duration-300 group-hover:bg-gold">
                    🧾
                  </div>

                  <h3 className="font-primary text-lg font-semibold text-primaryDark sm:text-xl">
                    Accurate Tax Filing
                  </h3>

                  <p className="mt-3 text-sm leading-6 text-gray-600 sm:text-base">
                    Avoid penalties with accurate reports and timely
                    submissions.
                  </p>
                </div>

                {/* Benefit 3 */}
                <div className="group rounded-2xl border border-silver/60 bg-white p-6 text-center shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-gold hover:shadow-lg sm:p-7">

                  <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-full bg-primaryDark text-2xl transition-all duration-300 group-hover:bg-gold">
                    💼
                  </div>

                  <h3 className="font-primary text-lg font-semibold text-primaryDark sm:text-xl">
                    Better Business Decisions
                  </h3>

                  <p className="mt-3 text-sm leading-6 text-gray-600 sm:text-base">
                    Use organized data to make informed financial decisions.
                  </p>
                </div>
              </div>

              {/* =========================
                  SERVICES
              ========================== */}
              <div>

                {/* Services Heading */}
                <div className="mx-auto mb-8 max-w-3xl text-center sm:mb-10">

                  <span className="font-primary text-sm font-semibold uppercase tracking-wider text-gold">
                    What We Offer
                  </span>

                  <h2 className="mt-2 font-primary text-2xl font-semibold text-primaryDark sm:text-3xl md:text-4xl">
                    Our Book Keeping Services
                  </h2>

                  <div className="mx-auto mt-4 h-1 w-16 rounded-full bg-gold"></div>
                </div>

                {/* Service Cards */}
                <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3 lg:gap-7">

                  {services.map((service, index) => (
                    <div
                      key={index}
                      className="group flex h-full flex-col overflow-hidden rounded-2xl border border-silver/70 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-primaryDark hover:shadow-xl"
                    >

                      {/* Card Top */}
                      <div className="h-1 w-full bg-primaryDark transition-all duration-300 group-hover:bg-gold"></div>

                      <div className="flex flex-grow flex-col p-5 sm:p-6">

                        {/* Number */}
                        <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-primaryDark font-primary text-sm font-bold text-white transition-all duration-300 group-hover:bg-gold group-hover:text-primaryDark">
                          {String(index + 1).padStart(2, "0")}
                        </div>

                        {/* Title */}
                        <h3 className="font-primary text-lg font-semibold leading-snug text-primaryDark sm:text-xl">
                          {service.title}
                        </h3>

                        {/* Description */}
                        <p className="mt-3 flex-grow text-sm leading-6 text-gray-600 sm:text-base sm:leading-7">
                          {service.text}
                        </p>
                      </div>
                    </div>
                  ))}

                </div>
              </div>
            </div>
          </section>

          {/* =========================
              CTA SECTION
          ========================== */}
          <section className="relative overflow-hidden bg-primaryDark py-14 sm:py-16 md:py-20">

            {/* Decorative Elements */}
            <div className="absolute -right-16 -top-16 h-40 w-40 rounded-full bg-gold/10 sm:h-56 sm:w-56"></div>

            <div className="absolute -bottom-20 -left-20 h-48 w-48 rounded-full bg-white/5 sm:h-64 sm:w-64"></div>

            {/* CTA Content - 1300px */}
            <div className="relative z-10 mx-auto w-full max-w-[1300px] px-4 text-center sm:px-6 lg:px-8">

              <span className="font-primary text-sm font-semibold uppercase tracking-wider text-gold">
                Professional Book Keeping
              </span>

              <h2 className="mx-auto mt-3 max-w-3xl font-primary text-2xl font-semibold leading-tight text-white sm:text-3xl md:text-4xl">
                Need Help Managing Your Books?
              </h2>

              <p className="mx-auto mt-4 max-w-2xl text-sm leading-6 text-silver sm:text-base sm:leading-7">
                Our experts ensure error-free Book Keeping so you can focus on
                growing your business.
              </p>

              <a
                href="/contact"
                className="mt-7 inline-flex min-h-[48px] items-center justify-center rounded-lg bg-gold px-7 py-3 font-primary text-sm font-semibold text-primaryDark shadow-md transition-all duration-300 hover:bg-white hover:shadow-lg sm:px-8 sm:text-base"
              >
                Contact Us
              </a>
            </div>
          </section>

          {/* =========================
              WHATSAPP + PHONE
              FLOATING BUTTONS
          ========================== */}
          <div className="fixed bottom-5 right-4 z-[9999] flex flex-col gap-3 sm:bottom-6 sm:right-6">

            {/* WhatsApp */}
            <a
              href="https://wa.me/919067640237"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Chat with us on WhatsApp"
              className="flex h-12 w-12 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg transition-all duration-300 hover:scale-110 hover:shadow-xl sm:h-14 sm:w-14"
            >
              <FaWhatsapp className="text-2xl sm:text-3xl" />
            </a>

            

          </div>

          {/* =========================
              FOOTER
          ========================== */}
          <Footer />

        </div>
      )}
    </>
  );
};

export default BookKeeping;