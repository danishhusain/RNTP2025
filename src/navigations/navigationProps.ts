import type { NativeStackScreenProps } from '@react-navigation/native-stack';

export type ApplicationStackParamList = {
  BottomTab: undefined; // Ensure "BottomTab" is defined
  HomeScreen: undefined;
  ProfileScreen: undefined;
  SettingScreen: undefined;
  LogInScreen: undefined;
  TestScreen: undefined;
};

export type ApplicationScreenProps = NativeStackScreenProps<ApplicationStackParamList>;
