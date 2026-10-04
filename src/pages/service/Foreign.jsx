import React, { useEffect, useState } from "react";
import Footer from "../../component/Footer";
import Header from "../../component/Header";
import bgImage from "../../assets/bg1.webp";
import Loader from "../Loader";
import { FaWhatsapp } from "react-icons/fa";

const ForeignAccountingDetailed = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // simulate async loading (API call / assets load etc.)
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

          {/* ================= HERO SECTION ================= */}
          <section
          className="relative flex min-h-[300px] items-center overflow-hidden bg-cover bg-center py-16 sm:min-h-[340px] sm:py-20 md:min-h-[380px] md:py-24"
            style={{ backgroundImage: `url(${bgImage})` }}
          >
            {/* Overlay */}
           <div className="absolute inset-0 z-10 bg-[#0B2A4A]]/75"></div>

            {/* Right Overlay Shape */}
            <div
              className="absolute right-0 top-0 z-20 hidden h-full w-2/5 bg-[#0A1F3A]]/50 md:block"
              style={{ clipPath: "polygon(0 0, 100% 0, 100% 100%, 20% 100%)" }}
            ></div>
            <div className="absolute bottom-0 left-0 z-20 h-1 w-24 bg-gold sm:w-32"></div>

            {/* Hero Content */}
         <div className="relative z-30 mx-auto w-full max-w-[1300px] px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col items-center md:items-start">
               <h1 className="text-center font-primary text-4xl font-bold leading-tight text-white sm:text-4xl md:text-5xl lg:text-6xl">
                  Foreign Accounting
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
                        Foreign Accounting
                      </span>
                    </li>
                  </ol>
                </nav>
              </div>
            </div>
          </section>

          {/* ================= MAIN CONTENT ================= */}
          <main className="bg-white py-10 sm:py-12 md:py-16">
            <div className="mx-auto w-full max-w-[1300px] px-4 sm:px-6 lg:px-8">
              
              {/* Main Heading */}
              <h1 className="mb-6 text-center text-2xl font-medium leading-tight text-gray-900 sm:mb-8 sm:text-3xl md:text-4xl">
                Comprehensive Foreign Accounting Services
              </h1>

              {/* Intro Content */}
              <div className="mb-10 space-y-4 text-sm leading-7 text-gray-600 sm:mb-12 sm:text-base">
                <p>
                  In today's globalized economy, managing foreign income,
                  assets, and tax obligations can be complex and challenging.
                  At{" "}
                  <strong className="text-gray-900">
                    Akshar Consultancy
                  </strong>
                  , we specialize in providing expert foreign accounting
                  services tailored to meet the unique needs of individuals
                  and businesses dealing with cross-border financial matters.
                </p>

                <p>
                  Whether you earn income abroad, hold foreign assets, or
                  conduct international business transactions, understanding
                  the intricate tax laws and regulatory compliance requirements
                  is crucial. Our experienced team ensures your foreign
                  accounting is handled with precision and compliance to avoid
                  penalties and optimize your tax position.
                </p>
              </div>

              {/* ================= SERVICE GRID 1 ================= */}
              <div className="mb-8 grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-10">
                
                {/* Foreign Income */}
                <div>
                  <h3 className="mb-3 text-xl font-medium leading-tight text-gray-800 sm:text-2xl">
                    Foreign Income Reporting
                  </h3>

                  <div className="space-y-3 text-sm leading-7 text-gray-600 sm:text-base">
                    <p>
                      Accurate reporting of foreign income is mandatory under
                      Indian Income Tax laws. We assist clients in documenting
                      and reporting all income sources earned outside India,
                      including salaries, business income, dividends, interest,
                      and capital gains.
                    </p>

                    <p>
                      Our team calculates the appropriate taxable amounts,
                      applies the correct exchange rates as per RBI guidelines,
                      and ensures timely filing of returns with complete
                      disclosures.
                    </p>
                  </div>
                </div>

                {/* Foreign Tax Credit */}
                <div>
                  <h3 className="mb-3 text-xl font-medium leading-tight text-gray-800 sm:text-2xl">
                    Foreign Tax Credit & Double Taxation Avoidance
                  </h3>

                  <div className="space-y-3 text-sm leading-7 text-gray-600 sm:text-base">
                    <p>
                      Avoid paying tax twice on the same income! We help you
                      claim Foreign Tax Credits (FTC) under Double Taxation
                      Avoidance Agreements (DTAA) between India and other
                      countries. Our experts analyze your tax payments abroad
                      and optimize your Indian tax liability accordingly.
                    </p>

                    <p>
                      With comprehensive knowledge of treaties and international
                      tax laws, we minimize your tax burden while maintaining
                      full compliance.
                    </p>
                  </div>
                </div>
              </div>

              {/* ================= SERVICE GRID 2 ================= */}
              <div className="mb-10 grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-10">
                
                {/* Foreign Assets */}
                <div>
                  <h3 className="mb-3 text-xl font-medium leading-tight text-gray-800 sm:text-2xl">
                    Foreign Asset Disclosures
                  </h3>

                  <div className="space-y-3 text-sm leading-7 text-gray-600 sm:text-base">
                    <p>
                      Indian taxpayers must disclose foreign assets and bank
                      accounts in their income tax returns and comply with
                      RBI's Foreign Exchange Management Act (FEMA) regulations.
                      We guide you through the entire disclosure process,
                      helping you avoid penalties or legal complications.
                    </p>

                    <p>
                      From investment portfolios to foreign property, we ensure
                      all assets are correctly reported with full transparency.
                    </p>
                  </div>
                </div>

                {/* Currency Conversion */}
                <div>
                  <h3 className="mb-3 text-xl font-medium leading-tight text-gray-800 sm:text-2xl">
                    Currency Conversion & Compliance
                  </h3>

                  <div className="space-y-3 text-sm leading-7 text-gray-600 sm:text-base">
                    <p>
                      Managing foreign currency transactions requires precise
                      calculations to comply with RBI exchange rate rules and
                      accounting standards. Our team handles currency
                      conversion, recognizes gains/losses, and aligns
                      accounting with Indian statutory requirements.
                    </p>

                    <p>
                      Whether you need to prepare financial statements or file
                      returns, we ensure accuracy and compliance in every step.
                    </p>
                  </div>
                </div>
              </div>

              {/* ================= WHY CHOOSE US ================= */}
              <div className="mb-10">
                <h3 className="mb-4 text-xl font-medium text-gray-800 sm:text-2xl">
                  Why Choose Akshar Consultancy?
                </h3>

                <ul className="list-disc space-y-3 pl-5 text-sm leading-7 text-gray-600 sm:pl-6 sm:text-base">
                  <li>
                    <strong className="text-gray-800">
                      Expertise in International Taxation:
                    </strong>{" "}
                    Years of experience handling complex foreign income and
                    asset taxation.
                  </li>

                  <li>
                    <strong className="text-gray-800">
                      Personalized Solutions:
                    </strong>{" "}
                    Tailored advice to fit your unique financial situation and
                    cross-border activities.
                  </li>

                  <li>
                    <strong className="text-gray-800">
                      Compliance Assurance:
                    </strong>{" "}
                    Keep worry-free with our rigorous adherence to all legal and
                    regulatory requirements.
                  </li>

                  <li>
                    <strong className="text-gray-800">
                      Transparent Pricing:
                    </strong>{" "}
                    Clear fees with no hidden costs.
                  </li>

                  <li>
                    <strong className="text-gray-800">
                      Timely Support:
                    </strong>{" "}
                    Dedicated assistance to meet deadlines and avoid penalties.
                  </li>
                </ul>
              </div>

              {/* ================= CTA ================= */}
              <div className="mt-8 text-center sm:mt-10">
                <button className="w-full rounded-lg bg-blue-600 px-6 py-3 text-base font-medium text-white shadow-sm transition-colors hover:bg-blue-700 sm:w-auto sm:px-8 sm:text-lg">
                  Get Your Foreign Accounting Consultation
                </button>
              </div>
            </div>
          </main>

          {/* ================= WHATSAPP FLOATING BUTTON ================= */}
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

export default ForeignAccountingDetailed;