import {useSearchParams} from "react-router-dom";

const Services = () => {

  const [searchParams] = useSearchParams()

  return (
    <div>
      Services
      <p>{searchParams}</p>
    </div>
  );
};

export default Services;
