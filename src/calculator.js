import { investmentAmount } from "./constants";

// constants
const mtr = 0.3;
const inflationRate = 0.025;

// taxable payouts (e.g. interest, dividends)
const interestPayout = 0.03;
const dividendPayout = 0.03;

// capital growth / loss rates
const interestRate = 0;
const etfRate = 0.09;

// standard deviation table
const standardDeviations = [
  25.0, 20.0, 18.5, 16.95, 15.4, 15.03, 14.67, 14.3, 13.94, 13.57,
];

const calculateInflationAdjusted = (value, timeHorizon) => {
  return value / (1 + inflationRate) ** timeHorizon;
};

const calculateCompounding = (value, rate, timeHorizon, payoutYield) => {
  for (let i = 0; i < timeHorizon; i++) {
    value = value * (1 + rate);
    let payoutAfterTax = payoutYield * value * (1 - mtr);
    value += payoutAfterTax;
  }
  return value;
};

export const calculateResults = (bankAmount, stocksAmount, timeHorizon) => {
  const bankAmountNominal = calculateCompounding(
    bankAmount,
    interestRate,
    timeHorizon,
    interestPayout
  );
  const stocksAmountNominal = calculateCompounding(
    stocksAmount,
    etfRate,
    timeHorizon,
    dividendPayout
  );
  const nominal = bankAmountNominal + stocksAmountNominal;
  const potentialNominal = calculateCompounding(
    investmentAmount,
    etfRate,
    timeHorizon,
    dividendPayout
  );
  return {
    nominal,
    adjusted: calculateInflationAdjusted(nominal, timeHorizon),
    standardDeviation:
      (stocksAmount / investmentAmount) * standardDeviations[timeHorizon - 1],
    potentialNominal: potentialNominal,
    potentialAdjusted: calculateInflationAdjusted(
      potentialNominal,
      timeHorizon
    ),
    potentialStandardDeviation: standardDeviations[timeHorizon - 1],
  };
};
