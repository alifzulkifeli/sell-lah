import React from "react";
import Screen from "../components/Screen";
import ListItem from "../components/list/ListItem";
import { StyleSheet, View, FlatList } from "react-native";
import colors from "../config/colors";
import Icon from "../components/Icon";
import ListItemSeperator from "../components/list/ListItemSeperator";

import useAuth from "../auth/useAuth";

const menuItems = [
	{
		title: "my listing",
		icon: { name: "format-list-bulleted", backgroundColor: colors.primary },
	},
	{
		title: "my messages",
		icon: { name: "email", backgroundColor: colors.secondary },
		targetScreen: "Messages",
	},
];

const AccountScreen = ({ navigation }) => {
	const { user, logOut } = useAuth();

	const renderItem = ({ item }) => (
		<ListItem
			title={item.title}
			IconComponent={
				<Icon
					name={item.icon.name}
					backgroundColor={item.icon.backgroundColor}
				/>
			}
			onPress={() => navigation.navigate(item.targetScreen)}
		/>
	);

	return (
		<Screen style={styles.screen}>
			<View style={styles.container}>
				<ListItem
					title={user.name}
					subTitle={user.email}
					image={require("../assets/bg.jpg")}
				/>
			</View>
			<View style={styles.container}>
				<FlatList
					data={menuItems}
					keyExtractor={(menuItem) => menuItem.title.toString()}
					renderItem={renderItem}
					ItemSeparatorComponent={ListItemSeperator}
				/>
			</View>
			<ListItem
				title="Log Out"
				IconComponent={<Icon name="logout" backgroundColor="#ffe66d" />}
				onPress={() => logOut()}
			/>
		</Screen>
	);
};

const styles = StyleSheet.create({
	screen: { backgroundColor: colors.gray },
	container: { marginVertical: 20 },
});

export default AccountScreen;
