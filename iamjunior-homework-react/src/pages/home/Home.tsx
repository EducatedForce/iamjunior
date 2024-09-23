import styles from './Home.module.scss';
import ContentMain from "../../components/ContentMain/ContentMain.tsx";
import {CATEGORIES} from "../../lib/categories.tsx";

const Home = () => {
  return (
    <main className={styles.mainContainer}>
      <ContentMain categories={CATEGORIES}/>
    </main>
  );
};

export default Home;
