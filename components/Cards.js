import React from "react"; 
import { Text, View, StyleSheet } from 'react-native'; 
import { Card, Button, Title, Paragraph } from 'react-native-paper'; 

const CreateCard = () => { 
    return( 
        <View style={Styles.container}>
            <Card style={Styles.card}>
                <Card.Cover source={{ uri: 'https://cdn.pixabay.com/photo/2013/07/13/13/46/bicycle-161524_640.png'}} /> 
                <Card.Content> 
                    <Title style={Styles.title}>Bike</Title> 
                    <Paragraph style={Styles.paragraph}>A lightweight bike perfect for long-distance rides on smooth roads.</Paragraph> 
                </Card.Content> 
                <Card.Actions style={Styles.actions}>
                    <Button 
                        mode="outlined" 
                        labelStyle={Styles.buttonText} 
                        style={[Styles.fullButton, { borderRadius: 10 }]} // Adjust the borderRadius here
                    >
                        Swap Now
                    </Button>
                </Card.Actions> 
            </Card>

            <Card style={Styles.card}>
                <Card.Cover source={{ uri: 'https://th.bing.com/th/id/OIP.0SYoLkOLvg4VQy9a1YCw4AHaE8?rs=1&pid=ImgDetMain' }} /> 
                <Card.Content> 
                    <Title style={Styles.title}>iMac</Title> 
                    <Paragraph style={Styles.paragraph}>The latest iMac with stunning Retina display performance</Paragraph> 
                </Card.Content> 
                <Card.Actions style={Styles.actions}>
                    <Button 
                        mode="outlined" 
                        labelStyle={Styles.buttonText} 
                        style={[Styles.fullButton, { borderRadius: 10 }]} // Adjust the borderRadius here
                    >
                        Swap Now
                    </Button>
                </Card.Actions>
            </Card> 
        </View>
    ); 
} 

export default CreateCard; 

const Styles = StyleSheet.create({ 
    container: {
        backgroundColor: "white",
        flexDirection: "row",
        overflow: "visible",  // Make sure content is visible beyond container
        width: "100%",   // Container will be the width of the screen
        paddingHorizontal: 10, // Add padding between the screen edges
    },
    card: {
        backgroundColor: "white",
        shadowColor: "white",
        width: "50%", // Each card takes 50% of the screen width
        margin: "1%",
    },
    actions: {
        justifyContent: 'center', // Center the content in Card.Actions
        flexDirection: 'row', // Ensure the button is laid out in a row
        width: '100%', // Ensure actions take full width
    },
    fullButton: {
        flex: 1, // Make the button take all available space
        justifyContent: 'center', // Center text inside the button
        borderColor: "#2C35E0FF", // Set the border color
    },
    buttonText: {
        color: '#2C35E0FF',  // Change the text color inside the button
    },
    title: {
        fontWeight: "bold",
    },
    paragraph: {
        color: 'grey',
        marginBottom: 15,
    },
});
