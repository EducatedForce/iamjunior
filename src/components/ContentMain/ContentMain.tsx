import styles from "./ContentMain.module.scss";
import SearchBar from "../SearchBar/SearchBar.tsx";
import CategoryCard from "../CategoryCard/CategoryCard.tsx";

const ContentMain = ({ categories }: { categories: CategoryCardProps[] }) => {
	return (
		<div className={styles.contentMainContainer}>
			<section className={styles.searchBarContainer}>
				<h1 className={styles.title}>
					Find Home <span>Service/Repair</span> Near You
				</h1>
				<p>Explore Best Home Service & Repair Near You</p>
				<SearchBar />
			</section>
			<section className={styles.categoriesContainer}>
				{categories.map((category) => (
					<CategoryCard
						key={category._id}
						iconUrl={category.iconUrl}
						name={category.name}
						backgroundColor={category.backgroundColor}
					/>
				))}
			</section>
		</div>
	);
};

export default ContentMain;
