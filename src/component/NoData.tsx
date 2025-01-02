import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Responsive from '../constants/styles/Responsive';
import { COLORS } from '../constants/styles/Theme';

interface NoDataProps {
  isDataAvailable?: boolean;
  message?: string;
}

// Function declaration for the NoData component
function NoData({ isDataAvailable = false, message = 'No data available' }: NoDataProps) {
  if (isDataAvailable) {return null;}

  return (
    <View style={styles.container}>
      <Text style={styles.text}>{message}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    backgroundColor: COLORS.defaultBackground, // Semi-transparent white background
  },
  text: {
    fontSize: Responsive.font(20),
    color: COLORS.textPrimary,
    fontWeight: '700',
  },
});

export default React.memo(NoData);
