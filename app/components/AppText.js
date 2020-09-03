import React from "react";
import { Text, Platform, StyleSheet } from "react-native";

import defaulStyles from "../config/styles";

const AppText = ({ children, style }) => {
	return <Text style={[styles.text, style]}>{children}</Text>;
};

const styles = StyleSheet.create({
	text: defaulStyles.text,
});

export default AppText;
