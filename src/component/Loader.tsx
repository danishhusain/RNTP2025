import React from 'react';
import { View, ActivityIndicator, StyleSheet } from 'react-native';
import { COLORS } from '../constants/styles/Theme';

interface LoaderProps {
  isLoading: boolean;
}

// Use a function declaration for the component
function Loader({ isLoading }: LoaderProps) {
  if (!isLoading) {return null;}

  return (
    <View style={styles.loaderContainer}>
      <ActivityIndicator size="large" color={COLORS.textPrimary} />
    </View>
  );
}

const styles = StyleSheet.create({
  loaderContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLORS.defaultBackground, // Semi-transparent white background
    flex: 1,
  },
});

export default React.memo(Loader);
