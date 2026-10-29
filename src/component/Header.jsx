// import React, { useState, useEffect } from "react";
// import { createPortal } from "react-dom";
// import { NavLink } from "react-router-dom";
// import { HiOutlineMenuAlt3, HiX } from "react-icons/hi";
// import { IoMdDownload } from "react-icons/io";
// import { FaChevronDown } from "react-icons/fa";
// import logo from "../assets/logo.png";
// import vector from "../assets/Contact-Us-Vector.webp";

// const Header = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const [showModal, setShowModal] = useState(false);
//   const [animateIn, setAnimateIn] = useState(false);
//   const [scrolled, setScrolled] = useState(false);

//   // Form submission and inline message states
//   const [isSubmitting, setIsSubmitting] = useState(false);
//   const [statusMessage, setStatusMessage] = useState({ type: "", text: "" });

//   // Header scroll effect
//   useEffect(() => {
//     const handleScroll = () => setScrolled(window.scrollY > 20);
//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   // Lock background scroll when modal is open
//   useEffect(() => {
//     if (!showModal) return;

//     const previousOverflow = document.body.style.overflow;
//     document.body.style.overflow = "hidden";

//     const handleEscape = (event) => {
//       if (event.key === "Escape") closeModal();
//     };

//     window.addEventListener("keydown", handleEscape);

//     return () => {
//       document.body.style.overflow = previousOverflow;
//       window.removeEventListener("keydown", handleEscape);
//     };
//   }, [showModal]);

//   // Open modal with smooth Tailwind entrance
//   const openModal = () => {
//     setIsOpen(false);
//     setStatusMessage({ type: "", text: "" });
//     setShowModal(true);
//     setTimeout(() => {
//       setAnimateIn(true);
//     }, 20);
//   };

//   // Close modal with smooth Tailwind exit
//   const closeModal = () => {
//     setAnimateIn(false);
//     setTimeout(() => {
//       setShowModal(false);
//       setStatusMessage({ type: "", text: "" });
//     }, 300);
//   };

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

//   const handleSubmit = async (event) => {
//     event.preventDefault();
//     setIsSubmitting(true);
//     setStatusMessage({ type: "", text: "" });

//     const formElement = event.currentTarget;
//     const formData = new FormData(formElement);

//     // તમારી Web3Forms Access Key
//     formData.append("access_key", "e25a4771-1394-4f98-96e0-badcdd4f8e79");
//     formData.append("from_name", "Akshar Tax Consultancy Website");
//     formData.append("subject", "New Brochure / Service Inquiry Received");

//     try {
//       const response = await fetch("https://api.web3forms.com/submit", {
//         method: "POST",
//         body: formData,
//       });

//       const data = await response.json();

//       if (data.success) {
//         setStatusMessage({
//           type: "success",
//           text: "Thank you! Your inquiry has been submitted successfully.",
//         });
//         formElement.reset();

//         setTimeout(() => {
//           closeModal();
//         }, 3000);
//       } else {
//         setStatusMessage({
//           type: "error",
//           text: data.message || "Something went wrong. Please try again.",
//         });
//       }
//     } catch (error) {
//       setStatusMessage({
//         type: "error",
//         text: "Network error: Unable to submit. Please check your connection.",
//       });
//     } finally {
//       setIsSubmitting(false);
//     }
//   };

//   return (
//     <>
//       {/* HEADER */}
//       <header
//         className={`fixed left-0 top-0 z-50 w-full bg-white/90 backdrop-blur-lg transition-all duration-300 ${
//           scrolled ? "shadow-lg" : "shadow-md"
//         }`}
//       >
//         <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6">
//           <NavLink to="/" className="flex shrink-0 items-center">
//             <img
//               src={logo}
//               alt="Akshar Tax Consultancy Logo"
//               className="h-auto w-[150px] object-contain sm:w-[190px] md:w-[220px]"
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

//           {/* BUTTONS */}
//           <div className="flex items-center gap-3">
//             <button
//               type="button"
//               onClick={openModal}
//               className="hidden items-center gap-2 rounded-full bg-[#F5B800] px-4 py-2 font-bold text-black transition hover:bg-yellow-400 sm:flex md:px-5"
//             >
//               <IoMdDownload size={20} />
//               Brochure
//             </button>

//             <button
//               type="button"
//               aria-label="Toggle navigation menu"
//               aria-expanded={isOpen}
//               className="text-[#0B2A4A] lg:hidden"
//               onClick={() => setIsOpen(!isOpen)}
//             >
//               {isOpen ? <HiX size={28} /> : <HiOutlineMenuAlt3 size={28} />}
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
//                     <p className="m-0 font-bold text-[#F5B800]">{link.name}</p>
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

//       {/* TAILWIND ANIMATED MODAL PORTAL */}
//       {showModal &&
//         createPortal(
//           <div
//             className={`fixed inset-0 z-[99999] flex items-center justify-center overflow-y-auto bg-black/60 p-2 backdrop-blur-sm transition-opacity duration-300 ease-out sm:p-4 ${
//               animateIn ? "opacity-100" : "opacity-0"
//             }`}
//             onMouseDown={(event) => {
//               if (event.target === event.currentTarget) closeModal();
//             }}
//           >
//             {/* MODAL CONTAINER */}
//             <div
//               role="dialog"
//               aria-modal="true"
//               aria-labelledby="brochure-modal-title"
//               className={`relative my-auto flex max-h-[94dvh] w-full max-w-5xl flex-col overflow-y-auto rounded-xl bg-white shadow-2xl transition-all duration-300 ease-out md:max-h-[90dvh] md:flex-row md:overflow-hidden ${
//                 animateIn
//                   ? "scale-100 translate-y-0 opacity-100"
//                   : "scale-95 -translate-y-4 opacity-0"
//               }`}
//             >
//               {/* CLOSE BUTTON */}
//               <button
//                 type="button"
//                 onClick={closeModal}
//                 aria-label="Close inquiry form"
//                 className="absolute right-2 top-2 z-30 flex h-9 w-9 items-center justify-center rounded-full bg-white text-gray-700 shadow-md transition hover:bg-gray-100 sm:right-3 sm:top-3 sm:h-10 sm:w-10"
//               >
//                 <HiX size={23} />
//               </button>

//               {/* IMAGE SECTION */}
//               <div className="flex w-full shrink-0 items-center justify-center bg-[#002D3A] px-6 py-5 sm:px-10 md:w-[36%] md:py-8">
//                 <img
//                   src={vector}
//                   alt="Contact Akshar Tax Consultancy"
//                   className="h-auto max-h-[150px] w-auto max-w-[180px] object-contain sm:max-h-[190px] sm:max-w-[220px] md:max-h-[65vh] md:max-w-full"
//                 />
//               </div>

//               {/* FORM SECTION */}
//               <div className="w-full min-w-0 bg-[#FAFAFA] px-4 py-7 sm:px-7 sm:py-9 md:w-[64%] md:overflow-y-auto md:px-9 md:py-8">
//                 <h2
//                   id="brochure-modal-title"
//                   className="mb-5 pr-7 text-xl font-bold leading-snug text-[#0B2A4A] sm:mb-6 sm:text-2xl md:text-3xl"
//                 >
//                   Inquiry Now. Our Team Will Contact You Shortly!
//                 </h2>

//                 <form className="space-y-3 sm:space-y-4" onSubmit={handleSubmit}>
//                   {/* INPUT FIELDS */}
//                   <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-4">
//                     <input
//                       type="text"
//                       name="name"
//                       placeholder="Your Name"
//                       aria-label="Your Name"
//                       autoComplete="name"
//                       required
//                       className="box-border w-full min-w-0 rounded-sm border border-gray-200 bg-white px-3 py-3 text-base text-gray-700 shadow-sm outline-none transition focus:border-[#0B2A4A] focus:ring-1 focus:ring-[#0B2A4A] sm:px-4 sm:py-3.5"
//                     />

//                     <input
//                       type="email"
//                       name="email"
//                       placeholder="Email Address"
//                       aria-label="Email Address"
//                       autoComplete="email"
//                       required
//                       className="box-border w-full min-w-0 rounded-sm border border-gray-200 bg-white px-3 py-3 text-base text-gray-700 shadow-sm outline-none transition focus:border-[#0B2A4A] focus:ring-1 focus:ring-[#0B2A4A] sm:px-4 sm:py-3.5"
//                     />

//                     <input
//                       type="tel"
//                       name="phone"
//                       placeholder="Contact Details"
//                       aria-label="Contact Details"
//                       autoComplete="tel"
//                       className="box-border w-full min-w-0 rounded-sm border border-gray-200 bg-white px-3 py-3 text-base text-gray-700 shadow-sm outline-none transition focus:border-[#0B2A4A] focus:ring-1 focus:ring-[#0B2A4A] sm:px-4 sm:py-3.5"
//                     />

//                     <input
//                       type="text"
//                       name="subject"
//                       placeholder="Your Subject"
//                       aria-label="Your Subject"
//                       required
//                       className="box-border w-full min-w-0 rounded-sm border border-gray-200 bg-white px-3 py-3 text-base text-gray-700 shadow-sm outline-none transition focus:border-[#0B2A4A] focus:ring-1 focus:ring-[#0B2A4A] sm:px-4 sm:py-3.5"
//                     />
//                   </div>

//                   {/* MESSAGE TEXTAREA */}
//                   <textarea
//                     name="message"
//                     placeholder="Message"
//                     aria-label="Message"
//                     rows={3}
//                     required
//                     className="box-border block w-full min-w-0 resize-y rounded-sm border border-gray-200 bg-white px-3 py-3 text-base text-gray-700 shadow-sm outline-none transition focus:border-[#0B2A4A] focus:ring-1 focus:ring-[#0B2A4A] sm:px-4"
//                   />

//                   {/* INLINE STATUS MESSAGE */}
//                   {statusMessage.text && (
//                     <div
//                       className={`flex items-center gap-2 rounded-md p-3 text-sm font-medium transition-all duration-300 ${
//                         statusMessage.type === "success"
//                           ? "border border-green-200 bg-green-50 text-green-800"
//                           : "border border-red-200 bg-red-50 text-red-800"
//                       }`}
//                     >
//                       <span className="text-base font-bold">
//                         {statusMessage.type === "success" ? "✓" : "⚠"}
//                       </span>
//                       <span>{statusMessage.text}</span>
//                     </div>
//                   )}

//                   {/* SUBMIT BUTTON */}
//                   <button
//                     type="submit"
//                     disabled={isSubmitting}
//                     className="w-full rounded-md bg-[#0B2A4A] px-5 py-3 font-bold text-white transition-all duration-200 hover:bg-[#0A1F3A] disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto sm:px-7 sm:py-3.5"
//                   >
//                     {isSubmitting ? "SENDING..." : "SEND INQUIRY"}
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
// import React, { useState, useEffect } from "react";
// import { createPortal } from "react-dom";
// import { NavLink } from "react-router-dom";
// import { HiOutlineMenuAlt3, HiX } from "react-icons/hi";
// import { IoMdDownload } from "react-icons/io";
// import { FaChevronDown } from "react-icons/fa";
// import logo from "../assets/logo.png";
// import vector from "../assets/Contact-Us-Vector.webp";

// const Header = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const [showModal, setShowModal] = useState(false);
//   const [animateIn, setAnimateIn] = useState(false);
//   const [scrolled, setScrolled] = useState(false);

//   // Form submission and inline message states
//   const [isSubmitting, setIsSubmitting] = useState(false);
//   const [statusMessage, setStatusMessage] = useState({ type: "", text: "" });

//   // Header scroll effect (for desktop/large screens)
//   useEffect(() => {
//     const handleScroll = () => setScrolled(window.scrollY > 20);
//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   // Lock background scroll when modal is open
//   useEffect(() => {
//     if (!showModal) return;

//     const previousOverflow = document.body.style.overflow;
//     document.body.style.overflow = "hidden";

//     const handleEscape = (event) => {
//       if (event.key === "Escape") closeModal();
//     };

//     window.addEventListener("keydown", handleEscape);

//     return () => {
//       document.body.style.overflow = previousOverflow;
//       window.removeEventListener("keydown", handleEscape);
//     };
//   }, [showModal]);

//   // Open modal
//   const openModal = () => {
//     setIsOpen(false);
//     setStatusMessage({ type: "", text: "" });
//     setShowModal(true);
//     setTimeout(() => {
//       setAnimateIn(true);
//     }, 20);
//   };

//   // Close modal
//   const closeModal = () => {
//     setAnimateIn(false);
//     setTimeout(() => {
//       setShowModal(false);
//       setStatusMessage({ type: "", text: "" });
//     }, 300);
//   };

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

//   const handleSubmit = async (event) => {
//     event.preventDefault();
//     setIsSubmitting(true);
//     setStatusMessage({ type: "", text: "" });

//     const formElement = event.currentTarget;
//     const formData = new FormData(formElement);

//     formData.append("access_key", "e25a4771-1394-4f98-96e0-badcdd4f8e79");
//     formData.append("from_name", "Akshar Tax Consultancy Website");
//     formData.append("subject", "New Brochure / Service Inquiry Received");

//     try {
//       const response = await fetch("https://api.web3forms.com/submit", {
//         method: "POST",
//         body: formData,
//       });

//       const data = await response.json();

//       if (data.success) {
//         setStatusMessage({
//           type: "success",
//           text: "Thank you! Your inquiry has been submitted successfully.",
//         });
//         formElement.reset();

//         setTimeout(() => {
//           closeModal();
//         }, 2500);
//       } else {
//         setStatusMessage({
//           type: "error",
//           text: data.message || "Something went wrong. Please try again.",
//         });
//       }
//     } catch (error) {
//       setStatusMessage({
//         type: "error",
//         text: "Network error: Unable to submit. Please check your connection.",
//       });
//     } finally {
//       setIsSubmitting(false);
//     }
//   };

//   return (
//     <>
//       {/* HEADER: મોબાઈલમાં relative (સાથે સ્ક્રોલ થઈ જશે) અને મોટી સ્ક્રીન પર fixed (સ્ટીકી) */}
//       <header
//         className={`relative z-50 w-full bg-white/95 backdrop-blur-md transition-all duration-300 lg:fixed lg:left-0 lg:top-0 ${
//           scrolled ? "shadow-md lg:shadow-lg" : "shadow-sm lg:shadow-md"
//         }`}
//       >
//         <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6">
//           <NavLink to="/" className="flex shrink-0 items-center">
//             <img
//               src={logo}
//               alt="Akshar Tax Consultancy Logo"
//               className="h-auto w-[150px] object-contain sm:w-[190px] md:w-[220px]"
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

//           {/* BUTTONS */}
//           <div className="flex items-center gap-3">
//             <button
//               type="button"
//               onClick={openModal}
//               className="hidden items-center gap-2 rounded-full bg-[#F5B800] px-4 py-2 font-bold text-black transition hover:bg-yellow-400 sm:flex md:px-5"
//             >
//               <IoMdDownload size={20} />
//               Brochure
//             </button>

//             <button
//               type="button"
//               aria-label="Toggle navigation menu"
//               aria-expanded={isOpen}
//               className="rounded-md p-1.5 text-[#0B2A4A] transition hover:bg-gray-100 lg:hidden"
//               onClick={() => setIsOpen(!isOpen)}
//             >
//               {isOpen ? <HiX size={28} /> : <HiOutlineMenuAlt3 size={28} />}
//             </button>
//           </div>
//         </div>

//         {/* MOBILE MENU */}
//         <div
//           className={`overflow-hidden bg-[#0B2A4A] transition-all duration-300 lg:hidden ${
//             isOpen ? "max-h-[600px] opacity-100" : "max-h-0 opacity-0"
//           }`}
//         >
//           <nav className="flex flex-col gap-4 p-5 sm:p-6">
//             {navLinks.map((link) => (
//               <div key={link.name}>
//                 {!link.dropdown && (
//                   <NavLink
//                     to={link.path}
//                     onClick={() => setIsOpen(false)}
//                     className="block text-lg font-medium text-white no-underline transition hover:text-[#F5B800]"
//                   >
//                     {link.name}
//                   </NavLink>
//                 )}

//                 {link.dropdown && (
//                   <div>
//                     <p className="m-0 font-bold text-[#F5B800]">{link.name}</p>
//                     <div className="ml-3 mt-2 flex flex-col gap-2 border-l border-white/20 pl-3">
//                       {link.dropdown.map((item) => (
//                         <NavLink
//                           key={item.name}
//                           to={item.path}
//                           onClick={() => setIsOpen(false)}
//                           className="text-base text-gray-200 no-underline transition hover:text-[#F5B800]"
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
//               className="mt-2 flex w-full items-center justify-center gap-2 rounded-lg bg-[#F5B800] px-4 py-3 font-bold text-black active:scale-[0.99]"
//             >
//               <IoMdDownload size={20} />
//               Download Brochure
//             </button>
//           </nav>
//         </div>
//       </header>

//       {/* MODAL PORTAL: Fully Responsive & Mobile-Optimized */}
//       {showModal &&
//         createPortal(
//           <div
//             className={`fixed inset-0 z-[99999] flex items-end justify-center bg-black/60 p-0 backdrop-blur-sm transition-opacity duration-300 ease-out sm:items-center sm:p-4 ${
//               animateIn ? "opacity-100" : "opacity-0"
//             }`}
//             onMouseDown={(event) => {
//               if (event.target === event.currentTarget) closeModal();
//             }}
//           >
//             {/* MODAL CONTAINER */}
//             <div
//               role="dialog"
//               aria-modal="true"
//               aria-labelledby="brochure-modal-title"
//               className={`relative flex max-h-[92vh] w-full max-w-4xl flex-col rounded-t-2xl bg-white shadow-2xl transition-all duration-300 ease-out sm:max-h-[88vh] sm:rounded-2xl md:flex-row md:overflow-hidden ${
//                 animateIn
//                   ? "translate-y-0 scale-100 opacity-100"
//                   : "translate-y-8 scale-95 opacity-0 sm:translate-y-0"
//               }`}
//             >
//               {/* CLOSE BUTTON */}
//               <button
//                 type="button"
//                 onClick={closeModal}
//                 aria-label="Close inquiry form"
//                 className="absolute right-3 top-3 z-30 flex h-8 w-8 items-center justify-center rounded-full bg-white/90 text-gray-700 shadow transition hover:bg-white active:scale-95 sm:h-9 sm:w-9"
//               >
//                 <HiX size={20} />
//               </button>

//               {/* IMAGE / BRAND PANEL */}
//               <div className="flex w-full shrink-0 items-center justify-center bg-[#002D3A] px-4 py-4 sm:px-6 md:w-[35%] md:flex-col md:justify-center md:py-8">
//                 <img
//                   src={vector}
//                   alt="Contact Akshar Tax Consultancy"
//                   className="h-14 w-auto object-contain sm:h-20 md:h-auto md:max-h-[220px] md:w-full"
//                 />
//                 <p className="ml-3 text-xs font-medium text-gray-300 md:ml-0 md:mt-4 md:text-center md:text-sm">
//                   Quick Support & Expert Tax Consultation
//                 </p>
//               </div>

//               {/* FORM SECTION */}
//               <div className="w-full flex-1 overflow-y-auto bg-[#FAFAFA] p-5 sm:p-7 md:p-8">
//                 <h2
//                   id="brochure-modal-title"
//                   className="mb-1 pr-6 text-lg font-bold text-[#0B2A4A] sm:text-xl md:text-2xl"
//                 >
//                   Inquiry Now
//                 </h2>
//                 <p className="mb-4 text-xs text-gray-500 sm:text-sm">
//                   Fill in your details, our team will get in touch shortly.
//                 </p>

//                 <form className="space-y-3" onSubmit={handleSubmit}>
//                   {/* FORM INPUTS */}
//                   <div className="grid grid-cols-1 gap-2.5 sm:grid-cols-2 sm:gap-3">
//                     <div>
//                       <input
//                         type="text"
//                         name="name"
//                         placeholder="Your Name *"
//                         aria-label="Your Name"
//                         autoComplete="name"
//                         required
//                         className="w-full rounded-md border border-gray-300 bg-white px-3.5 py-2.5 text-sm text-gray-800 placeholder-gray-400 outline-none transition focus:border-[#0B2A4A] focus:ring-1 focus:ring-[#0B2A4A]"
//                       />
//                     </div>

//                     <div>
//                       <input
//                         type="email"
//                         name="email"
//                         placeholder="Email Address *"
//                         aria-label="Email Address"
//                         autoComplete="email"
//                         required
//                         className="w-full rounded-md border border-gray-300 bg-white px-3.5 py-2.5 text-sm text-gray-800 placeholder-gray-400 outline-none transition focus:border-[#0B2A4A] focus:ring-1 focus:ring-[#0B2A4A]"
//                       />
//                     </div>

//                     <div>
//                       <input
//                         type="tel"
//                         name="phone"
//                         placeholder="Contact Number *"
//                         aria-label="Contact Number"
//                         autoComplete="tel"
//                         required
//                         className="w-full rounded-md border border-gray-300 bg-white px-3.5 py-2.5 text-sm text-gray-800 placeholder-gray-400 outline-none transition focus:border-[#0B2A4A] focus:ring-1 focus:ring-[#0B2A4A]"
//                       />
//                     </div>

//                     <div>
//                       <input
//                         type="text"
//                         name="subject"
//                         placeholder="Service Needed *"
//                         aria-label="Service Needed"
//                         required
//                         className="w-full rounded-md border border-gray-300 bg-white px-3.5 py-2.5 text-sm text-gray-800 placeholder-gray-400 outline-none transition focus:border-[#0B2A4A] focus:ring-1 focus:ring-[#0B2A4A]"
//                       />
//                     </div>
//                   </div>

//                   {/* MESSAGE TEXTAREA */}
//                   <textarea
//                     name="message"
//                     placeholder="Brief description of your query..."
//                     aria-label="Message"
//                     rows={3}
//                     required
//                     className="w-full resize-none rounded-md border border-gray-300 bg-white px-3.5 py-2.5 text-sm text-gray-800 placeholder-gray-400 outline-none transition focus:border-[#0B2A4A] focus:ring-1 focus:ring-[#0B2A4A]"
//                   />

//                   {/* INLINE STATUS MESSAGE */}
//                   {statusMessage.text && (
//                     <div
//                       className={`flex items-center gap-2 rounded-md p-2.5 text-xs font-medium transition-all sm:text-sm ${
//                         statusMessage.type === "success"
//                           ? "border border-green-200 bg-green-50 text-green-800"
//                           : "border border-red-200 bg-red-50 text-red-800"
//                       }`}
//                     >
//                       <span className="font-bold">
//                         {statusMessage.type === "success" ? "✓" : "⚠"}
//                       </span>
//                       <span>{statusMessage.text}</span>
//                     </div>
//                   )}

//                   {/* SUBMIT BUTTON */}
//                   <button
//                     type="submit"
//                     disabled={isSubmitting}
//                     className="flex w-full items-center justify-center rounded-md bg-[#0B2A4A] py-3 text-sm font-semibold tracking-wide text-white transition hover:bg-[#0A1F3A] active:scale-[0.99] disabled:cursor-not-allowed disabled:opacity-60"
//                   >
//                     {isSubmitting ? "SENDING..." : "SUBMIT INQUIRY"}
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
  const [animateIn, setAnimateIn] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // ફક્ત મોબાઇલ માટે ક્લિક ડ્રોપડાઉન સ્ટેટ
  const [mobileCalcOpen, setMobileCalcOpen] = useState(false);

  // Form states
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [statusMessage, setStatusMessage] = useState({ type: "", text: "" });

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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
  }, [showModal]);

  const openModal = () => {
    setIsOpen(false);
    setStatusMessage({ type: "", text: "" });
    setShowModal(true);
    setTimeout(() => {
      setAnimateIn(true);
    }, 20);
  };

  const closeModal = () => {
    setAnimateIn(false);
    setTimeout(() => {
      setShowModal(false);
      setStatusMessage({ type: "", text: "" });
    }, 300);
  };

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

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsSubmitting(true);
    setStatusMessage({ type: "", text: "" });

    const formElement = event.currentTarget;
    const formData = new FormData(formElement);

    formData.append("access_key", "e25a4771-1394-4f98-96e0-badcdd4f8e79");
    formData.append("from_name", "Akshar Tax Consultancy Website");
    formData.append("subject", "New Brochure / Service Inquiry Received");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        setStatusMessage({
          type: "success",
          text: "Thank you! Your inquiry has been submitted successfully.",
        });
        formElement.reset();

        setTimeout(() => {
          closeModal();
        }, 2200);
      } else {
        setStatusMessage({
          type: "error",
          text: data.message || "Something went wrong. Please try again.",
        });
      }
    } catch (error) {
      setStatusMessage({
        type: "error",
        text: "Network error: Unable to submit. Please check your connection.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      {/* HEADER */}
      <header
        className={`relative z-50 w-full bg-white/95 backdrop-blur-md transition-all duration-300 lg:fixed lg:left-0 lg:top-0 ${
          scrolled ? "shadow-md lg:shadow-lg" : "shadow-sm lg:shadow-md"
        }`}
      >
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6">
          <NavLink to="/" className="flex shrink-0 items-center">
            <img
              src={logo}
              alt="Akshar Tax Consultancy Logo"
              className="h-auto w-[150px] object-contain sm:w-[190px] md:w-[220px]"
            />
          </NavLink>

          {/* DESKTOP NAVIGATION (Hover) */}
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

          {/* BUTTONS */}
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
              className="rounded-md p-1.5 text-[#0B2A4A] transition hover:bg-gray-100 lg:hidden"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <HiX size={28} /> : <HiOutlineMenuAlt3 size={28} />}
            </button>
          </div>
        </div>

        {/* MOBILE MENU */}
        <div
          className={`overflow-hidden bg-[#0B2A4A] transition-all duration-300 lg:hidden ${
            isOpen ? "max-h-[650px] opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <nav className="flex flex-col gap-4 p-5 sm:p-6">
            {navLinks.map((link) => (
              <div key={link.name}>
                {!link.dropdown && (
                  <NavLink
                    to={link.path}
                    onClick={() => setIsOpen(false)}
                    className="block text-lg font-medium text-white no-underline transition hover:text-[#F5B800]"
                  >
                    {link.name}
                  </NavLink>
                )}

                {/* MOBILE DROPDOWN (Click) */}
                {link.dropdown && (
                  <div>
                    <button
                      type="button"
                      onClick={() => setMobileCalcOpen((prev) => !prev)}
                      className="flex w-full items-center justify-between text-left text-lg font-bold text-[#F5B800] outline-none"
                    >
                      <span>{link.name}</span>
                      <FaChevronDown
                        size={14}
                        className={`transition-transform duration-300 ${
                          mobileCalcOpen ? "rotate-180" : "rotate-0"
                        }`}
                      />
                    </button>

                    {mobileCalcOpen && (
                      <div className="ml-2 mt-2 flex flex-col gap-2 border-l-2 border-[#F5B800]/40 pl-3">
                        {link.dropdown.map((item) => (
                          <NavLink
                            key={item.name}
                            to={item.path}
                            onClick={() => {
                              setIsOpen(false);
                              setMobileCalcOpen(false);
                            }}
                            className="py-1 text-base text-gray-200 no-underline transition hover:text-[#F5B800]"
                          >
                            {item.name}
                          </NavLink>
                        ))}
                      </div>
                    )}
                  </div>
                )}
              </div>
            ))}

            <button
              type="button"
              onClick={openModal}
              className="mt-2 flex w-full items-center justify-center gap-2 rounded-lg bg-[#F5B800] px-4 py-3 font-bold text-black active:scale-[0.99]"
            >
              <IoMdDownload size={20} />
              Download Brochure
            </button>
          </nav>
        </div>
      </header>

      {/* MODAL PORTAL: NON-SCROLLABLE, 50% INPUTS, LARGE VECTOR */}
      {showModal &&
        createPortal(
          <div
            className={`fixed inset-0 z-[99999] flex items-center justify-center bg-black/60 p-2 sm:p-4 backdrop-blur-sm transition-opacity duration-300 ease-out ${
              animateIn ? "opacity-100" : "opacity-0"
            }`}
            onMouseDown={(event) => {
              if (event.target === event.currentTarget) closeModal();
            }}
          >
            <div
              role="dialog"
              aria-modal="true"
              aria-labelledby="brochure-modal-title"
              className={`relative flex w-full max-w-4xl flex-col overflow-hidden rounded-2xl bg-white shadow-2xl transition-all duration-300 ease-out md:flex-row ${
                animateIn ? "scale-100 opacity-100" : "scale-95 opacity-0"
              }`}
            >
              {/* CLOSE BUTTON */}
              <button
                type="button"
                onClick={closeModal}
                aria-label="Close inquiry form"
                className="absolute right-3 top-3 z-30 flex h-8 w-8 items-center justify-center rounded-full bg-white/90 text-gray-700 shadow transition hover:bg-white active:scale-95 sm:h-9 sm:w-9"
              >
                <HiX size={20} />
              </button>

              {/* VECTOR SECTION: વેક્ટર મોટું અને પ્રોપર દેખાશે */}
              <div className="flex w-full shrink-0 flex-col items-center justify-center bg-[#002D3A] px-4 py-5 sm:py-6 md:w-[40%] md:p-6">
                <img
                  src={vector}
                  alt="Contact Akshar Tax Consultancy"
                  className="h-auto w-[180px] max-w-full object-contain sm:w-[220px] md:w-[270px]"
                />
                <p className="mt-2 text-center font-primary text-xs font-medium text-gray-300 sm:text-sm">
                  Quick Support & Expert Tax Guidance
                </p>
              </div>

              {/* FORM SECTION: Non-scrollable */}
              <div className="flex w-full flex-1 flex-col justify-center bg-[#FAFAFA] p-4 sm:p-6 md:p-7">
                <h2
                  id="brochure-modal-title"
                  className="mb-0.5 pr-6 font-primary text-lg font-bold text-[#0B2A4A] sm:text-xl md:text-2xl"
                >
                  Inquiry Now
                </h2>
                <p className="mb-3 text-xs text-gray-500 sm:text-sm">
                  Please fill the form below. Our team will contact you shortly!
                </p>

                <form className="space-y-2.5 sm:space-y-3" onSubmit={handleSubmit}>
                  {/* GRID: col-2 થી દરેક ઇનપુટ બરાબર 50% વિડ્થ લેશે */}
                  <div className="grid grid-cols-2 gap-2.5 sm:gap-3">
                    <div className="col-span-1">
                      <input
                        type="text"
                        name="name"
                        placeholder="Your Name *"
                        aria-label="Your Name"
                        autoComplete="name"
                        required
                        className="box-border h-10 w-full rounded-md border border-gray-300 bg-white px-3 text-xs sm:text-sm text-gray-800 placeholder-gray-400 outline-none transition focus:border-[#0B2A4A] focus:ring-1 focus:ring-[#0B2A4A]"
                      />
                    </div>

                    <div className="col-span-1">
                      <input
                        type="email"
                        name="email"
                        placeholder="Email Address *"
                        aria-label="Email Address"
                        autoComplete="email"
                        required
                        className="box-border h-10 w-full rounded-md border border-gray-300 bg-white px-3 text-xs sm:text-sm text-gray-800 placeholder-gray-400 outline-none transition focus:border-[#0B2A4A] focus:ring-1 focus:ring-[#0B2A4A]"
                      />
                    </div>

                    <div className="col-span-1">
                      <input
                        type="tel"
                        name="phone"
                        placeholder="Contact Number *"
                        aria-label="Contact Number"
                        autoComplete="tel"
                        required
                        className="box-border h-10 w-full rounded-md border border-gray-300 bg-white px-3 text-xs sm:text-sm text-gray-800 placeholder-gray-400 outline-none transition focus:border-[#0B2A4A] focus:ring-1 focus:ring-[#0B2A4A]"
                      />
                    </div>

                    <div className="col-span-1">
                      <input
                        type="text"
                        name="subject"
                        placeholder="Service Needed *"
                        aria-label="Service Needed"
                        required
                        className="box-border h-10 w-full rounded-md border border-gray-300 bg-white px-3 text-xs sm:text-sm text-gray-800 placeholder-gray-400 outline-none transition focus:border-[#0B2A4A] focus:ring-1 focus:ring-[#0B2A4A]"
                      />
                    </div>

                    {/* MESSAGE: FULL WIDTH (100% / col-span-2) */}
                    <div className="col-span-2">
                      <textarea
                        name="message"
                        placeholder="Write your message here... *"
                        aria-label="Message"
                        rows={2}
                        required
                        className="box-border block w-full resize-none rounded-md border border-gray-300 bg-white p-2.5 text-xs sm:text-sm text-gray-800 placeholder-gray-400 outline-none transition focus:border-[#0B2A4A] focus:ring-1 focus:ring-[#0B2A4A]"
                      />
                    </div>
                  </div>

                  {/* INLINE STATUS MESSAGE */}
                  {statusMessage.text && (
                    <div
                      className={`flex items-center gap-2 rounded-md p-2 text-xs font-medium transition-all ${
                        statusMessage.type === "success"
                          ? "border border-green-200 bg-green-50 text-green-800"
                          : "border border-red-200 bg-red-50 text-red-800"
                      }`}
                    >
                      <span className="font-bold">
                        {statusMessage.type === "success" ? "✓" : "⚠"}
                      </span>
                      <span>{statusMessage.text}</span>
                    </div>
                  )}

                  {/* SUBMIT BUTTON */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full rounded-md bg-[#0B2A4A] py-2.5 text-xs sm:text-sm font-bold tracking-wider text-white transition hover:bg-[#0A1F3A] active:scale-[0.99] disabled:cursor-not-allowed disabled:opacity-60"
                  >
                    {isSubmitting ? "SENDING..." : "SEND INQUIRY"}
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