import React from "react";
import styles from "../styles/Results.module.css";
import { investmentAmount } from "../constants";
import { calculateResults } from "../calculator";
import { numToString } from "../util";

const Results = ({
  savings,
  setShowModal,
  timeHorizon,
  setShouldShowResults,
}) => {
  const {
    nominal,
    adjusted,
    potentialNominal,
    potentialAdjusted,
    standardDeviation,
    potentialStandardDeviation,
  } = calculateResults(savings, investmentAmount - savings, timeHorizon);
  return (
    <>
      <p>
        You have chosen to invest <strong>${numToString(savings)}</strong> in a
        savings account and{" "}
        <strong>${numToString(investmentAmount - savings)}</strong> in a
        diversified index fund over <strong>{timeHorizon} years</strong>.
      </p>
      <div className={styles.results}>
        <div className={styles.resultText}>Your results</div>
        <div className={styles.resultNumberNominal}>
          <div className={styles.resultNumber}>${numToString(nominal)}</div>
          nominal value
        </div>
        <div className={styles.resultNumberActual}>
          <div className={styles.resultNumber}>${numToString(adjusted)}</div>
          inflation adjusted
        </div>
        <div className={styles.standardDeviation}>
          <div className={styles.resultNumber}>
            {standardDeviation.toFixed(2)}%
          </div>
          standard deviation
        </div>
        <div className={styles.resultText}>Potential</div>
        <div className={styles.resultNumberNominal}>
          <div className={styles.resultNumber}>
            ${numToString(potentialNominal)}
          </div>
          nominal value
        </div>
        <div className={styles.resultNumberActual}>
          <div className={styles.resultNumber}>
            ${numToString(potentialAdjusted)}
          </div>
          inflation adjusted
        </div>
        <div className={styles.standardDeviation}>
          <div className={styles.resultNumber}>
            {potentialStandardDeviation.toFixed(2)}%
          </div>
          standard deviation
        </div>
      </div>
      <div className={styles.util}>
        <button
          onClick={() => setShouldShowResults(false)}
          className={styles.utilButton}
        >
          Try again
        </button>
        <button
          onClick={() => setShowModal(true)}
          className={styles.utilButton}
        >
          Learn more
        </button>
      </div>
    </>
  );
};

export default Results;
