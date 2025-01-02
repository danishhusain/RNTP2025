import React, { useState } from 'react';
import {
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import LogInScreenHelper from './libs';
import Button from '../../component/Button';
import Responsive from '../../constants/styles/Responsive';
import { COLORS } from '../../constants/styles/Theme';

function LogInScreen() {
  const [email, setEmail] = useState('a@gmail.com');
  const [password, setPassword] = useState('@KV0W6N11rVX');
  const [isLoading, setIsLoading] = useState(false);

  const handleLogin = async () => {
    // Call login function and set OTP box visible on success
    setIsLoading(true);
    await LogInScreenHelper.handleLogin({ email, password });
    setIsLoading(false);

  };



  return (
    <View style={styles.container}>
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />

      <View style={styles.container2}>
        {/* Conditional OTP Input */}

        <View style={styles.content}>
          <Text style={styles.text}>Log In</Text>
        </View>

        <TextInput
          style={styles.input}
          placeholder="Enter your email"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
          autoCapitalize="none"
          placeholderTextColor={COLORS.grey}
        />

        <TextInput
          style={styles.input}
          placeholder="Enter your password"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
          autoCapitalize="none"
          placeholderTextColor={COLORS.grey}
        />

        <Button
          label="Log In"
          onPress={handleLogin}
          isLoading={isLoading}
        />



        <View>
          <Text style={styles.versionText}>App version 0.0.1</Text>
        </View>
      </View>
    </View>
  );
}

export default LogInScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  container2: {
    flex: 1,
    margin: Responsive.width(10),
    justifyContent: 'center',
    alignContent: 'center',
  },
  imgBG: {
    flex: 1,
    justifyContent: 'center',
  },
  title: {
    fontSize: Responsive.font(28),
    fontWeight: 'bold',
    marginBottom: Responsive.width(20),
  },
  input: {
    width: '100%',
    padding: Responsive.width(10),
    borderWidth: Responsive.width(1),
    borderColor: COLORS.appHighlight,
    borderRadius: Responsive.width(5),
    marginBottom: Responsive.width(15),
    color: COLORS.white,
    fontWeight: '600',
  },
  button: {
    width: '100%',
    padding: Responsive.width(15),
    borderRadius: Responsive.width(5),
    alignItems: 'center',
  },
  buttonText: {
    color: COLORS.white,
    fontSize: Responsive.font(16),
    fontWeight: 'bold',
  },
  content: {
    paddingHorizontal: Responsive.width(20),
    paddingVertical: Responsive.width(12),
    alignItems: 'center',
  },
  text: {
    color: COLORS.appHighlight,
    fontWeight: '500',
    fontSize: Responsive.font(28),
    marginBottom: Responsive.width(20),
  },
  googleButtonContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: Responsive.width(10),
  },
  googleButtonText: {
    width: Responsive.width(192),
    height: Responsive.width(48),
  },
  versionText: {
    color: COLORS.white,
    alignSelf: 'center',
    top: Responsive.height(230),
  },
});
