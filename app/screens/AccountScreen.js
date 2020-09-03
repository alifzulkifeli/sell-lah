import React from "react";
import Screen from "../components/Screen";
import ListItem from "../components/ListItem";
import { StyleSheet, View, FlatList } from "react-native";
import colors from "../config/colors";
import Icon from "../components/Icon";
import ListItemSeperator from "../components/ListItemSeperator";

const menuItems = [
	{
		title: "my listing",
		icon: { name: "format-list-bulleted", backgroundColor: colors.primary },
	},
	{
		title: "my messages",
		icon: { name: "email", backgroundColor: colors.secondary },
	},
];

const AccountScreen = () => {
	const renderItem = ({ item }) => (
		<ListItem
			title={item.title}
			IconComponent={
				<Icon
					name={item.icon.name}
					backgroundColor={item.icon.backgroundColor}
				/>
			}
		/>
	);

	return (
		<Screen style={styles.screen}>
			<View style={styles.container}>
				<ListItem
					title="Aliff Aiman"
					subTitle="alifzulkifeli@gmail.com"
					image={require("../assets/bg.jpg")}
				/>
			</View>
			<View style={styles.container}>
				<FlatList
					data={menuItems}
					keyExtractor={(menuItem) => menuItem.title}
					renderItem={renderItem}
					ItemSeparatorComponent={ListItemSeperator}
				/>
			</View>
			<ListItem
				title="Log Out"
				IconComponent={<Icon name="logout" backgroundColor="#ffe66d" />}
			/>
		</Screen>
	);
};

const styles = StyleSheet.create({
	screen: { backgroundColor: colors.gray },
	container: { marginVertical: 20 },
});

export default AccountScreen;
