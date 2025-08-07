import { StyleSheet } from "react-native";
import { Colors, screenHeight } from "../utils/Constants";

export const riderStyles = StyleSheet.create({
    headerContainer: {
        backgroundColor: Colors.primary,
        padding: 10,
    },
    emptyImage: {
        width: 120,
        height: 120,
        resizeMode: "contain",
        transform: [{ scaleX: -1 }],
        marginVertical: 15
    },
    toggleContainer: {
        paddingVertical: 0,
        paddingHorizontal: 15,
        borderWidth: 1,
        borderRadius: 100,
        flexDirection: 'row',
        borderColor: "#888",
        alignItems: 'center',
        gap: 5
    },
    emptyContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
        paddingTop: screenHeight * 0.2
    },
    icon: {
        width: 40,
        height: 40,
        resizeMode: 'contain'
    },
    earningContainer: {
        padding: 10,
        paddingVertical: 15,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: "#888"
    }
})

export const orderStyles = StyleSheet.create({
    flexRowBase: {
        gap: 10,
        flexDirection: 'row',
        alignItems: 'baseline',
        marginVertical: 5
    },

    continuousLine: {
        width: 2,
        height: '100%',
        position: "absolute",
        top: 12,
        backgroundColor: Colors.secondary,
        alignSelf: 'center',
        marginLeft: 2
    },
    borderLine: {
        borderLeftWidth: 1,
        paddingLeft: 12,
        borderLeftColor: Colors.secondary
    },
    label: {
        opacity: 0.4,
        marginVertical: 2
    },
    infoText: {
        width: '96%',
    },
    dropHollowCircle: {
        borderWidth: 2,
        top: 1,
        borderColor: "#F16485",
        padding: 3,
        borderRadius: 100
    },
    pickupHollowCircle: {
        borderWidth: 2,
        top: 1,
        borderColor: "#158A58",
        padding: 3,
        borderRadius: 100
    },
    container: {
        padding: 10,
        borderRadius: 10,
        backgroundColor: Colors.background,
        shadowOffset: { width: 1, height: 1 },
        shadowOpacity: 0.2,
        shadowRadius: 4,
        shadowColor: '#000',
        elevation: 10,
        margin: 10
    },
    flexRowEnd: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-end',
        marginTop: 10,
        gap: 10
    },
    rideIcon: {
        width: 30,
        height: 30,
        resizeMode: "contain"
    },
    locationsContainer: {
        paddingVertical: 10,
        borderTopWidth: 1,
        borderTopColor: Colors.secondary,
        marginTop: 10
    }
})
