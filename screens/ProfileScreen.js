import React from 'react';
import { View, Text,  SafeAreaView,  } from 'react-native';
import WishList from '../components/profile/WishList'
import Profile_ from '../components/profile/profile_'
import AccountDetails from '../components/profile/AccountDetails'
import { styles , name_acc,  line,} from '../styles/style';


const ProfileScreen = () => {
  return (
    <SafeAreaView style={styles.container_Profile}>
        <Profile_/>

      {/* <View style={name_acc.container}>
        <Text style={name_acc.text}>Profile</Text>
      </View> */}
      <View style={{margin:12, }}>

      {/* <View style={line.line}/> */}
      <Text style={styles.title}>Wishlist</Text>
      <WishList/> 
      {/* <AccountDetails/> */}
      </View>

      

    </SafeAreaView>
  );
};

export default ProfileScreen;
