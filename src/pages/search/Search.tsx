import {useParams} from "react-router-dom";
import {slugify} from "../../lib/slugify.ts";
import styles from "./Search.module.scss"
import {SERVICES} from "../../lib/services.ts";
import {CATEGORIES} from "../../lib/categories.tsx";
import ServiceCard from "../../components/ServiceCard/ServiceCard.tsx";

const Search = () => {

  const {category} = useParams();
  const categoryObject = CATEGORIES.find((catObj) => slugify(catObj.label) === category);

  const filteredServices: ServiceProps[] = SERVICES.filter(service => slugify(service.category) === category);

  return (
    <div className={styles.searchContainer}>
      {
        filteredServices.length > 0
          ? filteredServices.map((service: ServiceProps) => (
            <ServiceCard key={service.id} service={service}/>))
          : <p>No services found
            in {categoryObject ? categoryObject.label : ""} category</p>
      }
    </div>
  );
};

export default Search;
