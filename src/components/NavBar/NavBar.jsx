import styles from "./NavBar.module.css";
import SearchBar from "../SearchBar/SearchBar";
import { Link, useLocation } from "react-router-dom";


export default function NavBar(props) {
  console.log(useLocation());
  return (
    <nav className={styles.nav}>
      <div className={styles.Home}>
        <Link to="/home">
          <button>Home</button>
        </Link>
      </div>
      <div className={styles.searchBar}>
        <SearchBar onSearch={props.onSearch} />
      </div>
    </nav>
  );
}
