
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
  const bgImage = "https://www.brtindia.co.in/img/contact-us-banner.png";
  const validationSchema = Yup.object().shape({
    firstName: Yup.string().required("First name is required"),
    lastName: Yup.string().required("Last name is required"),
    email: Yup.string().email("Invalid email").required("Email is required"),
    message: Yup.string().required("Message is required"),
  });

  const contactData = [
    {
      icon: FaPhoneAlt,
      title: "Phone",
      desc: "+91-9067640237, +91-8980471710",
      hoverText: "Click to call",
    },
    {
      icon: FaEnvelope,
      title: "Email",
      desc: "info@akshartaxconsultancy.in",
      hoverText: "Send email",
    },
    {
      icon: FaMapMarkerAlt,
      title: "Office Address",
      desc: "A-505 RoseVill Sky, Opp. Pushkar Icon, Ahmedabad, Gujarat - 382350",
      hoverText: "View on map",
    },
    
  ];

  return (
    <div className="min-h-screen bg-slate-50">
      <Header />

      {/* Banner Section */}
      <section
        className="relative bg-cover bg-center py-[130px]  overflow-hidden"
        style={{ backgroundImage: `url(${bgImage})` }}
      >
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4">
          <h1 className="text-3xl md:text-5xl font-bold text-white mb-2">
            Contact Us
          </h1>
          <div className="flex items-center gap-2 text-white text-sm">
            <a href="/" className="hover:underline">
              Home
            </a>{" "}
            <span>{">"}</span>
            <span className="text-[#fff] font-semibold">Contact Us</span>
          </div>
        </div>
      </section>

      {/* Cards Section */}
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {contactData.map((item, idx) => (
            <div
              key={idx}
              className="group bg-white p-6 rounded-2xl shadow-lg border border-blue-50 text-center transition-all duration-300 hover:shadow-2xl"
            >
              <item.icon className="text-[#F5B800] hover:text-[#0B2A4A] text-3xl mx-auto mb-4" />
              <h4 className="font-bold text-[#0A1F3A] mb-1">{item.title}</h4>
              <p className="text-gray-600 text-sm mb-2">{item.desc}</p>
              <span className="text-[#0B2A4A] text-xs font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                {item.hoverText}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Form & Map Section */}
      <div className="max-w-6xl mx-auto px-4 pb-12 grid lg:grid-cols-2 gap-12">
        <div className="bg-white p-8 rounded-2xl shadow-lg">
          <h3 className="text-2xl font-bold text-blue-900 mb-6">
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
            onSubmit={(values) => console.log("Form Submitted:", values)}
          >
            {({ errors, touched }) => (
              <Form className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Field
                      name="firstName"
                      placeholder="First Name *"
                      className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
                    />
                    <ErrorMessage
                      name="firstName"
                      component="div"
                      className="text-red-500 text-xs mt-1"
                    />
                  </div>
                  <div>
                    <Field
                      name="lastName"
                      placeholder="Last Name *"
                      className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
                    />
                    <ErrorMessage
                      name="lastName"
                      component="div"
                      className="text-red-500 text-xs mt-1"
                    />
                  </div>
                </div>
                <div className="grid md:grid-cols-2 gap-4">
                <Field
                  name="email"
                  placeholder="Email Address *"
                  className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
                />
                <ErrorMessage
                  name="email"
                  component="div"
                  className="text-red-500 text-xs -mt-3 mb-2"
                />
                <Field
                  name="phone"
                  placeholder="Phone Number"
                  className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
                />
                </div>
                <Field
                  as="select"
                  name="service"
                  className="w-full p-3 border rounded-lg text-gray-500 focus:ring-2 focus:ring-blue-500 outline-none"
                >
                  <option>Service Interested In</option>
                </Field>
                <Field
                  as="textarea"
                  name="message"
                  placeholder="Message *"
                  className="w-full p-3 border rounded-lg h-32 focus:ring-2 focus:ring-blue-500 outline-none"
                />
                <ErrorMessage
                  name="message"
                  component="div"
                  className="text-red-500 text-xs -mt-3 mb-2"
                />

                <button
                  type="submit"
                  className="w-full bg-[#18427d] text-white font-bold py-3 rounded-lg hover:bg-blue-900 transition flex items-center justify-center gap-2"
                >
                  <FaPaperPlane /> Send Message
                </button>
              </Form>
            )}
          </Formik>
        </div>

        <div className="bg-white p-6 rounded-2xl shadow-lg">
          <h3 className="text-xl font-bold text-blue-900 mb-4">
            Visit Our Office
          </h3>
         
            
            <div className="h-64 bg-gray-200 rounded-lg mb-6 overflow-hidden">
  <iframe
    title="Akshar Tax Consultancy Location"
    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3671.3443541883953!2d72.6668952750926!3d23.04783367915605!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e878bd1708483%3A0xd458c74c32633230!2sTHE%20CROWN!5e0!3m2!1sen!2sin!4v1791104023591!5m2!1sen!2sin"
    className="w-full h-[350px] md:h-[450px] border-0"
    allowFullScreen
    loading="lazy"
    referrerPolicy="strict-origin-when-cross-origin"
  ></iframe>
</div>
          
          <div className="space-y-4 text-gray-700">
            <p className="flex items-center gap-3">
              <FaPhoneAlt className="text-[#0B2A4A]" /> +91 9067640237 | +91 8980471710
            </p>
            <p className="flex items-center gap-3">
              <FaEnvelope className="text-[#0B2A4A]" /> info@akshartaxconsultancy.in
            </p>
            <p className="flex items-center gap-3">
              <FaMapMarkerAlt className="text-[#0B2A4A]" /> 605, The Crown, 6th Floor, Opp. Rangoli Icecream Cafe, Near Gangotri Circle, Nikol, Ahmedabad - 382350
            
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>  

  );
};

export default Contact;
