import { StyleSheet } from "react-native";
import { Colors } from "react-native/Libraries/NewAppScreen";

export const mapStyles = StyleSheet.create({
    container: {
        flex: 1,
    },
    gpsButton: {
        position: 'absolute',
        bottom: 10,
        right: 10,
        padding: 5,
        borderRadius: 100,
        backgroundColor: '#fff',
        shadowOffset: { width: 1, height: 1 },
        shadowOpacity: 0.2,
        shadowRadius: 4,
        shadowColor: '#000',
        elevation: 10
    },
    gpsLiveButton: {
        position: 'absolute',
        bottom: 10,
        gap: 5,
        right: '33%',
        paddingHorizontal:10,
        flexDirection: 'row',
        alignItems: 'center',
        padding: 5,
        borderRadius: 100,
        backgroundColor: Colors.primary,
        shadowOffset: { width: 1, height: 1 },
        shadowOpacity: 0.2,
        shadowRadius: 4,
        shadowColor: '#000',
        elevation: 10
    },
    outOfRange: {
        position: "absolute",
        top: '20%',
        left: '45%',
        padding: 12,
        backgroundColor: '#fff',
        borderRadius: 100,
        shadowOffset: { width: 1, height: 1 },
        shadowOpacity: 0.2,
        shadowRadius: 4,
        shadowColor: '#000',
        elevation: 10,
        justifyContent: 'center',
        alignItems: 'center'

    },
    centerMarkerContainer: {
        left: '50%',
        marginLeft: -15,
        marginTop: -5,
        // zIndex:1,
        position: 'absolute',
        top: '50%'
    },
    marker: {
        resizeMode: 'contain',
        height: 30,
        width: 30
    }
})