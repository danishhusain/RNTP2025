import React, { useRef, useState } from 'react';
import {
  Modal,
  Text,
  View,
  StyleSheet,
  TouchableWithoutFeedback,
  Animated,
} from 'react-native';
import { PanGestureHandler } from 'react-native-gesture-handler';
import Responsive from '../constants/styles/Responsive';
import themeStore from '../store/themeStore';
import { getColors } from '../constants/styles/Theme';


const BottomModal = ({
  modalVisible,
  closeModal,
  infoText,
//   primaryColor = '#6200ea',
  backgroundColor = 'white',
  overlayColor = 'rgba(0, 0, 0, 0.5)',
}) => {
  const translateY = useRef(new Animated.Value(Responsive.screenHeight())).current;
  const [contentHeight, setContentHeight] = useState(0);
  const { theme } = themeStore();
  const COLORS = getColors(theme);


  // Slide-in animation
  const openModal = () => {
    Animated.timing(translateY, {
      toValue: 0,
      duration: 300,
      useNativeDriver: true,
    }).start();
  };

  // Slide-out animation
  const closeAnimatedModal = () => {
    Animated.timing(translateY, {
      toValue: Responsive.screenHeight(),
      duration: 300,
      useNativeDriver: true,
    }).start(() => closeModal());
  };

  // Trigger animation when modal is visible
  React.useEffect(() => {
    if (modalVisible) {
      openModal();
    }
  }, [modalVisible]);

  return (
    <Modal
      visible={modalVisible}
      transparent={true}
      animationType="none"
      onRequestClose={closeAnimatedModal}
    >
      <TouchableWithoutFeedback onPress={closeAnimatedModal}>
        <View style={[styles.modalOverlay, { backgroundColor: overlayColor }]}>
          <PanGestureHandler onEnded={closeAnimatedModal}>
            <Animated.View
              style={[
                styles.bottomModal,
                {
                  backgroundColor,
                  transform: [{ translateY }],
                  maxHeight: Responsive.screenHeight() * 0.8,
                },
              ]}
            >
              <View
                onLayout={(event) => {
                  const { height } = event.nativeEvent.layout;
                  setContentHeight(height);
                }}
              >
                <View style={[styles.modalHandle, { backgroundColor: COLORS.appBackground }]} />
                <Text style={[styles.modalTextTitle, { color: COLORS.appBackground  }]}>
                  {infoText?.TITLE}
                </Text>
                <Text style={styles.modalTextDescription}>
                  {infoText?.DESCRIPTION}
                </Text>
              </View>
            </Animated.View>
          </PanGestureHandler>
        </View>
      </TouchableWithoutFeedback>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalOverlay: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  bottomModal: {
    width: '100%',
    borderTopLeftRadius: Responsive.width(15),
    borderTopRightRadius: Responsive.width(15),
    paddingHorizontal: Responsive.width(20),
    paddingVertical:Responsive.width(10),
    elevation: Responsive.width(5),
    shadowColor: '#000',
    shadowOffset: { width: 0, height: -2 },
    shadowOpacity: 0.2,
    shadowRadius: Responsive.width(10),
  },
  modalHandle: {
    width: Responsive.width(60),
    height: Responsive.width(5),
    borderRadius: Responsive.width(3),
    alignSelf: 'center',
    marginBottom: Responsive.width(15),
  },
  modalTextTitle: {
    fontSize:Responsive.font(20),
    fontWeight: 'bold',
    marginBottom: Responsive.width(10),
  },
  modalTextDescription: {
    fontSize:Responsive.font(16),
    color: '#444',
  },
});

export default BottomModal;
