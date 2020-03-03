import React, { useState, useEffect, useRef } from 'react';
import icons from "./exchange.svg"
import './App.css';

function App() {

  const [currencies, setCurrencies] = useState({});
  const currencyOneRef = useRef(null);
  const currencyTwoRef = useRef(null);
  const [valueOne, setValueOne] = useState(1);
  const [valueTwo, setValueTwo] = useState(0);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    async function fetchData() {
      const res = await fetch('https://api.exchangeratesapi.io/latest?base=AUD')
      const resData = await res.json();
      console.log(resData);
      setCurrencies(resData.rates);
    }
    fetchData();
    
  },[]);

  useEffect(() => {
    calculate(valueOne, 1);
    setLoaded(true);
  },[currencies]);

  const loadCurrencies = (currencyOne) => {
    return(Object.keys(currencies).map((key, index) => {
      if(key === "AUD" && currencyOne) {
        return(<option selected>{key}</option>);
      } else {
        return(<option>{key}</option>);
      }
    }))
  }
  
  const calculate = (e, type) => {
    const getOwnRate = (ref) => {
      for(let i in currencies) {
        if(ref === i) {
          return(currencies[i])
        }
      }
    }
    if(type === 1) {
      const value = (e.target ? e.target.value : valueOne);
      setValueOne(value);
      let rateOne = getOwnRate(currencyOneRef.current.value);
      for(let i in currencies) {
        if(currencyTwoRef.current.value === i) {
        const newValue = value / rateOne * currencies[i];
        const roundedValue = Math.round(newValue * 100)/ 100;
        setValueTwo(roundedValue);
        break;
       }
      }
    } else if(type === 2) {
      const value = e.target ? e.target.value : valueTwo;
      setValueTwo(value);
      let rateOne = getOwnRate(currencyOneRef.current.value);
      for(let i in currencies) {
        if(currencyTwoRef.current.value === i) {
          const newValue = value / currencies[i] * rateOne;
          const roundedValue = Math.round(newValue * 100)/ 100;
          setValueOne(roundedValue);
          break;
        }
       }
    } else if(type === "Rate") {
      let rateOne = getOwnRate(currencyOneRef.current.value);
      for(let i in currencies) {
        if(currencyTwoRef.current.value === i) {
        const newValue = 1 / rateOne * currencies[i];
        const roundedValue = Math.round(newValue * 100)/ 100;
        return(roundedValue)
       }
      }
    }
  }
  const changeCurrency = (type) => {
    calculate(0, type);
  }
  const swapCurrency = () => {
    let temp = currencyTwoRef.current.value;
    currencyTwoRef.current.value = currencyOneRef.current.value;
    currencyOneRef.current.value = temp;
    calculate(0, 1);
  }
  return (
    <div className="app-container">
      <svg>
        <use xlinkHref={`${icons}#icon-exchange`}/>
      </svg>
      <h1>Exchange Rate Calculator</h1>
      <div className="inner-app-container">
        <span className="currency-container">
          <select ref={currencyOneRef} className="currencies" onChange={(e) => {changeCurrency(1)}}>
            {loadCurrencies(true)}
          </select>
          <input className="values" type="number" value={valueOne} onChange={(e) => {calculate(e, 1)}}></input>
        </span>
        <span className="middle-container">
          <button className="button" onClick={swapCurrency}>
            Swap
          </button>
          <p className="exchange-rate">
            {loaded && `1 ${currencyOneRef.current.value} = ${calculate(0, "Rate")} ${currencyTwoRef.current.value}`}
          </p>
        </span>
        <span className="currency-container">
          <select ref={currencyTwoRef} className="currencies" onChange={(e) => {changeCurrency(1)}}>
            {loadCurrencies(false)}
          </select>
          <input className="values" type="number" value={valueTwo} onChange={(e) => {calculate(e, 2)}}></input>
        </span>
      </div>
    </div>
  );
}

export default App;
