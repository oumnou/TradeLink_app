import React from "react"; 
import { FlatList, } from 'react-native'; 
import { Card, Button, Title, Paragraph } from 'react-native-paper'; 
import { card_Style } from "../Compon_Styles";
import { items } from "../../data/items";

const CreateCard = () => { 
    return( 
        <FlatList 
            data={items}
            renderItem={({ item }) => (
                <Card style={card_Style.card}>
                    <Card.Cover source={{ uri: item.image }} /> 
                    <Card.Content> 
                        <Title style={card_Style.title}>{item.title}</Title> 
                        <Paragraph style={card_Style.paragraph} numberOfLines={3}>{item.description}</Paragraph> 
                    </Card.Content> 
                    <Card.Actions style={card_Style.actions}>
                        <Button 
                            mode="outlined" 
                            labelStyle={card_Style.buttonText} 
                            style={[card_Style.fullButton, { borderRadius: 4 }]} 
                        >Swap Now
                        </Button>
                    </Card.Actions> 
                </Card>
            )}
            keyExtractor={item => item.id.toString()}
            numColumns={2} // Display cards in two columns
            contentContainerStyle={card_Style.scrollContainer}
        />
    ); 
} 

export default CreateCard; 
