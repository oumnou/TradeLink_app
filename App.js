import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { HomeScreen } from './HomeScreen';
import ProfileScreen from './ProfileScreen';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        {/* Define HomeScreen */}
        <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} 
        />
        {/* Define ProfileScreen */}
        <Stack.Screen name="Profile" component={ProfileScreen} options={{ headerShown: false }} 
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
