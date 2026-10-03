// import React, { useState } from "react";
// import {
//   Container,
//   Card,
//   Form,
//   Row,
//   Col,
//   Button,
// } from "react-bootstrap";
// import Header from "../../component/Header";
// import Footer from "../../component/Footer";


// const Netprofit = () => {
//   const [inputs, setInputs] = useState({
//     netProfitBeforeTax: "",
//     lossOnSale: "",
//     doubtfulDebts: "",
//     charityDonations: "",
//     miscExpenses: "",
//     fixedAssetsWrittenOff: "",
//     amortizationLease: "",
//     newsPrintWrittenOff: "",
//     amalgamationExp: "",
//     discountOnCP: "",
//     changeInAssetLiabilityPos: "",
//     voluntaryCompensation: "",
//     otherDeductedExp: "",
//     sharePremium: "",
//     forfeitedSharesProfit: "",
//     capitalNatureProfit: "",
//     fixedAssetSaleProfit: "",
//     changeInAssetLiabilityNeg: "",
//   });

//   const [finalNetProfit, setFinalNetProfit] = useState(null);

//   const handleChange = (e) => {
//     setInputs({ ...inputs, [e.target.name]: e.target.value });
//   };

//   const handleCalculate = () => {

//     const getValue = (key) => parseFloat(inputs[key]) || 0;

//     const base = getValue("netProfitBeforeTax");

//     const additions = [
//       "lossOnSale",
//       "doubtfulDebts",
//       "charityDonations",
//       "miscExpenses",
//       "fixedAssetsWrittenOff",
//       "amortizationLease",
//       "newsPrintWrittenOff",
//       "amalgamationExp",
//       "discountOnCP",
//       "changeInAssetLiabilityPos", // ADD
//       "voluntaryCompensation",
//       "otherDeductedExp",
//     ].reduce((sum, key) => sum + getValue(key), 0);

//     const deductions = [
//       "sharePremium",
//       "forfeitedSharesProfit",
//       "capitalNatureProfit",
//       "fixedAssetSaleProfit",
//       "changeInAssetLiabilityNeg", // SUBTRACT
//     ].reduce((sum, key) => sum + getValue(key), 0);

//     const result = base + additions - deductions;
//     setFinalNetProfit(result);
//   };
//   const fields = [
//     { label: "Net Profit before Tax", key: "netProfitBeforeTax" },
//     {
//       label: "Loss On Sale of Fixed Assets/Undertaking (Net)",
//       key: "lossOnSale",
//     },

//   const getValue = (key) => parseFloat(inputs[key]) || 0;

//   const base = getValue("netProfitBeforeTax");

//   const additions = [
//     "lossOnSale",
//     "doubtfulDebts",
//     "charityDonations",
//     "miscExpenses",
//     "fixedAssetsWrittenOff",
//     "amortizationLease",
//     "newsPrintWrittenOff",
//     "amalgamationExp",
//     "discountOnCP",
//     "changeInAssetLiabilityPos", // ADD
//     "voluntaryCompensation",
//     "otherDeductedExp"
//   ].reduce((sum, key) => sum + getValue(key), 0);

//   const deductions = [
//     "sharePremium",
//     "forfeitedSharesProfit",
//     "capitalNatureProfit",
//     "fixedAssetSaleProfit",
//     "changeInAssetLiabilityNeg" // SUBTRACT
//   ].reduce((sum, key) => sum + getValue(key), 0);

//   const result = base + additions - deductions;
//   setFinalNetProfit(result);
// };
//   const fields = [
//     { label: "Net Profit before Tax", key: "netProfitBeforeTax" },
//     { label: "Loss On Sale of Fixed Assets/Undertaking (Net)", key: "lossOnSale" },
//     { label: "Provision for Doubtful Debts", key: "doubtfulDebts" },
//     { label: "Charity & Donations", key: "charityDonations" },
//     { label: "Misc Expenses", key: "miscExpenses" },
//     { label: "Fixed Assets Written Off", key: "fixedAssetsWrittenOff" },
//     {
//       label: "Amortization of Lease Hold Land Premium",
//       key: "amortizationLease",
//     },
//     { label: "News Print Claim Written-off", key: "newsPrintWrittenOff" },
//     { label: "Amalgamation Expenses Written Off", key: "amalgamationExp" },
//     { label: "Discount on Commercial Papers", key: "discountOnCP" },
//     {
//       label: "Change in carrying amount of an asset/liability (ADD)",
//       key: "changeInAssetLiabilityPos",
//     },
//     { label: "Voluntary Compensation/Damages", key: "voluntaryCompensation" },
//     { label: "Other Expenses deducted from profit", key: "otherDeductedExp" },
//     { label: "Profit by way of Premium on Shares", key: "sharePremium" },
//     {
//       label: "Profit on sale of forfeited Shares",
//       key: "forfeitedSharesProfit",
//     },
//     {
//       label: "Capital Nature Profit (e.g., sale of undertaking)",
//       key: "capitalNatureProfit",
//     },
//     {
//       label: "Profit from sale of immovable property/fixed assets",
//       key: "fixedAssetSaleProfit",
//     },
//     {
//       label: "Change in carrying amount of asset/liability (SUBTRACT)",
//       key: "changeInAssetLiabilityNeg",
//     },
//     // { label: "Net Profit", key: "netProfit" },
//   ];
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
//           <Container className="my-5">
//             <Card className="shadow">
//               <Card.Header className="bg-dark text-white text-center fs-4">
//                 Net Profit Detailed Calculator
//               </Card.Header>
//               <Card.Body>
//                 <Form>
//                   {fields.map((field, index) => (
//                     <Row className="align-items-center mb-3" key={index}>
//                       <Col md={7}>
//                         <Form.Label className="mb-0 fw-medium">
//                           {field.label}
//                         </Form.Label>
//                       </Col>
//                       <Col md={5}>
//                         <Form.Control
//                           type="number"
//                           name={field.key}
//                           value={inputs[field.key]}
//                           onChange={handleChange}
//                           placeholder="₹"
//                         />
//                       </Col>
//                     </Row>
//                   ))}

//                   <div className="text-center mt-4">
//                     <Button
//                       variant="primary"
//                       size="lg"
//                       onClick={handleCalculate}
//                     >
//                       Calculate Net Profit
//                     </Button>
//                   </div>
//                 </Form>

//                 {finalNetProfit !== null && (
//                   <Card className="mt-4 border-success">
//                     <Card.Body>
//                       <h5 className="text-success">
//                         Final Net Profit: ₹ {finalNetProfit.toLocaleString()}
//                       </h5>
//                     </Card.Body>
//                   </Card>
//                 )}
//               </Card.Body>
//             </Card>
//           </Container>
//           <Footer />
//         </>
//       )}
    
//     { label: "Amortization of Lease Hold Land Premium", key: "amortizationLease" },
//     { label: "News Print Claim Written-off", key: "newsPrintWrittenOff" },
//     { label: "Amalgamation Expenses Written Off", key: "amalgamationExp" },
//     { label: "Discount on Commercial Papers", key: "discountOnCP" },
//     { label: "Change in carrying amount of an asset/liability (ADD)", key: "changeInAssetLiabilityPos" },
//     { label: "Voluntary Compensation/Damages", key: "voluntaryCompensation" },
//     { label: "Other Expenses deducted from profit", key: "otherDeductedExp" },
//     { label: "Profit by way of Premium on Shares", key: "sharePremium" },
//     { label: "Profit on sale of forfeited Shares", key: "forfeitedSharesProfit" },
//     { label: "Capital Nature Profit (e.g., sale of undertaking)", key: "capitalNatureProfit" },
//     { label: "Profit from sale of immovable property/fixed assets", key: "fixedAssetSaleProfit" },
//     { label: "Change in carrying amount of asset/liability (SUBTRACT)", key: "changeInAssetLiabilityNeg" },
//     // { label: "Net Profit", key: "netProfit" },
//   ];

//   return (
//     <>
//       <Header />
//       <Container className="my-5">
//         <Card className="shadow">
//           <Card.Header className="bg-dark text-white text-center fs-4">
//             Net Profit Detailed Calculator
//           </Card.Header>
//           <Card.Body>
//             <Form>
//               {fields.map((field, index) => (
//                 <Row className="align-items-center mb-3" key={index}>
//                   <Col md={7}>
//                     <Form.Label className="mb-0 fw-medium">{field.label}</Form.Label>
//                   </Col>
//                   <Col md={5}>
//                     <Form.Control
//                       type="number"
//                       name={field.key}
//                       value={inputs[field.key]}
//                       onChange={handleChange}
//                       placeholder="₹"
//                     />
//                   </Col>
//                 </Row>
//               ))}

//               <div className="text-center mt-4">
//                 <Button variant="primary" size="lg" onClick={handleCalculate}>
//                   Calculate Net Profit
//                 </Button>
//               </div>
//             </Form>

//             {finalNetProfit !== null && (
//               <Card className="mt-4 border-success">
//                 <Card.Body>
//                   <h5 className="text-success">
//                     Final Net Profit: ₹ {finalNetProfit.toLocaleString()}
//                   </h5>
//                 </Card.Body>
//               </Card>
//             )}
//           </Card.Body>
//         </Card>
//       </Container>
//       <Footer />

//     </>
//   );
// };

// export default Netprofit;
import React, { useEffect, useState } from "react";
import Header from "../../component/Header";
import Footer from "../../component/Footer";

const Netprofit = () => {
  const [inputs, setInputs] = useState({
    netProfitBeforeTax: "",
    lossOnSale: "",
    doubtfulDebts: "",
    charityDonations: "",
    miscExpenses: "",
    fixedAssetsWrittenOff: "",
    amortizationLease: "",
    newsPrintWrittenOff: "",
    amalgamationExp: "",
    discountOnCP: "",
    changeInAssetLiabilityPos: "",
    voluntaryCompensation: "",
    otherDeductedExp: "",
    sharePremium: "",
    forfeitedSharesProfit: "",
    capitalNatureProfit: "",
    fixedAssetSaleProfit: "",
    changeInAssetLiabilityNeg: "",
  });

  const [finalNetProfit, setFinalNetProfit] = useState(null);
  const [loading, setLoading] = useState(true);

  const handleChange = (e) => {
    setInputs({ ...inputs, [e.target.name]: e.target.value });
  };

  const handleCalculate = () => {
    const getValue = (key) => parseFloat(inputs[key]) || 0;

    const base = getValue("netProfitBeforeTax");

    const additions = [
      "lossOnSale",
      "doubtfulDebts",
      "charityDonations",
      "miscExpenses",
      "fixedAssetsWrittenOff",
      "amortizationLease",
      "newsPrintWrittenOff",
      "amalgamationExp",
      "discountOnCP",
      "changeInAssetLiabilityPos",
      "voluntaryCompensation",
      "otherDeductedExp",
    ].reduce((sum, key) => sum + getValue(key), 0);

    const deductions = [
      "sharePremium",
      "forfeitedSharesProfit",
      "capitalNatureProfit",
      "fixedAssetSaleProfit",
      "changeInAssetLiabilityNeg",
    ].reduce((sum, key) => sum + getValue(key), 0);

    const result = base + additions - deductions;
    setFinalNetProfit(result);
  };

  const fields = [
    { label: "Net Profit before Tax", key: "netProfitBeforeTax" },
    {
      label: "Loss On Sale of Fixed Assets/Undertaking (Net)",
      key: "lossOnSale",
    },
    { label: "Provision for Doubtful Debts", key: "doubtfulDebts" },
    { label: "Charity & Donations", key: "charityDonations" },
    { label: "Misc Expenses", key: "miscExpenses" },
    { label: "Fixed Assets Written Off", key: "fixedAssetsWrittenOff" },
    {
      label: "Amortization of Lease Hold Land Premium",
      key: "amortizationLease",
    },
    { label: "News Print Claim Written-off", key: "newsPrintWrittenOff" },
    { label: "Amalgamation Expenses Written Off", key: "amalgamationExp" },
    { label: "Discount on Commercial Papers", key: "discountOnCP" },
    {
      label: "Change in carrying amount of an asset/liability (ADD)",
      key: "changeInAssetLiabilityPos",
    },
    { label: "Voluntary Compensation/Damages", key: "voluntaryCompensation" },
    { label: "Other Expenses deducted from profit", key: "otherDeductedExp" },
    { label: "Profit by way of Premium on Shares", key: "sharePremium" },
    {
      label: "Profit on sale of forfeited Shares",
      key: "forfeitedSharesProfit",
    },
    {
      label: "Capital Nature Profit (e.g., sale of undertaking)",
      key: "capitalNatureProfit",
    },
    {
      label: "Profit from sale of immovable property/fixed assets",
      key: "fixedAssetSaleProfit",
    },
    {
      label: "Change in carrying amount of asset/liability (SUBTRACT)",
      key: "changeInAssetLiabilityNeg",
    },
    // { label: "Net Profit", key: "netProfit" },
  ];

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-white">
        <div className="h-10 w-10 animate-spin rounded-full border-4 border-gray-200 border-t-[#18427d]" />
      </div>
    );
  }

  return (
    <>
      <Header />

      <main className="my-10 px-3 sm:px-5">
        <div className="mx-auto w-full max-w-5xl overflow-hidden rounded-lg bg-white shadow-lg">
          {/* Header */}
          <div className="bg-gray-900 px-4 py-4 text-center text-xl font-semibold text-white sm:text-2xl">
            Net Profit Detailed Calculator
          </div>

          {/* Body */}
          <div className="p-4 sm:p-6 md:p-8">
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleCalculate();
              }}
            >
              {fields.map((field, index) => (
                <div
                  className="mb-4 grid grid-cols-1 items-center gap-2 md:grid-cols-12 md:gap-4"
                  key={index}
                >
                  <div className="md:col-span-7">
                    <label
                      htmlFor={field.key}
                      className="block text-sm font-medium leading-6 text-gray-700"
                    >
                      {field.label}
                    </label>
                  </div>

                  <div className="md:col-span-5">
                    <input
                      id={field.key}
                      type="number"
                      name={field.key}
                      value={inputs[field.key]}
                      onChange={handleChange}
                      placeholder="₹"
                      className="h-10 w-full rounded-md border border-gray-300 bg-white px-3 text-sm text-gray-700 outline-none transition focus:border-blue-600 focus:ring-2 focus:ring-blue-100"
                    />
                  </div>
                </div>
              ))}

              <div className="mt-6 flex justify-center">
                <button
                  type="submit"
                  className="rounded-md bg-blue-600 px-6 py-3 text-base font-semibold text-white transition hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-300"
                >
                  Calculate Net Profit
                </button>
              </div>
            </form>

            {finalNetProfit !== null && (
              <div className="mt-6 rounded-md border border-green-500 bg-white p-4">
                <h5 className="text-lg font-semibold text-green-600">
                  Final Net Profit: ₹ {finalNetProfit.toLocaleString()}
                </h5>
              </div>
            )}
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
};

export default Netprofit;
