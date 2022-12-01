import Card from "../Card/Card.jsx";
import styles from "./Cards.module.css"

export default function Cards(props) {
  console.log(props);
  const { characters } = props;
  console.log(props);
  return (
    <div className={styles.contenedor}>
      {characters.map((personaje) =>
      <div className={styles.card}>
        {(Card(personaje))}
      </div> )}
    </div>
  );
}
