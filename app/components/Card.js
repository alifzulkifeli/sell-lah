import React from "react";
import { View, StyleSheet } from "react-native";
import AppText from "./AppText";
import colors from "../config/colors";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";
import { Image } from "react-native-expo-image-cache";

const Card = ({ title, subTitle, imageUrl, onPress, thumbnailUrl }) => {
	return (
		<TouchableWithoutFeedback onPress={onPress}>
			<View style={styles.card}>
				<Image
					style={styles.image}
					preview={{ uri: thumbnailUrl }}
					uri={imageUrl}
					tint="light"
				/>
				<View style={styles.detailsContainer}>
					<AppText style={styles.title}>{title}</AppText>
					<AppText style={styles.subTitle}>{subTitle}</AppText>
				</View>
			</View>
		</TouchableWithoutFeedback>
	);
};

const styles = StyleSheet.create({
	card: {
		borderRadius: 15,
		backgroundColor: colors.white,
		marginBottom: 20,
		overflow: "hidden",
	},
	image: { height: 200, width: "100%" },
	detailsContainer: { padding: 20 },
	title: { paddingBottom: 7, fontWeight: "700" },
	subTitle: { fontWeight: "bold", color: colors.secondary },
});

export default Card;
