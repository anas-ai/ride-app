import { Dimensions } from "react-native";

export const screenHeight = Dimensions.get("screen").height;
export const screenWidth = Dimensions.get("screen").width;

export enum Colors {
  primary = "#76D54A",
  // primary = "#EDD228",
  background = "#fff",
  text = "#222",
  theme = "#CF551F",
  secondary = "#E5EBF5",
  tertiary = "#3C75BE",
  secondary_light = "#F6F7F9",
  iosColor = "#007AFF",
}

export const IMG_NAME = {
  LOGO_TRANSPRENT: require("../images/logo_t.png"),
  INDAIN_FLAG: require("../images/indianFlag.png"),
  CUSTOMER_IMG: require("../images/customer.jpg"),
  RIDER_IMG: require("../images/rider.jpg"),
};
