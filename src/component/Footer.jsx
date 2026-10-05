
import React, { useState, useEffect } from "react";
import {
  FaChevronRight,
  FaArrowUp,
} from "react-icons/fa";
import { IoLocationSharp } from "react-icons/io5";
import { MdEmail, MdPhone } from "react-icons/md";
import { Link } from "react-router-dom";
import logo from "../assets/footer-logo.png";

// =====================================================
// SERVICES
// =====================================================

const services = [
  { text: "Finance", path: "/service/msme" },
  { text: "Tax Return", path: "/service/taxreturn" },
  { text: "Audit", path: "/service/audit" },
  { text: "Bookkeeping", path: "/service/bookeeping" },
];

// =====================================================
// QUICK LINKS
// =====================================================

const quickLinks = [
  { text: "Home", path: "/" },
  { text: "About Us", path: "/about" },
  { text: "Our Team", path: "/team" },
  { text: "Contact", path: "/contact" },
];

// =====================================================
// FOOTER LINKS COMPONENT
// =====================================================

const FooterLinks = ({ title, links }) => (
  <div className="w-full">
    <h5
      className="
        font-bold
        text-base
        sm:text-lg
        mb-4
        text-white
        font-primary
      "
    >
      {title}
    </h5>

    <ul className="list-none p-0 m-0 space-y-3">
      {links.map(({ text, path }) => (
        <li key={path}>
          <Link
            to={path}
            className="
              group
              flex
              items-center
              no-underline
              text-silver
              hover:text-gold
              transition-all
              duration-300
              font-secondary
              text-sm
              sm:text-base
              leading-5
            "
          >
            <FaChevronRight
              className="
                mr-2
                shrink-0
                text-gold
                text-xs
                transition-transform
                duration-300
                group-hover:translate-x-1.5
              "
            />

            <span>{text}</span>
          </Link>
        </li>
      ))}
    </ul>
  </div>
);

// =====================================================
// FOOTER
// =====================================================

const Footer = () => {
  const [showScroll, setShowScroll] = useState(false);

  // =====================================================
  // SHOW / HIDE BACK TO TOP BUTTON
  // =====================================================

  useEffect(() => {
    const handleScroll = () => {
      setShowScroll(window.scrollY > 200);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // =====================================================
  // SCROLL TO TOP
  // =====================================================

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer
      className="
        relative
        w-full
        overflow-hidden
        pt-10
        sm:pt-14
        md:pt-16
        pb-6
        sm:pb-8
        bg-gradient-to-br
        from-[#0B2A4A]
        to-[#0A1F3A]
        text-white
        border-t
        border-gold/20
      "
    >
      {/* =====================================================
          FOOTER CONTAINER
      ===================================================== */}

      <div
        className="
          max-w-7xl
          mx-auto
          px-5
          sm:px-6
          lg:px-8
        "
      >
        {/* ===================================================
            MAIN FOOTER GRID
        =================================================== */}

        <div
          className="
            grid
            grid-cols-2
            sm:grid-cols-2
            lg:grid-cols-4
            gap-8
            sm:gap-10
            lg:gap-12
          "
        >
          {/* =================================================
              ABOUT US
          ================================================= */}

          <div
            className="
              w-full
              col-span-2
              sm:col-span-2
              lg:col-span-1
              text-center
              sm:text-left
            "
          >
            <div className="flex justify-center sm:justify-start">
              <img
                src={logo}
                alt="Akshar Tax Consultancy Logo"
                className="
                  w-[180px]
                  xs:w-[190px]
                  sm:w-[200px]
                  md:w-[220px]
                  max-w-full
                  h-auto
                  mb-4
                  object-contain
                "
              />
            </div>

            <p
              className="
                text-silver
                font-secondary
                text-sm
                sm:text-base
                leading-6
                sm:leading-relaxed
                max-w-md
                mx-auto
                sm:mx-0
              "
            >
              We provide expert solutions for Tax Returns, Business
              Registrations, Accounting & Compliance. Your financial partner
              for growth.
            </p>
          </div>

          {/* =================================================
              SERVICES
          ================================================= */}

          <div className="w-full col-span-1">
            <FooterLinks
              title="Our Services"
              links={services}
            />
          </div>

          {/* =================================================
              QUICK LINKS
          ================================================= */}

          <div className="w-full col-span-1">
            <FooterLinks
              title="Quick Links"
              links={quickLinks}
            />
          </div>

          {/* =================================================
              CONTACT INFO
          ================================================= */}

          <div
            className="
              w-full
              min-w-0
              col-span-2
              lg:col-span-1
            "
          >
            <h5
              className="
                font-bold
                text-base
                sm:text-lg
                mb-4
                text-white
                font-primary
              "
            >
              Contact Info
            </h5>

            <div
              className="
                space-y-4
                font-secondary
                text-sm
                sm:text-base
              "
            >
              {/* =================================================
                  ADDRESS
              ================================================= */}

              <a
                href="https://www.google.com/maps/search/?api=1&query=605%2C%20The%20Crown%2C%206th%20Floor%2C%20Opp.%20Rangoli%20Icecream%20Cafe%2C%20Near%20Gangotri%20Circle%2C%20Nikol%2C%20Ahmedabad%20-%20382350"
                target="_blank"
                rel="noopener noreferrer"
                className="
                  flex
                  items-start
                  text-silver
                  no-underline
                  hover:text-gold
                  transition-colors
                  duration-300
                  min-w-0
                  leading-6
                "
              >
                <IoLocationSharp
                  className="
                    mr-3
                    mt-1
                    shrink-0
                    text-lg
                    sm:text-xl
                    text-gold
                  "
                />

                <span className="break-words">
                  605, The Crown, 6th Floor, Opp. Rangoli Icecream Cafe,
                  Near Gangotri Circle, Nikol, Ahmedabad - 382350
                </span>
              </a>

              {/* =================================================
                  PHONE 1
              ================================================= */}

              <a
                href="tel:+919067640237"
                className="
                  flex
                  items-center
                  text-silver
                  no-underline
                  hover:text-gold
                  transition-colors
                  duration-300
                  leading-6
                "
              >
                <MdPhone
                  className="
                    mr-3
                    text-lg
                    sm:text-xl
                    text-gold
                    shrink-0
                  "
                />

                <span>+91 90676 40237</span>
              </a>

              {/* =================================================
                  PHONE 2
              ================================================= */}

              <a
                href="tel:+918980471710"
                className="
                  flex
                  items-center
                  text-silver
                  no-underline
                  hover:text-gold
                  transition-colors
                  duration-300
                  leading-6
                "
              >
                <MdPhone
                  className="
                    mr-3
                    text-lg
                    sm:text-xl
                    text-gold
                    shrink-0
                  "
                />

                <span>+91 89804 71710</span>
              </a>

              {/* =================================================
                  EMAIL
              ================================================= */}

              <a
                href="mailto:info@akshartaxconsultancy.in"
                className="
                  flex
                  items-start
                  text-silver
                  no-underline
                  hover:text-gold
                  transition-colors
                  duration-300
                  min-w-0
                  leading-6
                "
              >
                <MdEmail
                  className="
                    mr-3
                    mt-1
                    text-lg
                    sm:text-xl
                    shrink-0
                    text-gold
                  "
                />

                <span className="break-all">
                  info@akshartaxconsultancy.in
                </span>
              </a>
            </div>
          </div>
        </div>

        {/* =====================================================
            DIVIDER
        ===================================================== */}

        <hr
          className="
            border-0
            border-t
            border-silver/20
            mt-8
            sm:mt-10
            md:mt-12
            mb-5
            sm:mb-6
          "
        />

        {/* =====================================================
            COPYRIGHT
        ===================================================== */}

        <div
          className="
            text-center
            px-2
          "
        >
          <small
            className="
              text-silver
              font-secondary
              text-xs
              sm:text-sm
              leading-5
            "
          >
            © {new Date().getFullYear()}{" "}

            <span className="text-gold font-semibold">
              Akshar Tax Consultancy
            </span>

            . All rights reserved.
          </small>
        </div>
      </div>

      {/* =====================================================
          BACK TO TOP
      ===================================================== */}

      {showScroll && (
        <button
          onClick={scrollToTop}
          aria-label="Back to top"
          className="
            fixed
            bottom-4
            right-4
            sm:bottom-6
            sm:right-6
            z-[999]
            flex
            items-center
            justify-center
            w-11
            h-11
            sm:w-12
            sm:h-12
            rounded-full
            border-0
            text-base
            sm:text-xl
            text-[#0B2A4A]
            shadow-lg
            bg-[#F5B800]
            hover:bg-white
            hover:scale-110
            hover:rotate-[360deg]
            transition-all
            duration-500
            cursor-pointer
          "
        >
          <FaArrowUp />
        </button>
      )}
    </footer>
  );
};

export default Footer;


