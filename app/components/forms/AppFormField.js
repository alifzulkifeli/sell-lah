import React from "react";
import AppTextInput from "../AppTextInput";
import { useFormikContext } from "formik";
import ErrorMessage from "./ErrorMessage";
import { Text } from "react-native";

const AppFormField = ({ name, width, ...otherProps }) => {
	const {
		setFieldTouched,
		setFieldValue,
		handleChange,
		errors,
		touched,
		values,
	} = useFormikContext();

	return (
		<>
			<AppTextInput
				// autoCapitalize="none"
				// autoCorrect={false}
				// icon="email"
				// keyboardType="email-address"
				onChangeText={handleChange(name)}
				onBlur={(text) => setFieldTouched(name, text)}
				value={values[name]}
				width={width}
				// placeholder="Email"
				// textContentType="emailAdress"
				{...otherProps}
			/>
			<ErrorMessage error={errors[name]} visible={touched[name]} />
		</>
	);
};

export default AppFormField;
