

import React from "react";
import Header from "../component/Header";
import Footer from "../component/Footer";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaPaperPlane,
} from "react-icons/fa";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const Contact = () => {
  const bgImage =
    "https://www.brtindia.co.in/img/contact-us-banner.png";

  const validationSchema = Yup.object().shape({
    firstName: Yup.string().required("First name is required"),
    lastName: Yup.string().required("Last name is required"),
    email: Yup.string()
      .email("Invalid email")
      .required("Email is required"),
    message: Yup.string().required("Message is required"),
  });

  const contactData = [
    {
      icon: FaPhoneAlt,
      title: "Phone",
      phones: [
        {
          text: "+91-9067640237",
          link: "tel:+919067640237",
        },
        {
          text: "+91-8980471710",
          link: "tel:+918980471710",
        },
      ],
    },
    {
      icon: FaEnvelope,
      title: "Email",
      desc: "info@akshartaxconsultancy.in",
      link: "mailto:info@akshartaxconsultancy.in",
    },
    {
      icon: FaMapMarkerAlt,
      title: "Office Address",
      desc: "605, The Crown, 6th Floor, Opp. Rangoli Icecream Cafe, Near Gangotri Circle, Nikol, Ahmedabad - 382350",
      link: "https://www.google.com/maps/search/?api=1&query=605%2C%20The%20Crown%2C%206th%20Floor%2C%20Opp.%20Rangoli%20Icecream%20Cafe%2C%20Near%20Gangotri%20Circle%2C%20Nikol%2C%20Ahmedabad%20-%20382350",
    },
  ];

  return (
    <div className="min-h-screen overflow-x-hidden bg-slate-50">
      <Header />

      {/* ================= BANNER SECTION ================= */}
      <section
        className="relative overflow-hidden bg-cover bg-center py-20 sm:py-24 md:py-[130px]"
        style={{ backgroundImage: `url(${bgImage})` }}
      >
        <div className="absolute inset-0 bg-black/50"></div>

        {/* 1300px Hero Container */}
        <div className="relative z-10 mx-auto w-full max-w-[1300px] px-4 sm:px-6 lg:px-8">
          <h1 className="mb-2 text-center text-3xl font-bold text-white sm:text-4xl md:text-left md:text-5xl">
            Contact Us
          </h1>

          <div className="flex flex-wrap items-center justify-center gap-2 text-sm text-white md:justify-start sm:text-base">
            <a href="/" className="transition hover:underline">
              Home
            </a>

            <span>&gt;</span>

            <span className="font-semibold text-white">
              Contact Us
            </span>
          </div>
        </div>
      </section>

      {/* ================= CONTACT CARDS ================= */}
      <section className="py-10 sm:py-12 md:py-14">
        <div className="mx-auto w-full max-w-[1300px] px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
            {contactData.map((item, idx) => (
              <a
                key={idx}
                href={item.link}
                target={
                  item.title === "Office Address"
                    ? "_blank"
                    : undefined
                }
                rel={
                  item.title === "Office Address"
                    ? "noopener noreferrer"
                    : undefined
                }
                className="group block rounded-2xl border border-blue-50 bg-white p-5 text-center no-underline shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl sm:p-6"
              >
                <item.icon className="mx-auto mb-4 text-2xl text-[#F5B800] transition-colors duration-300 group-hover:text-[#0B2A4A] sm:text-3xl" />

                <h4 className="mb-2 font-bold text-[#0A1F3A]">
                  {item.title}
                </h4>

                {item.phones ? (
                  <div className="mb-2 space-y-1 text-sm text-gray-600">
                    {item.phones.map((phone, index) => (
                      <span
                        key={index}
                        className="block transition-colors hover:text-[#0B2A4A]"
                      >
                        {phone.text}
                      </span>
                    ))}
                  </div>
                ) : (
                  <p className="mb-2 break-words text-sm leading-6 text-gray-600">
                    {item.desc}
                  </p>
                )}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ================= FORM & MAP SECTION ================= */}
      <section className="pb-10 sm:pb-12 md:pb-16">
        <div className="mx-auto grid w-full max-w-[1300px] grid-cols-1 gap-8 px-4 sm:px-6 lg:grid-cols-2 lg:gap-10 lg:px-8">
          
          {/* ================= CONTACT FORM ================= */}
          <div className="rounded-2xl bg-white p-5 shadow-lg sm:p-6 md:p-8">
            <h3 className="mb-5 text-xl font-bold text-blue-900 sm:mb-6 sm:text-2xl">
              Send Us a Message
            </h3>

            <Formik
              initialValues={{
                firstName: "",
                lastName: "",
                email: "",
                phone: "",
                service: "",
                message: "",
              }}
              validationSchema={validationSchema}
              onSubmit={(values) =>
                console.log("Form Submitted:", values)
              }
            >
              {() => (
                <Form className="space-y-4 sm:space-y-5">
                  
                  {/* First Name & Last Name */}
                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                    <div>
                      <Field
                        name="firstName"
                        placeholder="First Name *"
                        className="w-full rounded-lg border border-gray-300 p-3 text-sm outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 sm:text-base"
                      />

                      <ErrorMessage
                        name="firstName"
                        component="div"
                        className="mt-1 text-xs text-red-500"
                      />
                    </div>

                    <div>
                      <Field
                        name="lastName"
                        placeholder="Last Name *"
                        className="w-full rounded-lg border border-gray-300 p-3 text-sm outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 sm:text-base"
                      />

                      <ErrorMessage
                        name="lastName"
                        component="div"
                        className="mt-1 text-xs text-red-500"
                      />
                    </div>
                  </div>

                  {/* Email & Phone */}
                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                    <div>
                      <Field
                        type="email"
                        name="email"
                        placeholder="Email Address *"
                        className="w-full rounded-lg border border-gray-300 p-3 text-sm outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 sm:text-base"
                      />

                      <ErrorMessage
                        name="email"
                        component="div"
                        className="mt-1 text-xs text-red-500"
                      />
                    </div>

                    <div>
                      <Field
                        type="tel"
                        name="phone"
                        placeholder="Phone Number *"
                        className="w-full rounded-lg border border-gray-300 p-3 text-sm outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 sm:text-base"
                      />

                      <ErrorMessage
                        name="phone"
                        component="div"
                        className="mt-1 text-xs text-red-500"
                      />
                    </div>
                  </div>

                  {/* Service */}
                  <div>
                    <Field
                      as="select"
                      name="service"
                      className="w-full rounded-lg border border-gray-300 bg-white p-3 text-sm text-gray-600 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 sm:text-base"
                    >
                      <option value="">
                        Service Interested In
                      </option>

                      <option value="financial-consulting">
                        Financial Consulting
                      </option>

                      <option value="income-tax-return">
                        Income Tax Return
                      </option>

                      <option value="audit-assurance">
                        Audit & Assurance
                      </option>

                      <option value="payroll-management">
                        Payroll Management
                      </option>

                      <option value="international-accounting">
                        International Accounting
                      </option>

                      <option value="bookkeeping">
                        Book Keeping Services
                      </option>
                    </Field>

                    <ErrorMessage
                      name="service"
                      component="div"
                      className="mt-1 text-xs text-red-500"
                    />
                  </div>

                  {/* Message */}
                  <div>
                    <Field
                      as="textarea"
                      name="message"
                      placeholder="Message *"
                      className="h-32 w-full resize-none rounded-lg border border-gray-300 p-3 text-sm outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 sm:h-36 sm:text-base"
                    />

                    <ErrorMessage
                      name="message"
                      component="div"
                      className="mt-1 text-xs text-red-500"
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    className="flex w-full items-center justify-center gap-2 rounded-lg bg-[#18427d] py-3 text-sm font-bold text-white transition-all duration-300 hover:bg-blue-900 sm:text-base"
                  >
                    <FaPaperPlane />
                    Send Message
                  </button>
                </Form>
              )}
            </Formik>
          </div>

          {/* ================= MAP / OFFICE ================= */}
          <div className="rounded-2xl bg-white p-5 shadow-lg sm:p-6">
            <h3 className="mb-4 text-xl font-bold text-blue-900">
              Visit Our Office
            </h3>

            {/* Google Map */}
            <div className="mb-6 h-[280px] overflow-hidden rounded-lg bg-gray-200 sm:h-[350px] md:h-[400px] lg:h-[450px]">
              <iframe
                title="Akshar Tax Consultancy Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3671.3443541883953!2d72.6668952750926!3d23.04783367915605!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e878bd1708483%3A0xd458c74c32633230!2sTHE%20CROWN!5e0!3m2!1sen!2sin!4v1791104023591!5m2!1sen!2sin"
                className="h-full w-full border-0"
                allowFullScreen
                loading="lazy"
                referrerPolicy="strict-origin-when-cross-origin"
              ></iframe>
            </div>

            {/* Office Details */}
            <div className="space-y-4 text-sm text-gray-700 sm:text-base">
              
              {/* Phone */}
              <p className="flex items-start gap-3">
                <FaPhoneAlt className="mt-1 shrink-0 text-[#0B2A4A]" />

                <span className="flex flex-wrap items-center gap-x-2 gap-y-1">
                  <a
                    href="tel:+919067640237"
                    className="text-gray-700 no-underline transition-colors hover:text-[#0B2A4A]"
                  >
                    +91 9067640237
                  </a>

                  <span className="hidden sm:inline">|</span>

                  <a
                    href="tel:+918980471710"
                    className="text-gray-700 no-underline transition-colors hover:text-[#0B2A4A]"
                  >
                    +91 8980471710
                  </a>
                </span>
              </p>

              {/* Email */}
              <p className="flex items-start gap-3">
                <FaEnvelope className="mt-1 shrink-0 text-[#0B2A4A]" />

                <a
                  href="mailto:info@akshartaxconsultancy.in"
                  className="break-all text-gray-700 no-underline transition-colors hover:text-[#0B2A4A]"
                >
                  info@akshartaxconsultancy.in
                </a>
              </p>

              {/* Address */}
              <p className="flex items-start gap-3">
                <FaMapMarkerAlt className="mt-1 shrink-0 text-[#0B2A4A]" />

                <a
                  href="https://www.google.com/maps/search/?api=1&query=605%2C%20The%20Crown%2C%206th%20Floor%2C%20Opp.%20Rangoli%20Icecream%20Cafe%2C%20Near%20Gangotri%20Circle%2C%20Nikol%2C%20Ahmedabad%20-%20382350"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="leading-6 text-gray-700 no-underline transition-colors hover:text-[#0B2A4A]"
                >
                  605, The Crown, 6th Floor, Opp. Rangoli Icecream Cafe,
                  Near Gangotri Circle, Nikol, Ahmedabad - 382350
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;