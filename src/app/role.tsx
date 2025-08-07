import { router } from "expo-router";
import React from "react";
import { Image, TouchableOpacity, View } from "react-native";
import {
  Colors,
  IMG_NAME,
  screenHeight,
  screenWidth,
} from "../assets/utils/Constants";
import CustomText from "../components/shared/CustomText";

const Role = () => {
  const handleCustomerPress = () => {
    router.navigate("/customer/auth");
  };

  const handleRiderPress = () => {
    router.navigate("/rider/auth");
  };

  const RoleData = [
    {
      id: "1",
      roleImg: IMG_NAME.CUSTOMER_IMG,
      title: "Customer",
      description: "Are you a customer?Order riders and deliveries easliy.",
      navigateScreen: handleCustomerPress,
    },
    {
      id: "2",
      roleImg: IMG_NAME.RIDER_IMG,
      title: "Rider",
      description: "Are you a rider?join us to drive and deliver.",
      navigateScreen: handleRiderPress,
    },
  ];

  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        backgroundColor: Colors.background,
      }}
    >
      <Image
        source={IMG_NAME.LOGO_TRANSPRENT}
        style={{
          height: screenHeight * 0.2,
          width: screenWidth * 0.4,
          resizeMode: "contain",
        }}
      />
      <CustomText
        variant="h5"
        fontFamily="Regular"
        style={{ color: "#333", fontSize: 18, fontWeight: "bold" }}
      >
        Choose your user type
      </CustomText>
      {RoleData.map((item, index) => (
        <TouchableOpacity
          key={index}
          onPress={item?.navigateScreen}
          activeOpacity={0.8}
          style={{
            width: "90%",
            borderWidth: 1,
            borderColor: "#ccc",
            borderRadius: 15,
            backgroundColor: "#fff",
            marginTop: 40,
          }}
        >
          <Image
            source={item?.roleImg}
            style={{
              width: "100%",
              height: 120,
              borderTopLeftRadius: 14,
              borderTopRightRadius: 14,
            }}
          />
          <View style={{ padding: 10, width: "100%" }}>
            <CustomText
              variant="h5"
              fontFamily="SemiBold"
              style={{ fontSize: 18, fontWeight: "bold", color: "#333" }}
            >
              {item?.title}
            </CustomText>
            <CustomText
              variant="h7"
              fontFamily="SemiBold"
              style={{ fontSize: 12, color: "#666" }}
            >
              {item?.description}
            </CustomText>
          </View>
        </TouchableOpacity>
      ))}
    </View>
  );
};

export default Role;
