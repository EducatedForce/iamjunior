import React, { useEffect, useState } from "react";
import styles from "./Businesses.module.scss";
import { useSearchParams } from "react-router-dom";
import BusinessCard from "../../components/BusinessCard/BusinessCard.tsx";
import useDebounce from "../../hooks/useDebounce.ts";
import useLocalStorage from "../../hooks/useLocalStorage.ts";
import { useFetch } from "../../hooks/useFetch.ts";
import { apiRoutes } from "../../lib/apiRoutes.ts";
import { FetchedBusinesses } from "../search/Search.tsx";
import Loader from "../../components/Loader/Loader.tsx";

const Businesses = () => {
	const [searchParams, setSearchParams] = useSearchParams();
	const [filter, setFilter] = useState<string>("");
	const [storedValue, setValue] = useLocalStorage<string[]>("favServices", []);
	const filterParam = searchParams.get("filter");
	const debouncedFilterTerm = useDebounce(filter, 500);

	useEffect(() => {
		if (filterParam?.trim()) {
			setFilter(filterParam);
		} else {
			setFilter("");
		}
	}, [filterParam]);

	const apiRoute = debouncedFilterTerm
		? `${apiRoutes.businessesByCategory}/${debouncedFilterTerm}`
		: `${apiRoutes.businesses}`;

	const { data: businessesData, isLoading } = useFetch(apiRoute);
	const fetchedBusinesses = debouncedFilterTerm
		? (businessesData as FetchedBusinesses | undefined)
		: (businessesData as Business[] | undefined);

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setSearchParams({ filter: e.target.value });
	};

	return (
		<div className={styles.services}>
			<h2>Services</h2>
			<input
				id="filter-text"
				name="filter-text"
				type="text"
				value={filter}
				placeholder="Filter"
				onChange={handleChange}
			/>
			<section className={styles.servicesCards}>
				{fetchedBusinesses && Array.isArray(fetchedBusinesses)
					? fetchedBusinesses.map((business: BusinessCardProps) => (
							<BusinessCard
								key={business._id}
								service={business}
								favorite={storedValue.includes(`${business._id}`)}
								setValue={setValue}
							/>
						))
					: fetchedBusinesses?.businesses &&
						fetchedBusinesses.businesses.map((business: BusinessCardProps) => (
							<BusinessCard
								key={business._id}
								service={business}
								favorite={storedValue.includes(`${business._id}`)}
								setValue={setValue}
							/>
						))}
				{!isLoading &&
					(!fetchedBusinesses ||
						Object.keys(fetchedBusinesses).length === 0) && (
						<h2>No services found.</h2>
					)}
			</section>
			{isLoading && <Loader />}
		</div>
	);
};

export default Businesses;
