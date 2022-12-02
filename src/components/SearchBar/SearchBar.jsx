import styles from "./SearchBar.module.css";
import React, { useState } from "react";

export default function SearchBar(props) {
  const [input, setInput] = useState("");
  const click = ()=>{
    setInput("")
    props.onSearch(input)
  }
  return (
    <div>
      <input
        type="search"
        value={input}
        onChange={(evento) => setInput(evento.target.value)}
      />
      <button
        className={styles.boton}
        onClick={click}
      >
        Agregar
      </button>
    </div>
  );
}
