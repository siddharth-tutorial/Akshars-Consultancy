<<<<<<< HEAD
import React, { useEffect, useRef, useState } from "react";
import { Container, Table, Form, Button, Row, Col } from "react-bootstrap";
import Footer from "../../component/Footer";
import Header from "../../component/Header";

export default function IncomeTaxCalculator() {
  const [inputs, setInputs] = useState({
    salary: "",
    house: "",
    business: "",
    stcgSTT: "",
    stcgOther: "",
    ltcgSTT: "",
    ltcgOther: "",
    lottery: "",
    deductions: "",
  });

  const [formData, setFormData] = useState({
    name: "",
    status: "Individual",
    regime: "old",
    gender: "Male",
    financialYear: "2025-2026",
    seniorCitizen: "Not Senior",
    companyScheme: "",
  });

  const [result, setResult] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => {
      if (name === "status" && value !== "Company") {
        return { ...prev, [name]: value, companyScheme: "" };
      }
      return { ...prev, [name]: value };
    });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    const parsedValue =
      e.target.type === "number" ? parseFloat(value || 0) : value;
    // setInputs((prevState) => ({
    //   ...prevState,
    //   [name]: parsedValue,
    // }));
    setInputs((prev) => ({
      ...prev,
      [name]: value, // label-based dynamic key
    }));
  };

  const handleCalculate = () => {
    const { status, regime, companyScheme } = formData;
    const salary = Math.round(parseFloat(inputs.salary) || 0);
    const house = Math.round(parseFloat(inputs.house) || 0);
    const business = Math.round(parseFloat(inputs.business) || 0);
    const stcgSTT = Math.round(parseFloat(inputs.stcgSTT) || 0);
    const stcgOther = Math.round(parseFloat(inputs.stcgOther) || 0);
    const ltcgSTT = Math.round(parseFloat(inputs.ltcgSTT) || 0);
    const ltcgOther = Math.round(parseFloat(inputs.ltcgOther) || 0);
    const lottery = Math.round(parseFloat(inputs.lottery) || 0);
    const deductions = Math.round(
      regime === "old" ? parseFloat(inputs.deductions) || 0 : 0
    );

    // Total Gross Income
    const grossIncome = salary + house + business + stcgOther + ltcgOther;

    // LTCG STT only taxable above ₹1L
    const taxableLtcgSTT = Math.max(ltcgSTT - 100000, 0);

    // Taxable Income = Gross Income - Deductions (if old regime)
    const taxableIncome = Math.max(grossIncome - deductions, 0);
    let baseTax = 0;
    let rebate = 0;
    let surcharge = 0;
    let surchargeRate = 0;

    // INDIVIDUAL / HUF / AOP / BOI
    if (["Individual", "HUF", "AOP", "BOI"].includes(status)) {
      // --- BASE TAX ---
      if (regime === "old") {
        if (taxableIncome <= 250000) {
          baseTax = 0;
        } else if (taxableIncome <= 500000) {
          baseTax = (taxableIncome - 250000) * 0.05;
        } else if (taxableIncome <= 1000000) {
          baseTax = 12500 + (taxableIncome - 500000) * 0.2;
        } else {
          baseTax = 112500 + (taxableIncome - 1000000) * 0.3;
        }
      } else {
        // NEW REGIME (as per FY 2023-24)
        if (taxableIncome <= 300000) {
          baseTax = 0;
        } else if (taxableIncome <= 600000) {
          baseTax = (taxableIncome - 300000) * 0.05;
        } else if (taxableIncome <= 900000) {
          baseTax = 15000 + (taxableIncome - 600000) * 0.1;
        } else if (taxableIncome <= 1200000) {
          baseTax = 30000 + (taxableIncome - 900000) * 0.15;
        } else if (taxableIncome <= 1500000) {
          baseTax = 45000 + (taxableIncome - 1200000) * 0.2;
        } else {
          baseTax = 60000 + (taxableIncome - 1500000) * 0.3;
        }
      }

      // --- REBATE u/s 87A ---
      if (
        (regime === "old" && taxableIncome <= 500000) ||
        (regime === "new" && taxableIncome <= 700000)
      ) {
        rebate = Math.min(baseTax, 25000); // Max rebate allowed
        baseTax -= rebate;
      }

      // // --- SURCHARGE ---
      // const incomeAfterRebate = taxableIncome; // based on income, not tax
      // if (incomeAfterRebate > 5000000 && incomeAfterRebate <= 10000000) {
      //   const surcharge10 = baseTax * 0.1;
      //   const excessIncome = incomeAfterRebate - 5000000;
      //   surcharge = Math.min(surcharge10, excessIncome);
      // } else if (
      //   incomeAfterRebate > 10000000 &&
      //   incomeAfterRebate <= 20000000 //1cr to 2 cr 15%
      // ) {
      //   surchargeRate = 0.15;
      //   surcharge = baseTax * surchargeRate;
      // } else if (
      //   incomeAfterRebate > 20000000 && //2cr to 5 cr 25%
      //   incomeAfterRebate <= 50000000
      // ) {
      //   surchargeRate = 0.07;
      //   surcharge = baseTax * surchargeRate;
      // } else if (incomeAfterRebate > 50000000) {
      //   surchargeRate = 0.25; //5 cr to above 37%
      //   surcharge = baseTax * surchargeRate;
      // }

      // console.log("Surcharge:", surcharge);

      // --- SURCHARGE ---
      const incomeAfterRebate = taxableIncome; // based on income, not tax
      let surcharge = 0;

      if (incomeAfterRebate > 5000000 && incomeAfterRebate <= 10000000) {
        // 50L – 1Cr → 10% but marginal relief
        const surcharge10 = baseTax * 0.1;
        const excessIncome = incomeAfterRebate - 5000000;
        surcharge = Math.min(surcharge10, excessIncome);
      } else if (
        incomeAfterRebate > 10000000 &&
        incomeAfterRebate <= 20000000
      ) {
        // 1Cr – 2Cr → 10% but marginal relief
        const surcharge15 = baseTax * 0.1;
        const excessIncome = incomeAfterRebate - 10000000;
        surcharge = Math.min(surcharge15, excessIncome);
      } else if (
        incomeAfterRebate > 20000000 &&
        incomeAfterRebate <= 50000000
      ) {
        // 2Cr – 5Cr → 25% but effective 7% (PV Associate logic)
        const surcharge25 = baseTax * 0.25;
        const excessIncome = incomeAfterRebate - 20000000;
        surcharge = Math.min(surcharge25, excessIncome);

        // minimum 7% ensure karo (PV Associate jem)
        if (surcharge < baseTax * 0.07) {
          surcharge = baseTax * 0.07;
        }
      } else if (incomeAfterRebate > 50000000) {
        // Above 5Cr → 37% but marginal relief
        const surcharge37 = baseTax * 0.37;
        const excessIncome = incomeAfterRebate - 50000000;
        surcharge = Math.min(surcharge37, excessIncome);

        // exactly 5Cr ma PV Associate 4% show kare che
        if (incomeAfterRebate === 50000000 && surcharge < baseTax * 0.04) {
          surcharge = baseTax * 0.04;
        }
      }

      console.log("Surcharge:", surcharge);
    }

    // COMPANY
    function getCompanyRate(scheme) {
      switch (scheme) {
        case "115BA":
          return 0.25;
        case "115BAA":
          return 0.22;
        case "115BAB":
          return 0.15;
        default:
          return 0.3;
      }
    }

    // --- COMPANY LOGIC ---
    if (status === "Company") {
      const companyIncome =
        salary +
        house +
        business +
        stcgSTT +
        stcgOther +
        ltcgSTT +
        ltcgOther +
        lottery;

      // Save companyIncome in state if needed
      baseTax = companyIncome * getCompanyRate(companyScheme);

      if (companyIncome > 10000000 && companyIncome <= 100000000)
        surcharge = 0.07 * baseTax;
      else if (companyIncome > 100000000) surcharge = 0.12 * baseTax;
    }

    // --- ADDITIONAL FLAT TAXES ---
    const stcgTax = stcgSTT * 0.15;
    const ltcgTax = taxableLtcgSTT * 0.1;
    const ltcgOtherTax = ltcgOther * 0.2;
    const lotteryTax = lottery * 0.3;

    // Final tax additions
    const slabTax = baseTax - rebate + surcharge;
    const cess =
      0.04 * (slabTax + stcgTax + ltcgTax + ltcgOtherTax + lotteryTax);
    const totalTax =
      slabTax + stcgTax + ltcgTax + ltcgOtherTax + lotteryTax + cess;

    // setResult({
    //   income: grossIncome,
    //   deductions,
    //   taxableIncome,
    //   baseTax: baseTax.toFixed(2),
    //   rebate: rebate.toFixed(2),
    //   surcharge: surcharge.toFixed(2),
    //   stcgTax: stcgTax.toFixed(2),
    //   ltcgTax: ltcgTax.toFixed(2),
    //   ltcgOtherTax: ltcgOtherTax.toFixed(2),
    //   lotteryTax: lotteryTax.toFixed(2),
    //   cess: cess.toFixed(2),
    //   totalTax: totalTax.toFixed(2),
    // });
    setResult({
      income: Math.round(grossIncome),
      deductions: Math.round(deductions),
      taxableIncome: Math.round(taxableIncome),
      baseTax: Math.round(baseTax),
      rebate: Math.round(rebate),
      surcharge: Math.round(surcharge),
      stcgTax: Math.round(stcgTax),
      ltcgTax: Math.round(ltcgTax),
      ltcgOtherTax: Math.round(ltcgOtherTax),
      lotteryTax: Math.round(lotteryTax),
      cess: Math.round(cess),
      totalTax: Math.round(totalTax),
    });
  };
  // reset button logic
  const handleReset = () => {
    setInputs(inputs); // Or whatever your reset logic is
    setResult(null);
  };
  let rowIndex = 0;
  const getBgColor = () => (rowIndex++ % 2 === 0 ? "#FCFCF5" : "#E2E2DC");

  const printRef = useRef();

  const handlePrint = () => {
    const printContent = printRef.current.innerHTML;
    const printWindow = window.open("", "", "width=900,height=650");
    printWindow.document.write(`
    <html>
      <head>
        <title>Income Tax Calculator</title>
        <style>
          @page { size: auto; margin: 20mm; }
          body { font-family: Arial, sans-serif; -webkit-print-color-adjust: exact; }
          table { width: 100%; border-collapse: collapse; }
          th, td { border: 1px solid #ddd; padding: 6px; }
          .no-print { display: none !important; }
        </style>
      </head>
      <body>
        ${printContent}
      </body>
    </html>
  `);
    printWindow.document.close();
    printWindow.focus();
    printWindow.print();
    printWindow.close();
  };

  const [year, setYear] = useState("2025-2026"); // match dropdown default
  const [columns, setColumns] = useState({ shortTerm: [], longTerm: [] });

  const getColumns = (y) => {
    switch (y) {
      case "2025-2026":
        return {
          shortTerm: ["STT @20%", "Others"],
          longTerm: ["@12.5%", "@20%"],
        };
      case "2024-2025":
        return {
          shortTerm: ["STT @15%", "STT @20%", "Others"],
          longTerm: ["@10%", "@12.5%", "@20%"],
        };
      case "2023-2024":
        return {
          shortTerm: ["STT @15%", "Others"],
          longTerm: ["@10%", "@20%"],
        };
      // For all years from 2022-23 to 2007-08 same data
      case "2022-2023":
      case "2021-2022":
      case "2020-2021":
      case "2019-2020":
      case "2018-2019":
      case "2017-2018":
      case "2016-2017":
      case "2015-2016":
      case "2014-2015":
      case "2013-2014":
      case "2012-2013":
      case "2011-2012":
      case "2010-2011":
      case "2009-2010":
      case "2008-2009":
      case "2007-2008":
        return {
          shortTerm: ["STT @15%", "Others"],
          longTerm: ["@10%", "@20%"],
        };
      default:
        return { shortTerm: [], longTerm: [] };
    }
  };

  useEffect(() => {
    setColumns(getColumns(year));
  }, [year]);

  const { shortTerm, longTerm } = columns;

  return (
    <>
      <Header className="no-print" />

      <Container className="py-4">
        <style>{`
   @media print {
  body * {
    visibility: hidden;
  }

  #printable, #printable * {
    visibility: visible;
  }

  #printable {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    margin: 0 auto;
    padding: 10px;
    font-size: 12px;
    background: white;

    /* ✅ Compress karo design safe rakhine */
    zoom: 70%;   /* adjust 60–80% sudhi tame try kari shako */
  }

  .no-print {
    display: none !important;
  }

  table {
    border-collapse: collapse !important;
    width: 100% !important;
  }

  th, td {
    border: 1px solid #dee2e6 !important;
    padding: 4px 6px !important;
    font-size: 12px !important;
    text-align: left !important;
  }

  h3 {
    text-align: center;
    margin-bottom: 12px;
  }

  @page {
    size: A4 portrait;
    margin: 10mm;
  }
}

  `}</style>
        <div ref={printRef} id="printable">
          <h3 className="text-center mb-4">Income Tax Calculator</h3>
          <Form>
            <Row className="mb-2 align-items-center">
              <Col xs={12} md={3}>
                <Form.Group controlId="name">
                  <Form.Label className="mb-0">Assessee Name</Form.Label>
                  <Form.Control
                    type="text"
                    name="name"
                    value={formData.name || 0}
                    onChange={handleChange}
                    className="form-control-sm text-end"
                  />
                </Form.Group>
              </Col>

              <Col xs={12} md={3}>
                <Form.Group controlId="status">
                  <Form.Label className="mb-0">Status of Tax Payer</Form.Label>
                  <Form.Select
                    name="status"
                    value={formData.status}
                    onChange={handleChange}
                  >
                    <option>Individual</option>
                    <option>HUF</option>
                    <option>AOP</option>
                    <option>BOI</option>
                    <option>Company</option>
                  </Form.Select>
                </Form.Group>

                {/* ✅ Show Company Tax Section dropdown only if "Company" and "new" regime selected */}
                {formData.status === "Company" && formData.regime === "new" && (
                  <Form.Group controlId="companyScheme" className="mt-2">
                    <Form.Label className="mb-0">
                      Taxation Under Section
                    </Form.Label>
                    <Form.Select
                      name="companyScheme"
                      value={formData.companyScheme || ""}
                      onChange={handleChange}
                    >
                      <option value="">Select</option>
                      <option value="115BA">Section 115BA (25%)</option>
                      <option value="115BAA">Section 115BAA (22%)</option>
                      <option value="115BAB">Section 115BAB (15%)</option>
                    </Form.Select>
                  </Form.Group>
                )}
              </Col>

              <Col xs={12} md={2}>
                <Form.Group controlId="gender">
                  <Form.Label className="mb-0">Gender</Form.Label>
                  <Form.Select
                    name="gender"
                    value={formData.gender}
                    onChange={handleChange}
                  >
                    <option>Male</option>
                    <option>Female</option>
                    <option>Other</option>
                  </Form.Select>
                </Form.Group>
              </Col>

              <Col xs={12} md={2}>
                <Form.Group controlId="financialYear">
                  <Form.Label className="mb-0">Financial Year</Form.Label>
                  <Form.Select
                    name="financialYear"
                    value={year}
                    onChange={(e) => setYear(e.target.value)}
                  >
                    <option value="2025-2026">2025-2026</option>
                    <option value="2024-2025">2024-2025</option>
                    <option value="2023-2024">2023-2024</option>
                    <option value="2022-2023">2022-2023</option>{" "}
                    <option value="2021-2022">2021-2022</option>
                    <option value="2020-2021">2020-2021</option>{" "}
                    <option value="2019-2020">2019-2020</option>
                    <option value="2018-2019">2018-2019</option>{" "}
                    <option value="2017-2018">2017-2018</option>
                    <option value="2016-2017">2016-2017</option>{" "}
                    <option value="2015-2016">2015-2016</option>
                    <option value="2014-2015">2014-2015</option>{" "}
                    <option value="2013-2014">2013-2014</option>
                    <option value="2012-2013">2012-2013</option>{" "}
                    <option value="2011-2012">2011-2012</option>
                    <option value="2010-2011">2010-2011</option>{" "}
                    <option value="2009-2010">2009-2010</option>
                    <option value="2008-2009">2008-2009</option>{" "}
                    <option value="2007-2008">2007-2008</option>
                  </Form.Select>
                </Form.Group>
              </Col>

              <Col xs={12} md={2}>
                <Form.Group controlId="seniorCitizen">
                  <Form.Label className="mb-0">Senior Citizen</Form.Label>
                  <Form.Select
                    name="seniorCitizen"
                    value={formData.seniorCitizen}
                    onChange={handleChange}
                  >
                    <option>Not Senior</option>
                    <option>Senior</option>
                    <option>Super Senior</option>
                  </Form.Select>
                </Form.Group>
              </Col>
            </Row>

            <Row className=" p-2">
              <Col md={12}>
                <Form.Label className="me-3 mb-0">
                  Slab Rate Calculation As Per:
                </Form.Label>
                <Form.Check
                  inline
                  label="Old Regime"
                  name="regime"
                  type="radio"
                  value="old"
                  checked={formData.regime === "old"}
                  onChange={handleChange}
                />
                <Form.Check
                  inline
                  label="New Regime"
                  name="regime"
                  type="radio"
                  value="new"
                  checked={formData.regime === "new"}
                  onChange={handleChange}
                />
              </Col>
            </Row>
            <div className="text-center fw-bold text-muted mt-2">
              Statement of Income and Tax
            </div>
          </Form>

          <Form>
            <Table responsive size="sm" className="mb-4">
              <thead></thead>
              <tbody>
                {/* Income Details */}
                <tr style={{ backgroundColor: getBgColor() }}>
                  <th className="text-lg">Income</th>
                  <th className="text-lg">Rs.</th>
                </tr>

                {formData.status !== "Company" && (
                  <tr style={{ backgroundColor: getBgColor() }}>
                    <td className="text-sm">Salary Income</td>
                    <td>
                      <Form.Control
                        name="salary"
                        value={inputs.salary || ""}
                        onChange={handleInputChange}
                        type="number"
                        className="form-control-sm text-end"
                      />
                    </td>
                  </tr>
                )}

                <tr style={{ backgroundColor: getBgColor() }}>
                  <td className="text-sm">
                    Income from House Property (Enter Income after Standard
                    Deduction Of 30% as per Sec.24(a))
                  </td>
                  <td>
                    <Form.Control
                      name="house"
                      value={inputs.house || ""}
                      onChange={handleInputChange}
                      type="number"
                      className="form-control-sm text-end"
                    />
                  </td>
                </tr>

                <tr style={{ backgroundColor: getBgColor() }}>
                  <td className="text-sm">Business Income</td>
                  <td>
                    <Form.Control
                      name="business"
                      value={inputs.business || ""}
                      onChange={handleInputChange}
                      type="number"
                      className="form-control-sm text-end"
                    />
                  </td>
                </tr>

                {/* Capital Gains */}

                <tr style={{ backgroundColor: getBgColor() }}>
                  <th className="text-sm" colSpan={2}>
                    Capital Gains
                  </th>
                </tr>

                {/* Short Term */}

                <tr style={{ backgroundColor: getBgColor() }}>
                  <td className="ps-4 py-2">
                    <div className="d-flex flex-wrap align-items-center gap-3">
                      {/* Left label */}
                      <div className="fw-bold" style={{ minWidth: "150px" }}>
                        (a) Short Term
                      </div>

                      {shortTerm.map((label, idx) => {
                        const key = `st_${label.replace(/\s|@|%/g, "_")}`; // unique key
                        return (
                          <div
                            key={idx}
                            className="d-flex flex-column align-items-end"
                          >
                            <label className="text-muted small mb-1">
                              {label}
                            </label>
                            <Form.Control
                              type="number"
                              name={key}
                              value={inputs[key] || 0}
                              onChange={handleInputChange}
                              className="form-control-sm text-end mx-auto"
                              style={{ maxWidth: "100px" }}
                            />
                          </div>
                        );
                      })}
                    </div>
                  </td>

                  {/* Total column */}
                  <td className="align-middle text-end ">
                    <Form.Control
                      type="number"
                      className="form-control-sm text-end mx-auto"
                      value={shortTerm.reduce(
                        (sum, label) =>
                          sum +
                          (parseFloat(
                            inputs[`st_${label.replace(/\s|@|%/g, "_")}`]
                          ) || 0),
                        0
                      )}
                      disabled
                      style={{ Width: "100px" }}
                    />
                  </td>
                </tr>

                {/* Long Term Capital Gains */}
                <tr style={{ backgroundColor: getBgColor() }}>
                  <td className="ps-4 py-2">
                    <div className="d-flex flex-wrap align-items-center gap-3">
                      <div className="fw-bold" style={{ minWidth: "150px" }}>
                        (b) Long Term
                      </div>

                      {longTerm.map((label, idx) => {
                        const key = `lt_${label.replace(/\s|@|%/g, "_")}`;
                        return (
                          <div
                            key={idx}
                            className="d-flex flex-column align-items-end"
                          >
                            <span className="text-muted small">{label}</span>
                            <Form.Control
                              type="number"
                              name={key}
                              value={inputs[key] || 0}
                              onChange={handleInputChange}
                              className="form-control-sm text-end"
                              style={{ maxWidth: "100px" }}
                            />
                          </div>
                        );
                      })}
                    </div>
                  </td>

                  <td
                    className="align-middle text-end"
                    style={{ Width: "100px" }}
                  >
                    <Form.Control
                      type="number"
                      className="form-control-sm text-end"
                      value={longTerm.reduce(
                        (sum, label) =>
                          sum +
                          (parseFloat(
                            inputs[`lt_${label.replace(/\s|@|%/g, "_")}`]
                          ) || 0),
                        0
                      )}
                      disabled
                      style={{ Width: "100px" }}
                    />
                  </td>
                </tr>
                {/* Other Incomes */}
                <tr style={{ backgroundColor: "#fcfcf5" }}>
                  <th className="text-sm" colSpan={2}>
                    Income from Other Sources
                  </th>
                </tr>

                <tr style={{ backgroundColor: getBgColor() }}>
                  <td className="text-sm">
                    (a) Incomes (Interest, Dividend etc.)
                  </td>
                  <td>
                    <Form.Control
                      name="otherIncome"
                      value={inputs.otherIncome || 0}
                      onChange={handleInputChange}
                      type="number"
                      className="form-control-sm text-end"
                    />
                  </td>
                </tr>

                <tr style={{ backgroundColor: getBgColor() }}>
                  <td className="text-sm">(b) Agriculture Income</td>
                  <td>
                    <Form.Control
                      name="agriIncome"
                      value={inputs.agriIncome || 0}
                      onChange={handleInputChange}
                      type="number"
                      className="form-control-sm text-end"
                    />
                  </td>
                </tr>

                <tr style={{ backgroundColor: getBgColor() }}>
                  <td className="text-sm">(c) Lottery Winnings (30%)</td>
                  <td>
                    <Form.Control
                      name="lottery"
                      value={inputs.lottery || 0}
                      onChange={handleInputChange}
                      type="number"
                      className="form-control-sm text-end"
                    />
                  </td>
                </tr>

                {/* Deductions */}
                <tr className="bg-light">
                  <th className="text-sm" colSpan={2}>
                    Deductions under Chapter VIA
                  </th>
                </tr>

                <tr style={{ backgroundColor: getBgColor() }}>
                  <td className="text-sm">80C/80CCC/80CCD</td>
                  <td>
                    <Form.Control
                      name="deduction80C"
                      value={inputs.deduction80C || 0}
                      onChange={handleInputChange}
                      type="number"
                      className="form-control-sm text-end"
                    />
                  </td>
                </tr>

                <tr style={{ backgroundColor: getBgColor() }}>
                  <td className="text-sm">80D (Mediclaim)</td>
                  <td>
                    <Form.Control
                      name="deduction80D"
                      value={inputs.deduction80D || 0}
                      onChange={handleInputChange}
                      type="number"
                      className="form-control-sm text-end"
                    />
                  </td>
                </tr>

                <tr style={{ backgroundColor: getBgColor() }}>
                  <td className="text-sm">80TTA</td>
                  <td>
                    <Form.Control
                      name="deduction80TTA"
                      value={inputs.deduction80TTA || 0}
                      onChange={handleInputChange}
                      type="number"
                      className="form-control-sm text-end"
                    />
                  </td>
                </tr>

                <tr style={{ backgroundColor: getBgColor() }}>
                  <td className="text-sm">Other (Old Regime)</td>
                  <td>
                    <Form.Control
                      name="oldDeduction"
                      value={inputs.oldDeduction || 0}
                      onChange={handleInputChange}
                      type="number"
                      className="form-control-sm text-end"
                    />
                  </td>
                </tr>

                <tr style={{ backgroundColor: getBgColor() }}>
                  <td className="text-sm">Other (New Regime)</td>
                  <td>
                    <Form.Control
                      name="newDeduction"
                      value={inputs.newDeduction || 0}
                      onChange={handleInputChange}
                      type="number"
                      className="form-control-sm text-end"
                    />
                  </td>
                </tr>

                {/* Tax Result Section */}
                {result && (
                  <>
                    <tr className="bg-light fw-bold">
                      <td colSpan={2}>Taxable Income</td>
                    </tr>
                    <tr style={{ backgroundColor: getBgColor() }}>
                      <td className="text-sm">Normal Income</td>
                      <td className="text-end">
                        {Math.round(inputs.salary || 0).toLocaleString()}
                      </td>
                    </tr>
                    <tr style={{ backgroundColor: getBgColor() }}>
                      <td className="text-sm">Special Income</td>
                      <td className="text-end">
                        {Math.round(
                          (inputs.stcgSTT || 0) + (inputs.ltcgSTT || 0)
                        ).toLocaleString()}
                      </td>
                    </tr>
                    <tr className="fw-bold">
                      <td className="text-center">Total Taxable Income</td>
                      <td className="text-end">
                        {Math.round(result.taxableIncome || 0).toLocaleString()}
                      </td>
                    </tr>

                    <tr className="bg-light fw-bold">
                      <td colSpan={2}>Income Tax</td>
                    </tr>
                    <tr style={{ backgroundColor: getBgColor() }}>
                      <td className="text-sm">Normal Tax</td>
                      <td className="text-end">
                        {Math.round(result.baseTax || 0).toLocaleString()}
                      </td>
                    </tr>
                    <tr style={{ backgroundColor: getBgColor() }}>
                      <td className="text-sm">Special Tax</td>
                      <td className="text-end">
                        {Math.round(
                          (Number(result?.stcgTax) || 0) +
                            (Number(result?.ltcgTax) || 0) +
                            (Number(result?.ltcgOtherTax) || 0) +
                            (Number(result?.lotteryTax) || 0)
                        ).toLocaleString()}
                        {console.log(
                          result.stcgTax,
                          result.ltcgTax,
                          result.ltcgOtherTax,
                          result.lotteryTax
                        )}
                      </td>
                    </tr>

                    <tr className="fw-semibold">
                      <td className="text-center">Total Income Tax</td>
                      <td className="text-end">
                        {Math.round(result.baseTax || 0).toLocaleString()}
                      </td>
                    </tr>
                    <tr style={{ backgroundColor: getBgColor() }}>
                      <td className="text-center">Rebate u/s 87A</td>
                      <td className="text-end">
                        {Math.round(result.rebate || 0).toLocaleString()}
                      </td>
                    </tr>
                    <tr style={{ backgroundColor: getBgColor() }}>
                      <td className="text-center">Surcharge</td>
                      <td className="text-end">
                        {Math.round(result.surcharge || 0).toLocaleString()}
                      </td>
                    </tr>
                    <tr style={{ backgroundColor: getBgColor() }}>
                      <td className="text-center">Health & Education Cess</td>
                      <td className="text-end">
                        {Math.round(result.cess || 0).toLocaleString()}
                      </td>
                    </tr>
                    <tr className="fw-semibold">
                      <td className="text-center">Total Tax Liability</td>
                      <td className="text-end">
                        {Math.round(result.totalTax || 0).toLocaleString()}
                      </td>
                    </tr>
                  </>
                )}

                {/* Tax Paid */}
                <tr className="bg-light">
                  <th className="text-sm" colSpan={2}>
                    Details of Tax Paid
                  </th>
                </tr>

                <tr style={{ backgroundColor: getBgColor() }}>
                  <td className="text-sm">TDS (Tax Deducted at Source)</td>
                  <td>
                    <Form.Control
                      name="tds"
                      value={inputs.tds || 0}
                      onChange={handleInputChange}
                      type="number"
                      className="form-control-sm text-end"
                    />
                  </td>
                </tr>

                <tr style={{ backgroundColor: getBgColor() }}>
                  <td className="text-sm">Advance Tax Paid</td>
                  <td>
                    <Form.Control
                      name="advanceTax"
                      value={inputs.advanceTax || 0}
                      onChange={handleInputChange}
                      type="number"
                      className="form-control-sm text-end"
                    />
                  </td>
                </tr>

                <tr style={{ backgroundColor: getBgColor() }}>
                  <td className="text-sm">Self Assessment Tax Paid</td>
                  <td>
                    <Form.Control
                      name="selfAssessment"
                      value={inputs.selfAssessment || 0}
                      onChange={handleInputChange}
                      type="number"
                      className="form-control-sm text-end"
                    />
                  </td>
                </tr>

                <tr className="fw-bold">
                  <td className="text-center">Total Tax Paid</td>
                  <td>
                    <Form.Control
                      name="totalPaid"
                      value={inputs.totalPaid || 0}
                      onChange={handleInputChange}
                      type="number"
                      className="form-control-sm text-end"
                    />
                  </td>
                </tr>
                {result && (
                  <tr className="fw-bold bg-warning-subtle">
                    <td className="text-center"> Tax Payable</td>
                    <td className="text-end">
                      ₹{Math.round(result.totalTax).toLocaleString()}
                    </td>
                  </tr>
                )}
              </tbody>
            </Table>
          </Form>
        </div>
        <div className="text-center mt-5 d-flex justify-content-center gap-3 no-print">
          <Button
            variant="primary"
            onClick={handleCalculate}
            className="px-4 py-2 fw-semibold shadow-sm animated-btn"
          >
            Calculate Tax
          </Button>
          <Button
            variant="danger"
            onClick={handleReset}
            className="px-4 py-2 fw-semibold shadow-sm animated-btn"
          >
            Reset
          </Button>
          <Button
            type="button"
            variant="success"
            onClick={handlePrint}
            className="px-4 py-2 fw-semibold shadow-sm animated-btn"
          >
            Print
          </Button>
        </div>
      </Container>
      <Footer className="no-print" />
    </>
=======
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

export default function IncomeTaxCalculator() {
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

    let rebate87A = 0;
    if (formData.status === "Individual") {
      if (formData.regime === "New" && taxableIncome <= 1200000) {
        rebate87A = Math.min(normalTax, 60000);
      }

      if (formData.regime === "Old" && taxableIncome <= 500000) {
        rebate87A = Math.min(normalTax, 12500);
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
            <option>2025-26</option>
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
            </tbody>
          </table>

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
                <SummaryRow label="Normal Tax" value={taxResult.normalTax} />
                <SummaryRow label="STCG Tax" value={taxResult.stcgTax} />
                <SummaryRow label="LTCG Tax" value={taxResult.ltcgTax} />
                <SummaryRow
                  label="Rebate U/s 87A"
                  value={taxResult.rebate87A}
                />
                <SummaryRow label="Surcharge" value={taxResult.surcharge} />
                <SummaryRow label="Cess 4%" value={taxResult.cess} />
                <SummaryRow
                  label="Total Tax Liability"
                  value={taxResult.totalTax}
                />
                <SummaryRow label="Tax Paid" value={taxResult.taxPaid} />

                <tr className="bg-yellow-100 font-bold">
                  <td className="border p-2">Net Tax Payable / Refund</td>
                  <td className="border p-2 text-right">
                    ₹ {taxResult.netPayable.toLocaleString()}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

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
>>>>>>> master
  );
}
