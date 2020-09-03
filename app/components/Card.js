import React from "react";
import { View, StyleSheet, Image } from "react-native";
import AppText from "./AppText";
import colors from "../config/colors";

const Card = ({ title, subTitle, image }) => {
	return (
		<View style={styles.card}>
			<Image style={styles.image} source={image} />
			<View style={styles.detailsContainer}>
				<AppText style={styles.title}>{title}</AppText>
				<AppText style={styles.subTitle}>{subTitle}</AppText>
			</View>
		</View>
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
