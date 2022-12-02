import styles from "./NavBar.module.css";
import SearchBar from "../SearchBar/SearchBar";
 
export default function NavBar(props) {
  return (
    <nav className={styles.nav}>
      <div className={styles.searchBar}>
        <SearchBar onSearch={props.onSearch} />
      </div>
    </nav>
  );
}
