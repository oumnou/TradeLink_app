import React from "react"; 
import { Button,  Text,  } from 'react-native-paper'; 
import {  View, Image } from 'react-native';
import { profile_Style } from "../Compon_Styles";


const Profile = () => { 
    return( 
    <View style={profile_Style.container}>
        <Image 
            style={profile_Style.tinyProfile}
            source={{
            uri: 'https://th.bing.com/th/id/OIP.PHR7xfYzI184H2Egw9yfMwHaEW?w=312&h=183&c=7&r=0&o=5&dpr=1.3&pid=1.7',
            }} 
        />

        <View style={profile_Style.textContainer}>
            <Text style={[profile_Style.text, profile_Style.name ]} >
            Oumnou 
            </Text>
            <Text style={profile_Style.text} >
            Fashion enthusiast and seller of unique vintage clothing. 
            </Text>
            
        </View>
        
        <Button 
        icon="pencil"     
        textColor='white'  
            onPress={() => console.log('Button pressed!')} 
            style={profile_Style.button}
        >Edit</Button>

    </View>
    )
}

export default Profile; 


