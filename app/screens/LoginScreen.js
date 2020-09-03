import React from "react";
import { StyleSheet, Image } from "react-native";
import Screen from "../components/Screen";
import AppTextInput from "../components/AppTextInput";
import AppButton from "../components/AppButton";
import { Formik } from "formik";
import * as Yup from "yup";
import AppText from "../components/AppText";
import ErrorMessage from "../components/ErrorMessage";

const validationSchema = Yup.object().shape({
	email: Yup.string().required().email().label("Email"),
	password: Yup.string().required().min(6).label("Password"),
});

const LoginScreen = () => {
	return (
		<Screen style={styles.container}>
			<Image style={styles.logo} source={require("../assets/logo.png")} />

			<Formik
				initialValues={{ email: "", password: "" }}
				onSubmit={(values) => console.log(values)}
				validationSchema={validationSchema}
			>
				{({ handleChange, handleSubmit, errors, setFieldTouched, touched }) => (
					<>
						<AppTextInput
							autoCapitalize="none"
							autoCorrect={false}
							icon="email"
							keyboardType="email-address"
							onChangeText={handleChange("email")}
							onBlur={() => setFieldTouched("email")}
							placeholder="Email"
							textContentType="emailAdress"
						/>

						<ErrorMessage error={errors.email} visible={touched.email} />
						<AppTextInput
							autoCapitalize="none"
							autoCorrect={false}
							icon="lock"
							keyboardType="Password"
							onChangeText={handleChange("password")}
							onBlur={() => setFieldTouched("password")}
							placeholder="Password"
							secureTextEntry
							textContentType="password"
						/>

						<ErrorMessage error={errors.password} visible={touched.password} />
						<AppButton
							title="Login"
							onPress={() => {
								handleSubmit;
								console.log(errors);
								console.log(touched);
							}}
						/>
					</>
				)}
			</Formik>
		</Screen>
	);
};
const styles = StyleSheet.create({
	container: { padding: 20 },
	logo: {
		width: 150,
		height: 150,
		alignSelf: "center",
		marginTop: 50,
		marginBottom: 20,
	},
});

export default LoginScreen;
