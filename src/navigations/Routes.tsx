import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import AppStack from './AppStack';
import AuthStack from './AuthStack';
import userStore from '../store/userStore';

const Stack = createNativeStackNavigator();

function Routes() {
  // const { authToken } = userStore();



  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        {AppStack() }
        {/* {AuthStack() } */}
        {/* {authToken ? AppStack() : AuthStack()} */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Routes;
