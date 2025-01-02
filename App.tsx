// import { StyleSheet, Text, View } from 'react-native'
// import React from 'react'

// const App = () => {
//   return (
//     <View>
//       <Text>App</Text>
//     </View>
//   )
// }

// export default App

// const styles = StyleSheet.create({})




import React, { useRef } from 'react';
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query';
import Routes from './src/navigations/Routes';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
// import SplashScreen from 'react-native-splash-screen';
import userStore from './src/store/userStore';

const queryClient = new QueryClient();





function App(): React.JSX.Element {
  // SplashScreen.hide();
  const renderCount = useRef(0);
  renderCount.current += 1;






  console.log(`App rendered ${renderCount.current} times`);
  return (
    <QueryClientProvider client={queryClient}>
      <GestureHandlerRootView>
        <Routes />
      </GestureHandlerRootView>
    </QueryClientProvider>
  );
}

export default App;











