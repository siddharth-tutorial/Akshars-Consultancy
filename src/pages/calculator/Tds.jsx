
import { useMemo, useState } from "react";
import Header from "../../component/Header";
import Footer from "../../component/Footer";

/**
 * TDS Calculator - Income-tax Act 2025 (effective 1 Apr 2026)
 * with old 1961 Act sections.
 *
 * Payment codes marked `code: null` are not verified here.
 * Confirm on the official Section 393 table / TRACES utility
 * before filing.
 *
 * rate/noPan are in %.
 * single/aggregate are thresholds in INR (null = none).
 */

const PAYMENTS = [
  {
    id: "c-ind",
    name: "Contractor - Individual/HUF",
    old: "194C",
    sec: "393(1) Sl.6(i)",
    code: "1023",
    rate: 1,
    single: 30000,
    aggregate: 100000,
  },
  {
    id: "c-oth",
    name: "Contractor - Others (Company/Firm)",
    old: "194C",
    sec: "393(1) Sl.6(i)",
    code: "1024",
    rate: 2,
    single: 30000,
    aggregate: 100000,
  },
  {
    id: "j-tech",
    name: "Technical services / Call centre / Film royalty",
    old: "194J(a)",
    sec: "393(1) Sl.6(iii)",
    code: "1026",
    rate: 2,
    single: null,
    aggregate: 50000,
  },
  {
    id: "j-prof",
    name: "Professional fees / Royalty / Non-compete",
    old: "194J(b)",
    sec: "393(1) Sl.6(iii)",
    code: "1027",
    rate: 10,
    single: null,
    aggregate: 50000,
  },
  {
    id: "j-dir",
    name: "Director's fees / commission",
    old: "194J",
    sec: "393(1) Sl.6(iii)",
    code: "1028",
    rate: 10,
    single: null,
    aggregate: null,
  },
  {
    id: "comm",
    name: "Commission / Brokerage",
    old: "194H",
    sec: "393(1) Sl.1(ii)",
    code: "1006",
    rate: 2,
    single: null,
    aggregate: 20000,
  },
  {
    id: "div",
    name: "Dividend (domestic company)",
    old: "194",
    sec: "393(1) Sl.7",
    code: "1029",
    rate: 10,
    single: null,
    aggregate: 10000,
  },
  {
    id: "goods",
    name: "Purchase of goods (above Rs 50 lakh)",
    old: "194Q",
    sec: "393(1)",
    code: "1031",
    rate: 0.1,
    single: null,
    aggregate: 5000000,
    noPan: 5,
  },
  {
    id: "rent-b",
    name: "Rent - Land / Building / Furniture",
    old: "194-I(b)",
    sec: "393(1)",
    code: null,
    rate: 10,
    single: null,
    aggregate: 240000,
  },
  {
    id: "rent-p",
    name: "Rent - Plant / Machinery",
    old: "194-I(a)",
    sec: "393(1)",
    code: null,
    rate: 2,
    single: null,
    aggregate: 240000,
  },
  {
    id: "int",
    name: "Interest other than securities (non-bank)",
    old: "194A",
    sec: "393(1)",
    code: null,
    rate: 10,
    single: null,
    aggregate: 10000,
  },
  {
    id: "ecom",
    name: "E-commerce operator to participant",
    old: "194O",
    sec: "393(1)",
    code: null,
    rate: 0.1,
    single: null,
    aggregate: null,
    noPan: 5,
  },
  {
    id: "vda",
    name: "Virtual digital assets",
    old: "194S",
    sec: "393(1)",
    code: null,
    rate: 1,
    single: null,
    aggregate: 10000,
  },
  {
    id: "194m",
    name: "Contract/Professional by Individual/HUF (non-audit)",
    old: "194M",
    sec: "393(1) Sl.6(ii)",
    code: null,
    rate: 2,
    single: null,
    aggregate: 5000000,
  },
];

const inr = (n) =>
  "Rs " +
  Number(n || 0).toLocaleString("en-IN", {
    maximumFractionDigits: 2,
  });

export default function TdsCalculator() {
  const [id, setId] = useState(PAYMENTS[0].id);
  const [amount, setAmount] = useState("");
  const [prior, setPrior] = useState("");
  const [hasPan, setHasPan] = useState(true);

  const p = PAYMENTS.find((x) => x.id === id);

  const r = useMemo(() => {
    const amt = parseFloat(amount) || 0;
    const prev = parseFloat(prior) || 0;
    const total = prev + amt;

    const hit =
      (p.single != null && amt > p.single) ||
      (p.aggregate != null && total > p.aggregate) ||
      (p.single == null && p.aggregate == null);

    const rate = hasPan
      ? p.rate
      : p.noPan ?? Math.max(p.rate * 2, 20);

    const tds = hit && amt > 0 ? (amt * rate) / 100 : 0;

    return {
      amt,
      hit,
      rate,
      tds,
      net: amt - tds,
    };
  }, [amount, prior, hasPan, p]);

  const field =
    "w-full rounded-lg border border-slate-300 bg-white px-3 py-3 text-sm text-slate-800 shadow-sm transition-all duration-200 placeholder:text-slate-400 focus:border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-200 sm:text-base";

  return (
    <>
      {/* =========================
          HEADER
      ========================== */}
      <Header />

      {/* =========================
          MAIN TDS SECTION
      ========================== */}
      <section className="min-h-screen overflow-x-hidden bg-slate-100 py-8 sm:py-10 md:py-14">
        
        {/* 1300px Main Container */}
        <div className="mx-auto w-full max-w-[1300px] px-4 sm:px-6 lg:px-8">

          {/* Calculator Wrapper */}
          <div className="mx-auto w-full max-w-4xl rounded-2xl bg-white p-4 shadow-lg sm:p-6 md:p-8">

            {/* =========================
                HEADER
            ========================== */}
            <div className="mb-6 border-b border-slate-200 pb-5 sm:mb-7">
              <h1 className="font-primary text-2xl font-bold leading-tight text-slate-900 sm:text-3xl md:text-4xl">
                TDS Calculator
              </h1>

              <p className="mt-2 text-xs leading-5 text-slate-500 sm:text-sm sm:leading-6">
                Income-tax Act 2025 (from 1 Apr 2026) - with old section
                numbers
              </p>
            </div>

            {/* =========================
                NATURE OF PAYMENT
            ========================== */}
            <div className="mb-5">
              <label className="mb-2 block text-sm font-medium text-slate-700">
                Nature of payment
              </label>

              <select
                className={field}
                value={id}
                onChange={(e) => setId(e.target.value)}
              >
                {PAYMENTS.map((x) => (
                  <option key={x.id} value={x.id}>
                    {x.old} - {x.name}
                  </option>
                ))}
              </select>
            </div>

            {/* =========================
                AMOUNT INPUTS
            ========================== */}
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">

              {/* Payment Amount */}
              <div>
                <label className="mb-2 block text-sm font-medium text-slate-700">
                  Payment amount (Rs)
                </label>

                <input
                  type="number"
                  inputMode="decimal"
                  min="0"
                  className={field}
                  placeholder="e.g. 50000"
                  value={amount}
                  onChange={(e) => setAmount(e.target.value)}
                />
              </div>

              {/* Earlier Payments */}
              <div>
                <label className="mb-2 block text-sm font-medium text-slate-700">
                  Earlier payments this year (Rs)
                </label>

                <input
                  type="number"
                  inputMode="decimal"
                  min="0"
                  className={field}
                  placeholder="0"
                  value={prior}
                  onChange={(e) => setPrior(e.target.value)}
                />
              </div>
            </div>

            {/* =========================
                PAN CHECKBOX
            ========================== */}
            <label className="mt-5 flex cursor-pointer items-center justify-between gap-4 rounded-lg bg-slate-50 px-3 py-3.5 sm:px-4">
              <span className="text-sm font-medium leading-5 text-slate-700">
                Deductee has valid PAN
              </span>

              <input
                type="checkbox"
                className="h-5 w-5 shrink-0 accent-indigo-600"
                checked={hasPan}
                onChange={(e) => setHasPan(e.target.checked)}
              />
            </label>

            {/* =========================
                SECTION DETAILS
            ========================== */}
            <div className="mt-6">
              <h2 className="mb-3 font-primary text-base font-semibold text-slate-800 sm:text-lg">
                TDS Details
              </h2>

              <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">

                <Info
                  label="Old section (1961)"
                  value={p.old}
                />

                <Info
                  label="New section (2025)"
                  value={p.sec}
                />

                <Info
                  label="Payment code"
                  value={p.code ?? "Verify on official table"}
                />

                <Info
                  label="Rate applied"
                  value={`${r.rate}%`}
                />

                <Info
                  label="Single limit"
                  value={p.single ? inr(p.single) : "-"}
                />

                <Info
                  label="Annual limit"
                  value={p.aggregate ? inr(p.aggregate) : "None"}
                />
              </div>
            </div>

            {/* =========================
                RESULT
            ========================== */}
            <div className="mt-6 rounded-xl bg-indigo-600 p-4 text-white sm:p-5">

              <div className="text-sm opacity-80">
                TDS to deduct
              </div>

              <div className="mt-1 break-words text-2xl font-bold sm:text-3xl md:text-4xl">
                {inr(r.tds)}
              </div>

              <div className="mt-4 flex flex-col gap-1 border-t border-white/20 pt-3 text-sm sm:flex-row sm:items-center sm:justify-between">
                <span className="opacity-90">
                  Net payable
                </span>

                <span className="break-words text-base font-semibold sm:text-lg">
                  {inr(r.net)}
                </span>
              </div>

              {/* Below Threshold */}
              {r.amt > 0 && !r.hit && (
                <div className="mt-3 rounded-lg bg-white/20 px-3 py-2 text-xs leading-5">
                  Below threshold - no TDS applicable on this payment.
                </div>
              )}

              {/* No PAN */}
              {!hasPan && (
                <div className="mt-3 rounded-lg bg-white/20 px-3 py-2 text-xs leading-5">
                  No PAN: higher rate applied (Sec 397(2), old 206AA).
                </div>
              )}
            </div>

            {/* =========================
                DISCLAIMER
            ========================== */}
            <p className="mt-5 text-xs leading-5 text-slate-400 sm:leading-6">
              Indicative only. Salary TDS is now Sec 392 (old 192), TCS is
              Sec 394 (old 206C). Rates, thresholds and codes can change -
              verify with the official Section 393 table / CBDT notifications.
            </p>

          </div>
        </div>
      </section>

      {/* =========================
          FOOTER
      ========================== */}
      <Footer />
    </>
  );
}

/* =========================
    INFO COMPONENT
========================= */
function Info({ label, value }) {
  return (
    <div className="min-w-0 rounded-lg border border-slate-200 bg-white p-3 transition-all duration-200 hover:border-indigo-200 hover:shadow-sm sm:p-4">

      <div className="text-xs leading-5 text-slate-500 sm:text-sm">
        {label}
      </div>

      <div className="mt-1 break-words text-sm font-semibold leading-5 text-slate-800 sm:text-base">
        {value}
      </div>

    </div>
  );
}