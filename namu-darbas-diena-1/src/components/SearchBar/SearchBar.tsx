import styles from "./SearchBar.module.scss";
import SearchLogo from "./SearchLogo.tsx";

const SearchBar = () => {
    const searchEventHandler = () => {

  };
  return (
    <div className={styles.container}>
      <input
        name="search-input"
        placeholder="Search"
      />
      <SearchLogo onClick={searchEventHandler} />
    </div>
  );
};

export default SearchBar;
