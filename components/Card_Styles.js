import { StyleSheet } from 'react-native';

export const Styles = StyleSheet.create({
    
    container: {
        backgroundColor: "white",
        flexDirection: "column", // Stack rows vertically
        overflow: "visible",
        width: "100%",
        marginBottom:112
    },
    row: {
        flexDirection: 'row', // Arrange items in a row
        justifyContent: 'space-between', // Space items evenly
    },
    card: {
        marginBottom: 17, // Space between rows
        backgroundColor: "white",
        shadowColor: "#000", 
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.5,
        elevation: 5,
        width: "48%", // Each card takes slightly less than 50% of the screen width
        margin: "1%", 
    },
    actions: {
        justifyContent: 'center', 
        flexDirection: 'row',
        width: '100%',
    },
    fullButton: {
        flex: 1, 
        justifyContent: 'center', 
        borderColor: "#2C35E0FF", 
    },
    buttonText: {
        color: '#2C35E0FF', 
    },
    title: {
        fontWeight: "bold",
    },
    paragraph: {
        color: 'grey',
        marginBottom: 15,
    },
});
