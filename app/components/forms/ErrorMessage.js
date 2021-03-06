import React from "react";
import AppText from "../AppText";
import { StyleSheet } from "react-native";

const ErrorMessage = ({ error, visible }) => {
	if (!error || !visible) return null;
	return <AppText style={styles.error}>{error}</AppText>;
};
const styles = StyleSheet.create({
	error: {
		color: "red",
		fontSize: 15,
	},
});
export default ErrorMessage;
