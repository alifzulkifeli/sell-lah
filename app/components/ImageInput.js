import React from "react";
import { View, StyleSheet, Image, Alert } from "react-native";
import colors from "../config/colors";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { TouchableWithoutFeedback } from "react-native";
import * as ImagePicker from "expo-image-picker";

const ImageInput = ({ imageUri, onChangeImage }) => {
	const handlePress = () => {
		if (!imageUri) selectImage();
		else
			Alert.alert("Delete", "Are you sure you want to delete this image?", [
				{ text: "Yes", onPress: () => onChangeImage(null) },
				{ text: "No" },
			]);
	};

	const selectImage = async () => {
		try {
			const result = await ImagePicker.launchImageLibraryAsync({
				mediaTypes: ImagePicker.MediaTypeOptions.Images,
				quality: 0.5,
			});
			if (!result.cancelled) {
				onChangeImage(result.uri);
			}
		} catch (error) {
			console.log(error);
			console.log("error reading an image");
		}
	};
	return (
		<TouchableWithoutFeedback onPress={handlePress}>
			<View style={styles.container}>
				{!imageUri && (
					<MaterialCommunityIcons
						name="camera"
						size={30}
						color={colors.medium}
					/>
				)}
				{imageUri && <Image source={{ uri: imageUri }} style={styles.image} />}
			</View>
		</TouchableWithoutFeedback>
	);
};

const styles = StyleSheet.create({
	container: {
		backgroundColor: colors.gray,
		borderRadius: 15,
		alignItems: "center",
		justifyContent: "center",
		width: 100,
		height: 100,
		overflow: "hidden",
	},
	image: {
		width: "100%",
		height: "100%",
	},
});

export default ImageInput;
