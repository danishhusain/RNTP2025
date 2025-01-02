import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import * as Screens from '../screens';
import { ApplicationStackParamList } from './navigationProps';



export const Stack = createNativeStackNavigator<ApplicationStackParamList>();

function AuthStack() {
  return (
    <>
      <Stack.Screen name="LogInScreen" component={Screens.LogInScreen} />
      <Stack.Screen name="TestScreen" component={Screens.TestScreen} />
    </>
  );
}

export default AuthStack;
