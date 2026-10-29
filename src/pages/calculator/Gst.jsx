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
      {/* =========================
    HERO / BANNER SECTION
========================== */}
<section
  className="relative flex min-h-[300px] items-center overflow-hidden bg-cover bg-center py-16 sm:min-h-[340px] sm:py-20 md:min-h-[380px] md:py-24"
  style={{ backgroundImage: `url(${bgImage})` }}
>
  {/* Dark Navy Background Overlay */}
  <div className="absolute inset-0 z-10 bg-[#0B2A4A]/75"></div>

  {/* Right Side Clip-Path Overlay */}
  <div
    className="absolute right-0 top-0 z-20 hidden h-full w-2/5 bg-[#0A1F3A]/50 md:block"
    style={{ clipPath: "polygon(0 0, 100% 0, 100% 100%, 20% 100%)" }}
  ></div>

  

  {/* Banner Content */}
  <div className="relative z-30 mx-auto w-full max-w-[1300px] px-4 sm:px-6 lg:px-8">
    <div className="flex flex-col items-center md:items-start">
      {/* Title */}
      <h1 className="text-center font-primary text-4xl font-bold leading-tight text-white sm:text-4xl md:text-5xl lg:text-6xl">
        GST Calculator
      </h1>

      {/* Breadcrumb */}
      <nav
        className="mt-3 flex items-center justify-center text-sm font-medium text-white sm:text-base md:justify-start"
        aria-label="Breadcrumb"
      >
        <ol className="inline-flex items-center space-x-2">
          <li>
            <a
              href="/"
              className="text-white transition-all hover:underline"
            >
              Home
            </a>
          </li>
          <li className="flex items-center text-white">
            <span className="mx-2 text-white/80">&gt;</span>
            <span className="font-semibold text-[#F5B800]">
              GST Calculator
            </span>
          </li>
        </ol>
      </nav>
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
