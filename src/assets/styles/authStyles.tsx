import { Platform, StyleSheet } from "react-native";
import { Colors, screenWidth } from "../utils/Constants";

export const authStyles = StyleSheet.create({
    logo: {
        width: 70,
        height: 70,
        resizeMode: 'contain'
    },
    container: {
        padding: 12,
        flex: 1,
        backgroundColor: Colors.background
    },
    flexRowGap: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 5
    },
    footerContainer: {
        position: 'absolute',
        bottom: Platform.OS === 'android' ? 20 : 30,
        width: screenWidth,
        padding: 10,
        justifyContent: 'center',
        alignItems: "center"
    }
})