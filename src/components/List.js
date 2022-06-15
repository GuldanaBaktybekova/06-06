import { useEffect, useState } from "react";
import axios from "axios";

function List() {
  const [list, setList] = useState("");
  useEffect(function () {
    axios
      .get("https://crud1-9a38a-default-rtdb.firebaseio.com/list.json")
      .then(({ data }) => {
        const newList = Object.keys(data).map((id) => {
          return {
            id: id,
            ...data[id]
          };
        });
        setList(newList);
      });
   
  }, []);

  let output = "Loading...";
  if (list !== null) {
    output = list.map((list) => (
      <li key={list.id}>
       
        {list.input} 
      </li>
    ));
  }
  return <ul>{output}</ul>;
}

export default List;
