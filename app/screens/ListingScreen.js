import React, { useEffect, useState } from "react";
import Screen from "../components/Screen";
import { FlatList, StyleSheet } from "react-native";

import Card from "../components/Card";
import colors from "../config/colors";
import routes from "../navigation/routes";
import listingsApi from "../api/listings";
import AppText from "../components/AppText";
import AppButton from "../components/AppButton";
import ActivityIndicator from "../components/ActivityIndicator";
import useApi from "../hooks/useApi";

const ListingScreen = ({ navigation }) => {
	const { data: listings, error, loading, request: loadListings } = useApi(
		listingsApi.getListings
	);

	useEffect(() => {
		loadListings();
	}, []);

	return (
		<>
			<ActivityIndicator visible={loading} />
			<Screen style={styles.screen}>
				{error && (
					<>
						<AppText>Couldn't retrieve the listings.</AppText>
						<AppButton title="Retry" onPress={loadListings} />
					</>
				)}
				<FlatList
					data={listings}
					keyExtractor={(listing) => listing.id.toString()}
					renderItem={({ item }) => (
						<Card
							title={item.title}
							subTitle={"RM " + item.price}
							imageUrl={item.images[0].url}
							onPress={() => navigation.navigate(routes.LISTING_DETAILS, item)}
							thumbnailUrl={item.images[0].thumbnailUrl}
						/>
					)}
				/>
			</Screen>
		</>
	);
};

const styles = StyleSheet.create({
	screen: { padding: 20, backgroundColor: colors.gray, flex: 1 },
});

export default ListingScreen;
