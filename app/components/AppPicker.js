import React, { useState } from "react";
import { View, StyleSheet, Modal, Button, FlatList } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { TextInput, TouchableWithoutFeedback } from "react-native";

import defaulStyles from "../config/styles";
import AppText from "./AppText";
import Screen from "./Screen";
import PickerItem from "./PickerItem";

const AppPicker = ({
	icon,
	items,
	placeholder,
	selectedItem,
	onSelectItem,
}) => {
	const [modalVisible, setModalVisible] = useState(false);
	return (
		<>
			<TouchableWithoutFeedback onPress={() => setModalVisible(true)}>
				<View style={styles.container}>
					{icon && (
						<MaterialCommunityIcons
							name={icon}
							size={20}
							color={defaulStyles.colors.medium}
							style={styles.icon}
						/>
					)}
					<AppText style={styles.text}>
						{selectedItem ? selectedItem : placeholder}
					</AppText>
					<MaterialCommunityIcons
						name="chevron-down"
						size={20}
						color={defaulStyles.colors.medium}
					/>
				</View>
			</TouchableWithoutFeedback>
			<Modal visible={modalVisible} animationType="slide">
				<Screen>
					<Button title="Close" onPress={() => setModalVisible(false)} />
					<FlatList
						data={items}
						keyExtractor={(item) => item.value.toString()}
						renderItem={({ item }) => (
							<PickerItem
								label={item.label}
								onPress={() => {
									setModalVisible(false);
									onSelectItem(item.label);
								}}
							/>
						)}
					/>
				</Screen>
			</Modal>
		</>
	);
};

const styles = StyleSheet.create({
	container: {
		backgroundColor: defaulStyles.colors.gray,
		borderRadius: 25,
		flexDirection: "row",
		width: "100%",
		padding: 15,
		marginVertical: 10,
	},
	textInput: defaulStyles.text,
	icon: {
		marginRight: 10,
		marginTop: 2,
	},
	text: { flex: 1 },
});

export default AppPicker;
