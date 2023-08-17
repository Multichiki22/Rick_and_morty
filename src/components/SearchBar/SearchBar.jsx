import styles from "./SearchBar.module.css";
import React, { useState } from "react";

export default function SearchBar(props) {
  const [input, setInput] = useState("");
  const click = () => {
    if (input > 0 && input <= 826) {
      setInput("");
      props.onSearch(input);
    }else {
      alert("Select a number between 1 and 826")
    }
  };
  return (
    <div className={styles.container}>
      <input
        placeholder="ID"
        className={styles.input}
        type="number"
        min="1"
        max="829"
        value={input}
        onKeyPress={(event) => {
          if (event.key === "Enter") {
            click();
          }
        }}
        onChange={(evento) => setInput(evento.target.value)}
      />
      <button className={styles.boton} onClick={click}>
        Agregar
      </button>
    </div>
  );
}
