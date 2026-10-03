

// // {use on tailwind css header}

import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { HiOutlineMenuAlt3, HiX } from "react-icons/hi";
import { IoMdDownload } from "react-icons/io";
import { FaChevronDown } from "react-icons/fa";
import logo from "../assets/akshar-consultancy.png";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Scroll effect
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Team", path: "/team" },
    { name: "Service", path: "/service" },
    {
      name: "Calculator",
      dropdown: [
        { name: "Income Tax Calculator", path: "/calculator/incometax" },
        { name: "TDS Calculator", path: "/calculator/tds" },
        { name: "GST Calculator", path: "/calculator/gst" },
      ],
    },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-500 ${
        scrolled
          ? "bg-[#0B2A4A]/90 backdrop-blur-lg shadow-lg"
          : "bg-transparent"
      }`}
    >
      {/* NAVBAR */}
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        {/* LOGO */}
        <div className="flex items-center">
          <img src={logo} alt="logo" className="h-48 md:h-50 object-contain" />
        </div>

        {/* DESKTOP MENU */}
        <nav className="hidden md:flex items-center gap-10 font-semibold">
          {navLinks.map((link, index) => {
            // 🔽 DROPDOWN
            if (link.dropdown) {
              return (
                <div key={index} className="relative group">
                  {/* Main */}
                  <div className="flex items-center gap-1 text-white hover:text-[#F5B800] cursor-pointer transition no-underline py-6">
                    {link.name}
                    <FaChevronDown
                      size={12}
                      className="transition-transform duration-300 group-hover:rotate-180"
                    />
                  </div>

                  {/* Dropdown Wrapper - using pt-4 instead of mt-4 prevents the gap hover issue */}
                  <div className="absolute left-1/2 -translate-x-1/2 top-[80%] pt-4 w-64 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
                    <div className="bg-white rounded-xl shadow-2xl p-2 relative border border-gray-100">
                      {/* Triangle */}
                      <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-4 h-4 bg-white rotate-45 border-l border-t border-gray-100"></div>

                      {link.dropdown.map((item) => (
                        <NavLink
                          key={item.name}
                          to={item.path}
                          className="flex items-center justify-between px-4 py-3 rounded-lg text-gray-700 hover:bg-[#F5B800] hover:text-black transition group/item no-underline"
                        >
                          <span>{item.name}</span>
                          <span className="opacity-0 group-hover/item:opacity-100 transition">
                            →
                          </span>
                        </NavLink>
                      ))}
                    </div>
                  </div>
                </div>
              );
            }

            // 🔹 NORMAL LINK
            return (
              <NavLink
                key={link.name}
                to={link.path}
                className={({ isActive }) =>
                  `no-underline transition-colors ${
                    isActive
                      ? "text-[#F5B800]"
                      : "text-white hover:text-[#F5B800]"
                  }`
                }
              >
                {link.name}
              </NavLink>
            );
          })}
        </nav>

        {/* RIGHT SIDE */}
        <div className="flex items-center gap-4">
          <button
            onClick={() => setShowModal(true)}
            className="hidden sm:flex items-center gap-2 bg-[#F5B800] text-black px-5 py-2 rounded-full font-bold hover:bg-yellow-400 transition"
          >
            <IoMdDownload size={20} />
            Brochure
          </button>

          {/* MOBILE BTN */}
          <button
            className="md:hidden text-white"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <HiX size={28} /> : <HiOutlineMenuAlt3 size={28} />}
          </button>
        </div>
      </div>

      {/* MOBILE MENU */}
      <div
        className={`md:hidden transition-all duration-300 ${
          isOpen
            ? "max-h-[500px] opacity-100"
            : "max-h-0 opacity-0 overflow-hidden"
        } bg-[#0B2A4A]`}
      >
        <nav className="flex flex-col p-6 gap-4">
          {navLinks.map((link, index) => (
            <div key={index}>
              {!link.dropdown && (
                <NavLink
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className="text-white text-lg no-underline"
                >
                  {link.name}
                </NavLink>
              )}

              {link.dropdown && (
                <div>
                  <p className="text-[#F5B800] font-bold m-0">{link.name}</p>

                  <div className="ml-4 mt-2 flex flex-col gap-2">
                    {link.dropdown.map((item) => (
                      <NavLink
                        key={item.name}
                        to={item.path}
                        onClick={() => setIsOpen(false)}
                        className="text-white hover:text-[#F5B800] no-underline"
                      >
                        {item.name}
                      </NavLink>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}

          <button
            onClick={() => {
              setShowModal(true);
              setIsOpen(false);
            }}
            className="bg-[#F5B800] text-black px-4 py-3 rounded-lg font-bold flex items-center justify-center gap-2 mt-4"
          >
            <IoMdDownload size={20} />
            Download Brochure
          </button>
        </nav>
      </div>

      {/* MODAL */}
      {showModal && (
        <div className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-[60] p-4">
          <div className="bg-white w-full max-w-md p-6 rounded-2xl shadow-2xl relative">
            <button
              onClick={() => setShowModal(false)}
              className="absolute top-4 right-4 text-gray-600 hover:text-black transition"
            >
              <HiX size={24} />
            </button>

            <h2 className="text-2xl font-bold mb-6 text-[#0B2A4A]">
              Inquiry Form
            </h2>

            <div className="space-y-4">
              <input
                type="text"
                placeholder="Full Name"
                className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:border-[#F5B800] focus:ring-1 focus:ring-[#F5B800]"
              />
              <input
                type="email"
                placeholder="Email"
                className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:border-[#F5B800] focus:ring-1 focus:ring-[#F5B800]"
              />
              <textarea
                placeholder="Message"
                rows="3"
                className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:border-[#F5B800] focus:ring-1 focus:ring-[#F5B800]"
              />

              <button className="w-full py-3 bg-[#0B2A4A] text-white rounded-lg font-bold hover:bg-[#0A1F3A] transition">
                Send Inquiry
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;