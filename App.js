import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Login from './components/Login';
import BodyMetrics from './components/BodyMetrics';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="BodyMetrics" component={BodyMetrics} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
