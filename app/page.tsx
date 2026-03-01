"use client";
import { useState } from "react";

export default function Home() {
  const [income, setIncome] = useState("");
  const [loanAmount, setLoanAmount] = useState("");
  const [creditScore, setCreditScore] = useState("");
  const [result, setResult] = useState("");

  const handleSubmit = async () => {
    const response = await fetch("/api/predict", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        income: Number(income),
        loanAmount: Number(loanAmount),
        creditScore: Number(creditScore),
      }),
    });

    const data = await response.json();
    setResult(data.status);
  };

  return (
    <div style={{ padding: "40px", textAlign: "center" }}>
      <h1>Loan Approval Predictor</h1>

      <input
        placeholder="Annual Income"
        value={income}
        onChange={(e) => setIncome(e.target.value)}
      /><br /><br />

      <input
        placeholder="Loan Amount"
        value={loanAmount}
        onChange={(e) => setLoanAmount(e.target.value)}
      /><br /><br />

      <input
        placeholder="Credit Score"
        value={creditScore}
        onChange={(e) => setCreditScore(e.target.value)}
      /><br /><br />

      <button onClick={handleSubmit}>Predict</button>

      {result && <h2>Result: {result}</h2>}
    </div>
  );
}