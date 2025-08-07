import {
    IMG_NAME,
    screenHeight,
    screenWidth,
} from "@/src/assets/utils/Constants";
import { PhoneInputProps } from "@/src/assets/utils/types";
import React, { FC } from "react";
import { Image, StyleSheet, TextInput, View } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import CustomText from "./CustomText";

const PhoneInput: FC<PhoneInputProps> = ({
  value,
  onChangeText,
  onFocus,
  onBlur,
}) => {
  return (
    <View style={style.container}>
      <View style={style.flagContainer}>
        <Image source={IMG_NAME.INDAIN_FLAG} style={style.imgStyle} />
        <CustomText variant="h6" fontFamily="Bold">
          +91
        </CustomText>
      </View>
      <TextInput
        placeholder="0000000000"
        keyboardType="phone-pad"
        value={value}
        maxLength={10}
        onChangeText={onChangeText}
        onFocus={onFocus}
        onBlur={onBlur}
        placeholderTextColor={"#ccc"}
        style={style.inputStyle}
      />
    </View>
  );
};

export default PhoneInput;

const style = StyleSheet.create({
  container: {
    flexDirection: "row",
    gap: 6,
    marginVertical: 15,
    paddingHorizontal: 10,
    borderWidth: 1,
    borderColor: "#222",
    borderRadius: 8,
  },
  flagContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 4,
  },
  imgStyle: {
    resizeMode: "contain",
    height: screenHeight * 0.03,
    width: screenWidth * 0.09,
  },
  inputStyle: {
    fontSize: RFValue(13),
    fontFamily: "Regular",
    height: 45,
    width: "90%",
  },
});
