import React from 'react';
import {
  StyleSheet,
  Text,
  ActivityIndicator,
  Pressable,
  PressableProps,
  ViewStyle,
} from 'react-native';

import Responsive from '../constants/styles/Responsive';
import { COLORS } from '../constants/styles/Theme';

interface CustomButtonProps extends PressableProps {
  label: string
  style?: ViewStyle
  textStyle?: object
  isLoading?: boolean
  size?: number
}

const Button: React.FC<CustomButtonProps> = ({
  label,
  isLoading,
  style,
  textStyle,
  size = 25,
  ...props
}) => (
  <Pressable style={[styles.btnStyle, style]} {...props}>
    {isLoading ? (
      <ActivityIndicator color={COLORS.white} size={size} />
    ) : (
      <Text
        style={[
          {
            color: COLORS.textPrimary,
            ...textStyle,
          },
          styles.title,
        ]}>
        {label}
      </Text>
    )}
  </Pressable>
);

export default React.memo(Button);
const styles = StyleSheet.create({
  btnStyle: {
    height: Responsive.width(52),
    backgroundColor: COLORS.appHighlight,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: Responsive.width(8),
  },
  title: {
    fontSize: Responsive.font(20),
    fontWeight: '700',
    color: COLORS.white,
  },
});
