<<<<<<< HEAD
import React, { useEffect, useState } from "react";
import { Container, Row, Col, Form, Button, Alert } from "react-bootstrap";
import {
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaEnvelope,
  FaPaperPlane,
} from "react-icons/fa";
import { motion } from "framer-motion";
import { Formik } from "formik";
import * as Yup from "yup";
import Header from "../component/Header";
import Footer from "../component/Footer";
import Loader from "./Loader";

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);
  const [buttonAnimating, setButtonAnimating] = useState(false);

  // Yup validation schema
  const validationSchema = Yup.object().shape({
    name: Yup.string().trim().required("Name is required"),
    phone: Yup.string()
      .matches(/^[6-9]\d{9}$/, "Enter valid 10-digit mobile number")
      .required("Phone number is required"),
    email: Yup.string()
      .matches(
        /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
        "Enter a valid email address"
      )
      .required("Email is required"),

    message: Yup.string().trim().required("Message is required"),
  });

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);
  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <>
          <Header />
          <div className="contact-section py-5">
            <Container>
              <Row className="justify-content-center">
                <Col lg={10}>
                  <motion.div
                    className="glass-card p-4 p-md-5 rounded-4 shadow-lg"
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    viewport={{ once: true }}
                  >
                    <Row>
                      {/* Contact Info */}
                      <motion.div
                        className="text-white mb-4 mb-md-0 pe-md-5 col-md-5"
                        initial={{ x: -50, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        transition={{ delay: 0.1, duration: 0.6 }}
                        viewport={{ once: true }}
                      >
                        <h4 className="fw-bold mb-3">Let’s Talk</h4>
                        <p className="mb-4">
                          Have questions about taxes, GST, or financial
                          planning? We’re here to help you with reliable
                          solutions.
                        </p>

                        <div className="mb-3 d-flex align-items-start">
                          <FaMapMarkerAlt className="me-3 mt-1 fs-5" />
                          <p className="mb-0">
                            A-505 RoseVill Sky, Opp. Pushkar Icon,
                            <br />
                            Ahmedabad, Gujarat - 382350
                          </p>
                        </div>

                        <div className="mb-3 d-flex align-items-center">
                          <FaPhoneAlt className="me-3 fs-5" />
                          <a
                            href="tel:+919067640237"
                            className="text-white text-decoration-none hover-link hover-underline"
                          >
                            +91 90676 40237,+91 89804 71710
                          </a>
                        </div>

                        <div className="mb-3 d-flex align-items-center">
                          <FaEnvelope className="me-3 fs-5" />
                          <a
                            href="mailto:aksharconsultancy99@gmail.com"
                            className="text-white text-decoration-none hover-link"
                          >
                            aksharconsultancy99@gmail.com
                          </a>
                        </div>
                      </motion.div>

                      {/* Contact Form */}
                      <motion.div
                        className="col-md-7"
                        initial={{ x: 50, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        transition={{ delay: 0.2, duration: 0.6 }}
                        viewport={{ once: true }}
                      >
                        <h4 className="fw-semibold mb-4 text-white">
                          Get in Touch
                        </h4>
                        {submitted && (
                          <Alert variant="success">
                            Thank you! We'll contact you shortly.
                          </Alert>
                        )}

                        <Formik
                          initialValues={{
                            name: "",
                            phone: "",
                            email: "",
                            message: "",
                          }}
                          validationSchema={validationSchema}
                          onSubmit={(values, { resetForm }) => {
                            setSubmitted(true);
                            setButtonAnimating(true);
                            resetForm();
                            setTimeout(() => {
                              setButtonAnimating(false);
                              setSubmitted(false);
                            }, 4000);
                          }}
                        >
                          {({
                            values,
                            errors,
                            touched,
                            handleChange,
                            handleBlur,
                            handleSubmit,
                          }) => (
                            <Form noValidate onSubmit={handleSubmit}>
                              <Row>
                                <Col md={6} className="mb-4">
                                  <Form.Floating>
                                    <Form.Control
                                      id="name"
                                      type="text"
                                      placeholder="Full Name"
                                      value={values.name}
                                      onChange={handleChange}
                                      onBlur={handleBlur}
                                      isInvalid={touched.name && !!errors.name}
                                      className="glass-input"
                                    />
                                    <label htmlFor="name">Full Name</label>
                                    <Form.Control.Feedback type="invalid">
                                      {errors.name}
                                    </Form.Control.Feedback>
                                  </Form.Floating>
                                </Col>

                                <Col md={6} className="mb-4">
                                  <Form.Floating>
                                    <Form.Control
                                      id="phone"
                                      type="number"
                                      placeholder="Phone"
                                      value={values.phone}
                                      onChange={handleChange}
                                      onBlur={handleBlur}
                                      isInvalid={
                                        touched.phone && !!errors.phone
                                      }
                                      className="glass-input"
                                    />
                                    <label htmlFor="phone">Phone Number</label>
                                    <Form.Control.Feedback type="invalid">
                                      {errors.phone}
                                    </Form.Control.Feedback>
                                  </Form.Floating>
                                </Col>
                              </Row>

                              <Form.Floating className="mb-4">
                                <Form.Control
                                  id="email"
                                  type="email"
                                  placeholder="Email"
                                  value={values.email}
                                  onChange={handleChange}
                                  onBlur={handleBlur}
                                  isInvalid={touched.email && !!errors.email}
                                  className="glass-input"
                                />
                                <label htmlFor="email">Email Address</label>
                                <Form.Control.Feedback type="invalid">
                                  {errors.email}
                                </Form.Control.Feedback>
                              </Form.Floating>

                              <Form.Floating className="mb-4">
                                <Form.Control
                                  as="textarea"
                                  id="message"
                                  placeholder="Message"
                                  style={{ height: "120px" }}
                                  value={values.message}
                                  onChange={handleChange}
                                  onBlur={handleBlur}
                                  isInvalid={
                                    touched.message && !!errors.message
                                  }
                                  className="glass-input"
                                />
                                <label htmlFor="message">Your Message</label>
                                <Form.Control.Feedback type="invalid">
                                  {errors.message}
                                </Form.Control.Feedback>
                              </Form.Floating>

                              <div className="text-end">
                                <motion.div
                                  whileTap={{ scale: 0.9 }}
                                  whileHover={{ scale: 1.05 }}
                                  transition={{
                                    type: "spring",
                                    stiffness: 300,
                                  }}
                                >
                                  <Button
                                    type="submit"
                                    variant="light"
                                    className={`submit-button px-4 py-2 fw-semibold ${
                                      buttonAnimating ? "fly" : ""
                                    }`}
                                    style={{ borderRadius: "30px" }}
                                  >
                                    <FaPaperPlane className="me-2" />
                                    Send Message
                                  </Button>
                                </motion.div>
                              </div>
                            </Form>
                          )}
                        </Formik>
                      </motion.div>
                    </Row>
                  </motion.div>
                </Col>
              </Row>
            </Container>
          </div>

          {/* Full Width Map */}
          <div className="w-100">
            <iframe
              title="Google Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3054.522981178017!2d72.66195142435235!3d23.05445671513943!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e878bd3d4c3f9%3A0x218f4d26a542afaa!2sRosevill%20Sky!5e1!3m2!1sen!2sin!4v1749834240012!5m2!1sen!2sin"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>

          <Footer />

          {/* Custom CSS */}
          <style jsx>{`
            .hover-underline {
              text-decoration: none; /* no underline by default */
              transition: all 0.3s ease;
            }

            .hover-underline:hover {
              text-decoration: underline;
            }

            .contact-section {
              background: linear-gradient(to right, #2c3e50, #3498db);
            }
            .glass-card {
              background: rgba(255, 255, 255, 0.1);
              backdrop-filter: blur(15px);
              border: 1px solid rgba(255, 255, 255, 0.2);
            }
            .glass-input {
              background-color: rgba(255, 255, 255, 0.2);
              color: white;
              border: 1px solid rgba(255, 255, 255, 0.3);
            }
            .glass-input:focus {
              background-color: rgba(255, 255, 255, 0.3);
              color: white;
              box-shadow: none;
              border-color: #fff;
            }
            .glass-input::placeholder {
              color: rgba(255, 255, 255, 0.7);
            }
            .submit-button.fly {
              animation: flyUp 0.6s ease-in-out forwards;
            }
            @keyframes flyUp {
              0% {
                transform: translateY(0) scale(1);
                opacity: 1;
              }
              50% {
                transform: translateY(-20px) scale(1.2);
                opacity: 0.7;
              }
              100% {
                transform: translateY(-40px) scale(0.8);
                opacity: 0;
              }
            }
            .hover-link:hover {
              color: #ffc107;
              text-decoration: underline;
            }
          `}</style>
        </>
      )}
    </>
=======
// import React, { useState } from "react";
// import { Container, Row, Col, Form, Button, Alert } from "react-bootstrap";
// import {
//   FaPhoneAlt,
//   FaMapMarkerAlt,
//   FaEnvelope,
//   FaPaperPlane,
// } from "react-icons/fa";
// import { motion } from "framer-motion";
// import { Formik } from "formik";
// import * as Yup from "yup";
// import Header from "../component/Header";
// import Footer from "../component/Footer";

// const Contact = () => {
//   const [submitted, setSubmitted] = useState(false);
//   const [buttonAnimating, setButtonAnimating] = useState(false);

//   // Yup validation schema
//   const validationSchema = Yup.object().shape({
//     name: Yup.string().trim().required("Name is required"),
//     phone: Yup.string()
//       .matches(/^[6-9]\d{9}$/, "Enter valid 10-digit mobile number")
//       .required("Phone number is required"),
//     email: Yup.string()
//       .matches(
//         /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
//         "Enter a valid email address"
//       )
//       .required("Email is required"),

//     message: Yup.string().trim().required("Message is required"),
//   });

//   return (
//     <>
//       <Header />
//       <div className="contact-section py-5">
//         <Container>
//           <Row className="justify-content-center">
//             <Col lg={10}>
//               <motion.div
//                 className="glass-card p-4 p-md-5 rounded-4 shadow-lg"
//                 initial={{ opacity: 0, scale: 0.95 }}
//                 whileInView={{ opacity: 1, scale: 1 }}
//                 transition={{ duration: 0.6, ease: "easeOut" }}
//                 viewport={{ once: true }}
//               >
//                 <Row>
//                   {/* Contact Info */}
//                   <motion.div
//                     className="text-white mb-4 mb-md-0 pe-md-5 col-md-5"
//                     initial={{ x: -50, opacity: 0 }}
//                     whileInView={{ x: 0, opacity: 1 }}
//                     transition={{ delay: 0.1, duration: 0.6 }}
//                     viewport={{ once: true }}
//                   >
//                     <h4 className="fw-bold mb-3">Let’s Talk</h4>
//                     <p className="mb-4">
//                       Have questions about taxes, GST, or financial planning?
//                       We’re here to help you with reliable solutions.
//                     </p>

//                     <div className="mb-3 d-flex align-items-start">
//                       <FaMapMarkerAlt className="me-3 mt-1 fs-5" />
//                       <p className="mb-0">
//                         A-505 RoseVill Sky, Opp. Pushkar Icon,
//                         <br />
//                         Ahmedabad, Gujarat - 382350
//                       </p>
//                     </div>

//                     <div className="mb-3 d-flex align-items-center">
//                       <FaPhoneAlt className="me-3 fs-5" />
//                       <a
//                         href="tel:+919067640237"
//                         className="text-white text-decoration-none hover-link"
//                       >
//                         +91 90676 40237,+91 89804 71710
//                       </a>
//                     </div>

//                     <div className="mb-3 d-flex align-items-center">
//                       <FaEnvelope className="me-3 fs-5" />
//                       <a
//                         href="mailto:aksharconsultancy99@gmail.com"
//                         className="text-white text-decoration-none hover-link"
//                       >
//                         aksharconsultancy99@gmail.com
//                       </a>
//                     </div>
//                   </motion.div>

//                   {/* Contact Form */}
//                   <motion.div
//                     className="col-md-7"
//                     initial={{ x: 50, opacity: 0 }}
//                     whileInView={{ x: 0, opacity: 1 }}
//                     transition={{ delay: 0.2, duration: 0.6 }}
//                     viewport={{ once: true }}
//                   >
//                     <h4 className="fw-semibold mb-4 text-white">
//                       Get in Touch
//                     </h4>
//                     {submitted && (
//                       <Alert variant="success">
//                         Thank you! We'll contact you shortly.
//                       </Alert>
//                     )}

//                     <Formik
//                       initialValues={{
//                         name: "",
//                         phone: "",
//                         email: "",
//                         message: "",
//                       }}
//                       validationSchema={validationSchema}
//                       onSubmit={(values, { resetForm }) => {
//                         setSubmitted(true);
//                         setButtonAnimating(true);
//                         resetForm();
//                         setTimeout(() => {
//                           setButtonAnimating(false);
//                           setSubmitted(false);
//                         }, 4000);
//                       }}
//                     >
//                       {({
//                         values,
//                         errors,
//                         touched,
//                         handleChange,
//                         handleBlur,
//                         handleSubmit,
//                       }) => (
//                         <Form noValidate onSubmit={handleSubmit}>
//                           <Row>
//                             <Col md={6} className="mb-4">
//                               <Form.Floating>
//                                 <Form.Control
//                                   id="name"
//                                   type="text"
//                                   placeholder="Full Name"
//                                   value={values.name}
//                                   onChange={handleChange}
//                                   onBlur={handleBlur}
//                                   isInvalid={touched.name && !!errors.name}
//                                   className="glass-input"
//                                 />
//                                 <label htmlFor="name">Full Name</label>
//                                 <Form.Control.Feedback type="invalid">
//                                   {errors.name}
//                                 </Form.Control.Feedback>
//                               </Form.Floating>
//                             </Col>

//                             <Col md={6} className="mb-4">
//                               <Form.Floating>
//                                 <Form.Control
//                                   id="phone"
//                                   type="number"
//                                   placeholder="Phone"
//                                   value={values.phone}
//                                   onChange={handleChange}
//                                   onBlur={handleBlur}
//                                   isInvalid={touched.phone && !!errors.phone}
//                                   className="glass-input"
//                                 />
//                                 <label htmlFor="phone">Phone Number</label>
//                                 <Form.Control.Feedback type="invalid">
//                                   {errors.phone}
//                                 </Form.Control.Feedback>
//                               </Form.Floating>
//                             </Col>
//                           </Row>

//                           <Form.Floating className="mb-4">
//                             <Form.Control
//                               id="email"
//                               type="email"
//                               placeholder="Email"
//                               value={values.email}
//                               onChange={handleChange}
//                               onBlur={handleBlur}
//                               isInvalid={touched.email && !!errors.email}
//                               className="glass-input"
//                             />
//                             <label htmlFor="email">Email Address</label>
//                             <Form.Control.Feedback type="invalid">
//                               {errors.email}
//                             </Form.Control.Feedback>
//                           </Form.Floating>

//                           <Form.Floating className="mb-4">
//                             <Form.Control
//                               as="textarea"
//                               id="message"
//                               placeholder="Message"
//                               style={{ height: "120px" }}
//                               value={values.message}
//                               onChange={handleChange}
//                               onBlur={handleBlur}
//                               isInvalid={touched.message && !!errors.message}
//                               className="glass-input"
//                             />
//                             <label htmlFor="message">Your Message</label>
//                             <Form.Control.Feedback type="invalid">
//                               {errors.message}
//                             </Form.Control.Feedback>
//                           </Form.Floating>

//                           <div className="text-end">
//                             <motion.div
//                               whileTap={{ scale: 0.9 }}
//                               whileHover={{ scale: 1.05 }}
//                               transition={{ type: "spring", stiffness: 300 }}
//                             >
//                               <Button
//                                 type="submit"
//                                 variant="light"
//                                 className={`submit-button px-4 py-2 fw-semibold ${
//                                   buttonAnimating ? "fly" : ""
//                                 }`}
//                                 style={{ borderRadius: "30px" }}
//                               >
//                                 <FaPaperPlane className="me-2" />
//                                 Send Message
//                               </Button>
//                             </motion.div>
//                           </div>
//                         </Form>
//                       )}
//                     </Formik>
//                   </motion.div>
//                 </Row>
//               </motion.div>
//             </Col>
//           </Row>
//         </Container>
//       </div>

//       {/* Full Width Map */}
//       <div className="w-100">
//         <iframe
//           title="Google Map"
//           src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3054.522981178017!2d72.66195142435235!3d23.05445671513943!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e878bd3d4c3f9%3A0x218f4d26a542afaa!2sRosevill%20Sky!5e1!3m2!1sen!2sin!4v1749834240012!5m2!1sen!2sin"
//           width="100%"
//           height="450"
//           style={{ border: 0 }}
//           allowFullScreen=""
//           loading="lazy"
//           referrerPolicy="no-referrer-when-downgrade"
//         ></iframe>
//       </div>

//       <Footer />

//       {/* Custom CSS */}
//       <style jsx>{`
//         .contact-section {
//           background: linear-gradient(to right, #2c3e50, #3498db);
//         }
//         .glass-card {
//           background: rgba(255, 255, 255, 0.1);
//           backdrop-filter: blur(15px);
//           border: 1px solid rgba(255, 255, 255, 0.2);
//         }
//         .glass-input {
//           background-color: rgba(255, 255, 255, 0.2);
//           color: white;
//           border: 1px solid rgba(255, 255, 255, 0.3);
//         }
//         .glass-input:focus {
//           background-color: rgba(255, 255, 255, 0.3);
//           color: white;
//           box-shadow: none;
//           border-color: #fff;
//         }
//         .glass-input::placeholder {
//           color: rgba(255, 255, 255, 0.7);
//         }
//         .submit-button.fly {
//           animation: flyUp 0.6s ease-in-out forwards;
//         }
//         @keyframes flyUp {
//           0% {
//             transform: translateY(0) scale(1);
//             opacity: 1;
//           }
//           50% {
//             transform: translateY(-20px) scale(1.2);
//             opacity: 0.7;
//           }
//           100% {
//             transform: translateY(-40px) scale(0.8);
//             opacity: 0;
//           }
//         }
//         .hover-link:hover {
//           color: #ffc107;
//           text-decoration: underline;
//         }
//       `}</style>
//     </>
//   );
// };

// export default Contact;
import React from "react";
import Header from "../component/Header";
import Footer from "../component/Footer";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaClock,
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
      desc: "aksharconsultancy@gmail.com",
      hoverText: "Send email",
    },
    {
      icon: FaMapMarkerAlt,
      title: "Office Address",
      desc: "A-505 RoseVill Sky, Opp. Pushkar Icon, Ahmedabad, Gujarat - 382350",
      hoverText: "View on map",
    },
    {
      icon: FaClock,
      title: "Business Hours",
      desc: "Mon-Sat: 10:00 AM - 7:00 PM",
      hoverText: "Check time",
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
            <span className="text-[#F5B800] font-semibold">Contact Us</span>
          </div>
        </div>
      </section>

      {/* Cards Section */}
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {contactData.map((item, idx) => (
            <div
              key={idx}
              className="group bg-white p-6 rounded-2xl shadow-lg border border-blue-50 text-center transition-all duration-300 hover:shadow-2xl"
            >
              <item.icon className="text-blue-600 text-3xl mx-auto mb-4" />
              <h4 className="font-bold text-blue-900 mb-1">{item.title}</h4>
              <p className="text-gray-600 text-sm mb-2">{item.desc}</p>
              <span className="text-blue-600 text-xs font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
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
              title="Map"
              src="https://www.google.com/maps/embed"
              className="w-full h-full border-0"
            ></iframe>
          </div>
          <div className="space-y-4 text-gray-700">
            <p className="flex items-center gap-3">
              <FaPhoneAlt className="text-blue-600" /> +91-9510990170
            </p>
            <p className="flex items-center gap-3">
              <FaEnvelope className="text-blue-600" /> info@pvassociates.in
            </p>
            <p className="flex items-center gap-3">
              <FaMapMarkerAlt className="text-blue-600" /> 401, Sunrise Business
              Center, Nikol, Ahmedabad
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
>>>>>>> master
  );
};

export default Contact;
