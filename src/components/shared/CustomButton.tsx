import { Colors } from "@/src/assets/utils/Constants";
import { CustomButtonProps } from "@/src/assets/utils/types";
import React, { FC } from "react";
import { ActivityIndicator, TouchableOpacity } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import CustomText from "./CustomText";

const CustomButton: FC<CustomButtonProps> = ({
  title,
  loading,
  disabled,
  onPress,
}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      activeOpacity={0.8}
      style={{
        alignItems: "center",
        width:"100%",
        padding:10,
        height:45,
        borderRadius:8,
        justifyContent: "center",
        backgroundColor: disabled ? Colors.secondary : Colors.primary,
        marginVertical:10
      }}
    >
      {loading ? (
        <ActivityIndicator color={Colors.text} size="small" />
      ) : (
        <CustomText
          fontFamily="SemiBold"
          style={{
            fontSize: RFValue(12),
            color: disabled ? "#fff" : Colors.text,
            marginHorizontal:10
          }}
        >
          {title}
        </CustomText>
      )}
    </TouchableOpacity>
  );
};

export default CustomButton;
