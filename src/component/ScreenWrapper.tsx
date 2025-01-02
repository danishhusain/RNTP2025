import React from 'react';
import { View, StyleSheet, StatusBar, Platform, SafeAreaView, ScrollView, ViewStyle } from 'react-native';

interface ScreenWrapperProps {
  children: React.ReactNode; // The content of the screen
  statusBarStyle?: 'light-content' | 'dark-content'; // StatusBar style
  statusBarBackgroundColor?: string; // StatusBar background color for Android
  safeArea?: boolean; // Use SafeAreaView for iOS
  scrollable?: boolean; // Wrap children in ScrollView if needed
  containerStyle?: ViewStyle; // Additional container styling
}

const ScreenWrapper: React.FC<ScreenWrapperProps> = ({
  children,
  statusBarStyle = 'dark-content',
  statusBarBackgroundColor = '#fff',
  safeArea = true,
  scrollable = false,
  containerStyle = {},
}) => {
  const Wrapper = safeArea ? SafeAreaView : View;

  return (
    <View style={[styles.container, containerStyle]}>
      {/* Platform-specific StatusBar customization */}
      {Platform.OS === 'android' && (
        <StatusBar
          barStyle={statusBarStyle}
          backgroundColor={statusBarBackgroundColor}
        />
      )}
      {Platform.OS === 'ios' && (
        <StatusBar
          barStyle={statusBarStyle}
          translucent
        />
      )}

      {/* Content inside ScrollView or normal view */}
      <Wrapper style={styles.wrapper}>
        {scrollable ? <ScrollView>{children}</ScrollView> : children}
      </Wrapper>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff', // Default background color
  },
  wrapper: {
    flex: 1,
  },
});

export default ScreenWrapper;
