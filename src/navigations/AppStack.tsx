import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import * as Screens from '../screens';
import BottomTab from './BottomTab';
import { ApplicationStackParamList } from './navigationProps';


export const Stack = createNativeStackNavigator<ApplicationStackParamList>();
function AppStack() {

  return (
    <>

      {/* <Stack.Screen name="Onboarding" component={Screens.Onboarding} /> */}
      <Stack.Screen name="BottomTab" component={BottomTab} />
      <Stack.Screen name="HomeScreen" component={Screens.HomeScreen} />
      <Stack.Screen name="ProfileScreen" component={Screens.ProfileScreen} />
      <Stack.Screen name="SettingScreen" component={Screens.SettingScreen} />
    </>
  );
}

export default AppStack;
