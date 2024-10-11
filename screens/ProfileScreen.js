import React from 'react';
import { View, Text,  SafeAreaView,  } from 'react-native';
import WishList from '../components/profile/WishList'
import Profile from '../components/profile/Profile'
import AccountDetails from '../components/profile/AccountDetails'
import { styles , name_acc,  line,} from '../styles/style';


const ProfileScreen = () => {
  return (
    <SafeAreaView style={styles.container}>

      <View style={name_acc.container}>
        <Text style={name_acc.text}>Profile</Text>
      </View>

      <Profile/>
      <View style={line.line}/>
      <Text style={styles.title}>Wishlist</Text>
      <WishList/> 
      <AccountDetails/>

    </SafeAreaView>
  );
};

export default ProfileScreen;
