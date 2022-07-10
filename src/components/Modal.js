import React from "react";
import styles from "../styles/Modal.module.css";
import Close from "../img/close.svg";

const Modal = ({ setShowModal }) => {
  return (
    <div className={styles.modalContainer}>
      <div className={styles.modal}>
        <button
          className={styles.closeButton}
          onClick={() => setShowModal(false)}
        >
          <img src={Close} alt="close button" />
        </button>
        <h2>Key terms</h2>
        <ul>
          <li>
            <strong>Nominal value</strong>: The expected balance observed at the
            end of the time horizon.
          </li>
          <li>
            <strong>Inflation adjusted</strong>: The actual worth of the nominal
            value in today's terms, also known as real value. The higher, the
            better.
          </li>
          <li>
            <strong>Standard deviation</strong>: The percentage of the values
            calculated above in which the actual outcome is likely to deviate. A
            higher value means lower certainty of the calculated values.
          </li>
        </ul>
        <h2>Key takeaway</h2>
        <p>
          Although keeping cash in the bank account seems like a risk-free way
          of growing your wealth, any growth in your balance from interest is
          actually eroded by inflation and tax. Even when the inflation rate is
          lower than the interest rate (say, 2.5% and 3% respectively), with a
          marginal tax rate of 30%, you are effectively earning 2.1% interest.
          This would be a loss of the real value of your savings.
        </p>
        <p>
          To compensate for the additional risk of investing in stocks, the
          expected returns are higher than interest rates. This can help grow
          the real value of your wealth. Diversifying your stock holdings in the
          form of purchasing exchange traded funds (ETFs) and increasing the
          time horizon of your investments help reduce risk and increase chances
          of higher returns in the long term.
        </p>
      </div>
    </div>
  );
};

export default Modal;
