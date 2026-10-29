// import React from "react";
// import { FaChevronRight, FaWhatsapp } from "react-icons/fa";
// import { IoLocationSharp } from "react-icons/io5";
// import { MdEmail, MdPhone } from "react-icons/md";
// import { Link } from "react-router-dom";
// import logo from "../assets/footer-logo.png";

// // =====================================================
// // DATA
// // =====================================================

// const services = [
//   { text: "Finance", path: "/service/msme" },
//   { text: "Tax Return", path: "/service/taxreturn" },
//   { text: "Audit", path: "/service/audit" },
//   { text: "Bookkeeping", path: "/service/bookeeping" },
// ];

// const quickLinks = [
//   { text: "Home", path: "/" },
//   { text: "About Us", path: "/about" },
//   { text: "Our Team", path: "/team" },
//   { text: "Contact", path: "/contact" },
// ];

// // =====================================================
// // SUB-COMPONENTS
// // =====================================================

// const FooterLinks = ({ title, links }) => (
//   <div className="w-full">
//     <h4 className="text-white font-bold text-base sm:text-lg mb-5 tracking-wide flex items-center gap-2">
//       <span className="w-2 h-2 rounded-full bg-amber-400"></span>
//       {title}
//     </h4>

//     <ul className="space-y-3 p-0 m-0 list-none">
//       {links.map(({ text, path }) => (
//         <li key={path}>
//           <Link
//             to={path}
//             className="group inline-flex items-center text-slate-300 hover:text-amber-400 transition-colors duration-200 text-sm sm:text-base font-normal no-underline"
//           >
//             <FaChevronRight className="mr-2 text-amber-400/80 text-xs transition-transform duration-200 group-hover:translate-x-1 shrink-0" />
//             <span className="transition-transform duration-200 group-hover:translate-x-0.5">
//               {text}
//             </span>
//           </Link>
//         </li>
//       ))}
//     </ul>
//   </div>
// );

// // =====================================================
// // MAIN FOOTER
// // =====================================================

// const Footer = () => {
 

//   return (
//     <footer className="relative w-full overflow-hidden bg-[#07192d] text-white border-t border-amber-400/20 pt-16 pb-8">
//       {/* Decorative Glow Elements */}
//       <div
//         aria-hidden="true"
//         className="pointer-events-none absolute top-0 left-1/4 -translate-y-1/2 w-96 h-96 bg-amber-400/5 rounded-full blur-3xl"
//       />
//       <div
//         aria-hidden="true"
//         className="pointer-events-none absolute bottom-0 right-10 w-80 h-80 bg-blue-500/5 rounded-full blur-3xl"
//       />

//       <div className="relative max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
//         {/* Main Grid */}
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-12 border-b border-slate-700/60">
          
//           {/* Brand Column */}
//           <div className="sm:col-span-2 lg:col-span-4 flex flex-col items-start space-y-4">
//             <Link to="/" aria-label="Akshar Tax Consultancy Home" className="inline-block">
//               <img
//                 src={logo}
//                 alt="Akshar Tax Consultancy"
//                 className="w-44 sm:w-48 md:w-52 h-auto object-contain"
//               />
//             </Link>
//             <p className="text-slate-300 text-sm sm:text-base leading-relaxed max-w-sm">
//               Delivering dependable solutions for tax filing, business registrations, accounting, and compliance. Your trusted partner for sustainable financial growth.
//             </p>
//           </div>

//           {/* Services Column */}
//           <div className="lg:col-span-2">
//             <FooterLinks title="Services" links={services} />
//           </div>

//           {/* Quick Links Column */}
//           <div className="lg:col-span-2">
//             <FooterLinks title="Company" links={quickLinks} />
//           </div>

//           {/* Contact Details Column */}
//           <div className="sm:col-span-2 lg:col-span-4">
//             <h4 className="text-white font-bold text-base sm:text-lg mb-5 tracking-wide flex items-center gap-2">
//               <span className="w-2 h-2 rounded-full bg-amber-400"></span>
//               Get in Touch
//             </h4>

//             <div className="space-y-3.5 text-sm sm:text-base">
//               {/* Address */}
//               <a
//                 href="https://www.google.com/maps/search/?api=1&query=605%2C%20The%20Crown%2C%206th%20Floor%2C%20Opp.%20Rangoli%20Icecream%20Cafe%2C%20Near%20Gangotri%20Circle%2C%20Nikol%2C%20Ahmedabad%20-%20382350"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="group flex items-start gap-3 p-3 rounded-lg bg-slate-800/40 hover:bg-slate-800/80 border border-slate-700/50 hover:border-amber-400/40 transition-all duration-200 text-slate-300 hover:text-amber-400 no-underline"
//               >
//                 <IoLocationSharp className="text-amber-400 text-xl shrink-0 mt-0.5 group-hover:scale-110 transition-transform" />
//                 <span className="leading-snug">
//                   605, The Crown, 6th Floor, Opp. Rangoli Icecream Cafe, Near Gangotri Circle, Nikol, Ahmedabad - 382350
//                 </span>
//               </a>

//               {/* Phone Numbers */}
//               <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
//                 <a
//                   href="tel:+919067640237"
//                   className="group flex items-center gap-3 p-3 rounded-lg bg-slate-800/40 hover:bg-slate-800/80 border border-slate-700/50 hover:border-amber-400/40 transition-all duration-200 text-slate-300 hover:text-amber-400 no-underline"
//                 >
//                   <MdPhone className="text-amber-400 text-lg shrink-0 group-hover:scale-110 transition-transform" />
//                   <span className="whitespace-nowrap">+91 90676 40237</span>
//                 </a>

//                 <a
//                   href="tel:+918980471710"
//                   className="group flex items-center gap-3 p-3 rounded-lg bg-slate-800/40 hover:bg-slate-800/80 border border-slate-700/50 hover:border-amber-400/40 transition-all duration-200 text-slate-300 hover:text-amber-400 no-underline"
//                 >
//                   <MdPhone className="text-amber-400 text-lg shrink-0 group-hover:scale-110 transition-transform" />
//                   <span className="whitespace-nowrap">+91 89804 71710</span>
//                 </a>
//               </div>

//               {/* Email */}
//               <a
//                 href="mailto:info@akshartaxconsultancy.com"
//                 className="group flex items-center gap-3 p-3 rounded-lg bg-slate-800/40 hover:bg-slate-800/80 border border-slate-700/50 hover:border-amber-400/40 transition-all duration-200 text-slate-300 hover:text-amber-400 no-underline"
//               >
//                 <MdEmail className="text-amber-400 text-lg shrink-0 group-hover:scale-110 transition-transform" />
//                 <span className="break-all">info@akshartaxconsultancy.com</span>
//               </a>
//             </div>
//           </div>
//         </div>

//         {/* Bottom Bar */}
//         <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs sm:text-sm text-slate-400">
//           <p>© {new Date().getFullYear()} <span className="text-amber-400 font-medium">Akshar Tax Consultancy</span>. All rights reserved.</p>
//           <div className="flex items-center gap-6">
//             <Link to="#" className="hover:text-slate-200 transition-colors">Privacy Policy</Link>
//             <Link to="#" className="hover:text-slate-200 transition-colors">Terms of Service</Link>
//           </div>
//         </div>
//       </div>

//       {/* Back to Top Floating Button */}
//       {/* {showScroll && (
//         <button
//           onClick={scrollToTop}
//           aria-label="Back to top"
//           className="fixed bottom-6 right-6 z-50 p-3.5 rounded-full bg-amber-400 text-[#07192d] shadow-lg hover:bg-amber-300 hover:-translate-y-1 active:translate-y-0 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-amber-400 focus:ring-offset-2 focus:ring-offset-[#07192d]"
//         >
//           <FaArrowUp className="w-4 h-4" />
//         </button>
//       )} */}
//               <div className="fixed bottom-5 right-4 z-[9999] flex flex-col gap-3 sm:bottom-6 sm:right-6">
//         {/* WhatsApp */}
//         <a
//           href="https://wa.me/919067640237?text=Hello%2C%20I%20am%20on%20your%20website%20www.akshartaxconsultancy.com%20and%20I%27m%20interested%20in%20your%20services%20and%20wish%20to%20get%20connected%20for%20a%20discussion."
//           target="_blank"
//           rel="noopener noreferrer"
//           aria-label="Chat with us on WhatsApp"
//           className="flex h-12 w-12 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg transition-all duration-300 hover:scale-110 hover:shadow-xl sm:h-14 sm:w-14"
//         >
//           <FaWhatsapp className="text-2xl sm:text-3xl" />
//         </a>
//       </div>
      
//     </footer>
//   );
// };

// export default Footer;
import React from "react";
import { FaChevronRight, FaWhatsapp } from "react-icons/fa";
import { IoLocationSharp } from "react-icons/io5";
import { MdEmail, MdPhone } from "react-icons/md";
import { Link } from "react-router-dom";
import logo from "../assets/footer-logo.png";

// =====================================================
// DATA
// =====================================================

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

// =====================================================
// SUB-COMPONENTS
// =====================================================

const FooterLinks = ({ title, links }) => (
  <div className="w-full">
    <h4 className="text-white font-bold text-base sm:text-lg mb-5 tracking-wide flex items-center gap-2">
      <span className="w-2 h-2 rounded-full bg-amber-400"></span>
      {title}
    </h4>

    <ul className="space-y-3 p-0 m-0 list-none">
      {links.map(({ text, path }) => (
        <li key={path}>
          <Link
            to={path}
            className="group inline-flex items-center text-slate-300 hover:text-amber-400 transition-colors duration-200 text-sm sm:text-base font-normal no-underline"
          >
            <FaChevronRight className="mr-2 text-amber-400/80 text-xs transition-transform duration-200 group-hover:translate-x-1 shrink-0" />
            <span className="transition-transform duration-200 group-hover:translate-x-0.5">
              {text}
            </span>
          </Link>
        </li>
      ))}
    </ul>
  </div>
);

// =====================================================
// MAIN FOOTER
// =====================================================

const Footer = () => {
  return (
    <footer className="relative w-full overflow-hidden bg-[#07192d] text-white border-t border-amber-400/20 pt-16 pb-8">
      {/* Decorative Glow Elements */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-0 left-1/4 -translate-y-1/2 w-96 h-96 bg-amber-400/5 rounded-full blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-0 right-10 w-80 h-80 bg-blue-500/5 rounded-full blur-3xl"
      />

      <div className="relative max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
        {/* Main Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-12 border-b border-slate-700/60">
          
          {/* Brand Column */}
          <div className="sm:col-span-2 lg:col-span-4 flex flex-col items-start space-y-4">
            <Link to="/" aria-label="Akshar Tax Consultancy Home" className="inline-block">
              <img
                src={logo}
                alt="Akshar Tax Consultancy"
                className="w-44 sm:w-48 md:w-52 h-auto object-contain"
              />
            </Link>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed max-w-sm">
              Delivering dependable solutions for tax filing, business registrations, accounting, and compliance. Your trusted partner for sustainable financial growth.
            </p>
          </div>

          {/* Services & Company Links (Mobile ma Side-by-Side: grid-cols-2) */}
          <div className="col-span-1 sm:col-span-2 lg:col-span-4 grid grid-cols-2 gap-6">
            <div>
              <FooterLinks title="Services" links={services} />
            </div>
            <div>
              <FooterLinks title="Company" links={quickLinks} />
            </div>
          </div>

          {/* Contact Details Column */}
          <div className="sm:col-span-2 lg:col-span-4">
            <h4 className="text-white font-bold text-base sm:text-lg mb-5 tracking-wide flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-amber-400"></span>
              Get in Touch
            </h4>

            <div className="space-y-3.5 text-sm sm:text-base">
              {/* Address */}
              <a
                href="https://www.google.com/maps/search/?api=1&query=605%2C%20The%20Crown%2C%206th%20Floor%2C%20Opp.%20Rangoli%20Icecream%20Cafe%2C%20Near%20Gangotri%20Circle%2C%20Nikol%2C%20Ahmedabad%20-%20382350"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-start gap-3 p-3 rounded-lg bg-slate-800/40 hover:bg-slate-800/80 border border-slate-700/50 hover:border-amber-400/40 transition-all duration-200 text-slate-300 hover:text-amber-400 no-underline"
              >
                <IoLocationSharp className="text-amber-400 text-xl shrink-0 mt-0.5 group-hover:scale-110 transition-transform" />
                <span className="leading-snug">
                  605, The Crown, 6th Floor, Opp. Rangoli Icecream Cafe, Near Gangotri Circle, Nikol, Ahmedabad - 382350
                </span>
              </a>

              {/* Phone Numbers */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <a
                  href="tel:+919067640237"
                  className="group flex items-center gap-3 p-3 rounded-lg bg-slate-800/40 hover:bg-slate-800/80 border border-slate-700/50 hover:border-amber-400/40 transition-all duration-200 text-slate-300 hover:text-amber-400 no-underline"
                >
                  <MdPhone className="text-amber-400 text-lg shrink-0 group-hover:scale-110 transition-transform" />
                  <span className="whitespace-nowrap">+91 90676 40237</span>
                </a>

                <a
                  href="tel:+918980471710"
                  className="group flex items-center gap-3 p-3 rounded-lg bg-slate-800/40 hover:bg-slate-800/80 border border-slate-700/50 hover:border-amber-400/40 transition-all duration-200 text-slate-300 hover:text-amber-400 no-underline"
                >
                  <MdPhone className="text-amber-400 text-lg shrink-0 group-hover:scale-110 transition-transform" />
                  <span className="whitespace-nowrap">+91 89804 71710</span>
                </a>
              </div>

              {/* Email */}
              <a
                href="mailto:info@akshartaxconsultancy.com"
                className="group flex items-center gap-3 p-3 rounded-lg bg-slate-800/40 hover:bg-slate-800/80 border border-slate-700/50 hover:border-amber-400/40 transition-all duration-200 text-slate-300 hover:text-amber-400 no-underline"
              >
                <MdEmail className="text-amber-400 text-lg shrink-0 group-hover:scale-110 transition-transform" />
                <span className="break-all">info@akshartaxconsultancy.com</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs sm:text-sm text-slate-400">
          <p>© {new Date().getFullYear()} <span className="text-amber-400 font-medium">Akshar Tax Consultancy</span>. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <Link to="#" className="hover:text-slate-200 transition-colors">Privacy Policy</Link>
            <Link to="#" className="hover:text-slate-200 transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>

      {/* WhatsApp Button */}
      <div className="fixed bottom-5 right-4 z-[9999] flex flex-col gap-3 sm:bottom-6 sm:right-6">
        <a
          href="https://wa.me/919067640237?text=Hello%2C%20I%20am%20on%20your%20website%20www.akshartaxconsultancy.com%20and%20I%27m%20interested%20in%20your%20services%20and%20wish%20to%20get%20connected%20for%20a%20discussion."
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Chat with us on WhatsApp"
          className="flex h-12 w-12 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg transition-all duration-300 hover:scale-110 hover:shadow-xl sm:h-14 sm:w-14"
        >
          <FaWhatsapp className="text-2xl sm:text-3xl" />
        </a>
      </div>
    </footer>
  );
};

export default Footer;