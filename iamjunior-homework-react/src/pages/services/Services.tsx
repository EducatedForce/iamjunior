import React, {useEffect, useState} from "react";

import styles from "./Services.module.scss";
import {useSearchParams} from "react-router-dom";
import {SERVICES} from "../../lib/services.ts";
import ServiceCard from "../../components/ServiceCard/ServiceCard.tsx";
import useDebounce from "../../hooks/useDebounce.ts";
import useLocalStorage from "../../hooks/useLocalStorage.ts";

const Services = () => {

  const [searchParams, setSearchParams] = useSearchParams();
  const [filter, setFilter] = useState<string>("");
  const [filteredServices, setFilteredServices] = useState<ServiceProps[]>([]);
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

  useEffect(() => {
    if (debouncedFilterTerm && debouncedFilterTerm.trim()) {
      setFilteredServices(SERVICES.filter(
        (service) => service.category.includes(debouncedFilterTerm.trim().toLowerCase()))
      );
    } else if (SERVICES.length > 0) {
      setFilteredServices(SERVICES);
    } else setFilteredServices([]);

  }, [debouncedFilterTerm]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchParams({filter: e.target.value});
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
        {
          filteredServices.length > 0
            ? filteredServices.map(
              (service: ServiceProps) => (
                <ServiceCard
                  key={service.id}
                  service={service}
                  favorite={storedValue.includes(service.id)}
                  setValue={setValue}
                />))
            :
            <p>No services found.</p>
        }
      </section>
    </div>
  );
};

export default Services;
