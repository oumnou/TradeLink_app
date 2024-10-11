import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';

const Profile_ = () => {
  return (
    <View style={styles.container}>
      <View style={styles.card}>
        {/* Background Image */}
        <Image
          source={{ uri: 'https://images.pexels.com/photos/907485/pexels-photo-907485.jpeg?auto=compress&cs=tinysrgb&w=600' }} // Replace with your background image
          style={styles.backgroundImage}
        />
        
        {/* Profile Image */}
        <Image
          source={{ uri: 'https://th.bing.com/th/id/OIP.PHR7xfYzI184H2Egw9yfMwHaEW?w=312&h=183&c=7&r=0&o=5&dpr=1.3&pid=1.7',
        }} // Replace with your profile image
          style={styles.profileImage}
        />

        {/* Name and Title */}
        <Text style={styles.name}>Oumnou Marben</Text>
        <Text style={styles.title}>Lovers</Text>

        {/* Bio */}
        <Text style={styles.bio}>
          Bio: Ea dolore officia ad ipsum consequat voluptate houts proident enim occaecat.
        </Text>

        {/* Contact Button */}
        <TouchableOpacity style={styles.contactButton}>
          <Text style={styles.contactButtonText}>Contact</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
 
  backgroundImage: {
    width: '100%',
    height: 120,
    position: 'absolute',
    top: 0,
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    borderWidth: 3,
    borderColor: '#fff',
    marginTop: 60, // Space below the background image
    alignSelf: 'center',
  },
  name: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 10,
    textAlign: 'center',
  },
  title: {
    fontSize: 16,
    color: '#888',
    textAlign: 'center',
  },
  bio: {
    margin: 16,
    textAlign: 'center',
    color: '#555',
  },
  contactButton: {
    backgroundColor: '#ff4081',
    borderRadius: 20,
    paddingVertical: 10,
    paddingHorizontal: 20,
    alignSelf: 'center',
    marginBottom: 16,
  },
  contactButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});

export default Profile_;
