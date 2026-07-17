// import React, { useState } from "react";

// export default function IncomeTaxCalculator() {
//   const bgImage =
//     "https://images.unsplash.com/photo-1544377193-33dcf4d68fb5?q=80&w=1600&auto=format&fit=crop";
//   const [entity, setEntity] = useState("INDIVIDUAL_NEW");
//   const [income, setIncome] = useState(0);
//   const [stcg111a, setStcg111a] = useState(0);
//   const [ltcg112a, setLtcg112a] = useState(0);
//   const [ltcg112, setLtcg112] = useState(0);
//   const [tds, setTds] = useState(0);
//   const [advanceTax, setAdvanceTax] = useState(0);

//   const taxConfig = {
//     INDIVIDUAL_NEW: {
//       slabs: [
//         { upto: 400000, rate: 0 },
//         { upto: 800000, rate: 5 },
//         { upto: 1200000, rate: 10 },
//         { upto: 1600000, rate: 15 },
//         { upto: 2000000, rate: 20 },
//         { upto: 2400000, rate: 25 },
//         { upto: Infinity, rate: 30 },
//       ],
//       rebateLimit: 1200000,
//       rebateAmount: 60000,
//       surchargeCap: 25,
//     },

//     INDIVIDUAL_OLD: {
//       slabs: [
//         { upto: 250000, rate: 0 },
//         { upto: 500000, rate: 5 },
//         { upto: 1000000, rate: 20 },
//         { upto: Infinity, rate: 30 },
//       ],
//       rebateLimit: 500000,
//       rebateAmount: 12500,
//       surchargeCap: 37,
//     },

//     HUF: {
//       slabs: [
//         { upto: 250000, rate: 0 },
//         { upto: 500000, rate: 5 },
//         { upto: 1000000, rate: 20 },
//         { upto: Infinity, rate: 30 },
//       ],
//       rebateLimit: 500000,
//       rebateAmount: 12500,
//       surchargeCap: 37,
//     },

//     PARTNERSHIP_FIRM: {
//       flatRate: 30,
//       surcharge: 12,
//     },

//     LLP: {
//       flatRate: 30,
//       surcharge: 12,
//     },

//     COMPANY_NORMAL: {
//       flatRate: 30,
//     },

//     COMPANY_115BA: {
//       flatRate: 25,
//     },

//     COMPANY_115BAA: {
//       flatRate: 22,
//       surcharge: 10,
//     },

//     COMPANY_115BAB: {
//       flatRate: 15,
//       surcharge: 10,
//     },
//   };

//   const calculateSlabTax = (income, slabs) => {
//     let tax = 0;
//     let previous = 0;

//     for (let slab of slabs) {
//       let taxable = Math.min(income, slab.upto) - previous;

//       if (taxable > 0) {
//         tax += (taxable * slab.rate) / 100;
//       }

//       previous = slab.upto;

//       if (income <= slab.upto) break;
//     }

//     return tax;
//   };

//   const calculateTax = () => {
//     const config = taxConfig[entity];

//     let normalTax = 0;

//     if (config.flatRate) {
//       normalTax = (income * config.flatRate) / 100;
//     } else {
//       normalTax = calculateSlabTax(income, config.slabs);
//     }

//     let rebate = 0;

//     if (config.rebateLimit && income <= config.rebateLimit) {
//       rebate = Math.min(normalTax, config.rebateAmount);
//     }

//     const stcgTax = (stcg111a * 20) / 100;

//     const ltcg112aTax = (Math.max(0, ltcg112a - 125000) * 12.5) / 100;

//     const ltcg112Tax = (ltcg112 * 12.5) / 100;

//     let tax = normalTax - rebate + stcgTax + ltcg112aTax + ltcg112Tax;

//     let surchargeRate = 0;

//     if (
//       entity === "INDIVIDUAL_NEW" ||
//       entity === "INDIVIDUAL_OLD" ||
//       entity === "HUF"
//     ) {
//       if (income > 50000000) surchargeRate = config.surchargeCap;
//       else if (income > 20000000) surchargeRate = 25;
//       else if (income > 10000000) surchargeRate = 15;
//       else if (income > 5000000) surchargeRate = 10;
//     } else {
//       surchargeRate = config.surcharge || 0;

//       if (
//         (entity === "PARTNERSHIP_FIRM" || entity === "LLP") &&
//         income <= 10000000
//       ) {
//         surchargeRate = 0;
//       }
//     }

//     const surcharge = (tax * surchargeRate) / 100;

//     const cess = ((tax + surcharge) * 4) / 100;

//     const totalTax = tax + surcharge + cess;

//     const netPayable = totalTax - tds - advanceTax;

//     return {
//       normalTax,
//       rebate,
//       stcgTax,
//       ltcg112aTax,
//       ltcg112Tax,
//       surcharge,
//       cess,
//       totalTax,
//       netPayable,
//     };
//   };

//   const result = calculateTax();

//   return (
//     <>
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
//             Income Tax Calculator
//           </h1>

//           <div className="flex items-center gap-2 text-white">
//             <a href="/" className="hover:underline">
//               Home
//             </a>
//             <span>{">"}</span>
//             <span className="text-[#F5B800] font-semibold">
//               {" "}
//               Income Tax Calculator
//             </span>
//           </div>
//         </div>
//       </section>
//       <div className="max-w-4xl mx-auto p-6">
//         <h1 className="text-3xl font-bold mb-6">
//           Income Tax Calculator AY 2026-27
//         </h1>

//         <div className="grid grid-cols-2 gap-4">
//           <select
//             className="border p-2 rounded"
//             value={entity}
//             onChange={(e) => setEntity(e.target.value)}
//           >
//             <option value="INDIVIDUAL_NEW">Individual New Regime</option>

//             <option value="INDIVIDUAL_OLD">Individual Old Regime</option>

//             <option value="HUF">HUF</option>

//             <option value="PARTNERSHIP_FIRM">Partnership Firm</option>

//             <option value="LLP">LLP</option>

//             <option value="COMPANY_NORMAL">Company Normal</option>

//             <option value="COMPANY_115BA">Company 115BA</option>

//             <option value="COMPANY_115BAA">Company 115BAA</option>

//             <option value="COMPANY_115BAB">Company 115BAB</option>
//           </select>

//           <input
//             type="number"
//             placeholder="Taxable Income"
//             className="border p-2 rounded"
//             onChange={(e) => setIncome(Number(e.target.value))}
//           />

//           <input
//             type="number"
//             placeholder="STCG 111A"
//             className="border p-2 rounded"
//             onChange={(e) => setStcg111a(Number(e.target.value))}
//           />

//           <input
//             type="number"
//             placeholder="LTCG 112A"
//             className="border p-2 rounded"
//             onChange={(e) => setLtcg112a(Number(e.target.value))}
//           />

//           <input
//             type="number"
//             placeholder="LTCG 112"
//             className="border p-2 rounded"
//             onChange={(e) => setLtcg112(Number(e.target.value))}
//           />

//           <input
//             type="number"
//             placeholder="TDS"
//             className="border p-2 rounded"
//             onChange={(e) => setTds(Number(e.target.value))}
//           />

//           <input
//             type="number"
//             placeholder="Advance Tax"
//             className="border p-2 rounded"
//             onChange={(e) => setAdvanceTax(Number(e.target.value))}
//           />
//         </div>

//         <div className="mt-8 bg-white shadow rounded p-5">
//           <div>Normal Tax : ₹{result.normalTax.toFixed(2)}</div>

//           <div>87A Rebate : ₹{result.rebate.toFixed(2)}</div>

//           <div>STCG Tax : ₹{result.stcgTax.toFixed(2)}</div>

//           <div>LTCG 112A Tax : ₹{result.ltcg112aTax.toFixed(2)}</div>

//           <div>LTCG 112 Tax : ₹{result.ltcg112Tax.toFixed(2)}</div>

//           <div>Surcharge : ₹{result.surcharge.toFixed(2)}</div>

//           <div>Cess 4% : ₹{result.cess.toFixed(2)}</div>

//           <div className="font-bold text-xl mt-4">
//             Total Tax : ₹{result.totalTax.toFixed(2)}
//           </div>

//           <div className="font-bold text-xl text-red-600">
//             Net Payable / Refund : ₹{result.netPayable.toFixed(2)}
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }
import React, { useState } from "react";
import Header from "../../component/Header";

export default function IncomeTaxCalculator() {
  const [showSummary, setShowSummary] = useState(false);
  const bgImage =
    "https://images.unsplash.com/photo-1544377193-33dcf4d68fb5?q=80&w=1600&auto=format&fit=crop";
  const initialState = {
    assesseeName: "",
    status: "Individual",
    gender: "Male",
    financialYear: "2025-26",
    seniorCitizen: "No",
    regime: "New",
    companyType: "company",
    salary: "",
    houseProperty: "",
    businessIncome: "",

    stcg111a: "",
    stcgOthers: "",

    ltcg112a: "",
    ltcgOthers: "",

    interestIncome: "",
    agricultureIncome: "",
    lotteryIncome: "",

    deduction80C: "",
    deduction80D: "",
    deduction80TTA: "",
    otherDeduction: "",

    tds: "",
    advanceTax: "",
    selfAssessmentTax: "",
  };

  const [formData, setFormData] = useState(initialState);

  const [taxResult, setTaxResult] = useState({
    grossIncome: 0,
    totalDeduction: 0,
    taxableIncome: 0,
    normalTax: 0,
    stcgTax: 0,
    ltcgTax: 0,
    rebate87A: 0,
    surcharge: 0,
    cess: 0,
    totalTax: 0,
    taxPaid: 0,
    netPayable: 0,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const calculateTax = () => {
    const grossIncome =
      Number(formData.salary || 0) +
      Number(formData.houseProperty || 0) +
      Number(formData.businessIncome || 0) +
      Number(formData.stcg111a || 0) +
      Number(formData.stcgOthers || 0) +
      Number(formData.ltcg112a || 0) +
      Number(formData.ltcgOthers || 0) +
      Number(formData.interestIncome || 0);

    const totalDeduction =
      Number(formData.deduction80C || 0) +
      Number(formData.deduction80D || 0) +
      Number(formData.deduction80TTA || 0) +
      Number(formData.otherDeduction || 0);

    const taxableIncome = Math.max(grossIncome - totalDeduction, 0);

    // let normalTax = 0;

    // if (formData.status === "Individual" || formData.status === "HUF") {
    //   if (formData.regime === "New") {
    //     if (taxableIncome > 2400000) {
    //       normalTax = (taxableIncome - 2400000) * 0.3 + 300000;
    //     } else if (taxableIncome > 2000000) {
    //       normalTax = (taxableIncome - 2000000) * 0.25 + 200000;
    //     } else if (taxableIncome > 1600000) {
    //       normalTax = (taxableIncome - 1600000) * 0.2 + 120000;
    //     } else if (taxableIncome > 1200000) {
    //       normalTax = (taxableIncome - 1200000) * 0.15 + 60000;
    //     } else if (taxableIncome > 800000) {
    //       normalTax = (taxableIncome - 800000) * 0.1 + 20000;
    //     } else if (taxableIncome > 400000) {
    //       normalTax = (taxableIncome - 400000) * 0.05;
    //     }
    //   } else {
    //     if (taxableIncome > 1000000) {
    //       normalTax = (taxableIncome - 1000000) * 0.3 + 112500;
    //     } else if (taxableIncome > 500000) {
    //       normalTax = (taxableIncome - 500000) * 0.2 + 12500;
    //     } else if (taxableIncome > 250000) {
    //       normalTax = (taxableIncome - 250000) * 0.05;
    //     }
    //   }
    // }

    // // Partnership Firm / LLP
    // else if (
    //   formData.status === "Partnership Firm" ||
    //   formData.status === "LLP"
    // ) {
    //   normalTax = taxableIncome * 0.3;
    // }

    // // Domestic Company
    // else if (formData.status === "Company") {
    //   switch (formData.companyType) {
    //     case "115BA":
    //       normalTax = taxableIncome * 0.25;
    //       break;

    //     case "115BAA":
    //       normalTax = taxableIncome * 0.22;
    //       break;

    //     case "115BAB":
    //       normalTax = taxableIncome * 0.15;
    //       break;

    //     default:
    //       normalTax = taxableIncome * 0.3;
    //       break;
    //   }
    // }
    let normalTax = 0;

    // INDIVIDUAL & HUF
    if (formData.status === "Individual" || formData.status === "HUF") {
      // NEW REGIME
      if (formData.regime === "New") {
        if (taxableIncome > 2400000) {
          normalTax = ((taxableIncome - 2400000) * 30) / 100 + 300000;
        } else if (taxableIncome > 2000000) {
          normalTax = ((taxableIncome - 2000000) * 25) / 100 + 200000;
        } else if (taxableIncome > 1600000) {
          normalTax = ((taxableIncome - 1600000) * 20) / 100 + 120000;
        } else if (taxableIncome > 1200000) {
          normalTax = ((taxableIncome - 1200000) * 15) / 100 + 60000;
        } else if (taxableIncome > 800000) {
          normalTax = ((taxableIncome - 800000) * 10) / 100 + 20000;
        } else if (taxableIncome > 400000) {
          normalTax = ((taxableIncome - 400000) * 5) / 100;
        }
      }

      // OLD REGIME
      else {
        if (taxableIncome > 1000000) {
          normalTax = ((taxableIncome - 1000000) * 30) / 100 + 112500;
        } else if (taxableIncome > 500000) {
          normalTax = ((taxableIncome - 500000) * 20) / 100 + 12500;
        } else if (taxableIncome > 250000) {
          normalTax = ((taxableIncome - 250000) * 5) / 100;
        }
      }
    }

    // PARTNERSHIP FIRM
    else if (formData.status === "Partnership Firm") {
      normalTax = (taxableIncome * 30) / 100;
    }

    // LLP
    else if (formData.status === "LLP") {
      normalTax = (taxableIncome * 30) / 100;
    }

    // COMPANY
    else if (formData.status === "Company") {
      switch (formData.companyType) {
        case "115BA":
          normalTax = (taxableIncome * 25) / 100;
          break;

        case "115BAA":
          normalTax = (taxableIncome * 22) / 100;
          break;

        case "115BAB":
          normalTax = (taxableIncome * 15) / 100;
          break;

        default:
          normalTax = (taxableIncome * 30) / 100;
          break;
      }
    }

    // let rebate87A = 0;
    // if (formData.status === "Individual") {
    //   if (formData.regime === "New" && taxableIncome <= 1200000) {
    //     rebate87A = Math.min(normalTax, 60000);
    //   }

    //   if (formData.regime === "Old" && taxableIncome <= 500000) {
    //     rebate87A = Math.min(normalTax, 12500);
    //   }
    // }

    // const stcgTax = Number(formData.stcg111a || 0) * 0.2;

    // const ltcgTax =
    //   Math.max(Number(formData.ltcg112a || 0) - 125000, 0) * 0.125;

    // const taxBeforeCess = normalTax + stcgTax + ltcgTax - rebate87A;

    let rebate87A = 0;

    if (formData.status === "Individual" || formData.status === "HUF") {
      // FY 2025-26
      if (formData.financialYear === "2025-26") {
        if (formData.regime === "New" && taxableIncome <= 1200000) {
          rebate87A = Math.min(normalTax, 60000);
        }

        if (formData.regime === "Old" && taxableIncome <= 500000) {
          rebate87A = Math.min(normalTax, 12500);
        }
      }

      // FY 2023-24 & FY 2024-25
      else if (
        formData.financialYear === "2023-24" ||
        formData.financialYear === "2024-25"
      ) {
        if (formData.regime === "New" && taxableIncome <= 700000) {
          rebate87A = Math.min(normalTax, 25000);
        }

        if (formData.regime === "Old" && taxableIncome <= 500000) {
          rebate87A = Math.min(normalTax, 12500);
        }
      }
    }

    const stcgTax = Number(formData.stcg111a || 0) * 0.2;

    const ltcgTax =
      Math.max(Number(formData.ltcg112a || 0) - 125000, 0) * 0.125;

    const taxBeforeCess = normalTax + stcgTax + ltcgTax - rebate87A;
    let surcharge = 0;

    // Individual / HUF
    if (formData.status === "Individual" || formData.status === "HUF") {
      if (taxableIncome > 50000000) surcharge = taxBeforeCess * 0.37;
      else if (taxableIncome > 20000000) surcharge = taxBeforeCess * 0.25;
      else if (taxableIncome > 10000000) surcharge = taxBeforeCess * 0.15;
      else if (taxableIncome > 5000000) surcharge = taxBeforeCess * 0.1;
    }

    // Partnership Firm / LLP
    else if (
      formData.status === "Partnership Firm" ||
      formData.status === "LLP"
    ) {
      if (taxableIncome > 10000000) surcharge = taxBeforeCess * 0.12;
    }

    // Company
    else if (formData.status === "Company") {
      // 115BAA & 115BAB = Flat 10%
      if (
        formData.companyType === "115BAA" ||
        formData.companyType === "115BAB"
      ) {
        surcharge = taxBeforeCess * 0.1;
      }

      // Normal Company / 115BA
      else {
        if (taxableIncome > 100000000) surcharge = taxBeforeCess * 0.12;
        else if (taxableIncome > 10000000) surcharge = taxBeforeCess * 0.07;
      }
    }

    const cess = (taxBeforeCess + surcharge) * 0.04;

    const totalTax = taxBeforeCess + surcharge + cess;

    const taxPaid =
      Number(formData.tds || 0) +
      Number(formData.advanceTax || 0) +
      Number(formData.selfAssessmentTax || 0);

    const netPayable = totalTax - taxPaid;

    setTaxResult({
      grossIncome,
      totalDeduction,
      taxableIncome,
      normalTax,
      stcgTax,
      ltcgTax,
      rebate87A,
      surcharge,
      cess,
      totalTax,
      taxPaid,
      netPayable,
    });
    setShowSummary(true);
  };

  const resetForm = () => {
    setFormData(initialState);

    setTaxResult({
      grossIncome: 0,
      totalDeduction: 0,
      taxableIncome: 0,
      normalTax: 0,
      stcgTax: 0,
      ltcgTax: 0,
      rebate87A: 0,
      surcharge: 0,
      cess: 0,
      totalTax: 0,
      taxPaid: 0,
      netPayable: 0,
    });
    setShowSummary(true);
  };

  // const Row = ({ label, name }) => (
  //   <tr>
  //     <td className="border p-2">{label}</td>
  //     <td className="border p-1">
  //       <input
  //         type="number"
  //         name={name}
  //         value={formData[name]}
  //         onChange={handleChange}
  //         className="w-full text-right px-2 py-1 outline-none"
  //       />
  //     </td>
  //   </tr>
  // );
  const SummaryRow = ({ label, value }) => (
    <tr>
      <td className="border p-2">{label}</td>
      <td className="border p-2 text-right">
        ₹ {Number(value).toLocaleString()}
      </td>
    </tr>
  );
  return (
    <>
      <Header />
      <div
        className="relative bg-cover bg-center text-white py-24 overflow-hidden"
        style={{ backgroundImage: `url(${bgImage})` }}
      >
        {/* Overlays */}
        <div className="absolute inset-0 bg-black/40 z-[1]"></div>
        <div
          className="absolute top-0 right-0 w-2/5 h-full bg-black/20 z-[2] hidden md:block"
          style={{ clipPath: "polygon(0 0, 100% 0, 100% 100%, 20% 100%)" }}
        ></div>

        {/* Hero Content Container */}
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-[3]">
          <div className="flex flex-col">
            <h1 className="text-4xl md:text-5xl font-bold mb-3 text-center md:text-left">
              Tax Calculator
            </h1>

            {/* Custom Breadcrumb */}
            <nav className="flex justify-center md:justify-start items-center text-sm font-medium">
              <ol className="inline-flex items-center space-x-2">
                <li>
                  <a
                    href="/"
                    className="text-white hover:underline transition-all"
                  >
                    Home
                  </a>
                </li>
                <li className="flex items-center text-white">
                  <span className="mx-2 text-white/80">&gt;</span>
                  <span className="text-[#fd7e14] font-bold">
                    Tax Calculator
                  </span>
                </li>
              </ol>
            </nav>
          </div>
        </div>
      </div>
      <div className="min-h-screen bg-gray-100 p-5">
        <div className="max-w-6xl mx-auto bg-white border shadow">
          <div className="text-center py-4 border-b">
            <h1 className="text-2xl font-bold">Income Tax Calculator</h1>
          </div>

          <div className="grid grid-cols-5 gap-3 p-4">
            <input
              type="text"
              placeholder="Assessee Name"
              name="assesseeName"
              value={formData.assesseeName}
              onChange={handleChange}
              className="border p-2"
            />
            {/* 
          <select
            name="status"
            value={formData.status}
            onChange={handleChange}
            className="border p-2"
          >
            <option>Individual</option>
            <option>HUF</option>
            <option>Partnership Firm</option>
            <option>LLP</option>
            <option>Company</option>
          </select>
          {formData.status === "Company" && (
            <select
              name="companyType"
              value={formData.companyType}
              onChange={handleChange}
              className="border p-2"
            >
              <option value="NORMAL">Normal Company</option>
              <option value="115BA">115BA</option>
              <option value="115BAA">115BAA</option>
              <option value="115BAB">115BAB</option>
            </select>
          )} */}
            <select
              name="status"
              value={formData.status}
              onChange={handleChange}
              className="border p-2"
            >
              <option value="Individual">Individual</option>
              <option value="HUF">HUF</option>
              <option value="Partnership Firm">Partnership Firm</option>
              <option value="LLP">LLP</option>
              <option value="Company">Company</option>
            </select>

            {formData.status === "Company" && (
              <select
                name="companyType"
                value={formData.companyType}
                onChange={handleChange}
                className="border p-2"
              >
                <option value="Company">Domestic Company</option>
                <option value="115BA">115BA</option>
                <option value="115BAA">115BAA</option>
                <option value="115BAB">115BAB</option>
              </select>
            )}

            <select
              name="gender"
              value={formData.gender}
              onChange={handleChange}
              className="border p-2"
            >
              <option>Male</option>
              <option>Female</option>
            </select>
            <select
              name="financialYear"
              value={formData.financialYear}
              onChange={handleChange}
              className="border p-2"
            >
              <option value="2023-24">2023-24</option>
              <option value="2024-25">2024-25</option>
              <option value="2025-26">2025-26</option>
            </select>

            {formData.status === "Individual" && (
              <div>
                <label className="block text-sm font-medium mb-1">
                  Senior Citizen
                </label>

                <select
                  name="seniorCitizen"
                  value={formData.seniorCitizen}
                  onChange={handleChange}
                  className="border p-2 w-full"
                >
                  <option value="No">No</option>
                  <option value="Senior">Senior Citizen</option>
                  <option value="Super Senior">Super Senior Citizen</option>
                </select>
              </div>
            )}
          </div>

          <div className="px-4 pb-4">
            <label className="mr-4">
              <input
                type="radio"
                checked={formData.regime === "Old"}
                onChange={() =>
                  setFormData({
                    ...formData,
                    regime: "Old",
                  })
                }
              />
              <span className="ml-2">Old Regime</span>
            </label>

            <label className="ml-6">
              <input
                type="radio"
                checked={formData.regime === "New"}
                onChange={() =>
                  setFormData({
                    ...formData,
                    regime: "New",
                  })
                }
              />
              <span className="ml-2">New Regime</span>
            </label>
          </div>

          <div className="p-4">
            <table className="w-full border text-sm">
              <thead>
                <tr className="bg-gray-200">
                  <th className="border p-2 text-left">
                    Statement of Income and Tax
                  </th>
                  <th className="border p-2 w-48">Rs.</th>
                </tr>
              </thead>

              <tbody>
                {/* <tr>
                <td className="border p-2">Salary Income</td>
                <td className="border p-1">
                  <input
                    type="number"
                    name="salary"
                    value={formData.salary}
                    onChange={handleChange}
                    className="w-full text-right px-2 py-1 outline-none"
                  />
                </td>
              </tr> */}
                {formData.status === "Individual" && (
                  <tr>
                    <td className="border p-2">Salary Income</td>
                    <td className="border p-1">
                      <input
                        type="number"
                        name="salary"
                        value={formData.salary}
                        onChange={handleChange}
                        className="w-full text-right px-2 py-1 outline-none"
                      />
                    </td>
                  </tr>
                )}

                <tr>
                  <td className="border p-2">House Property</td>
                  <td className="border p-1">
                    <input
                      type="number"
                      name="houseProperty"
                      value={formData.houseProperty}
                      onChange={handleChange}
                      className="w-full text-right px-2 py-1 outline-none"
                    />
                  </td>
                </tr>

                <tr>
                  <td className="border p-2">Business Income</td>
                  <td className="border p-1">
                    <input
                      type="number"
                      name="businessIncome"
                      value={formData.businessIncome}
                      onChange={handleChange}
                      className="w-full text-right px-2 py-1 outline-none"
                    />
                  </td>
                </tr>

                <tr>
                  <td className="border p-2">STCG u/s 111A</td>
                  <td className="border p-1">
                    <input
                      type="number"
                      name="stcg111a"
                      value={formData.stcg111a}
                      onChange={handleChange}
                      className="w-full text-right px-2 py-1 outline-none"
                    />
                  </td>
                </tr>

                <tr>
                  <td className="border p-2">Other STCG</td>
                  <td className="border p-1">
                    <input
                      type="number"
                      name="stcgOthers"
                      value={formData.stcgOthers}
                      onChange={handleChange}
                      className="w-full text-right px-2 py-1 outline-none"
                    />
                  </td>
                </tr>

                <tr>
                  <td className="border p-2">LTCG u/s 112A</td>
                  <td className="border p-1">
                    <input
                      type="number"
                      name="ltcg112a"
                      value={formData.ltcg112a}
                      onChange={handleChange}
                      className="w-full text-right px-2 py-1 outline-none"
                    />
                  </td>
                </tr>

                <tr>
                  <td className="border p-2">Other LTCG</td>
                  <td className="border p-1">
                    <input
                      type="number"
                      name="ltcgOthers"
                      value={formData.ltcgOthers}
                      onChange={handleChange}
                      className="w-full text-right px-2 py-1 outline-none"
                    />
                  </td>
                </tr>

                <tr>
                  <td className="border p-2">Interest Income</td>
                  <td className="border p-1">
                    <input
                      type="number"
                      name="interestIncome"
                      value={formData.interestIncome}
                      onChange={handleChange}
                      className="w-full text-right px-2 py-1 outline-none"
                    />
                  </td>
                </tr>

                <tr>
                  <td className="border p-2">Agriculture Income</td>
                  <td className="border p-1">
                    <input
                      type="number"
                      name="agricultureIncome"
                      value={formData.agricultureIncome}
                      onChange={handleChange}
                      className="w-full text-right px-2 py-1 outline-none"
                    />
                  </td>
                </tr>

                <tr>
                  <td className="border p-2">Lottery Income</td>
                  <td className="border p-1">
                    <input
                      type="number"
                      name="lotteryIncome"
                      value={formData.lotteryIncome}
                      onChange={handleChange}
                      className="w-full text-right px-2 py-1 outline-none"
                    />
                  </td>
                </tr>

                <tr>
                  <td className="border p-2">80C</td>
                  <td className="border p-1">
                    <input
                      type="number"
                      name="deduction80C"
                      value={formData.deduction80C}
                      onChange={handleChange}
                      className="w-full text-right px-2 py-1 outline-none"
                    />
                  </td>
                </tr>

                <tr>
                  <td className="border p-2">80D</td>
                  <td className="border p-1">
                    <input
                      type="number"
                      name="deduction80D"
                      value={formData.deduction80D}
                      onChange={handleChange}
                      className="w-full text-right px-2 py-1 outline-none"
                    />
                  </td>
                </tr>

                <tr>
                  <td className="border p-2">80TTA</td>
                  <td className="border p-1">
                    <input
                      type="number"
                      name="deduction80TTA"
                      value={formData.deduction80TTA}
                      onChange={handleChange}
                      className="w-full text-right px-2 py-1 outline-none"
                    />
                  </td>
                </tr>
                {showSummary && (
                  // <>
                  //   <div className="mt-8 border">
                  //     <div className="bg-blue-100 p-2 text-center font-bold">
                  //       TAX SUMMARY
                  //     </div>

                  //     <table className="w-full text-sm">
                  //       <tbody>
                  //         <tr>
                  //           <td className="border p-2 font-bold">
                  //             Total Gross Income
                  //           </td>
                  //           <td className="border p-2 text-right">
                  //             ₹ {Number(taxResult.grossIncome).toLocaleString()}
                  //           </td>
                  //         </tr>

                  //         <tr>
                  //           <td className="border p-2 font-bold">
                  //             Less : Deductions
                  //           </td>
                  //           <td className="border p-2 text-right">
                  //             ₹{" "}
                  //             {Number(
                  //               taxResult.totalDeduction,
                  //             ).toLocaleString()}
                  //           </td>
                  //         </tr>

                  //         <tr>
                  //           <td className="border p-2 font-bold">
                  //             Taxable Income
                  //           </td>
                  //           <td className="border p-2 text-right">
                  //             ₹{" "}
                  //             {Number(taxResult.taxableIncome).toLocaleString()}
                  //           </td>
                  //         </tr>

                  //         <tr>
                  //           <td className="border p-2 font-bold">Normal Tax</td>
                  //           <td className="border p-2 text-right">
                  //             ₹ {Number(taxResult.normalTax).toLocaleString()}
                  //           </td>
                  //         </tr>

                  //         <tr>
                  //           <td className="border p-2 font-bold">STCG Tax</td>
                  //           <td className="border p-2 text-right">
                  //             ₹ {Number(taxResult.stcgTax).toLocaleString()}
                  //           </td>
                  //         </tr>

                  //         <tr>
                  //           <td className="border p-2 font-bold">LTCG Tax</td>
                  //           <td className="border p-2 text-right">
                  //             ₹ {Number(taxResult.ltcgTax).toLocaleString()}
                  //           </td>
                  //         </tr>

                  //         <tr>
                  //           <td className="border p-2 font-bold">
                  //             Rebate U/s 87A
                  //           </td>
                  //           <td className="border p-2 text-right">
                  //             ₹ {Number(taxResult.rebate87A).toLocaleString()}
                  //           </td>
                  //         </tr>

                  //         <tr>
                  //           <td className="border p-2 font-bold">Surcharge</td>
                  //           <td className="border p-2 text-right">
                  //             ₹ {Number(taxResult.surcharge).toLocaleString()}
                  //           </td>
                  //         </tr>

                  //         <tr>
                  //           <td className="border p-2 font-bold">Cess 4%</td>
                  //           <td className="border p-2 text-right">
                  //             ₹ {Number(taxResult.cess).toLocaleString()}
                  //           </td>
                  //         </tr>

                  //         <tr>
                  //           <td className="border p-2 font-bold">
                  //             Total Tax Liability
                  //           </td>
                  //           <td className="border p-2 text-right">
                  //             ₹ {Number(taxResult.totalTax).toLocaleString()}
                  //           </td>
                  //         </tr>

                  //         <tr>
                  //           <td className="border p-2 font-bold">Tax Paid</td>
                  //           <td className="border p-2 text-right">
                  //             ₹ {Number(taxResult.taxPaid).toLocaleString()}
                  //           </td>
                  //         </tr>
                  <div className="mt-8 border">
                    <div className="bg-blue-100 p-2 text-center font-bold">
                      TAX SUMMARY
                    </div>

                    <table className="w-full text-sm">
                      <tbody>
                        <SummaryRow
                          label="Gross Total Income"
                          value={taxResult.grossIncome}
                        />
                        <SummaryRow
                          label="Less : Deductions"
                          value={taxResult.totalDeduction}
                        />
                        <SummaryRow
                          label="Taxable Income"
                          value={taxResult.taxableIncome}
                        />
                        <SummaryRow
                          label="Normal Tax"
                          value={taxResult.normalTax}
                        />
                        <SummaryRow
                          label="STCG Tax"
                          value={taxResult.stcgTax}
                        />
                        <SummaryRow
                          label="LTCG Tax"
                          value={taxResult.ltcgTax}
                        />
                        <SummaryRow
                          label="Rebate U/s 87A"
                          value={taxResult.rebate87A}
                        />
                        <SummaryRow
                          label="Surcharge"
                          value={taxResult.surcharge}
                        />
                        <SummaryRow label="Cess 4%" value={taxResult.cess} />
                        <SummaryRow
                          label="Total Tax Liability"
                          value={taxResult.totalTax}
                        />
                        <SummaryRow
                          label="Tax Paid"
                          value={taxResult.taxPaid}
                        />

                        {/* <tr className="bg-yellow-100 font-bold">
                          <td className="border p-2">
                            Net Tax Payable / Refund
                          </td>
                          <td className="border p-2 text-right">
                            ₹ {taxResult.netPayable.toLocaleString()}
                          </td>
                        </tr> */}
                      </tbody>
                    </table>
                  </div>
                )}
                <tr>
                  <td className="border p-2">Other Deduction</td>
                  <td className="border p-1">
                    <input
                      type="number"
                      name="otherDeduction"
                      value={formData.otherDeduction}
                      onChange={handleChange}
                      className="w-full text-right px-2 py-1 outline-none"
                    />
                  </td>
                </tr>

                <tr>
                  <td className="border p-2">TDS</td>
                  <td className="border p-1">
                    <input
                      type="number"
                      name="tds"
                      value={formData.tds}
                      onChange={handleChange}
                      className="w-full text-right px-2 py-1 outline-none"
                    />
                  </td>
                </tr>

                <tr>
                  <td className="border p-2">Advance Tax</td>
                  <td className="border p-1">
                    <input
                      type="number"
                      name="advanceTax"
                      value={formData.advanceTax}
                      onChange={handleChange}
                      className="w-full text-right px-2 py-1 outline-none"
                    />
                  </td>
                </tr>

                <tr>
                  <td className="border p-2">Self Assessment Tax</td>
                  <td className="border p-1">
                    <input
                      type="number"
                      name="selfAssessmentTax"
                      value={formData.selfAssessmentTax}
                      onChange={handleChange}
                      className="w-full text-right px-2 py-1 outline-none"
                    />
                  </td>
                </tr>
                <tr className="bg-yellow-100 font-bold">
                  <td className="border p-2">Net Tax Payable / Refund</td>
                  <td className="border p-2 text-right">
                    ₹ {taxResult.netPayable.toLocaleString()}
                  </td>
                </tr>
              </tbody>
            </table>
            <div className="flex justify-center gap-4 mt-6">
              <button
                onClick={calculateTax}
                className="bg-blue-600 text-white px-6 py-2 rounded"
              >
                Calculate Tax
              </button>

              <button
                onClick={resetForm}
                className="bg-red-600 text-white px-6 py-2 rounded"
              >
                Reset
              </button>

              <button
                onClick={() => window.print()}
                className="bg-green-600 text-white px-6 py-2 rounded"
              >
                Print
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
