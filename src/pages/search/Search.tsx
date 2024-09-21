import {useParams} from "react-router-dom";
import {slugify} from "../../lib/slugify.ts";
import styles from "./Search.module.scss";
import {SERVICES} from "../../lib/services.ts";
import {CATEGORIES} from "../../lib/categories.tsx";
import ServiceCard from "../../components/ServiceCard/ServiceCard.tsx";
import CategoryCard from "../../components/CategoryCard/CategoryCard.tsx";

const Search = () => {

  const {category} = useParams();
  const categoryObject = CATEGORIES.find((catObj) => slugify(catObj.label) === category);

  const filteredServices: ServiceProps[] = SERVICES.filter(service => slugify(service.category) === category);

  return (
    <div className={styles.searchContainer}>
      <div>
        <h2>Categories</h2>
        <div className={styles.categoriesContainer}>
          {CATEGORIES.map((cat) => (
            slugify(cat.label) === category ? <CategoryCard
                key={cat.label}
                icon={cat.icon}
                label={cat.label}
                color={cat.color}
                type="secondary"
                active
              />
              : <CategoryCard
                key={cat.label}
                icon={cat.icon}
                label={cat.label}
                color={cat.color}
                type="secondary"
              />
          ))}
        </div>
      </div>
      <div>
        {categoryObject ? <h2>{categoryObject.label}</h2> : null}
        <div className={styles.servicesCards}>
          {
            filteredServices.length > 0
              ? filteredServices.map((service: ServiceProps) => (
                <ServiceCard
                  key={service.id}
                  service={service}
                />
              ))
              : <h3>No services yet</h3>
          }
        </div>
      </div>
    </div>
  );
};

export default Search;
