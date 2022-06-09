// import { getExchangeRates } from "../data";
import classes from "./ExchangeRates.module.css";

function ExchangeRates({ from, to, rate }) {
  return (
    <div className={classes.ExchangeRates}>
      <h4>
        {from} / {to}
      </h4>
      <h2>{rate.toFixed(2)}</h2>
    
      
    </div>
  );
}

export default ExchangeRates;
