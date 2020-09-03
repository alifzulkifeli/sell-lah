import React from "react";
import { View, StyleSheet, Image, TouchableHighlight } from "react-native";
import AppText from "./AppText";
import colors from "../config/colors";
import Swipeable from "react-native-gesture-handler/Swipeable";

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
						<AppText style={styles.title}>{title}</AppText>
						{subTitle && <AppText style={styles.subTitle}>{subTitle}</AppText>}
					</View>
				</View>
			</TouchableHighlight>
		</Swipeable>
	);
};

const styles = StyleSheet.create({
	container: {
		flexDirection: "row",
		padding: 15,
		backgroundColor: colors.white,
	},
	detailsContainer: { marginLeft: 10, justifyContent: "center" },
	image: {
		height: 70,
		width: 70,
		borderRadius: 35,
	},
	subTitle: { color: colors.medium },
	title: { fontWeight: "500" },
});

export default ListItem;
