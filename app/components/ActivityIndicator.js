import React from "react";
import LottieView from "lottie-react-native";
import { View, StyleSheet } from "react-native";

const ActivityIndicator = ({ visible = false }) => {
	if (!visible) return null;

	return (
		<View style={styles.overlay}>
			<LottieView
				autoPlay
				loop
				source={require("../assets/animation/loader.json")}
				resizeMode="cover"
				style={{ flex: 1 }}
			/>
		</View>
	);
};
const styles = StyleSheet.create({
	overlay: {
		position: "absolute",
		backgroundColor: "white",
		height: "100%",
		opacity: 0.8,
		width: "100%",
		zIndex: 1,
	},
});
export default ActivityIndicator;
