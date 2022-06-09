// import Input from "./components/Input";

// import Example1 from "./components/Example1";
// import Example2 from "./components/Example2";
import { useEffect, useState } from "react";
import ExchangeRates from "./components/ExchangeRates";
// import ExchangeRates from "./components/ExchangeRates";

function App() {
  const [exchangeRates, setExchangeRates] = useState([]);
  const baseCurrency = "EUR";

  const update = () => {
    fetch("https://www.floatrates.com/daily/kgs.json") //make http request
      .then((response) => response.json()) //convert string to javascript object
      .then((data) => setExchangeRates(data));
  };
  useEffect(update, [setExchangeRates]);
  const output = Object.values(exchangeRates).map((currency) => (
    <ExchangeRates
      from={baseCurrency}
      to={currency.code}
      rate={currency.inverseRate}
    />
  ));

  return (
    <div className="App">
      <button onClick={update}>+</button>
      {output}
    </div>
  );
}

export default App;

/* <Input/> */
