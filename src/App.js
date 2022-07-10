import { useState } from "react";
import Form from "./components/Form";
import Header from "./components/Header";
import Modal from "./components/Modal";
import Results from "./components/Results";
import { investmentAmount } from "./constants";
import styles from "./styles/App.module.css";

function App() {
  const [shouldShowResults, setShouldShowResults] = useState(false);
  const [savings, setSavings] = useState(investmentAmount / 2);
  const [timeHorizon, setTimeHorizon] = useState(5);
  const [showModal, setShowModal] = useState(false);
  return (
    <div className={styles.app}>
      <Header />
      <section className={styles.calculator}>
        {shouldShowResults ? (
          <Results
            savings={savings}
            setShowModal={setShowModal}
            timeHorizon={timeHorizon}
            setShouldShowResults={setShouldShowResults}
          />
        ) : (
          <Form
            savings={savings}
            setSavings={setSavings}
            timeHorizon={timeHorizon}
            setTimeHorizon={setTimeHorizon}
            setShouldShowResults={setShouldShowResults}
          />
        )}
      </section>
      {showModal && <Modal setShowModal={setShowModal} />}
    </div>
  );
}

export default App;
