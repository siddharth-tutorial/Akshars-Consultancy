<<<<<<< HEAD
import React, { useEffect, useState } from "react";
import { Container, Row, Col, Card, Button, Breadcrumb } from "react-bootstrap";
import bgImage from "../../assets/bg1.webp";
import Header from "../../component/Header";
import Footer from "../../component/Footer";
import Loader from "../Loader";
import { FaWhatsapp } from "react-icons/fa";

const Bookkeeping = () => {
  const heroStyles = {
    position: "relative",
    backgroundImage: `url(${bgImage})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    color: "white",
    padding: "100px 0",
    overflow: "hidden",
  };

  const contentStyle = { position: "relative", zIndex: 3 };
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    // simulate async loading (API call / assets load etc.)
    const timer = setTimeout(() => {
      setLoading(false); // loader close
    }, 2000); // 2 sec demo

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <div>
          <Header />
          {/* Hero Section */}
          <div style={heroStyles} className="hero-section">
            <div className="overlay-before"></div>
            <div className="overlay-after"></div>
            <Container style={contentStyle}>
              <Row>
                <Col>
                  <h1 className="fw-bold display-4 mb-3 text-center text-md-start">
                    Bookkeeping
                  </h1>
                  <Breadcrumb className="custom-breadcrumb justify-content-center justify-content-md-start">
                    <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
                    <Breadcrumb.Item href="/service">Service</Breadcrumb.Item>
                    <Breadcrumb.Item active style={{ color: "#e45c3c" }}>
                      Bookkeeping
                    </Breadcrumb.Item>
                  </Breadcrumb>
                </Col>
              </Row>
            </Container>
          </div>

          {/* What is Bookkeeping? */}
          <Container className="py-5">
            <Row className="mb-4">
              <Col>
                <h2 className="text-center">What is Bookkeeping?</h2>
                <p className="text-center text-muted">
                  Bookkeeping is the process of recording and organizing all the
                  financial transactions of your business. It provides a solid
                  foundation for financial decision-making, ensuring accuracy
                  and compliance.
                </p>
              </Col>
            </Row>

            {/* Benefits Section */}
            <Row className="text-center mb-5">
              <Col md={4}>
                <h5>📊 Financial Clarity</h5>
                <p>
                  Track your business performance with up-to-date financial
                  records.
                </p>
              </Col>
              <Col md={4}>
                <h5>🧾 Accurate Tax Filing</h5>
                <p>
                  Avoid penalties with accurate reports and timely submissions.
                </p>
              </Col>
              <Col md={4}>
                <h5>💼 Better Business Decisions</h5>
                <p>Use organized data to make informed financial decisions.</p>
              </Col>
            </Row>

            {/* Services Offered */}
            <Row className="mb-5">
              <Col>
                <h2 className="text-center mb-4">Our Bookkeeping Services</h2>
              </Col>
            </Row>
            <Row className="g-4">
              <Col md={4}>
                <Card className="h-100">
                  <Card.Body>
                    <Card.Title>Daily Transaction Recording</Card.Title>
                    <Card.Text>
                      We handle all your daily expenses and income entries with
                      accuracy and consistency.
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
              <Col md={4}>
                <Card className="h-100">
                  <Card.Body>
                    <Card.Title>Bank Reconciliation</Card.Title>
                    <Card.Text>
                      Matching your books with bank statements to ensure
                      everything adds up correctly.
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
              <Col md={4}>
                <Card className="h-100">
                  <Card.Body>
                    <Card.Title>Financial Reports</Card.Title>
                    <Card.Text>
                      Get monthly profit & loss, balance sheet, and cash flow
                      statements for clarity.
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            </Row>

            <Row className="mt-4">
              <Col md={4}>
                <Card className="h-100">
                  <Card.Body>
                    <Card.Title>GST & TDS Recordkeeping</Card.Title>
                    <Card.Text>
                      Ensure proper classification and record maintenance for
                      GST and TDS returns.
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
              <Col md={4}>
                <Card className="h-100">
                  <Card.Body>
                    <Card.Title>Accounts Payable/Receivable</Card.Title>
                    <Card.Text>
                      Stay on top of invoices, bills, and payments with accurate
                      aging reports.
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
              <Col md={4}>
                <Card className="h-100">
                  <Card.Body>
                    <Card.Title>Customized Reports</Card.Title>
                    <Card.Text>
                      We provide tailored reports as per your business needs for
                      better analysis.
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </Container>

          {/* Call to Action */}
          <div className="bg-dark text-white py-5 text-center">
            <Container>
              <h3>Need Help Managing Your Books?</h3>
              <p>
                Our experts ensure error-free bookkeeping so you can focus on
                growing your business.
              </p>
              <Button variant="light" size="lg" href="/contact">
                Contact Us
              </Button>
            </Container>
          </div>
          {/* WhatsApp Floating */}
          <a
            href="https://wa.me/919067640237"
            className="position-fixed"
            style={{
              bottom: "20px",
              left: "20px",
              backgroundColor: "#25D366",
              color: "white",
              padding: "12px",
              borderRadius: "50%",
              zIndex: 9999,
              boxShadow: "0 4px 10px rgba(0,0,0,0.2)",
            }}
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaWhatsapp size={24} />
          </a>

          <Footer />
          <style>{`
  .hero-section .overlay-before {
    position: absolute;
    inset: 0;
    background-color: rgba(0,0,0,0.4);
    z-index: 1;
  }
  .hero-section .overlay-after {
    position: absolute;
    top: 0;
    right: 0;
    width: 40%;
    height: 100%;
    background-color: rgba(0,0,0,0.2);
    clip-path: polygon(0 0, 100% 0, 100% 100%, 20% 100%);
    z-index: 2;
  }

  /* Breadcrumb text color */
  .breadcrumb-item,
  .breadcrumb-item a {
    color: white !important;
    text-decoration: none !important;
  }
  
  /* Hover underline */
  .custom-breadcrumb .breadcrumb-item a:hover {
    text-decoration: underline !important;
  }

  /* Active item color */
  .custom-breadcrumb .breadcrumb-item.active {
    color: #e45c3c !important;
    font-weight: bold;
  }

  /* Divider color and symbol */
  .breadcrumb-item + .breadcrumb-item::before {
    color: white !important;
    content: ">" !important;
    margin: 0 8px !important;
  }
    
`}</style>
        </div>
      )}
    </>
  );
};

export default Bookkeeping;
=======
// import React from "react";
// import { Container, Row, Col, Card, Button, Breadcrumb } from "react-bootstrap";
// // import bgImage from "../../assets/bg1.webp";
// import Header from "../../component/Header";
// import Footer from "../../component/Footer";

// const Bookkeeping = () => {
//   const bgImage =
//     "https://fidelityprofessionaladvisors.in/wp-content/uploads/2023/12/Book-keeping-Banner.png";
//   const heroStyles = {
//     position: "relative",
//     backgroundImage: `url(${bgImage})`,
//     backgroundSize: "cover",
//     backgroundPosition: "center",
//     color: "white",
//     padding: "100px 0",
//     overflow: "hidden",
//   };

//   const contentStyle = { position: "relative", zIndex: 3 };
//   return (
//     <div>
//       <Header />
//       {/* Hero Section */}
//       <div style={heroStyles} className="hero-section">
//         <div className="overlay-before"></div>
//         <div className="overlay-after"></div>
//         <Container style={contentStyle}>
//           <Row>
//             <Col>
//               <h1 className="fw-bold display-4 mb-3 text-center text-md-start">
//                 Bookkeeping
//               </h1>
//               <Breadcrumb className="custom-breadcrumb justify-content-center justify-content-md-start">
//                 <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
//                 <Breadcrumb.Item href="/service">Service</Breadcrumb.Item>
//                 <Breadcrumb.Item active style={{ color: "#e45c3c" }}>
//                   Bookkeeping
//                 </Breadcrumb.Item>
//               </Breadcrumb>
//             </Col>
//           </Row>
//         </Container>
//       </div>

//       {/* What is Bookkeeping? */}
//       <Container className="py-5">
//         <Row className="mb-4">
//           <Col>
//             <h2 className="text-center">What is Bookkeeping?</h2>
//             <p className="text-center text-muted">
//               Bookkeeping is the process of recording and organizing all the
//               financial transactions of your business. It provides a solid
//               foundation for financial decision-making, ensuring accuracy and
//               compliance.
//             </p>
//           </Col>
//         </Row>

//         {/* Benefits Section */}
//         <Row className="text-center mb-5">
//           <Col md={4}>
//             <h5>📊 Financial Clarity</h5>
//             <p>
//               Track your business performance with up-to-date financial records.
//             </p>
//           </Col>
//           <Col md={4}>
//             <h5>🧾 Accurate Tax Filing</h5>
//             <p>Avoid penalties with accurate reports and timely submissions.</p>
//           </Col>
//           <Col md={4}>
//             <h5>💼 Better Business Decisions</h5>
//             <p>Use organized data to make informed financial decisions.</p>
//           </Col>
//         </Row>

//         {/* Services Offered */}
//         <Row className="mb-5">
//           <Col>
//             <h2 className="text-center mb-4">Our Bookkeeping Services</h2>
//           </Col>
//         </Row>
//         <Row className="g-4">
//           <Col md={4}>
//             <Card className="h-100">
//               <Card.Body>
//                 <Card.Title>Daily Transaction Recording</Card.Title>
//                 <Card.Text>
//                   We handle all your daily expenses and income entries with
//                   accuracy and consistency.
//                 </Card.Text>
//               </Card.Body>
//             </Card>
//           </Col>
//           <Col md={4}>
//             <Card className="h-100">
//               <Card.Body>
//                 <Card.Title>Bank Reconciliation</Card.Title>
//                 <Card.Text>
//                   Matching your books with bank statements to ensure everything
//                   adds up correctly.
//                 </Card.Text>
//               </Card.Body>
//             </Card>
//           </Col>
//           <Col md={4}>
//             <Card className="h-100">
//               <Card.Body>
//                 <Card.Title>Financial Reports</Card.Title>
//                 <Card.Text>
//                   Get monthly profit & loss, balance sheet, and cash flow
//                   statements for clarity.
//                 </Card.Text>
//               </Card.Body>
//             </Card>
//           </Col>
//         </Row>

//         <Row className="mt-4">
//           <Col md={4}>
//             <Card className="h-100">
//               <Card.Body>
//                 <Card.Title>GST & TDS Recordkeeping</Card.Title>
//                 <Card.Text>
//                   Ensure proper classification and record maintenance for GST
//                   and TDS returns.
//                 </Card.Text>
//               </Card.Body>
//             </Card>
//           </Col>
//           <Col md={4}>
//             <Card className="h-100">
//               <Card.Body>
//                 <Card.Title>Accounts Payable/Receivable</Card.Title>
//                 <Card.Text>
//                   Stay on top of invoices, bills, and payments with accurate
//                   aging reports.
//                 </Card.Text>
//               </Card.Body>
//             </Card>
//           </Col>
//           <Col md={4}>
//             <Card className="h-100">
//               <Card.Body>
//                 <Card.Title>Customized Reports</Card.Title>
//                 <Card.Text>
//                   We provide tailored reports as per your business needs for
//                   better analysis.
//                 </Card.Text>
//               </Card.Body>
//             </Card>
//           </Col>
//         </Row>
//       </Container>

//       {/* Call to Action */}
//       <div className="bg-dark text-white py-5 text-center">
//         <Container>
//           <h3>Need Help Managing Your Books?</h3>
//           <p>
//             Our experts ensure error-free bookkeeping so you can focus on
//             growing your business.
//           </p>
//           <Button variant="light" size="lg" href="/contact">
//             Contact Us
//           </Button>
//         </Container>
//       </div>
//       <Footer />
//       <style>{`
//   .hero-section .overlay-before {
//     position: absolute;
//     inset: 0;
//     background-color: rgba(0,0,0,0.4);
//     z-index: 1;
//   }
//   .hero-section .overlay-after {
//     position: absolute;
//     top: 0;
//     right: 0;
//     width: 40%;
//     height: 100%;
//     background-color: rgba(0,0,0,0.2);
//     clip-path: polygon(0 0, 100% 0, 100% 100%, 20% 100%);
//     z-index: 2;
//   }

//   /* Breadcrumb text color */
//   .breadcrumb-item,
//   .breadcrumb-item a {
//     color: white !important;
//     text-decoration: none !important;
//   }

//   /* Hover underline */
//   .custom-breadcrumb .breadcrumb-item a:hover {
//     text-decoration: underline !important;
//   }

//   /* Active item color */
//   .custom-breadcrumb .breadcrumb-item.active {
//     color: #e45c3c !important;
//     font-weight: bold;
//   }

//   /* Divider color and symbol */
//   .breadcrumb-item + .breadcrumb-item::before {
//     color: white !important;
//     content: ">" !important;
//     margin: 0 8px !important;
//   }

// `}</style>
//     </div>
//   );
// };

// export default Bookkeeping;

import { useState } from "react";
// import Header from "./components/Header";
// import Footer from "./components/Footer";
import {
  // TrendingUp,
  // ScrollText,
  // Briefcase,
  ArrowRight,
  ChevronRight,
  ChevronDown,
  HelpCircle,
  CheckCircle2,
  // ShieldCheck,
  Coins,
  BarChart3,
  Settings,
  RefreshCw,
  Send,
  Check,
  Percent,
  PenTool,
} from "lucide-react";
import Header from "../../component/Header";
import Footer from "../../component/Footer";

export default function App() {
  // FAQ accordion state
  const [openFaq, setOpenFaq] = useState(0);

  // Contact Form States
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    businessType: "Startup",
    needs: "Full Bookkeeping",
    message: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (formData.name && formData.email) {
      setFormSubmitted(true);
      setTimeout(() => {
        setFormSubmitted(false);
        setFormData({
          name: "",
          email: "",
          phone: "",
          businessType: "Startup",
          needs: "Full Bookkeeping",
          message: "",
        });
      }, 5000);
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col justify-between overflow-x-hidden selection:bg-orange-600 selection:text-white font-sans">
      {/* Premium Header */}
      <Header />

      {/* Hero Section */}
      <section
        id="hero"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&q=80&w=1920&h=800')`,
        }}
        className="relative bg-cover bg-center text-white pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden flex-shrink-0"
      >
        {/* Dark radial visual gradient overlay */}
        <div className="absolute inset-0 bg-slate-950/90 z-10" />
        <div className="absolute inset-0 opacity-15 bg-[radial-gradient(circle_at_30%_30%,#e45c3c_0%,transparent_50%)] z-15" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
          <div className="max-w-3xl space-y-6 text-center md:text-left">
            {/* Tag Badge */}
            <div className="inline-flex items-center gap-1.5 py-1 px-3 rounded-full bg-white/10 backdrop-blur-md border border-white/15 text-xs text-orange-400 font-mono tracking-wide">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
              <span>Tax Year 2026 Audit Ready</span>
            </div>

            {/* Breadcrumbs */}
            <div className="flex items-center gap-3 text-slate-400 text-xs font-semibold uppercase tracking-widest justify-center md:justify-start">
              <span>Home</span>
              <span className="opacity-30">/</span>
              <span>Services</span>
              <span className="opacity-30">/</span>
              <span className="text-orange-500">Bookkeeping</span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-none font-display">
              Bookkeeping Solutions
            </h1>

            <p className="text-slate-400 max-w-2xl text-sm md:text-base leading-relaxed">
              Precision-focused financial record maintenance for growing
              enterprises. We ensure your books are audit-ready, accurate, and
              optimized for strategic growth.
            </p>

            {/* Quick Action Buttons */}
            <div className="pt-2 flex flex-col sm:flex-row items-center gap-4 justify-center md:justify-start">
              <button
                onClick={() =>
                  document
                    .getElementById("contact")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-orange-600 hover:bg-orange-700 text-white font-bold py-3 px-6 rounded-lg shadow-md hover:scale-[1.01] transition-all cursor-pointer text-sm"
              >
                <span>Free Consultation</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              <button
                onClick={() =>
                  document
                    .getElementById("services")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/15 border border-white/20 text-white font-semibold py-3 px-6 rounded-lg backdrop-blur-sm transition-all cursor-pointer text-sm"
              >
                Explore Services
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Live Business Overview */}
      <section
        id="overview"
        className="py-20 bg-white border-b border-slate-200"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Information Column */}
            <div className="lg:col-span-7 space-y-6">
              <div className="space-y-2 text-center md:text-left">
                <span className="text-orange-600 font-bold tracking-wider text-xs uppercase block">
                  Core Foundations
                </span>
                <h2 className="text-3xl font-display font-extrabold text-slate-900 tracking-tight">
                  What is Bookkeeping?
                </h2>
              </div>

              <div className="text-slate-600 text-sm md:text-base leading-relaxed space-y-4 text-center md:text-left">
                <p>
                  At its core,{" "}
                  <strong className="text-slate-950 font-semibold">
                    bookkeeping
                  </strong>{" "}
                  is the meticulous process of recording, categorizing, and
                  organizing every single transaction generated by your
                  business.
                </p>
                <p>
                  Rather than just storing physical receipts, it establishes a
                  live, audit-proof single source of truth for your cashflow,
                  invoices, taxes, and asset statements.
                </p>
              </div>

              {/* Sub features with custom checklist */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2 text-left">
                <div className="flex gap-2.5 items-start">
                  <div className="mt-1 p-1 rounded-md bg-emerald-50 text-emerald-600 shrink-0">
                    <CheckCircle2 className="w-4 h-4" />
                  </div>
                  <div>
                    <h5 className="font-bold text-slate-900 text-sm">
                      Regulatory Conformity
                    </h5>
                    <p className="text-xs text-slate-500 mt-0.5">
                      Compliant with IRS, VAT, and corporate audit standards.
                    </p>
                  </div>
                </div>

                <div className="flex gap-2.5 items-start">
                  <div className="mt-1 p-1 rounded-md bg-emerald-50 text-emerald-600 shrink-0">
                    <CheckCircle2 className="w-4 h-4" />
                  </div>
                  <div>
                    <h5 className="font-bold text-slate-900 text-sm">
                      Real-time Bank feeds
                    </h5>
                    <p className="text-xs text-slate-500 mt-0.5">
                      Automated synchronization of cash entries safely.
                    </p>
                  </div>
                </div>

                <div className="flex gap-2.5 items-start">
                  <div className="mt-1 p-1 rounded-md bg-emerald-50 text-emerald-600 shrink-0">
                    <CheckCircle2 className="w-4 h-4" />
                  </div>
                  <div>
                    <h5 className="font-bold text-slate-900 text-sm">
                      Audit-proof records
                    </h5>
                    <p className="text-xs text-slate-500 mt-0.5">
                      Fully indexed digital paper trails for IRS requests.
                    </p>
                  </div>
                </div>

                <div className="flex gap-2.5 items-start">
                  <div className="mt-1 p-1 rounded-md bg-emerald-50 text-emerald-600 shrink-0">
                    <CheckCircle2 className="w-4 h-4" />
                  </div>
                  <div>
                    <h5 className="font-bold text-slate-900 text-sm">
                      Seamless Tax Prep
                    </h5>
                    <p className="text-xs text-slate-500 mt-0.5">
                      Never rush at tax time; files are compiled monthly.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Visual Interactive Trust Box */}
            <div className="lg:col-span-5">
              <div className="relative rounded-2xl overflow-hidden bg-slate-900 text-white p-8 md:p-10 shadow-lg border border-slate-800">
                <div className="absolute top-0 right-0 w-64 h-64 bg-orange-500/10 rounded-full blur-[60px] pointer-events-none" />
                <div className="absolute bottom-0 left-0 w-48 h-48 bg-teal-500/10 rounded-full blur-[50px] pointer-events-none" />

                <div className="relative z-10 space-y-6">
                  <div className="inline-flex items-center gap-2 py-1 px-3 rounded bg-orange-500/10 text-[#e45c3c] text-xs font-mono font-bold tracking-wide">
                    👑 THE GOLD STANDARD
                  </div>

                  <h4 className="text-xl font-display font-medium leading-tight">
                    Why businesses sink without professional bookkeeping
                  </h4>

                  <blockquote className="border-l-2 border-orange-500 pl-4 text-sm text-slate-300 italic">
                    "Nearly 44% of small businesses fail due to simple cash flow
                    shortages that could have been completely avoided with
                    accurate forecasting and monthly balance ledgers."
                  </blockquote>

                  <div className="pt-4 border-t border-slate-800 flex items-center gap-4">
                    <div className="text-center bg-slate-800 p-3 rounded-xl w-1/2">
                      <div className="text-xl font-display font-extrabold text-orange-500">
                        99.8%
                      </div>
                      <div className="text-[10px] text-slate-400 font-mono tracking-wider mt-1">
                        ACCURACY INDEX
                      </div>
                    </div>
                    <div className="text-center bg-slate-800 p-3 rounded-xl w-1/2">
                      <div className="text-xl font-display font-extrabold text-orange-500">
                        10+ Yrs
                      </div>
                      <div className="text-[10px] text-slate-400 font-mono tracking-wider mt-1">
                        TRUSTED AUDIT EXP
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section
        id="benefits"
        className="py-20 bg-slate-50 border-b border-slate-200"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-orange-600 font-bold tracking-wider text-xs uppercase block mb-1">
              Why Choose Us
            </span>
            <h2 className="text-3xl font-display font-extrabold text-slate-900 tracking-tight">
              Operational Advantages
            </h2>
            <p className="text-slate-600 mt-2 text-sm leading-relaxed">
              Meticulous details yield immense business security. Experience
              clean execution at every step.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="flex items-start gap-4 p-5 bg-white border border-slate-200 rounded-xl shadow-sm hover:border-orange-200 transition-colors duration-200 group">
              <div className="bg-orange-50 p-2 rounded-lg text-orange-600 font-bold text-xl h-10 w-10 flex items-center justify-center shrink-0">
                📊
              </div>
              <div>
                <h4 className="font-bold text-slate-900 text-sm mb-1">
                  Financial Clarity
                </h4>
                <p className="text-slate-500 text-xs leading-relaxed">
                  Real-time visibility into business performance and margins.
                  Track where your capital flows.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-5 bg-white border border-slate-200 rounded-xl shadow-sm hover:border-orange-200 transition-colors duration-200 group">
              <div className="bg-orange-50 p-2 rounded-lg text-orange-600 font-bold text-xl h-10 w-10 flex items-center justify-center shrink-0">
                🧾
              </div>
              <div>
                <h4 className="font-bold text-slate-900 text-sm mb-1">
                  Tax Compliance
                </h4>
                <p className="text-slate-500 text-xs leading-relaxed">
                  Hassle-free tax filing with proactive categorized reports and
                  zero late filing penalties.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-5 bg-white border border-slate-200 rounded-xl shadow-sm hover:border-orange-200 transition-colors duration-200 group">
              <div className="bg-orange-50 p-2 rounded-lg text-orange-600 font-bold text-xl h-10 w-10 flex items-center justify-center shrink-0">
                💼
              </div>
              <div>
                <h4 className="font-bold text-slate-900 text-sm mb-1">
                  Strategic Planning
                </h4>
                <p className="text-slate-500 text-xs leading-relaxed">
                  Use organized balance Sheets data to forecast, audit cash
                  positions, and make better decisions.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid Section */}
      <section id="services" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-orange-600 font-bold tracking-wider text-xs uppercase block mb-1">
              Our Professional Solutions
            </span>
            <h2 className="text-3xl font-display font-extrabold text-slate-900 tracking-tight">
              Our Bookkeeping Services
            </h2>
            <p className="text-slate-600 mt-2 text-sm leading-relaxed">
              Tailored accounting workflows handled by standard certified
              accounting experts.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "Daily Transactions",
                category: "Operations",
                text: "Precise recording of daily income and expense entries with automated classification and strict compliance.",
                icon: <PenTool className="w-5 h-5 text-orange-650" />,
              },
              {
                title: "Bank Reconciliation",
                category: "Assurance",
                text: "Matching your internal books against bank statements to identify and resolve discrepancies instantly.",
                icon: <RefreshCw className="w-5 h-5 text-orange-650" />,
              },
              {
                title: "Financial Health",
                category: "Reporting",
                text: "Comprehensive on-time monthly Profit & Loss statements, balance sheets, and custom cash flow metrics.",
                icon: <BarChart3 className="w-5 h-5 text-orange-650" />,
              },
              {
                title: "GST & TDS Records",
                category: "Statutory",
                text: "Accurate record classifications ensuring complete compliance with statutory regional sales and dividend tax regulations.",
                icon: <Percent className="w-5 h-5 text-orange-650" />,
              },
              {
                title: "Accounts Aging",
                category: "Cash Flow",
                text: "Dedicated proactive management of payable and receivable listings to secure optimal operational liquidity.",
                icon: <Coins className="w-5 h-5 text-orange-650" />,
              },
              {
                title: "Custom Analytics",
                category: "Insight",
                text: "Bespoke ledger reports generated and organized specifically around your enterprise's KPIs and strategic criteria.",
                icon: <Settings className="w-5 h-5 text-orange-650" />,
              },
            ].map((service, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-xl border border-slate-200 flex flex-col justify-between hover:border-orange-200 transition-colors shadow-sm duration-300 group"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="text-xs font-bold text-orange-600 uppercase tracking-tighter">
                      {service.category}
                    </div>
                    <div className="bg-orange-50/70 p-1.5 rounded-lg text-orange-600 shrink-0">
                      {service.icon}
                    </div>
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2 group-hover:text-slate-950 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-slate-600 text-sm leading-relaxed italic">
                    {service.text}
                  </p>
                </div>

                <div
                  onClick={() =>
                    document
                      .getElementById("contact")
                      ?.scrollIntoView({ behavior: "smooth" })
                  }
                  className="pt-5 border-t border-slate-100 mt-5 flex items-center gap-1.5 text-xs font-bold text-slate-400 group-hover:text-orange-600 transition-colors cursor-pointer"
                >
                  <span>Request requirements briefed</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Frequently Asked Questions Section */}
      <section
        id="faq"
        className="py-20 bg-slate-50/50 border-b border-slate-200"
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-14" id="faq-heading-container">
            <span className="text-orange-600 font-bold tracking-wider text-xs uppercase block mb-1">
              HAVE QUESTIONS?
            </span>
            <h2
              className="text-3xl font-display font-extrabold text-slate-900 tracking-tight"
              id="faq-title"
            >
              Frequently Asked Questions
            </h2>
            <p className="text-slate-600 mt-2 text-sm leading-relaxed max-w-md mx-auto">
              Clear, transparent answers to help you navigate our services,
              pricing structure, and data security.
            </p>
          </div>

          <div className="space-y-4" id="faq-list">
            {[
              {
                q: "How does your pricing model work?",
                a: "We offer transparent, flat-rate monthly pricing tiers designed around your average monthly expense volume and entity size, so there are never any surprise hourly invoices or hidden fees. We also provide customized structures for high-volume startups and SMEs. Contact us for a precise quote tailormade for your enterprise.",
              },
              {
                q: "How do you guarantee and handle data security?",
                a: "Security is our absolute priority. We access and transfer financial records exclusively under bank-grade 256-Bit TLS encryption standards. All core process pathways are fully secure and align with strict GDPR guidelines and SOC-2 standard controls. Furthermore, we favor read-only API feeds for bank reconciliations, ensuring your primary bank credentials remain untouched.",
              },
              {
                q: "What accounting software systems do you support?",
                a: "Our certified accounting experts operate natively in standard industry gold-standards including QuickBooks Online, Xero, and Sage. We also seamlessly synchronize raw feed data from operational processors such as Stripe, Shopify, Gusto, and HubSpot to construct pristine ledgers without manual error.",
              },
              {
                q: "How often are my accounts updated and reconciled?",
                a: "By default, our standard monthly packages include weekly ledger entries and monthly bank state reconciliations. For fast-paced businesses requiring more frequent updates or precise current-day insight, we can configure customized, high-frequency workflows to align with your team's operational rhythm.",
              },
              {
                q: "Can you help organize or file statutory GST/TDS returns?",
                a: "Yes. We maintain rigorous documentation and categorizations designed specifically to support timely GST and TDS reconciliation. We make sure each transaction has perfect supporting receipts, invoices, and classifications, giving your tax accountant or internal team an effortless audit trail other bookkeepers miss.",
              },
            ].map((faq, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div
                  key={idx}
                  id={`faq-card-${idx}`}
                  className="bg-white border border-slate-200 rounded-xl overflow-hidden shadow-sm transition-all duration-300"
                >
                  <button
                    id={`faq-btn-${idx}`}
                    onClick={() => setOpenFaq(isOpen ? null : idx)}
                    className="w-full flex items-center justify-between p-5 text-left font-bold text-slate-800 hover:text-[#e45c3c] hover:bg-slate-50 transition-colors duration-200 cursor-pointer"
                    aria-expanded={isOpen}
                  >
                    <span className="text-sm md:text-base pr-4 flex items-center gap-3">
                      <HelpCircle
                        id={`faq-icon-${idx}`}
                        className="w-4.5 h-4.5 text-orange-600 shrink-0"
                      />
                      <span>{faq.q}</span>
                    </span>
                    <ChevronDown
                      id={`faq-chevron-${idx}`}
                      className={`w-5 h-5 text-slate-400 shrink-0 transition-transform duration-300 ${isOpen ? "transform rotate-180 text-orange-650" : ""}`}
                    />
                  </button>
                  <div
                    id={`faq-collapse-${idx}`}
                    className={`transition-all duration-300 ease-in-out ${isOpen ? "max-h-[300px] border-t border-slate-100 opacity-100" : "max-h-0 opacity-0 overflow-hidden"}`}
                  >
                    <div className="p-5 text-slate-600 text-xs sm:text-sm leading-relaxed bg-slate-50/50">
                      {faq.a}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Interactive Booking & Consultation Form Section */}
      <section
        id="contact"
        className="py-20 bg-slate-50 border-t border-slate-200 relative overflow-hidden"
      >
        <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-96 h-96 bg-orange-100/30 rounded-full blur-[100px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left text column */}
            <div className="lg:col-span-5 space-y-6 text-center lg:text-left">
              <span className="text-orange-600 font-bold tracking-wider text-xs uppercase block">
                Connect With Us
              </span>
              <h2 className="text-3xl md:text-5xl font-display font-extrabold text-slate-900 tracking-tight leading-none">
                Get Your Books In Order
              </h2>
              <p className="text-slate-600 text-sm md:text-base leading-relaxed">
                Provide the details of your business organization below. Our
                certified financial analysts will review your current pipelines
                and construct a streamlined action proposal—fully free of
                charge.
              </p>

              <div className="space-y-4 hidden lg:block pt-4">
                <div className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full bg-orange-100 flex items-center justify-center text-orange-600 shrink-0">
                    <Check className="w-3 h-3" />
                  </div>
                  <span className="text-xs md:text-sm font-semibold text-slate-700">
                    Same-day analyst response guarantee
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full bg-orange-100 flex items-center justify-center text-orange-600 shrink-0">
                    <Check className="w-3 h-3" />
                  </div>
                  <span className="text-xs md:text-sm font-semibold text-slate-700">
                    No commitment, free digital ledger outline
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full bg-orange-100 flex items-center justify-center text-orange-600 shrink-0">
                    <Check className="w-3 h-3" />
                  </div>
                  <span className="text-xs md:text-sm font-semibold text-slate-700">
                    Fully GDPR & SOC-2 Audit Secure
                  </span>
                </div>
              </div>
            </div>

            {/* Right Form Column */}
            <div className="lg:col-span-7">
              <div className="bg-white p-6 sm:p-10 rounded-xl shadow-sm border border-slate-200 relative">
                {formSubmitted ? (
                  <div className="text-center py-12 space-y-4">
                    <div className="w-16 h-16 bg-emerald-50 text-emerald-600 rounded-full flex items-center justify-center mx-auto shadow-sm">
                      <Check className="w-8 h-8 stroke-[3px]" />
                    </div>
                    <h3 className="text-2xl font-display font-bold text-slate-900">
                      Brief Received!
                    </h3>
                    <p className="text-slate-500 text-sm max-w-md mx-auto leading-relaxed">
                      Thank you for trusting PrecisionBooks. One of our Senior
                      Bookkeepers is reviewing your parameters and will reach
                      out to you within the business day to organize your audit.
                    </p>
                    <div className="pt-2 text-xs font-mono text-slate-400">
                      A copy of this proposal has been logged to client
                      pipelines.
                    </div>
                  </div>
                ) : (
                  <form onSubmit={handleFormSubmit} className="space-y-5">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {/* Name */}
                      <div className="space-y-1.5 animate-fade-in">
                        <label className="text-xs font-bold text-slate-700 tracking-wide uppercase">
                          Full Name
                        </label>
                        <input
                          type="text"
                          name="name"
                          required
                          value={formData.name}
                          onChange={handleInputChange}
                          placeholder="Jane Doe"
                          className="w-full text-sm py-2 px-3 bg-slate-50 border border-slate-200 rounded-lg focus:bg-white focus:outline-none focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 transition-all font-medium"
                        />
                      </div>

                      {/* Email */}
                      <div className="space-y-1.5">
                        <label className="text-xs font-bold text-slate-700 tracking-wide uppercase">
                          Business Email
                        </label>
                        <input
                          type="email"
                          name="email"
                          required
                          value={formData.email}
                          onChange={handleInputChange}
                          placeholder="jane@company.com"
                          className="w-full text-sm py-2 px-3 bg-slate-50 border border-slate-200 rounded-lg focus:bg-white focus:outline-none focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 transition-all font-medium"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {/* Corporate Scale */}
                      <div className="space-y-1.5">
                        <label className="text-xs font-bold text-slate-700 tracking-wide uppercase">
                          Business Structure
                        </label>
                        <select
                          name="businessType"
                          value={formData.businessType}
                          onChange={handleInputChange}
                          className="w-full text-sm py-2 px-3 bg-slate-50 border border-slate-200 rounded-lg focus:bg-white focus:outline-none focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 transition-all cursor-pointer font-semibold"
                        >
                          <option value="Freelancer">
                            Sole Proprietorship / Freelancer
                          </option>
                          <option value="Startup">
                            Early-Stage Venture / LLC
                          </option>
                          <option value="SME">
                            Medium Corporate Enterprise
                          </option>
                          <option value="Nonprofit">
                            Registered Charity / NGO
                          </option>
                        </select>
                      </div>

                      {/* Primary Requirement */}
                      <div className="space-y-1.5">
                        <label className="text-xs font-bold text-slate-700 tracking-wide uppercase">
                          Immediate Goal
                        </label>
                        <select
                          name="needs"
                          value={formData.needs}
                          onChange={handleInputChange}
                          className="w-full text-sm py-2 px-3 bg-slate-50 border border-slate-200 rounded-lg focus:bg-white focus:outline-none focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 transition-all cursor-pointer font-semibold"
                        >
                          <option value="Full Bookkeeping">
                            Full Monthly Services
                          </option>
                          <option value="GST TDS Returns">
                            TDS & GST Reconciliation
                          </option>
                          <option value="Tax Planning">
                            Proactive Corporate Tax Strategy
                          </option>
                          <option value="Clean-up Audit">
                            Back-logs Clean-up Audit
                          </option>
                        </select>
                      </div>
                    </div>

                    {/* Brief text box */}
                    <div className="space-y-1.5">
                      <label className="text-xs font-bold text-slate-700 tracking-wide uppercase">
                        Enterprise Outlines / Special Notes
                      </label>
                      <textarea
                        name="message"
                        rows={3}
                        value={formData.message}
                        onChange={handleInputChange}
                        placeholder="e.g. Need help sorting pending 2025 GST files..."
                        className="w-full text-sm py-2 px-3 bg-slate-50 border border-slate-200 rounded-lg focus:bg-white focus:outline-none focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 transition-all resize-none font-medium"
                      />
                    </div>

                    {/* Submit */}
                    <button
                      type="submit"
                      className="w-full inline-flex items-center justify-center gap-2 bg-slate-900 hover:bg-slate-800 text-white font-bold py-3 px-6 rounded-lg transition-all duration-250 cursor-pointer text-sm shadow-sm"
                    >
                      <span>Submit Secure Audit Proposal</span>
                      <Send className="w-4 h-4 text-orange-500" />
                    </button>

                    <p className="text-[10px] text-center text-slate-400 font-mono tracking-tight select-none">
                      🔒 Secured via 256-Bit TLS corporate encryption standard.
                    </p>
                  </form>
                )}
              </div>
            </div>
          </div>

          {/* Combined Bottom CTA & Footer layout */}
          <div className="bg-slate-900 text-white flex flex-col md:flex-row rounded-xl overflow-hidden border border-slate-800 shadow-md min-h-28 mt-16">
            <div className="md:w-2/3 flex flex-col justify-center p-8 border-b md:border-b-0 md:border-r border-slate-800">
              <h5 className="text-lg font-bold">
                Need error-free financial management?
              </h5>
              <p className="text-slate-400 text-sm">
                Speak with a certified specialist to optimize your business
                books.
              </p>
            </div>
            <div
              onClick={() =>
                document
                  .getElementById("contact")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              className="md:w-1/3 flex items-center justify-center bg-orange-600 hover:bg-orange-700 transition-colors cursor-pointer group p-8"
            >
              <div className="text-center">
                <span className="block text-sm font-bold tracking-wider">
                  GET STARTED TODAY
                </span>
                <span className="text-xs opacity-80 font-medium group-hover:underline transition-all underline-offset-4">
                  Book a free consultation →
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Elegant Footer */}
      <Footer />
    </div>
  );
}
>>>>>>> master
