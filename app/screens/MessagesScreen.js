import React, { useState } from "react";
import { FlatList, StyleSheet, View, Text } from "react-native";
import ListItem from "../components/ListItem";
import Screen from "../components/Screen";
import ListItemSeperator from "../components/ListItemSeperator";
import ListItemDeleteAction from "../components/ListItemDeleteAction";

const initialMessages = [
	{ id: 1, title: "T1", description: "D1", image: require("../assets/bg.jpg") },
	{ id: 2, title: "T2", description: "D2", image: require("../assets/bg.jpg") },
];

const MessagesScreen = () => {
	const [messages, setMassages] = useState(initialMessages);
	const [refreshing, setRefreshing] = useState(false);

	const renderItem = ({ item }) => (
		<ListItem
			title={item.title}
			subTitle={item.description}
			image={item.image}
			onPress={() => console.log("touched" + item.title)}
			renderRightActions={() => (
				<ListItemDeleteAction onPress={() => handleDelete(item)} />
			)}
		/>
	);

	const handleDelete = (message) => {
		setMassages(messages.filter((m) => m.id !== message.id));
	};

	return (
		<Screen>
			<FlatList
				data={messages}
				keyExtractor={(eky) => eky.id.toString()}
				renderItem={renderItem}
				ItemSeparatorComponent={ListItemSeperator}
				refreshing={refreshing}
				onRefresh={() => {
					setMassages([
						{
							id: 2,
							title: "T2",
							description: "D2",
							image: require("../assets/bg.jpg"),
						},
					]);
				}}
			/>
		</Screen>
	);
};
const styles = StyleSheet.create({});
export default MessagesScreen;
