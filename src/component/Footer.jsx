import React, { useState, useEffect } from "react";
import {
 
  FaChevronRight,
  FaArrowUp,
} from "react-icons/fa";
import { IoLocationSharp } from "react-icons/io5";
import { MdEmail, MdPhone } from "react-icons/md";
import { Link } from "react-router-dom";
import logo from "../assets/footer-logo.png";

const services = [
  { text: "Finance", path: "/service/msme" },
  { text: "Tax Return", path: "/service/taxreturn" },
  { text: "Audit", path: "/service/audit" },
  { text: "Bookkeeping", path: "/service/bookeeping" },
];

const quickLinks = [
  { text: "Home", path: "/" },
  { text: "About Us", path: "/about" },
  { text: "Our Team", path: "/team" },
  { text: "Contact", path: "/contact" },
];



const MAP_URL =
  "https://www.google.com/maps/place/Rosevill+Sky/@23.0545455,72.6454815,3205m/data=!3m1!1e3!4m10!1m2!2m1!1sA-505,RoseVilleSky,Nikol,Ahmedabad-382350!3m6!1s0x395e878bd3d4c3f9:0x218f4d26a542afaa!8m2!3d23.0545455!4d72.6645359!15sCipBLTUwNSxSb3NlVmlsbGUgU2t5LE5pa29sLEFobWVkYWJhZC0zODIzNTBaLCIqYSA1MDUgcm9zZXZpbGxlIHNreSBuaWtvbCBhaG1lZGFiYWQgMzgyMzUwkgEPc2hvcHBpbmdfY2VudGVymgEkQ2hkRFNVaE5NRzluUzBWSlEwRm5TVVJRY1RsZk1UaFJSUkFCqgGBARABKiwiKDUwNSByb3NldmlsbGUgc2t5IG5pa29sIGFobWVkYWJhZCAzODIzNTAoADIfEAEiG9dLGF3QiOI5Uk2vIe--qJYhNnsTdxSvK72FVzIuEAIiKmEgNTA1IHJvc2V2aWxsZSBza3kgbmlrb2wgYWhtZWRhYmFkIDM4MjM1MOABAPoBBAgAEB8!16s%2Fg%2F11vbvrkrd9?entry=ttu&g_ep=EgoyMDI1MDgxMy4wIKXMDSoASAFQAw%3D%3D";

const FooterLinks = ({ title, links }) => (
  <div>
    <h5 className="font-bold text-lg mb-4 text-white font-primary">{title}</h5>
    <ul className="list-none p-0 m-0 space-y-3">
      {links.map(({ text, path }) => (
        <li key={path}>
          <Link
            to={path}
            className="group flex items-center no-underline text-silver hover:text-gold transition-all duration-300 font-secondary"
          >
            <FaChevronRight className="mr-2 text-gold transition-transform duration-300 group-hover:translate-x-1.5" />
            {text}
          </Link>
        </li>
      ))}
    </ul>
  </div>
);

const Footer = () => {
  const [showScroll, setShowScroll] = useState(false);

  // Show back to top button after scrolling
  useEffect(() => {
    const handleScroll = () => setShowScroll(window.scrollY > 200);

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative pt-16 pb-8 bg-gradient-to-br from-[#0B2A4A] to-[#0A1F3A] text-white border-t border-gold/20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
          {/* About Us */}
          <div>
            
            <img
              src={logo}
              alt="Akshar Consultancy Logo"
              className="w-[220px] h-auto mb-4 object-contain"
            />
            <p className="text-silver font-secondary leading-relaxed">
              We provide expert solutions for Tax Returns, Business
              Registrations, Accounting & Compliance. Your financial partner for
              growth.
            </p>
            
          </div>

          {/* Services */}
          <FooterLinks title="Our Services" links={services} />

          {/* Quick Links */}
          <FooterLinks title="Quick Links" links={quickLinks} />

          {/* Contact Info */}
          <div>
            <h5 className="font-bold text-lg mb-4 text-white font-primary">Contact Info</h5>
            
            <div className="space-y-4 font-secondary">
              <a
                href={MAP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start text-silver no-underline hover:text-gold transition-colors"
              >
                <IoLocationSharp className="mr-3 mt-1 shrink-0 text-xl text-gold" />
                <span>A-505, RoseVill Sky, Opp Pushkar-Icons, Nikol, Ahmedabad - 382350</span>
              </a>

              <a
                href="tel:+919067640237"
                className="flex items-center text-silver no-underline hover:text-gold transition-colors"
              >
                <MdPhone className="mr-3 text-xl text-gold" /> 
                <span>+91 90676 40237</span>
              </a>

              <a
                href="tel:+918980471710"
                className="flex items-center text-silver no-underline hover:text-gold transition-colors"
              >
                <MdPhone className="mr-3 text-xl text-gold" /> 
                <span>+91 89804 71710</span>
              </a>

              <a
                href="mailto:aksharconsultancy99@gmail.com"
                className="flex items-center text-silver no-underline hover:text-gold transition-colors break-all"
              >
                <MdEmail className="mr-3 text-xl shrink-0 text-gold" /> 
                <span>aksharconsultancy99@gmail.com</span>
              </a>
            </div>
          </div>
        </div>

        <hr className="border-0 border-t border-silver/20 mt-12 mb-6" />

        <div className="text-center">
          <small className="text-silver font-secondary">
            © {new Date().getFullYear()} <span className="text-gold font-semibold">Akshar Consultancy</span>. All rights reserved.
          </small>
        </div>
      </div>

      {/* Back to Top Button */}
      {showScroll && (
        <button
          onClick={scrollToTop}
          aria-label="Back to top"
          className="fixed bottom-6 right-6 z-[999] flex items-center justify-center w-[50px] h-[50px] rounded-full border-0 text-xl text-primaryDark shadow-lg bg-gold hover:bg-white hover:scale-110 hover:rotate-[360deg] transition-all duration-500 cursor-pointer"
        >
          <FaArrowUp />
        </button>
      )}
    </footer>
  );
};

export default Footer;