import React from "react";
import { View, StyleSheet, Image, TouchableHighlight } from "react-native";
import AppText from "../AppText";
import Swipeable from "react-native-gesture-handler/Swipeable";

import colors from "../../config/colors";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const ListItem = ({
	image,
	title,
	subTitle,
	IconComponent,
	onPress,
	renderRightActions,
}) => {
	return (
		<Swipeable renderRightActions={renderRightActions}>
			<TouchableHighlight underlayColor={colors.gray} onPress={onPress}>
				<View style={styles.container}>
					{IconComponent}
					{image && <Image source={image} style={styles.image} />}
					<View style={styles.detailsContainer}>
						<AppText numberOfLines={1} style={styles.title}>
							{title}
						</AppText>
						{subTitle && (
							<AppText numberOfLines={2} style={styles.subTitle}>
								{subTitle}
							</AppText>
						)}
					</View>
					<MaterialCommunityIcons
						color={colors.medium}
						name="chevron-right"
						size={25}
					/>
				</View>
			</TouchableHighlight>
		</Swipeable>
	);
};

const styles = StyleSheet.create({
	container: {
		alignItems: "center",
		flexDirection: "row",
		padding: 15,
		backgroundColor: colors.white,
	},
	detailsContainer: { flex: 1, marginLeft: 10, justifyContent: "center" },
	image: {
		height: 70,
		width: 70,
		borderRadius: 35,
	},
	subTitle: { color: colors.medium, width: "90%" },
	title: { fontWeight: "500", width: "90%" },
});

export default ListItem;
