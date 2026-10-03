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
                  Foreign Accounting
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
                      <span className="text-[#e45c3c] font-bold">Foreign Accounting</span>
                    </li>
                  </ol>
                </nav>
              </div>
            </div>
          </div>

          {/* Main Content Section */}
          <div className="container mx-auto px-4 py-12 my-5">
            <h1 className="text-3xl md:text-4xl font-medium mb-8 text-center text-gray-900">
              Comprehensive Foreign Accounting Services
            </h1>

            <div className="mb-12 text-gray-600 space-y-4">
              <p>
                In today's globalized economy, managing foreign income,
                assets, and tax obligations can be complex and challenging. At{" "}
                <strong className="text-gray-900">Akshar Consultancy</strong>, we specialize in
                providing expert foreign accounting services tailored to meet
                the unique needs of individuals and businesses dealing with
                cross-border financial matters.
              </p>
              <p>
                Whether you earn income abroad, hold foreign assets, or
                conduct international business transactions, understanding the
                intricate tax laws and regulatory compliance requirements is
                crucial. Our experienced team ensures your foreign accounting
                is handled with precision and compliance to avoid penalties
                and optimize your tax position.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              <div>
                <h3 className="text-2xl font-medium mb-3 text-gray-800">Foreign Income Reporting</h3>
                <div className="text-gray-600 space-y-3">
                  <p>
                    Accurate reporting of foreign income is mandatory under Indian
                    Income Tax laws. We assist clients in documenting and
                    reporting all income sources earned outside India, including
                    salaries, business income, dividends, interest, and capital
                    gains.
                  </p>
                  <p>
                    Our team calculates the appropriate taxable amounts, applies
                    the correct exchange rates as per RBI guidelines, and ensures
                    timely filing of returns with complete disclosures.
                  </p>
                </div>
              </div>
              <div>
                <h3 className="text-2xl font-medium mb-3 text-gray-800">Foreign Tax Credit & Double Taxation Avoidance</h3>
                <div className="text-gray-600 space-y-3">
                  <p>
                    Avoid paying tax twice on the same income! We help you claim
                    Foreign Tax Credits (FTC) under Double Taxation Avoidance
                    Agreements (DTAA) between India and other countries. Our
                    experts analyze your tax payments abroad and optimize your
                    Indian tax liability accordingly.
                  </p>
                  <p>
                    With comprehensive knowledge of treaties and international tax
                    laws, we minimize your tax burden while maintaining full
                    compliance.
                  </p>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
              <div>
                <h3 className="text-2xl font-medium mb-3 text-gray-800">Foreign Asset Disclosures</h3>
                <div className="text-gray-600 space-y-3">
                  <p>
                    Indian taxpayers must disclose foreign assets and bank
                    accounts in their income tax returns and comply with RBI's
                    Foreign Exchange Management Act (FEMA) regulations. We guide
                    you through the entire disclosure process, helping you avoid
                    penalties or legal complications.
                  </p>
                  <p>
                    From investment portfolios to foreign property, we ensure all
                    assets are correctly reported with full transparency.
                  </p>
                </div>
              </div>
              <div>
                <h3 className="text-2xl font-medium mb-3 text-gray-800">Currency Conversion & Compliance</h3>
                <div className="text-gray-600 space-y-3">
                  <p>
                    Managing foreign currency transactions requires precise
                    calculations to comply with RBI exchange rate rules and
                    accounting standards. Our team handles currency conversion,
                    recognizes gains/losses, and aligns accounting with Indian
                    statutory requirements.
                  </p>
                  <p>
                    Whether you need to prepare financial statements or file
                    returns, we ensure accuracy and compliance in every step.
                  </p>
                </div>
              </div>
            </div>

            <div className="mb-10">
              <h3 className="text-2xl font-medium mb-4 text-gray-800">Why Choose Akshar Consultancy?</h3>
              <ul className="list-disc pl-6 space-y-2 text-gray-600">
                <li>
                  <strong className="text-gray-800">Expertise in International Taxation:</strong> Years
                  of experience handling complex foreign income and asset
                  taxation.
                </li>
                <li>
                  <strong className="text-gray-800">Personalized Solutions:</strong> Tailored advice to
                  fit your unique financial situation and cross-border
                  activities.
                </li>
                <li>
                  <strong className="text-gray-800">Compliance Assurance:</strong> Keep worry-free with
                  our rigorous adherence to all legal and regulatory
                  requirements.
                </li>
                <li>
                  <strong className="text-gray-800">Transparent Pricing:</strong> Clear fees with no
                  hidden costs.
                </li>
                <li>
                  <strong className="text-gray-800">Timely Support:</strong> Dedicated assistance to
                  meet deadlines and avoid penalties.
                </li>
              </ul>
            </div>

            <div className="mt-10 text-center">
              <button className="bg-blue-600 hover:bg-blue-700 text-white text-lg font-medium py-3 px-8 rounded-lg shadow-sm transition-colors">
                Get Your Foreign Accounting Consultation
              </button>
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

export default ForeignAccountingDetailed;