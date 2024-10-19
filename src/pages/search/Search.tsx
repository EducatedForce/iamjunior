import { useParams } from "react-router-dom";
import { slugify } from "../../lib/slugify.ts";
import styles from "./Search.module.scss";
import BusinessCard from "../../components/BusinessCard/BusinessCard.tsx";
import CategoryCard from "../../components/CategoryCard/CategoryCard.tsx";
import useLocalStorage from "../../hooks/useLocalStorage.ts";
import { useFetch } from "../../hooks/useFetch.ts";
import { apiRoutes } from "../../lib/apiRoutes.ts";
import Loader from "../../components/Loader/Loader.tsx";

export type FetchedBusinesses = {
	category: string;
	businesses: Business[];
};

const Search = () => {
	const { category } = useParams<{ category: string }>();
	const [storedValue, setValue] = useLocalStorage<string[]>("favServices", []);

	const { data: categoriesFetchResult, isLoading: isCatLoading } = useFetch(
		`${apiRoutes.categories}`,
	);
	const fetchedCategories = categoriesFetchResult as Category[] | undefined;

	const { data: businessesFetchResult, isLoading: isBLoading } = useFetch(
		`${apiRoutes.businessesByCategory}/${category}`,
	);
	const fetchedBusinesses = businessesFetchResult as
		| FetchedBusinesses
		| undefined;

	return (
		<div className={styles.searchContainer}>
			{fetchedCategories && (
				<>
					<div>
						<h2>Categories</h2>
						<div className={styles.categoriesContainer}>
							{fetchedCategories.map((cat) =>
								slugify(cat.name) === category ? (
									<CategoryCard
										key={cat._id}
										iconUrl={cat.iconUrl}
										name={cat.name}
										backgroundColor={cat.backgroundColor}
										type="secondary"
										active
									/>
								) : (
									<CategoryCard
										key={cat._id}
										iconUrl={cat.iconUrl}
										name={cat.name}
										backgroundColor={cat.backgroundColor}
										type="secondary"
									/>
								),
							)}
						</div>
					</div>
					<div>
						{fetchedBusinesses?.category && (
							<h2>{fetchedBusinesses?.category}</h2>
						)}
						<div className={styles.servicesCards}>
							{fetchedBusinesses?.businesses &&
							fetchedBusinesses?.businesses.length > 0 ? (
								fetchedBusinesses?.businesses.map(
									(service: BusinessCardProps) => (
										<BusinessCard
											key={service._id}
											service={service}
											favorite={storedValue.includes(`${service._id}`)}
											setValue={setValue}
										/>
									),
								)
							) : isBLoading ? null : (
								<h3>No businesses found</h3>
							)}
						</div>
					</div>
				</>
			)}
			{!isCatLoading &&
				!isBLoading &&
				!fetchedCategories &&
				!fetchedBusinesses && <h2>No data found in database</h2>}
			{(isCatLoading || isBLoading) && <Loader />}
		</div>
	);
};

export default Search;
