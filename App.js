import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Login from './components/Login';
import BodyMetrics from './components/BodyMetrics';
import BodyData from './components/BodyData';
import DietGoal from './components/DietGoal';
import DietKind from './components/DietKind';
import FoodCategory1 from './components/FoodCategory1';
import FoodCategory2 from './components/FoodCategory2';
import FoodCategory3 from './components/FoodCategory3';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
        <Stack.Screen name="BodyMetrics" component={BodyMetrics} options={{ headerShown: false }} />
        <Stack.Screen name="BodyData" component={BodyData} options={{ headerShown: false }} />
        <Stack.Screen name="DietGoal" component={DietGoal} options={{ headerShown: false }} />
        <Stack.Screen name="DietKind" component={DietKind} options={{ headerShown: false }} />
        <Stack.Screen name="FoodCategory1" component={FoodCategory1} options={{ headerShown: false }} />
        <Stack.Screen name="FoodCategory2" component={FoodCategory2} options={{ headerShown: false }} />
        <Stack.Screen name="FoodCategory3" component={FoodCategory3} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
