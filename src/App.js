import "./App.css";
import Cards from "./components/Cards/Cards.jsx";
import NavBar from "./components/NavBar/NavBar";
import React, { useState } from "react";

const example = {
  name: "Morty Smith",
  species: "Human",
  gender: "Male",
  image: "https://rickandmortyapi.com/api/character/avatar/2.jpeg",
};

function App() {
  const [characters, setCharacters] = useState([]);

  function busqueda(nombre) {
    fetch(`https://rickandmortyapi.com/api/character/${nombre}`)
      .then((response) => response.json())
      .then((data) => {
        if (data.name) {
          setCharacters((oldChars) => [...oldChars, data]);
          console.log(characters);
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
          <Cards characters={characters} />
        </div>
      </div>
    </>
  );
}

export default App;
