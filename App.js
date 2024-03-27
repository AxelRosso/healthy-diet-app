import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Login from './components/Login';
import BodyMetrics from './components/BodyMetrics';
import BodyData from './components/BodyData';
import DietKind from './components/DietKind'; // Importar el componente DietKind

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
        <Stack.Screen name="BodyMetrics" component={BodyMetrics} options={{ headerShown: false }} />
        <Stack.Screen name="BodyData" component={BodyData} options={{ headerShown: false }} />
        <Stack.Screen name="DietKind" component={DietKind} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
