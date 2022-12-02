import Card from "../Card/Card.jsx";
import styles from "./Cards.module.css";

export default function Cards(props) {
  const { characters } = props;
  return (
    <div className={styles.contenedor}>
      {characters.map((personaje, index) => (
        <div  key={index} className={styles.card}>{Card(personaje)}</div>
      ))}
    </div>
  );
}
