import styles from "./SearchBar.module.scss";
import SearchLogo from "./SearchLogo.tsx";
import {ChangeEvent, KeyboardEvent, useState} from "react";
import {useNavigate} from "react-router-dom";
import {routes} from "../../lib/routes.ts";

const SearchBar = () => {

  const [searchTerm, setSearchTerm] = useState<string>("");
  const navigate = useNavigate();

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  const searchEventHandler = () => {
    if (searchTerm.trim())
      navigate(`${routes.services}?filter=${searchTerm.trim()}`);
  };

  const keyEventHandler = (e: KeyboardEvent<HTMLInputElement>) => {
    if (searchTerm.trim() && e.key === "Enter") {
      navigate(`${routes.services}?filter=${searchTerm.trim()}`);
    }
  };

  return (
    <div className={styles.container}>
      <input
        id="search-input"
        name="search-input"
        placeholder="Search"
        onChange={handleChange}
        onKeyDown={keyEventHandler}
      />
      <SearchLogo onClick={searchEventHandler}/>
    </div>
  );
};

export default SearchBar;
