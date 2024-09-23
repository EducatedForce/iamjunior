import {FiSearch} from "react-icons/fi";
import styles from "./SearchLogo.module.scss";

const SearchLogo = ({onClick}: { onClick: () => void }) => {

  return (
    <div
      className={styles.circle}
      onClick={onClick}
    >
      <FiSearch
        className={styles.icon}
      />
    </div>
  );
};

export default SearchLogo;
