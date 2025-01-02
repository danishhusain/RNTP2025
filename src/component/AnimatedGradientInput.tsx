/* eslint-disable react-native/no-inline-styles */
import React, { useRef, useState } from 'react';
import {
  View,
  Text,
  Animated,
  TextInput,
  StyleSheet,
  TextInputProps,
  StyleProp,
  ViewStyle,
  TextStyle,
  TouchableOpacity,
  Modal,
  Dimensions,
  TouchableWithoutFeedback,
} from 'react-native';
import { PanGestureHandler } from 'react-native-gesture-handler';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import themeStore from '../store/themeStore';
import { getColors } from '../constants/styles/Theme';
import Responsive from '../constants/styles/Responsive';
import IconName from '../constants/IconName';

const { height } = Dimensions.get('window');

interface AnimatedGradientInputProps extends TextInputProps {
  label?: string;
  infoText?: {
    TITLE: string;
    DESCRIPTION: string;
  }; // Text for the modal
  infoDescription?: string; // Text for the modal
  infoDetails?: string; // Text for the modal
  inactiveColor?: string; // Single color when blurred
  borderRadius?: number; // Radius for border
  labelStyle?: StyleProp<TextStyle>; // Optional custom style for label
  containerStyle?: StyleProp<ViewStyle>; // Optional custom style for container
}

const AnimatedGradientInput: React.FC<AnimatedGradientInputProps> = ({
  label,
  placeholder = 'Enter value',
  value,
  onChangeText,
  infoText,
  inactiveColor = '#ccc',
  borderRadius = 20,
  labelStyle,
  containerStyle,
  ...rest
}) => {
  const [isFocused, setIsFocused] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const animatedScale = useRef(new Animated.Value(1)).current;
  const translateY = useRef(new Animated.Value(0)).current;

  const { theme } = themeStore();
  const COLORS = getColors(theme);
  const styles = createStyles(COLORS);


  const handleFocus = () => {
    setIsFocused(true);
    Animated.timing(animatedScale, {
      toValue: 1.02,
      duration: 200,
      useNativeDriver: true,
    }).start();
  };

  const handleBlur = () => {
    setIsFocused(false);
    Animated.timing(animatedScale, {
      toValue: 1,
      duration: 200,
      useNativeDriver: true,
    }).start();
  };

  const closeModal = () => {
    setModalVisible(false);
    Animated.timing(translateY, {
      toValue: 0,
      duration: 200,
      useNativeDriver: true,
    }).start();
  };

  const onGestureEvent = Animated.event(
    [{ nativeEvent: { translationY: translateY } }],
    { useNativeDriver: true }
  );

  const onGestureEnd = () => {
    if (translateY._value > 100) { closeModal(); } // Close modal if swiped down significantly
    else {
      Animated.timing(translateY, {
        toValue: 0,
        duration: 200,
        useNativeDriver: true,
      }).start();
    } // Snap back if not swiped far enough
  };

  return (
    <View style={[{ marginBottom: 10 }, containerStyle]}>
      {label && <Text style={[styles.label, labelStyle]}>{label}</Text>}
      <Animated.View style={{ transform: [{ scale: animatedScale }] }}>
        <View
          style={[
            styles.solidBorder,
            {
              borderRadius,
              borderColor: isFocused ? COLORS.appHighlight : inactiveColor,
              borderWidth: 2,
              flexDirection: 'row',
              alignItems: 'center',
            },
          ]}
        >
          <TextInput
            style={[
              styles.input,
              { borderRadius: borderRadius - 2, flex: 1, backgroundColor: COLORS.white },
            ]}
            value={value}
            onChangeText={onChangeText}
            onFocus={handleFocus}
            onBlur={handleBlur}
            placeholder={placeholder}
            {...rest}
          />
          <TouchableOpacity activeOpacity={1} style={styles.infoIcon}>
            <MaterialCommunityIcons name={IconName.INFO} size={24} color={COLORS.appHighlight} />
          </TouchableOpacity>
        </View>
      </Animated.View>

      {/* Bottom Modal */}
      <Modal
        visible={modalVisible}
        transparent={true}
        animationType="fade"
        onRequestClose={closeModal}
      >
        <TouchableWithoutFeedback onPress={closeModal}>
          <View style={styles.modalOverlay}>
            <PanGestureHandler onGestureEvent={onGestureEvent} onEnded={onGestureEnd}>
              <Animated.View
                style={[
                  styles.bottomModal,
                  {
                    transform: [{ translateY: translateY.interpolate({ inputRange: [-1, 0], outputRange: [0, 0] }) }],
                  },
                ]}
              >
                <View style={styles.modalHandle} />
                <Text style={styles.modalTextTitle}>{infoText?.TITLE}</Text>
                <Text style={styles.modalTextDescription}>{infoText?.DESCRIPTION}</Text>
              </Animated.View>
            </PanGestureHandler>
          </View>
        </TouchableWithoutFeedback>
      </Modal>
    </View>
  );
};

const createStyles = (COLORS: any) =>

  StyleSheet.create({
    solidBorder: {
      backgroundColor: COLORS.white,
    },
    input: {
      padding: Responsive.width(10),
      fontSize: Responsive.width(16),
      fontWeight: '700',
    },
    label: {
      fontSize: 14,
      marginBottom: Responsive.width(5),
      color: COLORS.textPrimary,
    },
    infoIcon: {
      padding: Responsive.width(5),
      marginRight: Responsive.width(5),
    },
    modalOverlay: {
      flex: 1,
      backgroundColor: COLORS.transparent,
      justifyContent: 'flex-end', // Align modal at the bottom
    },
    bottomModal: {
      height: height * 0.4, // 40% of the screen height
      backgroundColor: COLORS.defaultBackground,
      borderTopLeftRadius: Responsive.width(20),
      borderTopRightRadius: Responsive.width(20),
      padding: Responsive.width(20),
      alignItems: 'center',
    },
    modalHandle: {
      width: Responsive.width(50),
      height: Responsive.width(5),
      backgroundColor: COLORS.grey,
      borderRadius: Responsive.width(5),
      alignSelf: 'center',
      marginBottom: Responsive.width(10),
    },
    modalTextTitle: {
      fontSize: Responsive.width(18),
      marginBottom: Responsive.width(20),
      textAlign: 'center',
      color: COLORS.textPrimary,
      fontWeight: 'bold',
    },
    modalTextDescription: {
      fontSize: Responsive.width(16),
      marginBottom: Responsive.width(20),
      textAlign: 'center',
      color: COLORS.textPrimary,
    },
    modalTextDetails: {
      fontSize: Responsive.width(16),
      textAlign: 'center',
      justifyContent: 'center',   // Center text vertically inside the box
      alignItems: 'center',       // Center text horizontally inside the box
      textAlignVertical: 'center', // For Android (center text vertically)
      color: COLORS.textPrimary,


    },
    closeButton: {
      backgroundColor: COLORS.appBackground,
      paddingVertical: Responsive.width(10),
      paddingHorizontal: Responsive.width(2),
      borderRadius: Responsive.width(5),
    },

  });

export default AnimatedGradientInput;
