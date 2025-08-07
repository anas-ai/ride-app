import { Platform } from "react-native";

export const BASE_URL =
  Platform.OS === "ios" ? "http://localhost:3000" : "http://10.0.2.2:3000";
export const SOCKET_URL =
  Platform.OS === "ios" ? "ws://localhost:3000" : "ws://10.0.2.2:3000";

// USE YOUR NETWORK IP OR HOSTED URL

//   export const BASE_URL = 'http://192.168.29.236:3000';
// export const SOCKET_URL = Platform.OS === 'ios'? 'ws://192.168.29.236:3000':'http://10.0.2.2:3000'

