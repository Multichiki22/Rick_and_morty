import styles from "./NavBar.module.css";
import SearchBar from "../SearchBar/SearchBar";
import { Link } from "react-router-dom";
import RyM_Logo from "../../Images/RyM_Logo5.png";
import Foto from "../../Images/Imagen1.png";

export default function NavBar(props) {
  return (
    <nav className={styles.nav}>
      <div className={styles.aboutMe}>
        <div className={styles.divFoto}>
          <Link to="/about" > 
            <img src={Foto} alt="Foto aqui" className={styles.foto} />
          </Link>
        </div>

        <div className={styles.texto}>
          <p className={styles.creado}>Creador:</p>
          <Link to="/about" className={styles.link}>
            <p className={styles.yo}>Miguel Angel Gallego</p>
          </Link>
        </div>
      </div>

      <div className={styles.divlogo}>
        <Link to="/home">
          <img src={RyM_Logo} alt="Logo rick y morty" className={styles.logo} />
        </Link>
      </div>

      <div className={styles.controles}>
        <div className={styles.searchBar}>
          <SearchBar onSearch={props.onSearch} />
        </div>
        <button className={styles.addRandom}>Añadir Random</button>
        <button className={styles.addAll}>Añadir Todas</button>
      </div>
    </nav>
  );
}
