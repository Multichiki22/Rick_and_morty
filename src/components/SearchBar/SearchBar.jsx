import styles from "./SearchBar.module.css";
import React, { useState } from "react";

export default function SearchBar(props) {
  const [input, setInput] = useState("");
  const click = () => {
    setInput("");
    props.onSearch(input);
  };
  return (
    <div className={styles.container}>
      <input
        placeholder="ID"
        className={styles.input}
        type="search"
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
