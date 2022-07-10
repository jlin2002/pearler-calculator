import React from "react";
import styles from "../styles/Form.module.css";
import { investmentAmount } from "../constants";

const leftLabelPosition = (savings) => {
  return (100 * savings) / (2 * investmentAmount);
};

const rightLabelPosition = (savings) => {
  return 100 - (100 * (investmentAmount - savings)) / (2 * investmentAmount);
};

const sliderColor = (val, minVal, maxVal, unfilledColor) => {
  const relativeVal = val - minVal;
  const relativeMax = maxVal - minVal;
  const valPercentage = 100 * (relativeVal / relativeMax);
  return (
    "linear-gradient(to right, #04b5b7 0%, #04b5b7 " +
    valPercentage +
    "%, " +
    unfilledColor +
    " " +
    valPercentage +
    "%, " +
    unfilledColor +
    " 100%)"
  );
};

const Form = ({
  savings,
  setSavings,
  timeHorizon,
  setTimeHorizon,
  setShouldShowResults,
}) => {
  const handleChange = (e) => {
    if (e.target.name === "allocation") {
      setSavings(e.target.value);
    } else {
      setTimeHorizon(e.target.value);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setShouldShowResults(true);
  };

  return (
    <form className={styles.sliderForm} onSubmit={handleSubmit}>
      <div className={styles.formControl}>
        <label className={styles.formLabel} htmlFor="allocation">
          <strong>Allocation</strong>
        </label>
        <div className={styles.sliderLabels}>
          <div
            style={{ left: `${leftLabelPosition(savings, investmentAmount)}%` }}
            className={styles.sliderLabel}
          >
            Savings Account <br /> (${savings})
          </div>
          <div
            style={{
              left: `${rightLabelPosition(savings, investmentAmount)}%`,
            }}
            className={styles.sliderLabel}
          >
            Diversified Fund <br /> (${investmentAmount - savings})
          </div>
        </div>
        <input
          id="allocation"
          name="allocation"
          className={styles.slider}
          type="range"
          value={savings}
          onChange={handleChange}
          style={{
            background: sliderColor(savings, 0, investmentAmount, "#D98B94"),
          }}
          min="0"
          max={investmentAmount}
          step={investmentAmount / 100}
        />
      </div>
      <div className={styles.formControl}>
        <label className={styles.formLabel} htmlFor="time">
          <strong>Time Horizon</strong> &middot;{" "}
          <span className={styles.horizonLabel}>{timeHorizon} years</span>
        </label>
        <input
          id="time"
          name="time"
          className={styles.slider}
          type="range"
          value={timeHorizon}
          onChange={handleChange}
          style={{ background: sliderColor(timeHorizon, 1, 10, "gray") }}
          step="1"
          min="1"
          max="10"
        />
      </div>
      <input
        className={styles.submitButton}
        type="submit"
        value="View Results"
      />
    </form>
  );
};

export default Form;
