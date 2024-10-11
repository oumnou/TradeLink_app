import React from "react"; 
import { FlatList, } from 'react-native'; 
import { Card, Button, Title, Paragraph } from 'react-native-paper'; 
import { cardStyles } from "./Compon_Styles";
import { items } from "../data/items";

const CreateCard = () => { 
    return( 
        <FlatList 
            data={items}
            renderItem={({ item }) => (
                <Card style={cardStyles.card}>
                    <Card.Cover source={{ uri: item.image }} /> 
                    <Card.Content> 
                        <Title style={cardStyles.title}>{item.title}</Title> 
                        <Paragraph style={cardStyles.paragraph} numberOfLines={3}>{item.description}</Paragraph> 
                    </Card.Content> 
                    <Card.Actions style={cardStyles.actions}>
                        <Button 
                            mode="outlined" 
                            labelStyle={cardStyles.buttonText} 
                            style={[cardStyles.fullButton, { borderRadius: 4 }]} 
                        >
                            Swap Now
                        </Button>
                    </Card.Actions> 
                </Card>
            )}
            keyExtractor={item => item.id.toString()}
            numColumns={2} // Display cards in two columns
            contentContainerStyle={cardStyles.scrollContainer}
        />
    ); 
} 

export default CreateCard; 
