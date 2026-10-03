
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

//   // const bgImage =
//   //   "https://dodopayments.com/_astro/global-vat-gst-ai-saas-banner.f3JV9ApD_onTfz.webp";
//   const bgImage =
//     "https://www.deskera.com/blog/content/images/2021/09/pexels-oleg-magni-2058137-1.jpg";

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
//     setRows(updatedRows);
//   };

//   const handleReset = () => setRows(Array(6).fill({ ...initialRow }));
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

//   const [loading, setLoading] = useState(true);
//   useEffect(() => {
//     const timer = setTimeout(() => {
//       setLoading(false);
//     }, 2000);

//     return () => clearTimeout(timer);
//   }, []);
//   return (
//     <>
//       {loading ? (
//         <Loader />
//       ) : (
//         <>
//           <Header />
//           <Container className="mt-4">
//             <Card className="p-3">
//               <h5
//                 className="text-center mb-4 mx-auto  text-white  py-2 rounded"
//                 style={{
//                   background: "#18427d",
//                   width: "100%",
//                   maxWidth: "350px",
//                 }}
//               >
//                 GST Calculator
//               </h5>

//               <div className="table-responsive">
//                 <Table bordered responsive size="sm">
//                   <thead className="table-light text-center">
//                     <tr>
//                       <th>Type Of Sale</th>
//                       <th>Rate OF Tax</th>
//                       <th>Taxable Amount</th>
//                       <th>Total Tax Amount</th>
//                       <th>IGST</th>
//                       <th>CGST</th>
//                       <th>SGST</th>
//                       <th>Rate of Cess</th>
//                       <th>CESS</th>
//                     </tr>
//                   </thead>
//                   <tbody>
//                     {rows.map((row, index) => (
//                       <tr key={index}>
//                         <td>
//                           <Form.Select
//                             size="sm"
//                             value={row.saleType}
//                             onChange={(e) =>
//                               handleChange(index, "saleType", e.target.value)
//                             }
//                           >
//                             <option>Inter State Sale</option>
//                             <option>Intra State Sale</option>
//                           </Form.Select>
//                         </td>
//                         <td>
//                           <Form.Select
//                             size="sm"
//                             value={row.taxRate}
//                             onChange={(e) =>
//                               handleChange(index, "taxRate", e.target.value)
//                             }
//                           >
//                             <option value="">select...</option>
//                             <option value="0.25">0.25%</option>
//                             <option value="3">3%</option>
//                             <option value="5">5%</option>
//                             <option value="12">12%</option>
//                             <option value="18">18%</option>
//                             <option value="28">28%</option>
//                           </Form.Select>
//                         </td>
//                         <td>
//                           <Form.Control
//                             size="sm"
//                             type="number"
//                             value={row.taxableAmount}
//                             onChange={(e) =>
//                               handleChange(
//                                 index,
//                                 "taxableAmount",
//                                 e.target.value
//                               )
//                             }
//                           />
//                         </td>
//                         <td>
//                           <Form.Control
//                             size="sm"
//                             readOnly
//                             value={row.totalTax}
//                           />
//                         </td>
//                         <td>
//                           <Form.Control size="sm" readOnly value={row.igst} />
//                         </td>
//                         <td>
//                           <Form.Control size="sm" readOnly value={row.cgst} />
//                         </td>
//                         <td>
//                           <Form.Control size="sm" readOnly value={row.sgst} />
//                         </td>
//                         <td>
//                           <Form.Control
//                             size="sm"
//                             type="number"
//                             value={row.cessRate}
//                             onChange={(e) =>
//                               handleChange(index, "cessRate", e.target.value)
//                             }
//                           />
//                         </td>
//                         <td>
//                           <Form.Control
//                             size="sm"
//                             readOnly
//                             value={row.cessAmount}
//                           />
//                         </td>
//                       </tr>
//                     ))}
//                   </tbody>
//                 </Table>
//               </div>

//               <Row className="text-center fw-bold mt-3 gy-2">
//                 <Col xs={12} sm={6} md>
//                   Total Amount : {totals.amount.toFixed(2)}
//                 </Col>
//                 <Col xs={12} sm={6} md>
//                   Total Tax : {totals.tax.toFixed(2)}
//                 </Col>
//                 <Col xs={12} sm={6} md>
//                   Total IGST : {totals.igst.toFixed(2)}
//                 </Col>
//                 <Col xs={12} sm={6} md>
//                   Total CGST : {totals.cgst.toFixed(2)}
//                 </Col>
//                 <Col xs={12} sm={6} md>
//                   Total SGST : {totals.sgst.toFixed(2)}
//                 </Col>
//                 <Col xs={12} sm={6} md>
//                   Total CESS : {totals.cess.toFixed(2)}
//                 </Col>
//               </Row>

//               <div className="text-end mt-4">
//                 <Button variant="danger" size="sm" onClick={handleReset}>
//                   Reset
//                 </Button>
//               </div>
//             </Card>
//           </Container>

//           <Footer />
//         </>
//       )}
//     { amount: 0, tax: 0, igst: 0, cgst: 0, sgst: 0, cess: 0 },
//   );

//   return (
//     <>
//       <Header />
//       <section
//         className="relative bg-cover bg-center py-20 overflow-hidden"
//         style={{ backgroundImage: `url(${bgImage})` }}
//       >
//         <div className="absolute inset-0 bg-black/50"></div>
//         <div className="relative z-10 max-w-7xl mx-auto px-4">
//           <h1 className="text-3xl md:text-5xl font-bold text-white mb-2">
//             GST Calculator
//           </h1>
//           <div className="flex items-center gap-2 text-white text-sm">
//             <a href="/" className="hover:underline">
//               Home
//             </a>{" "}
//             <span>{">"}</span>
//             <span className="text-[#F5B800] font-semibold">GST Calculator</span>
//           </div>
//         </div>
//       </section>

//       <div className="container mx-auto py-8 px-2 md:px-4">
//         <div className="bg-white shadow-lg rounded-lg p-4 md:p-6 border border-gray-200">
//           <h5 className="text-center mb-6 text-white bg-[#18427d] w-48 py-2 mx-auto rounded font-bold">
//             GST Calculator
//           </h5>

//           {/* Table Wrapper for Desktop, Card Wrapper for Mobile */}
//           <div className="space-y-4">
//             {rows.map((row, index) => (
//               <div
//                 key={index}
//                 className="border border-gray-200 rounded-lg p-3 bg-gray-50 md:bg-transparent md:border-none md:p-0"
//               >
//                 <div className="grid grid-cols-2 md:grid-cols-9 gap-2">
//                   <div className="col-span-2 md:col-span-1">
//                     <label className="md:hidden text-[10px] font-bold">
//                       SALE TYPE
//                     </label>
//                     <select
//                       className="w-full border p-1 rounded text-sm"
//                       value={row.saleType}
//                       onChange={(e) =>
//                         handleChange(index, "saleType", e.target.value)
//                       }
//                     >
//                       <option>Inter State Sale</option>
//                       <option>Intra State Sale</option>
//                     </select>
//                   </div>
//                   <div className="md:col-span-1">
//                     <label className="md:hidden text-[10px] font-bold">
//                       TAX %
//                     </label>
//                     <select
//                       className="w-full border p-1 rounded text-sm"
//                       value={row.taxRate}
//                       onChange={(e) =>
//                         handleChange(index, "taxRate", e.target.value)
//                       }
//                     >
//                       <option value="">Rate</option>
//                       {[0.25, 3, 5, 12, 18, 28].map((r) => (
//                         <option key={r} value={r}>
//                           {r}%
//                         </option>
//                       ))}
//                     </select>
//                   </div>
//                   <div className="md:col-span-1">
//                     <label className="md:hidden text-[10px] font-bold">
//                       AMT
//                     </label>
//                     <input
//                       type="number"
//                       placeholder="Amount"
//                       className="w-full border p-1 rounded text-sm"
//                       value={row.taxableAmount}
//                       onChange={(e) =>
//                         handleChange(index, "taxableAmount", e.target.value)
//                       }
//                     />
//                   </div>
//                   <div className="md:col-span-1">
//                     <label className="md:hidden text-[10px] font-bold">
//                       TAX
//                     </label>
//                     <input
//                       className="w-full border p-1 rounded text-sm bg-gray-100"
//                       readOnly
//                       value={row.totalTax}
//                       placeholder="Tax"
//                     />
//                   </div>
//                   <div className="md:col-span-1">
//                     <label className="md:hidden text-[10px] font-bold">
//                       IGST
//                     </label>
//                     <input
//                       className="w-full border p-1 rounded text-sm bg-gray-100"
//                       readOnly
//                       value={row.igst}
//                       placeholder="IGST"
//                     />
//                   </div>
//                   <div className="md:col-span-1">
//                     <label className="md:hidden text-[10px] font-bold">
//                       CGST
//                     </label>
//                     <input
//                       className="w-full border p-1 rounded text-sm bg-gray-100"
//                       readOnly
//                       value={row.cgst}
//                       placeholder="CGST"
//                     />
//                   </div>
//                   <div className="md:col-span-1">
//                     <label className="md:hidden text-[10px] font-bold">
//                       SGST
//                     </label>
//                     <input
//                       className="w-full border p-1 rounded text-sm bg-gray-100"
//                       readOnly
//                       value={row.sgst}
//                       placeholder="SGST"
//                     />
//                   </div>
//                   <div className="md:col-span-1">
//                     <label className="md:hidden text-[10px] font-bold">
//                       CESS %
//                     </label>
//                     <input
//                       type="number"
//                       placeholder="Cess %"
//                       className="w-full border p-1 rounded text-sm"
//                       value={row.cessRate}
//                       onChange={(e) =>
//                         handleChange(index, "cessRate", e.target.value)
//                       }
//                     />
//                   </div>
//                   <div className="md:col-span-1">
//                     <label className="md:hidden text-[10px] font-bold">
//                       CESS
//                     </label>
//                     <input
//                       className="w-full border p-1 rounded text-sm bg-gray-100"
//                       readOnly
//                       value={row.cessAmount}
//                       placeholder="Cess"
//                     />
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>

//           <div className="grid grid-cols-2 md:grid-cols-6 gap-2 text-[11px] md:text-sm font-bold mt-6 bg-gray-100 p-3 rounded">
//             <div>Amt: {totals.amount.toFixed(2)}</div>
//             <div>Tax: {totals.tax.toFixed(2)}</div>
//             <div>IGST: {totals.igst.toFixed(2)}</div>
//             <div>CGST: {totals.cgst.toFixed(2)}</div>
//             <div>SGST: {totals.sgst.toFixed(2)}</div>
//             <div>CESS: {totals.cess.toFixed(2)}</div>
//           </div>

//           <div className="text-right mt-4">
//             <button
//               className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-6 rounded text-sm"
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

const createInitialRows = () =>
  Array.from({ length: 6 }, () => ({ ...initialRow }));

function Gst() {
  const bgImage =
    "https://www.deskera.com/blog/content/images/2021/09/pexels-oleg-magni-2058137-1.jpg";

  const [rows, setRows] = useState(createInitialRows);

  const handleChange = (index, field, value) => {
    setRows((currentRows) => {
      const updatedRows = [...currentRows];
      const currentRow = {
        ...updatedRows[index],
        [field]: value,
      };

      const rate = parseFloat(currentRow.taxRate) || 0;
      const amount = parseFloat(currentRow.taxableAmount) || 0;
      const cessRate = parseFloat(currentRow.cessRate) || 0;

      const tax = (rate / 100) * amount;
      const cessAmount = (cessRate / 100) * amount;

      currentRow.totalTax = tax.toFixed(2);
      currentRow.cessAmount = cessAmount.toFixed(2);

      if (currentRow.saleType === "Inter State Sale") {
        currentRow.igst = tax.toFixed(2);
        currentRow.cgst = "";
        currentRow.sgst = "";
      } else {
        currentRow.igst = "";
        currentRow.cgst = (tax / 2).toFixed(2);
        currentRow.sgst = (tax / 2).toFixed(2);
      }

      updatedRows[index] = currentRow;
      return updatedRows;
    });
  };

  const handleReset = () => {
    setRows(createInitialRows());
  };

  const totals = rows.reduce(
    (acc, row) => {
      acc.amount += parseFloat(row.taxableAmount) || 0;
      acc.tax += parseFloat(row.totalTax) || 0;
      acc.igst += parseFloat(row.igst) || 0;
      acc.cgst += parseFloat(row.cgst) || 0;
      acc.sgst += parseFloat(row.sgst) || 0;
      acc.cess += parseFloat(row.cessAmount) || 0;

      return acc;
    },
    {
      amount: 0,
      tax: 0,
      igst: 0,
      cgst: 0,
      sgst: 0,
      cess: 0,
    }
  );

  const inputClass =
    "w-full h-9 rounded border border-gray-300 bg-white px-2 text-sm text-gray-700 outline-none transition focus:border-[#18427d] focus:ring-1 focus:ring-[#18427d]";

  const readonlyInputClass =
    "w-full h-9 rounded border border-gray-200 bg-gray-100 px-2 text-sm text-gray-700 outline-none";

  return (
    <>
      <Header />

      {/* Hero */}
      <section
        className="relative overflow-hidden bg-cover bg-center py-16 md:py-20"
        style={{ backgroundImage: `url(${bgImage})` }}
      >
        <div className="absolute inset-0 bg-black/50" />

        <div className="relative z-10 mx-auto max-w-7xl px-4">
          <h1 className="mb-2 text-3xl font-bold text-white md:text-5xl">
            GST Calculator
          </h1>

          <div className="flex items-center gap-2 text-sm text-white">
            <a href="/" className="transition hover:underline">
              Home
            </a>
            <span>&gt;</span>
            <span className="font-semibold text-[#F5B800]">
              GST Calculator
            </span>
          </div>
        </div>
      </section>

      {/* Calculator */}
      <main className="mx-auto w-full max-w-7xl px-2 py-8 md:px-4">
        <div className="rounded-lg border border-gray-200 bg-white p-4 shadow-lg md:p-6">
          <h2 className="mx-auto mb-6 w-full max-w-xs rounded bg-[#18427d] py-2 text-center text-sm font-bold text-white md:text-base">
            GST Calculator
          </h2>

          {/* Desktop table header */}
          <div className="hidden overflow-x-auto md:block">
            <div className="min-w-[1000px]">
              <div className="grid grid-cols-9 gap-2 rounded-t bg-gray-100 p-2 text-center text-xs font-bold text-gray-700">
                <div>Type Of Sale</div>
                <div>Rate Of Tax</div>
                <div>Taxable Amount</div>
                <div>Total Tax Amount</div>
                <div>IGST</div>
                <div>CGST</div>
                <div>SGST</div>
                <div>Rate Of Cess</div>
                <div>CESS</div>
              </div>

              <div className="space-y-2 pt-2">
                {rows.map((row, index) => (
                  <div
                    key={index}
                    className="grid grid-cols-9 gap-2"
                  >
                    <select
                      className={inputClass}
                      value={row.saleType}
                      onChange={(e) =>
                        handleChange(index, "saleType", e.target.value)
                      }
                    >
                      <option>Inter State Sale</option>
                      <option>Intra State Sale</option>
                    </select>

                    <select
                      className={inputClass}
                      value={row.taxRate}
                      onChange={(e) =>
                        handleChange(index, "taxRate", e.target.value)
                      }
                    >
                      <option value="">Select...</option>
                      {[0.25, 3, 5, 12, 18, 28].map((rate) => (
                        <option key={rate} value={rate}>
                          {rate}%
                        </option>
                      ))}
                    </select>

                    <input
                      type="number"
                      className={inputClass}
                      placeholder="Amount"
                      value={row.taxableAmount}
                      onChange={(e) =>
                        handleChange(index, "taxableAmount", e.target.value)
                      }
                    />

                    <input
                      readOnly
                      className={readonlyInputClass}
                      value={row.totalTax}
                      placeholder="Tax"
                    />

                    <input
                      readOnly
                      className={readonlyInputClass}
                      value={row.igst}
                      placeholder="IGST"
                    />

                    <input
                      readOnly
                      className={readonlyInputClass}
                      value={row.cgst}
                      placeholder="CGST"
                    />

                    <input
                      readOnly
                      className={readonlyInputClass}
                      value={row.sgst}
                      placeholder="SGST"
                    />

                    <input
                      type="number"
                      className={inputClass}
                      placeholder="Cess %"
                      value={row.cessRate}
                      onChange={(e) =>
                        handleChange(index, "cessRate", e.target.value)
                      }
                    />

                    <input
                      readOnly
                      className={readonlyInputClass}
                      value={row.cessAmount}
                      placeholder="Cess"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Mobile cards */}
          <div className="space-y-4 md:hidden">
            {rows.map((row, index) => (
              <div
                key={index}
                className="rounded-lg border border-gray-200 bg-gray-50 p-3"
              >
                <div className="grid grid-cols-2 gap-3">
                  <div className="col-span-2">
                    <label className="mb-1 block text-[10px] font-bold text-gray-600">
                      SALE TYPE
                    </label>
                    <select
                      className={inputClass}
                      value={row.saleType}
                      onChange={(e) =>
                        handleChange(index, "saleType", e.target.value)
                      }
                    >
                      <option>Inter State Sale</option>
                      <option>Intra State Sale</option>
                    </select>
                  </div>

                  <div>
                    <label className="mb-1 block text-[10px] font-bold text-gray-600">
                      TAX %
                    </label>
                    <select
                      className={inputClass}
                      value={row.taxRate}
                      onChange={(e) =>
                        handleChange(index, "taxRate", e.target.value)
                      }
                    >
                      <option value="">Rate</option>
                      {[0.25, 3, 5, 12, 18, 28].map((rate) => (
                        <option key={rate} value={rate}>
                          {rate}%
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="mb-1 block text-[10px] font-bold text-gray-600">
                      TAXABLE AMOUNT
                    </label>
                    <input
                      type="number"
                      className={inputClass}
                      placeholder="Amount"
                      value={row.taxableAmount}
                      onChange={(e) =>
                        handleChange(index, "taxableAmount", e.target.value)
                      }
                    />
                  </div>

                  {[
                    ["TOTAL TAX", "totalTax"],
                    ["IGST", "igst"],
                    ["CGST", "cgst"],
                    ["SGST", "sgst"],
                  ].map(([label, field]) => (
                    <div key={field}>
                      <label className="mb-1 block text-[10px] font-bold text-gray-600">
                        {label}
                      </label>
                      <input
                        readOnly
                        className={readonlyInputClass}
                        value={row[field]}
                        placeholder={label}
                      />
                    </div>
                  ))}

                  <div>
                    <label className="mb-1 block text-[10px] font-bold text-gray-600">
                      CESS %
                    </label>
                    <input
                      type="number"
                      className={inputClass}
                      placeholder="Cess %"
                      value={row.cessRate}
                      onChange={(e) =>
                        handleChange(index, "cessRate", e.target.value)
                      }
                    />
                  </div>

                  <div>
                    <label className="mb-1 block text-[10px] font-bold text-gray-600">
                      CESS
                    </label>
                    <input
                      readOnly
                      className={readonlyInputClass}
                      value={row.cessAmount}
                      placeholder="Cess"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Totals */}
          <div className="mt-6 grid grid-cols-2 gap-2 rounded bg-gray-100 p-3 text-xs font-bold text-gray-700 md:grid-cols-6 md:text-sm">
            <div>Total Amount: {totals.amount.toFixed(2)}</div>
            <div>Total Tax: {totals.tax.toFixed(2)}</div>
            <div>Total IGST: {totals.igst.toFixed(2)}</div>
            <div>Total CGST: {totals.cgst.toFixed(2)}</div>
            <div>Total SGST: {totals.sgst.toFixed(2)}</div>
            <div>Total CESS: {totals.cess.toFixed(2)}</div>
          </div>

          {/* Reset */}
          <div className="mt-4 flex justify-end">
            <button
              type="button"
              onClick={handleReset}
              className="rounded bg-red-600 px-6 py-2 text-sm font-bold text-white transition hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-300"
            >
              Reset
            </button>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}

export default Gst;
