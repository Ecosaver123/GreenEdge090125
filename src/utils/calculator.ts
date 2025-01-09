export function calculateCompoundInterest(
  monthlySavings: number,
  duration: number,
  annualInterestRate: number
) {
  const monthlyRate = annualInterestRate / 12 / 100;
  let totalAmount = 0;
  
  for (let i = 0; i < duration; i++) {
    totalAmount += monthlySavings;
    totalAmount *= (1 + monthlyRate);
  }

  const totalInvestment = monthlySavings * duration;
  const totalInterest = totalAmount - totalInvestment;

  return {
    totalInvestment: Math.round(totalInvestment),
    totalInterest: Math.round(totalInterest),
    finalAmount: Math.round(totalAmount)
  };
}