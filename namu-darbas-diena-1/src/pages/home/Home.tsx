import ContentMain from "../../components/ContentMain/ContentMain.tsx";
import {CATEGORIES} from "../../lib/categories.tsx";
const Home = () => {
  return (
    <main>
    <ContentMain categories={CATEGORIES} />
    </main>
  );
};

export default Home;
