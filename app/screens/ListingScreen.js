import React from "react";
import Screen from "../components/Screen";
import { FlatList, StyleSheet } from "react-native";
import Card from "../components/Card";
import colors from "../config/colors";

const listings = [
	{
		id: 1,
		title: "gshock1",
		price: 100,
		image: require("../assets/frogman.jpg"),
	},
	{
		id: 2,
		title: "gshock2",
		price: 200,
		image: require("../assets/frogman.jpg"),
	},
];

const ListingScreen = () => {
	return (
		<Screen style={styles.screen}>
			<FlatList
				data={listings}
				key={(listing) => listing.id.toString()}
				renderItem={({ item }) => (
					<Card
						title={item.title}
						subTitle={"RM " + item.price}
						image={item.image}
					/>
				)}
			></FlatList>
		</Screen>
	);
};

const styles = StyleSheet.create({
	screen: { padding: 20, backgroundColor: colors.gray },
});

export default ListingScreen;
