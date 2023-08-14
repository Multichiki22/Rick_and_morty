import styles from "./NavBar.module.css";
import SearchBar from "../SearchBar/SearchBar";
import { Link } from "react-router-dom";
import RyM_Logo from "../../Images/RyM_Logo5.png";
import Foto from "../../Images/about/Imagen1.png";

export default function NavBar(props) {
  const agregarRandom =()=>{
    const min = Math.ceil(826);
    const max = Math.floor(1);
    const id_random = Math.floor(Math.random() * (max - min + 1) + min);
    props.onSearch(id_random)
  }
  return (
    <nav className={styles.nav}>
      <div className={styles.aboutMe}>
          <Link to="/about" className={styles.divFoto}> 
            <img src={Foto} alt="Foto aqui" className={styles.foto} />
          </Link>
        <div className={styles.texto}>
          <p className={styles.creador}>Creador:</p>
          <Link to="/about" className={styles.link}>
            <p className={styles.yo}>Miguel Angel Gallego</p>
          </Link>
        </div>
      </div>

      <div className={styles.divlogo}>
        <Link to="/home" className={styles.logo}>
          <img src={RyM_Logo} alt="Logo rick y morty" className={styles.logo} />
        </Link>
      </div>

      <div className={styles.controles}>
        <div className={styles.searchBar}>
          <SearchBar onSearch={props.onSearch} />
        </div>
        <button className={styles.addRandom} onClick={agregarRandom}>Añadir Random</button>
      </div>
    </nav>
  );
}
