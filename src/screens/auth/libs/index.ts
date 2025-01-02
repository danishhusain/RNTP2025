import axios from 'axios';
import { Alert } from 'react-native';
import applicationProperties from '../../../application.properties';
import MMKVKeys from '../../../constants/MmkvKeys';
import LocalStorage from '../../../factories/MmkvFactory';
import userStore from '../../../store/userStore';

const { updateToken } = userStore.getState();

interface EmailPassword {
  email: string
  password: string
}

interface LoginResponse {
  status: number
  data: {
    token: string
  }
}

const LogInScreenHelper = {
  // Function to handle login logic
  handleLogin: async ({ email, password }: EmailPassword): Promise<void> => {
    // Check if fields are filled
    if (!email || !password) {
      Alert.alert('Error', 'Please fill in both fields');
      return;
    }

    console.log('--->', `${applicationProperties.baseUrl}/user/login/`,)
    try {
      const response = await axios.post(
        `${applicationProperties.baseUrl}/user/login/`,
        {
          email,
          password,
        }
      );


      // Handle success response
      if (response?.status === 200 && response.data?.token) {

        console.log('--->', response.status)
        // Alert.alert("Success", "Logged in successfully");
        // showToast({
        //   type: 'success',
        //   text1: 'Logged in successfully',
        //   text2: 'Welcome 👋',
        // })

        // Update token in the store and local storage
        updateToken(response.data?.token);
        LocalStorage.setArray(MMKVKeys.Token, [response.data?.token]);

        return true;
      }
      Alert.alert('Login Failed', 'Invalid email or password');
    } catch (error) {
      Alert.alert('Error', 'Something went wrong, please try again');
    }
  },
};

export default LogInScreenHelper;
