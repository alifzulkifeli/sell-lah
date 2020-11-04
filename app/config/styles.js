import { Platform } from "react-native";
import colors from "./colors";

export default {
	colors,
	text: {
		...Platform.select({
			ios: { fontFamily: "Avenir" },
			android: { fontFamily: "Roboto" },
		}),
		fontSize: 18,
		color: colors.dark,
		width: "100%",
	},
};
