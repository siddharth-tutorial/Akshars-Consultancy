
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Header from "../component/Header";
import Footer from "../component/Footer";
import Loader from "./Loader";


import a1 from "../assets/akshar.jpeg"
import a2 from "../assets/Jaynish.jpeg";
import bgImage from "../assets/bg1.webp";

const teamMembers = [
  {
    name: "Akash Vanecha",
    role: "Founder & Tax Consultant",
    image: a1,
    description:
      "He has 8+ years of comprehensive experience across Accounts, Finance, Audit, and Taxation. He specializes in strategic tax planning, managing complex corporate structural auditing, and providing comprehensive advisory on both Indirect and Direct Tax Compliance. Over the years, he has successfully represented numerous high-profile clients before various Adjudicating Authorities and appellate tribunals, ensuring smooth resolution of intricate tax matters. Practicing dedicatedly since August 2016, he has established a strong reputation for delivery of scalable and sound financial consulting solutions tailored to businesses of all sizes.",
  },
  {
    name: "Jaynish Patel",
    role: "Co-Founder & Audit Specialist",
    image: a2,
    description:
      "He has 8+ years of extensive experience in handling complex Project Loans, navigating tricky Government Subsidies, and delivering growth-oriented Business Advisory services. Throughout his illustrious career, he has successfully partnered with several prominent national and international corporations, enabling them to optimize capital distribution, restructure operational finances, and successfully acquire necessary regulatory funding. His profound insights into corporate policy, banking compliance, and strategic layout design make him a vital asset to businesses looking to scale operations, manage risk profiles, or drive large-scale expansion projects.",
  },
];

function Team() {
 
  const [loading, setLoading] = useState(true);

  // Simulated loading (loader closes after 2 seconds)
  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <Loader />;
  }

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section
        className="relative bg-cover bg-center text-white py-24 overflow-hidden"
        style={{ backgroundImage: `url(${bgImage})` }}
      >
        {/* Overlays */}
        <div className="absolute inset-0 bg-black/40 z-[1]"></div>
        <div className="absolute top-0 right-0 w-2/5 h-full bg-black/20 z-[2] hidden md:block [clip-path:polygon(0_0,100%_0,100%_100%,20%_100%)]"></div>

        {/* Hero Content */}
        <div className="relative z-[3] max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-6xl font-bold mb-3 text-center md:text-left">
            Our Team
          </h1>

          {/* Breadcrumb */}
          <nav className="flex justify-center md:justify-start items-center text-sm font-medium">
            <Link to="/" className="text-white no-underline hover:underline">
              Home
            </Link>
            <span className="mx-2 text-white/80">&gt;</span>
            <span className="text-[#fff] font-semibold">Our Team</span>
          </nav>
        </div>
      </section>

      {/* Team Members */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {teamMembers.map((member, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.3 }}
              className="py-12"
            >
              <div
                className={`flex flex-col md:flex-row items-center gap-8 md:gap-12 ${
                  idx % 2 === 1 ? "md:flex-row-reverse" : ""
                }`}
              >
                {/* Image */}
                <div className="w-full md:w-5/12 flex justify-center">
                  <img
                    src={member.image}
                    alt={member.name}
                    loading="lazy"
                    
                    className="w-[500px] h-[400px]  object-cover object-top cursor-pointer border-[6px] transition-all duration-300 ease-in-out" 
                  />
                </div>

                {/* Content */}
                <div className="w-full md:w-7/12 text-center md:text-left">
                  <h3
                    className="text-2xl font-bold text-black hover:text-[#F5B800] transition-colors duration-300 ease-in-out" 
                  >
                    Partner, {member.name}
                  </h3>
                  <h6 className="text-sm font-semibold mt-1 mb-3 text-[#0A1F3A]">
                    {member.role}
                  </h6>
                  <p className="text-base text-[#444] leading-relaxed text-justify md:text-[1.05rem]">
                    {member.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default Team;