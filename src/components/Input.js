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
 
  const deleteItem = (index) => () =>
    setItems((items) => items.filter((_, i) => i !== index));
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
     
        {items.map((it, index) => {
        return (
          <div>
            {it.name} <button onClick={deleteItem(index)}>delete</button>
          </div>
        );
      })}
        
 
      </ul>
    </>
  );
}

export default Input;

// https://daveceddia.com/usestate-hook-examples/
