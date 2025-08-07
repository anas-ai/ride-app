import axios from "axios";
import { tokenStorage } from "../store/stroage";
import { logout } from "./authServices";
import { BASE_URL } from "./config";


export const refresh_tokens = async()=>{
    try {
        const refreshTokens = tokenStorage.getString("refresh_token");
        const response = await axios.post(`${BASE_URL}/auth/refresh-token`,{
            refresh_token:refreshTokens
        });

        const new_access_token = response.data.access_token;
        const new_refresh_token = response.data.refresh_token;

        tokenStorage.set("access_token",new_access_token)
        tokenStorage.set("refresh_token",new_refresh_token)
        return new_access_token
    } catch (error) {
        console.log("REFRESH TOKEN ERROR");
        tokenStorage.clearAll();
        logout()
    }
}


export const appAxios = axios.create({
  baseURL: BASE_URL,
});

appAxios.interceptors.response.use(
  (response) => response,
  async (error) => {
    if (error.response && error.response.status === 401) {
      try {
        const newAccessToken = await refresh_tokens();
        if (newAccessToken) {
          error.confing.headers.Authorization = `Bearer ${newAccessToken}`;
          return axios(error.config);
        }
      } catch (error) {
        console.log("Error refreshing token");
      }
    }
    return Promise.reject(error);
  }
);
