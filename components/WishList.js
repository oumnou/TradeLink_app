import React from "react"; 
import { FlatList, View, Text, Image, StyleSheet } from 'react-native'; 
import { Button, } from 'react-native-paper'; 
import {wishlistItems} from '../data/wishList';
import {wishList_Style} from './Compon_Styles'



const WishList = () => { 
    return( 
        <FlatList  
            data={wishlistItems}
            //keyExtractor={(item) => item.id.toString()} // Add this line
            renderItem={({ item }) => ( 
                <View style={wishList_Style.itemContainer}> 
                    {/* Title / Button */}
                    <View style={wishList_Style.textContainer}>
                        <Text style={wishList_Style.title}>{item.title}</Text> 
                        <Button mode="outlined" style={wishList_Style.button}> 
                            Remove
                        </Button>
                    </View>
                    
                  
                    <Image source={{ uri: item.image }} style={wishList_Style.image} /> 
                </View>
            )}
        />
    )
}



export default WishList; 
