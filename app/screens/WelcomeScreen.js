import React from "react";
import { ImageBackground, StyleSheet, View, Image } from "react-native";
import colors from "../config/colors";
import AppButton from "../components/AppButton";

const WelcomeScreen = ({ navigation }) => {
	return (
		<ImageBackground
			style={styles.background}
			source={require("../assets/bg.jpg")}
			blurRadius={10}
		>
			<Image style={styles.logo} source={require("../assets/logo.png")} />
			<AppButton
				title="Login"
				color="primary"
				onPress={() => navigation.navigate("Login")}
			/>
			<AppButton
				title="Signup"
				color="secondary"
				onPress={() => navigation.navigate("Register")}
			/>
		</ImageBackground>
	);
};

const styles = StyleSheet.create({
	background: {
		flex: 1,
		flexDirection: "column",
		justifyContent: "flex-end",
		alignItems: "center",
	},
	loginButton: {
		backgroundColor: colors.secondary,
		width: "100%",
		height: "10%",
	},
	logo: {
		height: "35%",
		width: "50%",
		position: "absolute",
		top: 90,
	},
	registerButton: {
		backgroundColor: colors.primary,
		width: "100%",
		height: "10%",
	},
});

export default WelcomeScreen;
