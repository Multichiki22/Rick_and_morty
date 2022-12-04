import Card from "../Card/Card.jsx";
import styles from "./Cards.module.css";

export default function Cards(props) {
  const { characters, eliminar } = props;

  return (
    <div className={styles.contenedor}>
      {characters.map((personaje) => (
        <div key={personaje.id} className={styles.card}>
          {<Card personaje={personaje} eliminar={eliminar} />}
        </div>
      ))}
    </div>
  );
}
