import React, { useEffect, useState } from "react";
import InputRow from "./InputRow";
import Footer from "./Footer";
import "./App.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { icon } from "@fortawesome/fontawesome-svg-core/import.macro";

// ExchangeRate-API
const base_url =
  "https://v6.exchangerate-api.com/v6/8d57e7330b0febd7edb03b96/latest/all";

function App() {
  // Initial states
  const [currencyOptions, setCurrencyOptions] = useState(["USD", "SGD"]);
  const [fromCurrency, setFromCurrency] = useState("USD");
  const [toCurrency, setToCurrency] = useState("SGD");
  const [topValue, setTopValue] = useState(1);
  const [bottomValue, setBottomValue] = useState("");
  const [inputInTop, setInputInTop] = useState(true);

  useEffect(() => {
    fetch(base_url)
      .then((res) => res.json())
      .then((data) => {
        // Get conversion rates from API
        const conversionRates = data.conversion_rates;
        setCurrencyOptions([...Object.keys(conversionRates)]);

        // Calculate Conversion Rate for specific scenario
        const rate =
          conversionRates[toCurrency] / conversionRates[fromCurrency];

        // Check which box has user input to determine conversion direction
        if (inputInTop) {
          setBottomValue((topValue * rate).toFixed(2));
        } else {
          setTopValue((bottomValue / rate).toFixed(2));
        }
      });
  }, [topValue, bottomValue, fromCurrency, toCurrency, inputInTop]);

  // Handle user input in either input box
  function handleTopAmountChange(e) {
    setTopValue(e.target.value);
    setInputInTop(true);
  }

  function handleBottomAmountChange(e) {
    setBottomValue(e.target.value);
    setInputInTop(false);
  }

  return (
    <>
      <style>
        @import
        url('https://fonts.googleapis.com/css2?family=Open+Sans&display=swap');
      </style>{" "}
      <div className="header">
        <h1>Metta's Currency Converter</h1>
      </div>
      <div className="container">
        <div className="box">
          <span></span>
          <div className="content">
            <h1>Select Currencies Below</h1>
            <div className="conversionInputs">
              <InputRow
                currencyOptions={currencyOptions}
                selectedCurrency={fromCurrency}
                onChangeCurrency={(e) => setFromCurrency(e.target.value)}
                amount={topValue}
                onChangeAmount={handleTopAmountChange}
              />
              <div className="equals">
                <FontAwesomeIcon
                  icon={icon({
                    name: "money-bill-transfer",
                    style: "solid",
                  })}
                  beatFade
                />
              </div>
              <InputRow
                currencyOptions={currencyOptions}
                selectedCurrency={toCurrency}
                onChangeCurrency={(e) => setToCurrency(e.target.value)}
                amount={bottomValue}
                onChangeAmount={handleBottomAmountChange}
              />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default App;
