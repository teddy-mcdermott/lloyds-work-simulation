export   const calculateMortgage = (price, deposit, term, rate, type) => {
  const loanAmount = price - deposit;
  const r = rate / 100 / 12;
  const n = term * 12;
  
  let monthly = 0;
  
  if (type === 'interest-only') {
    monthly = loanAmount * r;
  } else {
    if (r === 0) return { monthly: loanAmount / n, total: loanAmount, loanAmount, ltv: 0 };
    monthly = (loanAmount * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1);
  }

  return {
    loanAmount,
    monthly: parseFloat(monthly.toFixed(2)),
    total: parseFloat((monthly * n).toFixed(2)),
    ltv: parseFloat(((loanAmount / price) * 100).toFixed(2))
  };
};