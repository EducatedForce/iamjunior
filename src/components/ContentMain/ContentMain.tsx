import styles from './ContentMain.module.scss';
import SearchBar from "../SearchBar/SearchBar.tsx";

const ContentMain = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Find Home <span>Service/Repair</span> Near
        You</h1>
      <p>Explore Best Home Service & Repair Near You</p>
      <SearchBar/>
    </div>
  );
};

export default ContentMain;
