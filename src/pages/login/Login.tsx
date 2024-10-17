import styles from "./Login.module.scss";
import LoginForm from "../../components/LoginForm/LoginForm.tsx";

const Login = () => {
	return (
		<div className={styles.authContainer}>
			<LoginForm />
		</div>
	);
};

export default Login;
