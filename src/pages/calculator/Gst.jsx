<<<<<<< HEAD
import React, { useEffect, useState } from "react";
import {
  Container,
  Row,
  Col,
  Form,
  Table,
  Button,
  Card,
} from "react-bootstrap";
import Header from "../../component/Header";
import Footer from "../../component/Footer";
import Loader from "../Loader";
=======
// import React, { useState } from "react";
// import {
//   Container,
//   Row,
//   Col,
//   Form,
//   Table,
//   Button,
//   Card,
// } from "react-bootstrap";
// import Header from "../../component/Header";
// import Footer from "../../component/Footer";

// const initialRow = {
//   saleType: "Inter State Sale",
//   taxRate: "",
//   taxableAmount: "",
//   totalTax: "",
//   igst: "",
//   cgst: "",
//   sgst: "",
//   cessRate: "",
//   cessAmount: "",
// };

// function Gst() {
//   const [rows, setRows] = useState(Array(6).fill({ ...initialRow }));

//   const handleChange = (index, field, value) => {
//     const updatedRows = [...rows];
//     updatedRows[index] = { ...updatedRows[index], [field]: value };

//     const { saleType, taxRate, taxableAmount, cessRate } = updatedRows[index];
//     const rate = parseFloat(taxRate) || 0;
//     const amount = parseFloat(taxableAmount) || 0;
//     const cess = parseFloat(cessRate) || 0;

//     const tax = (rate / 100) * amount;
//     const cessAmt = (cess / 100) * amount;

//     updatedRows[index].totalTax = tax.toFixed(2);
//     updatedRows[index].cessAmount = cessAmt.toFixed(2);

//     if (saleType === "Inter State Sale") {
//       updatedRows[index].igst = tax.toFixed(2);
//       updatedRows[index].cgst = "";
//       updatedRows[index].sgst = "";
//     } else {
//       updatedRows[index].cgst = (tax / 2).toFixed(2);
//       updatedRows[index].sgst = (tax / 2).toFixed(2);
//       updatedRows[index].igst = "";
//     }

//     setRows(updatedRows);
//   };

//   const handleReset = () => {
//     setRows(Array(6).fill({ ...initialRow }));
//   };

//   const totals = rows.reduce(
//     (acc, row) => {
//       acc.amount += parseFloat(row.taxableAmount || 0);
//       acc.tax += parseFloat(row.totalTax || 0);
//       acc.igst += parseFloat(row.igst || 0);
//       acc.cgst += parseFloat(row.cgst || 0);
//       acc.sgst += parseFloat(row.sgst || 0);
//       acc.cess += parseFloat(row.cessAmount || 0);
//       return acc;
//     },
//     { amount: 0, tax: 0, igst: 0, cgst: 0, sgst: 0, cess: 0 }
//   );

//   return (
//     <>
//     <Header/>
//     <Container className="mt-4">
//       <Card className="p-3">
//         <h5
//           className="text-center mb-4 mx-auto  text-white w-25 py-2 rounded"
//           style={{ background: "#18427d" }}
//         >
//           GST Calculator
//         </h5>

//         <div className="table-responsive">
//           <Table bordered responsive>
//             <thead className="thead-light">
//               <tr>
//                 <th>Type Of Sale</th>
//                 <th>Rate OF Tax</th>
//                 <th>Taxable Amount</th>
//                 <th>Total Tax Amount</th>
//                 <th>IGST</th>
//                 <th>CGST</th>
//                 <th>SGST</th>
//                 <th>Rate of Cess</th>
//                 <th>CESS</th>
//               </tr>
//             </thead>
//             <tbody>
//               {rows.map((row, index) => (
//                 <tr key={index}>
//                   <td>
//                     <Form.Select
//                       value={row.saleType}
//                       onChange={(e) =>
//                         handleChange(index, "saleType", e.target.value)
//                       }
//                     >
//                       <option>Inter State Sale</option>
//                       <option>Intra State Sale</option>
//                     </Form.Select>
//                   </td>
//                   <td>
//                     <Form.Select
//                       value={row.taxRate}
//                       onChange={(e) =>
//                         handleChange(index, "taxRate", e.target.value)
//                       }
//                     >
//                       <option value="">select...</option>
//                       <option value="0.25">0.25%</option>
//                       <option value="3">3%</option>
//                       <option value="5">5%</option>
//                       <option value="12">12%</option>
//                       <option value="18">18%</option>
//                       <option value="28">28%</option>
//                     </Form.Select>
//                   </td>
//                   <td>
//                     <Form.Control
//                       type="number"
//                       value={row.taxableAmount}
//                       onChange={(e) =>
//                         handleChange(index, "taxableAmount", e.target.value)
//                       }
//                     />
//                   </td>
//                   <td>
//                     <Form.Control readOnly value={row.totalTax} />
//                   </td>
//                   <td>
//                     <Form.Control readOnly value={row.igst} />
//                   </td>
//                   <td>
//                     <Form.Control readOnly value={row.cgst} />
//                   </td>
//                   <td>
//                     <Form.Control readOnly value={row.sgst} />
//                   </td>
//                   <td>
//                     <Form.Control
//                       type="number"
//                       value={row.cessRate}
//                       onChange={(e) =>
//                         handleChange(index, "cessRate", e.target.value)
//                       }
//                     />
//                   </td>
//                   <td>
//                     <Form.Control readOnly value={row.cessAmount} />
//                   </td>
//                 </tr>
//               ))}
//             </tbody>
//           </Table>
//         </div>

//         <Row className="text-center fw-bold mt-3">
//           <Col>Total Amount : {totals.amount.toFixed(2)}</Col>
//           <Col>Total Tax : {totals.tax.toFixed(2)}</Col>
//           <Col>Total IGST : {totals.igst.toFixed(2)}</Col>
//           <Col>Total CGST : {totals.cgst.toFixed(2)}</Col>
//           <Col>Total SGST : {totals.sgst.toFixed(2)}</Col>
//           <Col>Total CESS : {totals.cess.toFixed(2)}</Col>
//         </Row>

//         <div className="text-end mt-4">
//           <Button variant="danger" onClick={handleReset}>
//             Reset
//           </Button>
//         </div>
//       </Card>
//     </Container>
//     <Footer/>
//     </>
//   );
// };

// export default Gst;
// import React, { useState } from "react";
// import Header from "../../component/Header";
// import Footer from "../../component/Footer";

// const initialRow = {
//   saleType: "Inter State Sale",
//   taxRate: "",
//   taxableAmount: "",
//   totalTax: "",
//   igst: "",
//   cgst: "",
//   sgst: "",
//   cessRate: "",
//   cessAmount: "",
// };

// function Gst() {
//   const bgImage = "https://pbs.twimg.com/media/HJz7uEBW8AAxRBs.jpg";
//   const [rows, setRows] = useState(Array(6).fill({ ...initialRow }));

//   const handleChange = (index, field, value) => {
//     const updatedRows = [...rows];
//     updatedRows[index] = { ...updatedRows[index], [field]: value };

//     const { saleType, taxRate, taxableAmount, cessRate } = updatedRows[index];
//     const rate = parseFloat(taxRate) || 0;
//     const amount = parseFloat(taxableAmount) || 0;
//     const cess = parseFloat(cessRate) || 0;

//     const tax = (rate / 100) * amount;
//     const cessAmt = (cess / 100) * amount;

//     updatedRows[index].totalTax = tax.toFixed(2);
//     updatedRows[index].cessAmount = cessAmt.toFixed(2);

//     if (saleType === "Inter State Sale") {
//       updatedRows[index].igst = tax.toFixed(2);
//       updatedRows[index].cgst = "";
//       updatedRows[index].sgst = "";
//     } else {
//       updatedRows[index].cgst = (tax / 2).toFixed(2);
//       updatedRows[index].sgst = (tax / 2).toFixed(2);
//       updatedRows[index].igst = "";
//     }

//     setRows(updatedRows);
//   };

//   const handleReset = () => {
//     setRows(Array(6).fill({ ...initialRow }));
//   };

//   const totals = rows.reduce(
//     (acc, row) => {
//       acc.amount += parseFloat(row.taxableAmount || 0);
//       acc.tax += parseFloat(row.totalTax || 0);
//       acc.igst += parseFloat(row.igst || 0);
//       acc.cgst += parseFloat(row.cgst || 0);
//       acc.sgst += parseFloat(row.sgst || 0);
//       acc.cess += parseFloat(row.cessAmount || 0);
//       return acc;
//     },
//     { amount: 0, tax: 0, igst: 0, cgst: 0, sgst: 0, cess: 0 },
//   );

//   return (
//     <>
//       <Header />
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
//             GST Calculator
//           </h1>

//           <div className="flex items-center gap-2 text-white">
//             <a href="/" className="hover:underline">
//               Home
//             </a>
//             <span>{">"}</span>
//             <span className="text-[#F5B800] font-semibold">
//               {" "}
//               GST Calculator
//             </span>
//           </div>
//         </div>
//       </section>
//       <div className="container mx-auto mt-8 px-4 mb-10">
//         <div className="bg-white shadow-lg rounded-lg p-6 border border-gray-200">
//           <h5 className="text-center mb-6 text-white bg-[#18427d] w-48 py-2 mx-auto rounded font-bold">
//             GST Calculator
//           </h5>

//           <div className="overflow-x-auto">
//             <table className="w-full text-sm border-collapse border border-gray-300">
//               <thead className="bg-gray-100">
//                 <tr>
//                   {[
//                     "Type Of Sale",
//                     "Rate OF Tax",
//                     "Taxable Amount",
//                     "Total Tax Amount",
//                     "IGST",
//                     "CGST",
//                     "SGST",
//                     "Rate of Cess",
//                     "CESS",
//                   ].map((th) => (
//                     <th
//                       key={th}
//                       className="border border-gray-300 p-2 text-left"
//                     >
//                       {th}
//                     </th>
//                   ))}
//                 </tr>
//               </thead>
//               <tbody>
//                 {rows.map((row, index) => (
//                   <tr key={index} className="border border-gray-300">
//                     <td className="p-1 border border-gray-300">
//                       <select
//                         className="w-full border p-1 rounded"
//                         value={row.saleType}
//                         onChange={(e) =>
//                           handleChange(index, "saleType", e.target.value)
//                         }
//                       >
//                         <option>Inter State Sale</option>
//                         <option>Intra State Sale</option>
//                       </select>
//                     </td>
//                     <td className="p-1 border border-gray-300">
//                       <select
//                         className="w-full border p-1 rounded"
//                         value={row.taxRate}
//                         onChange={(e) =>
//                           handleChange(index, "taxRate", e.target.value)
//                         }
//                       >
//                         <option value="">select...</option>
//                         {[0.25, 3, 5, 12, 18, 28].map((r) => (
//                           <option key={r} value={r}>
//                             {r}%
//                           </option>
//                         ))}
//                       </select>
//                     </td>
//                     <td className="p-1 border border-gray-300">
//                       <input
//                         type="number"
//                         className="w-full border p-1 rounded"
//                         value={row.taxableAmount}
//                         onChange={(e) =>
//                           handleChange(index, "taxableAmount", e.target.value)
//                         }
//                       />
//                     </td>
//                     <td className="p-1 border border-gray-300 bg-gray-50">
//                       <input
//                         className="w-full bg-transparent p-1"
//                         readOnly
//                         value={row.totalTax}
//                       />
//                     </td>
//                     <td className="p-1 border border-gray-300 bg-gray-50">
//                       <input
//                         className="w-full bg-transparent p-1"
//                         readOnly
//                         value={row.igst}
//                       />
//                     </td>
//                     <td className="p-1 border border-gray-300 bg-gray-50">
//                       <input
//                         className="w-full bg-transparent p-1"
//                         readOnly
//                         value={row.cgst}
//                       />
//                     </td>
//                     <td className="p-1 border border-gray-300 bg-gray-50">
//                       <input
//                         className="w-full bg-transparent p-1"
//                         readOnly
//                         value={row.sgst}
//                       />
//                     </td>
//                     <td className="p-1 border border-gray-300">
//                       <input
//                         type="number"
//                         className="w-full border p-1 rounded"
//                         value={row.cessRate}
//                         onChange={(e) =>
//                           handleChange(index, "cessRate", e.target.value)
//                         }
//                       />
//                     </td>
//                     <td className="p-1 border border-gray-300 bg-gray-50">
//                       <input
//                         className="w-full bg-transparent p-1"
//                         readOnly
//                         value={row.cessAmount}
//                       />
//                     </td>
//                   </tr>
//                 ))}
//               </tbody>
//             </table>
//           </div>

//           <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-4 text-center font-bold mt-6 text-sm bg-gray-50 p-4 rounded">
//             <div>Total Amount: {totals.amount.toFixed(2)}</div>
//             <div>Total Tax: {totals.tax.toFixed(2)}</div>
//             <div>Total IGST: {totals.igst.toFixed(2)}</div>
//             <div>Total CGST: {totals.cgst.toFixed(2)}</div>
//             <div>Total SGST: {totals.sgst.toFixed(2)}</div>
//             <div>Total CESS: {totals.cess.toFixed(2)}</div>
//           </div>

//           <div className="text-right mt-6">
//             <button
//               className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-6 rounded transition"
//               onClick={handleReset}
//             >
//               Reset
//             </button>
//           </div>
//         </div>
//       </div>
//       <Footer />
//     </>
//   );
// }

// export default Gst;
import React, { useState } from "react";
import Header from "../../component/Header";
import Footer from "../../component/Footer";
>>>>>>> master

const initialRow = {
  saleType: "Inter State Sale",
  taxRate: "",
  taxableAmount: "",
  totalTax: "",
  igst: "",
  cgst: "",
  sgst: "",
  cessRate: "",
  cessAmount: "",
};

function Gst() {
<<<<<<< HEAD
=======
  // const bgImage =
  //   "https://dodopayments.com/_astro/global-vat-gst-ai-saas-banner.f3JV9ApD_onTfz.webp";
  const bgImage =
    "https://www.deskera.com/blog/content/images/2021/09/pexels-oleg-magni-2058137-1.jpg";
>>>>>>> master
  const [rows, setRows] = useState(Array(6).fill({ ...initialRow }));

  const handleChange = (index, field, value) => {
    const updatedRows = [...rows];
    updatedRows[index] = { ...updatedRows[index], [field]: value };
<<<<<<< HEAD

=======
>>>>>>> master
    const { saleType, taxRate, taxableAmount, cessRate } = updatedRows[index];
    const rate = parseFloat(taxRate) || 0;
    const amount = parseFloat(taxableAmount) || 0;
    const cess = parseFloat(cessRate) || 0;
<<<<<<< HEAD

    const tax = (rate / 100) * amount;
    const cessAmt = (cess / 100) * amount;

    updatedRows[index].totalTax = tax.toFixed(2);
    updatedRows[index].cessAmount = cessAmt.toFixed(2);

=======
    const tax = (rate / 100) * amount;
    const cessAmt = (cess / 100) * amount;
    updatedRows[index].totalTax = tax.toFixed(2);
    updatedRows[index].cessAmount = cessAmt.toFixed(2);
>>>>>>> master
    if (saleType === "Inter State Sale") {
      updatedRows[index].igst = tax.toFixed(2);
      updatedRows[index].cgst = "";
      updatedRows[index].sgst = "";
    } else {
      updatedRows[index].cgst = (tax / 2).toFixed(2);
      updatedRows[index].sgst = (tax / 2).toFixed(2);
      updatedRows[index].igst = "";
    }
<<<<<<< HEAD

    setRows(updatedRows);
  };

  const handleReset = () => {
    setRows(Array(6).fill({ ...initialRow }));
  };
=======
    setRows(updatedRows);
  };

  const handleReset = () => setRows(Array(6).fill({ ...initialRow }));
>>>>>>> master

  const totals = rows.reduce(
    (acc, row) => {
      acc.amount += parseFloat(row.taxableAmount || 0);
      acc.tax += parseFloat(row.totalTax || 0);
      acc.igst += parseFloat(row.igst || 0);
      acc.cgst += parseFloat(row.cgst || 0);
      acc.sgst += parseFloat(row.sgst || 0);
      acc.cess += parseFloat(row.cessAmount || 0);
      return acc;
    },
<<<<<<< HEAD
    { amount: 0, tax: 0, igst: 0, cgst: 0, sgst: 0, cess: 0 }
  );

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
          <Container className="mt-4">
            <Card className="p-3">
              <h5
                className="text-center mb-4 mx-auto  text-white  py-2 rounded"
                style={{
                  background: "#18427d",
                  width: "100%",
                  maxWidth: "350px",
                }}
              >
                GST Calculator
              </h5>

              <div className="table-responsive">
                <Table bordered responsive size="sm">
                  <thead className="table-light text-center">
                    <tr>
                      <th>Type Of Sale</th>
                      <th>Rate OF Tax</th>
                      <th>Taxable Amount</th>
                      <th>Total Tax Amount</th>
                      <th>IGST</th>
                      <th>CGST</th>
                      <th>SGST</th>
                      <th>Rate of Cess</th>
                      <th>CESS</th>
                    </tr>
                  </thead>
                  <tbody>
                    {rows.map((row, index) => (
                      <tr key={index}>
                        <td>
                          <Form.Select
                            size="sm"
                            value={row.saleType}
                            onChange={(e) =>
                              handleChange(index, "saleType", e.target.value)
                            }
                          >
                            <option>Inter State Sale</option>
                            <option>Intra State Sale</option>
                          </Form.Select>
                        </td>
                        <td>
                          <Form.Select
                            size="sm"
                            value={row.taxRate}
                            onChange={(e) =>
                              handleChange(index, "taxRate", e.target.value)
                            }
                          >
                            <option value="">select...</option>
                            <option value="0.25">0.25%</option>
                            <option value="3">3%</option>
                            <option value="5">5%</option>
                            <option value="12">12%</option>
                            <option value="18">18%</option>
                            <option value="28">28%</option>
                          </Form.Select>
                        </td>
                        <td>
                          <Form.Control
                            size="sm"
                            type="number"
                            value={row.taxableAmount}
                            onChange={(e) =>
                              handleChange(
                                index,
                                "taxableAmount",
                                e.target.value
                              )
                            }
                          />
                        </td>
                        <td>
                          <Form.Control
                            size="sm"
                            readOnly
                            value={row.totalTax}
                          />
                        </td>
                        <td>
                          <Form.Control size="sm" readOnly value={row.igst} />
                        </td>
                        <td>
                          <Form.Control size="sm" readOnly value={row.cgst} />
                        </td>
                        <td>
                          <Form.Control size="sm" readOnly value={row.sgst} />
                        </td>
                        <td>
                          <Form.Control
                            size="sm"
                            type="number"
                            value={row.cessRate}
                            onChange={(e) =>
                              handleChange(index, "cessRate", e.target.value)
                            }
                          />
                        </td>
                        <td>
                          <Form.Control
                            size="sm"
                            readOnly
                            value={row.cessAmount}
                          />
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </Table>
              </div>

              <Row className="text-center fw-bold mt-3 gy-2">
                <Col xs={12} sm={6} md>
                  Total Amount : {totals.amount.toFixed(2)}
                </Col>
                <Col xs={12} sm={6} md>
                  Total Tax : {totals.tax.toFixed(2)}
                </Col>
                <Col xs={12} sm={6} md>
                  Total IGST : {totals.igst.toFixed(2)}
                </Col>
                <Col xs={12} sm={6} md>
                  Total CGST : {totals.cgst.toFixed(2)}
                </Col>
                <Col xs={12} sm={6} md>
                  Total SGST : {totals.sgst.toFixed(2)}
                </Col>
                <Col xs={12} sm={6} md>
                  Total CESS : {totals.cess.toFixed(2)}
                </Col>
              </Row>

              <div className="text-end mt-4">
                <Button variant="danger" size="sm" onClick={handleReset}>
                  Reset
                </Button>
              </div>
            </Card>
          </Container>

          <Footer />
        </>
      )}
=======
    { amount: 0, tax: 0, igst: 0, cgst: 0, sgst: 0, cess: 0 },
  );

  return (
    <>
      <Header />
      <section
        className="relative bg-cover bg-center py-20 overflow-hidden"
        style={{ backgroundImage: `url(${bgImage})` }}
      >
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4">
          <h1 className="text-3xl md:text-5xl font-bold text-white mb-2">
            GST Calculator
          </h1>
          <div className="flex items-center gap-2 text-white text-sm">
            <a href="/" className="hover:underline">
              Home
            </a>{" "}
            <span>{">"}</span>
            <span className="text-[#F5B800] font-semibold">GST Calculator</span>
          </div>
        </div>
      </section>

      <div className="container mx-auto py-8 px-2 md:px-4">
        <div className="bg-white shadow-lg rounded-lg p-4 md:p-6 border border-gray-200">
          <h5 className="text-center mb-6 text-white bg-[#18427d] w-48 py-2 mx-auto rounded font-bold">
            GST Calculator
          </h5>

          {/* Table Wrapper for Desktop, Card Wrapper for Mobile */}
          <div className="space-y-4">
            {rows.map((row, index) => (
              <div
                key={index}
                className="border border-gray-200 rounded-lg p-3 bg-gray-50 md:bg-transparent md:border-none md:p-0"
              >
                <div className="grid grid-cols-2 md:grid-cols-9 gap-2">
                  <div className="col-span-2 md:col-span-1">
                    <label className="md:hidden text-[10px] font-bold">
                      SALE TYPE
                    </label>
                    <select
                      className="w-full border p-1 rounded text-sm"
                      value={row.saleType}
                      onChange={(e) =>
                        handleChange(index, "saleType", e.target.value)
                      }
                    >
                      <option>Inter State Sale</option>
                      <option>Intra State Sale</option>
                    </select>
                  </div>
                  <div className="md:col-span-1">
                    <label className="md:hidden text-[10px] font-bold">
                      TAX %
                    </label>
                    <select
                      className="w-full border p-1 rounded text-sm"
                      value={row.taxRate}
                      onChange={(e) =>
                        handleChange(index, "taxRate", e.target.value)
                      }
                    >
                      <option value="">Rate</option>
                      {[0.25, 3, 5, 12, 18, 28].map((r) => (
                        <option key={r} value={r}>
                          {r}%
                        </option>
                      ))}
                    </select>
                  </div>
                  <div className="md:col-span-1">
                    <label className="md:hidden text-[10px] font-bold">
                      AMT
                    </label>
                    <input
                      type="number"
                      placeholder="Amount"
                      className="w-full border p-1 rounded text-sm"
                      value={row.taxableAmount}
                      onChange={(e) =>
                        handleChange(index, "taxableAmount", e.target.value)
                      }
                    />
                  </div>
                  <div className="md:col-span-1">
                    <label className="md:hidden text-[10px] font-bold">
                      TAX
                    </label>
                    <input
                      className="w-full border p-1 rounded text-sm bg-gray-100"
                      readOnly
                      value={row.totalTax}
                      placeholder="Tax"
                    />
                  </div>
                  <div className="md:col-span-1">
                    <label className="md:hidden text-[10px] font-bold">
                      IGST
                    </label>
                    <input
                      className="w-full border p-1 rounded text-sm bg-gray-100"
                      readOnly
                      value={row.igst}
                      placeholder="IGST"
                    />
                  </div>
                  <div className="md:col-span-1">
                    <label className="md:hidden text-[10px] font-bold">
                      CGST
                    </label>
                    <input
                      className="w-full border p-1 rounded text-sm bg-gray-100"
                      readOnly
                      value={row.cgst}
                      placeholder="CGST"
                    />
                  </div>
                  <div className="md:col-span-1">
                    <label className="md:hidden text-[10px] font-bold">
                      SGST
                    </label>
                    <input
                      className="w-full border p-1 rounded text-sm bg-gray-100"
                      readOnly
                      value={row.sgst}
                      placeholder="SGST"
                    />
                  </div>
                  <div className="md:col-span-1">
                    <label className="md:hidden text-[10px] font-bold">
                      CESS %
                    </label>
                    <input
                      type="number"
                      placeholder="Cess %"
                      className="w-full border p-1 rounded text-sm"
                      value={row.cessRate}
                      onChange={(e) =>
                        handleChange(index, "cessRate", e.target.value)
                      }
                    />
                  </div>
                  <div className="md:col-span-1">
                    <label className="md:hidden text-[10px] font-bold">
                      CESS
                    </label>
                    <input
                      className="w-full border p-1 rounded text-sm bg-gray-100"
                      readOnly
                      value={row.cessAmount}
                      placeholder="Cess"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-2 md:grid-cols-6 gap-2 text-[11px] md:text-sm font-bold mt-6 bg-gray-100 p-3 rounded">
            <div>Amt: {totals.amount.toFixed(2)}</div>
            <div>Tax: {totals.tax.toFixed(2)}</div>
            <div>IGST: {totals.igst.toFixed(2)}</div>
            <div>CGST: {totals.cgst.toFixed(2)}</div>
            <div>SGST: {totals.sgst.toFixed(2)}</div>
            <div>CESS: {totals.cess.toFixed(2)}</div>
          </div>

          <div className="text-right mt-4">
            <button
              className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-6 rounded text-sm"
              onClick={handleReset}
            >
              Reset
            </button>
          </div>
        </div>
      </div>
      <Footer />
>>>>>>> master
    </>
  );
}

export default Gst;
