import styles from "./Home.module.scss";
import ContentMain from "../../components/ContentMain/ContentMain.tsx";
import { useFetch } from "../../hooks/useFetch.ts";
import { apiRoutes } from "../../lib/apiRoutes.ts";
import Loader from "../../components/Loader/Loader.tsx";

const Home = () => {
	const result = useFetch(apiRoutes.categories);
	const categories = result?.data as Category[];
	return (
		<main className={styles.mainContainer}>
			{result.loading && <Loader />}
			{categories && <ContentMain categories={categories} />}
			{!result.loading && !categories && (
				<h2>No categories were found in DB</h2>
			)}
		</main>
	);
};

export default Home;
