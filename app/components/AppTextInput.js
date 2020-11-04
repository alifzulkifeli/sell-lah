import React from "react";
import { View, StyleSheet } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { TextInput } from "react-native-gesture-handler";

import defaulStyles from "../config/styles";

const AppTextInput = ({ icon, width = "100%", ...otherProps }) => {
	return (
		<View style={[styles.container, { width }]}>
			{icon && (
				<MaterialCommunityIcons
					name={icon}
					size={20}
					color={defaulStyles.colors.medium}
					style={styles.icon}
				/>
			)}
			<TextInput
				placeholderTextColor={defaulStyles.colors.medium}
				style={styles.textInput}
				{...otherProps}
			/>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		backgroundColor: defaulStyles.colors.gray,
		borderRadius: 25,
		flexDirection: "row",
		padding: 15,
		marginVertical: 10,
	},
	textInput: defaulStyles.text,
	icon: {
		marginRight: 10,
		marginTop: 2,
	},
});

export default AppTextInput;
