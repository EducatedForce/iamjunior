import { Link } from "react-router-dom";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import styles from "./SignUpForm.module.scss";
import FormField from "../FormField/FormField.tsx";
import Button from "../Button/Button.tsx";
import { routes } from "../../lib/routes.ts";
import { useUserStore } from "../../stores/useUserStore.ts";
import useAuthRedirect from "../../hooks/useAuthRedirect.ts";

const passwordRules = new RegExp("^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{8,}$");

const SignUpForm = () => {
	const { error, isLoading, register } = useUserStore();
	useAuthRedirect();

	const validationSchema = Yup.object({
		userName: Yup.string().required("Username is required"),
		email: Yup.string()
			.email("Invalid email address")
			.required("Email is required"),
		password: Yup.string()
			.min(8)
			.matches(
				passwordRules,
				"Password must have min 8 characters and have at least 1 lower case letter, 1 upper case letter and number",
			)
			.required("Password is required"),
		confirmPassword: Yup.string()
			.required("Confirm Password is required")
			.oneOf([Yup.ref("password")], "Passwords must match"),
	});

	const submitHandler = async (values: {
		userName: string;
		email: string;
		password: string;
	}) => {
		await register(values.userName, values.email, values.password);
	};

	return (
		<div className={styles.formContainer}>
			<h2>Sign Up</h2>
			<Formik
				initialValues={{
					userName: "",
					email: "",
					password: "",
					confirmPassword: "",
				}}
				validationSchema={validationSchema}
				onSubmit={submitHandler}
			>
				{({ isSubmitting, errors }) => (
					<Form className={styles.loginForm}>
						<FormField
							label="userName"
							htmlFor="userName"
							error={errors.userName}
						>
							<Field
								id="userName"
								name="userName"
								type="text"
								placeholder="Enter Username..."
							/>
						</FormField>
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
						<FormField
							label="confirmPassword"
							htmlFor="confirmPassword"
							error={errors.confirmPassword}
						>
							<Field
								id="confirmPassword"
								name="confirmPassword"
								type="password"
								placeholder="Confirm Password..."
							/>
						</FormField>

						<Button type="submit" disabled={isSubmitting || isLoading}>
							{isLoading ? "Signing up..." : "Sign Up"}
						</Button>
					</Form>
				)}
			</Formik>
			{error && <p className={styles.error}>{error}</p>}
			<Link to={routes.login}>Already have an Account? Login</Link>
		</div>
	);
};

export default SignUpForm;
