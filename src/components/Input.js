import { useState } from "react";

function Input() {
  const [items, setItems] = useState([]);
  const [item, setItem] = useState("");

  function Add(event) {
    event.preventDefault();
    setItems([
      ...items,
      {
        name: item,
      },
    ]);
    setItem("");
  }
  function Delete() {
    setItems(!item.name);
  }

  return (
    <>
      <form onSubmit={Add}>
        <input
          name="item"
          type="text"
          value={item}
          onChange={(item) => setItem(item.target.value)}
        />
      </form>
      <button onClick={Add}>Add</button>
      <ul>
        {items.map((item) => (
          <li>
            {item.name}
            <button onClick={Delete}>-</button>
          </li>
        ))}
      </ul>
    </>
  );
}

export default Input;

// https://daveceddia.com/usestate-hook-examples/
