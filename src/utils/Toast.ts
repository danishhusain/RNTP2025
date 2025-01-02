import { ToastAndroid } from 'react-native';







// Reusable toast function with error handling that runs only in debug mode
export function showToast(message: string, duration = ToastAndroid.SHORT) {
  try {
    if (typeof message !== 'string' || message.trim() === '') {
      throw new Error('Message must be a non-empty string');
    }
    // Show toast message in debug mode
    ToastAndroid.show(message, duration);
  } catch (error) {
    ToastAndroid.show('An error occurred while displaying the toast.', ToastAndroid.LONG);
  }
}
