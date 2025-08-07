import { useFonts } from "expo-font";
import { jwtDecode } from "jwt-decode";
import React, { useEffect, useState } from "react";
import {
  ActivityIndicator,
  Alert,
  Image,
  StyleSheet,
  View,
} from "react-native";
import {
  Colors,
  IMG_NAME,
  screenHeight,
  screenWidth,
} from "../assets/utils/Constants";
import { resetAndNavigate } from "../assets/utils/Helpers";
import CustomText from "../components/shared/CustomText";
import { refresh_tokens } from "../service/apiIntersepter";
import { logout } from "../service/authServices";
import { tokenStorage } from "../store/stroage";
import { useUserStore } from "../store/userStore";

interface DecodedToken {
  exp: number;
}

const Main = () => {
  const [loaded] = useFonts({
    Bold: require("../assets/fonts/NotoSans-Bold.ttf"),
    Regular: require("../assets/fonts/NotoSans-Regular.ttf"),
    Medium: require("../assets/fonts/NotoSans-Medium.ttf"),
    Light: require("../assets/fonts/NotoSans-Light.ttf"),
    SemiBold: require("../assets/fonts/NotoSans-SemiBold.ttf"),
  });

  const { user } = useUserStore();
  const [hasNavigated, setNavigated] = useState(false);

  const tokenCheck = () => {
    const access_token = tokenStorage.getString("access_token") as string;
    const refresh_token = tokenStorage.getString("refresh_token") as string;

    if (access_token) {
      const decodedAccessToken = jwtDecode<DecodedToken>(access_token);
      const decodedRefreshToken = jwtDecode<DecodedToken>(refresh_token);

      const currentTime = Date.now() / 100;
      console.log("currentTime", currentTime)
      if (decodedAccessToken?.exp < currentTime) {
        resetAndNavigate("/role");
        logout();
        Alert.alert("Session Expired , please login again");
      }

      if (decodedAccessToken?.exp < currentTime) {
        try {
          refresh_tokens();
        } catch (error) {
          console.log(error);
          Alert.alert("Refresh Token Error");
        }
      }

      if (user) {
        resetAndNavigate("/customer/home");
      } else {
        resetAndNavigate("/rider/home");
      }
      return;
    }

    resetAndNavigate("/role");
  };

  useEffect(() => {
    if (loaded && !hasNavigated) {
      const timeoutId = setTimeout(() => {
        tokenCheck();
        setNavigated(true);
      }, 1000);
      return () => clearTimeout(timeoutId);
    }
  }, [loaded, hasNavigated]);

  if (!loaded) {
    return (
      <View style={Style.loaderContainer}>
        <ActivityIndicator size="large" color={Colors.primary} />
      </View>
    );
  }

  return (
    <View style={Style.mainContainer}>
      <Image source={IMG_NAME.LOGO_TRANSPRENT} style={Style.ImgStyle} />

      <View style={Style.splashStyles}>
        <CustomText variant="h5" fontFamily="Medium">
          Made in India
        </CustomText>
        <Image source={IMG_NAME.INDAIN_FLAG} style={Style.flagStyle} />
      </View>
    </View>
  );
};

const Style = StyleSheet.create({
  mainContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: Colors.background,
  },
  loaderContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: Colors.background,
  },

  splashStyles: {
    position: "absolute",
    bottom: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 10,
  },
  ImgStyle: {
    height: screenHeight * 0.4,
    width: screenWidth * 0.4,
    resizeMode: "contain",
  },
  flagStyle: {
    resizeMode: "contain",
    height: screenHeight * 0.07,
    width: screenWidth * 0.07,
  },
});

export default Main;
