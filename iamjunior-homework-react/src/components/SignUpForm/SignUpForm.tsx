import {Link} from "react-router-dom";
import styles from "./SignUpForm.module.scss";
import FormField from "../FormField/FormField.tsx";
import Button from "../Button/Button.tsx";
import {routes} from "../../lib/routes.ts";

const SignUpForm = () => {
  return (
    <div className={styles.formContainer}>
      <h2>Sign Up</h2>
      <form className={styles.loginForm}>
        <FormField label="username" htmlFor="username"
                   error={{message: ""}}>
          <input
            id="username"
            name="username"
            type="text"
            placeholder="Enter Your Username..."
          />
        </FormField>
        <FormField label="email" htmlFor="email" error={{message: ""}}>
          <input
            id="email"
            name="email"
            type="email"
            placeholder="Enter Email..."
          />
        </FormField>
        <FormField label="password" htmlFor="password"
                   error={{message: ""}}>
          <input
            id="password"
            name="password"
            type="password"
            placeholder="Enter Password..."
          />
        </FormField>
        <Button type="submit">Submit</Button>
      </form>
      <Link to={routes.login}>Already have an Account? Login</Link>
    </div>
  );
};

export default SignUpForm;
