import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Header from "../component/Header";
import Footer from "../component/Footer";
import {
  FaEye,
  FaRocket,
  FaCheck,
  FaCogs,
  FaLaptopCode,
  FaClipboardCheck,
  FaHandsHelping,
  FaLightbulb,
  FaBalanceScale,
} from "react-icons/fa";

import bgImage from "../assets/bg1.webp";
import Loader from "./Loader";

const services = [
  {
    icon: <FaBalanceScale size={36} className="text-[#e45c3c]" />,
    title: "Business Structuring",
    desc: "Helping you choose the right legal structure for optimal taxation and compliance.",
  },
  {
    icon: <FaLightbulb size={36} className="text-[#dc522e]" />,
    title: "Tax Strategy & Planning",
    desc: "Proactive planning to reduce your tax liability while ensuring legal compliance.",
  },
  {
    icon: <FaHandsHelping size={36} className="text-[#e5613d]" />,
    title: "Government Subsidy Advisory",
    desc: "Expert guidance on subsidies and schemes available for your business type.",
  },
  {
    icon: <FaClipboardCheck size={36} className="text-[#e1553a]" />,
    title: "Compliance Health Check",
    desc: "We review your financial & regulatory health and flag any red zones.",
  },
  {
    icon: <FaLaptopCode size={36} className="text-[#da4b2d]" />,
    title: "Digital Filing Assistance",
    desc: "Ensuring timely and accurate filings of all required documents through digital platforms.",
  },
  {
    icon: <FaCogs size={36} className="text-[#dc522e]" />,
    title: "Process Optimization",
    desc: "Streamlining internal accounting and compliance processes for efficiency.",
  },
];

const aboutPoints = [
  "Company Registration",
  "Project Finance & Business Loans",
  "Government Subsidies",
  "Taxation, GST, Audit & Assurance",
  "Financial Strategy & Advisory",
];

function About() {
  const [hovered, setHovered] = useState(null);
  const [loading, setLoading] = useState(true);

  // Scroll to top section
  useEffect(() => {
    const element = document.getElementById("about-section");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  }, [loading]);

  // Simulated loading (loader closes after 3 seconds)
  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 3000);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <Loader />;
  }

  return (
    <div id="about-section">
      <Header />

      {/* Hero Section */}
      <section
        className="relative bg-cover bg-center py-24 overflow-hidden text-white"
        style={{ backgroundImage: `url(${bgImage})` }}
      >
        <div className="absolute inset-0 bg-black/40 z-[1]"></div>
        <div className="absolute top-0 right-0 h-full w-[40%] bg-black/20 z-[2] [clip-path:polygon(0_0,100%_0,100%_100%,20%_100%)]"></div>

        <div className="relative z-[3] max-w-7xl mx-auto px-4">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 text-center md:text-left">
            About Us
          </h1>

          <nav className="flex items-center justify-center md:justify-start gap-2">
            <Link to="/" className="text-white no-underline hover:underline">
              Home
            </Link>
            <span>{">"}</span>
            <span className="text-[#e45c3c] font-bold">About Us</span>
          </nav>
        </div>
      </section>

      {/* About Us Section */}
      <section className="max-w-7xl mx-auto px-4 my-12">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div className="bg-white rounded-lg shadow-sm h-full p-6">
            <h2 className="text-3xl font-bold mb-4 text-[#e45c3c]">About Us</h2>

            <p className="mb-4">
              <strong>Akshar Consultancy</strong> is a trusted tax consultancy
              firm based in Ahmedabad, Gujarat. We specialize in:
            </p>

            <ul className="list-none p-0 mb-4 space-y-2">
              {aboutPoints.map((item, index) => (
                <li key={index} className="flex items-center">
                  <FaCheck className="text-[#e45c3c] mr-2.5 shrink-0" />
                  {item}
                </li>
              ))}
            </ul>

            <p>Driven by integrity, insight, and compliance excellence.</p>
          </div>

          <div className="rounded shadow-lg overflow-hidden h-[350px]">
            <img
              src="https://avatars.mds.yandex.net/i?id=ba83c359c06a2e7419744f9466ec5c0edb66c543-10465625-images-thumbs&n=13"
              alt="Who we are"
              loading="lazy"
              className="w-full h-full object-contain"
            />
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="max-w-7xl mx-auto px-4 my-12">
        <div className="bg-[#fff6f4] rounded-[24px] shadow-xl p-6">
          <div className="grid md:grid-cols-2">
            {/* Vision */}
            <div
              className="relative text-center md:text-left md:pr-8"
              onMouseEnter={() => setHovered("vision")}
              onMouseLeave={() => setHovered(null)}
            >
              <FaEye
                size={32}
                className="text-[#e45c3c] mb-3 mx-auto md:mx-0"
              />
              <h4
                className={`text-2xl font-bold mb-3 cursor-pointer transition-colors duration-300 ${
                  hovered === "vision" ? "text-[#e45c3c]" : "text-[#032E5A]"
                }`}
              >
                Our Vision
              </h4>
              <p className="text-[#555]">
                To revolutionize tax consultancy by making financial services
                accessible and seamless. We envision a future where compliance
                and success go hand-in-hand.
              </p>

              {/* Divider (desktop only) */}
              <div className="hidden md:block absolute right-0 top-[10%] bottom-[10%] w-px opacity-80 bg-gradient-to-b from-[#e45c3c] via-[#dc522e] to-[#e5613d]" />
            </div>

            {/* Mission */}
            <div
              className="text-center md:text-left mt-6 md:mt-0 md:pl-8"
              onMouseEnter={() => setHovered("mission")}
              onMouseLeave={() => setHovered(null)}
            >
              <FaRocket
                size={32}
                className="text-[#e5613d] mb-3 mx-auto md:mx-0"
              />
              <h4
                className={`text-2xl font-bold mb-3 cursor-pointer transition-colors duration-300 ${
                  hovered === "mission" ? "text-[#e45c3c]" : "text-[#032E5A]"
                }`}
              >
                Our Mission
              </h4>
              <p className="text-[#555]">
                To empower businesses and individuals by offering trustworthy
                guidance, financial clarity, and end-to-end support from
                registration to long-term planning.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="max-w-7xl mx-auto px-4 my-12">
        <h2 className="text-center text-3xl md:text-4xl font-bold mb-4 text-[#e45c3c]">
          Expert Tax Consultancy Services
        </h2>
        <p className="text-center text-gray-500 mb-10">
          We provide strategic tax advice and compliance solutions tailored for
          your business and financial goals.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="group bg-white rounded-lg shadow-sm p-6 text-center cursor-pointer transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_10px_20px_rgba(0,0,0,0.2)]"
            >
              <div className="mb-3">
                <span className="inline-block transition-transform duration-[600ms] group-hover:[transform:rotateY(180deg)]">
                  {service.icon}
                </span>
              </div>
              <h5 className="text-lg font-semibold mb-2 text-[#032E5A]">
                {service.title}
              </h5>
              <p className="text-gray-500 text-sm">{service.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default About;