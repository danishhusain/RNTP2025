import React from 'react';
import { StatusBar, StyleSheet, View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import * as Screens from '../screens/index';
import Responsive from '../constants/styles/Responsive';
import { COLORS } from '../constants/styles/Theme';
import IconName from '../constants/IconName';
import BottomTabName from '../constants/BottomTabName';

const Tab = createBottomTabNavigator();

export default function BottomTab() {
  const _renderIcon = (routeName: string, focused: boolean) => {
    let icon = '';

    switch (routeName) {
      case 'Home':
        icon = IconName.HOME;
        break;
      case 'ProfileScreen':
        icon = IconName.USER;
        break;
      default:
        icon = IconName.HOME; // Default icon
    }

    return (
      <View style={[styles.iconContainer, {}]}>
        <MaterialCommunityIcons
          name={icon}
          color={focused ? COLORS.white : COLORS.black}
          size={Responsive.width(25)}
        />
      </View>
    );
  };

  return (
    <>
      <StatusBar
        barStyle="light-content"
        backgroundColor={COLORS.appBackground}
      />
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused }) => _renderIcon(route.name, focused),
          headerShown: false,
          tabBarStyle: styles.tabBar,
          tabBarActiveTintColor: COLORS.white,
          tabBarInactiveTintColor: COLORS.black,
        })}
      >
        <Tab.Screen name={BottomTabName.HOME} component={Screens.HomeScreen} />
        <Tab.Screen name={BottomTabName.PROFILE} component={Screens.ProfileScreen} />
        <Tab.Screen name={BottomTabName.TEST} component={Screens.TestScreen} />
      </Tab.Navigator>
    </>
  );
}

const styles = StyleSheet.create({
  tabBar: {
    backgroundColor: COLORS.appBackground,
    justifyContent: 'center',
  },
  iconContainer: {
  },
});


