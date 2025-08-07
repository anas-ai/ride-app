import axios from "axios";
import { Alert } from "react-native";
import { resetAndNavigate } from "../assets/utils/Helpers";
import { useRiderStore } from "../store/riderStore";
import { tokenStorage } from "../store/stroage";
import { useUserStore } from "../store/userStore";
import { BASE_URL } from "./config";

export const signin = async ({
  payload,
  updateAccessToken,
}: {
  payload: {
    role: "customer" | "rider";
    phone: string;
  };
  updateAccessToken: () => void;
}) => {
  const { setUser } = useUserStore.getState();
  const { setUser: setRiderUser } = useRiderStore.getState();
try {
  const res = await axios.post(`${BASE_URL}/auth/signin`, payload);

  console.log("Response Data:", res.data); // Log this once

  if (res.data.user.role === "customer") {
    setUser(res.data.user);
    resetAndNavigate("/customer/home");
  } else {
    setRiderUser(res.data.user);
    resetAndNavigate("/rider/home");
  }

  tokenStorage.set("access_token", res.data.access_token);
  tokenStorage.set("refresh_token", res.data.refresh_token);

  console.log("Access Token:", res.data.access_token);
  console.log("Refresh Token:", res.data.refresh_token);

  updateAccessToken();
} catch (error: any) {
  Alert.alert("Oh! Dang there was an error");
  if (
    error &&
    error.response &&
    error.response.data &&
    error.response.data.msg
  ) {
    console.log("Error:", error.response.data.msg);
  } else {
    console.log("Error:", "Error signing in");
  }
}

};


export const logout = async (disconnect?: () => void) => {
  if (disconnect) {
    disconnect();
  }
  const { clearData } = useUserStore.getState();
  const { clearRiderData } = useRiderStore.getState();

  tokenStorage.clearAll();
  clearData();
  clearRiderData();
  resetAndNavigate("/role");
};
