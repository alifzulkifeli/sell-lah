import React from "react";
import { View, Image, StyleSheet } from "react-native";
import AppText from "../components/AppText";
import colors from "../config/colors";
import ListItem from "../components/ListItem.js";

const ListingDetailsScreen = () => {
	return (
		<View>
			<Image style={styles.image} source={require("../assets/frogman.jpg")} />
			<View style={styles.detailsContainer}>
				<AppText style={styles.title}>G watch for sale</AppText>
				<AppText style={styles.price}>RM 1700</AppText>
				<View style={styles.userContainer}>
					<ListItem
						image={require("../assets/bg.jpg")}
						title="Aliff Aiman"
						subTitle="5 listing"
					/>
				</View>
			</View>
		</View>
	);
};

const styles = StyleSheet.create({
	image: { height: 300, width: "100%" },
	detailsContainer: { padding: 20 },
	title: { fontSize: 24, fontWeight: "500" },
	price: {
		fontSize: 20,
		fontWeight: "bold",
		marginVertical: 10,
		color: colors.primary,
	},
	userContainer: {
		marginTop: 40,
	},
});

export default ListingDetailsScreen;
