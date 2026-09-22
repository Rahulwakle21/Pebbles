"use client";

import { useMemo, useState } from "react";
import Container from "./ui/Container";
import SectionHeading from "./ui/SectionHeading";
import Reveal from "./ui/Reveal";
import Button from "./ui/Button";
import { ArrowRightIcon } from "./ui/Icons";
import { currentOffers } from "@/lib/park-pebbles-data";

function formatInr(value: number): string {
  return value.toLocaleString("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 0,
  });
}

function computeEmi(principal: number, annualRate: number, years: number) {
  const months = years * 12;
  const monthlyRate = annualRate / 100 / 12;
  if (monthlyRate === 0) {
    const emi = principal / months;
    return { emi, totalPayment: principal, totalInterest: 0 };
  }
  const factor = Math.pow(1 + monthlyRate, months);
  const emi = (principal * monthlyRate * factor) / (factor - 1);
  const totalPayment = emi * months;
  return { emi, totalPayment, totalInterest: totalPayment - principal };
}

export default function PaymentPlans() {
  const [loanAmount, setLoanAmount] = useState(75_00_000);
  const [interestRate, setInterestRate] = useState(8.5);
  const [tenureYears, setTenureYears] = useState(20);

  const { emi, totalInterest, totalPayment } = useMemo(
    () => computeEmi(loanAmount, interestRate, tenureYears),
    [loanAmount, interestRate, tenureYears]
  );

  return (
    <section
      id="payment-plans"
      className="relative border-t border-zinc-200 px-6 py-20 sm:py-28"
    >
      <Container size="wide">
        <SectionHeading
          eyebrow="Payment Plans & Offers"
          title="Flexible, Construction-Linked Payment Plans"
          description="Park Pebbles offers flexible payment plans designed to ease your cash flow through possession — with dedicated support for home loan processing and documentation."
        />

        <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
          <Reveal>
            <h3 className="mb-4 text-lg font-semibold text-zinc-900">
              Current offers
            </h3>
            <p className="mb-4 text-xs text-amber-800">
              Verify validity and exact terms with the developer before
              publishing or quoting these offers to buyers.
            </p>
            <ul className="space-y-3">
              {currentOffers.map((offer) => (
                <li
                  key={offer}
                  className="rounded-xl border border-zinc-200 bg-white px-4 py-3 text-sm leading-relaxed text-zinc-700 shadow-sm"
                >
                  {offer}
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={80}>
            <div className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm sm:p-8">
              <h3 className="mb-6 text-lg font-semibold text-zinc-900">
                Home Loan EMI Calculator
              </h3>
              <div className="space-y-6">
                <div>
                  <label
                    htmlFor="emi-loan"
                    className="mb-2 flex justify-between text-sm font-medium text-zinc-700"
                  >
                    <span>Loan amount</span>
                    <span>{formatInr(loanAmount)}</span>
                  </label>
                  <input
                    id="emi-loan"
                    type="range"
                    min={3000000}
                    max={15000000}
                    step={100000}
                    value={loanAmount}
                    onChange={(e) => setLoanAmount(Number(e.target.value))}
                    className="w-full accent-violet-600"
                  />
                </div>
                <div>
                  <label
                    htmlFor="emi-rate"
                    className="mb-2 flex justify-between text-sm font-medium text-zinc-700"
                  >
                    <span>Interest rate (p.a.)</span>
                    <span>{interestRate.toFixed(1)}%</span>
                  </label>
                  <input
                    id="emi-rate"
                    type="range"
                    min={7}
                    max={12}
                    step={0.1}
                    value={interestRate}
                    onChange={(e) => setInterestRate(Number(e.target.value))}
                    className="w-full accent-violet-600"
                  />
                </div>
                <div>
                  <label
                    htmlFor="emi-tenure"
                    className="mb-2 flex justify-between text-sm font-medium text-zinc-700"
                  >
                    <span>Tenure</span>
                    <span>{tenureYears} years</span>
                  </label>
                  <input
                    id="emi-tenure"
                    type="range"
                    min={5}
                    max={30}
                    step={1}
                    value={tenureYears}
                    onChange={(e) => setTenureYears(Number(e.target.value))}
                    className="w-full accent-violet-600"
                  />
                </div>
              </div>

              <dl className="mt-8 grid grid-cols-1 gap-4 border-t border-zinc-200 pt-6 sm:grid-cols-3">
                <div>
                  <dt className="text-xs uppercase tracking-wider text-zinc-500">
                    Monthly EMI
                  </dt>
                  <dd className="text-lg font-bold text-violet-700">
                    {formatInr(Math.round(emi))}
                  </dd>
                </div>
                <div>
                  <dt className="text-xs uppercase tracking-wider text-zinc-500">
                    Total interest
                  </dt>
                  <dd className="text-lg font-semibold text-zinc-900">
                    {formatInr(Math.round(totalInterest))}
                  </dd>
                </div>
                <div>
                  <dt className="text-xs uppercase tracking-wider text-zinc-500">
                    Total payment
                  </dt>
                  <dd className="text-lg font-semibold text-zinc-900">
                    {formatInr(Math.round(totalPayment))}
                  </dd>
                </div>
              </dl>

              <p className="mt-4 text-xs leading-relaxed text-zinc-500">
                This is an indicative estimate. Final EMI can vary based on
                lender policy, processing charges, insurance, and sanction
                terms.
              </p>
              <Button href="#contact" className="mt-6 w-full sm:w-auto">
                Talk to a Loan Expert
                <ArrowRightIcon className="h-4 w-4" />
              </Button>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
