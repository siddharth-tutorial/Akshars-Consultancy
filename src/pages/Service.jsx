
import { FaArrowRight, FaGlobeEurope, FaMoneyCheckAlt, FaUniversity } from "react-icons/fa";
import { FaCoins, FaFileInvoiceDollar, FaPen } from "react-icons/fa6";

  import Header from "../component/Header";
  import Footer from "../component/Footer";
   import { Link } from "react-router-dom";
  import { motion } from "framer-motion";
  import bgImage from "../assets/bg1.webp";
function Service() {
  
  const services = [
    {
      title: "Book Keeping Services",
      slug: "bookeeping",
      icon: <FaPen />,
      image: "https://static2.bigstockphoto.com/6/6/3/large1500/366399754.jpg",
      des:"Keep your finances organized with accurate bookkeeping for better business management and growth.",
    },
    {
      title: "Financial Consulting",
      slug: "msme",
      icon: <FaUniversity />,
      image:
        "https://avatars.mds.yandex.net/get-altay/12813969/2a0000018e16a8c1a6609b070fa83c18bac9/XXL_height",
        des:"Akshar Tax Consultancy provides expert financial consulting for smarter business decisions and growth.",
    },
    {
      title: "Income Tax Return",
      slug: "taxreturn",
      icon: <FaMoneyCheckAlt />,
      image:
        "https://th-i.thgim.com/public/incoming/95hrwy/article69135505.ece/alternates/LANDSCAPE_1200/PO13_Tax_calculating.jpg",
        des:"Akshar Tax Consultancy offers accurate income tax return services for easy and timely filing.",
    },
    {
      title: "Audit & Assurance",
      slug: "audit",
      icon: <FaCoins />,
      image:
        "https://www.dataprivacyadvisory.com/app/uploads/2022/10/AdobeStock_429325800-scaled.jpg",
        des:"Akshar Tax Consultancy provides reliable audit and assurance services for accurate financial reporting.",
    },
    {
      title: "Payroll Management",
      slug: "payroll",
      icon: <FaFileInvoiceDollar />,
      image:
        "https://img.freepik.com/free-photo/top-view-payroll-concept-with-items_23-2149103952.jpg",
        des:"Akshar Tax Consultancy delivers efficient payroll services for accurate employee payments and compliance.",
    },
    {
      title: "International Accounting",
      slug: "foreign",
      icon: <FaGlobeEurope />,
      image:
        "https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?auto=format&fit=crop&q=80&w=600",
        des:"Akshar Tax Consultancy offers international accounting for compliant global financial management.",
    },
  ];

  return (
    <div className="min-h-screen bg-[#F8FAFC]">
      <Header />

      {/* Hero Section */}
      <div
        className="relative bg-cover bg-center text-white py-24 overflow-hidden"
        style={{ backgroundImage: `url(${bgImage})` }}
      >
        <div className="absolute inset-0 bg-black/40 z-[1]"></div>
        <div
          className="absolute top-0 right-0 w-2/5 h-full bg-black/20 z-[2] hidden md:block"
          style={{ clipPath: "polygon(0 0, 100% 0, 100% 100%, 20% 100%)" }}
        ></div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-[3]">
          <div className="flex flex-col">
            <h1 className="text-4xl md:text-5xl font-bold mb-3 text-center md:text-left">
              Our Services
            </h1>

            <nav className="flex justify-center md:justify-start items-center text-sm font-medium">
              <ol className="inline-flex items-center space-x-2">
                <li>
                  <a
                    href="/"
                    className="text-white hover:underline transition-all"
                  >
                    Home
                  </a>
                </li>
                <li className="flex items-center text-white">
                  <span className="mx-2 text-white/80">&gt;</span>
                  <span className="text-[#fff] font-bold">Our Services</span>
                </li>
              </ol>
            </nav>
          </div>
        </div>
      </div>

      {/* Services Grid Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h4 className="text-3xl md:text-4xl font-bold text-center text-[#0B2A4A] mb-4">
            Our Services
          </h4>
          <p className="text-gray-500 text-center max-w-2xl mx-auto mb-20 text-base md:text-lg">
            We provide reliable financial, taxation, and accounting solutions to
            help your business grow.
          </p>

          {/* Grid Layout identical to image */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-y-20 gap-x-8 lg:gap-x-10 pt-6">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.12 }}
                className="group relative w-full flex flex-col pt-4"
              >
                {/* Image Container with rounded top corners */}
                <div className="overflow-hidden rounded-2xl aspect-[4/3] w-full shadow-sm">
                  <img
                    src={service.image}
                    alt={service.title}
                    loading="lazy"
                    className="w-full h-full object-cover transition duration-700 ease-out group-hover:scale-105"
                  />
                </div>

                {/* Overlapping White Box */}
                <div className="relative bg-white shadow-[0_10px_30px_rgba(0,0,0,0.06)] p-6 md:p-8 text-center mx-6 -mt-24 z-10 rounded-2xl flex-1 flex flex-col justify-between border border-gray-100/40 transition-all duration-500 group-hover:-translate-y-2 group-hover:shadow-[0_15px_35px_rgba(0,0,0,0.1)]">
                  <div>
                    {/* Yellow Accent Icon */}
                    <div className="text-[#F5B800] text-3xl mb-4 flex justify-center">
                      {service.icon}
                    </div>

                    {/* Service Title */}
                    <h3 className="text-lg md:text-xl font-bold text-[#0B2A4A] mb-3">
                      {service.title}
                    </h3>

                    {/* Fixed text matched from your screenshot template */}
                    <p className="text-gray-400 text-[13px] md:text-sm leading-relaxed px-2 mb-6">
                      {service.des}
                    </p>
                  </div>

                  {/* Circular Yellow Arrow Button */}
                  <div className="flex justify-center mt-auto">
                    <Link
                      to={`/service/${service.slug}`}
                      className="bg-[#F5B800] w-10 h-10 flex items-center justify-center rounded-full shadow-sm 
                        transition-all duration-300 transform-gpu
                        hover:bg-[#e0a800] hover:scale-110 active:scale-95"
                    >
                      <FaArrowRight className="text-black text-xs" />
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>

  );
}

export default Service;
