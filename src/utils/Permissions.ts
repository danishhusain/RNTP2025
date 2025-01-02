import { PermissionsAndroid, Platform } from 'react-native';
import { getCurrentLocation } from '../constants/Functions';

export const getLocationPermission =  (async () => {
    if (Platform.OS === 'android') {
        const granted = await PermissionsAndroid.request(
            PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION
        );
        getCurrentLocation();
        return granted === PermissionsAndroid.RESULTS.GRANTED;
    }
    return true;
})();

// Function to check and throw error if permission is denied
export const checkLocationPermission = async () => {
    const permissionGranted = await getLocationPermission;
    if (!permissionGranted) {
        throw new Error('Location permission denied');
    }
};