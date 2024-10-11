import React from 'react';
import { View,Image, Text, StyleSheet, SafeAreaView,  } from 'react-native';
import { Button, Appbar } from 'react-native-paper'; // Import Button and any other components

import Icon from 'react-native-vector-icons/MaterialIcons';
import { styles , name_acc, first_container} from '../styles/style';


const ProfileScreen = () => {
  return (
    <SafeAreaView style={styles.container}>


      {/* Profile / Settings Icon */}
      <View style={name_acc.container}>
        <Text style={name_acc.text}>Profile</Text>
        <Icon
          name="settings"
          size={38}
          color="grey"
          onPress={() => navigation.navigate('Profile')} // Navigate to ProfileScreen
        />
      </View>

      {/* Image  / Info / Edit Button */}
    <View style={first_container.container}>
      <Image 
        style={first_container.tinyProfile}
        source={{
          uri: 'https://th.bing.com/th/id/OIP.PHR7xfYzI184H2Egw9yfMwHaEW?w=312&h=183&c=7&r=0&o=5&dpr=1.3&pid=1.7',
        }} 
      />

      <View style={first_container.textContainer}>
        <Text style={first_container.text} >
          Oumnou 
        </Text>
        <Text style={first_container.text} >
        Fashion enthusiast and seller of unique vintage clothing. 
        </Text>
        
      </View>
     
      <Button        
        onPress={() => console.log('Button pressed!')} 
        style={first_container.button}
      >Edit</Button>

    </View>

      </SafeAreaView>
  );
};

export default ProfileScreen;
