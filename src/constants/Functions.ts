// import Geolocation, { } from '@react-native-community/geolocation';






export const getLocalDB = async () => {
};


export const getCurrentLocation = async () => {
  // try {
  //   const position = await new Promise<Geolocation.GeoPosition>((resolve, reject) => {
  //     Geolocation.getCurrentPosition(resolve, reject, {
  //       enableHighAccuracy: true,
  //       timeout: 15000,
  //       maximumAge: 10000,
  //     });
  //   });

  //   const { latitude, longitude } = position.coords;
  //   if (latitude && longitude) {
  //     console.log("location", latitude, longitude);
  //   }

  //   return { latitude, longitude };

  // } catch (error) {
  // }
};


export const getCurrentDate = () => {
  const today = new Date(); // Get the current date
  const day = String(today.getDate()).padStart(2, '0'); // Ensure 2 digits
  const month = String(today.getMonth() + 1).padStart(2, '0'); // Months are 0-based
  const year = today.getFullYear();

  return `${day}-${month}-${year}`; // Format as DD-MM-YYYY
};



