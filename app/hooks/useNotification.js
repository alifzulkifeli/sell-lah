import { useEffect } from "react";

import { Notifications } from "expo";
import * as Permission from "expo-permissions";

import expoPushTokenApi from "../api/expoPushToken";

export default useNotification = (notificationListener) => {
	useEffect(() => {
		registerForPushNotification();
		if (notificationListener) Notifications.addListener(notificationListener);
	}, []);

	const registerForPushNotification = async () => {
		try {
			const permission = await Permission.askAsync(Permission.NOTIFICATIONS);
			if (!permission.granted) return;

			const token = await Notifications.getExpoPushTokenAsync();
			expoPushTokenApi.register(token);
		} catch (error) {
			console.log("error getting token", error);
		}
	};
};
