
import { StyleSheet } from "react-native";
import { Colors } from "../utils/Constants";

export const commonStyles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: Colors.background
    },
    containerBlack: {
        flex: 1,
        backgroundColor: Colors.background
    },
    flexRowBetween: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    flexRowGap: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 15,
    },
    flexRow: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    center: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    lightText: {
        opacity: 0.7,
        marginTop: 2
    }
})