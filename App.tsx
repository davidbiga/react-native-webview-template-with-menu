import { StatusBar } from 'expo-status-bar';
import React from 'react';
import Constants from 'expo-constants';
import * as Notifications from 'expo-notifications';
import { SafeAreaProvider } from 'react-native-safe-area-context';
// Enable for firebase
// import messaging from '@react-native-firebase/messaging';

import useCachedResources from './hooks/useCachedResources';
import useColorScheme from './hooks/useColorScheme';
import Navigation from './navigation';

Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: false,
    shouldSetBadge: false,
  }),
});

 class AppSetup extends React.Component {
  state = {
    colorScheme: this.props.colorScheme
  };

  async componentDidMount() {
    // enable for firebase
    // await requestUserPermission();
  }

  render() {
    const colorScheme = this.state.colorScheme;
    return (
      <SafeAreaProvider>
        <Navigation colorScheme={colorScheme} />
        <StatusBar />
      </SafeAreaProvider>
    );
  }
}
export default function App() {
  const isLoadingComplete = useCachedResources();
  const colorScheme = useColorScheme();
  if (!isLoadingComplete) {
    return null;
  } else {
    return (
      <AppSetup colorScheme={colorScheme} />
    );
  }
}

// enable for firebase
// async function requestUserPermission() {
//   const authStatus = await messaging().requestPermission();
//   const enabled =
//     authStatus === messaging.AuthorizationStatus.AUTHORIZED ||
//     authStatus === messaging.AuthorizationStatus.PROVISIONAL;

//   if (enabled) {
//     getFcmToken();
//   }
// }


// async function getFcmToken() {
//   const fcmToken = await messaging().getToken();
//   if (fcmToken) {
//    console.log(fcmToken);
//    console.log("Your Firebase Token is:", fcmToken);
//   } else {
//    console.log("Failed", "No token received");
//   }
// }