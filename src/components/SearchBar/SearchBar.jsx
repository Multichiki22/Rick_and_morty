import styles from "./SearchBar.module.css";



export default function SearchBar(props) {
   let id = ""
   
  return (
    <div>
      <input type="search" onChange={(evento)=>(id = evento.target.value)}/>
      <button className={styles.boton} onClick={()=>{props.onSearch(id)}}>
        Agregar
      </button>
    </div>
  );
}
