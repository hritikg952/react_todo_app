import React, { useState } from "react";

//import css
import "../css/List.css";

export default function List({ todo, removeTodo, index }) {
  const [Status, setStatus] = useState(false);

  function handleClick() {
    setStatus(!Status);
  }

  return (
    <div className={`list ${Status ? "completed" : "not-completed"}`}>
      <input type="checkbox" onClick={handleClick}></input>
      <li>{todo.text}</li>
      <button onClick={() => removeTodo(index)}>X</button>
    </div>
  );
}
