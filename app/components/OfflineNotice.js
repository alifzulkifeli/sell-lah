import React from "react";
import { View, StyleSheet } from "react-native";
import colors from "../config/colors";
import AppText from "./AppText";
import Constants from "expo-constants";
import { useNetInfo } from "@react-native-community/netinfo";

const OfflineNotice = ({}) => {
	const netInfo = useNetInfo();
	if (netInfo.type !== "unknown" && netInfo.isInternetReachable === false) {
		return (
			<View style={styles.container}>
				<AppText style={styles.text}>No Internet Conection</AppText>
			</View>
		);
	}
	return null;
};

const styles = StyleSheet.create({
	container: {
		alignItems: "center",
		justifyContent: "center",
		backgroundColor: colors.secondary,
		height: 50,
		position: "absolute",
		top: Constants.statusBarHeight,
		zIndex: 1,
		width: "100%",
	},
	text: { width: "50%" },
});

export default OfflineNotice;
