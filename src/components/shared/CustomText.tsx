import { Colors } from "@/src/assets/utils/Constants";
import { CustomTextProps } from "@/src/assets/utils/types";
import React, { FC } from "react";
import { StyleSheet, Text } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";

const fontSizes = {
  h1: 24,
  h2: 22,
  h3: 20,
  h4: 18,
  h5: 16,
  h6: 14,
  h7: 12,
  h8: 10,
};




const CustomText: FC<CustomTextProps> = ({
  variant = "h6",
  style,
  fontSize,
  numberOfLines,
  children,
  fontFamily = "Regular", 
}) => {
  return (
    <Text
      numberOfLines={numberOfLines ? numberOfLines : undefined}
      style={[
        styles.text,
        style,
        {
          fontSize: RFValue(fontSize ? fontSize : fontSizes[variant]),
          fontFamily: fontFamily, 
        },
      ]}
    >
      {children}
    </Text>
  );
};

const styles = StyleSheet.create({
  text: {
    color: Colors.text,
    textAlign: "left",
  },
});

export default CustomText;