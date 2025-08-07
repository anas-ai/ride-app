import { Platform, StyleSheet } from "react-native";
import { screenHeight, screenWidth } from "../utils/Constants";

export const rideStyles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff'
    },
    backButton: {
        position: "absolute",
        top: Platform.OS === 'android' ? 20 : 60,
        left: 10,
        backgroundColor: '#fff',
        borderRadius: 100,
        justifyContent: 'center',
        alignItems: 'center',
        shadowOffset: { width: 1, height: 1 },
        shadowOpacity: 0.2,
        shadowRadius: 4,
        shadowColor: '#000',
        elevation: 10,
        height: 40,
        width: 40
    },
    couponContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 15,
        width: "50%",
        left: -10,
        paddingHorizontal: 10,
        marginVertical: 10
    },
    icon: {
        width: 40,
        height: 40,
        resizeMode: 'contain'
    },
    bookingContainer: {
        shadowOffset: { width: 1, height: 1 },
        shadowOpacity: 0.2,
        shadowRadius: 4,
        shadowColor: '#000',
        elevation: 10,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10,
        backgroundColor: '#fff',
        position: "absolute",
        bottom: 0,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        width: '100%'
    },
    rideSelectionContainer: {
        borderTopLeftRadius: 20,
        height: screenHeight * 0.55,
        borderTopRightRadius: 20,
        shadowOffset: { width: 1, height: 1 },
        shadowOpacity: 0.2,
        shadowRadius: 4,
        shadowColor: '#000',
        elevation: 10,
        width: screenWidth,
        backgroundColor: '#fff',
        justifyContent: 'center',
        alignItems: 'center',
    },
    rideIcon: {
        width: 30,
        height: 30,
        resizeMode: 'contain'
    },
    scrollContainer: {
        paddingBottom: 160,
        width: screenWidth,
        borderColor: '#777',
        paddingHorizontal: 10,
    },
    rideOption: {
        width: '100%',
        padding: 15,
        borderRadius: 8,
        marginVertical: 5,
        backgroundColor: '#fff',
        borderWidth: 1,

    },
    rideDetails: {
        width: "70%"
    },
    priceContainer: {
        alignItems: 'flex-end'
    },
    fastestLabel: {
        color: 'green',
        fontSize: 10,
        marginLeft: 5
    },
    discountedPrice: {
        textDecorationLine: 'line-through',
        color: '#888',
        fontSize: 12
    },
    offerText: {
        textAlign: 'center',
    },
    offerContainer: {
        paddingVertical: 15,
        borderBottomWidth: 1,
        width: '100%',
        borderColor: '#ccc',
        marginBottom: 10
    },
    headerContainer: {
        borderBottomWidth: 2,
        borderColor: "#ddd",
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 10
    },
    pinIcon: {
        width: 20,
        height: 20,
        resizeMode: 'contain'
    },
    bottomButtonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 15,
        paddingVertical: 10,
        borderColor: '#ddd',
        backgroundColor: '#fff',
    },
    cancelButton: {
        flex: 1,
        marginRight: 10,
        backgroundColor: '#f2f2f2',
        paddingVertical: 12,
        borderRadius: 8,
        alignItems: 'center',
    },
    cancelButtonText: {
        color: '#a94442',
    },
    backButton2: {
        flex: 1,
        marginLeft: 10,
        backgroundColor: '#FFC107',
        paddingVertical: 12,
        borderRadius: 8,
        alignItems: 'center',
    },
    backButtonText: {
        color: '#000',
    },
    swipeableContaniner: {
        position: 'absolute',
        width: '100%',
        padding: 10,
        backgroundColor: '#fff',
        shadowOffset: { width: 1, height: 1 },
        shadowOpacity: 0.2,
        shadowRadius: 4,
        bottom: 0,
        paddingBottom: Platform.OS === 'ios' ? 30 : 10,
        shadowColor: '#000',
        elevation: 10,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
    },
    swipeableContaninerRider: {
        width: '100%',
        padding: 10,
        backgroundColor: '#fff',
        shadowOffset: { width: 1, height: 1 },
        shadowOpacity: 0.2,
        shadowRadius: 4,
        paddingBottom: Platform.OS === 'ios' ? 30 : 10,
        shadowColor: '#000',
        elevation: 10,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
    },
    swipeButtonContainer: {
        borderRadius: 2,
        height: 50,
        borderWidth: 0,
    },
    railStyles: {
        backgroundColor: 'rgba(255,255,255,0.6)',
        height: 50,
        borderRadius: 0,
        borderWidth: 0,
        justifyContent: 'center',
        alignItems: 'center',
    },
    titleStyles: {
        fontWeight: '700',
    },
    thumbIconStyles: {
        borderRadius: 5,
        height: 50,
        backgroundColor: 'red',
    },
})