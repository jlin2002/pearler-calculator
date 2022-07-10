import React from "react";
import Calculator from "../img/calculator-solid.svg";
import DownChevron from "../img/chevron-down-solid.svg";
import styles from "../styles/Header.module.css";
import { investmentAmountStr } from "../constants";

const Header = () => {
  const handleScroll = (e) => {
    e.preventDefault();
    window.scrollBy(0, document.documentElement.clientHeight);
  };
  return (
    <header className={styles.header}>
      <img className={styles.logo} src={Calculator} alt="calculator" />
      <h2 className={styles.prompt}>
        How would I invest ${investmentAmountStr}?
      </h2>
      <section className={styles.infoText}>
        <p>
          Keeping cash in the bank seems like a safe and easy way to accumulate
          wealth through interest. In contrast, the volatility of stock market
          returns often deters people from investing.
        </p>
        <p>
          What are the benefits of stock investing? Use the calculator below to
          find out.
        </p>
      </section>
      <button className={styles.downArrowButton} onClick={handleScroll}>
        <img className={styles.downArrow} src={DownChevron} alt="scroll down" />
      </button>
    </header>
  );
};

export default Header;
