<<<<<<< HEAD
import React, { useState, useEffect } from "react";
import { Container, Card, Form, Row, Col } from "react-bootstrap";
import Header from "../../component/Header";
import Footer from "../../component/Footer";
import Loader from "../Loader";

=======
// import React, { useState, useEffect } from "react";
// import { Container, Card, Form, Row, Col } from "react-bootstrap";
// import Header from "../../component/Header";
// import Footer from "../../component/Footer";

// const sectionRates = {
//   "193,interest on Securities": 10,
//   "194, Dividend": 10,
//   "194A,Interest other than interest on Securities": 10,
//   "194B, Winnings from lotteries, crossword puzzles,": 30,
//   "194BB,Winnings from Horse Races": 30,
//   "194C, Payment to Contractor/Sub Contractor(INDIVIDUAL/HUF)": 1,
//   "194C,payment to Contractors/Sub Contractor(OTHERS)": 2,
//   "194C,Payment to Transporter": 0,
//   "194D,Insurance Commission": 5,
//   "194E,Non-Resident Sportsman or Sports Association": 20,
//   "194EE,Payment for National Savings Scheme": 10,
//   "194F,Payment for Repurchase of units": 15,
//   "194G,Commission on Sale of Lottery Ticket": 5,
//   "194H,Commission": 5,
//   "194I,Rent on Land and Building": 10,
//   "194I,Rent on Plant and Machinery": 2,
//   "194IA,Payment on Transfer of Immoveable Property": 1,
//   "194IB,payment on Rent by Individual/HUF": 5,
//   "194J,Fees for Professional or Technical Services": 10,
//   "194J,remuneration or commission paid to director": 10,
//   "194J,Fee for Technical Services": 2,
//   "194J,Payments to Call Center Operator": 2,
//   "194LA,Payment of Compensation for Immovable Property": 10,
//   "194LB,Interest from infrastructure debt fund": 5,
//   "194LC,Interest from specified indian company": 5,
//   "194K,Payment of Dividend by Mutual Funds": 10,
//   "194M,Payment to Contractors/Professional by Individual/HUF": 5,
//   "194N,TDS on Cash Withdrawls above 1 Crore": 2,
//   "194O,TDS on Ecommerce Participants": 1,
//   "195,Payment to NOn-Resident (Long Term Capital Gains)": 20,
//   "195,Payment to Non-Resident(Rent)": 30,
//   "195,Payment to Non-Resident(Royality)": 50,
//   "195,Payment to Non-Resident (Winning from Lottery /Horse Races etc.)": 30,
//   "206C,Alcoholic liquor for human consumption": 1,
//   "206c,Timber obtained under a forest lease": 2.5,
//   "206C,Timber obtained under any mode other than forest lease": 2.5,
//   "206C,Any other forest product not being timber or tendu leave": 2.5,
//   "206C,Scrap": 1,
//   "206C,Parking Lot": 2,
//   "206C,Toll Plaza": 2,
//   "206C,Minning and Quarrying": 2,
//   "206C,Tendu leaves": 2,
//   "206C,Minerals, being coal or lignite or iron ore": 1,
//   "206C,Bullion, jewelleryor Any other goods or services": 1,
// };

// const sectionNotes = {
//   193: "No TDS is deductible for payments not exceeding Rs. 5000.",
//   "194A": "No TDS is deductible for payments not exceeding Rs. 10000 (Banks) & Rs. 5000 (Others)",
//   "194B": "No TDS is deductible for payments not exceeding Rs. 10000",
//   "194BB": "No TDS is deductible for payments not exceeding Rs. 10000",
//   "194C": "No TDS is deductible for payments not exceeding Rs. 30000 Per Contract or Rs. 100000 per Annum",
//   "194D": "No TDS is deductible for payments not exceeding Rs. 15000.",
//   "194EE": "No TDS is deductible for payments not exceeding Rs. 2500.",
//   "194F": "No TDS is deductible for payments not exceeding Rs. 1000.",
//   "194G": "No TDS is deductible for payments not exceeding Rs. 15000.",
//   "194H": "No TDS is deductible for payments not exceeding Rs. 15000.",
//   "194I": "No TDS is deductible for payments not exceeding Rs. 240000",
//   "194IA": "No TDS is deductible for payments not exceeding Rs. 5000000",
//   "194IB": "No TDS is deductible for payments not exceeding Rs. 50000",
//   "194J": "No TDS is deductible for payments not exceeding Rs. 30000",
//   "194LA": "No TDS is deductible for payments not exceeding Rs. 250000",
//   "194K": "No TDS is deductible for payments not exceeding Rs. 5000",
//   "194M": "No TDS is deductible for payments not exceeding Rs. 5000000",
//   "194O": "No TDS is deductible for payments not exceeding Rs. 0",
// };

// function Tds() {
//   const [rate, setRate] = useState(0);
//   const [amount, setAmount] = useState(0);
//   const [section, setSection] = useState("");
//   const [panQuoted, setPanQuoted] = useState("Yes");

//   const tax = ((rate / 100) * amount).toFixed(2);
//   const sectionCode = section.split(",")[0].toUpperCase();

//   useEffect(() => {
//     if (!section) {
//       setRate(0);
//       return;
//     }

//     const baseRate = sectionRates[section] || 0;

//     if (sectionCode === "206C") {
//       setRate(baseRate);
//     } else {
//       setRate(panQuoted === "No" ? 20 : baseRate);
//     }
//   }, [section, panQuoted]);

//   return (
//     <>
//       <Header />
//       <Container className="mt-5 mb-5">
//         <Card className="shadow border rounded-lg">
//           <Card.Header className="text-center bg-primary text-white py-2">
//             <h5 className="m-0">TDS Calculator</h5>
//           </Card.Header>

//           <Card.Body className="bg-light">
//             <Row className="mb-3">
//               <Col md={6}>
//                 <Form.Label>Section</Form.Label>
//                 <Form.Select
//                   value={section}
//                   onChange={(e) => setSection(e.target.value)}
//                 >
//                   <option value="">Select</option>
//                   {Object.keys(sectionRates).map((item, idx) => (
//                     <option key={idx} value={item}>
//                       {item}
//                     </option>
//                   ))}
//                 </Form.Select>
//               </Col>
//               {!sectionCode.startsWith("206C") && (
//                 <Col md={6}>
//                   <Form.Label>PAN quoted by deductee</Form.Label>
//                   <Form.Select
//                     value={panQuoted}
//                     onChange={(e) => setPanQuoted(e.target.value)}
//                   >
//                     <option>Yes</option>
//                     <option>No</option>
//                   </Form.Select>
//                 </Col>
//               )}
//             </Row>

//             <Row className="mb-3 align-items-center">
//               <Col md={2}>
//                 <Form.Label>Rate:</Form.Label>
//                 <Form.Control type="text" value={rate} readOnly />
//               </Col>
//               <Col md={1}><span className="fw-bold">%</span></Col>
//               <Col md={9}>
//                 <Form.Range min={0} max={50} step={0.5} value={rate} disabled />
//               </Col>
//             </Row>

//             <Row className="mb-3 align-items-center">
//               <Col md={2}>
//                 <Form.Label>Amount:</Form.Label>
//                 <Form.Control
//                   type="number"
//                   value={amount}
//                   onChange={(e) =>
//                     setAmount(parseFloat(e.target.value) || 0)
//                   }
//                 />
//               </Col>
//               <Col md={1}><span className="fw-bold">0</span></Col>
//               <Col md={9}>
//                 <Form.Range
//                   min={0}
//                   max={100000}
//                   step={1000}
//                   value={amount}
//                   onChange={(e) =>
//                     setAmount(parseFloat(e.target.value))
//                   }
//                 />
//               </Col>
//             </Row>

//             <Row className="mb-3">
//               <Col md={6}>
//                 <Form.Label>Tax:</Form.Label>
//                 <Form.Control value={tax} readOnly />
//               </Col>
//             </Row>

//             {section ===
//               "206C,Bullion, jewelleryor Any other goods or services" && (
//               <p className="fw-bold text-dark mt-3">
//                 Note:- If sale consideration is paid in cash exceeding Rs. 5 lakhs (Jewellery),
//                 Rs. 2 lakhs (Bullion), or Rs. 2 lakhs (other goods/services where TDS is not deducted)
//               </p>
//             )}

//             {section &&
//               section !==
//                 "206C,Bullion, jewelleryor Any other goods or services" &&
//               sectionNotes[sectionCode] && (
//                 <p className="fw-bold text-dark mt-3">
//                   Note:- {sectionNotes[sectionCode]}
//                 </p>
//               )}
//           </Card.Body>
//         </Card>
//       </Container>
//       <Footer />
//     </>
//   );
// }

// export default Tds;

// import React, { useState, useEffect } from "react";
// import Header from "../../component/Header";
// import Footer from "../../component/Footer";

// // Your logic preserved exactly as provided
// const sectionRates = {
//   "193,interest on Securities": 10,
//   "194, Dividend": 10,
//   "194A,Interest other than interest on Securities": 10,
//   "194B, Winnings from lotteries, crossword puzzles,": 30,
//   "194BB,Winnings from Horse Races": 30,
//   "194C, Payment to Contractor/Sub Contractor(INDIVIDUAL/HUF)": 1,
//   "194C,payment to Contractors/Sub Contractor(OTHERS)": 2,
//   "194C,Payment to Transporter": 0,
//   "194D,Insurance Commission": 5,
//   "194E,Non-Resident Sportsman or Sports Association": 20,
//   "194EE,Payment for National Savings Scheme": 10,
//   "194F,Payment for Repurchase of units": 15,
//   "194G,Commission on Sale of Lottery Ticket": 5,
//   "194H,Commission": 5,
//   "194I,Rent on Land and Building": 10,
//   "194I,Rent on Plant and Machinery": 2,
//   "194IA,Payment on Transfer of Immoveable Property": 1,
//   "194IB,payment on Rent by Individual/HUF": 5,
//   "194J,Fees for Professional or Technical Services": 10,
//   "194J,remuneration or commission paid to director": 10,
//   "194J,Fee for Technical Services": 2,
//   "194J,Payments to Call Center Operator": 2,
//   "194LA,Payment of Compensation for Immovable Property": 10,
//   "194LB,Interest from infrastructure debt fund": 5,
//   "194LC,Interest from specified indian company": 5,
//   "194K,Payment of Dividend by Mutual Funds": 10,
//   "194M,Payment to Contractors/Professional by Individual/HUF": 5,
//   "194N,TDS on Cash Withdrawls above 1 Crore": 2,
//   "194O,TDS on Ecommerce Participants": 1,
//   "195,Payment to NOn-Resident (Long Term Capital Gains)": 20,
//   "195,Payment to Non-Resident(Rent)": 30,
//   "195,Payment to Non-Resident(Royality)": 50,
//   "195,Payment to Non-Resident (Winning from Lottery /Horse Races etc.)": 30,
//   "206C,Alcoholic liquor for human consumption": 1,
//   "206c,Timber obtained under a forest lease": 2.5,
//   "206C,Timber obtained under any mode other than forest lease": 2.5,
//   "206C,Any other forest product not being timber or tendu leave": 2.5,
//   "206C,Scrap": 1,
//   "206C,Parking Lot": 2,
//   "206C,Toll Plaza": 2,
//   "206C,Minning and Quarrying": 2,
//   "206C,Tendu leaves": 2,
//   "206C,Minerals, being coal or lignite or iron ore": 1,
//   "206C,Bullion, jewelleryor Any other goods or services": 1,
// };

// const sectionNotes = {
//   193: "No TDS is deductible for payments not exceeding Rs. 5000.",
//   "194A":
//     "No TDS is deductible for payments not exceeding Rs. 10000 (Banks) & Rs. 5000 (Others)",
//   "194B": "No TDS is deductible for payments not exceeding Rs. 10000",
//   "194BB": "No TDS is deductible for payments not exceeding Rs. 10000",
//   "194C":
//     "No TDS is deductible for payments not exceeding Rs. 30000 Per Contract or Rs. 100000 per Annum",
//   "194D": "No TDS is deductible for payments not exceeding Rs. 15000.",
//   "194EE": "No TDS is deductible for payments not exceeding Rs. 2500.",
//   "194F": "No TDS is deductible for payments not exceeding Rs. 1000.",
//   "194G": "No TDS is deductible for payments not exceeding Rs. 15000.",
//   "194H": "No TDS is deductible for payments not exceeding Rs. 15000.",
//   "194I": "No TDS is deductible for payments not exceeding Rs. 240000",
//   "194IA": "No TDS is deductible for payments not exceeding Rs. 5000000",
//   "194IB": "No TDS is deductible for payments not exceeding Rs. 50000",
//   "194J": "No TDS is deductible for payments not exceeding Rs. 30000",
//   "194LA": "No TDS is deductible for payments not exceeding Rs. 250000",
//   "194K": "No TDS is deductible for payments not exceeding Rs. 5000",
//   "194M": "No TDS is deductible for payments not exceeding Rs. 5000000",
//   "194O": "No TDS is deductible for payments not exceeding Rs. 0",
// };

// function Tds() {
//   const bgImage =
//     "https://img.ledgers.cloud/guides/feature_image/Gemini_Generated_Image_6srnj16srnj16srn.webp";
//   const [rate, setRate] = useState(0);
//   const [amount, setAmount] = useState(0);
//   const [section, setSection] = useState("");
//   const [panQuoted, setPanQuoted] = useState("Yes");

//   const tax = ((rate / 100) * amount).toFixed(2);
//   const sectionCode = section.split(",")[0].toUpperCase();

//   useEffect(() => {
//     if (!section) {
//       setRate(0);
//       return;
//     }
//     const baseRate = sectionRates[section] || 0;
//     if (sectionCode === "206C") {
//       setRate(baseRate);
//     } else {
//       setRate(panQuoted === "No" ? 20 : baseRate);
//     }
//   }, [section, panQuoted,sectionCode]);

//   return (
//     <>
//       <Header />
//       {/* Banner Section */}
//       <section
//         className="relative bg-cover bg-center py-28 overflow-hidden"
//         style={{ backgroundImage: `url(${bgImage})` }}
//       >
//         <div className="absolute inset-0 bg-black/50"></div>

//         <div
//           className="absolute top-0 right-0 h-full w-[40%] bg-black/20"
//           style={{
//             clipPath: "polygon(0 0, 100% 0, 100% 100%, 20% 100%)",
//           }}
//         ></div>

//         <div className="relative z-10 max-w-7xl mx-auto px-4">
//           <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
//             TDS Calculator
//           </h1>

//           <div className="flex items-center gap-2 text-white">
//             <a href="/" className="hover:underline">
//               Home
//             </a>
//             <span>{">"}</span>
//             <span className="text-[#F5B800] font-semibold">TDS Calculator</span>
//           </div>
//         </div>
//       </section>
//       {/* Main Content */}
//       <div className="container mx-auto py-10 px-4">
//         <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg border border-gray-200 overflow-hidden">
//           <div className="p-6 bg-gray-50">
//             <div className="flex flex-wrap -mx-3 mb-4">
//               <div className="w-full md:w-1/2 px-3 mb-4">
//                 <label className="block mb-2 font-semibold text-gray-700">
//                   Section
//                 </label>
//                 <select
//                   className="w-full p-2 border border-gray-300 rounded shadow-sm"
//                   value={section}
//                   onChange={(e) => setSection(e.target.value)}
//                 >
//                   <option value="">Select</option>
//                   {Object.keys(sectionRates).map((item, idx) => (
//                     <option key={idx} value={item}>
//                       {item}
//                     </option>
//                   ))}
//                 </select>
//               </div>
//               {!sectionCode.startsWith("206C") && (
//                 <div className="w-full md:w-1/2 px-3 mb-4">
//                   <label className="block mb-2 font-semibold text-gray-700">
//                     PAN quoted by deductee
//                   </label>
//                   <select
//                     className="w-full p-2 border border-gray-300 rounded shadow-sm"
//                     value={panQuoted}
//                     onChange={(e) => setPanQuoted(e.target.value)}
//                   >
//                     <option>Yes</option>
//                     <option>No</option>
//                   </select>
//                 </div>
//               )}
//             </div>

//             {/* Rate Slider */}
//             <div className="flex items-center mb-6">
//               <div className="w-1/4 md:w-1/6">
//                 <label className="block font-semibold text-gray-700">
//                   Rate:
//                 </label>
//                 <input
//                   type="text"
//                   className="w-full p-2 border border-gray-300 rounded bg-gray-100"
//                   value={rate}
//                   readOnly
//                 />
//               </div>
//               <div className="px-3 font-bold text-xl">%</div>
//               <div className="flex-grow">
//                 <input
//                   type="range"
//                   className="w-full"
//                   min={0}
//                   max={50}
//                   step={0.5}
//                   value={rate}
//                   disabled
//                 />
//               </div>
//             </div>

//             {/* Amount Slider */}
//             <div className="flex items-center mb-6">
//               <div className="w-1/4 md:w-1/6">
//                 <label className="block font-semibold text-gray-700">
//                   Amount:
//                 </label>
//                 <input
//                   type="number"
//                   className="w-full p-2 border border-gray-300 rounded"
//                   value={amount}
//                   onChange={(e) => setAmount(parseFloat(e.target.value) || 0)}
//                 />
//               </div>
//               <div className="px-3 font-bold text-xl">0</div>
//               <div className="flex-grow">
//                 <input
//                   type="range"
//                   className="w-full"
//                   min={0}
//                   max={100000}
//                   step={1000}
//                   value={amount}
//                   onChange={(e) => setAmount(parseFloat(e.target.value))}
//                 />
//               </div>
//             </div>

//             {/* Tax Result */}
//             <div className="mb-6">
//               <label className="block font-semibold text-gray-700">Tax:</label>
//               <input
//                 className="w-full p-2 border border-gray-300 rounded bg-gray-100 font-bold"
//                 value={tax}
//                 readOnly
//               />
//             </div>

//             {/* Conditional Notes */}
//             {section ===
//               "206C,Bullion, jewelleryor Any other goods or services" && (
//               <p className="font-bold text-gray-800 bg-yellow-100 p-4 rounded border-l-4 border-yellow-500">
//                 Note:- If sale consideration is paid in cash exceeding Rs. 5
//                 lakhs (Jewellery), Rs. 2 lakhs (Bullion), or Rs. 2 lakhs (other
//                 goods/services where TDS is not deducted)
//               </p>
//             )}
//             {section &&
//               section !==
//                 "206C,Bullion, jewelleryor Any other goods or services" &&
//               sectionNotes[sectionCode] && (
//                 <p className="font-bold text-gray-800 bg-blue-100 p-4 rounded border-l-4 border-blue-500">
//                   Note:- {sectionNotes[sectionCode]}
//                 </p>
//               )}
//           </div>
//         </div>
//       </div>
//       <Footer />
//     </>
//   );
// }

// export default Tds;
import React, { useState, useEffect } from "react";
import Header from "../../component/Header";
import Footer from "../../component/Footer";

// TDS Data
>>>>>>> master
const sectionRates = {
  "193,interest on Securities": 10,
  "194, Dividend": 10,
  "194A,Interest other than interest on Securities": 10,
  "194B, Winnings from lotteries, crossword puzzles,": 30,
  "194BB,Winnings from Horse Races": 30,
  "194C, Payment to Contractor/Sub Contractor(INDIVIDUAL/HUF)": 1,
  "194C,payment to Contractors/Sub Contractor(OTHERS)": 2,
  "194C,Payment to Transporter": 0,
  "194D,Insurance Commission": 5,
  "194E,Non-Resident Sportsman or Sports Association": 20,
  "194EE,Payment for National Savings Scheme": 10,
  "194F,Payment for Repurchase of units": 15,
  "194G,Commission on Sale of Lottery Ticket": 5,
  "194H,Commission": 5,
  "194I,Rent on Land and Building": 10,
  "194I,Rent on Plant and Machinery": 2,
  "194IA,Payment on Transfer of Immoveable Property": 1,
  "194IB,payment on Rent by Individual/HUF": 5,
  "194J,Fees for Professional or Technical Services": 10,
  "194J,remuneration or commission paid to director": 10,
  "194J,Fee for Technical Services": 2,
  "194J,Payments to Call Center Operator": 2,
  "194LA,Payment of Compensation for Immovable Property": 10,
  "194LB,Interest from infrastructure debt fund": 5,
  "194LC,Interest from specified indian company": 5,
  "194K,Payment of Dividend by Mutual Funds": 10,
  "194M,Payment to Contractors/Professional by Individual/HUF": 5,
  "194N,TDS on Cash Withdrawls above 1 Crore": 2,
  "194O,TDS on Ecommerce Participants": 1,
  "195,Payment to NOn-Resident (Long Term Capital Gains)": 20,
  "195,Payment to Non-Resident(Rent)": 30,
  "195,Payment to Non-Resident(Royality)": 50,
  "195,Payment to Non-Resident (Winning from Lottery /Horse Races etc.)": 30,
  "206C,Alcoholic liquor for human consumption": 1,
  "206c,Timber obtained under a forest lease": 2.5,
  "206C,Timber obtained under any mode other than forest lease": 2.5,
  "206C,Any other forest product not being timber or tendu leave": 2.5,
  "206C,Scrap": 1,
  "206C,Parking Lot": 2,
  "206C,Toll Plaza": 2,
  "206C,Minning and Quarrying": 2,
  "206C,Tendu leaves": 2,
  "206C,Minerals, being coal or lignite or iron ore": 1,
  "206C,Bullion, jewelleryor Any other goods or services": 1,
};

const sectionNotes = {
  193: "No TDS is deductible for payments not exceeding Rs. 5000.",
  "194A":
    "No TDS is deductible for payments not exceeding Rs. 10000 (Banks) & Rs. 5000 (Others)",
  "194B": "No TDS is deductible for payments not exceeding Rs. 10000",
  "194BB": "No TDS is deductible for payments not exceeding Rs. 10000",
  "194C":
    "No TDS is deductible for payments not exceeding Rs. 30000 Per Contract or Rs. 100000 per Annum",
  "194D": "No TDS is deductible for payments not exceeding Rs. 15000.",
  "194EE": "No TDS is deductible for payments not exceeding Rs. 2500.",
  "194F": "No TDS is deductible for payments not exceeding Rs. 1000.",
  "194G": "No TDS is deductible for payments not exceeding Rs. 15000.",
  "194H": "No TDS is deductible for payments not exceeding Rs. 15000.",
  "194I": "No TDS is deductible for payments not exceeding Rs. 240000",
  "194IA": "No TDS is deductible for payments not exceeding Rs. 5000000",
  "194IB": "No TDS is deductible for payments not exceeding Rs. 50000",
  "194J": "No TDS is deductible for payments not exceeding Rs. 30000",
  "194LA": "No TDS is deductible for payments not exceeding Rs. 250000",
  "194K": "No TDS is deductible for payments not exceeding Rs. 5000",
  "194M": "No TDS is deductible for payments not exceeding Rs. 5000000",
  "194O": "No TDS is deductible for payments not exceeding Rs. 0",
};

function Tds() {
<<<<<<< HEAD
=======
  const bgImage =
    "https://img.ledgers.cloud/guides/feature_image/Gemini_Generated_Image_6srnj16srnj16srn.webp";
>>>>>>> master
  const [rate, setRate] = useState(0);
  const [amount, setAmount] = useState(0);
  const [section, setSection] = useState("");
  const [panQuoted, setPanQuoted] = useState("Yes");

  const tax = ((rate / 100) * amount).toFixed(2);
  const sectionCode = section.split(",")[0].toUpperCase();

  useEffect(() => {
    if (!section) {
      setRate(0);
      return;
    }
<<<<<<< HEAD

    const baseRate = sectionRates[section] || 0;

=======
    const baseRate = sectionRates[section] || 0;
>>>>>>> master
    if (sectionCode === "206C") {
      setRate(baseRate);
    } else {
      setRate(panQuoted === "No" ? 20 : baseRate);
    }
<<<<<<< HEAD
  }, [section, panQuoted]);

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
          <Container className="mt-5 mb-5">
            <Card className="shadow border rounded-lg">
              <Card.Header className="text-center bg-primary text-white py-2">
                <h5 className="m-0">TDS Calculator</h5>
              </Card.Header>

              <Card.Body className="bg-light">
                <Row className="mb-3">
                  <Col md={6}>
                    <Form.Label>Section</Form.Label>
                    <Form.Select
                      value={section}
                      onChange={(e) => setSection(e.target.value)}
                    >
                      <option value="">Select</option>
                      {Object.keys(sectionRates).map((item, idx) => (
                        <option key={idx} value={item}>
                          {item}
                        </option>
                      ))}
                    </Form.Select>
                  </Col>
                  {!sectionCode.startsWith("206C") && (
                    <Col md={6}>
                      <Form.Label>PAN quoted by deductee</Form.Label>
                      <Form.Select
                        value={panQuoted}
                        onChange={(e) => setPanQuoted(e.target.value)}
                      >
                        <option>Yes</option>
                        <option>No</option>
                      </Form.Select>
                    </Col>
                  )}
                </Row>

                <Row className="mb-3 align-items-center">
                  <Col md={2}>
                    <Form.Label>Rate:</Form.Label>
                    <Form.Control type="text" value={rate} readOnly />
                  </Col>
                  <Col md={1}>
                    <span className="fw-bold">%</span>
                  </Col>
                  <Col md={9}>
                    <Form.Range
                      min={0}
                      max={50}
                      step={0.5}
                      value={rate}
                      disabled
                    />
                  </Col>
                </Row>

                <Row className="mb-3 align-items-center">
                  <Col md={2}>
                    <Form.Label>Amount:</Form.Label>
                    <Form.Control
                      type="number"
                      value={amount}
                      onChange={(e) =>
                        setAmount(parseFloat(e.target.value) || 0)
                      }
                    />
                  </Col>
                  <Col md={1}>
                    <span className="fw-bold">0</span>
                  </Col>
                  <Col md={9}>
                    <Form.Range
                      min={0}
                      max={100000}
                      step={1000}
                      value={amount}
                      onChange={(e) => setAmount(parseFloat(e.target.value))}
                    />
                  </Col>
                </Row>

                <Row className="mb-3">
                  <Col md={6}>
                    <Form.Label>Tax:</Form.Label>
                    <Form.Control value={tax} readOnly />
                  </Col>
                </Row>

                {section ===
                  "206C,Bullion, jewelleryor Any other goods or services" && (
                  <p className="fw-bold text-dark mt-3">
                    Note:- If sale consideration is paid in cash exceeding Rs. 5
                    lakhs (Jewellery), Rs. 2 lakhs (Bullion), or Rs. 2 lakhs
                    (other goods/services where TDS is not deducted)
                  </p>
                )}

                {section &&
                  section !==
                    "206C,Bullion, jewelleryor Any other goods or services" &&
                  sectionNotes[sectionCode] && (
                    <p className="fw-bold text-dark mt-3">
                      Note:- {sectionNotes[sectionCode]}
                    </p>
                  )}
              </Card.Body>
            </Card>
          </Container>
          <Footer />
        </>
      )}
=======
  }, [section, panQuoted, sectionCode]);

  return (
    <>
      <Header />
      {/* Banner Section */}
      <section
        className="relative bg-cover bg-center py-20 overflow-hidden"
        style={{ backgroundImage: `url(${bgImage})` }}
      >
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4">
          <h1 className="text-3xl md:text-5xl font-bold text-white mb-2">
            TDS Calculator
          </h1>
          <div className="flex items-center gap-2 text-white text-sm">
            <a href="/" className="hover:underline">
              Home
            </a>
            <span>{">"}</span>
            <span className="text-[#F5B800] font-semibold">TDS Calculator</span>
          </div>
        </div>
      </section>

      {/* Calculator Content */}
      <div className="container mx-auto py-10 px-4">
        <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg border border-gray-200 p-6">
          <h5 className="text-center mb-6 text-white bg-[#18427d] w-48 py-2 mx-auto rounded font-bold">
            TDS Calculator
          </h5>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div>
              <label className="block mb-2 font-semibold text-gray-700 text-sm">
                Section
              </label>
              <select
                className="w-full p-2 border rounded shadow-sm"
                value={section}
                onChange={(e) => setSection(e.target.value)}
              >
                <option value="">Select</option>
                {Object.keys(sectionRates).map((item, idx) => (
                  <option key={idx} value={item}>
                    {item}
                  </option>
                ))}
              </select>
            </div>
            {!sectionCode.startsWith("206C") && (
              <div>
                <label className="block mb-2 font-semibold text-gray-700 text-sm">
                  PAN quoted by deductee
                </label>
                <select
                  className="w-full p-2 border rounded shadow-sm"
                  value={panQuoted}
                  onChange={(e) => setPanQuoted(e.target.value)}
                >
                  <option>Yes</option>
                  <option>No</option>
                </select>
              </div>
            )}
          </div>

          <div className="space-y-4">
            <div className="flex items-center gap-4">
              <div className="w-1/3 md:w-1/6">
                <label className="block font-semibold text-gray-700 text-sm">
                  Rate:
                </label>
                <input
                  className="w-full p-2 border rounded bg-gray-100"
                  value={rate}
                  readOnly
                />
              </div>
              <div className="flex-grow">
                <input
                  type="range"
                  className="w-full"
                  min={0}
                  max={50}
                  step={0.5}
                  value={rate}
                  disabled
                />
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="w-1/3 md:w-1/6">
                <label className="block font-semibold text-gray-700 text-sm">
                  Amount:
                </label>
                <input
                  type="number"
                  className="w-full p-2 border rounded"
                  value={amount}
                  onChange={(e) => setAmount(parseFloat(e.target.value) || 0)}
                />
              </div>
              <div className="flex-grow">
                <input
                  type="range"
                  className="w-full"
                  min={0}
                  max={100000}
                  step={1000}
                  value={amount}
                  onChange={(e) => setAmount(parseFloat(e.target.value))}
                />
              </div>
            </div>
          </div>

          <div className="mt-6">
            <label className="block font-semibold text-gray-700 text-sm">
              Tax:
            </label>
            <input
              className="w-full p-2 border rounded bg-gray-100 font-bold"
              value={tax}
              readOnly
            />
          </div>

          {section && sectionNotes[sectionCode] && (
            <p className="font-bold text-gray-800 bg-blue-100 p-4 mt-6 rounded border-l-4 border-blue-500 text-sm">
              Note: {sectionNotes[sectionCode]}
            </p>
          )}
        </div>
      </div>
      <Footer />
>>>>>>> master
    </>
  );
}

export default Tds;
