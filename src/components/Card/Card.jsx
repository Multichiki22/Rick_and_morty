import styles from "./Card.module.css";
export default function Card(props) {
  const {personaje, eliminar} = props
  return (
    <>
      <div className={styles.div}>
        <div className={styles.divImagen}>
          <img className={styles.imagen} src={personaje.image} alt="" />
        </div>
        <div className={styles.divNombre}>
          <h2 className={styles.nombre}>{personaje.name}</h2>
        </div>
        <div className={styles.divInfo}>
          <h2 className={styles.species}>{personaje.species}</h2>
          <button
            className={styles.boton}
            onClick={()=>eliminar(personaje.id)}
          >
            X
          </button>

          <h2 className={styles.genero}>{personaje.gender}</h2>
        </div>
      </div>
    </>
  );
}
