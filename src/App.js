import "./App.css";
import Cards from "./components/Cards/Cards.jsx";
import NavBar from "./components/NavBar/NavBar";
import React, { useState } from "react";

function App() {
  const [characters, setCharacters] = useState([]);

  const eliminar = (idPersonaje)=>{
    setCharacters(characters.filter(personaje => personaje.id != idPersonaje))
  }

  function busqueda(nombre) {
    fetch(`https://rickandmortyapi.com/api/character/${nombre}`)
      .then((response) => response.json())
      .then((data) => {
        if (data.name) {
          setCharacters((oldChars) => [...oldChars, data]);
        } else {
          window.alert("No hay personajes con ese ID");
        }
      });
  }

  const onSearch = (escrito) =>{
      busqueda(escrito);
  };

  return (
    <>
      <div className="App" style={{ padding: "25px" }}>
        <NavBar onSearch={onSearch} />
        <div>
          <Cards characters={characters} eliminar={eliminar} />
        </div>
      </div>
    </>
  );
}

export default App;
