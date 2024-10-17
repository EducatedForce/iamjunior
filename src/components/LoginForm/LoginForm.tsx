import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import styles from "./LoginForm.module.scss";
import FormField from "../FormField/FormField.tsx";
import Button from "../Button/Button.tsx";
import { routes } from "../../lib/routes.ts";
import useLocalStorage from "../../hooks/useLocalStorage.ts";
import { useUserStore } from "../../stores/useUserStore.ts";

const LoginForm = () => {
	const {
		userName,
		email,
		accessToken,
		login,
		isLoading,
		error,
		loadUserFromLocalStorage,
	} = useUserStore();
	const [storedData] = useLocalStorage("userServiceApp", {});
	const navigate = useNavigate();

	useEffect(() => {
		loadUserFromLocalStorage();
		if (userName && email && accessToken && !error) {
			navigate(routes.home);
		}
	}, [accessToken, email, error, loadUserFromLocalStorage, navigate, userName]);

	useEffect(() => {
		if (Object.keys(storedData).length > 0 && (storedData as User).userName) {
			navigate(routes.home);
		}
	}, [navigate, storedData]);

	const validationSchema = Yup.object({
		email: Yup.string()
			.email("Invalid email address")
			.required("Email is required"),
		password: Yup.string().required("Password is required"),
	});

	const submitHandler = async (values: { email: string; password: string }) => {
		await login(values.email, values.password);
	};

	return (
		<div className={styles.formContainer}>
			<h2>Login</h2>
			<Formik
				initialValues={{ email: "", password: "" }}
				validationSchema={validationSchema}
				onSubmit={submitHandler}
			>
				{({ isSubmitting }) => (
					<Form className={styles.loginForm}>
						<FormField label="email" htmlFor="email" error={{ message: "" }}>
							<Field
								id="email"
								name="email"
								type="email"
								placeholder="Enter Email..."
							/>
							<ErrorMessage
								name="email"
								component="div"
								className={styles.error}
							/>
						</FormField>

						<FormField
							label="password"
							htmlFor="password"
							error={{ message: "" }}
						>
							<Field
								id="password"
								name="password"
								type="password"
								placeholder="Enter Password..."
							/>
							<ErrorMessage
								name="password"
								component="div"
								className={styles.error}
							/>
						</FormField>

						<Button type="submit" disabled={isSubmitting || isLoading}>
							{isLoading ? "Logging in..." : "Log In"}
						</Button>
					</Form>
				)}
			</Formik>
			{error && <p className={styles.error}>{error}</p>}
			<Link to={routes.signup}>Don't have an Account? Sign Up</Link>
		</div>
	);
};

export default LoginForm;
