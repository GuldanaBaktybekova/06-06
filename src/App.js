import { useState } from "react";
import ToDo from "./components/ToDo";
import ToDoForm from "./components/ToDoForm";

function App() {
  const [todos, setTodos] = useState([]);
  
  

  const addTask = (userInput) => {
    if (userInput) {
      const newItem = {
        id: Math.random().toString(36).substr(2, 9),
        task: userInput,
        complete: false,
      };
      setTodos([...todos, newItem]);
    }
  };

  const removeTask = (id) => {
    setTodos([...todos.filter((todo) => todo.id !== id)]);
  };

  const handleToggle = (id) => {
    setTodos([
      ...todos.map((todo) =>
        todo.id === id ? { ...todo, complete: !todo.complete } : { ...todo }
      ),
    ]);
  };

  return (
    <div className="App">
      <header>
        <h1> {todos.length}</h1>
      </header>
      <ToDoForm addTask={addTask} />
      {todos.map((todo) => {
        return (
          <ToDo
            todo={todo}
            key={todo.id}
            toggleTask={handleToggle}
            removeTask={removeTask}
          />
        );
      })}
    </div>
  );
}

export default App;

// import Input from "./components/Input";

// import Example1 from "./components/Example1";
// import Example2 from "./components/Example2";
// import { useEffect, useState } from "react";
// import ExchangeRates from "./components/ExchangeRates";

// function App() {
//   const [exchangeRates, setExchangeRates] = useState([]);
//   const[baseCurrency, setBaseCurrency] = useState('KGS');

//   const update = () => {
//     fetch('https://www.floatrates.com/json-feeds.html') //make http request
//       .then((response) => response.json()) //convert string to javascript object
//       .then((data) => setExchangeRates(data));
//   };
//   useEffect(update, [setExchangeRates]);
//   const output =  Object.values(exchangeRates).map((currency) => (

//     <ExchangeRates
//       from={baseCurrency}
//       to={currency.code}
//       rate={currency.inverseRate}
//     />
//   ));
//   const baseCurrencyChange = (event) => setBaseCurrency(event.target.value);

//   return (
//     <div className="App">

//       <button onClick={update}>Update</button>
//       <input type="text" value={baseCurrency} onChange={baseCurrencyChange}/>
//       {output}
//     </div>
//   );
// }

// export default App;
