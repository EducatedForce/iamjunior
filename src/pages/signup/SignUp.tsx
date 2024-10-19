import styles from "./SignUp.module.scss";
import SignUpForm from "./SignUpForm/SignUpForm.tsx";

const SignUp = () => {
	return (
		<div className={styles.authContainer}>
			<SignUpForm />
		</div>
	);
};

export default SignUp;
