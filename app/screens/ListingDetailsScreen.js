import React from "react";
import { View, StyleSheet, KeyboardAvoidingView, Platform } from "react-native";
import AppText from "../components/AppText";
import colors from "../config/colors";
import ListItem from "../components/list/ListItem.js";
import { Image } from "react-native-expo-image-cache";
import listings from "../api/listings";
import ContactSellerForm from "../components/ContactSellerForm";

const ListingDetailsScreen = ({ route }) => {
	const listing = route.params;
	return (
		<KeyboardAvoidingView
			behavior="position"
			keyboardVerticalOffset={Platform.OS === "ios" ? 0 : 100}
		>
			<View>
				<Image
					style={styles.image}
					uri={listing.images[0].url}
					preview={{ uri: listing.images[0].thumbnailUrl }}
					tint="light"
				/>
				<View style={styles.detailsContainer}>
					<AppText style={styles.title}>{listing.title}</AppText>
					<AppText style={styles.price}>RM {listing.price}</AppText>
					<AppText style={styles.description}>{listing.description}</AppText>
					<View style={styles.userContainer}>
						<ListItem
							image={require("../assets/bg.jpg")}
							title="Aliff Aiman"
							subTitle="5 listing"
						/>
					</View>
					<ContactSellerForm listing={listing} />
				</View>
			</View>
		</KeyboardAvoidingView>
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
