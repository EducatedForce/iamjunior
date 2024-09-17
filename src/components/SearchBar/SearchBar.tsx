import styles from "./SearchBar.module.scss";
import SearchLogo from "./SearchLogo.tsx";
import {ChangeEvent, useState} from "react";
import {useNavigate} from "react-router-dom";
import {routes} from "../../lib/routes.ts";

const SearchBar = () => {

  const [searchTerm, setSearchTerm] = useState<string>("");
  const navigate = useNavigate();

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  const searchEventHandler = () => {
    navigate(`${routes.services}?filter=${searchTerm}`);
  };

  return (
    <div className={styles.container}>
      <input
        id="search-input"
        name="search-input"
        placeholder="Search"
        onChange={handleChange}
      />
      <SearchLogo onClick={searchEventHandler}/>
    </div>
  );
};

export default SearchBar;
