import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import style from "./Detail.module.css";

export default function Detail() {
  const { id } = useParams();
  const [character, setCharacter] = useState({});

  useEffect(() => {
    fetch(`https://rickandmortyapi.com/api/character/${id}`)
      .then((response) => response.json())
      .then((char) => {
        if (char.name) {
          setCharacter(char);
        } else {
          window.alert("No hay personajes con ese ID");
        }
      })
      .catch((err) => {
        window.alert("No hay personajes con ese ID");
      });
    return setCharacter({});
  }, [id]);

  const origin = { ...character.origin };
  return (
    <>
      <div className={style.container}>
        <div className={style.info}>
          <div className={style.divPair}>
            <h2 className={style.object}>Nombre:</h2>
            <h2 className={style.value}>{character.name}</h2>
          </div>
          <div className={style.divPair}>
            <h3 className={style.object}>Estatus:</h3>
            <h3 className={style.value}>{character.status}</h3>
          </div>
          <div className={style.divPair}>
            <h3 className={style.object}>Especie:</h3>
            <h3 className={style.value}>{character.species}</h3>
          </div>
          <div className={style.divPair}>
            <h3 className={style.object}>Genero:</h3>
            <h3 className={style.value}>{character.gender}</h3>
          </div>
          <div className={style.divPair}>
            <h3 className={style.object}>Origen:</h3>
            <h3 className={style.value}>{origin.name}</h3>
          </div>
        </div>
        <div className={style.imagen}>
          <img src={character.image} alt="" />
        </div>
      </div>
    </>
  );
}
