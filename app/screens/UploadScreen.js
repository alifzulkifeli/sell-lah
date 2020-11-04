import React from "react";
import { View, StyleSheet, Modal } from "react-native";
import AppText from "../components/AppText";
import * as Progress from "react-native-progress";
import colors from "../config/colors";
import LottieView from "lottie-react-native";

const UploadScreen = ({ progress = 0, visible = false, onDone }) => {
	return (
		<Modal visible={visible}>
			<View style={styles.container}>
				{progress < 1 ? (
					<Progress.Bar
						color={colors.primary}
						progress={progress}
						width={200}
					/>
				) : (
					<LottieView
						autoPlay
						loop={false}
						onAnimationFinish={onDone}
						source={require("../assets/animation/done.json")}
						style={styles.animation}
					/>
				)}
			</View>
		</Modal>
	);
};

const styles = StyleSheet.create({
	container: { alignItems: "center", flex: 1, justifyContent: "center" },
	animation: { width: 150 },
});

export default UploadScreen;