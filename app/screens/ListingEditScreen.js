import React, { useState } from "react";
import { StyleSheet } from "react-native";
import * as Yup from "yup";
import Screen from "../components/Screen";
import CategoryPickerItem from "../components/CategoryPickerItem";
import {
	AppForm,
	AppFormField,
	AppFormPicker,
	SubmitButton,
} from "../components/forms";
import FormImagePicker from "../components/forms/FormImagePicker";
import listingsApi from "../api/listings";
import UploadScreen from "./UploadScreen";

const validationSchema = Yup.object().shape({
	title: Yup.string().required().min(2).label("Title"),
	price: Yup.number().required().min(1).max(10000).label("Price"),
	description: Yup.string().label("Description"),
	category: Yup.object().required().nullable().label("Category"),
	images: Yup.array().min(1, "Plrase select at least 1 image"),
});

const categories = [
	{ label: "Watch", value: 1, backgroundColor: "red", icon: "apps" },
	{ label: "Shirt", value: 2, backgroundColor: "green", icon: "email" },
	{ label: "Cap", value: 3, backgroundColor: "blue", icon: "lock" },
	{
		backgroundColor: "#26de81",
		icon: "cards",
		label: "Games",
		value: 4,
	},
	{
		backgroundColor: "#2bcbba",
		icon: "shoe-heel",
		label: "Clothing",
		value: 5,
	},
	{
		backgroundColor: "#45aaf2",
		icon: "basketball",
		label: "Sports",
		value: 6,
	},
	{
		backgroundColor: "#4b7bec",
		icon: "headphones",
		label: "Movies & Music",
		value: 7,
	},
	{
		backgroundColor: "#a55eea",
		icon: "book-open-variant",
		label: "Books",
		value: 8,
	},
	{
		backgroundColor: "#778ca3",
		icon: "application",
		label: "Other",
		value: 9,
	},
];

const ListingEditScreen = () => {
	const [uploadVisible, setUploadVisible] = useState(false);
	const [progress, setProgress] = useState(false);

	const handleSubmit = async (listing, { resetForm }) => {
		setProgress(0);
		setUploadVisible(true);
		const result = await listingsApi.addListing(listing, (progress) =>
			setProgress(progress)
		);
		// setUploadVisible(false);

		if (!result.ok) {
			setUploadVisible(false);
			return alert("couldnt save to listings");
		}
		resetForm();
	};
	return (
		<Screen style={styles.container}>
			<UploadScreen
				onDone={() => setUploadVisible(false)}
				progress={progress}
				visible={uploadVisible}
			/>
			<AppForm
				initialValues={{
					title: "",
					price: "",
					description: "",
					category: null,
					images: [],
				}}
				onSubmit={handleSubmit}
				validationSchema={validationSchema}
			>
				<FormImagePicker name="images" />
				<AppFormField maxLength={255} name="title" placeholder="Title" />
				<AppFormField
					keyboardType="numeric"
					maxLength={8}
					name="price"
					placeholder="Price (RM)"
					width={120}
				/>
				<AppFormPicker
					items={categories}
					name="category"
					numberOfColumns={3}
					PickerItemComponent={CategoryPickerItem}
					placeholder="Category"
					width="50%"
				/>
				<AppFormField
					maxLength={255}
					multiline
					name="description"
					numberOfLines={3}
					placeholder="Description"
				/>
				<SubmitButton title="Post" />
			</AppForm>
		</Screen>
	);
};

const styles = StyleSheet.create({ container: { padding: 20 } });

export default ListingEditScreen;
