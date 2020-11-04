import Constants from "expo-constants";

const settings = {
	dev: {
		apiUrl: "https://backend-jombeli.herokuapp.com/api/",
	},
	staging: {
		apiUrl: "https://backend-jombeli.herokuapp.com/api/",
	},
	production: {
		apiUrl: "https://backend-jombeli.herokuapp.com/api/",
	},
};

const getCurrentSetting = () => {
	if (__DEV__) return settings.dev;
	if (Constants.manifest.releaseChannel === "staging") return settings.staging;
	return settings.production;
};

export default getCurrentSetting();
