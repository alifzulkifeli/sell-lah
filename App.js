import React, { useState } from "react";
import { View, ImageBackground, Text, StyleSheet } from "react-native";
import WelcomeScreen from "./app/screens/WelcomeScreen";
import ViewImageScreen from "./app/screens/ViewImageScreen";

import colors from "./app/config/colors";
import AppText from "./app/components/AppText";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import AppButton from "./app/components/AppButton";
import Card from "./app/components/Card";
import ListingDetailsScreen from "./app/screens/ListingDetailsScreen";
import MessagesScreen from "./app/screens/MessagesScreen";
import Icon from "./app/components/Icon";
import Screen from "./app/components/Screen";
import ListItem from "./app/components/ListItem";
import AccountScreen from "./app/screens/AccountScreen";
import ListingScreen from "./app/screens/ListingScreen";
import { TextInput, Switch } from "react-native-gesture-handler";
import AppTextInput from "./app/components/AppTextInput";
import AppPicker from "./app/components/AppPicker";
import LoginScreen from "./app/screens/LoginScreen";

export default function App() {
	const categories = [
		{ label: "watch", value: 1 },
		{ label: "cloth", value: 2 },
		{ label: "camera", value: 3 },
	];

	const [category, setCategory] = useState();

	return (
		//<WelcomeScreen />
		//<ListingDetailsScreen />
		//<ViewImageScreen />
		//<MessagesScreen />
		//<AccountScreen />
		//<ListingScreen />
		<LoginScreen />
	);
}
