import {
  Colors,
  IMG_NAME,
  screenHeight,
  screenWidth,
} from "@/src/assets/utils/Constants";
import CustomButton from "@/src/components/shared/CustomButton";
import CustomText from "@/src/components/shared/CustomText";
import PhoneInput from "@/src/components/shared/PhoneInput";
import { signin } from "@/src/service/authServices";
import { useWs } from "@/src/service/WSProvider";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import React, { useState } from "react";
import { Alert, Image, SafeAreaView, ScrollView, View } from "react-native";
const Auth = () => {
  const { updateAccessToken } = useWs();
  const [phone, setPhone] = useState("");

 const handleNext = async () => {
  if (!phone || phone.length < 10) {
    Alert.alert("Error", "Please enter a valid phone number");
    return;
  }

  signin({ payload: { role: "customer", phone }, updateAccessToken });
};

  return (
    <SafeAreaView
      style={{ flex: 1, backgroundColor: Colors.background, padding: 12 }}
    >
      <ScrollView showsVerticalScrollIndicator={false}>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Image
            source={IMG_NAME.LOGO_TRANSPRENT}
            style={{
              height: screenHeight * 0.1,
              width: screenWidth * 0.2,
              resizeMode: "contain",
            }}
          />
          <View style={{ flexDirection: "row", alignItems: "center", gap: 6 }}>
            <MaterialIcons name="help" size={18} color="grey" />
            <CustomText>Help</CustomText>
          </View>
        </View>

        <CustomText variant="h6" fontFamily="Medium" fontSize={20}>
          What's your number?
        </CustomText>

        <CustomText
          variant="h7"
          fontFamily="Regular"
          style={{ opacity: 0.7, marginTop: 4 }}
        >
          Enter your phone number to proceed
        </CustomText>

        <PhoneInput value={phone} onChangeText={setPhone} />
      </ScrollView>

      <View>
        <CustomText
          variant="h8"
          fontFamily="Regular"
          style={{
            opacity: 0.7,
            marginTop: 2,
            textAlign: "center",
            marginHorizontal: 20,
          }}
        >
          By continuing, you agree to the terms and privacy policy of Ride App
        </CustomText>
        <CustomButton title="Next" onPress={handleNext} />
      </View>
    </SafeAreaView>
  );
};

export default Auth;
