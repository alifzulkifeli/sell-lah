import { View, TouchableOpacity } from "react-native";

import React from "react";
import { StyleSheet, Text } from "react-native";

import colors from "../config/colors";

const AppButton = ({ title, onPress, color = "primary" }) => {
	return (
		<TouchableOpacity
			style={[styles.button, { backgroundColor: colors[color] }]}
			onPress={onPress}
		>
			<Text style={styles.text}>{title}</Text>
		</TouchableOpacity>
	);
};

const styles = StyleSheet.create({
	button: {
		borderRadius: 25,
		backgroundColor: colors.primary,
		padding: 15,
		width: "100%",
		justifyContent: "center",
		alignItems: "center",
		marginBottom: 25,
	},
	text: {
		color: colors.white,
		fontSize: 18,
		textTransform: "uppercase",
		fontWeight: "bold",
	},
});

export default AppButton;
