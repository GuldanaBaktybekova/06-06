import { useState } from "react";

function Example2() {
  const [items, setItems] = useState([]);
  const[item, setItem] = useState("");
  function Add() {
    setItems([
      ...items,
      {
        name: item,
      },
    ]);
    setItem("");
  }
  
  return (  
    <div className="Example2">
   
   <form onSubmit={Add}>
        <input
          name="item"
          type="text"
          value={item}
          onChange={(item) => setItem(item.target.value)}
        />
      </form>
    </div>
   );
}

export default Example2;