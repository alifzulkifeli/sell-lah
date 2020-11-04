import React from "react";
import { Text, Platform, StyleSheet } from "react-native";

import defaulStyles from "../config/styles";

const AppText = ({ children, style, ...otherProps }) => {
	return (
		<Text style={[styles.text, style]} {...otherProps}>
			{children}
		</Text>
	);
};

const styles = StyleSheet.create({
	text: defaulStyles.text,
});

export default AppText;
