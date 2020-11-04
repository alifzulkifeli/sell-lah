import React, { useState } from "react";
import { FlatList, StyleSheet, View, Text } from "react-native";
import ListItem from "../components/list/ListItem";
import Screen from "../components/Screen";
import ListItemSeperator from "../components/list/ListItemSeperator";
import ListItemDeleteAction from "../components/list/ListItemDeleteAction";

const initialMessages = [
	{ id: 1, title: "T1", description: "D1", image: require("../assets/bg.jpg") },
	{
		id: 2,
		title:
			"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
		description:
			"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
		image: require("../assets/bg.jpg"),
	},
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
