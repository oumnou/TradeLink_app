import React from "react"; 
import { View,Text, } from 'react-native'; 
import { Button, } from 'react-native-paper'; 
import {AccountDetails_Styles } from '../Compon_Styles';


const AccountDetails = () => { 
    return( 
        <View style={AccountDetails_Styles.container}> 
        {/* Account Details Section */}
        <View style={AccountDetails_Styles.detailsContainer}>
            <Text style={AccountDetails_Styles.title}>Account Details</Text> 
            <Text style={AccountDetails_Styles.detailItem}>Email: user@example.com</Text>
            <Text style={AccountDetails_Styles.detailItem}>Phone: +1234567890</Text>
            <Text style={AccountDetails_Styles.detailItem}>Verification: Verified</Text>
        </View>
        
        {/* Edit Button */}
        <Button mode="contained" icon="pencil" onPress={() => console.log('Edit Pressed')} style={AccountDetails_Styles.editButton}>
            Edit
        </Button>
    </View>

)}


export default AccountDetails; 
