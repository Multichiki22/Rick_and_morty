import styles from "./Card.module.css";
export default function Card(props) {
  return (
    <>
      <div className={styles.div}>
        <div className={styles.divImagen}>
          <img className={styles.imagen} src={props.image} alt="" />
        </div>
        <div className={styles.divNombre}>
          <h2 className={styles.nombre}>{props.name}</h2>
        </div>
        <div className={styles.divInfo}>
          <h2 className={styles.species}>{props.species}</h2>
          <button
            className={styles.boton}
            onClick={() => window.alert("Emulamos que se cierra la card")}
          >
            X
          </button>

          <h2 className={styles.genero}>{props.gender}</h2>
        </div>
      </div>
    </>
  );
}
