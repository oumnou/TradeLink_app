import React from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { HomeScreen } from './screens/HomeScreen';
import  ProfileScreen  from './screens/ProfileScreen';

// Stack and Tab Navigators
const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

// Home stack to wrap HomeScreen (in case you want to add more screens later)
const HomeStack = () => (
  <Stack.Navigator>
    <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} />
  </Stack.Navigator>
);

// Profile stack to wrap ProfileScreen
const ProfileStack = () => (
  <Stack.Navigator>
    <Stack.Screen name="Profile" component={ProfileScreen} options={{ headerShown: false }} />
  </Stack.Navigator>
);

const NotificationStack = () => (
  <Stack.Navigator>
    <Stack.Screen name="Profile" component={ProfileScreen} options={{ headerShown: false }} />
  </Stack.Navigator>
);



// Main App Component with Bottom Tab Navigation
const App = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ color, size }) => {
            let iconName;

            if (route.name === 'Home') {
              iconName = 'home-outline';
            }else if (route.name === 'Notification') {
              iconName = 'bell-outline';
            } else if (route.name === 'Profile') {
              iconName = 'account-outline';
            } else if (route.name === 'Profile') {
              iconName = 'chat-outline';
            } 

            return <Icon name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: '#6200ee',
          tabBarInactiveTintColor: 'gray',
        })}
      >
        {/* Define HomeTab */}
        <Tab.Screen name="Home" component={HomeStack} options={{ headerShown: false }} />
        {/* Define ProfileTab */}
        <Tab.Screen name="Notifications" component={ProfileStack} options={{ headerShown: false }} />
        <Tab.Screen name="Profile" component={ProfileStack} options={{ headerShown: false }} />
        <Tab.Screen name="Chat" component={ProfileStack} options={{ headerShown: false }} />

      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default App;
