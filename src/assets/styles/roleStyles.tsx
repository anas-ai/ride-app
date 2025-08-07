import { StyleSheet } from "react-native";
import { Colors } from "../utils/Constants";

export const roleStyles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.background,
        alignItems: 'center',
    },
    logo: {
        resizeMode: 'contain',
        height: 60,
        marginTop: 120,
        marginBottom: 40
    },
    card: {
        width: '90%',
        marginTop:40,
        borderRadius: 15,
        borderWidth: 1,
        borderColor: '#ccc',
        backgroundColor: '#fff',
        marginVertical: 10,
        alignItems: 'center',
    },
    cardContent: {
        width: '100%',
        padding: 10,
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#333',
    },
    image: {
        height: 120,
        borderTopLeftRadius: 15,
        borderTopRightRadius: 15,
        width: '100%',
    },
    description: {
        fontSize: 14,
        color: '#666',
    },
})