import "./App.css";
import Cards from "./components/Cards/Cards.jsx";
import NavBar from "./components/NavBar/NavBar";
import React, { useState } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import About from "./components/About/About";
import Detail from "./components/Detail/Detail";
import Form from "./components/Form/Form";

function App() {
  const [characters, setCharacters] = useState([]);

  const eliminar = (idPersonaje) => {
    setCharacters(
      characters.filter((personaje) => personaje.id != idPersonaje)
    );
  };

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

  const onSearch = (escrito) => {
    busqueda(escrito);
  };

  return (
    <>
      <div className={useLocation().pathname === "/" ? "noexiste" : "existe"}>
        <NavBar path="/" onSearch={onSearch} />
      </div>
      <Routes>
        <Route
          exact
          path="/Home"
          element={<Cards characters={characters} eliminar={eliminar} />}
        />
        <Route exact path="/About" element={<About />} />
        <Route exact path="/Detail/:id" element={<Detail />} />
        <Route exact path="/" element={<Form />} />
      </Routes>
    </>
  );
}

export default App;
