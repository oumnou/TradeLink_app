import React from "react"; 
import { FlatList, View } from 'react-native'; 
import { Card, Button, Title, Paragraph } from 'react-native-paper'; 
import { Styles } from "./Card_Styles";
import { items } from "./items";

const CreateCard = () => { 
    return( 
        <FlatList 
            data={items}
            renderItem={({ item }) => (
                <Card style={Styles.card}>
                    <Card.Cover source={{ uri: item.image }} /> 
                    <Card.Content> 
                        <Title style={Styles.title}>{item.title}</Title> 
                        <Paragraph style={Styles.paragraph} numberOfLines={3}>{item.description}</Paragraph> 
                    </Card.Content> 
                    <Card.Actions style={Styles.actions}>
                        <Button 
                            mode="outlined" 
                            labelStyle={Styles.buttonText} 
                            style={[Styles.fullButton, { borderRadius: 4 }]} 
                        >
                            Swap Now
                        </Button>
                    </Card.Actions> 
                </Card>
            )}
            keyExtractor={item => item.id.toString()}
            numColumns={2} // Display cards in two columns
            contentContainerStyle={Styles.scrollContainer}
        />
    ); 
} 

export default CreateCard; 
