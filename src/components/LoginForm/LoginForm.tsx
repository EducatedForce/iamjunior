import { Link } from "react-router-dom";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import styles from "./LoginForm.module.scss";
import FormField from "../FormField/FormField.tsx";
import Button from "../Button/Button.tsx";
import { routes } from "../../lib/routes.ts";
import useAuthRedirect from "../../hooks/useAuthRedirect.ts";
import { useUserStore } from "../../stores/useUserStore.ts";

const LoginForm = () => {
	const { error, isLoading, login } = useUserStore();

	useAuthRedirect();

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
				{({ isSubmitting, errors }) => (
					<Form className={styles.loginForm}>
						<FormField label="email" htmlFor="email" error={errors.email}>
							<Field
								id="email"
								name="email"
								type="email"
								placeholder="Enter Email..."
							/>
						</FormField>

						<FormField
							label="password"
							htmlFor="password"
							error={errors.password}
						>
							<Field
								id="password"
								name="password"
								type="password"
								placeholder="Enter Password..."
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
