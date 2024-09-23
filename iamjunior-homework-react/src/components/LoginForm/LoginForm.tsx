import React, {useEffect, useState} from "react";
import {Link, useNavigate} from "react-router-dom";
import styles from "./LoginForm.module.scss";
import FormField from "../FormField/FormField.tsx";
import Button from "../Button/Button.tsx";
import {routes} from "../../lib/routes.ts";
import {useFetch} from "../../hooks/useFetch.ts";
import useLocalStorage from "../../hooks/useLocalStorage.ts";

const LoginForm = () => {

  const [formData, setFormData] = useState({email: "", token: ""});
  const {fetchData, loading, error, data} = useFetch();
  const [storedData] = useLocalStorage("userServiceApp", {});
  const navigate = useNavigate();

  useEffect(() => {
    if (data && !error) {
      navigate(routes.home);
    }
  }, [data, error, navigate, loading]);

  useEffect(() => {
    if (Object.keys(storedData).length > 0 && (storedData as User).userName) {
      navigate(routes.home);
    }
  }, [navigate, storedData]);

  const submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (formData.email && formData.token) {
      fetchData("/api/login", "POST", formData);
    }
  };

  return (
    <div className={styles.formContainer}>
      <h2>Login</h2>
      <form className={styles.loginForm} onSubmit={submitHandler}>
        <FormField label="email"
                   htmlFor="email"
                   error={{message: ""}}>
          <input
            id="email"
            name="email"
            type="email"
            placeholder="Enter Email..."
            value={formData.email}
            onChange={(e) => setFormData(prevState => ({
              ...prevState,
              email: e.target.value
            }))}
          />
        </FormField>
        <FormField label="password"
                   htmlFor="password"
                   error={{message: ""}}>
          <input
            id="password"
            name="password"
            type="password"
            placeholder="Enter Password..."
            value={formData.token}
            onChange={(e) => setFormData(prevState => ({
              ...prevState,
              token: e.target.value
            }))}
          />
        </FormField>
        <Button
          type="submit"
          disabled={loading}>
          {loading ? "Logging in..." : "Log In"}
        </Button>
      </form>
      {error && <p className={styles.error}>{error}</p>}
      <Link to={routes.signup}>Don't have an Account? Sign Up</Link>
    </div>
  );
};

export default LoginForm;
