// import React, { useState, useEffect } from "react";
// import { createPortal } from "react-dom";
// import { NavLink } from "react-router-dom";
// import { HiOutlineMenuAlt3, HiX } from "react-icons/hi";
// import { IoMdDownload } from "react-icons/io";
// import { FaChevronDown } from "react-icons/fa";
// import logo from "../assets/logo.png";
// import vector from "../assets/Contact-Us-Vector.webp"

// const Header = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const [showModal, setShowModal] = useState(false);
//   const [scrolled, setScrolled] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => setScrolled(window.scrollY > 20);
//     window.addEventListener("scroll", handleScroll);

//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   // Prevent background scrolling when modal is open
//   useEffect(() => {
//     if (!showModal) return;

//     const previousOverflow = document.body.style.overflow;
//     document.body.style.overflow = "hidden";

//     const handleEscape = (event) => {
//       if (event.key === "Escape") setShowModal(false);
//     };

//     window.addEventListener("keydown", handleEscape);

//     return () => {
//       document.body.style.overflow = previousOverflow;
//       window.removeEventListener("keydown", handleEscape);
//     };
//   }, [showModal]);

//   const navLinks = [
//     { name: "Home", path: "/" },
//     { name: "About", path: "/about" },
//     { name: "Team", path: "/team" },
//     { name: "Service", path: "/service" },
//     {
//       name: "Calculator",
//       dropdown: [
//         { name: "Income Tax Calculator", path: "/calculator/incometax" },
//         { name: "TDS Calculator", path: "/calculator/tds" },
//         { name: "GST Calculator", path: "/calculator/gst" },
//       ],
//     },
//     { name: "Contact", path: "/contact" },
//   ];

//   const openModal = () => {
//     setIsOpen(false);
//     setShowModal(true);
//   };

//   const closeModal = () => setShowModal(false);

//   return (
//     <>
//       {/* HEADER */}
//       <header
//         className={`fixed left-0 top-0 z-50 w-full bg-white/90 backdrop-blur-lg transition-all duration-300 ${
//           scrolled ? "shadow-lg" : "shadow-md"
//         }`}
//       >
//         <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6">
//           {/* LOGO */}
//           <NavLink to="/" className="flex shrink-0 items-center">
//             <img
//               src={logo}
//               alt="Akshar Tax Consultancy Logo"
//               className="h-auto w-[170px] object-contain sm:w-[200px] md:w-[220px]"
//             />
//           </NavLink>

//           {/* DESKTOP NAVIGATION */}
//           <nav className="hidden items-center gap-6 font-semibold lg:flex xl:gap-8">
//             {navLinks.map((link) => {
//               if (link.dropdown) {
//                 return (
//                   <div key={link.name} className="group relative">
//                     <div className="flex cursor-pointer items-center gap-2 py-6 text-[#0B2A4A] transition hover:text-[#D49B00]">
//                       {link.name}
//                       <FaChevronDown
//                         size={12}
//                         className="transition-transform duration-300 group-hover:rotate-180"
//                       />
//                     </div>

//                     <div className="invisible absolute left-1/2 top-[80%] z-50 w-64 -translate-x-1/2 pt-4 opacity-0 transition-all duration-300 group-hover:visible group-hover:opacity-100">
//                       <div className="relative rounded-xl border border-gray-100 bg-white p-2 shadow-2xl">
//                         <div className="absolute -top-2 left-1/2 h-4 w-4 -translate-x-1/2 rotate-45 border-l border-t border-gray-100 bg-white" />

//                         {link.dropdown.map((item) => (
//                           <NavLink
//                             key={item.name}
//                             to={item.path}
//                             className="group/item flex items-center justify-between rounded-lg px-4 py-3 text-gray-700 no-underline transition hover:bg-[#F5B800] hover:text-black"
//                           >
//                             <span>{item.name}</span>
//                             <span className="opacity-0 transition group-hover/item:opacity-100">
//                               →
//                             </span>
//                           </NavLink>
//                         ))}
//                       </div>
//                     </div>
//                   </div>
//                 );
//               }

//               return (
//                 <NavLink
//                   key={link.name}
//                   to={link.path}
//                   className={({ isActive }) =>
//                     `no-underline transition-colors ${
//                       isActive
//                         ? "text-[#D49B00]"
//                         : "text-[#0B2A4A] hover:text-[#D49B00]"
//                     }`
//                   }
//                 >
//                   {link.name}
//                 </NavLink>
//               );
//             })}
//           </nav>

//           {/* RIGHT SIDE */}
//           <div className="flex items-center gap-3">
//             <button
//               type="button"
//               onClick={openModal}
//               className="hidden items-center gap-2 rounded-full bg-[#F5B800] px-4 py-2 font-bold text-black transition hover:bg-yellow-400 sm:flex md:px-5"
//             >
//               <IoMdDownload size={20} />
//               Brochure
//             </button>

//             {/* MOBILE MENU BUTTON */}
//             <button
//               type="button"
//               aria-label="Toggle navigation menu"
//               aria-expanded={isOpen}
//               className="text-[#0B2A4A] lg:hidden"
//               onClick={() => setIsOpen(!isOpen)}
//             >
//               {isOpen ? (
//                 <HiX size={28} />
//               ) : (
//                 <HiOutlineMenuAlt3 size={28} />
//               )}
//             </button>
//           </div>
//         </div>

//         {/* MOBILE MENU */}
//         <div
//           className={`overflow-hidden bg-[#0B2A4A] transition-all duration-300 lg:hidden ${
//             isOpen ? "max-h-[600px] opacity-100" : "max-h-0 opacity-0"
//           }`}
//         >
//           <nav className="flex flex-col gap-4 p-6">
//             {navLinks.map((link) => (
//               <div key={link.name}>
//                 {!link.dropdown && (
//                   <NavLink
//                     to={link.path}
//                     onClick={() => setIsOpen(false)}
//                     className="text-lg text-white no-underline hover:text-[#F5B800]"
//                   >
//                     {link.name}
//                   </NavLink>
//                 )}

//                 {link.dropdown && (
//                   <div>
//                     <p className="m-0 font-bold text-[#F5B800]">
//                       {link.name}
//                     </p>

//                     <div className="ml-4 mt-2 flex flex-col gap-3">
//                       {link.dropdown.map((item) => (
//                         <NavLink
//                           key={item.name}
//                           to={item.path}
//                           onClick={() => setIsOpen(false)}
//                           className="text-white no-underline hover:text-[#F5B800]"
//                         >
//                           {item.name}
//                         </NavLink>
//                       ))}
//                     </div>
//                   </div>
//                 )}
//               </div>
//             ))}

//             <button
//               type="button"
//               onClick={openModal}
//               className="mt-3 flex items-center justify-center gap-2 rounded-lg bg-[#F5B800] px-4 py-3 font-bold text-black"
//             >
//               <IoMdDownload size={20} />
//               Download Brochure
//             </button>
//           </nav>
//         </div>
//       </header>

//       {/* CENTERED INQUIRY MODAL */}
//       {showModal &&
//         createPortal(
//           <div
//             className="fixed inset-0 z-[99999] flex items-center justify-center overflow-y-auto bg-black/60 p-3 backdrop-blur-sm sm:p-5"
//             onMouseDown={(event) => {
//               if (event.target === event.currentTarget) closeModal();
//             }}
//           >
//             <div
//               role="dialog"
//               aria-modal="true"
//               aria-labelledby="brochure-modal-title"
//               className="relative my-auto flex max-h-[92dvh] w-full max-w-5xl flex-col overflow-y-auto rounded-xl bg-white shadow-2xl md:flex-row md:overflow-hidden"
//             >
//               {/* CLOSE BUTTON */}
//               <button
//                 type="button"
//                 onClick={closeModal}
//                 aria-label="Close inquiry form"
//                 className="absolute right-3 top-3 z-30 flex h-10 w-10 items-center justify-center rounded-full bg-white text-gray-700 shadow-md transition hover:bg-gray-100"
//               >
//                 <HiX size={24} />
//               </button>

//               {/* LEFT IMAGE SECTION */}
//               <div className="hidden w-[40%] shrink-0 items-center justify-center bg-[#002D3A] p-6 md:flex lg:p-8">
//                 <img
//                   src={vector}
//                   alt="Text translation services"
//                   className="h-auto max-h-[75vh] w-full max-w-sm object-contain"
//                   loading="eager"
//                 />
//               </div>

//               {/* RIGHT FORM SECTION */}
//               <div className="w-full bg-[#FAFAFA] px-5 py-12 sm:px-8 md:w-[60%] md:overflow-y-auto md:px-10 md:py-9">
//                 <h2
//                   id="brochure-modal-title"
//                   className="mb-6 pr-8 text-2xl font-bold leading-snug text-[#0B2A4A] sm:text-3xl"
//                 >
//                   Inquiry Now. Our Team Will Contact You Shortly!
//                 </h2>

//                 <form
//                   className="space-y-4"
//                   onSubmit={(event) => {
//                     event.preventDefault();

//                     const formData = new FormData(event.currentTarget);
//                     const name = formData.get("name");
//                     const email = formData.get("email");
//                     const phone = formData.get("phone");
//                     const subject = formData.get("subject");
//                     const message = formData.get("message");

//                     const mailto = `mailto:info@akshartaxconsultancy.in?subject=${encodeURIComponent(
//                       subject || "Brochure Inquiry"
//                     )}&body=${encodeURIComponent(
//                       `Name: ${name}\nEmail: ${email}\nPhone: ${
//                         phone || "Not provided"
//                       }\n\nMessage:\n${message}`
//                     )}`;

//                     window.location.href = mailto;
//                   }}
//                 >
//                   {/* NAME AND EMAIL */}
//                   <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
//                     <input
//                       type="text"
//                       name="name"
//                       placeholder="Your Name"
//                       aria-label="Your Name"
//                       autoComplete="name"
//                       required
//                       className="w-full min-w-0 border border-gray-200 bg-white px-4 py-3.5 text-base text-gray-700 shadow-sm outline-none transition focus:border-[#0B2A4A] focus:ring-1 focus:ring-[#0B2A4A]"
//                     />

//                     <input
//                       type="email"
//                       name="email"
//                       placeholder="Email Address"
//                       aria-label="Email Address"
//                       autoComplete="email"
//                       required
//                       className="w-full min-w-0 border border-gray-200 bg-white px-4 py-3.5 text-base text-gray-700 shadow-sm outline-none transition focus:border-[#0B2A4A] focus:ring-1 focus:ring-[#0B2A4A]"
//                     />

//                     <input
//                       type="tel"
//                       name="phone"
//                       placeholder="Contact Details"
//                       aria-label="Contact Details"
//                       autoComplete="tel"
//                       className="w-full min-w-0 border border-gray-200 bg-white px-4 py-3.5 text-base text-gray-700 shadow-sm outline-none transition focus:border-[#0B2A4A] focus:ring-1 focus:ring-[#0B2A4A]"
//                     />

//                     <input
//                       type="text"
//                       name="subject"
//                       placeholder="Your Subject"
//                       aria-label="Your Subject"
                    
//                       required
//                       className="w-full min-w-0 border border-gray-200 bg-white px-4 py-3.5 text-base text-gray-700 shadow-sm outline-none transition focus:border-[#0B2A4A] focus:ring-1 focus:ring-[#0B2A4A]"
//                     />
//                   </div>

//                   {/* MESSAGE */}
//                   <textarea
//                     name="message"
//                     placeholder="Message"
//                     aria-label="Message"
//                     rows={4}
//                     required
//                     className="w-full resize-y border border-gray-200 bg-white px-4 py-3 text-base text-gray-700 shadow-sm outline-none transition focus:border-[#0B2A4A] focus:ring-1 focus:ring-[#0B2A4A]"
//                   />

//                   {/* SUBMIT BUTTON */}
//                   <button
//                     type="submit"
//                     className="rounded-md bg-[#0B2A4A] px-7 py-3.5 font-bold text-white transition hover:bg-[#0A1F3A]"
//                   >
//                     SEND INQUIRY
//                   </button>
//                 </form>
          
//               </div>
//             </div>
//           </div>,
//           document.body
//         )}
//     </>
//   );
// };

// export default Header;

import React, { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import { NavLink } from "react-router-dom";
import { HiOutlineMenuAlt3, HiX } from "react-icons/hi";
import { IoMdDownload } from "react-icons/io";
import { FaChevronDown } from "react-icons/fa";
import logo from "../assets/logo.png";
import vector from "../assets/Contact-Us-Vector.webp";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [isClosing, setIsClosing] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Header scroll effect
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock background scroll while modal is open
  useEffect(() => {
    if (!showModal) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const handleEscape = (event) => {
      if (event.key === "Escape") closeModal();
    };

    window.addEventListener("keydown", handleEscape);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleEscape);
    };
  }, [showModal, isClosing]);

  // Navigation links
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

  const openModal = () => {
    setIsOpen(false);
    setIsClosing(false);
    setShowModal(true);
  };

  const closeModal = () => {
    if (isClosing) return;

    setIsClosing(true);

    window.setTimeout(() => {
      setShowModal(false);
      setIsClosing(false);
    }, 350);
  };

  return (
    <>
      {/* HEADER */}
      <header
        className={`fixed left-0 top-0 z-50 w-full bg-white/90 backdrop-blur-lg transition-all duration-300 ${
          scrolled ? "shadow-lg" : "shadow-md"
        }`}
      >
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6">
          {/* LOGO */}
          <NavLink to="/" className="flex shrink-0 items-center">
            <img
              src={logo}
              alt="Akshar Tax Consultancy Logo"
              className="h-auto w-[150px] object-contain sm:w-[190px] md:w-[220px]"
            />
          </NavLink>

          {/* DESKTOP NAVIGATION */}
          <nav className="hidden items-center gap-6 font-semibold lg:flex xl:gap-8">
            {navLinks.map((link) => {
              if (link.dropdown) {
                return (
                  <div key={link.name} className="group relative">
                    <div className="flex cursor-pointer items-center gap-2 py-6 text-[#0B2A4A] transition hover:text-[#D49B00]">
                      {link.name}
                      <FaChevronDown
                        size={12}
                        className="transition-transform duration-300 group-hover:rotate-180"
                      />
                    </div>

                    <div className="invisible absolute left-1/2 top-[80%] z-50 w-64 -translate-x-1/2 pt-4 opacity-0 transition-all duration-300 group-hover:visible group-hover:opacity-100">
                      <div className="relative rounded-xl border border-gray-100 bg-white p-2 shadow-2xl">
                        <div className="absolute -top-2 left-1/2 h-4 w-4 -translate-x-1/2 rotate-45 border-l border-t border-gray-100 bg-white" />

                        {link.dropdown.map((item) => (
                          <NavLink
                            key={item.name}
                            to={item.path}
                            className="group/item flex items-center justify-between rounded-lg px-4 py-3 text-gray-700 no-underline transition hover:bg-[#F5B800] hover:text-black"
                          >
                            <span>{item.name}</span>
                            <span className="opacity-0 transition group-hover/item:opacity-100">
                              →
                            </span>
                          </NavLink>
                        ))}
                      </div>
                    </div>
                  </div>
                );
              }

              return (
                <NavLink
                  key={link.name}
                  to={link.path}
                  className={({ isActive }) =>
                    `no-underline transition-colors ${
                      isActive
                        ? "text-[#D49B00]"
                        : "text-[#0B2A4A] hover:text-[#D49B00]"
                    }`
                  }
                >
                  {link.name}
                </NavLink>
              );
            })}
          </nav>

          {/* DESKTOP BROCHURE BUTTON + MOBILE MENU BUTTON */}
          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={openModal}
              className="hidden items-center gap-2 rounded-full bg-[#F5B800] px-4 py-2 font-bold text-black transition hover:bg-yellow-400 sm:flex md:px-5"
            >
              <IoMdDownload size={20} />
              Brochure
            </button>

            <button
              type="button"
              aria-label="Toggle navigation menu"
              aria-expanded={isOpen}
              className="text-[#0B2A4A] lg:hidden"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? (
                <HiX size={28} />
              ) : (
                <HiOutlineMenuAlt3 size={28} />
              )}
            </button>
          </div>
        </div>

        {/* MOBILE MENU */}
        <div
          className={`overflow-hidden bg-[#0B2A4A] transition-all duration-300 lg:hidden ${
            isOpen ? "max-h-[600px] opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <nav className="flex flex-col gap-4 p-6">
            {navLinks.map((link) => (
              <div key={link.name}>
                {!link.dropdown && (
                  <NavLink
                    to={link.path}
                    onClick={() => setIsOpen(false)}
                    className="text-lg text-white no-underline hover:text-[#F5B800]"
                  >
                    {link.name}
                  </NavLink>
                )}

                {link.dropdown && (
                  <div>
                    <p className="m-0 font-bold text-[#F5B800]">
                      {link.name}
                    </p>

                    <div className="ml-4 mt-2 flex flex-col gap-3">
                      {link.dropdown.map((item) => (
                        <NavLink
                          key={item.name}
                          to={item.path}
                          onClick={() => setIsOpen(false)}
                          className="text-white no-underline hover:text-[#F5B800]"
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
              type="button"
              onClick={openModal}
              className="mt-3 flex items-center justify-center gap-2 rounded-lg bg-[#F5B800] px-4 py-3 font-bold text-black"
            >
              <IoMdDownload size={20} />
              Download Brochure
            </button>
          </nav>
        </div>
      </header>

      {/* RESPONSIVE ANIMATED MODAL */}
      {showModal &&
        createPortal(
          <div
            className={`fixed inset-0 z-[99999] flex items-center justify-center overflow-y-auto bg-black/60 p-2 backdrop-blur-sm sm:p-4 ${
              isClosing
                ? "modal-backdrop-out"
                : "modal-backdrop-in"
            }`}
            onMouseDown={(event) => {
              if (event.target === event.currentTarget) closeModal();
            }}
          >
            <div
              role="dialog"
              aria-modal="true"
              aria-labelledby="brochure-modal-title"
              className={`relative my-auto flex max-h-[94dvh] w-full max-w-5xl flex-col overflow-y-auto rounded-xl bg-white shadow-2xl md:max-h-[90dvh] md:flex-row md:overflow-hidden ${
                isClosing
                  ? "modal-fade-out-down"
                  : "modal-fade-in-down"
              }`}
            >
              {/* CLOSE BUTTON */}
              <button
                type="button"
                onClick={closeModal}
                aria-label="Close inquiry form"
                className="absolute right-2 top-2 z-30 flex h-9 w-9 items-center justify-center rounded-full bg-white text-gray-700 shadow-md transition hover:bg-gray-100 sm:right-3 sm:top-3 sm:h-10 sm:w-10"
              >
                <HiX size={23} />
              </button>

              {/* IMAGE SECTION */}
              <div className="flex w-full shrink-0 items-center justify-center bg-[#002D3A] px-6 py-5 sm:px-10 md:w-[36%] md:py-8">
                <img
                  src={vector}
                  alt="Contact Akshar Tax Consultancy"
                  className="h-auto max-h-[150px] w-auto max-w-[180px] object-contain sm:max-h-[190px] sm:max-w-[220px] md:max-h-[65vh] md:max-w-full"
                />
              </div>

              {/* FORM SECTION */}
              <div className="w-full min-w-0 bg-[#FAFAFA] px-4 py-7 sm:px-7 sm:py-9 md:w-[64%] md:overflow-y-auto md:px-9 md:py-8">
                <h2
                  id="brochure-modal-title"
                  className="mb-5 pr-7 text-xl font-bold leading-snug text-[#0B2A4A] sm:mb-6 sm:text-2xl md:text-3xl"
                >
                  Inquiry Now. Our Team Will Contact You Shortly!
                </h2>

                <form
                  className="space-y-3 sm:space-y-4"
                  onSubmit={(event) => {
                    event.preventDefault();

                    const formData = new FormData(event.currentTarget);
                    const name = formData.get("name");
                    const email = formData.get("email");
                    const phone = formData.get("phone");
                    const subject = formData.get("subject");
                    const message = formData.get("message");

                    const mailto = `mailto:info@akshartaxconsultancy.in?subject=${encodeURIComponent(
                      subject || "Brochure Inquiry"
                    )}&body=${encodeURIComponent(
                      `Name: ${name}\nEmail: ${email}\nPhone: ${
                        phone || "Not provided"
                      }\n\nMessage:\n${message}`
                    )}`;

                    window.location.href = mailto;
                  }}
                >
                  {/* INPUT FIELDS */}
                  <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-4">
                    <input
                      type="text"
                      name="name"
                      placeholder="Your Name"
                      aria-label="Your Name"
                      autoComplete="name"
                      required
                      className="box-border w-full min-w-0 rounded-sm border border-gray-200 bg-white px-3 py-3 text-base text-gray-700 shadow-sm outline-none focus:border-[#0B2A4A] focus:ring-1 focus:ring-[#0B2A4A] sm:px-4 sm:py-3.5"
                    />

                    <input
                      type="email"
                      name="email"
                      placeholder="Email Address"
                      aria-label="Email Address"
                      autoComplete="email"
                      required
                      className="box-border w-full min-w-0 rounded-sm border border-gray-200 bg-white px-3 py-3 text-base text-gray-700 shadow-sm outline-none focus:border-[#0B2A4A] focus:ring-1 focus:ring-[#0B2A4A] sm:px-4 sm:py-3.5"
                    />

                    <input
                      type="tel"
                      name="phone"
                      placeholder="Contact Details"
                      aria-label="Contact Details"
                      autoComplete="tel"
                      className="box-border w-full min-w-0 rounded-sm border border-gray-200 bg-white px-3 py-3 text-base text-gray-700 shadow-sm outline-none focus:border-[#0B2A4A] focus:ring-1 focus:ring-[#0B2A4A] sm:px-4 sm:py-3.5"
                    />

                    <input
                      type="text"
                      name="subject"
                      placeholder="Your Subject"
                      aria-label="Your Subject"
                      
                      required
                      className="box-border w-full min-w-0 rounded-sm border border-gray-200 bg-white px-3 py-3 text-base text-gray-700 shadow-sm outline-none focus:border-[#0B2A4A] focus:ring-1 focus:ring-[#0B2A4A] sm:px-4 sm:py-3.5"
                    />
                  </div>

                  {/* MESSAGE */}
                  <textarea
                    name="message"
                    placeholder="Message"
                    aria-label="Message"
                    rows={3}
                    required
                    className="box-border block w-full min-w-0 resize-y rounded-sm border border-gray-200 bg-white px-3 py-3 text-base text-gray-700 shadow-sm outline-none focus:border-[#0B2A4A] focus:ring-1 focus:ring-[#0B2A4A] sm:px-4"
                  />

                  {/* SUBMIT BUTTON */}
                  <button
                    type="submit"
                    className="w-full rounded-md bg-[#0B2A4A] px-5 py-3 font-bold text-white transition hover:bg-[#0A1F3A] sm:w-auto sm:px-7 sm:py-3.5"
                  >
                    SEND INQUIRY
                  </button>
                </form>

               
                
              </div>
            </div>
          </div>,
          document.body
        )}
    </>
  );
};

export default Header;
